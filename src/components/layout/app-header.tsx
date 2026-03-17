'use client';

import { useAuthStore } from '@/stores/auth-store';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface AppHeaderProps {
  onNewRequest: () => void;
  onToggleTeamPanel: () => void;
}

export const AppHeader = ({ onNewRequest, onToggleTeamPanel }: AppHeaderProps) => {
  const user = useAuthStore((s) => s.user);
  const logout = useAuthStore((s) => s.logout);

  if (!user) return null;

  const roleColor = user.role === 'owner' ? 'purple' : user.role === 'admin' ? 'blue' : user.role === 'editor' ? 'green' : 'gray';

  return (
    <header className="sticky top-0 z-40 border-b-[2.5px] border-[var(--navy)] bg-[var(--surface)]">
      <div className="mx-auto flex h-14 max-w-[1400px] items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left: Title + Role */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[var(--radius-lg)] border-[2.5px] border-[var(--navy)] bg-[var(--primary)] text-white shadow-[2px_2px_0px_var(--navy)]">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
            </svg>
          </div>
          <h1 className="hidden text-base font-extrabold text-[var(--navy)] sm:block" style={{ fontFamily: '"DM Sans", sans-serif' }}>Creative Requests</h1>
          <Badge color={roleColor} variant="filled" className="rounded-full border-2 border-[var(--primary)] bg-[var(--primary-light)] text-[10px] font-bold uppercase tracking-wide text-[var(--primary)]">
            {user.role}
          </Badge>
        </div>

        {/* Right: Email + Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <span className="hidden text-sm text-[var(--text-secondary)] md:block">{user.email}</span>

          {/* New Request — available to everyone */}
          <Button size="sm" onClick={onNewRequest} className="rounded-full border-[2.5px] border-[var(--navy)] bg-[var(--primary)] px-3 py-1.5 text-xs font-bold text-white shadow-[3px_3px_0px_var(--navy)] transition-all hover:bg-[var(--primary-hover)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_var(--navy)] sm:px-4 sm:text-sm">
            <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            New Request
          </Button>

          {/* Settings (Team Panel) — owner and admin */}
          {(user.role === 'owner' || user.role === 'admin') && (
            <button
              type="button"
              onClick={onToggleTeamPanel}
              className="flex h-9 w-9 items-center justify-center rounded-full text-[var(--text-secondary)] transition-all duration-150 hover:bg-[var(--background)] hover:text-[var(--navy)] active:translate-x-[1px] active:translate-y-[1px]"
              aria-label="Team settings"
            >
              <svg className="h-[18px] w-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </button>
          )}

          {/* Logout */}
          <button
            type="button"
            onClick={logout}
            className="flex h-9 w-9 items-center justify-center rounded-full text-[var(--text-secondary)] transition-all duration-150 hover:bg-[var(--background)] hover:text-[var(--navy)] active:translate-x-[1px] active:translate-y-[1px]"
            aria-label="Sign out"
          >
            <svg className="h-[18px] w-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};
