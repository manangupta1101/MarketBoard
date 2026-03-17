import { create } from 'zustand';
import { createClient } from '@/lib/supabase/client';
import type { AppRole, TeamMemberProfile } from '@/types';

interface AuthState {
  user: TeamMemberProfile | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;

  /** Initialize auth from Supabase session — call once on app mount */
  initialize: () => Promise<void>;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (name: string, email: string, password: string) => Promise<{ success: boolean; needsVerification: boolean }>;
  logout: () => Promise<void>;
  clearError: () => void;
  updateRole: (role: AppRole) => void;
  /** Reload profile from DB (e.g., after role change) */
  refreshProfile: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set, get) => ({
  user: null,
  isAuthenticated: false,
  isLoading: true,
  error: null,

  initialize: async () => {
    const supabase = createClient();
    set({ isLoading: true });

    try {
      const { data: { user: authUser } } = await supabase.auth.getUser();

      if (!authUser) {
        set({ user: null, isAuthenticated: false, isLoading: false });
        return;
      }

      // Fetch profile from DB
      const { data: profile, error } = await supabase
        .from('profiles')
        .select('id, full_name, email, role')
        .eq('id', authUser.id)
        .single();

      if (error || !profile) {
        set({ user: null, isAuthenticated: false, isLoading: false });
        return;
      }

      set({
        user: {
          id: profile.id,
          name: profile.full_name,
          email: profile.email,
          role: profile.role as AppRole,
        },
        isAuthenticated: true,
        isLoading: false,
        error: null,
      });
    } catch {
      set({ user: null, isAuthenticated: false, isLoading: false });
    }
  },

  login: async (email: string, password: string): Promise<boolean> => {
    const supabase = createClient();
    set({ isLoading: true, error: null });

    // Check if email is blocked (removed from team)
    const { data: blocked } = await supabase
      .from('removed_emails')
      .select('email')
      .eq('email', email.toLowerCase())
      .maybeSingle();

    if (blocked) {
      set({
        error: 'This account has been removed. Contact your team owner for a re-registration OTP.',
        isLoading: false,
      });
      return false;
    }

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      set({ error: error.message, isLoading: false });
      return false;
    }

    if (!data.user) {
      set({ error: 'Login failed', isLoading: false });
      return false;
    }

    // Fetch profile
    const { data: profile } = await supabase
      .from('profiles')
      .select('id, full_name, email, role')
      .eq('id', data.user.id)
      .single();

    if (!profile) {
      set({ error: 'Profile not found', isLoading: false });
      return false;
    }

    set({
      user: {
        id: profile.id,
        name: profile.full_name,
        email: profile.email,
        role: profile.role as AppRole,
      },
      isAuthenticated: true,
      isLoading: false,
      error: null,
    });

    return true;
  },

  signup: async (
    name: string,
    email: string,
    password: string
  ): Promise<{ success: boolean; needsVerification: boolean }> => {
    const supabase = createClient();
    set({ isLoading: true, error: null });

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { full_name: name, role: 'member' },
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      },
    });

    if (error) {
      set({ error: error.message, isLoading: false });
      return { success: false, needsVerification: false };
    }

    set({ isLoading: false, error: null });

    // If identities is empty, user already exists
    if (data.user && data.user.identities && data.user.identities.length === 0) {
      set({ error: 'An account with this email already exists' });
      return { success: false, needsVerification: false };
    }

    // Email confirmation required
    return { success: true, needsVerification: true };
  },

  logout: async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    set({ user: null, isAuthenticated: false, error: null });
  },

  clearError: () => {
    set({ error: null });
  },

  updateRole: (role: AppRole) => {
    set((state) => {
      if (!state.user) return state;
      return { user: { ...state.user, role } };
    });
  },

  refreshProfile: async () => {
    const supabase = createClient();
    const { data: { user: authUser } } = await supabase.auth.getUser();
    if (!authUser) return;

    const { data: profile } = await supabase
      .from('profiles')
      .select('id, full_name, email, role')
      .eq('id', authUser.id)
      .single();

    if (profile) {
      set({
        user: {
          id: profile.id,
          name: profile.full_name,
          email: profile.email,
          role: profile.role as AppRole,
        },
      });
    }
  },
}));
