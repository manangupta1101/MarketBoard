'use client';

import { useState, useMemo } from 'react';
import dynamic from 'next/dynamic';
import type { CreativeRequest } from '@/types';
import { useCallback } from 'react';
import { useAuthStore } from '@/stores/auth-store';
import { useRequestStore } from '@/stores/request-store';
import { useNotesStore } from '@/stores/notes-store';
import { AppHeader } from '@/components/layout/app-header';
import { TabToggle } from '@/components/ui/tab-toggle';
import { KanbanBoard } from '@/components/board/kanban-board';
import { ListView } from '@/components/board/list-view';
import { DashboardView } from '@/components/board/dashboard-view';
import { RequestDetailModal } from '@/components/board/request-detail-modal';
import { NewRequestModal } from '@/components/board/new-request-modal';
import { TeamPanel } from '@/components/board/team-panel';

// Lazy-load NotesView — BlockNote/TipTap has heavy deps that break static analysis
const NotesView = dynamic(
  () => import('@/components/notes/notes-view').then((m) => ({ default: m.NotesView })),
  { ssr: false, loading: () => <div className="flex items-center justify-center py-20"><div className="h-6 w-6 animate-spin rounded-full border-2 border-[var(--primary)] border-t-transparent" /></div> }
);

type ViewTab = 'kanban' | 'list' | 'dashboard' | 'notes';

export default function BoardPage() {
  const user = useAuthStore((s) => s.user);
  const allRequests = useRequestStore((s) => s.requests);

  const [activeTab, setActiveTab] = useState<ViewTab>('kanban');
  const [selectedRequest, setSelectedRequest] = useState<CreativeRequest | null>(null);
  const [detailOpen, setDetailOpen] = useState(false);
  const [newRequestOpen, setNewRequestOpen] = useState(false);
  const [teamPanelOpen, setTeamPanelOpen] = useState(false);

  if (!user) return null;

  // Role-based tab options
  const tabOptions = useMemo(() => {
    const base: { value: ViewTab; label: string }[] = [
      { value: 'kanban', label: 'Kanban Board' },
      { value: 'list', label: 'List View' },
    ];
    // Dashboard visible to owner and admin
    if (user.role === 'owner' || user.role === 'admin') {
      base.push({ value: 'dashboard', label: 'Dashboard' });
    }
    base.push({ value: 'notes', label: 'Notes' });
    return base;
  }, [user.role]);

  // Role-based request filtering
  const visibleRequests = useMemo(() => {
    switch (user.role) {
      case 'owner':
      case 'admin':
        // Owner and Admin see everything
        return allRequests;
      case 'editor':
        // Editor sees only requests assigned to them
        return allRequests.filter((r) => r.assigneeId === user.id);
      case 'member':
        // Member sees requests they created OR that are assigned to them
        // (preserves visibility if demoted from editor)
        return allRequests.filter((r) => r.requesterId === user.id || r.assigneeId === user.id);
      default:
        return [];
    }
  }, [allRequests, user.role, user.id]);

  const handleCardClick = (request: CreativeRequest) => {
    // Re-fetch the latest version from store
    const latest = allRequests.find((r) => r.id === request.id);
    setSelectedRequest(latest || request);
    setDetailOpen(true);
  };

  const handleCloseDetail = () => {
    setDetailOpen(false);
    setSelectedRequest(null);
  };

  const setActiveNote = useNotesStore((s) => s.setActiveNote);

  const handleNavigateToNote = useCallback((noteId: string) => {
    setActiveNote(noteId);
    setActiveTab('notes');
  }, [setActiveNote]);

  return (
    <div className="min-h-screen bg-[var(--background)]">
      <AppHeader
        onNewRequest={() => setNewRequestOpen(true)}
        onToggleTeamPanel={() => setTeamPanelOpen((prev) => !prev)}
      />

      <main className="mx-auto w-full max-w-[1400px] px-4 py-4 sm:px-6 sm:py-6 lg:px-8">
        {/* Tabs */}
        <div className="mb-4 sm:mb-6">
          <TabToggle
            options={tabOptions}
            value={activeTab}
            onChange={(v) => setActiveTab(v)}
          />
        </div>

        {/* Member info banner */}
        {user.role === 'member' && (
          <div className="mb-4 rounded-[var(--radius-lg)] border-2 border-[var(--primary)] bg-[var(--primary-light)] px-4 py-3 sm:mb-6">
            <p className="text-sm font-medium text-[var(--primary)]">
              You can create new requests and track their status here. Your requests will be assigned to an editor by an admin.
            </p>
          </div>
        )}

        {/* Content */}
        {activeTab === 'kanban' && (
          <KanbanBoard requests={visibleRequests} onCardClick={handleCardClick} />
        )}

        {activeTab === 'list' && (
          <ListView requests={visibleRequests} onRowClick={handleCardClick} role={user.role} />
        )}

        {activeTab === 'dashboard' && (user.role === 'owner' || user.role === 'admin') && (
          <DashboardView requests={allRequests} onRequestClick={handleCardClick} />
        )}

        {activeTab === 'notes' && (
          <NotesView />
        )}
      </main>

      {/* Modals */}
      <RequestDetailModal
        request={selectedRequest}
        open={detailOpen}
        onClose={handleCloseDetail}
        onNavigateToNote={handleNavigateToNote}
      />

      <NewRequestModal
        open={newRequestOpen}
        onClose={() => setNewRequestOpen(false)}
      />

      {/* Team Panel — Admin only */}
      <TeamPanel
        open={teamPanelOpen}
        onClose={() => setTeamPanelOpen(false)}
      />
    </div>
  );
}
