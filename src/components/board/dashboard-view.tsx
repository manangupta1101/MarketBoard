'use client';

import { useState, useMemo, useRef, useEffect } from 'react';
import type { ReactNode } from 'react';
import type { CreativeRequest } from '@/types';
import { REQUEST_STATUS_LABELS } from '@/types';
import { useTeamStore } from '@/stores/team-store';
import { DashboardOverview } from './dashboard-overview';
import { DashboardEditorPerformance } from './dashboard-editor-performance';
import { DashboardResources } from './dashboard-resources';
import { DashboardEditorSettings } from './dashboard-editor-settings';

// ============================================
// CONSTANTS
// ============================================

const TIME_PERIODS = [
  { value: 'last_7_days', label: 'Last 7 days' },
  { value: 'last_30_days', label: 'Last 30 days' },
  { value: 'last_90_days', label: 'Last 90 days' },
  { value: 'all_time', label: 'All time' },
  { value: 'custom', label: 'Custom' },
] as const;

type TimePeriod = (typeof TIME_PERIODS)[number]['value'];
type DashboardTab = 'overview' | 'editor_performance' | 'resources' | 'settings';

// ============================================
// HELPERS
// ============================================

const getDateRange = (period: TimePeriod): { from: Date; to: Date } => {
  const to = new Date();
  const from = new Date();
  switch (period) {
    case 'last_7_days':
      from.setDate(from.getDate() - 7);
      break;
    case 'last_30_days':
      from.setDate(from.getDate() - 30);
      break;
    case 'last_90_days':
      from.setDate(from.getDate() - 90);
      break;
    case 'all_time':
      from.setFullYear(2020);
      break;
  }
  return { from, to };
};

const formatDisplayDate = (date: Date): string =>
  date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

// ============================================
// ICONS
// ============================================

