'use client';

import { useState, useMemo } from 'react';
import type { CreativeRequest, AppRole, RequestPriority, RequestStatus } from '@/types';
import {
  PRIORITY_CONFIG,
  REQUEST_STATUS_LABELS,
  REQUEST_TYPE_ICONS,
  REQUEST_TYPE_LABELS,
  REQUEST_TYPES,
  REQUEST_STATUSES,
  REQUEST_PRIORITIES,
} from '@/types';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';
import { Button } from '@/components/ui/button';

// --- Sort constants ---

const PRIORITY_SORT_ORDER: Record<RequestPriority, number> = {
  urgent: 0,
  high: 1,
  medium: 2,
  low: 3,
};

const STATUS_SORT_ORDER: Record<RequestStatus, number> = {
  open: 0,
  in_progress: 1,
  review: 2,
  closed: 3,
  deleted: 4,
};

type SortField = 'title' | 'priority' | 'status' | 'dueDate' | 'createdAt';
type SortDir = 'asc' | 'desc';

// --- Props ---

interface ListViewProps {
  requests: CreativeRequest[];
  onRowClick: (request: CreativeRequest) => void;
  role: AppRole;
}

// --- Helpers ---

const formatDate = (dateStr: string): string =>
  new Date(dateStr).toLocaleDateString('en-IN', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

const formatDateTime = (dateStr: string): string => {
  const d = new Date(dateStr);
  return `${d.toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' })} ${d.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: false })}`;
};

const getStatusBadgeColor = (status: RequestStatus): 'blue' | 'yellow' | 'green' | 'red' => {
  switch (status) {
    case 'open':
      return 'blue';
    case 'in_progress':
    case 'review':
      return 'yellow';
    case 'closed':
      return 'green';
    case 'deleted':
      return 'red';
  }
};

// --- Sort icon ---

const SortIcon = ({ field, activeField, dir }: { field: SortField; activeField: SortField; dir: SortDir }) => {
  if (activeField !== field) {
    return (
      <svg className="h-3.5 w-3.5 text-[var(--text-tertiary)]" viewBox="0 0 16 16" fill="currentColor">
        <path d="M8 3l3 4H5l3-4zM5 9h6l-3 4-3-4z" />
      </svg>
    );
  }
  return dir === 'asc' ? (
    <svg className="h-3.5 w-3.5 text-[var(--text-primary)]" viewBox="0 0 16 16" fill="currentColor">
      <path d="M8 3l4 5H4l4-5z" />
    </svg>
  ) : (
    <svg className="h-3.5 w-3.5 text-[var(--text-primary)]" viewBox="0 0 16 16" fill="currentColor">
      <path d="M8 13l-4-5h8l-4 5z" />
    </svg>
  );
};

// --- External link icon ---

const ExternalLinkIcon = () => (
  <svg className="h-3 w-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
    />
  </svg>
);

// --- Component ---

export const ListView = ({ requests, onRowClick, role }: ListViewProps) => {
  // Filter state
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [priorityFilter, setPriorityFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [assigneeFilter, setAssigneeFilter] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');

  // Sort state
  const [sortField, setSortField] = useState<SortField>('createdAt');
  const [sortDir, setSortDir] = useState<SortDir>('desc');

  // Role flags
  const isAdmin = role === 'admin' || role === 'owner';
  const isMember = role === 'member';
  const showRequesterCol = !isMember; // admin + editor see requester
  const showAssigneeCol = isAdmin || isMember; // admin + member see assignee
  const showAssigneeFilter = isAdmin;
  const showExport = !isMember; // admin + editor can export

  const title = isAdmin ? 'All Requests' : role === 'editor' ? 'My Assignments' : 'My Requests';

  // Unique assignees for filter dropdown
  const assigneeOptions = useMemo(() => {
    const map = new Map<string, string>();
    requests.forEach((r) => {
      if (r.assigneeId && r.assigneeName) map.set(r.assigneeId, r.assigneeName);
    });
    return Array.from(map.entries()).map(([value, label]) => ({ value, label }));
  }, [requests]);

  // Filtering
  const filtered = useMemo(() => {
    let result = requests;

    if (search) {
      const q = search.toLowerCase();
      result = result.filter(
        (r) =>
          r.title.toLowerCase().includes(q) ||
          r.description.toLowerCase().includes(q) ||
          r.requesterName.toLowerCase().includes(q)
      );
    }
    if (statusFilter) result = result.filter((r) => r.status === statusFilter);
    if (priorityFilter) result = result.filter((r) => r.priority === priorityFilter);
    if (typeFilter) result = result.filter((r) => r.type === typeFilter);
    if (assigneeFilter) result = result.filter((r) => r.assigneeId === assigneeFilter);
    if (fromDate) {
      const from = new Date(fromDate);
      result = result.filter((r) => new Date(r.createdAt) >= from);
    }
    if (toDate) {
      const to = new Date(toDate);
      to.setHours(23, 59, 59, 999);
      result = result.filter((r) => new Date(r.createdAt) <= to);
    }

    return result;
  }, [requests, search, statusFilter, priorityFilter, typeFilter, assigneeFilter, fromDate, toDate]);

  // Sorting
  const sorted = useMemo(() => {
    const dir = sortDir === 'asc' ? 1 : -1;
    return [...filtered].sort((a, b) => {
      switch (sortField) {
        case 'title':
          return dir * a.title.localeCompare(b.title);
        case 'priority':
          return dir * (PRIORITY_SORT_ORDER[a.priority] - PRIORITY_SORT_ORDER[b.priority]);
        case 'status':
          return dir * (STATUS_SORT_ORDER[a.status] - STATUS_SORT_ORDER[b.status]);
        case 'dueDate': {
          const aD = a.dueDate ? new Date(a.dueDate).getTime() : Infinity;
          const bD = b.dueDate ? new Date(b.dueDate).getTime() : Infinity;
          return dir * (aD - bD);
        }
        case 'createdAt':
          return dir * (new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
        default:
          return 0;
      }
    });
  }, [filtered, sortField, sortDir]);

  // Sort toggle
  const toggleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDir((prev) => (prev === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortField(field);
      setSortDir('asc');
    }
  };

  // Export CSV
  const exportCsv = () => {
    const headers = [
      'Title',
      'Description',
      'Type',
      'Priority',
      'Status',
      'Requester',
      'Requester Email',
      'Assigned To',
      'Due Date',
      'Created',
      'Items',
      'Reference Links',
      'Final Link',
    ];

    const rows = sorted.map((r) => [
      r.title,
      r.description,
      REQUEST_TYPE_LABELS[r.type],
      r.priority,
      REQUEST_STATUS_LABELS[r.status],
      r.requesterName,
      r.requesterEmail,
      r.assigneeName || '',
      r.dueDate || '',
      r.createdAt,
      String(r.totalItems ?? 1),
      r.referenceLinks.join(' | '),
      r.finalLink || '',
    ]);

    const csvContent = [headers, ...rows]
      .map((row) => row.map((cell) => `"${cell.replace(/"/g, '""')}"`).join(','))
      .join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `requests-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // Column count for empty-state colSpan
  const colCount = 9 + (showRequesterCol ? 1 : 0) + (showAssigneeCol ? 1 : 0);

  // Filter dropdown options
  const statusOptions = [
    { value: '', label: 'All Status' },
    ...REQUEST_STATUSES.map((s) => ({ value: s, label: REQUEST_STATUS_LABELS[s] })),
  ];
  const priorityOptions = [
    { value: '', label: 'All Priority' },
    ...REQUEST_PRIORITIES.map((p) => ({ value: p, label: p.charAt(0).toUpperCase() + p.slice(1) })),
  ];
  const typeOptions = [
    { value: '', label: 'All Types' },
    ...REQUEST_TYPES.map((t) => ({ value: t, label: REQUEST_TYPE_LABELS[t] })),
  ];
  const assigneeSelectOptions = [{ value: '', label: 'All Assignees' }, ...assigneeOptions];

  // Sortable header helper
  const SortTh = ({ field, children }: { field: SortField; children: string }) => (
    <th
      className="cursor-pointer select-none px-4 py-3 text-left text-xs font-medium text-[var(--text-secondary)]"
      onClick={() => toggleSort(field)}
    >
      <div className="flex items-center gap-1">
        {children}
        <SortIcon field={field} activeField={sortField} dir={sortDir} />
      </div>
    </th>
  );

  const PlainTh = ({ children }: { children: string }) => (
    <th className="px-4 py-3 text-left text-xs font-medium text-[var(--text-secondary)]">{children}</th>
  );

  return (
    <div className="space-y-4">
      {/* ── Header ── */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold tracking-tight text-[var(--text-primary)]">{title}</h2>
        <div className="flex items-center gap-3">
          {showExport && (
            <Button
              variant="secondary"
              size="sm"
              onClick={exportCsv}
              icon={
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                  />
                </svg>
              }
            >
              Export CSV
            </Button>
          )}
          <span className="rounded-[var(--radius-md)] border border-[var(--border)] px-3 py-1.5 text-sm text-[var(--text-secondary)]">
            {sorted.length} of {requests.length}
          </span>
        </div>
      </div>

      {/* ── Filters ── */}
      <div className="flex flex-wrap gap-3 rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] p-4">
        <div className="min-w-[160px] flex-[1.5]">
          <label className="mb-1 block text-xs font-medium text-[var(--text-secondary)]">Search</label>
          <Input placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} />
        </div>
        <div className="min-w-[130px] flex-1">
          <label className="mb-1 block text-xs font-medium text-[var(--text-secondary)]">Status</label>
          <Select options={statusOptions} value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} />
        </div>
        <div className="min-w-[130px] flex-1">
          <label className="mb-1 block text-xs font-medium text-[var(--text-secondary)]">Priority</label>
          <Select
            options={priorityOptions}
            value={priorityFilter}
            onChange={(e) => setPriorityFilter(e.target.value)}
          />
        </div>
        <div className="min-w-[130px] flex-1">
          <label className="mb-1 block text-xs font-medium text-[var(--text-secondary)]">Type</label>
          <Select options={typeOptions} value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)} />
        </div>
        {showAssigneeFilter && (
          <div className="min-w-[140px] flex-1">
            <label className="mb-1 block text-xs font-medium text-[var(--text-secondary)]">Assignee</label>
            <Select
              options={assigneeSelectOptions}
              value={assigneeFilter}
              onChange={(e) => setAssigneeFilter(e.target.value)}
            />
          </div>
        )}
        <div className="min-w-[140px] flex-1">
          <label className="mb-1 block text-xs font-medium text-[var(--text-secondary)]">From Date</label>
          <Input type="date" value={fromDate} onChange={(e) => setFromDate(e.target.value)} />
        </div>
        <div className="min-w-[140px] flex-1">
          <label className="mb-1 block text-xs font-medium text-[var(--text-secondary)]">To Date</label>
          <Input type="date" value={toDate} onChange={(e) => setToDate(e.target.value)} />
        </div>
      </div>

      {/* ── Table ── */}
      <div className="overflow-x-auto rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)]">
        <table className="w-full min-w-[1100px]">
          <thead>
            <tr className="border-b border-[var(--border)] bg-[var(--surface-secondary)]">
              <SortTh field="title">Title</SortTh>
              <PlainTh>Type</PlainTh>
              <SortTh field="priority">Priority</SortTh>
              <SortTh field="status">Status</SortTh>
              {showRequesterCol && <PlainTh>Requester</PlainTh>}
              {showAssigneeCol && <PlainTh>Assigned To</PlainTh>}
              <SortTh field="dueDate">Due Date</SortTh>
              <SortTh field="createdAt">Created</SortTh>
              <PlainTh>Items</PlainTh>
              <PlainTh>Links</PlainTh>
              <PlainTh>Final Link</PlainTh>
            </tr>
          </thead>

          <tbody>
            {sorted.length === 0 ? (
              <tr>
                <td colSpan={colCount} className="px-4 py-12 text-center text-sm text-[var(--text-tertiary)]">
                  No requests found
                </td>
              </tr>
            ) : (
              sorted.map((req) => {
                const pCfg = PRIORITY_CONFIG[req.priority];
                const sColor = getStatusBadgeColor(req.status);
                const isDeleted = req.status === 'deleted';

                return (
                  <tr
                    key={req.id}
                    onClick={() => onRowClick(req)}
                    className={`cursor-pointer border-b border-[var(--border)] last:border-b-0 transition-colors duration-[var(--transition-fast)] hover:bg-[var(--surface-hover)] ${isDeleted ? 'bg-red-50/50 line-through decoration-red-400/60' : ''}`}
                  >
                    {/* Title + description */}
                    <td className="max-w-[240px] px-4 py-3">
                      <div className="truncate text-sm font-medium text-[var(--text-primary)]">{req.title}</div>
                      {req.description && (
                        <div className="mt-0.5 truncate text-xs text-[var(--text-tertiary)]">{req.description}</div>
                      )}
                    </td>

                    {/* Type */}
                    <td className="whitespace-nowrap px-4 py-3">
                      <div className="flex items-center gap-1.5">
                        <span className="text-sm">{REQUEST_TYPE_ICONS[req.type]}</span>
                        <span className="text-sm text-[var(--text-secondary)]">{REQUEST_TYPE_LABELS[req.type]}</span>
                      </div>
                    </td>

                    {/* Priority */}
                    <td className="px-4 py-3">
                      <Badge color={pCfg.color} variant={req.priority === 'urgent' ? 'filled' : 'default'}>
                        {pCfg.label}
                      </Badge>
                    </td>

                    {/* Status */}
                    <td className="px-4 py-3">
                      <Badge color={sColor} variant="default">
                        {REQUEST_STATUS_LABELS[req.status]}
                      </Badge>
                    </td>

                    {/* Requester (admin + editor) */}
                    {showRequesterCol && (
                      <td className="px-4 py-3">
                        <div className="text-sm font-medium text-[var(--text-primary)]">{req.requesterName}</div>
                        <div className="text-xs text-[var(--text-tertiary)]">{req.requesterEmail}</div>
                      </td>
                    )}

                    {/* Assigned To (admin + member) */}
                    {showAssigneeCol && (
                      <td className="px-4 py-3">
                        <span className="text-sm text-[var(--text-secondary)]">{req.assigneeName || '—'}</span>
                      </td>
                    )}

                    {/* Due Date */}
                    <td className="whitespace-nowrap px-4 py-3">
                      <span className="text-sm text-[var(--text-secondary)]">
                        {req.dueDate ? formatDate(req.dueDate) : '—'}
                      </span>
                    </td>

                    {/* Created */}
                    <td className="whitespace-nowrap px-4 py-3">
                      <span className="text-xs text-[var(--text-tertiary)]">{formatDateTime(req.createdAt)}</span>
                    </td>

                    {/* Items */}
                    <td className="px-4 py-3 text-center">
                      <span className="text-sm font-semibold text-[var(--error)]">{req.totalItems ?? 1}</span>
                    </td>

                    {/* Links */}
                    <td className="px-4 py-3">
                      {req.referenceLinks.length > 0 ? (
                        <div className="flex flex-col gap-1">
                          {req.referenceLinks.map((link, i) => (
                            <a
                              key={i}
                              href={link}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="inline-flex items-center gap-1 text-xs font-medium text-[var(--primary)] hover:text-[var(--primary-hover)]"
                            >
                              <ExternalLinkIcon />
                              Link {i + 1}
                            </a>
                          ))}
                        </div>
                      ) : (
                        <span className="text-xs text-[var(--text-tertiary)]">—</span>
                      )}
                    </td>

                    {/* Final Link */}
                    <td className="px-4 py-3">
                      {req.finalLink ? (
                        <a
                          href={req.finalLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1 text-xs font-medium text-[var(--primary)] hover:text-[var(--primary-hover)]"
                        >
                          <ExternalLinkIcon />
                          Final
                        </a>
                      ) : (
                        <span className="text-xs text-[var(--text-tertiary)]">—</span>
                      )}
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
