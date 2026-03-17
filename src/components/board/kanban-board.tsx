'use client';

import type { CreativeRequest, RequestStatus } from '@/types';
import { REQUEST_STATUS_ORDER } from '@/types';
import { KanbanColumn } from './kanban-column';

interface KanbanBoardProps {
  requests: CreativeRequest[];
  onCardClick: (request: CreativeRequest) => void;
}

export const KanbanBoard = ({ requests, onCardClick }: KanbanBoardProps) => {
  const groupedByStatus = REQUEST_STATUS_ORDER.reduce(
    (acc, status) => {
      acc[status] = requests.filter((r) => r.status === status);
      return acc;
    },
    {} as Record<RequestStatus, CreativeRequest[]>
  );

  return (
    <div className="
      flex gap-5 pb-4
      overflow-x-auto
      snap-x snap-mandatory
      md:snap-none
      -mx-4 px-4 md:mx-0 md:px-0
      scroll-smooth
      [&::-webkit-scrollbar]:h-2
      [&::-webkit-scrollbar-thumb]:rounded-full
      [&::-webkit-scrollbar-thumb]:bg-[var(--border-light)]
      [-webkit-overflow-scrolling:touch]
    ">
      {REQUEST_STATUS_ORDER.map((status) => (
        <KanbanColumn
          key={status}
          status={status}
          requests={groupedByStatus[status]}
          onCardClick={onCardClick}
        />
      ))}
    </div>
  );
};
