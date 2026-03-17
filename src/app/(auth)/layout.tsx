import type { ReactNode } from 'react';

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen bg-[var(--background)]">
      {/* Subtle background pattern */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, var(--text-primary) 1px, transparent 0)`,
            backgroundSize: '24px 24px',
          }}
        />
      </div>

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-8">
        {children}

        {/* Attribution badge */}
        <p
          className="mt-6 inline-flex items-center gap-1.5 rounded-full border-2 border-[var(--border)] bg-[var(--surface)] px-4 py-1.5 text-xs font-bold tracking-wide text-[var(--text-secondary)]"
          style={{
            boxShadow: '3px 3px 0px var(--border)',
          }}
        >
          Product by
          <span className="font-extrabold text-[var(--primary)]">Manan</span>
        </p>
      </div>
    </div>
  );
}
