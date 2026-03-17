'use client';

import dynamic from 'next/dynamic';
import { useNotesStore } from '@/stores/notes-store';
import { NotesSidebar } from './notes-sidebar';

// BlockNote doesn't support SSR — lazy-load the editor
const NoteEditor = dynamic(
  () => import('./note-editor').then((mod) => ({ default: mod.NoteEditor })),
  {
    ssr: false,
    loading: () => (
      <div className="flex flex-1 items-center justify-center">
        <div className="flex flex-col items-center gap-2">
          <div className="h-6 w-6 animate-spin rounded-full border-2 border-[var(--primary)] border-t-transparent" />
          <p className="text-sm text-[var(--text-tertiary)]">Loading editor...</p>
        </div>
      </div>
    ),
  },
);

export const NotesView = () => {
  const activeNoteId = useNotesStore((s) => s.activeNoteId);

  return (
    <div
      className="flex overflow-hidden rounded-2xl border-[2.5px] border-[var(--navy)] bg-[var(--surface)] shadow-[4px_4px_0px_var(--navy)]"
      style={{ height: 'calc(100vh - 160px)' }}
    >
      <NotesSidebar />

      {activeNoteId ? (
        <NoteEditor noteId={activeNoteId} />
      ) : (
        <div className="flex flex-1 flex-col items-center justify-center gap-3">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl border-[2.5px] border-[var(--navy)] bg-[var(--primary-light)] shadow-[3px_3px_0px_var(--navy)]">
            <svg className="h-8 w-8 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h3 className="text-lg font-bold text-[var(--text-primary)]">Select a note</h3>
          <p className="max-w-xs text-center text-sm text-[var(--text-secondary)]">
            Choose a note from the sidebar or create a new one to get started
          </p>
        </div>
      )}
    </div>
  );
};
