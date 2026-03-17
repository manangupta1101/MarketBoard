'use client';

import { useState, useMemo, useRef, useEffect, type ReactNode } from 'react';
import type { RequestType, RequestPriority, CreativeRequest } from '@/types';
import { REQUEST_PRIORITIES } from '@/types';
import { Modal } from '@/components/ui/modal';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { useRequestStore } from '@/stores/request-store';
import { useAuthStore } from '@/stores/auth-store';
import { useNotesStore } from '@/stores/notes-store';

const TYPE_CARDS: { value: RequestType; label: string; icon: ReactNode }[] = [
  {
    value: 'design_graphics',
    label: 'Design / Graphics',
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-1 0-.83.67-1.5 1.5-1.5H16c3.31 0 6-2.69 6-6 0-4.96-4.48-9-10-9z" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="7.5" cy="11.5" r="1.5" fill="currentColor" stroke="none" />
        <circle cx="10.5" cy="7.5" r="1.5" fill="currentColor" stroke="none" />
        <circle cx="15" cy="7.5" r="1.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    value: 'video',
    label: 'Video',
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    value: 'ui_ux',
    label: 'UI/UX',
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="18" rx="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 7h20M7 7v14" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    value: 'writing',
    label: 'Writing',
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 3a2.828 2.828 0 114 4L7.5 20.5 2 22l1.5-5.5L17 3z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    value: 'shooting',
    label: 'Shooting',
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="13" r="4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    value: 'anchor',
    label: 'Anchor',
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M19 10v2a7 7 0 01-14 0v-2" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="12" y1="19" x2="12" y2="23" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="8" y1="23" x2="16" y2="23" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

// ── Searchable Script Dropdown ─────────────────────────────
interface ScriptSearchDropdownProps {
  notes: { id: string; title: string; createdByName: string }[];
  value: string | null;
  onChange: (id: string | null) => void;
}

const ScriptSearchDropdown = ({ notes, value, onChange }: ScriptSearchDropdownProps) => {
  const [search, setSearch] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedNote = useMemo(() => notes.find((n) => n.id === value), [notes, value]);

  const filtered = useMemo(() => {
    if (!search.trim()) return notes;
    const q = search.toLowerCase();
    return notes.filter(
      (n) => n.title.toLowerCase().includes(q) || n.createdByName.toLowerCase().includes(q),
    );
  }, [notes, search]);

  // Close on outside click
  useEffect(() => {
    const handle = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handle);
    return () => document.removeEventListener('mousedown', handle);
  }, []);

  return (
    <div ref={containerRef} className="relative">
      <label className="mb-1.5 block text-sm font-bold text-[var(--text-primary)]">
        Attach Script (Optional)
      </label>

      {/* Trigger / selected display */}
      <button
        type="button"
        onClick={() => setIsOpen((o) => !o)}
        className={`flex w-full items-center justify-between rounded-xl border-2 bg-[var(--surface)] px-4 py-2.5 text-left text-sm transition-all ${
          isOpen ? 'border-[var(--primary)]' : 'border-[var(--navy)]'
        }`}
      >
        <span className={selectedNote ? 'text-[var(--text-primary)]' : 'text-[var(--text-tertiary)]'}>
          {selectedNote ? `${selectedNote.title} — by ${selectedNote.createdByName}` : 'Search or select a script...'}
        </span>
        <div className="flex items-center gap-1">
          {selectedNote && (
            <span
              onClick={(e) => { e.stopPropagation(); onChange(null); setSearch(''); }}
              className="rounded-full p-0.5 hover:bg-[var(--error-light)] hover:text-[var(--error)]"
              role="button"
              aria-label="Clear selection"
            >
              <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </span>
          )}
          <svg className={`h-4 w-4 text-[var(--text-tertiary)] transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute z-50 mt-1 w-full overflow-hidden rounded-xl border-2 border-[var(--navy)] bg-[var(--surface)] shadow-[4px_4px_0px_var(--navy)]">
          {/* Search input */}
          <div className="border-b border-[var(--border-light)] px-3 py-2">
            <div className="flex items-center gap-2 rounded-lg border border-[var(--border-light)] px-2.5 py-1.5">
              <svg className="h-4 w-4 shrink-0 text-[var(--text-tertiary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search scripts..."
                className="w-full bg-transparent text-sm text-[var(--text-primary)] outline-none placeholder:text-[var(--text-tertiary)]"
                autoFocus
              />
            </div>
          </div>

          {/* Options list */}
          <div className="max-h-48 overflow-y-auto">
            {filtered.length === 0 ? (
              <div className="px-4 py-3 text-center text-sm text-[var(--text-tertiary)]">
                {notes.length === 0
                  ? 'No scripts yet — mark a note as Script in Notes tab'
                  : 'No matching scripts found'}
              </div>
            ) : (
              filtered.map((n) => (
                <button
                  key={n.id}
                  type="button"
                  onClick={() => { onChange(n.id); setIsOpen(false); setSearch(''); }}
                  className={`flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm transition-colors hover:bg-[var(--surface-hover)] ${
                    value === n.id ? 'bg-[var(--primary-light)]' : ''
                  }`}
                >
                  <svg className="h-4 w-4 shrink-0 text-[var(--text-secondary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                  <div className="min-w-0 flex-1">
                    <span className="block truncate font-medium text-[var(--text-primary)]">{n.title}</span>
                    <span className="text-xs text-[var(--text-tertiary)]">by {n.createdByName}</span>
                  </div>
                  {value === n.id && (
                    <svg className="h-4 w-4 shrink-0 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </button>
              ))
            )}
          </div>
        </div>
      )}

      <p className="mt-1 text-xs text-[var(--text-tertiary)]">
        Link a script note so the team can view it directly from this request
      </p>
    </div>
  );
};

interface NewRequestModalProps {
  open: boolean;
  onClose: () => void;
}

export const NewRequestModal = ({ open, onClose }: NewRequestModalProps) => {
  const user = useAuthStore((s) => s.user);
  const addRequest = useRequestStore((s) => s.addRequest);
  const allNotes = useNotesStore((s) => s.notes);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState<RequestType>('design_graphics');
  const [priority, setPriority] = useState<RequestPriority>('medium');
  const [totalItems, setTotalItems] = useState(0);
  const [dueDate, setDueDate] = useState('');
  const [refLinks, setRefLinks] = useState<string[]>(['']);
  const [scriptNoteId, setScriptNoteId] = useState<string | null>(null);

  if (!user) return null;

  const resetAndClose = () => {
    setTitle('');
    setDescription('');
    setType('design_graphics');
    setPriority('medium');
    setTotalItems(0);
    setDueDate('');
    setRefLinks(['']);
    setScriptNoteId(null);
    onClose();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    const newRequest: CreativeRequest = {
      id: crypto.randomUUID(),
      title: title.trim(),
      description: description.trim(),
      type,
      priority,
      status: 'open',
      totalItems,
      dueDate: dueDate || null,
      requesterId: user.id,
      requesterName: user.name,
      requesterEmail: user.email,
      assigneeId: null,
      assigneeName: null,
      teamLeadId: null,
      teamLeadName: null,
      teamLeadEmail: null,
      referenceLinks: refLinks.map((l) => l.trim()).filter(Boolean),
      scriptNoteId,
      finalLink: null,
      comments: [],
      reEdits: [],
      reEditRequests: [],
      isInReEdit: false,
      createdAt: new Date().toISOString(),
      closedAt: null,
      deletedById: null,
      deletedByName: null,
      deletedAt: null,
      deletionReason: null,
    };

    addRequest(newRequest);
    resetAndClose();
  };

  const handleLinkChange = (index: number, value: string) => {
    setRefLinks((prev) => prev.map((l, i) => (i === index ? value : l)));
  };

  const addLink = () => setRefLinks((prev) => [...prev, '']);

  const removeLink = (index: number) => {
    setRefLinks((prev) => prev.filter((_, i) => i !== index));
  };

  const priorityOptions = REQUEST_PRIORITIES.map((p) => ({
    value: p,
    label: p.charAt(0).toUpperCase() + p.slice(1),
  }));

  return (
    <Modal open={open} onClose={resetAndClose} maxWidth="xl">
      <h2 className="mb-6 text-2xl font-bold text-[var(--text-primary)]">
        New Creative Request
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Request Title */}
        <div>
          <label
            htmlFor="req-title"
            className="mb-1.5 block text-sm font-bold text-[var(--text-primary)]"
          >
            Request Title
          </label>
          <Input
            id="req-title"
            placeholder="Brief title for your request"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            autoFocus
          />
        </div>

        {/* Description */}
        <div>
          <label
            htmlFor="req-desc"
            className="mb-1.5 block text-sm font-bold text-[var(--text-primary)]"
          >
            Description
          </label>
          <Textarea
            id="req-desc"
            placeholder="Describe what you need in detail..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
          />
        </div>

        {/* Request Type Cards */}
        <div>
          <span className="mb-3 block text-sm font-bold text-[var(--text-primary)]">
            Request Type
          </span>
          <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
            {TYPE_CARDS.map((card) => (
              <button
                key={card.value}
                type="button"
                onClick={() => setType(card.value)}
                className={`
                  flex flex-col items-center gap-2 rounded-2xl border-[2.5px] px-4 py-5
                  transition-all duration-[var(--transition-fast)] cursor-pointer
                  shadow-[2px_2px_0px_var(--navy)] hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_var(--navy)]
                  active:translate-y-0 active:shadow-[1px_1px_0px_var(--navy)]
                  ${
                    type === card.value
                      ? 'border-[var(--primary)] bg-[var(--primary-light)]'
                      : 'border-[var(--navy)] hover:border-[var(--primary)]'
                  }
                `}
                aria-pressed={type === card.value}
              >
                <span className="text-[var(--text-primary)]">{card.icon}</span>
                <span className="text-sm font-medium text-[var(--text-primary)]">
                  {card.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Priority / Total Items / Due Date */}
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label
              htmlFor="req-priority"
              className="mb-1.5 block text-sm font-bold text-[var(--text-primary)]"
            >
              Priority
            </label>
            <Select
              id="req-priority"
              options={priorityOptions}
              value={priority}
              onChange={(e) => setPriority(e.target.value as RequestPriority)}
            />
          </div>
          <div>
            <label
              htmlFor="req-total-items"
              className="mb-1.5 block text-sm font-bold text-[var(--text-primary)]"
            >
              Total Items to Deliver
            </label>
            <Input
              id="req-total-items"
              type="number"
              min={0}
              value={totalItems}
              onChange={(e) => setTotalItems(Number(e.target.value))}
            />
          </div>
          <div>
            <label
              htmlFor="req-due-date"
              className="mb-1.5 block text-sm font-bold text-[var(--text-primary)]"
            >
              Due Date (Optional)
            </label>
            <Input
              id="req-due-date"
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
            />
          </div>
        </div>

        {/* Reference Links */}
        <div>
          <span className="mb-1.5 block text-sm font-bold text-[var(--text-primary)]">
            Reference Links (Optional)
          </span>
          <div className="space-y-2">
            {refLinks.map((link, index) => (
              <div key={index} className="flex gap-2">
                <div className="flex-1">
                  <Input
                    placeholder="https://example.com/reference"
                    value={link}
                    onChange={(e) => handleLinkChange(index, e.target.value)}
                  />
                </div>
                {refLinks.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeLink(index)}
                    className="
                      flex h-[38px] w-[38px] shrink-0 items-center justify-center
                      rounded-full border-[2px] border-[var(--border-light)]
                      text-[var(--text-tertiary)] transition-all
                      hover:border-[var(--error)] hover:text-[var(--error)]
                    "
                    aria-label="Remove link"
                  >
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </div>
            ))}
          </div>
          <button
            type="button"
            onClick={addLink}
            className="
              mt-2 inline-flex items-center gap-1 rounded-full
              border-[2px] border-[var(--navy)] px-3 py-1.5 text-sm font-bold
              text-[var(--text-secondary)] transition-all
              hover:bg-[var(--surface-hover)] shadow-[2px_2px_0px_var(--navy)]
              active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_var(--navy)]
            "
          >
            + Add Link
          </button>
        </div>

        {/* Attach Script Note — searchable dropdown */}
        <ScriptSearchDropdown
          notes={allNotes.filter((n) => n.isScript)}
          value={scriptNoteId}
          onChange={setScriptNoteId}
        />

        {/* Submit */}
        <Button
          type="submit"
          fullWidth
          className="!bg-[var(--navy)] !text-white hover:!opacity-90 !py-3 !text-base !font-bold"
        >
          Submit Request
        </Button>
      </form>
    </Modal>
  );
};
