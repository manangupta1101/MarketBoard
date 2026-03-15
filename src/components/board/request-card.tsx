'use client';

import type { CreativeRequest } from '@/types';
import { PRIORITY_CONFIG, REQUEST_TYPE_ICONS } from '@/types';
import { Badge } from '@/components/ui/badge';

interface RequestCardProps {
  request: CreativeRequest;
  onClick: (request: CreativeRequest) => void;
}

const formatDate = (dateStr: string): string => {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
};

export const RequestCard = ({ request, onClick }: RequestCardProps) => {
  const priorityCfg = PRIORITY_CONFIG[request.priority];
  const typeIcon = REQUEST_TYPE_ICONS[request.type];

  return (
    <button
      type="button"
      onClick={() => onClick(request)}
      className="
        w-full text-left
        bg-[var(--surface)] border border-[var(--border)]
        rounded-[var(--radius-lg)] p-4
        shadow-[var(--shadow-xs)]
        transition-all duration-[var(--transition-fast)]
        hover:border-[var(--border-hover)] hover:shadow-[var(--shadow-sm)]
        focus-visible:outline-2 focus-visible:outline-[var(--primary)]
      "
    >
      {/* Title Row */}
      <div className="mb-2 flex items-start justify-between gap-2">
        <div className="flex items-center gap-2 min-w-0">
          <span className="shrink-0 text-sm">{typeIcon}</span>
          <span className="truncate text-sm font-semibold text-[var(--text-primary)]">
            {request.title}
          </span>
        </div>
        <Badge
          color={priorityCfg.color}
          variant={request.priority === 'urgent' ? 'filled' : 'default'}
          className="shrink-0"
        >
          {priorityCfg.label}
        </Badge>
      </div>

      {/* Description */}
      {request.description && (
        <p className="mb-3 truncate text-xs text-[var(--text-secondary)]">
          {request.description}
        </p>
      )}

      {/* Meta */}
      <div className="flex flex-col gap-1.5">
        {/* Requester */}
        <div className="flex items-center gap-1.5">
          <svg className="h-3 w-3 shrink-0 text-[var(--text-tertiary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          <span className="truncate text-xs text-[var(--text-secondary)]">{request.requesterName}</span>
        </div>

        {/* Assignee */}
        {request.assigneeName && (
          <div className="flex items-center gap-1.5">
            <svg className="h-3 w-3 shrink-0 text-[var(--text-tertiary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="truncate text-xs text-[var(--text-secondary)]">{request.assigneeName}</span>
          </div>
        )}

        {/* Date */}
        {request.status !== 'open' && (
          <div className="flex items-center gap-1.5">
            <svg className="h-3 w-3 shrink-0 text-[var(--text-tertiary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="text-xs text-[var(--text-secondary)]">{formatDate(request.createdAt)}</span>
          </div>
        )}

        {/* Final Link */}
        {request.finalLink && (
          <div className="flex items-center gap-1.5">
            <svg className="h-3 w-3 shrink-0 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            <a
              href={request.finalLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="truncate text-xs font-medium text-green-600 hover:text-green-700"
            >
              Final Link
            </a>
          </div>
        )}
      </div>
    </button>
  );
};
