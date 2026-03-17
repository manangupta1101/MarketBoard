import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: ReactNode;
  showArrow?: boolean;
  fullWidth?: boolean;
  loading?: boolean;
}

const VARIANT_STYLES: Record<ButtonVariant, string> = {
  primary:
    'bg-[var(--primary)] text-white font-bold border-[2.5px] border-[var(--navy)] rounded-full shadow-[var(--shadow-sm)] hover:bg-[var(--primary-hover)] hover:shadow-[var(--shadow-md)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[var(--shadow-xs)] disabled:opacity-50 disabled:pointer-events-none',
  secondary:
    'bg-[var(--surface)] text-[var(--text-primary)] font-bold border-[2.5px] border-[var(--navy)] rounded-full shadow-[var(--shadow-sm)] hover:bg-[var(--surface-hover)] hover:shadow-[var(--shadow-md)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[var(--shadow-xs)] disabled:opacity-50 disabled:pointer-events-none',
  ghost:
    'text-[var(--text-secondary)] font-medium hover:text-[var(--text-primary)] hover:bg-[var(--surface-active)] rounded-[var(--radius-md)] disabled:opacity-50 disabled:pointer-events-none',
  danger:
    'bg-[var(--error)] text-white font-bold border-[2.5px] border-[var(--navy)] rounded-full shadow-[var(--shadow-sm)] hover:bg-red-600 hover:shadow-[var(--shadow-md)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[var(--shadow-xs)] disabled:opacity-50 disabled:pointer-events-none',
};

const SIZE_STYLES: Record<ButtonSize, string> = {
  sm: 'px-4 py-1.5 text-xs',
  md: 'px-5 py-2 text-sm',
  lg: 'px-6 py-2.5 text-sm',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      icon,
      showArrow = false,
      fullWidth = false,
      loading = false,
      disabled,
      className = '',
      children,
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || loading;

    return (
      <button
        ref={ref}
        disabled={isDisabled}
        className={`
          inline-flex items-center justify-center gap-2
          transition-all duration-200 ease-out
          ${VARIANT_STYLES[variant]}
          ${variant !== 'ghost' ? SIZE_STYLES[size] : `px-2 py-1.5 text-sm`}
          ${fullWidth ? 'w-full' : ''}
          ${className}
        `}
        {...props}
      >
        {loading ? (
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
        ) : icon ? (
          icon
        ) : showArrow ? (
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        ) : null}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
