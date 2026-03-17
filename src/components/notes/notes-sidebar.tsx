'use client';

import { useState, useMemo } from 'react';
import { useNotesStore } from '@/stores/notes-store';
import { useAuthStore } from '@/stores/auth-store';
import { useTeamStore } from '@/stores/team-store';
import { Modal } from '@/components/ui/modal';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import type { NoteSpace, NoteFolder, Note } from '@/types/notes';

// ── Icons ──────────────────────────────────────────────────
const ChevronRight = ({ open }: { open: boolean }) => (
  <svg
    className={`h-3.5 w-3.5 shrink-0 transition-transform duration-150 ${open ? 'rotate-90' : ''}`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    strokeWidth="2.5"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
);

const PlusIcon = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
  </svg>
);

const FolderIcon = () => (
  <svg className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
  </svg>
);

const FileIcon = ({ isScript }: { isScript?: boolean }) => (
  <svg className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    {isScript ? (
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    ) : (
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    )}
  </svg>
);

const TrashIcon = () => (
  <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
  </svg>
);

const UsersIcon = () => (
  <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const DownloadIcon = () => (
  <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
  </svg>
);

// ── Create Space Modal ─────────────────────────────────────
interface CreateSpaceModalProps {
  open: boolean;
  onClose: () => void;
}

const CreateSpaceModal = ({ open, onClose }: CreateSpaceModalProps) => {
  const user = useAuthStore((s) => s.user);
  const members = useTeamStore((s) => s.members);
  const createSpace = useNotesStore((s) => s.createSpace);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [icon, setIcon] = useState('📁');
  const [selectedMembers, setSelectedMembers] = useState<Set<string>>(new Set());

  if (!user) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    const space: NoteSpace = {
      id: crypto.randomUUID(),
      name: name.trim(),
      type: 'shared',
      description: description.trim(),
      createdById: user.id,
      createdByName: user.name,
      createdAt: new Date().toISOString(),
      ownerId: null,
      members: [
        { userId: user.id, userName: user.name, role: 'owner', addedAt: new Date().toISOString() },
        ...Array.from(selectedMembers).map((uid) => {
          const m = members.find((mem) => mem.id === uid);
          return {
            userId: uid,
            userName: m?.name ?? 'Unknown',
            role: 'editor' as const,
            addedAt: new Date().toISOString(),
          };
        }),
      ],
      icon: icon || '📁',
    };

    await createSpace(space);
    setName('');
    setDescription('');
    setIcon('📁');
    setSelectedMembers(new Set());
    onClose();
  };

  const toggleMember = (id: string) => {
    setSelectedMembers((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const otherMembers = members.filter((m) => m.id !== user.id);

  return (
    <Modal open={open} onClose={onClose} maxWidth="md">
      <h2 className="mb-4 text-xl font-bold text-[var(--text-primary)]">Create Shared Space</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex gap-3">
          <div className="w-16">
            <label className="mb-1 block text-xs font-bold text-[var(--text-primary)]">Icon</label>
            <Input value={icon} onChange={(e) => setIcon(e.target.value)} className="text-center text-lg" />
          </div>
          <div className="flex-1">
            <label className="mb-1 block text-xs font-bold text-[var(--text-primary)]">Space Name</label>
            <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g. Campaign Scripts" required autoFocus />
          </div>
        </div>

        <div>
          <label className="mb-1 block text-xs font-bold text-[var(--text-primary)]">Description</label>
          <Textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="What's this space for?" rows={2} />
        </div>

        <div>
          <label className="mb-2 block text-xs font-bold text-[var(--text-primary)]">Add Members</label>
          <div className="max-h-40 space-y-1 overflow-y-auto rounded-xl border-2 border-[var(--border-light)] p-2">
            {otherMembers.map((m) => (
              <label
                key={m.id}
                className="flex cursor-pointer items-center gap-2 rounded-lg px-2 py-1.5 hover:bg-[var(--surface-hover)]"
              >
                <input
                  type="checkbox"
                  checked={selectedMembers.has(m.id)}
                  onChange={() => toggleMember(m.id)}
                  className="h-4 w-4 rounded accent-[var(--primary)]"
                />
                <span className="text-sm font-medium text-[var(--text-primary)]">{m.name}</span>
                <span className="text-xs text-[var(--text-tertiary)]">{m.role}</span>
              </label>
            ))}
          </div>
        </div>

        <Button type="submit" fullWidth>
          Create Space
        </Button>
      </form>
    </Modal>
  );
};

// ── Manage Members Modal ───────────────────────────────────
interface ManageMembersModalProps {
  space: NoteSpace;
  open: boolean;
  onClose: () => void;
}

const ManageMembersModal = ({ space: spaceProp, open, onClose }: ManageMembersModalProps) => {
  const members = useTeamStore((s) => s.members);
  const addSpaceMember = useNotesStore((s) => s.addSpaceMember);
  const removeSpaceMember = useNotesStore((s) => s.removeSpaceMember);
  const updateSpaceMemberRole = useNotesStore((s) => s.updateSpaceMemberRole);
  // Read fresh space from store so member changes reflect immediately
  const space = useNotesStore((s) => s.spaces.find((sp) => sp.id === spaceProp.id)) ?? spaceProp;

  const currentMemberIds = new Set(space.members.map((m) => m.userId));
  const nonMembers = members.filter((m) => !currentMemberIds.has(m.id));

  return (
    <Modal open={open} onClose={onClose} maxWidth="md">
      <h2 className="mb-4 text-xl font-bold text-[var(--text-primary)]">
        {space.icon} {space.name} — Members
      </h2>

      <div className="space-y-4">
        {/* Current members */}
        <div>
          <h3 className="mb-2 text-sm font-bold text-[var(--text-secondary)]">Current Members</h3>
          <div className="space-y-1">
            {space.members.map((m) => (
              <div key={m.userId} className="flex items-center justify-between rounded-lg border border-[var(--border-light)] px-3 py-2">
                <div>
                  <span className="text-sm font-medium text-[var(--text-primary)]">{m.userName}</span>
                  <span className="ml-2 rounded-full bg-[var(--primary-light)] px-2 py-0.5 text-xs font-bold text-[var(--primary)]">
                    {m.role}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  {m.role !== 'owner' && (
                    <>
                      <select
                        value={m.role}
                        onChange={(e) => updateSpaceMemberRole(space.id, m.userId, e.target.value as 'editor' | 'viewer')}
                        className="rounded-lg border border-[var(--border-light)] px-2 py-1 text-xs"
                      >
                        <option value="editor">Editor</option>
                        <option value="viewer">Viewer</option>
                      </select>
                      <button
                        onClick={() => removeSpaceMember(space.id, m.userId)}
                        className="rounded-lg p-1 text-[var(--text-tertiary)] hover:bg-[var(--error-light)] hover:text-[var(--error)]"
                        aria-label={`Remove ${m.userName}`}
                      >
                        <TrashIcon />
                      </button>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Add new members */}
        {nonMembers.length > 0 && (
          <div>
            <h3 className="mb-2 text-sm font-bold text-[var(--text-secondary)]">Add Members</h3>
            <div className="space-y-1">
              {nonMembers.map((m) => (
                <div key={m.id} className="flex items-center justify-between rounded-lg border border-[var(--border-light)] px-3 py-2">
                  <span className="text-sm font-medium text-[var(--text-primary)]">{m.name}</span>
                  <button
                    onClick={() =>
                      addSpaceMember(space.id, {
                        userId: m.id,
                        userName: m.name,
                        role: 'editor',
                        addedAt: new Date().toISOString(),
                      })
                    }
                    className="rounded-full border-2 border-[var(--primary)] px-3 py-1 text-xs font-bold text-[var(--primary)] hover:bg-[var(--primary-light)]"
                  >
                    + Add
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </Modal>
  );
};

// ── Create Folder Modal ────────────────────────────────────
interface CreateFolderModalProps {
  spaceId: string;
  parentFolderId: string | null;
  open: boolean;
  onClose: () => void;
}

const CreateFolderModal = ({ spaceId, parentFolderId, open, onClose }: CreateFolderModalProps) => {
  const user = useAuthStore((s) => s.user);
  const createFolder = useNotesStore((s) => s.createFolder);
  const [name, setName] = useState('');
  const [icon, setIcon] = useState('📁');

  if (!user) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    const folder: NoteFolder = {
      id: crypto.randomUUID(),
      spaceId,
      parentFolderId,
      name: name.trim(),
      createdById: user.id,
      createdByName: user.name,
      createdAt: new Date().toISOString(),
      icon: icon || '📁',
    };

    await createFolder(folder);
    setName('');
    setIcon('📁');
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose} maxWidth="sm">
      <h2 className="mb-4 text-lg font-bold text-[var(--text-primary)]">New Folder</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="flex gap-3">
          <div className="w-14">
            <Input value={icon} onChange={(e) => setIcon(e.target.value)} className="text-center text-lg" />
          </div>
          <div className="flex-1">
            <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Folder name" required autoFocus />
          </div>
        </div>
        <Button type="submit" fullWidth>Create Folder</Button>
      </form>
    </Modal>
  );
};

// ── Sidebar Tree ───────────────────────────────────────────
interface FolderTreeProps {
  spaceId: string;
  parentFolderId: string | null;
  depth: number;
  canEdit: boolean;
}

const FolderTree = ({ spaceId, parentFolderId, depth, canEdit }: FolderTreeProps) => {
  const allFolders = useNotesStore((s) => s.folders);
  const allNotes = useNotesStore((s) => s.notes);
  const expandedFolders = useNotesStore((s) => s.expandedFolders);
  const toggleFolder = useNotesStore((s) => s.toggleFolder);
  const deleteFolder = useNotesStore((s) => s.deleteFolder);

  const folders = useMemo(
    () => allFolders
      .filter((f) => f.spaceId === spaceId && f.parentFolderId === parentFolderId)
      .sort((a, b) => a.name.localeCompare(b.name)),
    [allFolders, spaceId, parentFolderId],
  );

  // Only top-level notes in this folder (parentNoteId === null)
  const notes = useMemo(
    () => allNotes
      .filter((n) => n.spaceId === spaceId && n.folderId === parentFolderId && n.parentNoteId === null)
      .sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()),
    [allNotes, spaceId, parentFolderId],
  );

  const [createFolderOpen, setCreateFolderOpen] = useState(false);
  const [createFolderParent, setCreateFolderParent] = useState<string | null>(null);

  return (
    <>
      {folders.map((folder) => {
        const isOpen = expandedFolders.has(folder.id);
        return (
          <div key={folder.id}>
            <div
              className="group flex items-center gap-1.5 rounded-lg px-2 py-1 hover:bg-[var(--surface-hover)] cursor-pointer"
              style={{ paddingLeft: `${depth * 12 + 8}px` }}
            >
              <button onClick={() => toggleFolder(folder.id)} className="flex items-center gap-1.5 flex-1 min-w-0 text-left">
                <ChevronRight open={isOpen} />
                <span className="text-sm">{folder.icon}</span>
                <span className="truncate text-sm font-medium text-[var(--text-primary)]">{folder.name}</span>
              </button>
              {canEdit && (
                <div className="flex shrink-0 items-center gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    onClick={() => { setCreateFolderParent(folder.id); setCreateFolderOpen(true); }}
                    className="rounded p-0.5 hover:bg-[var(--primary-light)]"
                    title="New sub-folder"
                  >
                    <PlusIcon />
                  </button>
                  <button
                    onClick={() => deleteFolder(folder.id)}
                    className="rounded p-0.5 hover:bg-[var(--error-light)] hover:text-[var(--error)]"
                    title="Delete folder"
                  >
                    <TrashIcon />
                  </button>
                </div>
              )}
            </div>
            {isOpen && (
              <FolderTree spaceId={spaceId} parentFolderId={folder.id} depth={depth + 1} canEdit={canEdit} />
            )}
          </div>
        );
      })}

      {notes.map((note) => (
        <NoteTreeItem key={note.id} note={note} depth={depth} canEdit={canEdit} />
      ))}

      <CreateFolderModal
        spaceId={spaceId}
        parentFolderId={createFolderParent}
        open={createFolderOpen}
        onClose={() => setCreateFolderOpen(false)}
      />
    </>
  );
};

// ── Note Tree Item (supports nesting) ─────────────────────
interface NoteTreeItemProps {
  note: Note;
  depth: number;
  canEdit: boolean;
}

const NoteTreeItem = ({ note, depth, canEdit }: NoteTreeItemProps) => {
  const allNotes = useNotesStore((s) => s.notes);
  const expandedNotes = useNotesStore((s) => s.expandedNotes);
  const toggleNote = useNotesStore((s) => s.toggleNote);
  const activeNoteId = useNotesStore((s) => s.activeNoteId);
  const setActiveNote = useNotesStore((s) => s.setActiveNote);
  const deleteNote = useNotesStore((s) => s.deleteNote);
  const createNote = useNotesStore((s) => s.createNote);
  const user = useAuthStore((s) => s.user);

  const childNotes = useMemo(
    () => allNotes
      .filter((n) => n.parentNoteId === note.id)
      .sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()),
    [allNotes, note.id],
  );

  const hasChildren = childNotes.length > 0;
  const isExpanded = expandedNotes.has(note.id);
  const isActive = activeNoteId === note.id;

  const handleAddSubPage = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!user) return;
    const subNote: Note = {
      id: crypto.randomUUID(),
      spaceId: note.spaceId,
      folderId: note.folderId,
      parentNoteId: note.id,
      title: 'Untitled',
      content: '',
      createdById: user.id,
      createdByName: user.name,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      lastEditedById: user.id,
      lastEditedByName: user.name,
      isScript: false,
      tags: [],
    };
    await createNote(subNote);
    // Auto-expand parent
    if (!isExpanded) toggleNote(note.id);
  };

  return (
    <div>
      <div
        className={`group flex items-center gap-1 rounded-lg px-2 py-1 cursor-pointer transition-colors ${
          isActive
            ? 'bg-[var(--primary-light)] text-[var(--primary)]'
            : 'hover:bg-[var(--surface-hover)] text-[var(--text-secondary)]'
        }`}
        style={{ paddingLeft: `${depth * 12 + 8}px` }}
      >
        {/* Chevron — only visible if has children, otherwise spacer */}
        {hasChildren ? (
          <button
            onClick={(e) => { e.stopPropagation(); toggleNote(note.id); }}
            className="shrink-0"
          >
            <ChevronRight open={isExpanded} />
          </button>
        ) : (
          <span className="w-3.5 shrink-0" />
        )}

        <button onClick={() => setActiveNote(note.id)} className="flex items-center gap-1.5 flex-1 min-w-0 text-left">
          <FileIcon isScript={note.isScript} />
          <span className="truncate text-sm font-medium">{note.title}</span>
        </button>

        {canEdit && (
          <div className="flex shrink-0 items-center gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              onClick={handleAddSubPage}
              className="rounded p-0.5 hover:bg-[var(--primary-light)]"
              title="Add sub-page"
            >
              <PlusIcon />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); deleteNote(note.id); }}
              className="rounded p-0.5 hover:bg-[var(--error-light)] hover:text-[var(--error)]"
              title="Delete note"
            >
              <TrashIcon />
            </button>
          </div>
        )}
      </div>

      {/* Render child notes recursively */}
      {hasChildren && isExpanded && (
        childNotes.map((child) => (
          <NoteTreeItem key={child.id} note={child} depth={depth + 1} canEdit={canEdit} />
        ))
      )}
    </div>
  );
};

// ── Main Sidebar ───────────────────────────────────────────
export const NotesSidebar = () => {
  const user = useAuthStore((s) => s.user);
  const allSpaces = useNotesStore((s) => s.spaces);
  const expandedSpaces = useNotesStore((s) => s.expandedSpaces);
  const toggleSpace = useNotesStore((s) => s.toggleSpace);
  const createNote = useNotesStore((s) => s.createNote);
  const createSpace = useNotesStore((s) => s.createSpace);

  const [createSpaceOpen, setCreateSpaceOpen] = useState(false);
  const [createFolderState, setCreateFolderState] = useState<{ open: boolean; spaceId: string }>({ open: false, spaceId: '' });
  const [manageMembersSpace, setManageMembersSpace] = useState<NoteSpace | null>(null);

  const isOwnerOrAdmin = user?.role === 'owner' || user?.role === 'admin';

  const spaces = useMemo(() => {
    if (!user) return [];
    return allSpaces.filter((s) => {
      if (s.type === 'personal') return s.ownerId === user.id;
      if (user.role === 'owner' || user.role === 'admin') return true;
      return s.members.some((m) => m.userId === user.id);
    });
  }, [allSpaces, user]);

  if (!user) return null;

  const handleNewNote = async (spaceId: string, folderId: string | null = null) => {
    const note: Note = {
      id: crypto.randomUUID(),
      spaceId,
      folderId,
      parentNoteId: null,
      title: 'Untitled Note',
      content: '',
      createdById: user.id,
      createdByName: user.name,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      lastEditedById: user.id,
      lastEditedByName: user.name,
      isScript: false,
      tags: [],
    };
    await createNote(note);
  };

  const canEditSpace = (space: NoteSpace): boolean => {
    if (space.type === 'personal') return true;
    if (isOwnerOrAdmin) return true;
    const member = space.members.find((m) => m.userId === user.id);
    return member?.role === 'owner' || member?.role === 'editor';
  };

  const canManageSpace = (space: NoteSpace): boolean => {
    if (isOwnerOrAdmin) return true;
    const member = space.members.find((m) => m.userId === user.id);
    return member?.role === 'owner';
  };

  return (
    <aside className="flex h-full w-64 shrink-0 flex-col border-r-[2.5px] border-[var(--navy)] bg-[var(--surface)]">
      {/* Header */}
      <div className="flex items-center justify-between border-b-2 border-[var(--border-light)] px-3 py-3">
        <h2 className="text-sm font-extrabold uppercase tracking-wide text-[var(--text-primary)]">Notes</h2>
        {isOwnerOrAdmin && (
          <button
            onClick={() => setCreateSpaceOpen(true)}
            className="rounded-full border-2 border-[var(--navy)] p-1 shadow-[2px_2px_0px_var(--navy)] hover:shadow-[3px_3px_0px_var(--navy)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_var(--navy)] transition-all"
            title="New shared space"
          >
            <PlusIcon />
          </button>
        )}
      </div>

      {/* Scrollable tree */}
      <div className="flex-1 overflow-y-auto px-1 py-2">
        {spaces.map((space) => {
          const isOpen = expandedSpaces.has(space.id);
          const editable = canEditSpace(space);
          const manageable = canManageSpace(space);

          return (
            <div key={space.id} className="mb-1">
              {/* Space header */}
              <div className="group flex items-center gap-1.5 rounded-lg px-2 py-1.5 hover:bg-[var(--surface-hover)]">
                <button onClick={() => toggleSpace(space.id)} className="flex items-center gap-1.5 flex-1 min-w-0 text-left">
                  <ChevronRight open={isOpen} />
                  <span className="text-sm">{space.icon}</span>
                  <span className="truncate text-sm font-bold text-[var(--text-primary)]">{space.name}</span>
                </button>
                <div className="flex shrink-0 items-center gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
                  {space.type === 'shared' && manageable && (
                    <button
                      onClick={() => setManageMembersSpace(space)}
                      className="rounded p-0.5 hover:bg-[var(--primary-light)]"
                      title="Manage members"
                    >
                      <UsersIcon />
                    </button>
                  )}
                  {editable && (
                    <>
                      <button
                        onClick={() => setCreateFolderState({ open: true, spaceId: space.id })}
                        className="rounded p-0.5 hover:bg-[var(--primary-light)]"
                        title="New folder"
                      >
                        <FolderIcon />
                      </button>
                      <button
                        onClick={() => handleNewNote(space.id)}
                        className="rounded p-0.5 hover:bg-[var(--primary-light)]"
                        title="New note"
                      >
                        <PlusIcon />
                      </button>
                    </>
                  )}
                </div>
              </div>

              {/* Space content */}
              {isOpen && (
                <FolderTree
                  spaceId={space.id}
                  parentFolderId={null}
                  depth={1}
                  canEdit={editable}
                />
              )}
            </div>
          );
        })}
      </div>

      {/* Modals */}
      <CreateSpaceModal open={createSpaceOpen} onClose={() => setCreateSpaceOpen(false)} />

      <CreateFolderModal
        spaceId={createFolderState.spaceId}
        parentFolderId={null}
        open={createFolderState.open}
        onClose={() => setCreateFolderState({ open: false, spaceId: '' })}
      />

      {manageMembersSpace && (
        <ManageMembersModal
          space={manageMembersSpace}
          open={!!manageMembersSpace}
          onClose={() => setManageMembersSpace(null)}
        />
      )}
    </aside>
  );
};
