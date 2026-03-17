'use client';

import { useMemo, useState, useCallback, useRef } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  ResponsiveContainer,
} from 'recharts';
import { REQUEST_TYPE_LABELS, SPECIALIZATION_LABELS } from '@/types';
import type { CreativeRequest, RequestType, EditorSpecialization } from '@/types';
import type { TeamMemberProfile } from '@/types';
import { useEditorSettingsStore } from '@/stores/editor-settings-store';
import { useTeamStore } from '@/stores/team-store';

// ============================================
// CONSTANTS
// ============================================

/** Content specialization categories derived from request types */
const CONTENT_CATEGORIES = ['Design', 'Video', 'UI/UX', 'Writing', 'Shooting', 'Anchor'] as const;
type ContentCategory = (typeof CONTENT_CATEGORIES)[number];

const TYPE_TO_CATEGORY: Record<RequestType, ContentCategory> = {
  design_graphics: 'Design',
  video: 'Video',
  ui_ux: 'UI/UX',
  writing: 'Writing',
  shooting: 'Shooting',
  anchor: 'Anchor',
};

const CATEGORY_COLORS: Record<ContentCategory, string> = {
  Design: '#8b5cf6',
  Video: '#f97316',
  'UI/UX': '#2383e2',
  Writing: '#10b981',
  Shooting: '#f43f5e',
  Anchor: '#f59e0b',
};

const CATEGORY_BG: Record<ContentCategory, string> = {
  Design: 'bg-purple-500',
  Video: 'bg-orange-500',
  'UI/UX': 'bg-blue-500',
  Writing: 'bg-emerald-500',
  Shooting: 'bg-rose-500',
  Anchor: 'bg-amber-500',
};

const CATEGORY_TEXT_BG: Record<ContentCategory, { bg: string; text: string }> = {
  Design: { bg: 'bg-green-600', text: 'text-white' },
  Video: { bg: 'bg-orange-500', text: 'text-white' },
  'UI/UX': { bg: 'bg-blue-600', text: 'text-white' },
  Writing: { bg: 'bg-emerald-600', text: 'text-white' },
  Shooting: { bg: 'bg-rose-600', text: 'text-white' },
  Anchor: { bg: 'bg-amber-600', text: 'text-white' },
};

/** Map EditorSpecialization (from settings store) → ContentCategory (for badges) */
const SPECIALIZATION_TO_CATEGORY: Record<EditorSpecialization, ContentCategory | null> = {
  design: 'Design',
  video: 'Video',
  ui_ux: 'UI/UX',
  writing: 'Writing',
  shooting: 'Shooting',
  anchor: 'Anchor',
  none: null,
};

const CHART_COLORS = {
  inProgress: '#f97316',
  review: '#0f766e',
  completed: '#22c55e',
  reEdit: '#d97706',
};

// ============================================
// ICONS
// ============================================

const BarChartIcon = () => (
  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <rect x="3" y="12" width="4" height="9" />
    <rect x="10" y="7" width="4" height="14" />
    <rect x="17" y="2" width="4" height="19" />
  </svg>
);

const TrendingUpIcon = () => (
  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </svg>
);

