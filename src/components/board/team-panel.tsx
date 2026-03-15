'use client';

import { useState, useMemo, useCallback } from 'react';
import type { AppRole } from '@/types';
import { APP_ROLES, MAX_OWNERS } from '@/types';
import { useTeamStore } from '@/stores/team-store';
import { useAuthStore } from '@/stores/auth-store';
import { useOwnershipStore } from '@/stores/ownership-store';
import { Avatar } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

interface TeamPanelProps {
  open: boolean;
  onClose: () => void;
}

const ROLE_COLORS: Record<AppRole, 'purple' | 'blue' | 'green' | 'gray'> = {
  owner: 'purple',
  admin: 'blue',
  editor: 'green',
  member: 'gray',
};

// Which roles can the current user assign?
const getAssignableRoles = (currentUserRole: AppRole, targetRole: AppRole, ownerCount: number): AppRole[] => {
  if (currentUserRole === 'owner') {
    // Owner can assign any role, but cap owners at MAX_OWNERS
    const roles: AppRole[] = ['admin', 'editor', 'member'];
    if (ownerCount < MAX_OWNERS && targetRole !== 'owner') {
      roles.unshift('owner');
    }
    if (targetRole === 'owner') {
      roles.unshift('owner');
    }
    return roles;
  }
  if (currentUserRole === 'admin') {
    // Admin can only assign editor/member — NOT admin or owner
    // Admin promotion requires owner approval (handled separately)
    return ['editor', 'member'];
  }
  return [];
};

// ============================================
// TRANSFER OWNERSHIP MODAL
// ============================================

interface TransferOwnershipModalProps {
  onConfirm: (targetId: string) => void;
  onClose: () => void;
  eligibleMembers: { id: string; name: string; role: AppRole }[];
}

const TransferOwnershipModal = ({ onConfirm, onClose, eligibleMembers }: TransferOwnershipModalProps) => {
  const [selectedId, setSelectedId] = useState('');

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50" onClick={onClose}>
      <div
        className="w-full max-w-sm rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-xl"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Transfer ownership"
      >
        <h3 className="text-base font-semibold text-[var(--text-primary)]">Transfer Ownership</h3>
        <p className="mt-1 text-sm text-[var(--text-tertiary)]">
          Select a member to transfer your owner role to. You will become an admin.
        </p>
        <select
          value={selectedId}
          onChange={(e) => setSelectedId(e.target.value)}
          className="mt-4 w-full rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--background)] px-3 py-2 text-sm text-[var(--text-primary)] outline-none"
          aria-label="Select new owner"
        >
          <option value="">Select a member...</option>
          {eligibleMembers.map((m) => (
            <option key={m.id} value={m.id}>
              {m.name} ({m.role})
            </option>
          ))}
        </select>
        <div className="mt-5 flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="rounded-[var(--radius-md)] border border-[var(--border)] px-4 py-2 text-sm font-medium text-[var(--text-secondary)] transition-colors hover:bg-[var(--background)]"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={() => selectedId && onConfirm(selectedId)}
            disabled={!selectedId}
            className="rounded-[var(--radius-md)] bg-purple-600 px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90 disabled:opacity-50"
          >
            Transfer
          </button>
        </div>
      </div>
    </div>
  );
};

// ============================================
// PENDING REQUESTS SECTION
// ============================================

interface PendingRequestsSectionProps {
  currentUserId: string;
  currentUserRole: AppRole;
}

