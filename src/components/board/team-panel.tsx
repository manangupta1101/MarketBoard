'use client';

import { useState, useMemo, useCallback } from 'react';
import type { AppRole } from '@/types';
import { APP_ROLES, MAX_OWNERS } from '@/types';
import { useTeamStore } from '@/stores/team-store';
import { useAuthStore } from '@/stores/auth-store';
import { useRequestStore } from '@/stores/request-store';
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
    // Admin can assign editor/member freely — admin promotion requires owner OTP
    return ['admin', 'editor', 'member'];
  }
  return [];
};

// ============================================
// TRANSFER OWNERSHIP MODAL (WITH OTP)
// ============================================

interface TransferOwnershipModalProps {
  onConfirm: (targetId: string) => void;
  onClose: () => void;
  eligibleMembers: { id: string; name: string; role: AppRole }[];
  currentUserId: string;
}

const TransferOwnershipModal = ({ onConfirm, onClose, eligibleMembers, currentUserId }: TransferOwnershipModalProps) => {
  const [selectedId, setSelectedId] = useState('');
  const [step, setStep] = useState<'select' | 'otp'>('select');
  const [otpInput, setOtpInput] = useState('');
  const [otpError, setOtpError] = useState('');
  const [displayOtp, setDisplayOtp] = useState('');

  const members = useTeamStore((s) => s.members);
  const initiateTransferOtp = useOwnershipStore((s) => s.initiateTransferOtp);
  const verifyTransferOtp = useOwnershipStore((s) => s.verifyTransferOtp);

  const handleProceedToOtp = () => {
    if (!selectedId) return;

    // Find other owners to send OTP to
    const otherOwners = members.filter(
      (m) => m.role === 'owner' && m.id !== currentUserId
    );

    const ownerEmails = otherOwners.map((o) => o.email);
    const otp = initiateTransferOtp(selectedId, currentUserId, ownerEmails);

    // In a real app, OTP would be emailed. For demo, we display it.
    setDisplayOtp(otp);
    setStep('otp');
  };

  const handleVerifyOtp = () => {
    const valid = verifyTransferOtp(otpInput.trim());
    if (valid) {
      onConfirm(selectedId);
    } else {
      setOtpError('Invalid OTP. Check the code sent to other owners.');
    }
  };

  const otherOwners = members.filter(
    (m) => m.role === 'owner' && m.id !== currentUserId
  );

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50" onClick={onClose}>
      <div
        className="w-full max-w-sm rounded-2xl border-[2.5px] border-[var(--navy)] bg-[var(--surface)] p-6 shadow-[8px_8px_0px_var(--navy)]"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Transfer ownership"
      >
        {step === 'select' ? (
          <>
            <h3 className="text-base font-extrabold text-[var(--text-primary)]">Transfer Ownership</h3>
            <p className="mt-1 text-sm text-[var(--text-tertiary)]">
              Select a member to transfer your owner role to. You will become an admin.
            </p>
            <select
              value={selectedId}
              onChange={(e) => setSelectedId(e.target.value)}
              className="mt-4 w-full rounded-xl border-[2px] border-[var(--border-light)] bg-[var(--background)] px-3 py-2 text-sm font-bold text-[var(--text-primary)] outline-none hover:border-[var(--navy)] focus:border-[var(--primary)]"
              aria-label="Select new owner"
            >
              <option value="">Select a member...</option>
              {eligibleMembers.map((m) => (
                <option key={m.id} value={m.id}>
                  {m.name} ({m.role})
                </option>
              ))}
            </select>

            {otherOwners.length === 0 && (
              <p className="mt-3 rounded-xl border-[2px] border-amber-200 bg-amber-50 px-3 py-2 text-xs text-amber-800">
                You are the only owner. OTP verification will be skipped since there are no other owners to verify with.
              </p>
            )}

            <div className="mt-5 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="rounded-full border-[2px] border-[var(--navy)] px-4 py-2 text-sm font-bold text-[var(--text-secondary)] transition-all hover:bg-[var(--background)] shadow-[2px_2px_0px_var(--navy)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_var(--navy)]"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => {
                  if (otherOwners.length === 0) {
                    // No other owners — skip OTP, directly transfer
                    selectedId && onConfirm(selectedId);
                  } else {
                    handleProceedToOtp();
                  }
                }}
                disabled={!selectedId}
                className="rounded-full border-[2px] border-purple-700 bg-purple-600 px-4 py-2 text-sm font-bold text-white transition-all hover:opacity-90 disabled:opacity-50 shadow-[2px_2px_0px_theme(colors.purple.700)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_theme(colors.purple.700)]"
              >
                {otherOwners.length === 0 ? 'Transfer' : 'Send OTP & Continue'}
              </button>
            </div>
          </>
        ) : (
          <>
            <h3 className="text-base font-extrabold text-[var(--text-primary)]">Verify OTP</h3>
            <p className="mt-1 text-sm text-[var(--text-tertiary)]">
              An OTP has been sent to other owners. Enter the code to confirm transfer.
            </p>

            {otherOwners.length > 0 && (
              <div className="mt-3 rounded-xl border-[2px] border-blue-200 bg-blue-50 px-3 py-2 text-xs text-blue-800">
                <p className="font-bold">OTP sent to:</p>
                {otherOwners.map((o) => (
                  <p key={o.id}>{o.name} ({o.email})</p>
                ))}
              </div>
            )}

            {/* Demo OTP display — remove in production */}
            <div className="mt-3 rounded-xl border-[2px] border-emerald-200 bg-emerald-50 px-3 py-2 text-xs text-emerald-800">
              <p className="font-bold">Demo mode — OTP:</p>
              <p className="mt-1 text-lg font-extrabold tracking-widest">{displayOtp}</p>
            </div>

            <input
              type="text"
              inputMode="numeric"
              maxLength={6}
              value={otpInput}
              onChange={(e) => {
                setOtpInput(e.target.value.replace(/\D/g, ''));
                setOtpError('');
              }}
              placeholder="Enter 6-digit OTP"
              className="mt-4 w-full rounded-xl border-[2px] border-[var(--border-light)] bg-[var(--background)] px-3 py-2 text-center text-lg font-bold tracking-widest text-[var(--text-primary)] outline-none hover:border-[var(--navy)] focus:border-[var(--primary)]"
              aria-label="Enter OTP"
              autoFocus
            />

            {otpError && (
              <p className="mt-2 text-xs font-medium text-red-600">{otpError}</p>
            )}

            <div className="mt-5 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => { setStep('select'); setOtpInput(''); setOtpError(''); }}
                className="rounded-full border-[2px] border-[var(--navy)] px-4 py-2 text-sm font-bold text-[var(--text-secondary)] transition-all hover:bg-[var(--background)] shadow-[2px_2px_0px_var(--navy)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_var(--navy)]"
              >
                Back
              </button>
              <button
                type="button"
                onClick={handleVerifyOtp}
                disabled={otpInput.length !== 6}
                className="rounded-full border-[2px] border-purple-700 bg-purple-600 px-4 py-2 text-sm font-bold text-white transition-all hover:opacity-90 disabled:opacity-50 shadow-[2px_2px_0px_theme(colors.purple.700)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_theme(colors.purple.700)]"
              >
                Verify & Transfer
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

// ============================================
// ROLE DEMOTION CONFIRMATION MODAL
// ============================================

interface RoleDemotionConfirmProps {
  memberName: string;
  fromRole: AppRole;
  toRole: AppRole;
  assignedTaskCount: number;
  onConfirm: () => void;
  onCancel: () => void;
}

const RoleDemotionConfirmModal = ({
  memberName,
  fromRole,
  toRole,
  assignedTaskCount,
  onConfirm,
  onCancel,
}: RoleDemotionConfirmProps) => {
  // Determine if this is a promotion (editor→admin) that should preserve data
  const isEditorToAdmin = fromRole === 'editor' && toRole === 'admin';

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50" onClick={onCancel}>
      <div
        className="w-full max-w-sm rounded-2xl border-[2.5px] border-[var(--navy)] bg-[var(--surface)] p-6 shadow-[8px_8px_0px_var(--navy)]"
        onClick={(e) => e.stopPropagation()}
        role="alertdialog"
        aria-modal="true"
        aria-label="Confirm role change"
      >
        <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full border-[2px] border-amber-400 bg-amber-50 text-amber-600">
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
        </div>
        <h3 className="text-base font-bold text-[var(--text-primary)]">Change Role?</h3>
        <p className="mt-2 text-sm text-[var(--text-secondary)]">
          You are changing <span className="font-medium text-[var(--text-primary)]">{memberName}</span> from{' '}
          <span className="font-medium capitalize">{fromRole}</span> to{' '}
          <span className="font-medium capitalize">{toRole}</span>.
        </p>

        {isEditorToAdmin && (
          <div className="mt-3 rounded-xl border-[2px] border-blue-200 bg-blue-50 px-3 py-2.5 text-xs text-blue-800">
            All historical task data and metrics will be preserved. They can still self-assign tasks (P1, P2) as an admin.
          </div>
        )}

        {!isEditorToAdmin && assignedTaskCount > 0 && (
          <div className="mt-3 rounded-xl border-[2px] border-amber-200 bg-amber-50 px-3 py-2.5 text-xs text-amber-800">
            <span className="font-bold">{assignedTaskCount} task{assignedTaskCount > 1 ? 's' : ''}</span>{' '}
            assigned to this person. Tasks will be preserved — they will remain on the board and in list view.
            If you restore the editor role later, all historical data will reappear in metrics.
          </div>
        )}

        {!isEditorToAdmin && (
          <p className="mt-2 text-xs text-[var(--text-tertiary)]">
            This person will be removed from editor metrics until the role is restored.
          </p>
        )}

        <div className="mt-5 flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={onCancel}
            className="rounded-full border-[2px] border-[var(--navy)] px-4 py-2 text-sm font-bold text-[var(--text-secondary)] transition-all hover:bg-[var(--background)] shadow-[2px_2px_0px_var(--navy)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_var(--navy)]"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={onConfirm}
            className="rounded-full border-[2px] border-amber-700 bg-amber-600 px-4 py-2 text-sm font-bold text-white transition-all hover:opacity-90 shadow-[2px_2px_0px_theme(colors.amber.700)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_theme(colors.amber.700)]"
          >
            Change Role
          </button>
        </div>
      </div>
    </div>
  );
};

