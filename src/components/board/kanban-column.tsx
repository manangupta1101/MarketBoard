'use client';

import type { CreativeRequest, RequestStatus } from '@/types';
import { REQUEST_STATUS_LABELS } from '@/types';
import { RequestCard } from './request-card';

interface KanbanColumnProps {
  status: RequestStatus;
  requests: CreativeRequest[];
  onCardClick: (request: CreativeRequest) => void;
}

const STATUS_COLORS: Record<RequestStatus, string> = {
  open: 'bg-blue-50/80 border-[2.5px] border-blue-300',
  in_progress: 'bg-amber-50/80 border-[2.5px] border-amber-300',
  review: 'bg-violet-50/80 border-[2.5px] border-violet-300',
  closed: 'bg-emerald-50/80 border-[2.5px] border-emerald-300',
  deleted: 'bg-red-50/80 border-[2.5px] border-red-300',
};

const STATUS_DOT: Record<RequestStatus, string> = {
  open: 'bg-blue-500',
  in_progress: 'bg-amber-500',
  review: 'bg-violet-500',
  closed: 'bg-emerald-500',
  deleted: 'bg-red-500',
};

const CLOSED_CARD_LIMIT = 10;

export const KanbanColumn = ({ status, requests, onCardClick }: KanbanColumnProps) => {
  // For the closed column, show only the most recent cards (sorted newest first)
  const visibleCards = status === 'closed'
    ? [...requests].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()).slice(0, CLOSED_CARD_LIMIT)
    : requests;

  const hiddenCount = requests.length - visibleCards.length;

  return (
    <div className="flex min-w-[280px] max-w-[320px] flex-1 flex-col snap-center md:snap-align-none">
      {/* Column Header */}
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className={`h-2.5 w-2.5 rounded-full ${STATUS_DOT[status]}`} />
          <h3 className="text-sm font-bold text-[var(--text-primary)]">
            {REQUEST_STATUS_LABELS[status]}
          </h3>
        </div>
        <span className="flex h-6 min-w-[24px] items-center justify-center rounded-full border-[2px] border-[var(--border-light)] bg-[var(--surface)] px-2 text-xs font-bold text-[var(--text-secondary)]">
          {requests.length}
        </span>
      </div>

      {/* Column Body */}
      <div
        className={`
          flex flex-1 flex-col gap-2.5 rounded-2xl p-2.5
          ${STATUS_COLORS[status]}
          overflow-y-auto
        `}
        style={{ maxHeight: 'calc(100vh - 200px)' }}
      >
        {visibleCards.length === 0 ? (
          <div className="flex flex-1 items-center justify-center py-12">
            <span className="text-sm font-medium text-[var(--text-tertiary)]">No requests</span>
          </div>
        ) : (
          <>
            {visibleCards.map((request) => (
              <RequestCard key={request.id} request={request} onClick={onCardClick} />
            ))}
            {hiddenCount > 0 && (
              <p className="py-2 text-center text-xs font-medium text-[var(--text-tertiary)]">
                +{hiddenCount} more in List View
              </p>
            )}
          </>
        )}
      </div>
    </div>
  );
};
