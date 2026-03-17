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
        bg-[var(--surface)] border-[2.5px] border-[var(--navy)]
        rounded-2xl p-4
        shadow-[var(--shadow-sm)]
        transition-all duration-200 ease-out
        hover:-translate-y-0.5 hover:shadow-[var(--shadow-md)]
        active:translate-x-[1px] active:translate-y-[1px] active:shadow-[var(--shadow-xs)]
        focus-visible:outline-2 focus-visible:outline-[var(--primary)]
      "
    >
      {/* Title Row */}
      <div className="mb-2 flex items-start justify-between gap-2">
        <div className="flex items-center gap-2 min-w-0">
          <span className="shrink-0 text-sm">{typeIcon}</span>
          <span className="truncate text-sm font-bold text-[var(--text-primary)]">
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
        <p className="mb-3 truncate text-xs font-medium text-[var(--text-secondary)]">
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

        {/* Re-Edit Badge + Comment */}
        {request.isInReEdit && request.reEdits.length > 0 && (() => {
          const latestReEdit = request.reEdits[request.reEdits.length - 1];
          return (
            <div className="rounded-xl border-[2px] border-amber-300 bg-amber-50 p-2 -mx-1">
              <div className="flex items-center gap-1.5 mb-0.5">
                <svg className="h-3 w-3 shrink-0 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                <span className="text-xs font-bold text-amber-700">Re-Edit</span>
                <span className="text-xs font-medium text-amber-600">· Due {formatDate(latestReEdit.deadline)}</span>
              </div>
              {latestReEdit.comment && (
                <p className="text-xs text-amber-700 italic truncate">&ldquo;{latestReEdit.comment}&rdquo;</p>
              )}
            </div>
          );
        })()}

        {/* Pending Re-Edit Request */}
        {request.reEditRequests?.some((r) => r.status === 'pending') && (
          <div className="rounded-xl border-[2px] border-blue-300 bg-blue-50 p-2 -mx-1">
            <div className="flex items-center gap-1.5">
              <svg className="h-3 w-3 shrink-0 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-xs font-bold text-blue-700">Re-Edit Requested</span>
            </div>
            {(() => {
              const pending = request.reEditRequests.find((r) => r.status === 'pending');
              return pending?.comment ? (
                <p className="text-xs text-blue-700 italic truncate mt-0.5">&ldquo;{pending.comment}&rdquo;</p>
              ) : null;
            })()}
          </div>
        )}

        {/* Final Link */}
        {request.finalLink && (
          <div className="flex items-center gap-1.5">
            <svg className="h-3 w-3 shrink-0 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            <a
              href={request.finalLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="truncate text-xs font-bold text-[var(--primary)] hover:text-[var(--primary-hover)]"
            >
              Final Link
            </a>
          </div>
        )}
      </div>
    </button>
  );
};
