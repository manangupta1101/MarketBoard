import type { HTMLAttributes, ReactNode } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  padding?: 'sm' | 'md' | 'lg';
  shadow?: boolean;
}

const PADDING_STYLES = {
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
};

export const Card = ({
  children,
  padding = 'lg',
  shadow = true,
  className = '',
  ...props
}: CardProps) => {
  return (
    <div
      className={`
        bg-[var(--surface)] border-[2.5px] border-[var(--navy)]
        rounded-2xl
        ${PADDING_STYLES[padding]}
        ${shadow ? 'shadow-[var(--shadow-md)]' : ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
};
