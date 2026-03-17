// ============================================
// NOTES SYSTEM TYPES
// ============================================

export type NoteSpaceType = 'personal' | 'shared';

export type SpaceRole = 'owner' | 'editor' | 'viewer';

/** A workspace/space that contains folders and notes */
export interface NoteSpace {
  id: string;
  name: string;
  type: NoteSpaceType;
  description: string;
  /** User ID of the space creator */
  createdById: string;
  createdByName: string;
  createdAt: string;
  /** For personal spaces — the owning user's ID */
  ownerId: string | null;
  /** For shared spaces — who has access and what role */
  members: SpaceMember[];
  /** Icon/emoji for the space */
  icon: string;
}

export interface SpaceMember {
  userId: string;
  userName: string;
  role: SpaceRole;
  addedAt: string;
}

/** A folder within a space (supports nesting) */
export interface NoteFolder {
  id: string;
  spaceId: string;
  parentFolderId: string | null;
  name: string;
  createdById: string;
  createdByName: string;
  createdAt: string;
  icon: string;
}

/** A single note document — supports Notion-like nesting (pages within pages) */
export interface Note {
  id: string;
  spaceId: string;
  folderId: string | null;
  /** Parent note ID for page-within-page nesting (null = top-level note) */
  parentNoteId: string | null;
  title: string;
  /** BlockNote JSON content stored as string */
  content: string;
  createdById: string;
  createdByName: string;
  createdAt: string;
  updatedAt: string;
  lastEditedById: string;
  lastEditedByName: string;
  /** Whether this note is a script attachment */
  isScript: boolean;
  /** Tags for search/filtering */
  tags: string[];
}

/** Sidebar tree node for rendering */
export interface NoteTreeNode {
  type: 'space' | 'folder' | 'note';
  id: string;
  name: string;
  icon: string;
  depth: number;
  spaceId: string;
  parentFolderId: string | null;
  children?: NoteTreeNode[];
  /** Only for notes */
  note?: Note;
  /** Only for spaces */
  space?: NoteSpace;
  /** Only for folders */
  folder?: NoteFolder;
}
