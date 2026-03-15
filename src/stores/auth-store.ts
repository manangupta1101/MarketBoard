import { create } from 'zustand';
import type { AppRole, TeamMemberProfile } from '@/types';

interface AuthState {
  user: TeamMemberProfile | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  login: (email: string, password: string) => boolean;
  signup: (name: string, email: string, password: string) => boolean;
  logout: () => void;
  clearError: () => void;
}

// Mock user database — matches the screenshot team
const MOCK_USERS: Record<string, { id: string; name: string; role: AppRole; password: string }> = {
  'manan.gupta@adda247.com': { id: 'u1', name: 'Manan', role: 'owner', password: 'admin123' },
  'akshata.jadhav@adda247.com': { id: 'u2', name: 'Akshata Jadhav', role: 'admin', password: 'admin123' },
  'priyanshu.khandelwal@adda247.com': { id: 'u3', name: 'Priyanshu Khandelwal', role: 'editor', password: 'editor123' },
  'simarpreet.singh@adda247.com': { id: 'u4', name: 'Simarpreet Singh', role: 'editor', password: 'editor123' },
  'faizan@adda247.com': { id: 'u5', name: 'Faizan', role: 'editor', password: 'editor123' },
  'akasthiyan.r@adda247.com': { id: 'u6', name: 'Akasthiyan Ramachandran', role: 'editor', password: 'editor123' },
  'sanjay.s@adda247.com': { id: 'u7', name: 'Sanjay', role: 'member', password: 'member123' },
  'janpreet.ch@adda247.com': { id: 'u8', name: 'Janpreet', role: 'member', password: 'member123' },
  'pushpak.pr@adda247.com': { id: 'u9', name: 'Pushpak', role: 'editor', password: 'editor123' },
  'rejaul.mon@adda247.com': { id: 'u10', name: 'Sheikh Rejaul', role: 'admin', password: 'admin123' },
};

// Track dynamically signed-up users
const dynamicUsers: Record<string, { id: string; name: string; role: AppRole; password: string }> = {};

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,

  login: (email: string, password: string): boolean => {
    const lower = email.toLowerCase();
    const mockUser = MOCK_USERS[lower] || dynamicUsers[lower];

    if (!mockUser) {
      set({ error: 'No account found with this email' });
      return false;
    }

    if (mockUser.password !== password) {
      set({ error: 'Incorrect password' });
      return false;
    }

    set({
      user: { id: mockUser.id, name: mockUser.name, email: lower, role: mockUser.role },
      isAuthenticated: true,
      isLoading: false,
      error: null,
    });
    return true;
  },

  signup: (name: string, email: string, password: string): boolean => {
    const lower = email.toLowerCase();

    if (MOCK_USERS[lower] || dynamicUsers[lower]) {
      set({ error: 'An account with this email already exists' });
      return false;
    }

    const newUser = {
      id: `u_${Date.now()}`,
      name,
      role: 'member' as AppRole,
      password,
    };

    dynamicUsers[lower] = newUser;

    set({ error: null });
    return true;
  },

  logout: () => {
    set({ user: null, isAuthenticated: false, error: null });
  },

  clearError: () => {
    set({ error: null });
  },
}));

// Export mock users for team store initialization
export const getMockUsers = (): TeamMemberProfile[] => {
  const all = { ...MOCK_USERS, ...dynamicUsers };
  return Object.entries(all).map(([email, u]) => ({
    id: u.id,
    name: u.name,
    email,
    role: u.role,
  }));
};
