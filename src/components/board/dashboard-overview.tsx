'use client';

import { useMemo } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  PieChart, Pie, Cell,
  BarChart, Bar,
  ResponsiveContainer,
} from 'recharts';
import type { CreativeRequest, RequestType } from '@/types';

// ============================================
// CONSTANTS
// ============================================

const DESIGN_TYPES: RequestType[] = ['design_graphics', 'ui_ux'];
const VIDEO_TYPES: RequestType[] = ['video'];
const WRITING_TYPES: RequestType[] = ['writing'];
const SHOOTING_TYPES: RequestType[] = ['shooting'];
const ANCHOR_TYPES: RequestType[] = ['anchor'];

const CHART_COLORS = {
  primary: '#2383e2',
  green: '#22c55e',
  purple: '#8b5cf6',
  orange: '#f97316',
  red: '#ef4444',
  amber: '#f59e0b',
  blue: '#3b82f6',
  gray: '#9ca3af',
};

const STATUS_COLORS: Record<string, string> = {
  open: CHART_COLORS.blue,
  review: CHART_COLORS.purple,
  closed: CHART_COLORS.green,
  in_progress: CHART_COLORS.amber,
};

const PRIORITY_BAR_COLOR = CHART_COLORS.orange;

// ============================================
// ICONS
// ============================================

const ClockAlertIcon = () => (
  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

// ============================================
// HELPERS
// ============================================

const formatWeekLabel = (date: Date): string =>
  date.toLocaleDateString('en-US', { month: 'short', day: '2-digit' });

const daysBetween = (a: Date, b: Date): number =>
  Math.floor((b.getTime() - a.getTime()) / (1000 * 60 * 60 * 24));

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
// REQUEST TRENDS (Line Chart)
// ============================================

interface TrendsData {
  label: string;
  created: number;
  closed: number;
}

const useRequestTrends = (requests: CreativeRequest[], from: Date, to: Date): TrendsData[] => {
  return useMemo(() => {
    const weeks: TrendsData[] = [];
    const current = new Date(from);
    current.setDate(current.getDate() - current.getDay()); // align to week start

    while (current <= to) {
      const weekEnd = new Date(current);
      weekEnd.setDate(weekEnd.getDate() + 6);
      weekEnd.setHours(23, 59, 59, 999);

      const created = requests.filter((r) => {
        const d = new Date(r.createdAt);
        return d >= current && d <= weekEnd;
      }).length;

      const closed = requests.filter((r) => {
        if (r.status !== 'closed' && r.status !== 'deleted') return false;
        const d = new Date(r.createdAt);
        return d >= current && d <= weekEnd;
      }).length;

      weeks.push({ label: formatWeekLabel(current), created, closed });

      const next = new Date(current);
      next.setDate(next.getDate() + 7);
      current.setTime(next.getTime());
    }

    return weeks;
  }, [requests, from, to]);
};

const RequestTrendsChart = ({ requests, from, to }: { requests: CreativeRequest[]; from: Date; to: Date }) => {
  const data = useRequestTrends(requests, from, to);
  const fromLabel = formatWeekLabel(from);
  const toLabel = formatWeekLabel(to);

  return (
    <ChartCard title={`Request Trends (${fromLabel} - ${toLabel})`}>
      <ResponsiveContainer width="100%" height={220}>
        <LineChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
          <XAxis dataKey="label" tick={{ fontSize: 12, fill: 'var(--text-tertiary)' }} />
          <YAxis tick={{ fontSize: 12, fill: 'var(--text-tertiary)' }} />
          <Tooltip
            contentStyle={{
              backgroundColor: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-md)',
              fontSize: 12,
            }}
          />
          <Legend iconType="circle" wrapperStyle={{ fontSize: 12 }} />
          <Line type="monotone" dataKey="created" stroke={CHART_COLORS.primary} strokeWidth={2} dot={{ r: 4 }} name="Created" />
          <Line type="monotone" dataKey="closed" stroke={CHART_COLORS.green} strokeWidth={2} dot={{ r: 4 }} name="Closed" />
        </LineChart>
      </ResponsiveContainer>
    </ChartCard>
  );
};

