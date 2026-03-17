import { forwardRef, type TextareaHTMLAttributes } from 'react';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, className = '', id, ...props }, ref) => {
    const textareaId = id || label?.toLowerCase().replace(/\s+/g, '-');

    return (
      <div>
        {label && (
          <label
            htmlFor={textareaId}
            className="mb-1.5 block text-sm font-bold text-[var(--text-primary)]"
          >
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={textareaId}
          className={`
            w-full border-[2px] border-[var(--border-light)] bg-[var(--surface)]
            rounded-[var(--radius-md)] px-4 py-2.5 text-sm text-[var(--text-primary)]
            placeholder-[var(--text-tertiary)] outline-none
            transition-all duration-200 ease-out
            resize-y min-h-[80px]
            hover:border-[var(--navy)]
            focus:border-[var(--primary)] focus:ring-0
            ${error ? 'border-[var(--error)] focus:border-[var(--error)]' : ''}
            ${className}
          `}
          aria-invalid={error ? 'true' : undefined}
          {...props}
        />
        {error && (
          <p className="mt-1.5 text-xs font-medium text-[var(--error)]" role="alert">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';