const ZapIcon = () => (
  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

// ============================================
// CHART CARD WRAPPER
// ============================================

interface ChartCardProps {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

const ChartCard = ({ title, icon, children, className = '' }: ChartCardProps) => (
  <div className={`rounded-2xl border-[2.5px] border-[var(--navy)] bg-[var(--surface)] p-6 shadow-[var(--shadow-sm)] ${className}`}>
    <h3 className="mb-4 flex items-center gap-2 text-sm font-extrabold text-[var(--text-primary)]">
      {icon}
      {title}
    </h3>
    {children}
  </div>
);

// ============================================
// DERIVED DATA TYPES
// ============================================

interface EditorStats {
  id: string;
  name: string;
  inProgress: number;
  review: number;
  completed: number;
  reEdit: number;
  active: number;
  done: number;
  onTimeRate: number;
  primaryCategory: ContentCategory | null;
  secondaryCategory: ContentCategory | null;
  categoryBreakdown: Record<ContentCategory, number>;
  thisWeekCompleted: number;
  itemsPerHour: number;
  timeAccuracy: number;
  /** Requests delivered on or before the due date */
  onTimeItems: CreativeRequest[];
  /** Requests delivered after the due date */
  lateItems: CreativeRequest[];
  /** Per-category specialization data */
  specializations: {
    category: ContentCategory;
    completed: number;
    total: number;
    thisWeek: number;
    thisWeekTarget: number;
    itemsPerHour: number;
    itemsPerHourTarget: number;
    onTimeRate: number;
    onTimeTarget: number;
  }[];
}

// ============================================
// DATA COMPUTATION
// ============================================

const computeEditorStats = (
  members: TeamMemberProfile[],
  requests: CreativeRequest[],
): EditorStats[] => {
  const now = new Date();
  const weekAgo = new Date(now);
  weekAgo.setDate(weekAgo.getDate() - 7);

  /** Get the effective deadline: latest pending re-edit deadline, or original dueDate */
  const getEffectiveDeadline = (r: CreativeRequest): string | null => {
    if (r.reEdits.length > 0) {
      const latest = r.reEdits[r.reEdits.length - 1];
      if (!latest.submittedAt) return latest.deadline;
    }
    return r.dueDate;
  };

  return members.map((member) => {
    const assigned = requests.filter(
      (r) => r.assigneeId === member.id && r.status !== 'deleted',
    );

    const inProgress = assigned.filter((r) => r.status === 'in_progress').length;
    const review = assigned.filter((r) => r.status === 'review' && !r.isInReEdit).length;
    // Truly completed: closed AND not in re-edit cycle
    const completed = assigned.filter((r) => r.status === 'closed' && !r.isInReEdit).length;
    // Tasks currently in re-edit cycle (any status)
    const reEdit = assigned.filter((r) => r.isInReEdit).length;

    // On-time / late calculation using closedAt vs effective deadline
    const closedWithDue = assigned.filter((r) => r.status === 'closed' && !r.isInReEdit && r.dueDate);
    const onTimeItems = closedWithDue.filter((r) => {
      if (!r.closedAt) return false;
      const closed = new Date(r.closedAt);
      closed.setHours(0, 0, 0, 0);
      const due = new Date(r.dueDate!);
      due.setHours(0, 0, 0, 0);
      return closed <= due;
    });
    const lateItems = closedWithDue.filter((r) => {
      if (!r.closedAt) return true; // no closedAt = treat as late
      const closed = new Date(r.closedAt);
      closed.setHours(0, 0, 0, 0);
      const due = new Date(r.dueDate!);
      due.setHours(0, 0, 0, 0);
      return closed > due;
    });
    const onTimeRate = closedWithDue.length > 0
      ? Math.round((onTimeItems.length / closedWithDue.length) * 100)
      : 0;

    // Category breakdown
    const categoryBreakdown: Record<ContentCategory, number> = { Design: 0, Video: 0, 'UI/UX': 0, Writing: 0, Shooting: 0, Anchor: 0 };
    assigned.forEach((r) => {
      const cat = TYPE_TO_CATEGORY[r.type];
      categoryBreakdown[cat]++;
    });

    // Primary & secondary categories
    const sortedCats = (Object.entries(categoryBreakdown) as [ContentCategory, number][])
      .filter(([, count]) => count > 0)
      .sort((a, b) => b[1] - a[1]);
    const primaryCategory = sortedCats[0]?.[0] ?? null;
    const secondaryCategory = sortedCats[1]?.[0] ?? null;

    // This week completed (truly closed, not in re-edit)
    const thisWeekCompleted = assigned.filter((r) => {
      if (r.status !== 'closed' || r.isInReEdit) return false;
      const created = new Date(r.createdAt);
      return created >= weekAgo;
    }).length;

    // Items per hour (approximate, truly closed only)
    const totalItems = assigned
      .filter((r) => r.status === 'closed' && !r.isInReEdit)
      .reduce((sum, r) => sum + r.totalItems, 0);
    const hours = Math.round(totalItems * 1.8);
    const itemsPerHour = hours > 0 ? Math.round((totalItems / hours) * 10) / 10 : 0;

    // Time accuracy (percentage of on-time items)
    const timeAccuracy = onTimeRate;

    // Specialization data per category
    const specializations = CONTENT_CATEGORIES
      .filter((cat) => categoryBreakdown[cat] > 0)
      .map((cat) => {
        const catRequests = assigned.filter((r) => TYPE_TO_CATEGORY[r.type] === cat);
        const catCompleted = catRequests.filter((r) => r.status === 'closed' && !r.isInReEdit).length;
        const catThisWeek = catRequests.filter((r) => {
          if (r.status !== 'closed' || r.isInReEdit) return false;
          const created = new Date(r.createdAt);
          return created >= weekAgo;
        }).length;
        const catItems = catRequests
          .filter((r) => r.status === 'closed' && !r.isInReEdit)
          .reduce((sum, r) => sum + r.totalItems, 0);
        const catHours = Math.round(catItems * (cat === 'Video' ? 3 : 1.5));
        const catItemsPerHour = catHours > 0 ? Math.round((catItems / catHours) * 10) / 10 : 0;
        const catWithDue = catRequests.filter((r) => r.status === 'closed' && !r.isInReEdit && r.dueDate);
        const catOnTime = catWithDue.filter((r) => {
          if (!r.closedAt) return false;
          const closed = new Date(r.closedAt);
          closed.setHours(0, 0, 0, 0);
          const due = new Date(r.dueDate!);
          due.setHours(0, 0, 0, 0);
          return closed <= due;
        }).length;
        const catOnTimeRate = catWithDue.length > 0
          ? Math.round((catOnTime / catWithDue.length) * 100)
          : 0;

        return {
          category: cat,
          completed: catCompleted,
          total: catRequests.length,
          thisWeek: catThisWeek,
          thisWeekTarget: 30,
          itemsPerHour: catItemsPerHour,
          itemsPerHourTarget: 2,
          onTimeRate: catOnTimeRate,
          onTimeTarget: 90,
        };
      });

    return {
      id: member.id,
      name: member.name,
      inProgress,
      review,
      completed,
      reEdit,
      active: inProgress + review,
      done: completed,
      onTimeRate,
      primaryCategory,
      secondaryCategory,
      categoryBreakdown,
      thisWeekCompleted,
      itemsPerHour,
      timeAccuracy,
      onTimeItems,
      lateItems,
      specializations,
    };
  });
};

// ============================================
// CATEGORY BADGE
// ============================================

const CategoryBadge = ({ category }: { category: ContentCategory | null }) => {
  if (!category) return <span className="text-sm text-[var(--text-tertiary)]">—</span>;
  const { bg, text } = CATEGORY_TEXT_BG[category];
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-bold ${bg} ${text}`}>
      {category}
    </span>
  );
};

// ============================================
// PERCENTAGE BADGE
// ============================================

const PercentBadge = ({ value }: { value: number }) => {
  const isActive = value > 0;
  return (
    <span
      className={`inline-flex items-center justify-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
        isActive
          ? 'bg-emerald-50 text-emerald-700'
          : 'bg-gray-100 text-gray-400'
      }`}
    >
      {value}%
    </span>
  );
};

// ============================================
// 1. EDITOR WORKLOAD CHART
// ============================================

interface WorkloadChartProps {
  editors: EditorStats[];
}

const EditorWorkloadChart = ({ editors }: WorkloadChartProps) => {
  const data = useMemo(
    () =>
      editors
        .map((e) => ({
          name: e.name.length > 15 ? e.name.slice(0, 15) + '…' : e.name,
          fullName: e.name,
          'In Progress': e.inProgress,
          Review: e.review,
          'Re-Edit': e.reEdit,
          Completed: e.completed,
        }))
        .reverse(),
    [editors],
  );

  return (
    <ChartCard title="Editor Workload" icon={<BarChartIcon />}>
      <ResponsiveContainer width="100%" height={Math.max(300, editors.length * 40)}>
        <BarChart data={data} layout="vertical" margin={{ top: 0, right: 30, left: 20, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#CBD5E1" horizontal={false} />
          <XAxis type="number" tick={{ fill: 'var(--text-tertiary)', fontSize: 12 }} />
          <YAxis
            type="category"
            dataKey="name"
            width={130}
            tick={{ fill: 'var(--text-secondary)', fontSize: 12 }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: '#FFFFFF',
              border: '2.5px solid #1E293B',
              borderRadius: '12px',
              fontSize: 13,
              boxShadow: '3px 3px 0px #1E293B',
            }}
            labelFormatter={(label) => {
              const item = data.find((d) => d.name === String(label));
              return item?.fullName ?? String(label);
            }}
          />
          <Legend
            verticalAlign="bottom"
            iconType="square"
            wrapperStyle={{ fontSize: 12, paddingTop: 16 }}
          />
          <Bar dataKey="In Progress" stackId="a" fill={CHART_COLORS.inProgress} radius={[0, 0, 0, 0]} />
          <Bar dataKey="Review" stackId="a" fill={CHART_COLORS.review} />
          <Bar dataKey="Re-Edit" stackId="a" fill={CHART_COLORS.reEdit} />
          <Bar dataKey="Completed" stackId="a" fill={CHART_COLORS.completed} radius={[0, 4, 4, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </ChartCard>
  );
};

// ============================================
// 2. EDITOR PERFORMANCE TABLE
// ============================================

/** Unique key for an expanded cell: editorId + column */
type ExpandedCell = `${string}:${'onTime' | 'late'}` | null;

interface PerformanceTableProps {
  editors: EditorStats[];
}

/** Inline item list shown when clicking on-time / late count */
const RequestItemList = ({ items }: { items: CreativeRequest[] }) => {
  if (items.length === 0) {
    return (
      <p className="py-3 text-center text-xs text-[var(--text-tertiary)]">No items</p>
    );
  }

  return (
    <div className="max-h-60 overflow-y-auto">
      <table className="w-full text-left text-xs">
        <thead>
          <tr className="border-b border-[var(--border)]">
            <th className="pb-2 pr-3 font-medium text-[var(--text-tertiary)]">Title</th>
            <th className="pb-2 px-3 font-medium text-[var(--text-tertiary)]">Type</th>
            <th className="pb-2 px-3 font-medium text-[var(--text-tertiary)]">Items</th>
            <th className="pb-2 px-3 font-medium text-[var(--text-tertiary)]">Due Date</th>
            <th className="pb-2 pl-3 font-medium text-[var(--text-tertiary)]">Closed</th>
          </tr>
        </thead>
        <tbody>
          {items.map((r) => (
            <tr key={r.id} className="border-b border-[var(--border)] last:border-b-0">
              <td className="py-2 pr-3 text-[var(--text-primary)]">
                {r.title.length > 30 ? r.title.slice(0, 30) + '…' : r.title}
              </td>
              <td className="py-2 px-3 text-[var(--text-secondary)]">
                {REQUEST_TYPE_LABELS[r.type]}
              </td>
              <td className="py-2 px-3 text-center text-[var(--text-primary)]">{r.totalItems}</td>
              <td className="py-2 px-3 text-[var(--text-secondary)]">
                {r.dueDate ? new Date(r.dueDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) : '—'}
              </td>
              <td className="py-2 pl-3 text-[var(--text-secondary)]">
                {r.closedAt ? new Date(r.closedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) : '—'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const EditorPerformanceTable = ({ editors }: PerformanceTableProps) => {
  const [expanded, setExpanded] = useState<ExpandedCell>(null);
  const editorSettings = useEditorSettingsStore((s) => s.settings);

  const toggle = useCallback((editorId: string, col: 'onTime' | 'late') => {
    const key: ExpandedCell = `${editorId}:${col}`;
    setExpanded((prev) => (prev === key ? null : key));
  }, []);

  /** Chevron icon for expandable buttons */
  const ChevronDown = ({ open }: { open: boolean }) => (
    <svg
      width="10" height="10" viewBox="0 0 10 10" fill="none"
      className={`transition-transform ${open ? 'rotate-180' : ''}`}
    >
      <path d="M2 4L5 7L8 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  return (
    <ChartCard title="Editor Performance" icon={<TrendingUpIcon />}>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b-[2px] border-[var(--border-light)]">
              <th className="pb-3 pr-4 font-bold text-xs uppercase tracking-wide text-[var(--text-secondary)]">Editor</th>
              <th className="pb-3 px-4 text-center font-bold text-xs uppercase tracking-wide text-[var(--text-secondary)]">P1</th>
              <th className="pb-3 px-4 text-center font-bold text-xs uppercase tracking-wide text-[var(--text-secondary)]">P2</th>
              <th className="pb-3 px-4 text-center font-bold text-xs uppercase tracking-wide text-[var(--text-secondary)]">Active</th>
              <th className="pb-3 px-4 text-center font-bold text-xs uppercase tracking-wide text-[var(--text-secondary)]">Re-Edit</th>
              <th className="pb-3 px-4 text-center font-bold text-xs uppercase tracking-wide text-[var(--text-secondary)]">Done</th>
              <th className="pb-3 px-4 text-center font-bold text-xs uppercase tracking-wide text-[var(--text-secondary)]">On-Time</th>
              <th className="pb-3 pl-4 text-center font-bold text-xs uppercase tracking-wide text-[var(--text-secondary)]">Late</th>
            </tr>
          </thead>
            {editors.map((editor) => {
              const isOnTimeExpanded = expanded === `${editor.id}:onTime`;
              const isLateExpanded = expanded === `${editor.id}:late`;
              const hasExpanded = isOnTimeExpanded || isLateExpanded;

              // P1/P2 from editor settings store (actual configured data)
              const settings = editorSettings[editor.id];
              const p1Category = settings ? SPECIALIZATION_TO_CATEGORY[settings.p1] : null;
              const p2Category = settings ? SPECIALIZATION_TO_CATEGORY[settings.p2] : null;

              return (
                <tbody key={editor.id}>
                  {/* Main data row */}
                  <tr className="border-b-[2px] border-[var(--border-light)]">
                    <td className="py-3.5 pr-4 font-medium text-[var(--text-primary)]">
                      {editor.name.length > 20 ? editor.name.slice(0, 20) + '…' : editor.name}
                    </td>
                    <td className="py-3.5 px-4 text-center">
                      <CategoryBadge category={p1Category} />
                    </td>
                    <td className="py-3.5 px-4 text-center">
                      <CategoryBadge category={p2Category} />
                    </td>
                    <td className="py-3.5 px-4 text-center text-[var(--text-primary)]">
                      {editor.active}
                    </td>
                    <td className="py-3.5 px-4 text-center">
                      {editor.reEdit > 0 ? (
                        <span className="inline-flex items-center justify-center rounded-full border-[1.5px] border-amber-300 bg-amber-50 px-2.5 py-0.5 text-xs font-bold text-amber-700">
                          {editor.reEdit}
                        </span>
                      ) : (
                        <span className="text-sm text-[var(--text-tertiary)]">0</span>
                      )}
                    </td>
                    <td className="py-3.5 px-4 text-center text-[var(--text-primary)]">
                      {editor.done}
                    </td>
                    <td className="py-3.5 px-4 text-center">
                      <button
                        type="button"
                        onClick={() => toggle(editor.id, 'onTime')}
                        disabled={editor.onTimeItems.length === 0}
                        className={`
                          inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors
                          ${editor.onTimeItems.length > 0
                            ? 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100 cursor-pointer'
                            : 'bg-gray-100 text-gray-400 cursor-default'
                          }
                          ${isOnTimeExpanded ? 'ring-2 ring-emerald-300' : ''}
                        `}
                        aria-expanded={isOnTimeExpanded}
                        aria-label={`${editor.onTimeItems.length} on-time deliveries by ${editor.name}`}
                      >
                        {editor.onTimeItems.length}
                        {editor.onTimeItems.length > 0 && <ChevronDown open={isOnTimeExpanded} />}
                      </button>
                    </td>
                    <td className="py-3.5 pl-4 text-center">
                      <button
                        type="button"
                        onClick={() => toggle(editor.id, 'late')}
                        disabled={editor.lateItems.length === 0}
                        className={`
                          inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors
                          ${editor.lateItems.length > 0
                            ? 'bg-red-50 text-red-600 hover:bg-red-100 cursor-pointer'
                            : 'bg-gray-100 text-gray-400 cursor-default'
                          }
                          ${isLateExpanded ? 'ring-2 ring-red-300' : ''}
                        `}
                        aria-expanded={isLateExpanded}
                        aria-label={`${editor.lateItems.length} late deliveries by ${editor.name}`}
                      >
                        {editor.lateItems.length}
                        {editor.lateItems.length > 0 && <ChevronDown open={isLateExpanded} />}
                      </button>
                    </td>
                  </tr>

                  {/* Expanded item list row */}
                  {hasExpanded && (
                    <tr className="border-b-[2px] border-[var(--border-light)]">
                      <td colSpan={8} className="bg-[var(--background)] px-4 py-3">
                        <p className="mb-2 text-xs font-semibold text-[var(--text-secondary)]">
                          {isOnTimeExpanded ? 'On-Time Deliveries' : 'Late Deliveries'}
                          <span className="ml-1 font-normal text-[var(--text-tertiary)]">
                            ({isOnTimeExpanded ? editor.onTimeItems.length : editor.lateItems.length} items)
                          </span>
                        </p>
                        <RequestItemList
                          items={isOnTimeExpanded ? editor.onTimeItems : editor.lateItems}
                        />
                      </td>
                    </tr>
                  )}
                </tbody>
              );
            })}
        </table>
      </div>
    </ChartCard>
  );
};

// ============================================
// 3. EDITOR PERFORMANCE DETAIL (tabbed)
// ============================================

interface PerformanceDetailProps {
  editors: EditorStats[];
}

const EditorPerformanceDetail = ({ editors }: PerformanceDetailProps) => {
  const editorsWithWork = editors.filter(
    (e) => e.done > 0 || e.active > 0,
  );
  const [selectedId, setSelectedId] = useState<string>(
    editorsWithWork[0]?.id ?? editors[0]?.id ?? '',
  );

  const selected = editors.find((e) => e.id === selectedId);
  if (!selected) return null;

  return (
    <ChartCard title="Editor Performance" icon={<ZapIcon />}>
      {/* Editor tabs */}
      <div className="mb-6 flex flex-wrap gap-1 border-b border-[var(--border)] pb-0">
        {editors.map((editor) => {
          const isActive = editor.id === selectedId;
          const total = editor.done + editor.active;
          return (
            <button
              key={editor.id}
              type="button"
              onClick={() => setSelectedId(editor.id)}
              className={`
                flex items-center gap-1.5 px-3 py-2 text-xs font-medium transition-colors
                ${isActive
                  ? 'border-b-2 border-[var(--text-primary)] text-[var(--text-primary)]'
                  : 'text-[var(--text-tertiary)] hover:text-[var(--text-secondary)]'
                }
              `}
            >
              {editor.name.split(' ')[0]}
              {editor.name.split(' ')[1] ? ` ${editor.name.split(' ')[1][0]}.` : ''}
              <span
                className={`inline-flex items-center justify-center rounded-full px-1.5 py-0 text-[10px] font-semibold ${
                  isActive
                    ? 'bg-[var(--text-primary)] text-white'
                    : 'bg-gray-100 text-gray-500'
                }`}
              >
                {total}
              </span>
            </button>
          );
        })}
      </div>

      {/* Selected editor header */}
      <div className="mb-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {selected.primaryCategory && (
            <>
              <span className="rounded-[var(--radius-sm)] bg-gray-100 px-2 py-0.5 text-xs font-semibold text-[var(--text-secondary)]">
                P1
              </span>
              <CategoryBadge category={selected.primaryCategory} />
            </>
          )}
        </div>
        <div className="flex items-center gap-4">
          <div className="text-right">
            <span className="text-xs text-[var(--text-tertiary)]">On-Time</span>
            <p className="text-lg font-bold text-emerald-600">{selected.onTimeItems.length}</p>
          </div>
          <div className="text-right">
            <span className="text-xs text-[var(--text-tertiary)]">Late</span>
            <p className="text-lg font-bold text-red-500">{selected.lateItems.length}</p>
          </div>
        </div>
      </div>

      {/* Stats row */}
      <div className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
        <StatMini
          icon={
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
            </svg>
          }
          label="Time Accuracy"
          value={`${selected.timeAccuracy}%`}
        />
        <StatMini
          icon={
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
          }
          label="This Week"
          value={`${selected.thisWeekCompleted} completed`}
        />
        <StatMini
          icon={
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>
          }
          label="Items/Hour"
          value={`${selected.itemsPerHour}`}
        />
        <StatMini
          icon={
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" />
              <path d="M16 12l-4-4-4 4" /><path d="M12 16V8" />
            </svg>
          }
          label="On-Time Rate"
          value={`${selected.onTimeRate}%`}
        />
      </div>

      {/* Specialization Performance */}
      {selected.specializations.length > 0 && (
        <div>
          <h4 className="mb-3 text-sm font-semibold text-[var(--text-primary)]">
            Specialization Performance
          </h4>
          <div className="space-y-4">
            {selected.specializations.map((spec) => (
              <div
                key={spec.category}
                className="rounded-2xl border-[2px] border-[var(--border-light)] bg-[var(--background)] p-4"
              >
                <div className="mb-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span
                      className={`inline-block h-2.5 w-2.5 rounded-full ${CATEGORY_BG[spec.category]}`}
                    />
                    <span className="text-sm font-medium text-[var(--text-primary)]">
                      {spec.category}
                    </span>
                    {selected.primaryCategory === spec.category && (
                      <span className="rounded-[var(--radius-sm)] bg-gray-200 px-1.5 py-0 text-[10px] font-semibold text-[var(--text-secondary)]">
                        P1
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-[var(--text-tertiary)]">
                    {spec.completed} completed
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                  <SpecMetric
                    label="Time Accuracy"
                    value="0%"
                  />
                  <SpecMetric
                    label="This Week"
                    value={`${spec.thisWeek}/${spec.thisWeekTarget}`}
                    trending={spec.thisWeek > 0}
                  />
                  <SpecMetric
                    label="Items/Hour"
                    value={`${spec.itemsPerHour}/${spec.itemsPerHourTarget}`}
                    trending={spec.itemsPerHour > 0}
                  />
                  <SpecMetric
                    label="On-Time"
                    value={`${spec.onTimeRate}%/${spec.onTimeTarget}%`}
                    trending={spec.onTimeRate > 0}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </ChartCard>
  );
};

/** Small stat card within the detail section */
const StatMini = ({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) => (
  <div className="rounded-xl border-[2px] border-[var(--border-light)] bg-[var(--background)] px-4 py-3">
    <div className="mb-1 flex items-center gap-1.5 text-[var(--text-tertiary)]">
      {icon}
      <span className="text-xs">{label}</span>
    </div>
    <p className="text-lg font-bold text-[var(--text-primary)]">{value}</p>
  </div>
);

/** Specialization metric with optional trending indicator */
const SpecMetric = ({
  label,
  value,
  trending,
}: {
  label: string;
  value: string;
  trending?: boolean;
}) => (
  <div>
    <p className="text-xs text-[var(--text-tertiary)]">{label}</p>
    <div className="flex items-center gap-1">
      <span className="text-sm font-semibold text-[var(--text-primary)]">{value}</span>
      {trending !== undefined && (
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          className={trending ? 'text-emerald-500' : 'text-red-400'}
        >
          <path
            d={trending ? 'M1 7L5 3L9 7' : 'M1 3L5 7L9 3'}
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </div>
  </div>
);

// ============================================
// 4. EXTRA WORK BY EDITOR (scrollable cards)
// ============================================

interface ExtraWorkProps {
  editors: EditorStats[];
  requests: CreativeRequest[];
}

/** Arrow button for horizontal scroll */
const ScrollArrow = ({ direction, onClick }: { direction: 'left' | 'right'; onClick: () => void }) => (
  <button
    type="button"
    onClick={onClick}
    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-[2px] border-[var(--navy)] bg-[var(--surface)] text-[var(--text-secondary)] shadow-[2px_2px_0px_#1E293B] transition-all hover:bg-[var(--background)] hover:text-[var(--text-primary)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none"
    aria-label={`Scroll ${direction}`}
  >
    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      {direction === 'left'
        ? <polyline points="15 18 9 12 15 6" />
        : <polyline points="9 6 15 12 9 18" />
      }
    </svg>
  </button>
);

interface EditorWorkBreakdown {
  editorId: string;
  editorName: string;
  p1Category: ContentCategory | null;
  /** All categories with work, including P1 */
  categories: { category: ContentCategory; count: number; isP1: boolean }[];
  totalTasks: number;
}

const EditorExtraWorkChart = ({ editors, requests }: ExtraWorkProps) => {
  const editorSettings = useEditorSettingsStore((s) => s.settings);
  const scrollRef = useRef<HTMLDivElement>(null);

  const data = useMemo((): EditorWorkBreakdown[] => {
    return editors.map((editor) => {
      const settings = editorSettings[editor.id];
      const p1Category = settings ? SPECIALIZATION_TO_CATEGORY[settings.p1] : null;

      // Count non-deleted assigned requests per category
      const assigned = requests.filter(
        (r) => r.assigneeId === editor.id && r.status !== 'deleted',
      );
      const catCounts: Partial<Record<ContentCategory, number>> = {};
      for (const r of assigned) {
        const cat = TYPE_TO_CATEGORY[r.type];
        catCounts[cat] = (catCounts[cat] ?? 0) + 1;
      }

      // All categories with count > 0, P1 first then extras
      const categories = CONTENT_CATEGORIES
        .filter((cat) => (catCounts[cat] ?? 0) > 0)
        .map((cat) => ({
          category: cat,
          count: catCounts[cat]!,
          isP1: cat === p1Category,
        }))
        .sort((a, b) => {
          // P1 first, then by count descending
          if (a.isP1 && !b.isP1) return -1;
          if (!a.isP1 && b.isP1) return 1;
          return b.count - a.count;
        });

      return {
        editorId: editor.id,
        editorName: editor.name,
        p1Category,
        categories,
        totalTasks: assigned.length,
      };
    });
  }, [editors, requests, editorSettings]);

  const scroll = useCallback((dir: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === 'left' ? -300 : 300, behavior: 'smooth' });
  }, []);

  return (
    <ChartCard title="Work Breakdown by Editor">
      <p className="mb-4 text-xs text-[var(--text-tertiary)]">
        All assigned work per editor by category. P1 tasks are marked. Deleted cards excluded.
      </p>

      {/* Scroll controls + cards */}
      <div className="flex items-center gap-2">
        <ScrollArrow direction="left" onClick={() => scroll('left')} />

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scroll-smooth py-1"
          style={{ scrollbarWidth: 'thin' }}
        >
          {data.map((editor) => {
            const maxCount = editor.categories.length > 0
              ? Math.max(...editor.categories.map((c) => c.count))
              : 0;

            return (
              <div
                key={editor.editorId}
                className="flex w-72 shrink-0 flex-col rounded-2xl border-[2.5px] border-[var(--navy)] bg-[var(--background)] p-4 shadow-[var(--shadow-xs)]"
              >
                {/* Editor name + P1 label */}
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-sm font-semibold text-[var(--text-primary)]">
                    {editor.editorName.length > 16 ? editor.editorName.slice(0, 16) + '…' : editor.editorName}
                  </span>
                  {editor.p1Category && (
                    <span className="rounded-[var(--radius-sm)] bg-gray-100 px-1.5 py-0.5 text-[10px] font-medium text-[var(--text-tertiary)]">
                      P1: {editor.p1Category}
                    </span>
                  )}
                </div>

                {/* Category bars */}
                {editor.categories.length > 0 ? (
                  <div className="space-y-2.5">
                    {editor.categories.map(({ category, count, isP1 }) => {
                      const pct = maxCount > 0 ? (count / maxCount) * 100 : 0;

                      return (
                        <div key={category}>
                          <div className="mb-1 flex items-center justify-between">
                            <div className="flex items-center gap-1.5">
                              <span
                                className="inline-block h-2.5 w-2.5 rounded-sm"
                                style={{ backgroundColor: CATEGORY_COLORS[category] }}
                              />
                              <span className="text-xs text-[var(--text-secondary)]">{category}</span>
                              {isP1 && (
                                <span className="rounded bg-gray-200 px-1 py-px text-[9px] font-bold text-[var(--text-tertiary)]">
                                  P1
                                </span>
                              )}
                            </div>
                            <span className="text-xs font-semibold text-[var(--text-primary)]">{count}</span>
                          </div>
                          <div className="h-2 w-full overflow-hidden rounded-full bg-gray-100">
                            <div
                              className="h-full rounded-full transition-all"
                              style={{
                                width: `${pct}%`,
                                backgroundColor: CATEGORY_COLORS[category],
                              }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <p className="py-4 text-center text-xs text-[var(--text-tertiary)]">No tasks assigned</p>
                )}

                {/* Total */}
                <div className="mt-3 flex items-center justify-between border-t border-[var(--border)] pt-2">
                  <span className="text-xs text-[var(--text-tertiary)]">Total tasks</span>
                  <span className="text-xs font-semibold text-[var(--text-primary)]">
                    {editor.totalTasks}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <ScrollArrow direction="right" onClick={() => scroll('right')} />
      </div>

      {/* Legend */}
      <div className="mt-4 flex flex-wrap gap-3">
        {CONTENT_CATEGORIES.map((cat) => (
          <div key={cat} className="flex items-center gap-1.5">
            <span
              className="inline-block h-2.5 w-2.5 rounded-sm"
              style={{ backgroundColor: CATEGORY_COLORS[cat] }}
            />
            <span className="text-xs text-[var(--text-tertiary)]">{cat}</span>
          </div>
        ))}
      </div>
    </ChartCard>
  );
};

// ============================================
// MAIN EXPORT
// ============================================

interface DashboardEditorPerformanceProps {
  requests: CreativeRequest[];
  members: TeamMemberProfile[];
}

export const DashboardEditorPerformance = ({
  requests,
  members,
}: DashboardEditorPerformanceProps) => {
  const memberActivity = useTeamStore((s) => s.memberActivity);
  const isInactive = useTeamStore((s) => s.isInactive);

  // Include editors + admins/owners with preserveMetrics (promoted editors who keep their data)
  const metricsMembers = useMemo(
    () => members.filter((m) => {
      // Always include editors
      if (m.role === 'editor') {
        // But hide if inactive for 20+ days with no task assignment
        return !isInactive(m.id);
      }
      // Include admins/owners only if they have preserveMetrics flag (former editors)
      if (m.role === 'admin' || m.role === 'owner') {
        const activity = memberActivity[m.id];
        if (activity?.preserveMetrics) {
          return !isInactive(m.id);
        }
      }
      return false;
    }),
    [members, memberActivity, isInactive],
  );

  const editors = useMemo(
    () => computeEditorStats(metricsMembers, requests),
    [metricsMembers, requests],
  );

  return (
    <div className="space-y-6">
      {/* Row 1: Editor Workload */}
      <EditorWorkloadChart editors={editors} />

      {/* Row 2: Editor Performance Table */}
      <EditorPerformanceTable editors={editors} />

      {/* Row 4: Efficiency by Type */}
      <EditorExtraWorkChart editors={editors} requests={requests} />
    </div>
  );
};
