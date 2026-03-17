import { create } from 'zustand';
import { createClient } from '@/lib/supabase/client';
import type { Note, NoteFolder, NoteSpace, SpaceMember } from '@/types/notes';

interface NotesState {
  spaces: NoteSpace[];
  folders: NoteFolder[];
  notes: Note[];
  activeNoteId: string | null;
  activeSpaceId: string | null;
  expandedFolders: Set<string>;
  expandedSpaces: Set<string>;
  expandedNotes: Set<string>;

  // Fetch from DB
  fetchNotes: () => Promise<void>;

  // Space actions
  createSpace: (space: NoteSpace) => Promise<void>;
  updateSpace: (id: string, updates: Partial<NoteSpace>) => void;
  deleteSpace: (id: string) => Promise<void>;
  addSpaceMember: (spaceId: string, member: SpaceMember) => Promise<void>;
  removeSpaceMember: (spaceId: string, userId: string) => Promise<void>;
  updateSpaceMemberRole: (spaceId: string, userId: string, role: SpaceMember['role']) => Promise<void>;

  // Folder actions
  createFolder: (folder: NoteFolder) => Promise<void>;
  renameFolder: (id: string, name: string) => void;
  deleteFolder: (id: string) => Promise<void>;

  // Note actions
  createNote: (note: Note) => Promise<void>;
  updateNote: (id: string, updates: Partial<Note>) => void;
  deleteNote: (id: string) => Promise<void>;

  // Navigation
  setActiveNote: (id: string | null) => void;
  setActiveSpace: (id: string | null) => void;
  toggleFolder: (id: string) => void;
  toggleSpace: (id: string) => void;
  toggleNote: (id: string) => void;

  // Realtime
  subscribeRealtime: () => () => void;

  // Queries
  getSpacesForUser: (userId: string, userRole: string) => NoteSpace[];
  getFoldersInSpace: (spaceId: string, parentFolderId?: string | null) => NoteFolder[];
  getNotesInFolder: (spaceId: string, folderId: string | null) => Note[];
  getNoteById: (id: string) => Note | undefined;
  getSpaceById: (id: string) => NoteSpace | undefined;
}

// ── DB row → app type mappers ────────────────────────────

interface DbSpace {
  id: string;
  name: string;
  type: string;
  description: string;
  created_by: string;
  owner_id: string | null;
  icon: string;
  created_at: string;
}

interface DbMember {
  id: string;
  space_id: string;
  user_id: string;
  role: string;
  added_at: string;
  profiles: { full_name: string } | null;
}

interface DbFolder {
  id: string;
  space_id: string;
  parent_folder_id: string | null;
  name: string;
  created_by: string;
  icon: string;
  created_at: string;
  profiles: { full_name: string } | null;
}

interface DbNote {
  id: string;
  space_id: string;
  folder_id: string | null;
  parent_note_id: string | null;
  title: string;
  content: string;
  created_by: string;
  last_edited_by: string;
  is_script: boolean;
  tags: string[];
  created_at: string;
  updated_at: string;
  creator: { full_name: string } | null;
  editor: { full_name: string } | null;
}

const mapSpace = (row: DbSpace, members: SpaceMember[]): NoteSpace => ({
  id: row.id,
  name: row.name,
  type: row.type as NoteSpace['type'],
  description: row.description,
  createdById: row.created_by,
  createdByName: '', // filled in after join
  createdAt: row.created_at,
  ownerId: row.owner_id,
  members,
  icon: row.icon,
});

const mapFolder = (row: DbFolder): NoteFolder => ({
  id: row.id,
  spaceId: row.space_id,
  parentFolderId: row.parent_folder_id,
  name: row.name,
  createdById: row.created_by,
  createdByName: row.profiles?.full_name ?? 'Unknown',
  createdAt: row.created_at,
  icon: row.icon,
});

const mapNote = (row: DbNote): Note => ({
  id: row.id,
  spaceId: row.space_id,
  folderId: row.folder_id,
  parentNoteId: row.parent_note_id,
  title: row.title,
  content: row.content,
  createdById: row.created_by,
  createdByName: row.creator?.full_name ?? 'Unknown',
  createdAt: row.created_at,
  updatedAt: row.updated_at,
  lastEditedById: row.last_edited_by,
  lastEditedByName: row.editor?.full_name ?? 'Unknown',
  isScript: row.is_script,
  tags: row.tags ?? [],
});

