import type { ReactNode } from 'react';
import { Button } from './button';

interface EmptyStateProps {
  icon?: ReactNode;
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
}

export const EmptyState = ({
  icon,
  title,
  description,
  actionLabel,
  onAction,
}: EmptyStateProps) => {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      {icon && (
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border-[2px] border-[var(--primary)] bg-[var(--primary-light)] text-[var(--primary)]">
          {icon}
        </div>
      )}
      <h3 className="mb-1 text-base font-bold text-[var(--text-primary)]">{title}</h3>
      <p className="mb-6 max-w-sm text-sm font-medium text-[var(--text-secondary)]">{description}</p>
      {actionLabel && onAction && (
        <Button onClick={onAction} size="sm">
          {actionLabel}
        </Button>
      )}
    </div>
  );
};
