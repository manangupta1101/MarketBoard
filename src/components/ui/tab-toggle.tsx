'use client';

interface TabOption<T extends string> {
  value: T;
  label: string;
}

interface TabToggleProps<T extends string> {
  options: TabOption<T>[];
  value: T;
  onChange: (value: T) => void;
  className?: string;
}

export const TabToggle = <T extends string>({
  options,
  value,
  onChange,
  className = '',
}: TabToggleProps<T>) => {
  return (
    <div
      className={`
        inline-flex rounded-[var(--radius-md)] bg-[var(--surface-secondary)] p-1
        ${className}
      `}
      role="tablist"
    >
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          role="tab"
          aria-selected={value === option.value}
          onClick={() => onChange(option.value)}
          className={`
            rounded-[var(--radius-sm)] px-3.5 py-1.5 text-sm font-medium
            transition-all duration-[var(--transition-fast)]
            ${
              value === option.value
                ? 'bg-[var(--surface)] text-[var(--text-primary)] shadow-[var(--shadow-xs)]'
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
            }
          `}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};