// Debounce timer for note content saves
let saveTimers: Record<string, ReturnType<typeof setTimeout>> = {};

export const useNotesStore = create<NotesState>((set, get) => ({
  spaces: [],
  folders: [],
  notes: [],
  activeNoteId: null,
  activeSpaceId: null,
  expandedFolders: new Set<string>(),
  expandedSpaces: new Set<string>(),
  expandedNotes: new Set<string>(),

  // ── Fetch all notes data ──────────────────────────────
  fetchNotes: async () => {
    const supabase = createClient();

    const [spacesRes, membersRes, foldersRes, notesRes] = await Promise.all([
      supabase.from('note_spaces').select('*, profiles:created_by(full_name)'),
      supabase.from('note_space_members').select('*, profiles:user_id(full_name)'),
      supabase.from('note_folders').select('*, profiles:created_by(full_name)'),
      supabase.from('notes').select('*, creator:created_by(full_name), editor:last_edited_by(full_name)'),
    ]);

    // Build members map: spaceId → SpaceMember[]
    const membersMap = new Map<string, SpaceMember[]>();
    if (membersRes.data) {
      for (const m of membersRes.data as DbMember[]) {
        const list = membersMap.get(m.space_id) ?? [];
        list.push({
          userId: m.user_id,
          userName: m.profiles?.full_name ?? 'Unknown',
          role: m.role as SpaceMember['role'],
          addedAt: m.added_at,
        });
        membersMap.set(m.space_id, list);
      }
    }

    const spaces = (spacesRes.data ?? []).map((row: DbSpace & { profiles: { full_name: string } | null }) => {
      const s = mapSpace(row, membersMap.get(row.id) ?? []);
      s.createdByName = row.profiles?.full_name ?? 'Unknown';
      return s;
    });

    const folders = (foldersRes.data ?? []).map((row: DbFolder) => mapFolder(row));
    const notes = (notesRes.data ?? []).map((row: DbNote) => mapNote(row));

    // Auto-create personal space if user doesn't have one
    const { data: { user: authUser } } = await supabase.auth.getUser();
    if (authUser) {
      const hasPersonal = spaces.some((s: NoteSpace) => s.type === 'personal' && s.ownerId === authUser.id);
      if (!hasPersonal) {
        const { data: newSpace } = await supabase
          .from('note_spaces')
          .insert({
            name: 'My Notes',
            type: 'personal',
            description: 'Private notes',
            created_by: authUser.id,
            owner_id: authUser.id,
            icon: '📝',
          })
          .select()
          .single();

        if (newSpace) {
          spaces.push(mapSpace(newSpace as DbSpace, []));
        }
      }
    }

    // Auto-expand spaces that have content
    const spaceIds = new Set(spaces.map((s: NoteSpace) => s.id));

    set({
      spaces,
      folders,
      notes,
      expandedSpaces: spaceIds,
    });
  },

  // ── Space actions ──────────────────────────────────────
  createSpace: async (space) => {
    const supabase = createClient();

    const { data, error } = await supabase
      .from('note_spaces')
      .insert({
        name: space.name,
        type: space.type,
        description: space.description,
        created_by: space.createdById,
        owner_id: space.ownerId,
        icon: space.icon,
      })
      .select()
      .single();

    if (error || !data) {
      console.error('Failed to create space:', error?.message);
      return;
    }

    const newSpace: NoteSpace = {
      ...space,
      id: data.id,
      createdAt: data.created_at,
    };

    // Insert members (skip the creator — they're the space owner)
    if (space.members.length > 0) {
      const memberRows = space.members.map((m) => ({
        space_id: data.id,
        user_id: m.userId,
        role: m.role,
      }));
      await supabase.from('note_space_members').insert(memberRows);
    }

    set((state) => ({
      spaces: [...state.spaces, newSpace],
      expandedSpaces: new Set([...state.expandedSpaces, data.id]),
    }));
  },

  updateSpace: (id, updates) => {
    set((state) => ({
      spaces: state.spaces.map((s) => (s.id === id ? { ...s, ...updates } : s)),
    }));

    // Async DB update (fire and forget)
    const supabase = createClient();
    const dbUpdates: Record<string, unknown> = {};
    if (updates.name !== undefined) dbUpdates.name = updates.name;
    if (updates.description !== undefined) dbUpdates.description = updates.description;
    if (updates.icon !== undefined) dbUpdates.icon = updates.icon;
    if (Object.keys(dbUpdates).length > 0) {
      supabase.from('note_spaces').update(dbUpdates).eq('id', id).then();
    }
  },

  deleteSpace: async (id) => {
    set((state) => ({
      spaces: state.spaces.filter((s) => s.id !== id),
      folders: state.folders.filter((f) => f.spaceId !== id),
      notes: state.notes.filter((n) => n.spaceId !== id),
    }));

    const supabase = createClient();
    await supabase.from('note_spaces').delete().eq('id', id);
  },

  addSpaceMember: async (spaceId, member) => {
    // Optimistic update
    set((state) => ({
      spaces: state.spaces.map((s) => {
        if (s.id !== spaceId) return s;
        if (s.members.some((m) => m.userId === member.userId)) return s;
        return { ...s, members: [...s.members, member] };
      }),
    }));

    const supabase = createClient();
    await supabase.from('note_space_members').insert({
      space_id: spaceId,
      user_id: member.userId,
      role: member.role,
    });
  },

  removeSpaceMember: async (spaceId, userId) => {
    set((state) => ({
      spaces: state.spaces.map((s) =>
        s.id === spaceId
          ? { ...s, members: s.members.filter((m) => m.userId !== userId) }
          : s
      ),
    }));

    const supabase = createClient();
    await supabase
      .from('note_space_members')
      .delete()
      .eq('space_id', spaceId)
      .eq('user_id', userId);
  },

  updateSpaceMemberRole: async (spaceId, userId, role) => {
    set((state) => ({
      spaces: state.spaces.map((s) =>
        s.id === spaceId
          ? {
              ...s,
              members: s.members.map((m) =>
                m.userId === userId ? { ...m, role } : m
              ),
            }
          : s
      ),
    }));

    const supabase = createClient();
    await supabase
      .from('note_space_members')
      .update({ role })
      .eq('space_id', spaceId)
      .eq('user_id', userId);
  },

  // ── Folder actions ─────────────────────────────────────
  createFolder: async (folder) => {
    const supabase = createClient();

    const { data, error } = await supabase
      .from('note_folders')
      .insert({
        space_id: folder.spaceId,
        parent_folder_id: folder.parentFolderId,
        name: folder.name,
        created_by: folder.createdById,
        icon: folder.icon,
      })
      .select()
      .single();

    if (error || !data) {
      console.error('Failed to create folder:', error?.message);
      return;
    }

    const newFolder: NoteFolder = {
      ...folder,
      id: data.id,
      createdAt: data.created_at,
    };

    set((state) => ({ folders: [...state.folders, newFolder] }));
  },

  renameFolder: (id, name) => {
    set((state) => ({
      folders: state.folders.map((f) => (f.id === id ? { ...f, name } : f)),
    }));

    const supabase = createClient();
    supabase.from('note_folders').update({ name }).eq('id', id).then();
  },

  deleteFolder: async (id) => {
    const { folders, notes } = get();
    const idsToDelete = new Set<string>([id]);

    // Find all descendant folders
    let found = true;
    while (found) {
      found = false;
      for (const f of folders) {
        if (f.parentFolderId && idsToDelete.has(f.parentFolderId) && !idsToDelete.has(f.id)) {
          idsToDelete.add(f.id);
          found = true;
        }
      }
    }

    set({
      folders: folders.filter((f) => !idsToDelete.has(f.id)),
      notes: notes.filter((n) => !n.folderId || !idsToDelete.has(n.folderId)),
    });

    // DB cascade handles children via ON DELETE CASCADE
    const supabase = createClient();
    await supabase.from('note_folders').delete().eq('id', id);
  },

  // ── Note actions ───────────────────────────────────────
  createNote: async (note) => {
    const supabase = createClient();

    const { data, error } = await supabase
      .from('notes')
      .insert({
        space_id: note.spaceId,
        folder_id: note.folderId,
        parent_note_id: note.parentNoteId,
        title: note.title,
        content: note.content,
        created_by: note.createdById,
        last_edited_by: note.lastEditedById,
        is_script: note.isScript,
        tags: note.tags,
      })
      .select()
      .single();

    if (error || !data) {
      console.error('Failed to create note:', error?.message);
      return;
    }

    const newNote: Note = {
      ...note,
      id: data.id,
      createdAt: data.created_at,
      updatedAt: data.updated_at,
    };

    set((state) => ({ notes: [...state.notes, newNote], activeNoteId: newNote.id }));
  },

  updateNote: (id, updates) => {
    // Optimistic local update (immediate)
    set((state) => ({
      notes: state.notes.map((n) => (n.id === id ? { ...n, ...updates } : n)),
    }));

    // Debounced DB save — content changes can be rapid (typing)
    clearTimeout(saveTimers[id]);
    saveTimers[id] = setTimeout(() => {
      const supabase = createClient();
      const dbUpdates: Record<string, unknown> = {};
      if (updates.title !== undefined) dbUpdates.title = updates.title;
      if (updates.content !== undefined) dbUpdates.content = updates.content;
      if (updates.isScript !== undefined) dbUpdates.is_script = updates.isScript;
      if (updates.tags !== undefined) dbUpdates.tags = updates.tags;
      if (updates.lastEditedById !== undefined) dbUpdates.last_edited_by = updates.lastEditedById;
      dbUpdates.updated_at = new Date().toISOString();

      supabase.from('notes').update(dbUpdates).eq('id', id).then();
    }, 500);
  },

  deleteNote: async (id) => {
    set((state) => ({
      notes: state.notes.filter((n) => n.id !== id),
      activeNoteId: state.activeNoteId === id ? null : state.activeNoteId,
    }));

    const supabase = createClient();
    await supabase.from('notes').delete().eq('id', id);
  },

  // ── Navigation ─────────────────────────────────────────
  setActiveNote: (id) => set({ activeNoteId: id }),
  setActiveSpace: (id) => set({ activeSpaceId: id }),

  toggleFolder: (id) => {
    set((state) => {
      const next = new Set(state.expandedFolders);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return { expandedFolders: next };
    });
  },

  toggleSpace: (id) => {
    set((state) => {
      const next = new Set(state.expandedSpaces);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return { expandedSpaces: next };
    });
  },

  toggleNote: (id) => {
    set((state) => {
      const next = new Set(state.expandedNotes);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return { expandedNotes: next };
    });
  },

  // ── Realtime ────────────────────────────────────────────
  subscribeRealtime: () => {
    const supabase = createClient();

    const channel = supabase
      .channel('notes-changes')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'notes' }, () => {
        get().fetchNotes();
      })
      .on('postgres_changes', { event: '*', schema: 'public', table: 'note_spaces' }, () => {
        get().fetchNotes();
      })
      .on('postgres_changes', { event: '*', schema: 'public', table: 'note_folders' }, () => {
        get().fetchNotes();
      })
      .on('postgres_changes', { event: '*', schema: 'public', table: 'note_space_members' }, () => {
        get().fetchNotes();
      })
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  },

  // ── Queries ────────────────────────────────────────────
  getSpacesForUser: (userId, userRole) => {
    const { spaces } = get();
    return spaces.filter((s) => {
      if (s.type === 'personal') return s.ownerId === userId;
      if (userRole === 'owner' || userRole === 'admin') return true;
      return s.members.some((m) => m.userId === userId);
    });
  },

  getFoldersInSpace: (spaceId, parentFolderId = null) => {
    const { folders } = get();
    return folders
      .filter((f) => f.spaceId === spaceId && f.parentFolderId === parentFolderId)
      .sort((a, b) => a.name.localeCompare(b.name));
  },

  getNotesInFolder: (spaceId, folderId) => {
    const { notes } = get();
    return notes
      .filter((n) => n.spaceId === spaceId && n.folderId === folderId)
      .sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());
  },

  getNoteById: (id) => get().notes.find((n) => n.id === id),
  getSpaceById: (id) => get().spaces.find((s) => s.id === id),
}));
