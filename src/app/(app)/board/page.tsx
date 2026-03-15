'use client';

import { useState, useMemo } from 'react';
import type { CreativeRequest } from '@/types';
import { useAuthStore } from '@/stores/auth-store';
import { useRequestStore } from '@/stores/request-store';
import { AppHeader } from '@/components/layout/app-header';
import { TabToggle } from '@/components/ui/tab-toggle';
import { KanbanBoard } from '@/components/board/kanban-board';
import { ListView } from '@/components/board/list-view';
import { DashboardView } from '@/components/board/dashboard-view';
import { RequestDetailModal } from '@/components/board/request-detail-modal';
import { NewRequestModal } from '@/components/board/new-request-modal';
import { TeamPanel } from '@/components/board/team-panel';

type ViewTab = 'kanban' | 'list' | 'dashboard';

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
        // Member sees only their own requests
        return allRequests.filter((r) => r.requesterId === user.id);
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

  return (
    <div className="min-h-screen bg-[var(--background)]">
      <AppHeader
        onNewRequest={() => setNewRequestOpen(true)}
        onToggleTeamPanel={() => setTeamPanelOpen((prev) => !prev)}
      />

      <main className="mx-auto w-full max-w-[1400px] px-6 py-6 lg:px-8">
        {/* Tabs */}
        <div className="mb-6">
          <TabToggle
            options={tabOptions}
            value={activeTab}
            onChange={(v) => setActiveTab(v)}
          />
        </div>

        {/* Member info banner */}
        {user.role === 'member' && (
          <div className="mb-6 rounded-[var(--radius-md)] bg-[var(--primary-light)] px-4 py-3">
            <p className="text-sm text-[var(--primary)]">
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
          <DashboardView requests={allRequests} />
        )}
      </main>

      {/* Modals */}
      <RequestDetailModal
        request={selectedRequest}
        open={detailOpen}
        onClose={handleCloseDetail}
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
