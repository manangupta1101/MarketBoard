import { create } from 'zustand';
import { createClient } from '@/lib/supabase/client';
import type { AvailabilityEntry } from '@/types';

interface AvailabilityState {
  entries: AvailabilityEntry[];
  isLoaded: boolean;

  /** Fetch all availability entries from Supabase */
  fetchEntries: () => Promise<void>;

  /** Add a new availability entry */
  addEntry: (entry: Omit<AvailabilityEntry, 'id' | 'createdAt'>) => Promise<void>;

  /** Remove an availability entry by id */
  removeEntry: (id: string) => Promise<void>;

  /** Get entries for a specific editor */
  getEntriesByEditor: (editorId: string) => AvailabilityEntry[];

  /** Get all entries that overlap with a specific date */
  getEntriesForDate: (date: string) => AvailabilityEntry[];

  /** Get entries for a date range (month view) */
  getEntriesForMonth: (year: number, month: number) => AvailabilityEntry[];
}

const pad = (n: number): string => n.toString().padStart(2, '0');

const dateOverlaps = (entryStart: string, entryEnd: string, checkDate: string): boolean => {
  return checkDate >= entryStart && checkDate <= entryEnd;
};

const monthOverlaps = (entryStart: string, entryEnd: string, monthStart: string, monthEnd: string): boolean => {
  return entryStart <= monthEnd && entryEnd >= monthStart;
};

export const useAvailabilityStore = create<AvailabilityState>((set, get) => ({
  entries: [],
  isLoaded: false,

  fetchEntries: async () => {
    const supabase = createClient();
    const { data } = await supabase
      .from('availability_entries')
      .select('*')
      .order('start_date', { ascending: true });

    if (!data) return;

    const entries: AvailabilityEntry[] = data.map((row) => ({
      id: row.id,
      editorId: row.editor_id,
      startDate: row.start_date,
      endDate: row.end_date,
      type: row.type,
      reason: row.reason,
      createdBy: row.created_by,
      createdAt: row.created_at,
    }));

    set({ entries, isLoaded: true });
  },

  addEntry: async (entry) => {
    const supabase = createClient();

    const { data, error } = await supabase.from('availability_entries').insert({
      editor_id: entry.editorId,
      start_date: entry.startDate,
      end_date: entry.endDate,
      type: entry.type,
      reason: entry.reason,
      created_by: entry.createdBy,
    }).select('id, created_at').single();

    if (error || !data) {
      console.error('Failed to add availability entry:', error?.message);
      return;
    }

    const newEntry: AvailabilityEntry = {
      ...entry,
      id: data.id,
      createdAt: data.created_at,
    };

    set((state) => ({ entries: [...state.entries, newEntry] }));
  },

  removeEntry: async (id) => {
    const supabase = createClient();
    await supabase.from('availability_entries').delete().eq('id', id);

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
