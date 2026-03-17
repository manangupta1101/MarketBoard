'use client';

import { useMemo } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  PieChart, Pie, Cell,
  BarChart, Bar,
  ResponsiveContainer,
} from 'recharts';
import { REQUEST_TYPES, REQUEST_TYPE_LABELS } from '@/types';
import type { CreativeRequest, RequestType } from '@/types';

const CHART_COLORS = {
  primary: '#22c55e',
  green: '#22c55e',
  purple: '#8b5cf6',
  orange: '#f97316',
  red: '#ef4444',
  amber: '#f59e0b',
  blue: '#3b82f6',
  gray: '#94a3b8',
  teal: '#14b8a6',
  pink: '#ec4899',
  reEdit: '#d97706',
};

const REQUEST_TYPE_COLORS: Record<RequestType, string> = {
  design_graphics: CHART_COLORS.purple,
  video: CHART_COLORS.orange,
  ui_ux: CHART_COLORS.blue,
  writing: CHART_COLORS.green,
  shooting: CHART_COLORS.red,
  anchor: CHART_COLORS.teal,
};

const STATUS_COLORS: Record<string, string> = {
  open: CHART_COLORS.blue,
  review: CHART_COLORS.purple,
  closed: CHART_COLORS.green,
  in_progress: CHART_COLORS.amber,
};

const PRIORITY_BAR_COLOR = CHART_COLORS.orange;

// ============================================
// HELPERS
// ============================================

const formatWeekLabel = (date: Date): string =>
  date.toLocaleDateString('en-US', { month: 'short', day: '2-digit' });

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
// REQUEST TRENDS (Line Chart)
// ============================================

interface TrendsData {
  label: string;
  created: number;
  closed: number;
  inProgress: number;
  review: number;
  reEdit: number;
}

const useRequestTrends = (requests: CreativeRequest[], from: Date, to: Date): TrendsData[] => {
  return useMemo(() => {
    const days: TrendsData[] = [];
    const current = new Date(from);
    current.setHours(0, 0, 0, 0);

    const endDate = new Date(to);
    endDate.setHours(23, 59, 59, 999);

    while (current <= endDate) {
      const dayStart = new Date(current);
      const dayEnd = new Date(current);
      dayEnd.setHours(23, 59, 59, 999);

      // Requests created on this day
      const dayRequests = requests.filter((r) => {
        const d = new Date(r.createdAt);
        return d >= dayStart && d <= dayEnd;
      });

      const created = dayRequests.length;
      // Closed = truly closed (not in re-edit cycle)
      const closed = dayRequests.filter((r) => (r.status === 'closed' && !r.isInReEdit) || r.status === 'deleted').length;
      const inProgress = dayRequests.filter((r) => r.status === 'in_progress').length;
      const review = dayRequests.filter((r) => r.status === 'review').length;
      // Re-edits that were initiated on this day
      const reEdit = requests.reduce((count, r) => {
        return count + r.reEdits.filter((re) => {
          const d = new Date(re.createdAt);
          return d >= dayStart && d <= dayEnd;
        }).length;
      }, 0);

      days.push({ label: formatWeekLabel(current), created, closed, inProgress, review, reEdit });

      current.setDate(current.getDate() + 1);
    }

    return days;
  }, [requests, from, to]);
};

const formatTitleDate = (date: Date): string =>
  date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

