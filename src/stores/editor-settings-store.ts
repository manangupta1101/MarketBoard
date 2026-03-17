import { create } from 'zustand';
import { createClient } from '@/lib/supabase/client';
import type { EditorSpecialization, EditorSettings, TeamMemberProfile } from '@/types';

interface EditorSettingsState {
  /** Map of editorId → { p1, p2 } specializations */
  settings: Record<string, EditorSettings>;
  isLoaded: boolean;

  /** Fetch all editor settings from Supabase */
  fetchSettings: () => Promise<void>;

  /** Set P1 or P2 for a given editor */
  setSpecialization: (editorId: string, priority: 'p1' | 'p2', value: EditorSpecialization) => Promise<void>;

  /** Save both P1 and P2 in a single upsert (avoids race condition) */
  saveBothSpecializations: (editorId: string, p1: EditorSpecialization, p2: EditorSpecialization) => Promise<void>;

  /** Get settings for a specific editor (returns defaults if not set) */
  getEditorSettings: (editorId: string) => EditorSettings;

  /** Sync editors list — ensures every editor has an entry, removes stale ones */
  syncEditors: (editors: TeamMemberProfile[]) => void;

  /** Get all editors with a specific P1 specialization */
  getEditorsByP1: (p1: EditorSpecialization) => string[];

  /** Subscribe to realtime changes on editor_settings */
  subscribeRealtime: () => () => void;
}

export const useEditorSettingsStore = create<EditorSettingsState>((set, get) => ({
  settings: {},
  isLoaded: false,

  fetchSettings: async () => {
    const supabase = createClient();
    const { data } = await supabase
      .from('editor_settings')
      .select('editor_id, p1, p2');

    if (!data) return;

    const settings: Record<string, EditorSettings> = {};
    for (const row of data) {
      settings[row.editor_id] = {
        editorId: row.editor_id,
        p1: row.p1 as EditorSpecialization,
        p2: row.p2 as EditorSpecialization,
      };
    }

    set({ settings, isLoaded: true });
  },

  setSpecialization: async (editorId, priority, value) => {
    const supabase = createClient();
    const current = get().settings[editorId] ?? { editorId, p1: 'none', p2: 'none' };
    const updated = { ...current, [priority]: value };

    await supabase.from('editor_settings').upsert({
      editor_id: editorId,
      p1: updated.p1,
      p2: updated.p2,
    });

    set((state) => ({
      settings: {
        ...state.settings,
        [editorId]: updated,
      },
    }));
  },

  saveBothSpecializations: async (editorId, p1, p2) => {
    const supabase = createClient();
    const updated: EditorSettings = { editorId, p1, p2 };

    await supabase.from('editor_settings').upsert({
      editor_id: editorId,
      p1,
      p2,
    });

    set((state) => ({
      settings: {
        ...state.settings,
        [editorId]: updated,
      },
    }));
  },

  getEditorSettings: (editorId) => {
    return get().settings[editorId] ?? { editorId, p1: 'none' as EditorSpecialization, p2: 'none' as EditorSpecialization };
  },

  syncEditors: (editors) => {
    set((state) => {
      const editorIds = new Set(editors.map((e) => e.id));
      const updated: Record<string, EditorSettings> = {};

      for (const editor of editors) {
        updated[editor.id] = state.settings[editor.id] ?? {
          editorId: editor.id,
          p1: 'none' as EditorSpecialization,
          p2: 'none' as EditorSpecialization,
        };
      }

      const existingIds = Object.keys(state.settings);
      const hasChange =
        existingIds.length !== editorIds.size ||
        existingIds.some((id) => !editorIds.has(id));

      return hasChange ? { settings: updated } : state;
    });
  },

  getEditorsByP1: (p1) => {
    const allSettings = get().settings;
    return Object.values(allSettings)
      .filter((s) => s.p1 === p1)
      .map((s) => s.editorId);
  },

  subscribeRealtime: () => {
    const supabase = createClient();
    const channel = supabase
      .channel('editor-settings-changes')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'editor_settings' },
        (payload) => {
          if (payload.eventType === 'INSERT' || payload.eventType === 'UPDATE') {
            const row = payload.new as { editor_id: string; p1: string; p2: string };
            set((state) => ({
              settings: {
                ...state.settings,
                [row.editor_id]: {
                  editorId: row.editor_id,
                  p1: row.p1 as EditorSpecialization,
                  p2: row.p2 as EditorSpecialization,
                },
              },
            }));
          } else if (payload.eventType === 'DELETE') {
            const row = payload.old as { editor_id: string };
            set((state) => {
              const updated = { ...state.settings };
              delete updated[row.editor_id];
              return { settings: updated };
            });
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  },
}));