// ============================================
// REMOVAL CONFIRMATION MODAL (with OTP info)
// ============================================

interface RemovalConfirmModalProps {
  memberName: string;
  memberEmail: string;
  displayOtp: string | null;
  onConfirm: () => void;
  onCancel: () => void;
}

const RemovalConfirmModal = ({ memberName, memberEmail, displayOtp, onConfirm, onCancel }: RemovalConfirmModalProps) => (
  <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50" onClick={onCancel}>
    <div
      className="w-full max-w-sm rounded-2xl border-[2.5px] border-[var(--navy)] bg-[var(--surface)] p-6 shadow-[8px_8px_0px_var(--navy)]"
      onClick={(e) => e.stopPropagation()}
      role="alertdialog"
      aria-modal="true"
      aria-label="Confirm removal"
    >
      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full border-[2px] border-red-400 bg-red-50 text-red-600">
        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      </div>
      <h3 className="text-base font-bold text-[var(--text-primary)]">Remove Member?</h3>
      <p className="mt-2 text-sm text-[var(--text-secondary)]">
        Are you sure you want to remove <span className="font-medium text-[var(--text-primary)]">{memberName}</span> from the team?
      </p>
      <p className="mt-2 text-xs text-[var(--text-tertiary)]">
        Their email ({memberEmail}) will be blocked. They will need an OTP from an owner to re-register.
      </p>

      {displayOtp && (
        <div className="mt-3 rounded-xl border-[2px] border-emerald-200 bg-emerald-50 px-3 py-2 text-xs text-emerald-800">
          <p className="font-bold">Re-registration OTP (share with member if needed):</p>
          <p className="mt-1 text-lg font-extrabold tracking-widest">{displayOtp}</p>
        </div>
      )}

      <div className="mt-5 flex items-center justify-end gap-3">
        <button
          type="button"
          onClick={onCancel}
          className="rounded-full border-[2px] border-[var(--navy)] px-4 py-2 text-sm font-bold text-[var(--text-secondary)] transition-all hover:bg-[var(--background)] shadow-[2px_2px_0px_var(--navy)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_var(--navy)]"
        >
          Cancel
        </button>
        <button
          type="button"
          onClick={onConfirm}
          className="rounded-full border-[2px] border-red-700 bg-red-600 px-4 py-2 text-sm font-bold text-white transition-all hover:opacity-90 shadow-[2px_2px_0px_theme(colors.red.700)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_theme(colors.red.700)]"
        >
          Remove
        </button>
      </div>
    </div>
  </div>
);

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
    updateRole(targetUserId, 'admin', true); // preserve metrics when promoting editor→admin
  };

  const handleReject = (requestId: string) => {
    if (!currentUser) return;
    rejectPromotion(requestId, currentUserId, currentUser.name);
  };

  return (
    <div className="border-b-[2px] border-[var(--border-light)] bg-yellow-50 px-6 py-3">
      <p className="mb-2 text-xs font-bold uppercase tracking-wide text-yellow-700">
        Pending Admin Requests ({pendingRequests.length})
      </p>
      <div className="space-y-2">
        {pendingRequests.map((req) => (
          <div key={req.id} className="flex items-center justify-between rounded-xl border-[2px] border-[var(--border-light)] bg-white/80 px-3 py-2">
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
                className="rounded-full border-[2px] border-green-700 bg-green-600 px-2.5 py-1 text-xs font-bold text-white transition-all hover:opacity-90 shadow-[2px_2px_0px_theme(colors.green.700)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_theme(colors.green.700)]"
              >
                Approve
              </button>
              <button
                type="button"
                onClick={() => handleReject(req.id)}
                className="rounded-full border-[2px] border-[var(--navy)] px-2.5 py-1 text-xs font-bold text-[var(--text-secondary)] transition-all hover:bg-[var(--background)] shadow-[2px_2px_0px_var(--navy)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_var(--navy)]"
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
  const addRemovedEmail = useOwnershipStore((s) => s.addRemovedEmail);
  const clearTransferOtp = useOwnershipStore((s) => s.clearTransferOtp);

  const pendingRequests = useMemo(
    () => promotionRequests.filter((r) => r.status === 'pending'),
    [promotionRequests]
  );

  const allRequests = useRequestStore((s) => s.requests);

  const [showTransferModal, setShowTransferModal] = useState(false);
  const [removalTarget, setRemovalTarget] = useState<{ id: string; name: string; email: string } | null>(null);
  const [removalOtp, setRemovalOtp] = useState<string | null>(null);
  const [pendingDemotion, setPendingDemotion] = useState<{
    memberId: string;
    memberName: string;
    fromRole: AppRole;
    toRole: AppRole;
  } | null>(null);

  const ownerCount = useMemo(() => members.filter((m) => m.role === 'owner').length, [members]);

  const isOwner = currentUser?.role === 'owner';
  const isAdmin = currentUser?.role === 'admin';
  const canManageRoles = isOwner || isAdmin;

  const handleRoleChange = useCallback(
    (memberId: string, memberName: string, newRole: AppRole, currentRole: AppRole) => {
      if (!currentUser) return;

      // If an admin tries to promote someone to admin, create a request instead
      if (isAdmin && newRole === 'admin') {
        return;
      }

      // If trying to make someone owner, only owners can do that
      if (newRole === 'owner' && !isOwner) return;

      // Prevent demoting an owner if you're not an owner
      if (currentRole === 'owner' && !isOwner) return;

      // Prevent demoting an admin if you're not an owner
      if (currentRole === 'admin' && !isOwner) return;

      // Show confirmation for any role change that involves an editor or admin
      const isSignificantChange =
        (currentRole === 'editor' && newRole !== 'editor') ||
        (currentRole === 'admin' && newRole !== 'admin') ||
        (newRole === 'admin' && currentRole !== 'admin');

      if (isSignificantChange) {
        setPendingDemotion({ memberId, memberName, fromRole: currentRole, toRole: newRole });
        return;
      }

      updateRole(memberId, newRole);
    },
    [currentUser, isOwner, isAdmin, updateRole]
  );

  const handleConfirmDemotion = useCallback(() => {
    if (!pendingDemotion) return;

    // If promoting editor→admin, preserve their metrics data
    const preserveMetrics = pendingDemotion.fromRole === 'editor' && pendingDemotion.toRole === 'admin';

    updateRole(pendingDemotion.memberId, pendingDemotion.toRole, preserveMetrics);
    setPendingDemotion(null);
  }, [pendingDemotion, updateRole]);

  const demotionTaskCount = useMemo(() => {
    if (!pendingDemotion) return 0;
    return allRequests.filter((r) => r.assigneeId === pendingDemotion.memberId).length;
  }, [pendingDemotion, allRequests]);

  const handleRequestAdminPromotion = useCallback(
    (targetId: string, targetName: string) => {
      if (!currentUser) return;

      // Check if there's already a pending request for this user
      const hasPending = pendingRequests.some((r) => r.targetUserId === targetId);
      if (hasPending) return;

      createPromotionRequest({
        id: crypto.randomUUID(),
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

  const updateAuthRole = useAuthStore((s) => s.updateRole);

  const handleTransferOwnership = useCallback(
    (targetId: string) => {
      if (!currentUser || !isOwner) return;
      updateRole(targetId, 'owner');
      updateRole(currentUser.id, 'admin');
      updateAuthRole('admin');
      clearTransferOtp();
      setShowTransferModal(false);
    },
    [currentUser, isOwner, updateRole, updateAuthRole, clearTransferOtp]
  );

  const handleInitiateRemoval = useCallback(
    async (memberId: string, memberName: string, memberEmail: string) => {
      if (!currentUser) return;

      // Generate OTP for re-registration and show confirmation
      const otp = await addRemovedEmail(memberEmail, currentUser.id, currentUser.name);
      setRemovalOtp(otp);
      setRemovalTarget({ id: memberId, name: memberName, email: memberEmail });
    },
    [currentUser, addRemovedEmail]
  );

  const handleConfirmRemoval = useCallback(async () => {
    if (!removalTarget) return;

    // Remove from team (email is already blocked via addRemovedEmail)
    await removeMember(removalTarget.id);

    setRemovalTarget(null);
    setRemovalOtp(null);
  }, [removalTarget, removeMember]);

  const handleCancelRemoval = useCallback(() => {
    setRemovalTarget(null);
    setRemovalOtp(null);
  }, []);

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
          border-l-[2.5px] border-[var(--navy)] bg-[var(--surface)]
          shadow-[-8px_0px_0px_var(--navy)]
          overflow-y-auto
        "
        role="dialog"
        aria-label="Team members"
      >
        {/* Header */}
        <div className="sticky top-0 z-10 border-b-[2.5px] border-[var(--navy)] bg-[var(--surface)]">
          <div className="flex items-center justify-between px-6 py-4">
            <div>
              <h2 className="text-lg font-extrabold text-[var(--text-primary)]">Team Members</h2>
              <p className="text-xs text-[var(--text-tertiary)]">{members.length} members</p>
            </div>
            <div className="flex items-center gap-2">
              {/* Transfer Ownership — owners only */}
              {isOwner && (
                <button
                  type="button"
                  onClick={() => setShowTransferModal(true)}
                  className="rounded-full border-[2px] border-purple-400 bg-purple-50 px-3 py-1.5 text-xs font-bold text-purple-700 transition-all hover:bg-purple-100 shadow-[2px_2px_0px_theme(colors.purple.400)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_theme(colors.purple.400)]"
                >
                  Transfer Ownership
                </button>
              )}
              <button
                type="button"
                onClick={onClose}
                className="flex h-8 w-8 items-center justify-center rounded-full border-[2px] border-[var(--border-light)] text-[var(--text-tertiary)] transition-all hover:bg-[var(--surface-active)] hover:text-[var(--text-primary)]"
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
        <div className="divide-y-[2px] divide-[var(--border-light)]">
          {members.map((member) => {
            const isSelf = member.id === currentUser.id;
            const memberIsOwner = member.role === 'owner';
            const memberIsAdmin = member.role === 'admin';

            // Can the current user change this member's role?
            const canChangeRole =
              !isSelf &&
              canManageRoles &&
              // Admins cannot change owners or other admins without OTP
              !(isAdmin && memberIsOwner);

            // Can the current user remove this member? (Owner can remove anyone except other owners)
            const canRemove =
              !isSelf &&
              !memberIsOwner &&
              // Only owners can remove — admins cannot remove anyone
              isOwner;

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
                        border-[2px] border-[var(--border-light)] bg-[var(--surface)]
                        rounded-xl px-2 py-1 text-xs font-bold text-[var(--text-primary)]
                        outline-none transition-all
                        hover:border-[var(--navy)]
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
                      className="rounded-full border-[2px] border-blue-300 bg-blue-50 px-2 py-1 text-[10px] font-bold text-blue-700 transition-all hover:bg-blue-100"
                      aria-label={`Request admin promotion for ${member.name}`}
                    >
                      Request Admin
                    </button>
                  )}

                  {/* Remove button — owner only, no OTP needed */}
                  {canRemove && (
                    <button
                      type="button"
                      onClick={() => handleInitiateRemoval(member.id, member.name, member.email)}
                      className="flex h-7 w-7 items-center justify-center rounded-full border-[2px] border-[var(--border-light)] text-[var(--text-tertiary)] transition-all hover:border-[var(--error)] hover:bg-[var(--error-light)] hover:text-[var(--error)]"
                      aria-label={`Remove ${member.name}`}
                    >
                      <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
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
          currentUserId={currentUser.id}
        />
      )}

      {/* Role Change Confirmation Modal */}
      {pendingDemotion && (
        <RoleDemotionConfirmModal
          memberName={pendingDemotion.memberName}
          fromRole={pendingDemotion.fromRole}
          toRole={pendingDemotion.toRole}
          assignedTaskCount={demotionTaskCount}
          onConfirm={handleConfirmDemotion}
          onCancel={() => setPendingDemotion(null)}
        />
      )}

      {/* Removal Confirmation Modal */}
      {removalTarget && (
        <RemovalConfirmModal
          memberName={removalTarget.name}
          memberEmail={removalTarget.email}
          displayOtp={removalOtp}
          onConfirm={handleConfirmRemoval}
          onCancel={handleCancelRemoval}
        />
      )}
    </>
  );
};