const RequestTrendsChart = ({ requests, from, to }: { requests: CreativeRequest[]; from: Date; to: Date }) => {
  const data = useRequestTrends(requests, from, to);
  const fromLabel = formatTitleDate(from);
  const toLabel = formatTitleDate(to);

  // Show dots only when there are fewer data points (≤14 days)
  const showDots = data.length <= 14;

  return (
    <ChartCard title={`Request Trends (${fromLabel} - ${toLabel})`}>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#CBD5E1" />
          <XAxis
            dataKey="label"
            tick={{ fontSize: 11, fill: 'var(--text-tertiary)' }}
            interval={data.length > 30 ? Math.floor(data.length / 8) : data.length > 14 ? 2 : 0}
            angle={data.length > 14 ? -30 : 0}
            textAnchor={data.length > 14 ? 'end' : 'middle'}
            height={data.length > 14 ? 50 : 30}
          />
          <YAxis tick={{ fontSize: 12, fill: 'var(--text-tertiary)' }} allowDecimals={false} />
          <Tooltip
            contentStyle={{
              backgroundColor: '#FFFFFF',
              border: '2.5px solid #1E293B',
              borderRadius: '12px',
              fontSize: 12,
              boxShadow: '3px 3px 0px #1E293B',
            }}
          />
          <Legend iconType="circle" wrapperStyle={{ fontSize: 12 }} />
          <Line type="monotone" dataKey="created" stroke={CHART_COLORS.primary} strokeWidth={2} dot={showDots ? { r: 3 } : false} name="Created" />
          <Line type="monotone" dataKey="inProgress" stroke={CHART_COLORS.amber} strokeWidth={2} dot={showDots ? { r: 3 } : false} name="In Progress" />
          <Line type="monotone" dataKey="review" stroke={CHART_COLORS.purple} strokeWidth={2} dot={showDots ? { r: 3 } : false} name="Review" />
          <Line type="monotone" dataKey="closed" stroke={CHART_COLORS.green} strokeWidth={2} dot={showDots ? { r: 3 } : false} name="Closed" />
          <Line type="monotone" dataKey="reEdit" stroke={CHART_COLORS.reEdit} strokeWidth={2} strokeDasharray="5 3" dot={showDots ? { r: 3 } : false} name="Re-Edits" />
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
    const counts: Record<RequestType, number> = {} as Record<RequestType, number>;
    for (const t of REQUEST_TYPES) counts[t] = 0;
    for (const r of requests) counts[r.type]++;

    return REQUEST_TYPES.map((t) => ({
      name: REQUEST_TYPE_LABELS[t],
      value: counts[t],
      color: REQUEST_TYPE_COLORS[t],
    }));
  }, [requests]);

  const total = data.reduce((sum, d) => sum + d.value, 0);

  return (
    <ChartCard title="Request Types">
      <div className="flex items-center gap-4">
        {/* Donut */}
        <div className="w-1/2">
          <ResponsiveContainer width="100%" height={180}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={75}
                paddingAngle={2}
                dataKey="value"
              >
                {data.map((entry) => (
                  <Cell key={entry.name} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-md)',
                  fontSize: 12,
                }}
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                formatter={((value: any, name: any) => [`${value} (${total > 0 ? Math.round((Number(value) / total) * 100) : 0}%)`, name]) as any}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Custom legend with counts */}
        <div className="flex w-1/2 flex-col gap-1.5">
          {data.map((entry) => (
            <div key={entry.name} className="flex items-center justify-between gap-2 text-xs">
              <div className="flex items-center gap-1.5">
                <span className="inline-block h-2.5 w-2.5 rounded-sm" style={{ backgroundColor: entry.color }} />
                <span className="text-[var(--text-secondary)]">{entry.name}</span>
              </div>
              <span className="font-semibold text-[var(--text-primary)]">{entry.value}</span>
            </div>
          ))}
        </div>
      </div>
    </ChartCard>
  );
};

// ============================================
// ACTIVE REQUESTS BY PRIORITY (Bar Chart)
// ============================================

