import type { ReactNode } from 'react';

interface IconContainerProps {
  children: ReactNode;
  size?: 'md' | 'lg';
  variant?: 'filled' | 'outlined';
  className?: string;
}

const SIZE_STYLES = {
  md: 'h-10 w-10',
  lg: 'h-12 w-12',
};

export const IconContainer = ({
  children,
  size = 'md',
  variant = 'filled',
  className = '',
}: IconContainerProps) => {
  const variantStyles =
    variant === 'filled'
      ? 'bg-[var(--primary)] text-white border-[1.5px] border-[var(--navy)]'
      : 'border-[1.5px] border-[var(--primary)] bg-[var(--primary-light)] text-[var(--primary)]';

  return (
    <div
      className={`
        flex items-center justify-center rounded-xl
        ${SIZE_STYLES[size]} ${variantStyles} ${className}
      `}
    >
      {children}
    </div>
  );
};
