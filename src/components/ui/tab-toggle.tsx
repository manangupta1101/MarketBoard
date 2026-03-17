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
        inline-flex rounded-[var(--radius-md)] border-[2.5px] border-[var(--navy)]
        bg-[var(--surface)] p-1 shadow-[var(--shadow-sm)]
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
            rounded-[var(--radius-sm)] px-4 py-1.5 text-sm font-bold
            transition-all duration-200 ease-out
            ${
              value === option.value
                ? 'bg-[var(--primary)] text-white'
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
