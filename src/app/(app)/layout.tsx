'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/stores/auth-store';
import { useTeamStore } from '@/stores/team-store';
import { useRequestStore } from '@/stores/request-store';
import { useOwnershipStore } from '@/stores/ownership-store';
import { useResourceStore } from '@/stores/resource-store';
import { useEditorSettingsStore } from '@/stores/editor-settings-store';
import { useAvailabilityStore } from '@/stores/availability-store';
import { useNotesStore } from '@/stores/notes-store';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const initialize = useAuthStore((s) => s.initialize);
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);
  const isLoading = useAuthStore((s) => s.isLoading);
  const [dataLoaded, setDataLoaded] = useState(false);

  // Initialize auth session from Supabase
  useEffect(() => {
    initialize();
  }, [initialize]);

  // Once authenticated, fetch all app data
  useEffect(() => {
    if (!isAuthenticated) return;

    const fetchAllData = async () => {
      await Promise.all([
        useTeamStore.getState().fetchMembers(),
        useTeamStore.getState().fetchActivity(),
        useRequestStore.getState().fetchRequests(),
        useOwnershipStore.getState().fetchCredentialsPassword(),
        useOwnershipStore.getState().fetchPromotionRequests(),
        useResourceStore.getState().fetchResources(),
        useEditorSettingsStore.getState().fetchSettings(),
        useAvailabilityStore.getState().fetchEntries(),
        useNotesStore.getState().fetchNotes(),
      ]);
      setDataLoaded(true);
    };

    fetchAllData();

    // Subscribe to realtime changes
    const unsubTeam = useTeamStore.getState().subscribeRealtime();
    const unsubRequests = useRequestStore.getState().subscribeRealtime();
    const unsubEditorSettings = useEditorSettingsStore.getState().subscribeRealtime();
    const unsubNotes = useNotesStore.getState().subscribeRealtime();
    return () => { unsubTeam(); unsubRequests(); unsubEditorSettings(); unsubNotes(); };
  }, [isAuthenticated]);

  // Redirect to login if not authenticated (after loading completes)
  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.replace('/login');
    }
  }, [isLoading, isAuthenticated, router]);

  if (isLoading || (!isAuthenticated) || !dataLoaded) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="h-6 w-6 animate-spin rounded-full border-2 border-[var(--primary)] border-t-transparent" />
          <p className="text-sm text-[var(--text-secondary)]">
            {isLoading ? 'Checking session...' : 'Loading data...'}
          </p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