const ActiveByPriorityChart = ({ requests }: { requests: CreativeRequest[] }) => {
  const data = useMemo(() => {
    // Active = not truly closed AND not deleted (re-edit tasks count as active)
    const active = requests.filter((r) =>
      r.status !== 'deleted' && (r.status !== 'closed' || r.isInReEdit)
    );
    return ['low', 'medium', 'high', 'urgent'].map((p) => ({
      priority: p.charAt(0).toUpperCase() + p.slice(1),
      count: active.filter((r) => r.priority === p).length,
    }));
  }, [requests]);

  return (
    <ChartCard title="Active Requests by Priority">
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={data} margin={{ top: 5, right: 10, bottom: 5, left: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#CBD5E1" />
          <XAxis dataKey="priority" tick={{ fontSize: 11, fill: 'var(--text-tertiary)' }} />
          <YAxis tick={{ fontSize: 11, fill: 'var(--text-tertiary)' }} />
          <Tooltip
            contentStyle={{
              backgroundColor: '#FFFFFF',
              border: '2.5px solid #1E293B',
              borderRadius: '12px',
              fontSize: 12,
              boxShadow: '3px 3px 0px #1E293B',
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

/** Get the effective deadline: latest pending re-edit deadline, or original dueDate */
const getEffectiveDeadline = (r: CreativeRequest): string | null => {
  if (r.reEdits.length > 0) {
    const latest = r.reEdits[r.reEdits.length - 1];
    if (!latest.submittedAt) return latest.deadline;
  }
  return r.dueDate;
};

const DueDateComplianceChart = ({ requests }: { requests: CreativeRequest[] }) => {
  const { onTime, late, total, pct } = useMemo(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Include requests with either a dueDate or a pending re-edit deadline
    const withDue = requests.filter((r) => {
      if (r.status === 'deleted') return false;
      return getEffectiveDeadline(r) !== null;
    });

    const onTimeCount = withDue.filter((r) => {
      const deadline = getEffectiveDeadline(r)!;
      const due = new Date(deadline);
      due.setHours(0, 0, 0, 0);

      if (r.status === 'closed' && !r.isInReEdit) {
        // Truly closed: check if closedAt was before the deadline
        if (r.closedAt) {
          const closed = new Date(r.closedAt);
          closed.setHours(0, 0, 0, 0);
          return closed <= due;
        }
        return true; // No closedAt data — assume on time
      }
      // Active or re-edit requests: on time if deadline hasn't passed
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
          <p className={`text-3xl font-bold ${pct >= 70 ? 'text-green-500' : pct >= 40 ? 'text-amber-500' : 'text-red-500'}`}>{pct}%</p>
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

const STATUS_LABELS: Record<string, string> = {
  open: 'Open',
  in_progress: 'In Progress',
  review: 'Review',
  closed: 'Closed',
  re_edit: 'Re-Edit',
};

const DISPLAY_STATUSES = ['open', 'in_progress', 'review', 'closed', 're_edit'] as const;

const StatusDistributionChart = ({ requests }: { requests: CreativeRequest[] }) => {
  const data = useMemo(() => {
    const statusCounts: Record<string, number> = {
      open: 0, in_progress: 0, review: 0, closed: 0, re_edit: 0,
    };
    for (const r of requests) {
      if (r.status === 'deleted') continue;
      if (r.isInReEdit) {
        // Tasks in re-edit cycle count as "Re-Edit" regardless of current status
        statusCounts.re_edit++;
      } else {
        statusCounts[r.status] = (statusCounts[r.status] || 0) + 1;
      }
    }
    const allColors: Record<string, string> = { ...STATUS_COLORS, re_edit: CHART_COLORS.reEdit };
    return DISPLAY_STATUSES.map((status) => ({
      name: STATUS_LABELS[status],
      value: statusCounts[status] || 0,
      color: allColors[status],
    })).filter((d) => d.value > 0);
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
// TOP REQUESTERS (Horizontal Bar Chart)
// ============================================

const REQUESTER_COLORS = [CHART_COLORS.green, CHART_COLORS.blue, CHART_COLORS.purple, CHART_COLORS.orange, CHART_COLORS.amber];

const TopRequestersChart = ({ requests }: { requests: CreativeRequest[] }) => {
  const data = useMemo(() => {
    const counts: Record<string, number> = {};
    const reEditCounts: Record<string, number> = {};
    for (const r of requests) {
      counts[r.requesterName] = (counts[r.requesterName] || 0) + 1;
      // Count re-edits requested by this person (both admin-initiated and requester-initiated)
      const reEditsForRequest = r.reEdits.length;
      const reEditReqs = r.reEditRequests?.filter((req) => req.requestedById === r.requesterId).length ?? 0;
      reEditCounts[r.requesterName] = (reEditCounts[r.requesterName] || 0) + reEditsForRequest + reEditReqs;
    }
    return Object.entries(counts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([name, count], i) => ({
        name: name.length > 12 ? name.slice(0, 12) + '...' : name,
        fullName: name,
        count,
        reEdits: reEditCounts[name] || 0,
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
              backgroundColor: '#FFFFFF',
              border: '2.5px solid #1E293B',
              borderRadius: '12px',
              fontSize: 12,
              boxShadow: '3px 3px 0px #1E293B',
            }}
            content={({ active, payload }) => {
              if (!active || !payload || payload.length === 0) return null;
              const item = payload[0].payload as (typeof data)[number];
              return (
                <div className="rounded-xl border-[2px] border-[var(--navy)] bg-[var(--surface)] p-2.5 shadow-[2px_2px_0px_#1E293B]">
                  <p className="text-xs font-medium text-[var(--text-primary)]">{item.fullName}</p>
                  <p className="text-xs text-[var(--text-secondary)]">Requests: {item.count}</p>
                  <p className="text-xs text-amber-600">Re-Edits: {item.reEdits}</p>
                </div>
              );
            }}
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

    {/* Row 3: Status Distribution + Top Requesters */}
    <div className="grid gap-6 md:grid-cols-2">
      <StatusDistributionChart requests={requests} />
      <TopRequestersChart requests={requests} />
    </div>
  </div>
);
