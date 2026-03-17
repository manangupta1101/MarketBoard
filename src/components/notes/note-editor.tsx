'use client';

import { useCallback, useEffect, useMemo, type MouseEvent as ReactMouseEvent } from 'react';
import { useNotesStore } from '@/stores/notes-store';
import { useAuthStore } from '@/stores/auth-store';
import { BlockNoteView } from '@blocknote/mantine';
import { useCreateBlockNote } from '@blocknote/react';
import type { Block } from '@blocknote/core';
import '@blocknote/core/fonts/inter.css';
import '@blocknote/mantine/style.css';

// ── Icons ──
const DownloadIcon = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
  </svg>
);

const ScriptIcon = ({ active }: { active: boolean }) => (
  <svg
    className={`h-4 w-4 ${active ? 'text-[var(--primary)]' : ''}`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    strokeWidth="2.5"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

/** Convert BlockNote blocks to plain markdown-ish text for download */
const blocksToMarkdown = (blocks: Block[]): string => {
  const lines: string[] = [];

  const processBlock = (block: Block) => {
    const text = (block.content as Array<{ type: string; text?: string }>)
      ?.map((c) => c.text ?? '')
      .join('') ?? '';

    switch (block.type) {
      case 'heading': {
        const level = (block.props as { level?: number })?.level ?? 1;
        lines.push(`${'#'.repeat(level)} ${text}`);
        break;
      }
      case 'bulletListItem':
        lines.push(`- ${text}`);
        break;
      case 'numberedListItem':
        lines.push(`1. ${text}`);
        break;
      case 'checkListItem':
        lines.push(`- [${(block.props as { checked?: boolean })?.checked ? 'x' : ' '}] ${text}`);
        break;
      default:
        lines.push(text);
    }

    if (block.children) {
      block.children.forEach(processBlock);
    }
  };

  blocks.forEach(processBlock);
  return lines.join('\n');
};

// ── Breadcrumb for nested pages ────────────────────────────
import type { Note } from '@/types/notes';

const BreadcrumbChain = ({
  noteId,
  allNotes,
  onNavigate,
}: {
  noteId: string;
  allNotes: Note[];
  onNavigate: (id: string) => void;
}) => {
  // Build chain from current note up to the root
  const chain = useMemo(() => {
    const result: { id: string; title: string }[] = [];
    let current = allNotes.find((n) => n.id === noteId);
    while (current?.parentNoteId) {
      const parent = allNotes.find((n) => n.id === current!.parentNoteId);
      if (!parent) break;
      result.unshift({ id: parent.id, title: parent.title });
      current = parent;
    }
    return result;
  }, [noteId, allNotes]);

  if (chain.length === 0) return null;

  return (
    <>
      {chain.map((item, i) => (
        <span key={item.id} className="flex items-center gap-1">
          <button
            onClick={() => onNavigate(item.id)}
            className="text-xs font-medium text-[var(--text-tertiary)] hover:text-[var(--primary)] transition-colors"
          >
            {item.title}
          </button>
          <svg className="h-3 w-3 text-[var(--text-tertiary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </span>
      ))}
      <span className="text-xs font-bold text-[var(--text-secondary)]">
        {allNotes.find((n) => n.id === noteId)?.title ?? 'Untitled'}
      </span>
    </>
  );
};

interface NoteEditorProps {
  noteId: string;
}

export const NoteEditor = ({ noteId }: NoteEditorProps) => {
  const note = useNotesStore((s) => s.notes.find((n) => n.id === noteId));
  const allNotes = useNotesStore((s) => s.notes);
  const updateNote = useNotesStore((s) => s.updateNote);
  const createNoteAction = useNotesStore((s) => s.createNote);
  const setActiveNote = useNotesStore((s) => s.setActiveNote);
  const spaceId = note?.spaceId;
  const space = useNotesStore((s) => s.spaces.find((sp) => sp.id === spaceId));
  const user = useAuthStore((s) => s.user);

  const childNotes = useMemo(
    () => allNotes
      .filter((n) => n.parentNoteId === noteId)
      .sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()),
    [allNotes, noteId],
  );

  // Parse initial content
  const initialContent = useMemo(() => {
    if (!note?.content) return undefined;
    try {
      const parsed = JSON.parse(note.content);
      return Array.isArray(parsed) && parsed.length > 0 ? parsed : undefined;
    } catch {
      return undefined;
    }
  }, [noteId]); // eslint-disable-line react-hooks/exhaustive-deps

  const editor = useCreateBlockNote({
    initialContent,
  });

  // Sync content from store when noteId changes
  useEffect(() => {
    if (!note?.content || !editor) return;
    try {
      const parsed = JSON.parse(note.content);
      if (Array.isArray(parsed) && parsed.length > 0) {
        editor.replaceBlocks(editor.document, parsed);
      }
    } catch {
      // ignore parse errors
    }
  }, [noteId]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleChange = useCallback(() => {
    if (!editor || !user) return;
    const content = JSON.stringify(editor.document);
    updateNote(noteId, {
      content,
      updatedAt: new Date().toISOString(),
      lastEditedById: user.id,
      lastEditedByName: user.name,
    });
  }, [editor, noteId, updateNote, user]);

  const handleTitleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      updateNote(noteId, { title: e.target.value });
    },
    [noteId, updateNote],
  );

  const handleDownload = useCallback(() => {
    if (!editor || !note) return;
    const md = blocksToMarkdown(editor.document as Block[]);
    const fullContent = `# ${note.title}\n\n${md}`;
    const blob = new Blob([fullContent], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${note.title.replace(/[^a-zA-Z0-9-_ ]/g, '')}.md`;
    a.click();
    URL.revokeObjectURL(url);
  }, [editor, note]);

  const toggleScript = useCallback(() => {
    if (!note) return;
    updateNote(noteId, { isScript: !note.isScript });
  }, [note, noteId, updateNote]);

  if (!note || !user) {
    return (
      <div className="flex flex-1 items-center justify-center">
        <p className="text-[var(--text-tertiary)]">Select a note to start editing</p>
      </div>
    );
  }

  // Check if user can edit
  const canEdit = (() => {
    if (!space) return false;
    if (space.type === 'personal') return true;
    if (user.role === 'owner' || user.role === 'admin') return true;
    const member = space.members.find((m) => m.userId === user.id);
    return member?.role === 'owner' || member?.role === 'editor';
  })();

  return (
    <div className="flex flex-1 flex-col overflow-hidden">
      {/* Breadcrumb — shows parent chain when inside a sub-page */}
      {note.parentNoteId && (
        <div className="flex items-center gap-1 border-b border-[var(--border-light)] bg-[var(--surface-secondary)] px-4 py-1.5">
          <BreadcrumbChain noteId={noteId} allNotes={allNotes} onNavigate={setActiveNote} />
        </div>
      )}

      {/* Toolbar */}
      <div className="flex items-center gap-3 border-b-2 border-[var(--border-light)] px-4 py-2">
        <input
          type="text"
          value={note.title}
          onChange={handleTitleChange}
          className="flex-1 bg-transparent text-lg font-bold text-[var(--text-primary)] outline-none placeholder:text-[var(--text-tertiary)]"
          placeholder="Untitled Note"
          readOnly={!canEdit}
        />

        <div className="flex items-center gap-1">
          {/* Script toggle */}
          <button
            onClick={toggleScript}
            className={`flex items-center gap-1 rounded-full border-2 px-2.5 py-1 text-xs font-bold transition-all ${
              note.isScript
                ? 'border-[var(--primary)] bg-[var(--primary-light)] text-[var(--primary)]'
                : 'border-[var(--border-light)] text-[var(--text-tertiary)] hover:border-[var(--navy)]'
            }`}
            title={note.isScript ? 'This is a script — click to unmark' : 'Mark as script'}
          >
            <ScriptIcon active={note.isScript} />
            Script
          </button>

          {/* Download */}
          <button
            onClick={handleDownload}
            className="flex items-center gap-1 rounded-full border-2 border-[var(--border-light)] px-2.5 py-1 text-xs font-bold text-[var(--text-tertiary)] hover:border-[var(--navy)] hover:text-[var(--text-primary)] transition-all"
            title="Download as .md"
          >
            <DownloadIcon />
            Download
          </button>
        </div>
      </div>

      {/* Author info for shared spaces */}
      {space?.type === 'shared' && (
        <div className="flex items-center gap-4 border-b border-[var(--border-light)] bg-[var(--surface-secondary)] px-4 py-1.5">
          <span className="text-xs text-[var(--text-tertiary)]">
            Created by <span className="font-bold text-[var(--text-secondary)]">{note.createdByName}</span>
            {' · '}
            {new Date(note.createdAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
          </span>
          {note.lastEditedById !== note.createdById && (
            <span className="text-xs text-[var(--text-tertiary)]">
              Last edited by <span className="font-bold text-[var(--text-secondary)]">{note.lastEditedByName}</span>
              {' · '}
              {new Date(note.updatedAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
            </span>
          )}
        </div>
      )}

      {/* Editor + Sub-pages in a single scrollable area */}
      <div className="flex-1 overflow-y-auto">
        <BlockNoteView
          editor={editor}
          editable={canEdit}
          onChange={handleChange}
          theme="light"
        />

        {/* Sub-pages section — Notion-style */}
        <div className="border-t border-[var(--border-light)] px-14 py-4">
          {childNotes.length > 0 && (
            <div className="mb-3">
              <h4 className="mb-2 text-xs font-extrabold uppercase tracking-wide text-[var(--text-tertiary)]">
                Sub-pages
              </h4>
              <div className="space-y-1">
                {childNotes.map((child) => (
                  <button
                    key={child.id}
                    onClick={() => setActiveNote(child.id)}
                    className="group flex w-full items-center gap-2.5 rounded-xl border-2 border-[var(--border-light)] bg-[var(--surface)] px-3.5 py-2.5 text-left transition-all hover:border-[var(--navy)] hover:shadow-[2px_2px_0px_var(--navy)]"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[var(--surface-secondary)] text-[var(--text-tertiary)]">
                      {child.isScript ? (
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                      ) : (
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      )}
                    </span>
                    <div className="min-w-0 flex-1">
                      <span className="block truncate text-sm font-bold text-[var(--text-primary)] group-hover:text-[var(--primary)]">
                        {child.title}
                      </span>
                      <span className="text-xs text-[var(--text-tertiary)]">
                        by {child.createdByName} · {new Date(child.updatedAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}
                      </span>
                    </div>
                    <svg className="h-4 w-4 shrink-0 text-[var(--text-tertiary)] opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Add sub-page button */}
          {canEdit && (
            <button
              onClick={async () => {
                if (!user || !note) return;
                const subNote = {
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
                await createNoteAction(subNote);
              }}
              className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm font-medium text-[var(--text-tertiary)] transition-colors hover:bg-[var(--surface-hover)] hover:text-[var(--text-primary)]"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
              Add a sub-page
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
