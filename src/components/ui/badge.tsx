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
    default: 'bg-[var(--surface-secondary)] text-[var(--text-primary)] border-[2px] border-[var(--border-light)]',
    outline: 'border-[2px] border-[var(--navy)] text-[var(--text-primary)]',
    filled: 'bg-[var(--navy)] text-white border-[2px] border-[var(--navy)]',
  },
  blue: {
    default: 'bg-blue-50 text-blue-700 border-[2px] border-blue-200',
    outline: 'border-[2px] border-blue-400 text-blue-700',
    filled: 'bg-blue-500 text-white border-[2px] border-[var(--navy)]',
  },
  green: {
    default: 'bg-[var(--primary-light)] text-[#15803D] border-[2px] border-[var(--primary)]',
    outline: 'border-[2px] border-[var(--primary)] text-[#15803D]',
    filled: 'bg-[var(--primary)] text-white border-[2px] border-[var(--navy)]',
  },
  yellow: {
    default: 'bg-amber-50 text-amber-700 border-[2px] border-amber-200',
    outline: 'border-[2px] border-amber-400 text-amber-700',
    filled: 'bg-amber-500 text-white border-[2px] border-[var(--navy)]',
  },
  red: {
    default: 'bg-red-50 text-red-700 border-[2px] border-red-200',
    outline: 'border-[2px] border-red-400 text-red-700',
    filled: 'bg-red-500 text-white border-[2px] border-[var(--navy)]',
  },
  gray: {
    default: 'bg-slate-100 text-slate-600 border-[2px] border-slate-200',
    outline: 'border-[2px] border-slate-300 text-slate-600',
    filled: 'bg-slate-500 text-white border-[2px] border-[var(--navy)]',
  },
  purple: {
    default: 'bg-purple-50 text-purple-700 border-[2px] border-purple-200',
    outline: 'border-[2px] border-purple-400 text-purple-700',
    filled: 'bg-purple-600 text-white border-[2px] border-[var(--navy)]',
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
        inline-flex items-center px-2.5 py-0.5
        text-[11px] font-bold uppercase tracking-wide
        rounded-full
        ${COLOR_STYLES[color][variant]}
        ${className}
      `}
    >
      {children}
    </span>
  );
};
