import { create } from 'zustand';
import type { EditorSpecialization, EditorSettings, TeamMemberProfile } from '@/types';

// ============================================
// TYPES
// ============================================

interface EditorSettingsState {
  /** Map of editorId → { p1, p2 } specializations */
  settings: Record<string, EditorSettings>;

  /** Set P1 or P2 for a given editor */
  setSpecialization: (editorId: string, priority: 'p1' | 'p2', value: EditorSpecialization) => void;

  /** Get settings for a specific editor (returns defaults if not set) */
  getEditorSettings: (editorId: string) => EditorSettings;

  /** Sync editors list — ensures every editor has an entry, removes stale ones */
  syncEditors: (editors: TeamMemberProfile[]) => void;

  /** Get all editors with a specific P1 specialization */
  getEditorsByP1: (p1: EditorSpecialization) => string[];
}

// ============================================
// INITIAL DATA (matches screenshot editors)
// ============================================

const INITIAL_SETTINGS: Record<string, EditorSettings> = {
  u3: { editorId: 'u3', p1: 'design', p2: 'none' },
  u4: { editorId: 'u4', p1: 'video', p2: 'none' },
  u5: { editorId: 'u5', p1: 'design', p2: 'video' },
  u6: { editorId: 'u6', p1: 'design', p2: 'none' },
  u9: { editorId: 'u9', p1: 'video', p2: 'none' },
  u11: { editorId: 'u11', p1: 'none', p2: 'none' },
};

// ============================================
// STORE
// ============================================

export const useEditorSettingsStore = create<EditorSettingsState>((set, get) => ({
  settings: INITIAL_SETTINGS,

  setSpecialization: (editorId, priority, value) => {
    set((state) => {
      const current = state.settings[editorId] ?? { editorId, p1: 'none', p2: 'none' };
      return {
        settings: {
          ...state.settings,
          [editorId]: { ...current, [priority]: value },
        },
      };
    });
  },

  getEditorSettings: (editorId) => {
    return get().settings[editorId] ?? { editorId, p1: 'none', p2: 'none' };
  },

  syncEditors: (editors) => {
    set((state) => {
      const editorIds = new Set(editors.map((e) => e.id));
      const updated: Record<string, EditorSettings> = {};

      // Keep existing settings for current editors, add defaults for new ones
      for (const editor of editors) {
        updated[editor.id] = state.settings[editor.id] ?? {
          editorId: editor.id,
          p1: 'none',
          p2: 'none',
        };
      }

      // Only update if there's a difference (avoid unnecessary re-renders)
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
}));
