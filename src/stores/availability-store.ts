import { create } from 'zustand';
import type { AvailabilityEntry, AvailabilityType } from '@/types';

// ============================================
// TYPES
// ============================================

interface AvailabilityState {
  entries: AvailabilityEntry[];

  /** Add a new availability entry */
  addEntry: (entry: Omit<AvailabilityEntry, 'id' | 'createdAt'>) => void;

  /** Remove an availability entry by id */
  removeEntry: (id: string) => void;

  /** Get entries for a specific editor */
  getEntriesByEditor: (editorId: string) => AvailabilityEntry[];

  /** Get all entries that overlap with a specific date */
  getEntriesForDate: (date: string) => AvailabilityEntry[];

  /** Get entries for a date range (month view) */
  getEntriesForMonth: (year: number, month: number) => AvailabilityEntry[];
}

// ============================================
// HELPERS
// ============================================

const generateId = (): string => `avail_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;

const dateOverlaps = (entryStart: string, entryEnd: string, checkDate: string): boolean => {
  return checkDate >= entryStart && checkDate <= entryEnd;
};

const monthOverlaps = (entryStart: string, entryEnd: string, monthStart: string, monthEnd: string): boolean => {
  return entryStart <= monthEnd && entryEnd >= monthStart;
};

// ============================================
// SEED DATA (demo entries)
// ============================================

const today = new Date();
const year = today.getFullYear();
const month = today.getMonth();

const pad = (n: number): string => n.toString().padStart(2, '0');
const makeDate = (y: number, m: number, d: number): string => `${y}-${pad(m + 1)}-${pad(d)}`;

const SEED_ENTRIES: AvailabilityEntry[] = [
  {
    id: 'avail_seed_1',
    editorId: 'u3',
    startDate: makeDate(year, month, 10),
    endDate: makeDate(year, month, 12),
    type: 'unavailable',
    reason: 'Vacation',
    createdBy: 'u1',
    createdAt: new Date().toISOString(),
  },
  {
    id: 'avail_seed_2',
    editorId: 'u4',
    startDate: makeDate(year, month, 18),
    endDate: makeDate(year, month, 18),
    type: 'unavailable',
    reason: 'Personal leave',
    createdBy: 'u1',
    createdAt: new Date().toISOString(),
  },
  {
    id: 'avail_seed_3',
    editorId: 'u5',
    startDate: makeDate(year, month, 5),
    endDate: makeDate(year, month, 5),
    type: 'partial',
    reason: 'Doctor appointment',
    createdBy: 'u2',
    createdAt: new Date().toISOString(),
  },
  {
    id: 'avail_seed_4',
    editorId: 'u9',
    startDate: makeDate(year, month, 20),
    endDate: makeDate(year, month, 22),
    type: 'overtime',
    reason: 'Project deadline',
    createdBy: 'u1',
    createdAt: new Date().toISOString(),
  },
];

// ============================================
// STORE
// ============================================

export const useAvailabilityStore = create<AvailabilityState>((set, get) => ({
  entries: SEED_ENTRIES,

  addEntry: (entry) => {
    const newEntry: AvailabilityEntry = {
      ...entry,
      id: generateId(),
      createdAt: new Date().toISOString(),
    };
    set((state) => ({ entries: [...state.entries, newEntry] }));
  },

  removeEntry: (id) => {
    set((state) => ({ entries: state.entries.filter((e) => e.id !== id) }));
  },

  getEntriesByEditor: (editorId) => {
    return get().entries.filter((e) => e.editorId === editorId);
  },

  getEntriesForDate: (date) => {
    return get().entries.filter((e) => dateOverlaps(e.startDate, e.endDate, date));
  },

  getEntriesForMonth: (year, month) => {
    const monthStart = `${year}-${pad(month)}-01`;
    const lastDay = new Date(year, month, 0).getDate();
    const monthEnd = `${year}-${pad(month)}-${pad(lastDay)}`;
    return get().entries.filter((e) => monthOverlaps(e.startDate, e.endDate, monthStart, monthEnd));
  },
}));
