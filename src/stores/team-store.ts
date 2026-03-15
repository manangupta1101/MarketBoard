import { create } from 'zustand';
import type { AppRole, TeamMemberProfile } from '@/types';

interface TeamState {
  members: TeamMemberProfile[];
  addMember: (member: TeamMemberProfile) => void;
  removeMember: (id: string) => void;
  updateRole: (id: string, role: AppRole) => void;
  getMemberById: (id: string) => TeamMemberProfile | undefined;
  getEditors: () => TeamMemberProfile[];
}

// Initial team matching the screenshots
const INITIAL_MEMBERS: TeamMemberProfile[] = [
  { id: 'u1', name: 'Manan', email: 'manan.gupta@adda247.com', role: 'owner' },
  { id: 'u2', name: 'Akshata Jadhav', email: 'akshata.jadhav@adda247.com', role: 'admin' },
  { id: 'u3', name: 'Priyanshu Khandelwal', email: 'priyanshu.khandelwal@adda247.com', role: 'editor' },
  { id: 'u4', name: 'Simarpreet Singh', email: 'simarpreet.singh@adda247.com', role: 'editor' },
  { id: 'u5', name: 'Faizan', email: 'faizan@adda247.com', role: 'editor' },
  { id: 'u6', name: 'Akasthiyan Ramachandran', email: 'akasthiyan.r@adda247.com', role: 'editor' },
  { id: 'u7', name: 'Sanjay', email: 'sanjay.s@adda247.com', role: 'member' },
  { id: 'u8', name: 'Janpreet', email: 'janpreet.ch@adda247.com', role: 'member' },
  { id: 'u9', name: 'Pushpak', email: 'pushpak.pr@adda247.com', role: 'editor' },
  { id: 'u10', name: 'Sheikh Rejaul', email: 'rejaul.mon@adda247.com', role: 'admin' },
  { id: 'u11', name: 'Rahul Kumar', email: 'rahul.kumar@adda247.com', role: 'editor' },
];

export const useTeamStore = create<TeamState>((set, get) => ({
  members: INITIAL_MEMBERS,

  addMember: (member) => {
    set((state) => {
      if (state.members.some((m) => m.id === member.id)) return state;
      return { members: [...state.members, member] };
    });
  },

  removeMember: (id) => {
    set((state) => ({ members: state.members.filter((m) => m.id !== id) }));
  },

  updateRole: (id, role) => {
    set((state) => ({
      members: state.members.map((m) => (m.id === id ? { ...m, role } : m)),
    }));
  },

  getMemberById: (id) => {
    return get().members.find((m) => m.id === id);
  },

  getEditors: () => {
    return get().members.filter((m) => m.role === 'editor');
  },
}));
