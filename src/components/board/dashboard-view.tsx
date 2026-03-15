'use client';

import { useState, useMemo } from 'react';
import type { ReactNode } from 'react';
import type { CreativeRequest } from '@/types';
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
// STAT CARD
// ============================================

interface StatCardProps {
  label: string;
  value: number;
  subtitle: string;
  icon: ReactNode;
  variant?: 'default' | 'danger';
}

const StatCard = ({ label, value, subtitle, icon, variant = 'default' }: StatCardProps) => (
  <div
    className={`
      rounded-[var(--radius-lg)] border bg-[var(--surface)] p-5
      ${variant === 'danger' ? 'border-red-200' : 'border-[var(--border)]'}
    `}
  >
    <div className="mb-3 flex items-center justify-between">
      <span className="text-sm font-medium text-[var(--text-primary)]">{label}</span>
      <span className={variant === 'danger' ? 'text-red-500' : 'text-[var(--text-tertiary)]'}>
        {icon}
      </span>
    </div>
    <p
      className={`text-3xl font-bold ${
        variant === 'danger' ? 'text-red-500' : 'text-[var(--text-primary)]'
      }`}
    >
      {value}
    </p>
    <p className="mt-1 text-sm text-[var(--text-tertiary)]">{subtitle}</p>
  </div>
);

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
}

export const DashboardView = ({ requests }: DashboardViewProps) => {
  const members = useTeamStore((s) => s.members);

  const [timePeriod, setTimePeriod] = useState<TimePeriod>('last_30_days');
  const [activeTab, setActiveTab] = useState<DashboardTab>('overview');

  // Compute date range from selected period
  const { from, to } = useMemo(() => getDateRange(timePeriod), [timePeriod]);

  // Filter requests by date range
  const filteredRequests = useMemo(() => {
    const toEnd = new Date(to);
    toEnd.setHours(23, 59, 59, 999);
    return requests.filter((r) => {
      const created = new Date(r.createdAt);
      return created >= from && created <= toEnd;
    });
  }, [requests, from, to]);

  // Compute all stats
  const stats = useMemo(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const completed = filteredRequests.filter((r) => r.status === 'closed').length;
    const total = filteredRequests.length;
    const totalItems = filteredRequests.reduce((sum, r) => sum + r.totalItems, 0);
    const deliveredItems = filteredRequests
      .filter((r) => r.status === 'closed')
      .reduce((sum, r) => sum + r.totalItems, 0);
    const overdue = filteredRequests.filter((r) => {
      if (r.status === 'closed' || !r.dueDate) return false;
      const due = new Date(r.dueDate);
      due.setHours(0, 0, 0, 0);
      return due < today;
    }).length;

    return {
      totalEditors: members.length,
      completed,
      completionRate: total > 0 ? Math.round((completed / total) * 100) : 0,
      inProgress: filteredRequests.filter((r) => r.status === 'in_progress').length,
      inReview: filteredRequests.filter((r) => r.status === 'review').length,
      totalItems,
      deliveredItems,
      overdue,
    };
  }, [filteredRequests, members]);

  return (
    <div className="space-y-6">
      {/* ── Time Period Filter ── */}
      <div className="flex flex-wrap items-center gap-4 rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] px-5 py-3.5">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-[var(--text-secondary)]">Time Period:</span>
          <select
            value={timePeriod}
            onChange={(e) => setTimePeriod(e.target.value as TimePeriod)}
            className="rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 text-sm text-[var(--text-primary)] outline-none transition-colors hover:border-[var(--border-hover)] focus:border-[var(--primary)]"
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
          <span className="text-sm text-[var(--text-secondary)]">From:</span>
          <div className="flex items-center gap-1.5 rounded-[var(--radius-md)] border border-[var(--border)] px-3 py-1.5">
            <span className="text-[var(--text-tertiary)]">
              <CalendarIcon />
            </span>
            <span className="text-sm text-[var(--text-primary)]">{formatDisplayDate(from)}</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-sm text-[var(--text-secondary)]">To:</span>
          <div className="flex items-center gap-1.5 rounded-[var(--radius-md)] border border-[var(--border)] px-3 py-1.5">
            <span className="text-[var(--text-tertiary)]">
              <CalendarIcon />
            </span>
            <span className="text-sm text-[var(--text-primary)]">{formatDisplayDate(to)}</span>
          </div>
        </div>
      </div>

      {/* ── Stats Cards ── */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 xl:grid-cols-6">
        <StatCard
          label="Total Editors"
          value={stats.totalEditors}
          subtitle="Active team members"
          icon={<UsersIcon />}
        />
        <StatCard
          label="Completed"
          value={stats.completed}
          subtitle={`${stats.completionRate}% rate`}
          icon={<CheckCircleIcon />}
        />
        <StatCard
          label="In Progress"
          value={stats.inProgress}
          subtitle="Being worked on"
          icon={<ActivityIcon />}
        />
        <StatCard
          label="In Review"
          value={stats.inReview}
          subtitle="Awaiting approval"
          icon={<ClockIcon />}
        />
        <StatCard
          label="Total Items"
          value={stats.totalItems}
          subtitle={`${stats.deliveredItems} delivered`}
          icon={<TargetIcon />}
        />
        <StatCard
          label="Overdue"
          value={stats.overdue}
          subtitle="Past due date"
          icon={<AlertTriangleIcon />}
          variant="danger"
        />
      </div>

      {/* ── Dashboard Sub-Tabs ── */}
      <div className="border-b border-[var(--border)]">
        <nav className="grid grid-cols-4" role="tablist" aria-label="Dashboard sections">
          {DASHBOARD_TABS.map((tab) => (
            <button
              key={tab.value}
              type="button"
              role="tab"
              aria-selected={activeTab === tab.value}
              onClick={() => setActiveTab(tab.value)}
              className={`
                flex items-center justify-center gap-2 py-3.5 text-sm font-medium
                transition-colors duration-[var(--transition-fast)]
                ${
                  activeTab === tab.value
                    ? 'border-b-2 border-[var(--text-primary)] text-[var(--text-primary)]'
                    : 'text-[var(--text-tertiary)] hover:text-[var(--text-secondary)]'
                }
              `}
            >
              {tab.icon}
              {tab.label}
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
