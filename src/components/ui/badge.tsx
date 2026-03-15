import type { ReactNode } from 'react';

type BadgeVariant = 'default' | 'outline' | 'filled';
type BadgeColor = 'default' | 'blue' | 'green' | 'yellow' | 'red' | 'gray' | 'purple';

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  color?: BadgeColor;
  className?: string;
}

const COLOR_STYLES: Record<BadgeColor, Record<BadgeVariant, string>> = {
  default: {
    default: 'bg-[var(--surface-secondary)] text-[var(--text-primary)]',
    outline: 'border border-[var(--border)] text-[var(--text-primary)]',
    filled: 'bg-[var(--text-primary)] text-[var(--text-inverse)]',
  },
  blue: {
    default: 'bg-[var(--primary-light)] text-[var(--primary)]',
    outline: 'border border-[var(--primary)]/30 text-[var(--primary)]',
    filled: 'bg-[var(--primary)] text-white',
  },
  green: {
    default: 'bg-[var(--success-light)] text-[var(--success)]',
    outline: 'border border-[var(--success)]/30 text-[var(--success)]',
    filled: 'bg-[var(--success)] text-white',
  },
  yellow: {
    default: 'bg-[var(--warning-light)] text-[var(--warning)]',
    outline: 'border border-[var(--warning)]/30 text-[var(--warning)]',
    filled: 'bg-[var(--warning)] text-white',
  },
  red: {
    default: 'bg-[var(--error-light)] text-[var(--error)]',
    outline: 'border border-[var(--error)]/30 text-[var(--error)]',
    filled: 'bg-[var(--error)] text-white',
  },
  gray: {
    default: 'bg-[var(--surface-secondary)] text-[var(--text-secondary)]',
    outline: 'border border-[var(--border)] text-[var(--text-secondary)]',
    filled: 'bg-[var(--text-tertiary)] text-white',
  },
  purple: {
    default: 'bg-purple-50 text-purple-700',
    outline: 'border border-purple-300 text-purple-700',
    filled: 'bg-purple-600 text-white',
  },
};

export const Badge = ({
  children,
  variant = 'default',
  color = 'default',
  className = '',
}: BadgeProps) => {
  return (
    <span
      className={`
        inline-flex items-center px-2 py-0.5
        text-xs font-medium
        rounded-[var(--radius-sm)]
        ${COLOR_STYLES[color][variant]}
        ${className}
      `}
    >
      {children}
    </span>
  );
};