const PendingRequestsSection = ({ currentUserId, currentUserRole }: PendingRequestsSectionProps) => {
  const promotionRequests = useOwnershipStore((s) => s.promotionRequests);
  const approvePromotion = useOwnershipStore((s) => s.approvePromotion);
  const rejectPromotion = useOwnershipStore((s) => s.rejectPromotion);
  const updateRole = useTeamStore((s) => s.updateRole);
  const currentUser = useAuthStore((s) => s.user);

  const pendingRequests = useMemo(
    () => promotionRequests.filter((r) => r.status === 'pending'),
    [promotionRequests]
  );

  if (pendingRequests.length === 0 || currentUserRole !== 'owner') return null;

  const handleApprove = (requestId: string, targetUserId: string) => {
    if (!currentUser) return;
    approvePromotion(requestId, currentUserId, currentUser.name);
    updateRole(targetUserId, 'admin');
  };

  const handleReject = (requestId: string) => {
    if (!currentUser) return;
    rejectPromotion(requestId, currentUserId, currentUser.name);
  };

  return (
    <div className="border-b border-[var(--border)] bg-yellow-50 px-6 py-3">
      <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-yellow-700">
        Pending Admin Requests ({pendingRequests.length})
      </p>
      <div className="space-y-2">
        {pendingRequests.map((req) => (
          <div key={req.id} className="flex items-center justify-between rounded-[var(--radius-md)] bg-white/80 px-3 py-2">
            <div className="min-w-0">
              <p className="text-xs text-[var(--text-primary)]">
                <span className="font-medium">{req.requesterName}</span> wants to promote{' '}
                <span className="font-medium">{req.targetUserName}</span> to Admin
              </p>
            </div>
            <div className="ml-2 flex shrink-0 items-center gap-1.5">
              <button
                type="button"
                onClick={() => handleApprove(req.id, req.targetUserId)}
                className="rounded-[var(--radius-sm)] bg-green-600 px-2.5 py-1 text-xs font-medium text-white transition-opacity hover:opacity-90"
              >
                Approve
              </button>
              <button
                type="button"
                onClick={() => handleReject(req.id)}
                className="rounded-[var(--radius-sm)] border border-[var(--border)] px-2.5 py-1 text-xs font-medium text-[var(--text-secondary)] transition-colors hover:bg-[var(--background)]"
              >
                Reject
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ============================================
// MAIN TEAM PANEL
// ============================================

export const TeamPanel = ({ open, onClose }: TeamPanelProps) => {
  const currentUser = useAuthStore((s) => s.user);
  const members = useTeamStore((s) => s.members);
  const updateRole = useTeamStore((s) => s.updateRole);
  const removeMember = useTeamStore((s) => s.removeMember);
  const createPromotionRequest = useOwnershipStore((s) => s.createPromotionRequest);
  const promotionRequests = useOwnershipStore((s) => s.promotionRequests);

  const pendingRequests = useMemo(
    () => promotionRequests.filter((r) => r.status === 'pending'),
    [promotionRequests]
  );

  const [showTransferModal, setShowTransferModal] = useState(false);
  const [confirmRemove, setConfirmRemove] = useState<string | null>(null);

  const ownerCount = useMemo(() => members.filter((m) => m.role === 'owner').length, [members]);

  const isOwner = currentUser?.role === 'owner';
  const isAdmin = currentUser?.role === 'admin';
  const canManageRoles = isOwner || isAdmin;

  const handleRoleChange = useCallback(
    (memberId: string, memberName: string, newRole: AppRole, currentRole: AppRole) => {
      if (!currentUser) return;

      // If an admin tries to promote someone to admin, create a request instead
      if (isAdmin && newRole === 'admin') {
        // This shouldn't happen since admins can't select 'admin' in dropdown,
        // but safety check
        return;
      }

      // If trying to make someone owner, only owners can do that
      if (newRole === 'owner' && !isOwner) return;

      // Prevent demoting an owner if you're not an owner
      if (currentRole === 'owner' && !isOwner) return;

      // Prevent demoting an admin if you're not an owner
      if (currentRole === 'admin' && !isOwner) return;

      updateRole(memberId, newRole);
    },
    [currentUser, isOwner, isAdmin, updateRole]
  );

  const handleRequestAdminPromotion = useCallback(
    (targetId: string, targetName: string) => {
      if (!currentUser) return;

      // Check if there's already a pending request for this user
      const hasPending = pendingRequests.some((r) => r.targetUserId === targetId);
      if (hasPending) return;

      createPromotionRequest({
        id: `pr_${Date.now()}`,
        requesterId: currentUser.id,
        requesterName: currentUser.name,
        targetUserId: targetId,
        targetUserName: targetName,
        status: 'pending',
        reviewedById: null,
        reviewedByName: null,
        createdAt: new Date().toISOString(),
        reviewedAt: null,
      });
    },
    [currentUser, pendingRequests, createPromotionRequest]
  );

  const handleTransferOwnership = useCallback(
    (targetId: string) => {
      if (!currentUser || !isOwner) return;
      updateRole(targetId, 'owner');
      updateRole(currentUser.id, 'admin');
      setShowTransferModal(false);
    },
    [currentUser, isOwner, updateRole]
  );

  const handleRemoveMember = useCallback(
    (memberId: string) => {
      removeMember(memberId);
      setConfirmRemove(null);
    },
    [removeMember]
  );

  if (!open || !currentUser) return null;

  const eligibleForTransfer = members.filter(
    (m) => m.id !== currentUser.id && m.role !== 'owner'
  );

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-black/20 backdrop-blur-[1px]"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <aside
        className="
          fixed right-0 top-0 z-50 h-full w-full max-w-[420px]
          border-l border-[var(--border)] bg-[var(--surface)]
          shadow-[var(--shadow-lg)]
          overflow-y-auto
        "
        role="dialog"
        aria-label="Team members"
      >
        {/* Header */}
        <div className="sticky top-0 z-10 border-b border-[var(--border)] bg-[var(--surface)]">
          <div className="flex items-center justify-between px-6 py-4">
            <div>
              <h2 className="text-lg font-semibold text-[var(--text-primary)]">Team Members</h2>
              <p className="text-xs text-[var(--text-tertiary)]">{members.length} members</p>
            </div>
            <div className="flex items-center gap-2">
              {/* Transfer Ownership — owners only */}
              {isOwner && (
                <button
                  type="button"
                  onClick={() => setShowTransferModal(true)}
                  className="rounded-[var(--radius-md)] border border-purple-200 bg-purple-50 px-3 py-1.5 text-xs font-medium text-purple-700 transition-colors hover:bg-purple-100"
                >
                  Transfer Ownership
                </button>
              )}
              <button
                type="button"
                onClick={onClose}
                className="flex h-8 w-8 items-center justify-center rounded-[var(--radius-md)] text-[var(--text-tertiary)] transition-all hover:bg-[var(--surface-active)] hover:text-[var(--text-primary)]"
                aria-label="Close panel"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Pending admin promotion requests — visible to owners */}
          <PendingRequestsSection currentUserId={currentUser.id} currentUserRole={currentUser.role} />
        </div>

        {/* Member List */}
        <div className="divide-y divide-[var(--border)]">
          {members.map((member) => {
            const isSelf = member.id === currentUser.id;
            const memberIsOwner = member.role === 'owner';
            const memberIsAdmin = member.role === 'admin';

            // Can the current user change this member's role?
            const canChangeRole =
              !isSelf &&
              canManageRoles &&
              // Admins cannot change other admins or owners
              !(isAdmin && (memberIsOwner || memberIsAdmin));

            // Can the current user remove this member?
            const canRemove =
              !isSelf &&
              !memberIsOwner &&
              // Admins can't remove other admins
              !(isAdmin && memberIsAdmin) &&
              canManageRoles;

            // Can the admin request promotion for this member?
            const canRequestPromotion =
              isAdmin &&
              !isSelf &&
              !memberIsOwner &&
              !memberIsAdmin &&
              !pendingRequests.some((r) => r.targetUserId === member.id);

            const hasPendingRequest = pendingRequests.some((r) => r.targetUserId === member.id);

            const assignableRoles = canChangeRole
              ? getAssignableRoles(currentUser.role, member.role, ownerCount)
              : [];

            return (
              <div key={member.id} className="flex items-center gap-3 px-6 py-4">
                <Avatar name={member.name} size="md" />

                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="truncate text-sm font-medium text-[var(--text-primary)]">
                      {member.name}
                    </span>
                    {isSelf && (
                      <span className="text-[10px] text-[var(--text-tertiary)]">(you)</span>
                    )}
                  </div>
                  <p className="truncate text-xs text-[var(--text-secondary)]">{member.email}</p>
                  <div className="mt-1 flex items-center gap-1.5">
                    <Badge color={ROLE_COLORS[member.role]} className="text-[10px]">
                      {member.role}
                    </Badge>
                    {hasPendingRequest && (
                      <span className="text-[10px] text-yellow-600">Admin request pending</span>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2">
                  {/* Role dropdown */}
                  {canChangeRole && assignableRoles.length > 0 && (
                    <select
                      value={member.role}
                      onChange={(e) =>
                        handleRoleChange(member.id, member.name, e.target.value as AppRole, member.role)
                      }
                      className="
                        border border-[var(--border)] bg-[var(--surface)]
                        rounded-[var(--radius-sm)] px-2 py-1 text-xs text-[var(--text-primary)]
                        outline-none transition-all
                        hover:border-[var(--border-hover)]
                        focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)]/10
                      "
                      aria-label={`Change role for ${member.name}`}
                    >
                      {assignableRoles.map((r) => (
                        <option key={r} value={r}>
                          {r.charAt(0).toUpperCase() + r.slice(1)}
                        </option>
                      ))}
                    </select>
                  )}

                  {/* Request Admin Promotion button — admins only, for non-admin members */}
                  {canRequestPromotion && (
                    <button
                      type="button"
                      onClick={() => handleRequestAdminPromotion(member.id, member.name)}
                      className="rounded-[var(--radius-sm)] border border-blue-200 bg-blue-50 px-2 py-1 text-[10px] font-medium text-blue-700 transition-colors hover:bg-blue-100"
                      aria-label={`Request admin promotion for ${member.name}`}
                    >
                      Request Admin
                    </button>
                  )}

                  {/* Remove button */}
                  {canRemove && (
                    <>
                      {confirmRemove === member.id ? (
                        <div className="flex items-center gap-1">
                          <button
                            type="button"
                            onClick={() => handleRemoveMember(member.id)}
                            className="rounded-[var(--radius-sm)] bg-red-600 px-2 py-1 text-[10px] font-medium text-white"
                          >
                            Confirm
                          </button>
                          <button
                            type="button"
                            onClick={() => setConfirmRemove(null)}
                            className="rounded-[var(--radius-sm)] border border-[var(--border)] px-2 py-1 text-[10px] text-[var(--text-secondary)]"
                          >
                            Cancel
                          </button>
                        </div>
                      ) : (
                        <button
                          type="button"
                          onClick={() => setConfirmRemove(member.id)}
                          className="flex h-7 w-7 items-center justify-center rounded-[var(--radius-sm)] text-[var(--text-tertiary)] transition-all hover:bg-[var(--error-light)] hover:text-[var(--error)]"
                          aria-label={`Remove ${member.name}`}
                        >
                          <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      )}
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </aside>

      {/* Transfer Ownership Modal */}
      {showTransferModal && (
        <TransferOwnershipModal
          onConfirm={handleTransferOwnership}
          onClose={() => setShowTransferModal(false)}
          eligibleMembers={eligibleForTransfer}
        />
      )}
    </>
  );
};
