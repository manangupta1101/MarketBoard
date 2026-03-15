'use client';

import { useMemo, useState } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  ResponsiveContainer,
} from 'recharts';
import type { CreativeRequest, RequestType } from '@/types';
import type { TeamMemberProfile } from '@/types';

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

const CHART_COLORS = {
  inProgress: '#f97316',
  review: '#0f766e',
  completed: '#22c55e',
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
  <div className={`rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] p-6 ${className}`}>
    <h3 className="mb-4 flex items-center gap-2 text-sm font-bold text-[var(--text-primary)]">
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
  active: number;
  done: number;
  hours: number;
  onTimeRate: number;
  score: number;
  primaryCategory: ContentCategory | null;
  secondaryCategory: ContentCategory | null;
  categoryBreakdown: Record<ContentCategory, number>;
  thisWeekCompleted: number;
  itemsPerHour: number;
  timeAccuracy: number;
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

  return members.map((member) => {
    const assigned = requests.filter(
      (r) => r.assigneeId === member.id && r.status !== 'deleted',
    );

    const inProgress = assigned.filter((r) => r.status === 'in_progress').length;
    const review = assigned.filter((r) => r.status === 'review').length;
    const completed = assigned.filter((r) => r.status === 'closed').length;

    // On-time calculation
    const withDueDate = assigned.filter((r) => r.status === 'closed' && r.dueDate);
    const onTime = withDueDate.filter((r) => {
      const created = new Date(r.createdAt);
      const due = new Date(r.dueDate!);
      return created <= due;
    }).length;
    const onTimeRate = withDueDate.length > 0
      ? Math.round((onTime / withDueDate.length) * 100)
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

    // This week completed
    const thisWeekCompleted = assigned.filter((r) => {
      if (r.status !== 'closed') return false;
      const created = new Date(r.createdAt);
      return created >= weekAgo;
    }).length;

    // Simulated hours (based on items completed, ~1.5h per item for design, ~3h for video)
    const totalItems = assigned
      .filter((r) => r.status === 'closed')
      .reduce((sum, r) => sum + r.totalItems, 0);
    const hours = Math.round(totalItems * 1.8);
    const itemsPerHour = hours > 0 ? Math.round((totalItems / hours) * 10) / 10 : 0;

    // Time accuracy (percentage of on-time items)
    const timeAccuracy = onTimeRate;

    // Score = weighted: 40% completion rate + 30% on-time + 20% volume + 10% variety
    const completionScore = assigned.length > 0 ? (completed / assigned.length) * 40 : 0;
    const onTimeScore = onTimeRate * 0.3;
    const volumeScore = Math.min(completed / 30, 1) * 20; // 30 as benchmark
    const varietyScore = sortedCats.length >= 2 ? 10 : sortedCats.length * 5;
    const score = Math.round(completionScore + onTimeScore + volumeScore + varietyScore);

    // Specialization data per category
    const specializations = CONTENT_CATEGORIES
      .filter((cat) => categoryBreakdown[cat] > 0)
      .map((cat) => {
        const catRequests = assigned.filter((r) => TYPE_TO_CATEGORY[r.type] === cat);
        const catCompleted = catRequests.filter((r) => r.status === 'closed').length;
        const catThisWeek = catRequests.filter((r) => {
          if (r.status !== 'closed') return false;
          const created = new Date(r.createdAt);
          return created >= weekAgo;
        }).length;
        const catItems = catRequests
          .filter((r) => r.status === 'closed')
          .reduce((sum, r) => sum + r.totalItems, 0);
        const catHours = Math.round(catItems * (cat === 'Video' ? 3 : 1.5));
        const catItemsPerHour = catHours > 0 ? Math.round((catItems / catHours) * 10) / 10 : 0;
        const catWithDue = catRequests.filter((r) => r.status === 'closed' && r.dueDate);
        const catOnTime = catWithDue.filter((r) => {
          const created = new Date(r.createdAt);
          const due = new Date(r.dueDate!);
          return created <= due;
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
      active: inProgress + review,
      done: completed,
      hours,
      onTimeRate,
      score,
      primaryCategory,
      secondaryCategory,
      categoryBreakdown,
      thisWeekCompleted,
      itemsPerHour,
      timeAccuracy,
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
    <span className={`inline-flex items-center rounded-[var(--radius-sm)] px-2.5 py-0.5 text-xs font-medium ${bg} ${text}`}>
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
          Completed: e.completed,
        }))
        .reverse(), // reverse so first editor is at top
    [editors],
  );

  return (
    <ChartCard title="Editor Workload" icon={<BarChartIcon />}>
      <ResponsiveContainer width="100%" height={Math.max(300, editors.length * 40)}>
        <BarChart data={data} layout="vertical" margin={{ top: 0, right: 30, left: 20, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" horizontal={false} />
          <XAxis type="number" tick={{ fill: 'var(--text-tertiary)', fontSize: 12 }} />
          <YAxis
            type="category"
            dataKey="name"
            width={130}
            tick={{ fill: 'var(--text-secondary)', fontSize: 12 }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-md)',
              fontSize: 13,
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
          <Bar dataKey="Completed" stackId="a" fill={CHART_COLORS.completed} radius={[0, 4, 4, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </ChartCard>
  );
};

// ============================================
// 2. EDITOR PERFORMANCE TABLE
// ============================================

interface PerformanceTableProps {
  editors: EditorStats[];
}

const EditorPerformanceTable = ({ editors }: PerformanceTableProps) => (
  <ChartCard title="Editor Performance" icon={<TrendingUpIcon />}>
    <div className="overflow-x-auto">
      <table className="w-full text-left text-sm">
        <thead>
          <tr className="border-b border-[var(--border)]">
            <th className="pb-3 pr-4 font-medium text-[var(--text-secondary)]">Editor</th>
            <th className="pb-3 px-4 text-center font-medium text-[var(--text-secondary)]">P1</th>
            <th className="pb-3 px-4 text-center font-medium text-[var(--text-secondary)]">P2</th>
            <th className="pb-3 px-4 text-center font-medium text-[var(--text-secondary)]">Active</th>
            <th className="pb-3 px-4 text-center font-medium text-[var(--text-secondary)]">Done</th>
            <th className="pb-3 px-4 text-center font-medium text-[var(--text-secondary)]">Hours</th>
            <th className="pb-3 px-4 text-center font-medium text-[var(--text-secondary)]">On-Time</th>
            <th className="pb-3 pl-4 text-center font-medium text-[var(--text-secondary)]">Score</th>
          </tr>
        </thead>
        <tbody>
          {editors.map((editor) => (
            <tr
              key={editor.id}
              className="border-b border-[var(--border)] last:border-b-0"
            >
              <td className="py-3.5 pr-4 font-medium text-[var(--text-primary)]">
                {editor.name.length > 20 ? editor.name.slice(0, 20) + '…' : editor.name}
              </td>
              <td className="py-3.5 px-4 text-center">
                <CategoryBadge category={editor.primaryCategory} />
              </td>
              <td className="py-3.5 px-4 text-center">
                <CategoryBadge category={editor.secondaryCategory} />
              </td>
              <td className="py-3.5 px-4 text-center text-[var(--text-primary)]">{editor.active}</td>
              <td className="py-3.5 px-4 text-center text-[var(--text-primary)]">{editor.done}</td>
              <td className="py-3.5 px-4 text-center text-[var(--text-primary)]">{editor.hours}h</td>
              <td className="py-3.5 px-4 text-center">
                <PercentBadge value={editor.onTimeRate} />
              </td>
              <td className="py-3.5 pl-4 text-center">
                <PercentBadge value={editor.score} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </ChartCard>
);

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
        <div className="text-right">
          <span className="text-sm text-[var(--text-secondary)]">Score: </span>
          <span className="text-2xl font-bold text-[var(--text-primary)]">
            {selected.score}
          </span>
          <span className="text-sm text-[var(--text-tertiary)]">/100</span>
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
                className="rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--background)] p-4"
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
  <div className="rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--background)] px-4 py-3">
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
// 4. EDITOR EFFICIENCY BY TYPE CHART
// ============================================

interface EfficiencyChartProps {
  editors: EditorStats[];
}

const EditorEfficiencyByType = ({ editors }: EfficiencyChartProps) => {
  const data = useMemo(() => {
    return editors
      .filter((e) => Object.values(e.categoryBreakdown).some((v) => v > 0))
      .map((e) => ({
        name: e.name.length > 12 ? e.name.slice(0, 12) + '…' : e.name,
        Design: e.categoryBreakdown.Design,
        Video: e.categoryBreakdown.Video,
        'UI/UX': e.categoryBreakdown['UI/UX'],
      }));
  }, [editors]);

  if (data.length === 0) {
    return (
      <ChartCard title="Editor Efficiency by Type">
        <p className="py-8 text-center text-sm text-[var(--text-tertiary)]">
          No data available
        </p>
      </ChartCard>
    );
  }

  return (
    <ChartCard title="Editor Efficiency by Type">
      <ResponsiveContainer width="100%" height={320}>
        <BarChart data={data} margin={{ top: 0, right: 20, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
          <XAxis
            dataKey="name"
            tick={{ fill: 'var(--text-tertiary)', fontSize: 12 }}
            interval={0}
          />
          <YAxis tick={{ fill: 'var(--text-tertiary)', fontSize: 12 }} />
          <Tooltip
            contentStyle={{
              backgroundColor: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-md)',
              fontSize: 13,
            }}
          />
          <Legend
            verticalAlign="bottom"
            iconType="square"
            wrapperStyle={{ fontSize: 12, paddingTop: 16 }}
          />
          <Bar dataKey="Design" fill={CATEGORY_COLORS.Design} radius={[2, 2, 0, 0]} />
          <Bar dataKey="Video" fill={CATEGORY_COLORS.Video} radius={[2, 2, 0, 0]} />
          <Bar dataKey="UI/UX" fill={CATEGORY_COLORS['UI/UX']} radius={[2, 2, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
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
  const editors = useMemo(
    () => computeEditorStats(members, requests),
    [members, requests],
  );

  return (
    <div className="space-y-6">
      {/* Row 1: Editor Workload */}
      <EditorWorkloadChart editors={editors} />

      {/* Row 2: Editor Performance Table */}
      <EditorPerformanceTable editors={editors} />

      {/* Row 3: Editor Performance Detail */}
      <EditorPerformanceDetail editors={editors} />

      {/* Row 4: Efficiency by Type */}
      <EditorEfficiencyByType editors={editors} />
    </div>
  );
};
