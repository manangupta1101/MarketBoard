interface DividerProps {
  className?: string;
}

export const Divider = ({ className = '' }: DividerProps) => {
  return (
    <div
      className={`my-5 border-t-[2px] border-[var(--border-light)] ${className}`}
      role="separator"
    />
  );
};