const UsersIcon = () => (
  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const CheckCircleIcon = () => (
  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

const ActivityIcon = () => (
  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
  </svg>
);

const ClockIcon = () => (
  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const TargetIcon = () => (
  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

const RefreshIcon = () => (
  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M1 4v6h6" />
    <path d="M23 20v-6h-6" />
    <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15" />
  </svg>
);

const AlertTriangleIcon = () => (
  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);

const GridIcon = () => (
  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <rect x="3" y="3" width="7" height="7" />
    <rect x="14" y="3" width="7" height="7" />
    <rect x="3" y="14" width="7" height="7" />
    <rect x="14" y="14" width="7" height="7" />
  </svg>
);

const UserCheckIcon = () => (
  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="8.5" cy="7" r="4" />
    <polyline points="17 11 19 13 23 9" />
  </svg>
);

const FolderIcon = () => (
  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
  </svg>
);

const GearIcon = () => (
  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const CalendarIcon = () => (
  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

// ============================================
// STAT CARD WITH HOVER POPOVER
// ============================================

interface HoverItem {
  id: string;
  title: string;
  subtitle?: string;
  badge?: string;
  badgeColor?: string;
}

interface StatCardProps {
  label: string;
  value: number;
  subtitle: string;
  icon: ReactNode;
  variant?: 'default' | 'danger' | 'warning';
  hoverItems?: HoverItem[];
  onItemClick?: (id: string) => void;
}

const STAT_VARIANT_STYLES: Record<string, { border: string; icon: string; value: string }> = {
  default: { border: 'border-[2.5px] border-[var(--navy)]', icon: 'text-[var(--text-tertiary)]', value: 'text-[var(--text-primary)]' },
  danger: { border: 'border-[2.5px] border-red-400', icon: 'text-red-500', value: 'text-red-500' },
  warning: { border: 'border-[2.5px] border-amber-400', icon: 'text-amber-500', value: 'text-amber-600' },
};

const HOVER_PAGE_SIZE = 5;

const StatCard = ({ label, value, subtitle, icon, variant = 'default', hoverItems, onItemClick }: StatCardProps) => {
  const styles = STAT_VARIANT_STYLES[variant];
  const [hovered, setHovered] = useState(false);
  const [page, setPage] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const totalPages = hoverItems ? Math.max(1, Math.ceil(hoverItems.length / HOVER_PAGE_SIZE)) : 0;
  const pageItems = hoverItems?.slice(page * HOVER_PAGE_SIZE, (page + 1) * HOVER_PAGE_SIZE) ?? [];

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setHovered(true);
    setPage(0);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setHovered(false), 200);
  };

  useEffect(() => {
    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
  }, []);

  return (
    <div
      ref={cardRef}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={`rounded-2xl bg-[var(--surface)] p-5 shadow-[var(--shadow-sm)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[var(--shadow-md)] ${styles.border}`}>
        <div className="mb-3 flex items-center justify-between">
          <span className="text-[13px] font-bold text-[var(--text-primary)]">{label}</span>
          <span className={styles.icon}>{icon}</span>
        </div>
        <p className={`text-[28px] font-extrabold ${styles.value}`}>{value}</p>
        <p className="mt-1 text-[13px] font-medium text-[var(--text-tertiary)]">{subtitle}</p>
      </div>

      {/* Hover Popover */}
      {hovered && hoverItems && hoverItems.length > 0 && (
        <div
          className="absolute left-0 right-0 top-full z-50 mt-1 rounded-2xl border-[2.5px] border-[var(--navy)] bg-[var(--surface)] shadow-[var(--shadow-lg)]"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="max-h-[260px] overflow-y-auto p-2">
            {pageItems.map((item) => (
              <button
                type="button"
                key={item.id}
                onClick={() => onItemClick?.(item.id)}
                className="flex w-full items-center justify-between rounded-xl px-3 py-2 text-left transition-colors hover:bg-[var(--surface-secondary)] cursor-pointer"
              >
                <div className="min-w-0 flex-1">
                  <p className="truncate text-xs font-medium text-[var(--text-primary)]">{item.title}</p>
                  {item.subtitle && (
                    <p className="truncate text-xs text-[var(--text-tertiary)]">{item.subtitle}</p>
                  )}
                </div>
                {item.badge && (
                  <span className={`ml-2 shrink-0 rounded-full border-[1.5px] px-2 py-0.5 text-[10px] font-bold ${item.badgeColor ?? 'bg-gray-100 text-gray-600'}`}>
                    {item.badge}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-between border-t-[2px] border-[var(--border-light)] px-3 py-1.5">
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); setPage((p) => Math.max(0, p - 1)); }}
                disabled={page === 0}
                className="rounded p-0.5 text-[var(--text-tertiary)] transition-colors hover:text-[var(--text-primary)] disabled:opacity-30"
                aria-label="Previous page"
              >
                <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <span className="text-[10px] text-[var(--text-tertiary)]">
                {page + 1} / {totalPages}
              </span>
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); setPage((p) => Math.min(totalPages - 1, p + 1)); }}
                disabled={page === totalPages - 1}
                className="rounded p-0.5 text-[var(--text-tertiary)] transition-colors hover:text-[var(--text-primary)] disabled:opacity-30"
                aria-label="Next page"
              >
                <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

// ============================================
// DASHBOARD TABS CONFIG
// ============================================

const DASHBOARD_TABS: { value: DashboardTab; label: string; icon: ReactNode }[] = [
  { value: 'overview', label: 'Overview', icon: <GridIcon /> },
  { value: 'editor_performance', label: 'Editor Performance', icon: <UserCheckIcon /> },
  { value: 'resources', label: 'Resources', icon: <FolderIcon /> },
  { value: 'settings', label: 'Settings', icon: <GearIcon /> },
];

// ============================================
// MAIN COMPONENT
// ============================================

interface DashboardViewProps {
  requests: CreativeRequest[];
  onRequestClick?: (request: CreativeRequest) => void;
}

export const DashboardView = ({ requests, onRequestClick }: DashboardViewProps) => {
  const members = useTeamStore((s) => s.members);

  const [timePeriod, setTimePeriod] = useState<TimePeriod>('last_30_days');
  const [activeTab, setActiveTab] = useState<DashboardTab>('overview');

  // Custom date state (initialized from default period)
  const defaultRange = useMemo(() => getDateRange('last_30_days'), []);
  const [customFrom, setCustomFrom] = useState<string>(defaultRange.from.toISOString().slice(0, 10));
  const [customTo, setCustomTo] = useState<string>(defaultRange.to.toISOString().slice(0, 10));

  // Compute date range from selected period
  const { from, to } = useMemo(() => {
    if (timePeriod === 'custom') {
      return { from: new Date(customFrom), to: new Date(customTo) };
    }
    return getDateRange(timePeriod);
  }, [timePeriod, customFrom, customTo]);

  // Sync date inputs when preset is selected
  const handlePeriodChange = (period: TimePeriod) => {
    setTimePeriod(period);
    if (period !== 'custom') {
      const range = getDateRange(period);
      setCustomFrom(range.from.toISOString().slice(0, 10));
      setCustomTo(range.to.toISOString().slice(0, 10));
    }
  };

  // Filter requests by date range
  const filteredRequests = useMemo(() => {
    const toEnd = new Date(to);
    toEnd.setHours(23, 59, 59, 999);
    return requests.filter((r) => {
      const created = new Date(r.createdAt);
      return created >= from && created <= toEnd;
    });
  }, [requests, from, to]);

  // Helper: get effective deadline for a request (latest re-edit deadline if pending, else original dueDate)
  const getEffectiveDeadline = (r: CreativeRequest): string | null => {
    if (r.reEdits.length > 0) {
      const latestReEdit = r.reEdits[r.reEdits.length - 1];
      if (!latestReEdit.submittedAt) return latestReEdit.deadline;
    }
    return r.dueDate;
  };

  // Badge helpers for hover items
  const priorityBadge = (r: CreativeRequest) => ({
    badge: r.priority,
    badgeColor: r.priority === 'urgent' ? 'bg-red-100 text-red-700'
      : r.priority === 'high' ? 'bg-amber-100 text-amber-700'
      : r.priority === 'medium' ? 'bg-blue-100 text-blue-700'
      : 'bg-gray-100 text-gray-600',
  });

  const formatShortDate = (d: string) => new Date(d).toLocaleDateString('en-IN', { month: 'short', day: 'numeric' });

  // Compute all stats + hover data
  const stats = useMemo(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Completed: only truly closed (not moved back for re-edit)
    const completedList = filteredRequests.filter((r) => r.status === 'closed' && !r.isInReEdit);
    const total = filteredRequests.length;

    const totalItemsVal = filteredRequests.reduce((sum, r) => sum + r.totalItems, 0);
    const deliveredItems = completedList.reduce((sum, r) => sum + r.totalItems, 0);

    const inProgressList = filteredRequests.filter((r) => r.status === 'in_progress');
    const inReviewList = filteredRequests.filter((r) => r.status === 'review');

    // Overdue: use effective deadline (re-edit deadline if pending, else original)
    const overdueList = filteredRequests.filter((r) => {
      if (r.status === 'closed' || r.status === 'deleted') return false;
      const deadline = getEffectiveDeadline(r);
      if (!deadline) return false;
      const due = new Date(deadline);
      due.setHours(0, 0, 0, 0);
      return due < today;
    });

    const reEditRequestsList = filteredRequests.filter((r) => r.reEdits.length > 0);
    const totalReEdits = filteredRequests.reduce((sum, r) => sum + r.reEdits.length, 0);

    // Editor list for hover
    const editorList = members.filter((m) => m.role === 'editor');

    return {
      totalEditors: editorList.length,
      completed: completedList.length,
      completionRate: total > 0 ? Math.round((completedList.length / total) * 100) : 0,
      inProgress: inProgressList.length,
      inReview: inReviewList.length,
      totalItems: totalItemsVal,
      deliveredItems,
      overdue: overdueList.length,
      reEditCount: totalReEdits,
      reEditRequests: reEditRequestsList.length,
      // Hover data
      editorHover: editorList.map((m) => ({
        id: m.id,
        title: m.name,
        subtitle: m.email,
      })),
      completedHover: completedList.map((r) => ({
        id: r.id,
        title: r.title,
        subtitle: `${r.assigneeName ?? 'Unassigned'} · ${formatShortDate(r.createdAt)}`,
        ...priorityBadge(r),
      })),
      inProgressHover: inProgressList.map((r) => ({
        id: r.id,
        title: r.title,
        subtitle: `${r.assigneeName ?? 'Unassigned'} · ${r.dueDate ? formatShortDate(r.dueDate) : 'No due date'}`,
        ...priorityBadge(r),
      })),
      inReviewHover: inReviewList.map((r) => ({
        id: r.id,
        title: r.title,
        subtitle: `${r.assigneeName ?? 'Unassigned'} · ${formatShortDate(r.createdAt)}`,
        ...priorityBadge(r),
      })),
      totalItemsHover: filteredRequests
        .filter((r) => r.totalItems > 0)
        .sort((a, b) => b.totalItems - a.totalItems)
        .map((r) => ({
          id: r.id,
          title: r.title,
          subtitle: `${r.totalItems} items · ${REQUEST_STATUS_LABELS[r.status]}`,
          ...priorityBadge(r),
        })),
      overdueHover: overdueList.map((r) => {
        const deadline = getEffectiveDeadline(r);
        return {
          id: r.id,
          title: r.title,
          subtitle: `Due: ${deadline ? formatShortDate(deadline) : '—'} · ${r.assigneeName ?? 'Unassigned'}${r.isInReEdit ? ' · Re-Edit' : ''}`,
          badge: REQUEST_STATUS_LABELS[r.status],
          badgeColor: 'bg-red-100 text-red-700',
        };
      }),
      reEditHover: reEditRequestsList.map((r) => {
        const latest = r.reEdits[r.reEdits.length - 1];
        return {
          id: r.id,
          title: r.title,
          subtitle: `${r.reEdits.length} re-edit${r.reEdits.length > 1 ? 's' : ''} · Deadline: ${formatShortDate(latest.deadline)}`,
          badge: latest.submittedAt ? 'Done' : 'Pending',
          badgeColor: latest.submittedAt ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700',
        };
      }),
    };
  }, [filteredRequests, members]);

  const handleStatItemClick = (id: string) => {
    if (!onRequestClick) return;
    const request = requests.find((r) => r.id === id);
    if (request) onRequestClick(request);
  };

  return (
    <div className="space-y-6">
      {/* ── Time Period Filter ── */}
      <div className="flex flex-wrap items-center gap-4 rounded-2xl border-[2.5px] border-[var(--navy)] bg-[var(--surface)] px-5 py-3.5 shadow-[var(--shadow-sm)]">
        <div className="flex items-center gap-2">
          <span className="text-sm font-bold text-[var(--text-secondary)]">Time Period:</span>
          <select
            value={timePeriod}
            onChange={(e) => handlePeriodChange(e.target.value as TimePeriod)}
            className="rounded-xl border-[2px] border-[var(--border-light)] bg-[var(--surface)] px-3 py-1.5 text-sm font-medium text-[var(--text-primary)] outline-none transition-colors hover:border-[var(--navy)] focus:border-[var(--primary)]"
            aria-label="Select time period"
          >
            {TIME_PERIODS.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center gap-2">
          <label htmlFor="dashboard-from-date" className="text-sm text-[var(--text-secondary)]">From:</label>
          <input
            id="dashboard-from-date"
            type="date"
            value={customFrom}
            onChange={(e) => {
              if (e.target.value) {
                setCustomFrom(e.target.value);
                setTimePeriod('custom');
              }
            }}
            className="cursor-pointer rounded-xl border-[2px] border-[var(--border-light)] bg-[var(--surface)] px-3 py-1.5 text-sm font-medium text-[var(--text-primary)] outline-none transition-colors hover:border-[var(--navy)] focus:border-[var(--primary)]"
          />
        </div>

        <div className="flex items-center gap-2">
          <label htmlFor="dashboard-to-date" className="text-sm text-[var(--text-secondary)]">To:</label>
          <input
            id="dashboard-to-date"
            type="date"
            value={customTo}
            onChange={(e) => {
              if (e.target.value) {
                setCustomTo(e.target.value);
                setTimePeriod('custom');
              }
            }}
            className="cursor-pointer rounded-xl border-[2px] border-[var(--border-light)] bg-[var(--surface)] px-3 py-1.5 text-sm font-medium text-[var(--text-primary)] outline-none transition-colors hover:border-[var(--navy)] focus:border-[var(--primary)]"
          />
        </div>
      </div>

      {/* ── Stats Cards ── */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7">
        <StatCard
          label="Total Editors"
          value={stats.totalEditors}
          subtitle="Active team members"
          icon={<UsersIcon />}
          hoverItems={stats.editorHover}
        />
        <StatCard
          label="Completed"
          value={stats.completed}
          subtitle={`${stats.completionRate}% rate`}
          icon={<CheckCircleIcon />}
          hoverItems={stats.completedHover}
          onItemClick={handleStatItemClick}
        />
        <StatCard
          label="In Progress"
          value={stats.inProgress}
          subtitle="Being worked on"
          icon={<ActivityIcon />}
          hoverItems={stats.inProgressHover}
          onItemClick={handleStatItemClick}
        />
        <StatCard
          label="In Review"
          value={stats.inReview}
          subtitle="Awaiting approval"
          icon={<ClockIcon />}
          hoverItems={stats.inReviewHover}
          onItemClick={handleStatItemClick}
        />
        <StatCard
          label="Total Items"
          value={stats.totalItems}
          subtitle={`${stats.deliveredItems} delivered`}
          icon={<TargetIcon />}
          hoverItems={stats.totalItemsHover}
          onItemClick={handleStatItemClick}
        />
        <StatCard
          label="Overdue"
          value={stats.overdue}
          subtitle="Past due date"
          icon={<AlertTriangleIcon />}
          variant="danger"
          hoverItems={stats.overdueHover}
          onItemClick={handleStatItemClick}
        />
        <StatCard
          label="Re-Edits"
          value={stats.reEditCount}
          subtitle={`${stats.reEditRequests} requests`}
          icon={<RefreshIcon />}
          variant={stats.reEditCount > 0 ? 'warning' : 'default'}
          hoverItems={stats.reEditHover}
          onItemClick={handleStatItemClick}
        />
      </div>

      {/* ── Dashboard Sub-Tabs ── */}
      <div className="rounded-2xl border-[2.5px] border-[var(--navy)] bg-[var(--surface)] p-1 shadow-[var(--shadow-xs)]">
        <nav className="grid grid-cols-2 gap-1 sm:grid-cols-4" role="tablist" aria-label="Dashboard sections">
          {DASHBOARD_TABS.map((tab) => (
            <button
              key={tab.value}
              type="button"
              role="tab"
              aria-selected={activeTab === tab.value}
              onClick={() => setActiveTab(tab.value)}
              className={`
                flex items-center justify-center gap-2 rounded-xl py-2.5 text-sm font-bold
                transition-all duration-200
                ${
                  activeTab === tab.value
                    ? 'bg-[var(--primary)] text-white'
                    : 'text-[var(--text-tertiary)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-hover)]'
                }
              `}
            >
              {tab.icon}
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* ── Tab Content ── */}
      {activeTab === 'overview' && (
        <DashboardOverview requests={filteredRequests} from={from} to={to} />
      )}

      {activeTab === 'editor_performance' && (
        <DashboardEditorPerformance requests={filteredRequests} members={members} />
      )}

      {activeTab === 'resources' && <DashboardResources />}

      {activeTab === 'settings' && <DashboardEditorSettings />}
    </div>
  );
};