// ============================================
// REQUEST TYPES (Donut Chart)
// ============================================

const RequestTypesChart = ({ requests }: { requests: CreativeRequest[] }) => {
  const data = useMemo(() => {
    const designCount = requests.filter((r) => DESIGN_TYPES.includes(r.type)).length;
    const videoCount = requests.filter((r) => VIDEO_TYPES.includes(r.type)).length;
    const writingCount = requests.filter((r) => WRITING_TYPES.includes(r.type)).length;
    const shootingCount = requests.filter((r) => SHOOTING_TYPES.includes(r.type)).length;
    const anchorCount = requests.filter((r) => ANCHOR_TYPES.includes(r.type)).length;
    return [
      { name: 'Design', value: designCount, color: CHART_COLORS.purple },
      { name: 'Video', value: videoCount, color: CHART_COLORS.orange },
      { name: 'Writing', value: writingCount, color: CHART_COLORS.green },
      { name: 'Shooting', value: shootingCount, color: CHART_COLORS.red },
      { name: 'Anchor', value: anchorCount, color: CHART_COLORS.amber },
    ].filter((d) => d.value > 0);
  }, [requests]);

  return (
    <ChartCard title="Request Types">
      <div className="flex items-center justify-center">
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={55}
              outerRadius={80}
              paddingAngle={2}
              dataKey="value"
              label={({ name, value }) => `${name}: ${value}`}
              labelLine={{ stroke: 'var(--text-tertiary)' }}
            >
              {data.map((entry) => (
                <Cell key={entry.name} fill={entry.color} />
              ))}
            </Pie>
            <Legend iconType="square" wrapperStyle={{ fontSize: 12 }} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </ChartCard>
  );
};

// ============================================
// ACTIVE REQUESTS BY PRIORITY (Bar Chart)
// ============================================

