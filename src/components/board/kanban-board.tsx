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
    <div className="flex gap-4 overflow-x-auto pb-4">
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
