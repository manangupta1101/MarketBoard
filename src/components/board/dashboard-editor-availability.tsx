'use client';

import { useState, useMemo, useCallback } from 'react';
import type { AvailabilityType, AvailabilityEntry, EditorSpecialization, TeamMemberProfile } from '@/types';
import {
  AVAILABILITY_TYPES,
  AVAILABILITY_TYPE_LABELS,
  AVAILABILITY_TYPE_COLORS,
  EDITOR_SPECIALIZATIONS,
  SPECIALIZATION_LABELS,
  SPECIALIZATION_ICONS,
} from '@/types';
import { useTeamStore } from '@/stores/team-store';
import { useAuthStore } from '@/stores/auth-store';
import { useAvailabilityStore } from '@/stores/availability-store';
import { useEditorSettingsStore } from '@/stores/editor-settings-store';
import { Modal } from '@/components/ui/modal';

// ============================================
// ICONS
// ============================================

const CalendarIcon = () => (
  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const PlusIcon = () => (
  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

const ChevronLeftIcon = () => (
  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

const ChevronRightIcon = () => (
  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

const ChevronDownIcon = () => (
  <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const TrashIcon = () => (
  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <polyline points="3 6 5 6 21 6" />
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
  </svg>
);

const AlertCircleIcon = () => (
  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>
);

const ClockIcon = () => (
  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const CheckCircleIcon = () => (
  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

// ============================================
// CONSTANTS
// ============================================

const DAY_NAMES = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'] as const;

const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
] as const;

const AVAILABILITY_ICONS: Record<AvailabilityType, React.ReactNode> = {
  unavailable: <AlertCircleIcon />,
  partial: <ClockIcon />,
  overtime: <CheckCircleIcon />,
};

type FilterValue = 'all' | string; // 'all' | editorId | 'cat_design' | 'cat_video' etc.

// ============================================
// HELPERS
// ============================================

const pad = (n: number): string => n.toString().padStart(2, '0');

const formatDateStr = (y: number, m: number, d: number): string =>
  `${y}-${pad(m + 1)}-${pad(d)}`;

const getCalendarDays = (year: number, month: number): (number | null)[] => {
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const days: (number | null)[] = [];

  for (let i = 0; i < firstDay; i++) days.push(null);
  for (let d = 1; d <= daysInMonth; d++) days.push(d);

  return days;
};

const isToday = (year: number, month: number, day: number): boolean => {
  const today = new Date();
  return today.getFullYear() === year && today.getMonth() === month && today.getDate() === day;
};

// ============================================
// ADD AVAILABILITY MODAL
// ============================================

interface AddAvailabilityModalProps {
  open: boolean;
  onClose: () => void;
  editors: TeamMemberProfile[];
  preselectedEditorId?: string;
}

const AddAvailabilityModal = ({ open, onClose, editors, preselectedEditorId }: AddAvailabilityModalProps) => {
  const user = useAuthStore((s) => s.user);
  const addEntry = useAvailabilityStore((s) => s.addEntry);

  const [editorId, setEditorId] = useState(preselectedEditorId ?? editors[0]?.id ?? '');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [type, setType] = useState<AvailabilityType>('unavailable');
  const [reason, setReason] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = useCallback(() => {
    if (!editorId) { setError('Please select an editor'); return; }
    if (!startDate) { setError('Please select a start date'); return; }
    if (!endDate) { setError('Please select an end date'); return; }
    if (endDate < startDate) { setError('End date must be on or after start date'); return; }

    addEntry({
      editorId,
      startDate,
      endDate,
      type,
      reason: reason.trim(),
      createdBy: user?.id ?? 'unknown',
    });

    setEditorId(preselectedEditorId ?? editors[0]?.id ?? '');
    setStartDate('');
    setEndDate('');
    setType('unavailable');
    setReason('');
    setError('');
    onClose();
  }, [editorId, startDate, endDate, type, reason, user, addEntry, onClose, preselectedEditorId, editors]);

  return (
    <Modal open={open} onClose={onClose} maxWidth="md">
      <h2 className="mb-6 text-lg font-bold text-[var(--text-primary)]">Add Availability Entry</h2>

      {error && (
        <div className="mb-4 rounded-[var(--radius-md)] border border-red-200 bg-red-50 px-4 py-2 text-sm text-red-700">
          {error}
        </div>
      )}

      {/* Editor select */}
      <div className="mb-4">
        <label htmlFor="avail-editor" className="mb-1.5 block text-sm font-medium text-[var(--text-primary)]">
          Editor
        </label>
        <div className="relative">
          <select
            id="avail-editor"
            value={editorId}
            onChange={(e) => setEditorId(e.target.value)}
            className="w-full appearance-none rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface)] px-3 py-2.5 pr-8 text-sm text-[var(--text-primary)] outline-none transition-colors hover:border-[var(--border-hover)] focus:border-[var(--primary)]"
          >
            {editors.map((ed) => (
              <option key={ed.id} value={ed.id}>{ed.name}</option>
            ))}
          </select>
          <span className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-[var(--text-tertiary)]">
            <ChevronDownIcon />
          </span>
        </div>
      </div>

      {/* Date range */}
      <div className="mb-4 grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="avail-start" className="mb-1.5 block text-sm font-medium text-[var(--text-primary)]">
            Start Date
          </label>
          <input
            id="avail-start"
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="w-full rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface)] px-3 py-2.5 text-sm text-[var(--text-primary)] outline-none transition-colors hover:border-[var(--border-hover)] focus:border-[var(--primary)]"
          />
        </div>
        <div>
          <label htmlFor="avail-end" className="mb-1.5 block text-sm font-medium text-[var(--text-primary)]">
            End Date
          </label>
          <input
            id="avail-end"
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="w-full rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface)] px-3 py-2.5 text-sm text-[var(--text-primary)] outline-none transition-colors hover:border-[var(--border-hover)] focus:border-[var(--primary)]"
          />
        </div>
      </div>

      {/* Type */}
      <div className="mb-4">
        <label htmlFor="avail-type" className="mb-1.5 block text-sm font-medium text-[var(--text-primary)]">
          Type
        </label>
        <div className="relative">
          <select
            id="avail-type"
            value={type}
            onChange={(e) => setType(e.target.value as AvailabilityType)}
            className="w-full appearance-none rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface)] px-3 py-2.5 pr-8 text-sm text-[var(--text-primary)] outline-none transition-colors hover:border-[var(--border-hover)] focus:border-[var(--primary)]"
          >
            {AVAILABILITY_TYPES.map((t) => (
              <option key={t} value={t}>{AVAILABILITY_TYPE_LABELS[t]}</option>
            ))}
          </select>
          <span className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-[var(--text-tertiary)]">
            <ChevronDownIcon />
          </span>
        </div>
        {/* Type preview badge */}
        <div className={`mt-2 inline-flex items-center gap-2 rounded-[var(--radius-md)] border px-3 py-1.5 text-sm ${AVAILABILITY_TYPE_COLORS[type].bg} ${AVAILABILITY_TYPE_COLORS[type].border} ${AVAILABILITY_TYPE_COLORS[type].text}`}>
          {AVAILABILITY_ICONS[type]}
          {AVAILABILITY_TYPE_LABELS[type]}
        </div>
      </div>

      {/* Reason */}
      <div className="mb-6">
        <label htmlFor="avail-reason" className="mb-1.5 block text-sm font-medium text-[var(--text-primary)]">
          Reason (optional)
        </label>
        <textarea
          id="avail-reason"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          placeholder="e.g., Vacation, Training, etc."
          rows={3}
          className="w-full resize-y rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface)] px-3 py-2.5 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)] outline-none transition-colors hover:border-[var(--border-hover)] focus:border-[var(--primary)]"
        />
      </div>

      {/* Actions */}
      <div className="flex justify-end gap-3">
        <button
          type="button"
          onClick={onClose}
          className="rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface)] px-5 py-2.5 text-sm font-medium text-[var(--text-primary)] transition-colors hover:bg-[var(--surface-hover)]"
        >
          Cancel
        </button>
        <button
          type="button"
          onClick={handleSubmit}
          className="rounded-[var(--radius-md)] bg-[var(--text-primary)] px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
        >
          Add Entry
        </button>
      </div>
    </Modal>
  );
};

// ============================================
// DAY DETAIL MODAL
// ============================================

interface DayDetailModalProps {
  open: boolean;
  onClose: () => void;
  date: string;
  entries: AvailabilityEntry[];
  editors: TeamMemberProfile[];
  canEdit: boolean;
}

const DayDetailModal = ({ open, onClose, date, entries, editors, canEdit }: DayDetailModalProps) => {
  const removeEntry = useAvailabilityStore((s) => s.removeEntry);

  const editorMap = useMemo(() => {
    const map: Record<string, TeamMemberProfile> = {};
    for (const ed of editors) map[ed.id] = ed;
    return map;
  }, [editors]);

  const displayDate = new Date(date + 'T00:00:00').toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <Modal open={open} onClose={onClose} maxWidth="md">
      <h2 className="mb-1 text-lg font-bold text-[var(--text-primary)]">Availability Details</h2>
      <p className="mb-5 text-sm text-[var(--text-tertiary)]">{displayDate}</p>

      {entries.length === 0 ? (
        <p className="py-6 text-center text-sm text-[var(--text-tertiary)]">No availability entries for this day.</p>
      ) : (
        <ul className="max-h-80 space-y-2 overflow-y-auto" role="list">
          {entries.map((entry) => {
            const colors = AVAILABILITY_TYPE_COLORS[entry.type];
            const editor = editorMap[entry.editorId];
            return (
              <li
                key={entry.id}
                className={`flex items-center gap-3 rounded-[var(--radius-md)] border px-4 py-3 ${colors.bg} ${colors.border}`}
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/60 text-sm font-semibold text-[var(--text-primary)]">
                  {editor?.name.charAt(0).toUpperCase() ?? '?'}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-[var(--text-primary)]">
                    {editor?.name ?? 'Unknown'}
                  </p>
                  <div className="flex items-center gap-2">
                    <span className={`inline-flex items-center gap-1 text-xs font-medium ${colors.text}`}>
                      {AVAILABILITY_ICONS[entry.type]}
                      {AVAILABILITY_TYPE_LABELS[entry.type]}
                    </span>
                    {entry.reason && (
                      <span className="text-xs text-[var(--text-tertiary)]">— {entry.reason}</span>
                    )}
                  </div>
                </div>
                {canEdit && (
                  <button
                    type="button"
                    onClick={() => removeEntry(entry.id)}
                    className="flex h-7 w-7 items-center justify-center rounded-[var(--radius-sm)] text-[var(--text-tertiary)] transition-colors hover:bg-red-100 hover:text-red-600"
                    aria-label={`Remove availability entry for ${editor?.name}`}
                  >
                    <TrashIcon />
                  </button>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </Modal>
  );
};

// ============================================
// CALENDAR CELL
// ============================================

interface CalendarCellProps {
  day: number | null;
  year: number;
  month: number;
  entries: AvailabilityEntry[];
  editors: TeamMemberProfile[];
  onClick: () => void;
}

const CalendarCell = ({ day, year, month, entries, editors, onClick }: CalendarCellProps) => {
  const editorMap = useMemo(() => {
    const map: Record<string, string> = {};
    for (const ed of editors) map[ed.id] = ed.name;
    return map;
  }, [editors]);

  if (day === null) {
    return <div className="min-h-[100px] border border-[var(--border)] bg-[var(--background)]" />;
  }

  const today = isToday(year, month, day);

  // Group entries by type for dot display
  const hasUnavailable = entries.some((e) => e.type === 'unavailable');
  const hasPartial = entries.some((e) => e.type === 'partial');
  const hasOvertime = entries.some((e) => e.type === 'overtime');

  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        relative min-h-[100px] border border-[var(--border)] bg-[var(--surface)] p-2
        text-left transition-colors hover:bg-[var(--surface-hover)] cursor-pointer
        ${today ? 'bg-[var(--primary-light)]' : ''}
      `}
      aria-label={`${MONTH_NAMES[month]} ${day}, ${year}. ${entries.length} availability entries.`}
    >
      <span className={`text-sm font-medium ${today ? 'text-[var(--primary)] font-bold' : 'text-[var(--text-primary)]'}`}>
        {day}
      </span>

      {/* Entry badges - show up to 3 names, then "+N more" */}
      <div className="mt-1 space-y-0.5">
        {entries.slice(0, 3).map((entry) => {
          const colors = AVAILABILITY_TYPE_COLORS[entry.type];
          return (
            <div
              key={entry.id}
              className={`truncate rounded px-1.5 py-0.5 text-[10px] font-medium ${colors.bg} ${colors.text}`}
            >
              {editorMap[entry.editorId] ?? 'Unknown'}
            </div>
          );
        })}
        {entries.length > 3 && (
          <div className="px-1.5 text-[10px] font-medium text-[var(--text-tertiary)]">
            +{entries.length - 3} more
          </div>
        )}
      </div>

      {/* Dot indicators */}
      {entries.length > 0 && (
        <div className="absolute bottom-1.5 right-1.5 flex gap-0.5">
          {hasUnavailable && <span className={`h-2 w-2 rounded-full ${AVAILABILITY_TYPE_COLORS.unavailable.dot}`} />}
          {hasPartial && <span className={`h-2 w-2 rounded-full ${AVAILABILITY_TYPE_COLORS.partial.dot}`} />}
          {hasOvertime && <span className={`h-2 w-2 rounded-full ${AVAILABILITY_TYPE_COLORS.overtime.dot}`} />}
        </div>
      )}
    </button>
  );
};

// ============================================
// MAIN COMPONENT
// ============================================

export const DashboardEditorAvailability = () => {
  const user = useAuthStore((s) => s.user);
  const members = useTeamStore((s) => s.members);
  const entries = useAvailabilityStore((s) => s.entries);
  const editorSettings = useEditorSettingsStore((s) => s.settings);

  const canEdit = user?.role === 'owner' || user?.role === 'admin';

  // Calendar state
  const now = new Date();
  const [viewYear, setViewYear] = useState(now.getFullYear());
  const [viewMonth, setViewMonth] = useState(now.getMonth());
  const [filter, setFilter] = useState<FilterValue>('all');

  // Modal state
  const [showAddModal, setShowAddModal] = useState(false);
  const [dayDetailDate, setDayDetailDate] = useState<string | null>(null);

  // Get only editors
  const editors = useMemo(
    () => members.filter((m) => m.role === 'editor'),
    [members],
  );

  // Build category filter options — always show all 6 specializations
  const categoryFilterOptions = useMemo(() => {
    const specs = EDITOR_SPECIALIZATIONS.filter((s) => s !== 'none');

    return specs.map((spec) => {
      const count = editors.filter((ed) => editorSettings[ed.id]?.p1 === spec).length;
      return {
        value: `cat_${spec}`,
        label: `${SPECIALIZATION_ICONS[spec]} ${SPECIALIZATION_LABELS[spec]} (${count})`,
      };
    });
  }, [editors, editorSettings]);

  // Determine which editor IDs to show based on filter
  const filteredEditorIds = useMemo(() => {
    if (filter === 'all') {
      return new Set(editors.map((e) => e.id));
    }

    if (filter.startsWith('cat_')) {
      const spec = filter.replace('cat_', '') as EditorSpecialization;
      return new Set(
        editors
          .filter((ed) => {
            const setting = editorSettings[ed.id];
            return setting?.p1 === spec;
          })
          .map((e) => e.id),
      );
    }

    // Individual editor
    return new Set([filter]);
  }, [filter, editors, editorSettings]);

  // Filter entries for current view
  const filteredEntries = useMemo(() => {
    return entries.filter((e) => filteredEditorIds.has(e.editorId));
  }, [entries, filteredEditorIds]);

  // Calendar days
  const calendarDays = useMemo(() => getCalendarDays(viewYear, viewMonth), [viewYear, viewMonth]);

  // Build a map of dateStr → entries for the current month
  const dateEntriesMap = useMemo(() => {
    const map: Record<string, AvailabilityEntry[]> = {};
    const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();

    for (let d = 1; d <= daysInMonth; d++) {
      const dateStr = formatDateStr(viewYear, viewMonth, d);
      map[dateStr] = filteredEntries.filter(
        (e) => dateStr >= e.startDate && dateStr <= e.endDate,
      );
    }

    return map;
  }, [filteredEntries, viewYear, viewMonth]);

  // Day detail entries
  const dayDetailEntries = useMemo(() => {
    if (!dayDetailDate) return [];
    return dateEntriesMap[dayDetailDate] ?? [];
  }, [dayDetailDate, dateEntriesMap]);

  // Navigation
  const goToPrev = useCallback(() => {
    setViewMonth((m) => {
      if (m === 0) { setViewYear((y) => y - 1); return 11; }
      return m - 1;
    });
  }, []);

  const goToNext = useCallback(() => {
    setViewMonth((m) => {
      if (m === 11) { setViewYear((y) => y + 1); return 0; }
      return m + 1;
    });
  }, []);

  // Current filter label for display
  const filterLabel = useMemo(() => {
    if (filter === 'all') return 'All Editors';
    if (filter.startsWith('cat_')) {
      const spec = filter.replace('cat_', '') as EditorSpecialization;
      return `${SPECIALIZATION_LABELS[spec]}s`;
    }
    return editors.find((e) => e.id === filter)?.name ?? 'Unknown';
  }, [filter, editors]);

  return (
    <section className="space-y-4">
      {/* ── Header ── */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="text-[var(--text-tertiary)]">
            <CalendarIcon />
          </span>
          <h2 className="text-lg font-bold text-[var(--text-primary)]">Editor Availability</h2>
        </div>

        <div className="flex items-center gap-3">
          {/* Filter dropdown */}
          <div className="relative">
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="appearance-none rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface)] py-2 pl-3 pr-8 text-sm text-[var(--text-primary)] outline-none transition-colors hover:border-[var(--border-hover)] focus:border-[var(--primary)] cursor-pointer min-w-[180px]"
              aria-label="Filter editors"
            >
              <option value="all">All Editors</option>

              {/* Category options */}
              {categoryFilterOptions.length > 0 && (
                <optgroup label="By Specialization">
                  {categoryFilterOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </optgroup>
              )}

              {/* Individual editors */}
              <optgroup label="Individual Editors">
                {editors.map((ed) => (
                  <option key={ed.id} value={ed.id}>{ed.name}</option>
                ))}
              </optgroup>
            </select>
            <span className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-[var(--text-tertiary)]">
              <ChevronDownIcon />
            </span>
          </div>

          {/* Add button (admin/owner only) */}
          {canEdit && (
            <button
              type="button"
              onClick={() => setShowAddModal(true)}
              className="flex items-center gap-2 rounded-[var(--radius-md)] bg-[var(--text-primary)] px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              <PlusIcon />
              Add Availability
            </button>
          )}
        </div>
      </div>

      {/* ── Month Navigation ── */}
      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={goToPrev}
          className="rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm font-medium text-[var(--text-primary)] transition-colors hover:bg-[var(--surface-hover)]"
        >
          <span className="flex items-center gap-1">
            <ChevronLeftIcon />
            Previous
          </span>
        </button>

        <h3 className="text-lg font-bold text-[var(--text-primary)]">
          {MONTH_NAMES[viewMonth]} {viewYear}
        </h3>

        <button
          type="button"
          onClick={goToNext}
          className="rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm font-medium text-[var(--text-primary)] transition-colors hover:bg-[var(--surface-hover)]"
        >
          <span className="flex items-center gap-1">
            Next
            <ChevronRightIcon />
          </span>
        </button>
      </div>

      {/* ── Legend ── */}
      <div className="flex items-center gap-6">
        {AVAILABILITY_TYPES.map((t) => (
          <div key={t} className="flex items-center gap-1.5">
            <span className={`h-3 w-3 rounded-full ${AVAILABILITY_TYPE_COLORS[t].dot}`} />
            <span className="text-xs text-[var(--text-secondary)]">
              {t === 'unavailable' ? 'Unavailable' : t === 'partial' ? 'Partial' : 'Overtime'}
            </span>
          </div>
        ))}
      </div>

      {/* ── Calendar Grid ── */}
      <div className="overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border)]">
        {/* Day headers */}
        <div className="grid grid-cols-7 border-b border-[var(--border)] bg-[var(--surface-hover)]">
          {DAY_NAMES.map((day) => (
            <div
              key={day}
              className="py-3 text-center text-sm font-semibold text-[var(--text-primary)]"
            >
              {day}
            </div>
          ))}
        </div>

        {/* Day cells */}
        <div className="grid grid-cols-7">
          {calendarDays.map((day, idx) => {
            const dateStr = day !== null ? formatDateStr(viewYear, viewMonth, day) : '';
            const dayEntries = day !== null ? (dateEntriesMap[dateStr] ?? []) : [];

            return (
              <CalendarCell
                key={idx}
                day={day}
                year={viewYear}
                month={viewMonth}
                entries={dayEntries}
                editors={editors}
                onClick={() => {
                  if (day !== null) setDayDetailDate(dateStr);
                }}
              />
            );
          })}
        </div>
      </div>

      {/* ── Summary Stats ── */}
      <div className="grid grid-cols-3 gap-4">
        {AVAILABILITY_TYPES.map((t) => {
          const count = filteredEntries.filter((e) => e.type === t).length;
          const colors = AVAILABILITY_TYPE_COLORS[t];
          return (
            <div
              key={t}
              className={`rounded-[var(--radius-lg)] border p-4 ${colors.bg} ${colors.border}`}
            >
              <div className={`flex items-center gap-2 ${colors.text}`}>
                {AVAILABILITY_ICONS[t]}
                <span className="text-sm font-medium">{AVAILABILITY_TYPE_LABELS[t]}</span>
              </div>
              <p className={`mt-1 text-2xl font-bold ${colors.text}`}>{count}</p>
              <p className="text-xs text-[var(--text-tertiary)]">
                entries this view ({filterLabel})
              </p>
            </div>
          );
        })}
      </div>

      {/* ── Modals ── */}
      {showAddModal && (
        <AddAvailabilityModal
          open={showAddModal}
          onClose={() => setShowAddModal(false)}
          editors={editors}
        />
      )}

      {dayDetailDate && (
        <DayDetailModal
          open={dayDetailDate !== null}
          onClose={() => setDayDetailDate(null)}
          date={dayDetailDate}
          entries={dayDetailEntries}
          editors={editors}
          canEdit={canEdit}
        />
      )}
    </section>
  );
};
