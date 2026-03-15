interface DividerProps {
  className?: string;
}

export const Divider = ({ className = '' }: DividerProps) => {
  return (
    <div
      className={`my-5 border-t border-[var(--border)] ${className}`}
      role="separator"
    />
  );
};