const ActiveByPriorityChart = ({ requests }: { requests: CreativeRequest[] }) => {
  const data = useMemo(() => {
    const active = requests.filter((r) => r.status !== 'closed' && r.status !== 'deleted');
    return ['low', 'medium', 'high', 'urgent'].map((p) => ({
      priority: p.charAt(0).toUpperCase() + p.slice(1),
      count: active.filter((r) => r.priority === p).length,
    }));
  }, [requests]);

  return (
    <ChartCard title="Active Requests by Priority">
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={data} margin={{ top: 5, right: 10, bottom: 5, left: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
          <XAxis dataKey="priority" tick={{ fontSize: 11, fill: 'var(--text-tertiary)' }} />
          <YAxis tick={{ fontSize: 11, fill: 'var(--text-tertiary)' }} />
          <Tooltip
            contentStyle={{
              backgroundColor: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-md)',
              fontSize: 12,
            }}
          />
          <Bar dataKey="count" fill={PRIORITY_BAR_COLOR} radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </ChartCard>
  );
};

// ============================================
// DUE DATE COMPLIANCE (Donut Chart)
// ============================================

const DueDateComplianceChart = ({ requests }: { requests: CreativeRequest[] }) => {
  const { onTime, late, total, pct } = useMemo(() => {
    const withDue = requests.filter((r) => r.dueDate);
    const onTimeCount = withDue.filter((r) => {
      if (r.status === 'closed') {
        // Closed before or on due date — simplified: created + reasonable time <= dueDate
        return new Date(r.createdAt) <= new Date(r.dueDate!);
      }
      // Active: not past due
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const due = new Date(r.dueDate!);
      due.setHours(0, 0, 0, 0);
      return due >= today;
    }).length;
    const lateCount = withDue.length - onTimeCount;
    return {
      onTime: onTimeCount,
      late: lateCount,
      total: withDue.length,
      pct: withDue.length > 0 ? Math.round((onTimeCount / withDue.length) * 100) : 0,
    };
  }, [requests]);

  const data = [
    { name: 'On Time', value: onTime, color: CHART_COLORS.green },
    { name: 'Late', value: late, color: CHART_COLORS.red },
  ];

  return (
    <ChartCard title="Due Date Compliance">
      <div className="flex items-center gap-4">
        <div className="flex-1">
          <ResponsiveContainer width="100%" height={160}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={45}
                outerRadius={65}
                paddingAngle={2}
                dataKey="value"
              >
                {data.map((entry) => (
                  <Cell key={entry.name} fill={entry.color} />
                ))}
              </Pie>
              <Legend iconType="square" wrapperStyle={{ fontSize: 11 }} />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="text-right">
          <p className="text-3xl font-bold text-red-500">{pct}%</p>
          <p className="text-xs text-[var(--text-tertiary)]">Compliance Rate</p>
          <p className="mt-1 text-xs text-[var(--text-tertiary)]">{onTime}/{total} on time</p>
        </div>
      </div>
    </ChartCard>
  );
};

// ============================================
// REQUEST STATUS DISTRIBUTION (Donut Chart)
// ============================================

const StatusDistributionChart = ({ requests }: { requests: CreativeRequest[] }) => {
  const data = useMemo(() => {
    const statusCounts: Record<string, number> = {};
    for (const r of requests) {
      statusCounts[r.status] = (statusCounts[r.status] || 0) + 1;
    }
    return Object.entries(statusCounts)
      .filter(([, count]) => count > 0)
      .map(([status, count]) => ({
        name: status === 'in_progress' ? 'In Progress' : status.charAt(0).toUpperCase() + status.slice(1),
        value: count,
        color: STATUS_COLORS[status] || CHART_COLORS.gray,
      }));
  }, [requests]);

  return (
    <ChartCard title="Request Status Distribution">
      <ResponsiveContainer width="100%" height={260}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={90}
            paddingAngle={2}
            dataKey="value"
            label={({ name, value }) => `${name}: ${value}`}
            labelLine={{ stroke: 'var(--text-tertiary)' }}
          >
            {data.map((entry) => (
              <Cell key={entry.name} fill={entry.color} />
            ))}
          </Pie>
          <Legend iconType="square" wrapperStyle={{ fontSize: 12 }} />
        </PieChart>
      </ResponsiveContainer>
    </ChartCard>
  );
};

// ============================================
// AVG RESOLUTION TIME (Bar Chart)
// ============================================

const AvgResolutionTimeChart = ({ requests, from, to }: { requests: CreativeRequest[]; from: Date; to: Date }) => {
  const data = useMemo(() => {
    const closed = requests.filter((r) => r.status === 'closed' && r.dueDate);
    const weeks: { label: string; avgHours: number }[] = [];
    const current = new Date(from);
    current.setDate(current.getDate() - current.getDay());

    while (current <= to) {
      const weekEnd = new Date(current);
      weekEnd.setDate(weekEnd.getDate() + 6);
      weekEnd.setHours(23, 59, 59, 999);

      const weekClosed = closed.filter((r) => {
        const d = new Date(r.createdAt);
        return d >= current && d <= weekEnd;
      });

      const avgHours = weekClosed.length > 0
        ? Math.round(weekClosed.reduce((sum, r) => {
            const created = new Date(r.createdAt);
            const due = new Date(r.dueDate!);
            const hours = Math.abs(daysBetween(created, due)) * 24;
            return sum + Math.max(hours, 24);
          }, 0) / weekClosed.length)
        : 0;

      weeks.push({ label: formatWeekLabel(current), avgHours });

      const next = new Date(current);
      next.setDate(next.getDate() + 7);
      current.setTime(next.getTime());
    }

    return weeks;
  }, [requests, from, to]);

  const fromLabel = formatWeekLabel(from);
  const toLabel = formatWeekLabel(to);

  return (
    <ChartCard title={`Avg Resolution Time (${fromLabel} - ${toLabel})`}>
      <ResponsiveContainer width="100%" height={260}>
        <BarChart data={data} margin={{ top: 5, right: 10, bottom: 5, left: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
          <XAxis dataKey="label" tick={{ fontSize: 11, fill: 'var(--text-tertiary)' }} />
          <YAxis tick={{ fontSize: 11, fill: 'var(--text-tertiary)' }} label={{ value: 'Hours', angle: -90, position: 'insideLeft', style: { fontSize: 11, fill: 'var(--text-tertiary)' } }} />
          <Tooltip
            contentStyle={{
              backgroundColor: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-md)',
              fontSize: 12,
            }}
            formatter={(value) => [`${value}h`, 'Avg Time']}
          />
          <Bar dataKey="avgHours" fill={CHART_COLORS.purple} radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </ChartCard>
  );
};

// ============================================
// TOP REQUESTERS (Horizontal Bar Chart)
// ============================================

const REQUESTER_COLORS = [CHART_COLORS.green, CHART_COLORS.blue, CHART_COLORS.purple, CHART_COLORS.orange, CHART_COLORS.amber];

const TopRequestersChart = ({ requests }: { requests: CreativeRequest[] }) => {
  const data = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const r of requests) {
      counts[r.requesterName] = (counts[r.requesterName] || 0) + 1;
    }
    return Object.entries(counts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([name, count], i) => ({
        name: name.length > 12 ? name.slice(0, 12) + '...' : name,
        fullName: name,
        count,
        fill: REQUESTER_COLORS[i % REQUESTER_COLORS.length],
      }));
  }, [requests]);

  return (
    <ChartCard title="Top Requesters">
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={data} layout="vertical" margin={{ top: 5, right: 20, bottom: 5, left: 10 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" horizontal={false} />
          <XAxis type="number" tick={{ fontSize: 11, fill: 'var(--text-tertiary)' }} />
          <YAxis
            type="category"
            dataKey="name"
            width={80}
            tick={{ fontSize: 11, fill: 'var(--text-tertiary)' }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-md)',
              fontSize: 12,
            }}
            formatter={(value) => [value, 'Requests']}
          />
          <Bar dataKey="count" radius={[0, 4, 4, 0]}>
            {data.map((entry, i) => (
              <Cell key={i} fill={entry.fill} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </ChartCard>
  );
};

// ============================================
// BOTTLENECK ANALYSIS
// ============================================

const BOTTLENECK_NO_PROGRESS_DAYS = 3;

interface BottleneckItem {
  type: 'review' | 'unassigned' | 'no_progress';
  label: string;
  badgeColor: string;
  bgColor: string;
  count: number;
  requestIds: string[];
}

const BottleneckAnalysis = ({ requests }: { requests: CreativeRequest[] }) => {
  const bottlenecks = useMemo((): BottleneckItem[] => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const reviewStuck = requests.filter((r) => r.status === 'review');
    const unassigned = requests.filter((r) => r.status !== 'closed' && r.status !== 'deleted' && !r.assigneeId);
    const noProgress = requests.filter((r) => {
      if (r.status === 'closed' || r.assigneeId) return false;
      const created = new Date(r.createdAt);
      return daysBetween(created, today) >= BOTTLENECK_NO_PROGRESS_DAYS;
    });

    return [
      {
        type: 'review',
        label: 'Review Bottleneck',
        badgeColor: 'bg-red-100 text-red-700 border border-red-200',
        bgColor: 'bg-red-50',
        count: reviewStuck.length,
        requestIds: reviewStuck.map((r) => r.id.toUpperCase().replace('R', 'REQ-')),
      },
      {
        type: 'unassigned',
        label: 'Unassigned',
        badgeColor: 'bg-amber-100 text-amber-700 border border-amber-200',
        bgColor: 'bg-amber-50',
        count: unassigned.length,
        requestIds: unassigned.map((r) => r.id.toUpperCase().replace('R', 'REQ-')),
      },
      {
        type: 'no_progress',
        label: 'No Progress',
        badgeColor: 'bg-red-100 text-red-700 border border-red-200',
        bgColor: 'bg-red-50',
        count: noProgress.length,
        requestIds: noProgress.map((r) => r.id.toUpperCase().replace('R', 'REQ-')),
      },
    ];
  }, [requests]);

  return (
    <ChartCard title="Bottleneck Analysis" icon={<ClockAlertIcon />}>
      <div className="space-y-3">
        {bottlenecks.map((b) => {
          const displayIds = b.requestIds.slice(0, 3);
          const remaining = b.requestIds.length - 3;
          return (
            <div key={b.type} className={`rounded-[var(--radius-md)] ${b.bgColor} p-3`}>
              <div className="flex items-center gap-2">
                <span className={`inline-flex rounded px-2 py-0.5 text-xs font-semibold ${b.badgeColor}`}>
                  {b.label}
                </span>
                <span className="text-sm font-medium text-[var(--text-primary)]">
                  {b.count} requests
                </span>
              </div>
              <p className="mt-1 text-xs text-[var(--text-tertiary)]">
                {displayIds.join(', ')}
                {remaining > 0 && ` +${remaining} more`}
                {b.type === 'no_progress' && ` — Open for ${BOTTLENECK_NO_PROGRESS_DAYS}+ days without assignment`}
              </p>
            </div>
          );
        })}
      </div>
    </ChartCard>
  );
};

// ============================================
// AGING REQUESTS
// ============================================

const AgingRequests = ({ requests }: { requests: CreativeRequest[] }) => {
  const agingItems = useMemo(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return requests
      .filter((r) => r.status !== 'closed' && r.status !== 'deleted')
      .map((r) => {
        const created = new Date(r.createdAt);
        const age = daysBetween(created, today);
        return { ...r, age };
      })
      .sort((a, b) => b.age - a.age)
      .slice(0, 5);
  }, [requests]);

  const statusBadge = (status: string) => {
    const colors: Record<string, string> = {
      open: 'bg-gray-100 text-gray-700',
      in_progress: 'bg-amber-100 text-amber-700',
      review: 'bg-purple-100 text-purple-700',
    };
    return colors[status] || 'bg-gray-100 text-gray-600';
  };

  return (
    <ChartCard title="Aging Requests" icon={<ClockAlertIcon />}>
      <div className="space-y-2">
        {agingItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface)] px-4 py-3"
          >
            <div>
              <p className="text-sm font-medium text-[var(--text-primary)]">
                {item.id.toUpperCase().replace('R', 'REQ-')}
              </p>
              <p className="text-xs text-[var(--text-tertiary)]">{item.title}</p>
            </div>
            <div className="flex items-center gap-2">
              <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${statusBadge(item.status)}`}>
                {item.status === 'in_progress' ? 'in progress' : item.status}
              </span>
              <span className="text-xs font-medium text-[var(--text-tertiary)]">
                {item.age}d old
              </span>
            </div>
          </div>
        ))}
        {agingItems.length === 0 && (
          <p className="py-4 text-center text-sm text-[var(--text-tertiary)]">No aging requests</p>
        )}
      </div>
    </ChartCard>
  );
};

// ============================================
// MAIN OVERVIEW COMPONENT
// ============================================

interface DashboardOverviewProps {
  requests: CreativeRequest[];
  from: Date;
  to: Date;
}

export const DashboardOverview = ({ requests, from, to }: DashboardOverviewProps) => (
  <div className="space-y-6">
    {/* Row 1: Request Trends */}
    <RequestTrendsChart requests={requests} from={from} to={to} />

    {/* Row 2: Types + Priority + Compliance */}
    <div className="grid gap-6 md:grid-cols-3">
      <RequestTypesChart requests={requests} />
      <ActiveByPriorityChart requests={requests} />
      <DueDateComplianceChart requests={requests} />
    </div>

    {/* Row 3: Status Distribution + Resolution Time */}
    <div className="grid gap-6 md:grid-cols-2">
      <StatusDistributionChart requests={requests} />
      <AvgResolutionTimeChart requests={requests} from={from} to={to} />
    </div>

    {/* Row 4: Top Requesters + Bottleneck Analysis */}
    <div className="grid gap-6 md:grid-cols-2">
      <TopRequestersChart requests={requests} />
      <BottleneckAnalysis requests={requests} />
    </div>

    {/* Row 5: Aging Requests */}
    <AgingRequests requests={requests} />
  </div>
);
