'use client';

import { useState, type ReactNode } from 'react';
import type { RequestType, RequestPriority, CreativeRequest } from '@/types';
import { REQUEST_PRIORITIES } from '@/types';
import { Modal } from '@/components/ui/modal';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { useRequestStore } from '@/stores/request-store';
import { useAuthStore } from '@/stores/auth-store';

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

interface NewRequestModalProps {
  open: boolean;
  onClose: () => void;
}

export const NewRequestModal = ({ open, onClose }: NewRequestModalProps) => {
  const user = useAuthStore((s) => s.user);
  const addRequest = useRequestStore((s) => s.addRequest);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState<RequestType>('design_graphics');
  const [priority, setPriority] = useState<RequestPriority>('medium');
  const [totalItems, setTotalItems] = useState(0);
  const [dueDate, setDueDate] = useState('');
  const [refLinks, setRefLinks] = useState<string[]>(['']);

  if (!user) return null;

  const resetAndClose = () => {
    setTitle('');
    setDescription('');
    setType('design_graphics');
    setPriority('medium');
    setTotalItems(0);
    setDueDate('');
    setRefLinks(['']);
    onClose();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    const newRequest: CreativeRequest = {
      id: `r_${Date.now()}`,
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
      finalLink: null,
      comments: [],
      createdAt: new Date().toISOString(),
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
            className="mb-1.5 block text-sm font-semibold text-[var(--text-primary)]"
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
            className="mb-1.5 block text-sm font-semibold text-[var(--text-primary)]"
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
          <span className="mb-3 block text-sm font-semibold text-[var(--text-primary)]">
            Request Type
          </span>
          <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
            {TYPE_CARDS.map((card) => (
              <button
                key={card.value}
                type="button"
                onClick={() => setType(card.value)}
                className={`
                  flex flex-col items-center gap-2 rounded-[var(--radius-md)] border-2 px-4 py-5
                  transition-all duration-[var(--transition-fast)] cursor-pointer
                  ${
                    type === card.value
                      ? 'border-[var(--text-primary)] bg-[var(--surface-active)]'
                      : 'border-[var(--border)] hover:border-[var(--border-hover)]'
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
              className="mb-1.5 block text-sm font-semibold text-[var(--text-primary)]"
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
              className="mb-1.5 block text-sm font-semibold text-[var(--text-primary)]"
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
              className="mb-1.5 block text-sm font-semibold text-[var(--text-primary)]"
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
          <span className="mb-1.5 block text-sm font-semibold text-[var(--text-primary)]">
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
                      rounded-[var(--radius-md)] border border-[var(--border)]
                      text-[var(--text-tertiary)] transition-colors
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
              mt-2 inline-flex items-center gap-1 rounded-[var(--radius-md)]
              border border-[var(--border)] px-3 py-1.5 text-sm font-medium
              text-[var(--text-secondary)] transition-colors
              hover:bg-[var(--surface-hover)]
            "
          >
            + Add Link
          </button>
        </div>

        {/* Submit */}
        <Button
          type="submit"
          fullWidth
          className="!bg-[var(--text-primary)] !text-[var(--surface)] hover:!opacity-90 !py-3 !text-base !font-semibold"
        >
          Submit Request
        </Button>
      </form>
    </Modal>
  );
};
