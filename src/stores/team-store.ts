import { create } from 'zustand';
import { createClient } from '@/lib/supabase/client';
import type { AppRole, TeamMemberProfile } from '@/types';

/** Tracks when a member was last assigned a task or had activity */
export interface MemberActivity {
  memberId: string;
  lastTaskAssignedAt: string | null;
  /** If true, member was previously an editor and got promoted — keep metrics data */
  preserveMetrics: boolean;
}

interface TeamState {
  members: TeamMemberProfile[];
  memberActivity: Record<string, MemberActivity>;
  isLoaded: boolean;

  /** Fetch all profiles from Supabase */
  fetchMembers: () => Promise<void>;
  /** Fetch member activity from Supabase */
  fetchActivity: () => Promise<void>;
  /** Subscribe to realtime changes on profiles */
  subscribeRealtime: () => () => void;

  addMember: (member: TeamMemberProfile) => void;
  removeMember: (id: string) => Promise<void>;
  updateRole: (id: string, role: AppRole, preserveMetrics?: boolean) => Promise<void>;
  getMemberById: (id: string) => TeamMemberProfile | undefined;
  getEditors: () => TeamMemberProfile[];
  getAdmins: () => TeamMemberProfile[];

  // Activity tracking
  recordTaskAssignment: (memberId: string) => Promise<void>;
  isInactive: (memberId: string, days?: number) => boolean;
  getActiveEditors: () => TeamMemberProfile[];
}

const INACTIVITY_THRESHOLD_DAYS = 20;

export const useTeamStore = create<TeamState>((set, get) => ({
  members: [],
  memberActivity: {},
  isLoaded: false,

  fetchMembers: async () => {
    const supabase = createClient();
    const { data, error } = await supabase
      .from('profiles')
      .select('id, full_name, email, role')
      .order('created_at', { ascending: true });

    if (error || !data) return;

    const members: TeamMemberProfile[] = data.map((p) => ({
      id: p.id,
      name: p.full_name,
      email: p.email,
      role: p.role as AppRole,
    }));

    set({ members, isLoaded: true });
  },

  fetchActivity: async () => {
    const supabase = createClient();
    const { data } = await supabase
      .from('member_activity')
      .select('member_id, last_task_assigned_at, preserve_metrics');

    if (!data) return;

    const activity: Record<string, MemberActivity> = {};
    for (const row of data) {
      activity[row.member_id] = {
        memberId: row.member_id,
        lastTaskAssignedAt: row.last_task_assigned_at,
        preserveMetrics: row.preserve_metrics,
      };
    }
    set({ memberActivity: activity });
  },

  subscribeRealtime: () => {
    const supabase = createClient();
    const channel = supabase
      .channel('profiles-changes')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'profiles' },
        (payload) => {
          if (payload.eventType === 'INSERT') {
            const p = payload.new as { id: string; full_name: string; email: string; role: string };
            set((state) => {
              if (state.members.some((m) => m.id === p.id)) return state;
              return {
                members: [...state.members, { id: p.id, name: p.full_name, email: p.email, role: p.role as AppRole }],
              };
            });
          } else if (payload.eventType === 'UPDATE') {
            const p = payload.new as { id: string; full_name: string; email: string; role: string };
            set((state) => ({
              members: state.members.map((m) =>
                m.id === p.id ? { ...m, name: p.full_name, email: p.email, role: p.role as AppRole } : m
              ),
            }));
          } else if (payload.eventType === 'DELETE') {
            const p = payload.old as { id: string };
            set((state) => ({
              members: state.members.filter((m) => m.id !== p.id),
            }));
          }
        }
      )
      .subscribe();

    // Return unsubscribe function
    return () => {
      supabase.removeChannel(channel);
    };
  },

  addMember: (member) => {
    set((state) => {
      if (state.members.some((m) => m.id === member.id)) return state;
      return { members: [...state.members, member] };
    });
  },

  removeMember: async (id) => {
    const supabase = createClient();

    // Remove member's profile role won't actually delete — just remove from local state
    // The actual user deletion happens through admin actions
    set((state) => ({ members: state.members.filter((m) => m.id !== id) }));

    // Clean up member activity
    await supabase.from('member_activity').delete().eq('member_id', id);
  },

  updateRole: async (id, role, preserveMetrics = false) => {
    const supabase = createClient();

    // Update in DB
    await supabase
      .from('profiles')
      .update({ role })
      .eq('id', id);

    // Update member activity preserve flag
    if (preserveMetrics) {
      await supabase
        .from('member_activity')
        .upsert({
          member_id: id,
          preserve_metrics: true,
          last_task_assigned_at: get().memberActivity[id]?.lastTaskAssignedAt ?? null,
        });
    }

    // Update local state
    set((state) => ({
      members: state.members.map((m) => (m.id === id ? { ...m, role } : m)),
      memberActivity: {
        ...state.memberActivity,
        [id]: {
          ...state.memberActivity[id],
          memberId: id,
          preserveMetrics: preserveMetrics || state.memberActivity[id]?.preserveMetrics || false,
        },
      },
    }));
  },

  getMemberById: (id) => {
    return get().members.find((m) => m.id === id);
  },

  getEditors: () => {
    return get().members.filter((m) => m.role === 'editor');
  },

  getAdmins: () => {
    return get().members.filter((m) => m.role === 'admin');
  },

  // ── Activity Tracking ───────────────────────────────────────────────

  recordTaskAssignment: async (memberId: string) => {
    const supabase = createClient();
    const now = new Date().toISOString();

    await supabase
      .from('member_activity')
      .upsert({
        member_id: memberId,
        last_task_assigned_at: now,
        preserve_metrics: get().memberActivity[memberId]?.preserveMetrics ?? false,
      });

    set((state) => ({
      memberActivity: {
        ...state.memberActivity,
        [memberId]: {
          ...state.memberActivity[memberId],
          memberId,
          lastTaskAssignedAt: now,
        },
      },
    }));
  },

  isInactive: (memberId: string, days = INACTIVITY_THRESHOLD_DAYS): boolean => {
    const activity = get().memberActivity[memberId];
    if (!activity?.lastTaskAssignedAt) return true;

    const lastActive = new Date(activity.lastTaskAssignedAt);
    const cutoff = new Date();
    cutoff.setDate(cutoff.getDate() - days);

    return lastActive < cutoff;
  },

  getActiveEditors: () => {
    const state = get();
    return state.members.filter((m) => {
      if (m.role !== 'editor') return false;
      return !state.isInactive(m.id);
    });
  },
}));
