'use client';

import { useState } from 'react';
import type { CreativeRequest, ReEditEntry, ReEditRequest } from '@/types';
import { PRIORITY_CONFIG, REQUEST_TYPE_ICONS, REQUEST_STATUS_LABELS, REQUEST_STATUS_ORDER } from '@/types';
import { Modal } from '@/components/ui/modal';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useRequestStore } from '@/stores/request-store';
import { useTeamStore } from '@/stores/team-store';
import { useAuthStore } from '@/stores/auth-store';

interface RequestDetailModalProps {
  request: CreativeRequest | null;
  open: boolean;
  onClose: () => void;
  onNavigateToNote?: (noteId: string) => void;
}

const formatDate = (dateStr: string): string => {
  return new Date(dateStr).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
};

export const RequestDetailModal = ({ request: requestProp, open, onClose, onNavigateToNote }: RequestDetailModalProps) => {
  const user = useAuthStore((s) => s.user);
  const requests = useRequestStore((s) => s.requests);
  const moveForward = useRequestStore((s) => s.moveForward);
  const moveBackward = useRequestStore((s) => s.moveBackward);
  const assignRequest = useRequestStore((s) => s.assignRequest);
  const updateRequest = useRequestStore((s) => s.updateRequest);
  const addComment = useRequestStore((s) => s.addComment);
  const deleteRequest = useRequestStore((s) => s.deleteRequest);
  const requestReEditAction = useRequestStore((s) => s.requestReEdit);
  const approveReEditRequest = useRequestStore((s) => s.approveReEditRequest);
  const rejectReEditRequest = useRequestStore((s) => s.rejectReEditRequest);
  const members = useTeamStore((s) => s.members);
  const recordTaskAssignment = useTeamStore((s) => s.recordTaskAssignment);

  // Assignable members: editors + admins + owners (admins can self-assign, owners can assign to admins)
  const assignableIds = new Set(
    members.filter((m) => m.role === 'editor' || m.role === 'admin' || m.role === 'owner').map((m) => m.id)
  );
  const initialAssignee = requestProp?.assigneeId && assignableIds.has(requestProp.assigneeId)
    ? requestProp.assigneeId
    : '';
  const [selectedAssignee, setSelectedAssignee] = useState(initialAssignee);
  const [newComment, setNewComment] = useState('');
  const [finalLinkInput, setFinalLinkInput] = useState('');
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [deleteReason, setDeleteReason] = useState('');
  const [showReEditPopup, setShowReEditPopup] = useState(false);
  const [reEditDeadline, setReEditDeadline] = useState('');
  const [reEditComment, setReEditComment] = useState('');
  const [showRequestReEdit, setShowRequestReEdit] = useState(false);
  const [reqReEditDate, setReqReEditDate] = useState('');
  const [reqReEditComment, setReqReEditComment] = useState('');
  const [approveReEditId, setApproveReEditId] = useState<string | null>(null);
  const [approveDeadline, setApproveDeadline] = useState('');
  const [approveComment, setApproveComment] = useState('');

  // Always read the latest version from the store so updates (assign, etc.) reflect immediately
  const request = requestProp ? requests.find((r) => r.id === requestProp.id) ?? requestProp : null;

  if (!request || !user) {
    return <Modal open={false} onClose={onClose}><div /></Modal>;
  }

  const priorityCfg = PRIORITY_CONFIG[request.priority];
  const typeIcon = REQUEST_TYPE_ICONS[request.type];
  const isAdminOrOwner = user.role === 'admin' || user.role === 'owner';
  // Editors + admins + owners can be assigned tasks
  const editors = members.filter((m) => m.role === 'editor');
  const assignableMembers = members.filter(
    (m) => m.role === 'editor' || m.role === 'admin' || m.role === 'owner'
  );

  const canMoveForward =
    request.status !== 'closed' &&
    request.status !== 'deleted' &&
    (isAdminOrOwner || request.assigneeId === user.id);

  const canAssign = isAdminOrOwner;
  const canDelete = isAdminOrOwner;
  const canEditFinalLink =
    isAdminOrOwner || (user.role === 'editor' && request.assigneeId === user.id);

  const nextStatus = (() => {
    const idx = REQUEST_STATUS_ORDER.indexOf(request.status);
    return idx < REQUEST_STATUS_ORDER.length - 1 ? REQUEST_STATUS_ORDER[idx + 1] : null;
  })();

  const prevStatus = (() => {
    const idx = REQUEST_STATUS_ORDER.indexOf(request.status);
    return idx > 0 ? REQUEST_STATUS_ORDER[idx - 1] : null;
  })();

  // Only admins can move backward
  const canMoveBackward =
    isAdminOrOwner &&
    request.status !== 'open' &&
    request.status !== 'deleted' &&
    prevStatus !== null;

  // Popup needed when moving back from review/closed AND not already in a re-edit cycle
  const needsReEditPopup =
    (request.status === 'review' || request.status === 'closed') && !request.isInReEdit;

  const handleMoveForward = () => {
    moveForward(request.id);
    onClose();
  };

  const handleMoveBackward = () => {
    if (needsReEditPopup) {
      setShowReEditPopup(true);
      return;
    }
    moveBackward(request.id);
    onClose();
  };

  const handleReEditConfirm = () => {
    if (!reEditDeadline) return;
    const reEdit: ReEditEntry = {
      id: crypto.randomUUID(),
      deadline: reEditDeadline,
      comment: reEditComment.trim() || null,
      submittedAt: null,
      createdAt: new Date().toISOString(),
      createdById: user.id,
      createdByName: user.name,
    };
    moveBackward(request.id, reEdit);
    setShowReEditPopup(false);
    setReEditDeadline('');
    setReEditComment('');
    onClose();
  };

  const handleAssign = () => {
    if (!selectedAssignee) return;
    const member = members.find((m) => m.id === selectedAssignee);
    if (member) {
      assignRequest(request.id, member.id, member.name);
      recordTaskAssignment(member.id);
    }
  };

  const handleAddComment = () => {
    if (!newComment.trim()) return;
    addComment(request.id, {
      id: crypto.randomUUID(),
      authorId: user.id,
      authorName: user.name,
      content: newComment.trim(),
      createdAt: new Date().toISOString(),
    });
    setNewComment('');
  };

  const handleSaveFinalLink = () => {
    const link = finalLinkInput.trim();
    updateRequest(request.id, { finalLink: link || null });
    setFinalLinkInput('');
  };

  const handleDeleteConfirm = () => {
    if (!deleteReason.trim()) return;
    deleteRequest(request.id, user.id, user.name, deleteReason.trim());
    setShowDeleteConfirm(false);
    setDeleteReason('');
    onClose();
  };

  // Requester (non-admin) can request a re-edit when task is in review or closed
  const canRequestReEdit =
    !isAdminOrOwner &&
    request.requesterId === user.id &&
    (request.status === 'review' || request.status === 'closed') &&
    // No pending request already
    !request.reEditRequests.some((r) => r.status === 'pending');

  const handleRequestReEdit = () => {
    if (!reqReEditDate) return;
    const reEditReq: ReEditRequest = {
      id: crypto.randomUUID(),
      requestedById: user.id,
      requestedByName: user.name,
      requestedDate: reqReEditDate,
      comment: reqReEditComment.trim() || null,
      status: 'pending',
      createdAt: new Date().toISOString(),
    };
    requestReEditAction(request.id, reEditReq);
    setShowRequestReEdit(false);
    setReqReEditDate('');
    setReqReEditComment('');
  };

  const pendingReEditRequests = request.reEditRequests.filter((r) => r.status === 'pending');

  const handleApproveReEditRequest = () => {
    if (!approveReEditId || !approveDeadline) return;
    const reEdit: ReEditEntry = {
      id: crypto.randomUUID(),
      deadline: approveDeadline,
      comment: approveComment.trim() || null,
      submittedAt: null,
      createdAt: new Date().toISOString(),
      createdById: user.id,
      createdByName: user.name,
    };
    approveReEditRequest(request.id, approveReEditId, reEdit);
    setApproveReEditId(null);
    setApproveDeadline('');
    setApproveComment('');
  };

  const handleRejectReEditRequest = (reqId: string) => {
    rejectReEditRequest(request.id, reqId);
  };

  return (
    <Modal open={open} onClose={onClose} maxWidth="lg">
      <div className="max-h-[70vh] overflow-y-auto pr-2">
        {/* Title */}
        <div className="mb-4 flex items-start gap-2">
          <span className="mt-0.5 text-lg">{typeIcon}</span>
          <h2 className="text-lg font-bold text-[var(--text-primary)]">{request.title}</h2>
        </div>

        {/* Badges */}
        <div className="mb-5 flex flex-wrap gap-2">
          <Badge color={priorityCfg.color} variant={request.priority === 'urgent' ? 'filled' : 'default'}>
            {priorityCfg.label}
          </Badge>
          <Badge color="default" variant="outline">
            {request.type}
          </Badge>
          <Badge
            color={request.status === 'deleted' ? 'red' : request.status === 'closed' ? 'green' : request.status === 'review' ? 'yellow' : 'blue'}
            variant={request.status === 'deleted' ? 'filled' : 'default'}
          >
            {REQUEST_STATUS_LABELS[request.status]}
          </Badge>
        </div>

        {/* Description */}
        <div className="mb-5">
          <h3 className="mb-1 text-sm font-bold text-[var(--text-primary)]">Description</h3>
          <p className="text-sm text-[var(--text-secondary)]">{request.description || 'No description'}</p>
        </div>

        {/* Info Grid */}
        <div className="mb-5 grid grid-cols-2 gap-4">
          <div>
            <span className="text-xs font-bold text-[var(--text-tertiary)]">Requester</span>
            <p className="text-sm font-medium text-[var(--text-primary)]">{request.requesterName}</p>
            <p className="text-xs text-[var(--text-secondary)]">{request.requesterEmail}</p>
          </div>
          {request.teamLeadName && (
            <div>
              <span className="text-xs font-bold text-[var(--text-tertiary)]">Team Lead</span>
              <p className="text-sm font-medium text-[var(--text-primary)]">{request.teamLeadName}</p>
              {request.teamLeadEmail && (
                <p className="text-xs text-[var(--text-secondary)]">{request.teamLeadEmail}</p>
              )}
            </div>
          )}
          <div>
            <span className="text-xs font-bold text-[var(--text-tertiary)]">Created</span>
            <p className="text-sm text-[var(--text-primary)]">{formatDate(request.createdAt)}</p>
          </div>
          {request.assigneeName && (
            <div>
              <span className="text-xs font-bold text-[var(--text-tertiary)]">Assigned to</span>
              <p className="text-sm font-medium text-[var(--text-primary)]">{request.assigneeName}</p>
            </div>
          )}
        </div>

        {/* Reference Links */}
        {request.referenceLinks.length > 0 && (
          <div className="mb-5">
            <h3 className="mb-2 flex items-center gap-1.5 text-sm font-bold text-[var(--text-primary)]">
              <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
              Reference Links
            </h3>
            <div className="space-y-1.5">
              {request.referenceLinks.map((link, i) => (
                <a
                  key={i}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block truncate text-sm text-[var(--primary)] transition-colors hover:text-[var(--primary-hover)]"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Attached Script */}
        {request.scriptNoteId && (
          <div className="mb-5">
            <h3 className="mb-2 flex items-center gap-1.5 text-sm font-bold text-[var(--text-primary)]">
              <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              Attached Script
            </h3>
            <button
              onClick={() => {
                if (onNavigateToNote && request.scriptNoteId) {
                  onNavigateToNote(request.scriptNoteId);
                  onClose();
                }
              }}
              className="inline-flex items-center gap-2 rounded-full border-[2.5px] border-[var(--navy)] bg-[var(--primary-light)] px-4 py-2 text-sm font-bold text-[var(--primary)] shadow-[2px_2px_0px_var(--navy)] transition-all hover:shadow-[3px_3px_0px_var(--navy)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_var(--navy)]"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              View Script in Notes
            </button>
          </div>
        )}

        {/* Final Link — display + edit */}
        <div className="mb-5">
          <h3 className="mb-2 flex items-center gap-1.5 text-sm font-bold text-[var(--text-primary)]">
            <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Final Link
          </h3>
          {request.finalLink ? (
            <div className="flex items-center gap-2">
              <a
                href={request.finalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block truncate text-sm text-[var(--primary)] transition-colors hover:text-[var(--primary-hover)]"
              >
                {request.finalLink}
              </a>
              {canEditFinalLink && (
                <button
                  type="button"
                  onClick={() => {
                    setFinalLinkInput(request.finalLink || '');
                    updateRequest(request.id, { finalLink: null });
                  }}
                  className="shrink-0 text-xs text-[var(--text-tertiary)] hover:text-[var(--error)] transition-colors"
                  aria-label="Remove final link"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                </button>
              )}
            </div>
          ) : canEditFinalLink ? (
            <div className="flex gap-2">
              <div className="flex-1">
                <Input
                  placeholder="Paste the final deliverable link..."
                  value={finalLinkInput}
                  onChange={(e) => setFinalLinkInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSaveFinalLink()}
                />
              </div>
              <Button size="sm" variant="secondary" onClick={handleSaveFinalLink} disabled={!finalLinkInput.trim()}>
                Save
              </Button>
            </div>
          ) : (
            <p className="text-sm text-[var(--text-tertiary)]">Not added yet</p>
          )}
        </div>

        <div className="my-4 border-t-[2px] border-[var(--border-light)]" />

        {/* Assign To — Admin only */}
        {canAssign && request.status !== 'closed' && (
          <div className="mb-5">
            <h3 className="mb-2 text-sm font-bold text-[var(--text-primary)]">Assign To</h3>
            <div className="flex gap-2">
              <select
                value={selectedAssignee}
                onChange={(e) => setSelectedAssignee(e.target.value)}
                className="
                  flex-1 border-[2px] border-[var(--border-light)] bg-[var(--surface)]
                  rounded-xl px-3 py-2 text-sm text-[var(--text-primary)]
                  outline-none transition-all duration-[var(--transition-fast)]
                  hover:border-[var(--navy)]
                  focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/10
"
              >
                <option value="">Unassigned</option>
                {assignableMembers.map((m) => (
                  <option key={m.id} value={m.id}>
                    {m.name}{m.role !== 'editor' ? ` (${m.role})` : ''}
                  </option>
                ))}
              </select>
              <Button size="sm" variant="secondary" onClick={handleAssign} disabled={!selectedAssignee}>
                Assign
              </Button>
            </div>
          </div>
        )}

        {/* Move Forward / Backward */}
        {(canMoveForward || canMoveBackward) && (
          <div className="mb-5 flex flex-wrap items-center gap-3">
            {canMoveBackward && prevStatus && (
              <div className="flex items-center">
                <Button variant="secondary" onClick={handleMoveBackward}>
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                  </svg>
                  Move Backward
                </Button>
                <span className="ml-2 text-xs text-[var(--text-tertiary)]">
                  to {REQUEST_STATUS_LABELS[prevStatus]}
                </span>
              </div>
            )}
            {canMoveForward && nextStatus && (
              <div className="flex items-center">
                <Button onClick={handleMoveForward}>
                  Move Forward
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Button>
                <span className="ml-2 text-xs text-[var(--text-tertiary)]">
                  to {REQUEST_STATUS_LABELS[nextStatus]}
                </span>
              </div>
            )}
          </div>
        )}

        {/* Request Re-Edit — non-admin requester */}
        {canRequestReEdit && !showRequestReEdit && (
          <div className="mb-5">
            <Button
              variant="secondary"
              size="sm"
              onClick={() => setShowRequestReEdit(true)}
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Request Re-Edit
            </Button>
          </div>
        )}

        {showRequestReEdit && (
          <div className="mb-5 rounded-2xl border-[2px] border-blue-300 bg-blue-50 p-4">
            <h3 className="mb-2 text-sm font-bold text-blue-800">Request Re-Edit</h3>
            <p className="mb-3 text-xs text-blue-700">
              Submit a re-edit request for admin approval. The admin will set the final deadline for the editor.
            </p>
            <div className="mb-3">
              <label className="mb-1 block text-xs font-bold text-blue-800">
                Suggested Deadline <span className="text-red-500">*</span>
              </label>
              <Input
                type="date"
                value={reqReEditDate}
                onChange={(e) => setReqReEditDate(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="mb-1 block text-xs font-bold text-blue-800">
                Comment <span className="text-xs font-normal text-blue-600">(optional)</span>
              </label>
              <textarea
                value={reqReEditComment}
                onChange={(e) => setReqReEditComment(e.target.value)}
                placeholder="What changes are needed..."
                rows={3}
                className="
                  w-full border-[2px] border-blue-200 bg-white
                  rounded-xl px-3 py-2 text-sm text-[var(--text-primary)]
                  placeholder-[var(--text-tertiary)] outline-none transition-all
                  focus:border-blue-400 focus:ring-2 focus:ring-blue-100
                "
              />
            </div>
            <div className="flex gap-2">
              <Button size="sm" onClick={handleRequestReEdit} disabled={!reqReEditDate}>
                Submit Request
              </Button>
              <Button
                variant="secondary"
                size="sm"
                onClick={() => {
                  setShowRequestReEdit(false);
                  setReqReEditDate('');
                  setReqReEditComment('');
                }}
              >
                Cancel
              </Button>
            </div>
          </div>
        )}

        {/* Pending Re-Edit Requests — visible to requester (read-only) and admin (actionable) */}
        {request.reEditRequests.length > 0 && (
          <div className="mb-5">
            <h3 className="mb-2 text-sm font-bold text-[var(--text-primary)]">
              Re-Edit Requests ({request.reEditRequests.length})
            </h3>
            <div className="space-y-2">
              {request.reEditRequests.map((req) => (
                <div
                  key={req.id}
                  className={`rounded-xl border-[2px] p-3 ${
                    req.status === 'pending'
                      ? 'border-blue-200 bg-blue-50/50'
                      : req.status === 'approved'
                        ? 'border-green-200 bg-green-50/50'
                        : 'border-red-200 bg-red-50/50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-medium text-[var(--text-primary)]">
                      {req.requestedByName}
                    </span>
                    <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${
                      req.status === 'pending'
                        ? 'bg-blue-100 text-blue-700'
                        : req.status === 'approved'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-red-100 text-red-700'
                    }`}>
                      {req.status.charAt(0).toUpperCase() + req.status.slice(1)}
                    </span>
                  </div>
                  <div className="flex gap-4 text-xs mb-1">
                    <div>
                      <span className="text-[var(--text-tertiary)]">Suggested date: </span>
                      <span className="font-medium text-[var(--text-primary)]">{formatDate(req.requestedDate)}</span>
                    </div>
                    <div>
                      <span className="text-[var(--text-tertiary)]">Requested: </span>
                      <span className="text-[var(--text-secondary)]">{formatDate(req.createdAt)}</span>
                    </div>
                  </div>
                  {req.comment && (
                    <p className="text-xs text-[var(--text-secondary)] italic mb-2">&ldquo;{req.comment}&rdquo;</p>
                  )}

                  {/* Admin actions for pending requests */}
                  {isAdminOrOwner && req.status === 'pending' && approveReEditId !== req.id && (
                    <div className="flex gap-2 mt-2">
                      <Button
                        size="sm"
                        onClick={() => {
                          setApproveReEditId(req.id);
                          setApproveDeadline(req.requestedDate);
                          setApproveComment('');
                        }}
                      >
                        Approve & Set Deadline
                      </Button>
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => handleRejectReEditRequest(req.id)}
                      >
                        Reject
                      </Button>
                    </div>
                  )}

                  {/* Admin approval form */}
                  {isAdminOrOwner && approveReEditId === req.id && (
                    <div className="mt-3 rounded-xl border-[2px] border-amber-200 bg-amber-50 p-3">
                      <p className="mb-2 text-xs font-bold text-amber-800">
                        Set the actual re-edit deadline for the editor:
                      </p>
                      <div className="mb-2">
                        <label className="mb-1 block text-xs font-bold text-amber-800">
                          Re-Edit Deadline <span className="text-red-500">*</span>
                        </label>
                        <Input
                          type="date"
                          value={approveDeadline}
                          onChange={(e) => setApproveDeadline(e.target.value)}
                        />
                      </div>
                      <div className="mb-2">
                        <label className="mb-1 block text-xs font-bold text-amber-800">
                          Comment for editor <span className="text-xs font-normal text-amber-600">(optional)</span>
                        </label>
                        <textarea
                          value={approveComment}
                          onChange={(e) => setApproveComment(e.target.value)}
                          placeholder="Instructions for the editor..."
                          rows={2}
                          className="
                            w-full border border-amber-200 bg-white
                            rounded-[var(--radius-md)] px-3 py-2 text-sm text-[var(--text-primary)]
                            placeholder-[var(--text-tertiary)] outline-none transition-all
                            focus:border-amber-400 focus:ring-2 focus:ring-amber-100
                          "
                        />
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" onClick={handleApproveReEditRequest} disabled={!approveDeadline}>
                          Confirm
                        </Button>
                        <Button
                          variant="secondary"
                          size="sm"
                          onClick={() => {
                            setApproveReEditId(null);
                            setApproveDeadline('');
                            setApproveComment('');
                          }}
                        >
                          Cancel
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Re-Edit Popup (admin move backward) */}
        {showReEditPopup && (
          <div className="mb-5 rounded-2xl border-[2px] border-amber-300 bg-amber-50 p-4">
            <h3 className="mb-2 text-sm font-bold text-amber-800">Re-Edit Required</h3>
            <p className="mb-3 text-xs text-amber-700">
              Moving this task backward from {REQUEST_STATUS_LABELS[request.status]} requires a new re-edit submission deadline.
            </p>
            <div className="mb-3">
              <label className="mb-1 block text-xs font-bold text-amber-800">
                Re-Edit Deadline <span className="text-red-500">*</span>
              </label>
              <Input
                type="date"
                value={reEditDeadline}
                onChange={(e) => setReEditDeadline(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="mb-1 block text-xs font-bold text-amber-800">
                Comment <span className="text-xs font-normal text-amber-600">(optional)</span>
              </label>
              <textarea
                value={reEditComment}
                onChange={(e) => setReEditComment(e.target.value)}
                placeholder="Reason for re-edit or instructions for the editor..."
                rows={3}
                className="
                  w-full border-[2px] border-amber-200 bg-white
                  rounded-xl px-3 py-2 text-sm text-[var(--text-primary)]
                  placeholder-[var(--text-tertiary)] outline-none transition-all
                  focus:border-amber-400 focus:ring-2 focus:ring-amber-100
                "
              />
            </div>
            <div className="flex gap-2">
              <Button
                size="sm"
                onClick={handleReEditConfirm}
                disabled={!reEditDeadline}
              >
                Confirm Re-Edit
              </Button>
              <Button
                variant="secondary"
                size="sm"
                onClick={() => {
                  setShowReEditPopup(false);
                  setReEditDeadline('');
                  setReEditComment('');
                }}
              >
                Cancel
              </Button>
            </div>
          </div>
        )}

        {/* Deletion Info — shown for deleted requests */}
        {request.status === 'deleted' && (
          <div className="mb-5 rounded-2xl border-[2px] border-red-300 bg-red-50 p-4">
            <h3 className="mb-1 text-sm font-bold text-red-700">This request has been deleted</h3>
            <p className="text-sm text-red-600">
              <span className="font-medium">By:</span> {request.deletedByName}
            </p>
            {request.deletedAt && (
              <p className="text-sm text-red-600">
                <span className="font-medium">On:</span> {formatDate(request.deletedAt)}
              </p>
            )}
            {request.deletionReason && (
              <p className="mt-1 text-sm text-red-600">
                <span className="font-medium">Reason:</span> {request.deletionReason}
              </p>
            )}
          </div>
        )}

        {/* Delete — Admin only */}
        {canDelete && request.status !== 'deleted' && (
          <div className="mb-5">
            {!showDeleteConfirm ? (
              <Button variant="danger" size="sm" onClick={() => setShowDeleteConfirm(true)}>
                Delete Request
              </Button>
            ) : (
              <div className="rounded-2xl border-[2px] border-red-300 bg-red-50 p-4">
                <h3 className="mb-2 text-sm font-bold text-red-700">Confirm Deletion</h3>
                <p className="mb-3 text-xs text-red-600">
                  This request will be marked as deleted. Please provide a reason.
                </p>
                <textarea
                  value={deleteReason}
                  onChange={(e) => setDeleteReason(e.target.value)}
                  placeholder="Reason for deletion..."
                  rows={3}
                  className="
                    mb-3 w-full border-[2px] border-red-200 bg-white
                    rounded-xl px-3 py-2 text-sm text-[var(--text-primary)]
                    placeholder-[var(--text-tertiary)] outline-none transition-all
                    focus:border-red-400 focus:ring-2 focus:ring-red-100
                  "
                />
                <div className="flex gap-2">
                  <Button variant="danger" size="sm" onClick={handleDeleteConfirm} disabled={!deleteReason.trim()}>
                    Confirm Delete
                  </Button>
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => {
                      setShowDeleteConfirm(false);
                      setDeleteReason('');
                    }}
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Re-Edit History */}
        {request.reEdits.length > 0 && (
          <>
            <div className="my-4 border-t-[2px] border-[var(--border-light)]" />
            <div className="mb-5">
              <h3 className="mb-3 flex items-center gap-1.5 text-sm font-bold text-[var(--text-primary)]">
                <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Re-Edit History ({request.reEdits.length})
              </h3>
              <div className="space-y-2">
                {request.reEdits.map((re, i) => (
                  <div key={re.id} className="rounded-xl border-[2px] border-amber-200 bg-amber-50/50 p-3">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-amber-800">Re-Edit #{i + 1}</span>
                      <span className="text-xs text-[var(--text-tertiary)]">{formatDate(re.createdAt)}</span>
                    </div>
                    <div className="flex gap-4 text-xs">
                      <div>
                        <span className="text-[var(--text-tertiary)]">Deadline: </span>
                        <span className="font-medium text-[var(--text-primary)]">{formatDate(re.deadline)}</span>
                      </div>
                      <div>
                        <span className="text-[var(--text-tertiary)]">Submitted: </span>
                        <span className={`font-medium ${re.submittedAt ? 'text-green-600' : 'text-amber-600'}`}>
                          {re.submittedAt ? formatDate(re.submittedAt) : 'Pending'}
                        </span>
                      </div>
                    </div>
                    {re.comment && (
                      <p className="mt-1.5 text-xs text-[var(--text-secondary)] italic">&ldquo;{re.comment}&rdquo;</p>
                    )}
                    <p className="mt-1 text-xs text-[var(--text-tertiary)]">By {re.createdByName}</p>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        <div className="my-4 border-t-[2px] border-[var(--border-light)]" />

        {/* Comments */}
        <div>
          <h3 className="mb-3 flex items-center gap-1.5 text-sm font-bold text-[var(--text-primary)]">
            <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            Comments ({request.comments.length})
          </h3>

          {request.comments.length > 0 && (
            <div className="mb-4 space-y-3">
              {request.comments.map((c) => (
                <div key={c.id} className="rounded-xl border-[2px] border-[var(--border-light)] bg-[var(--surface-secondary)] p-3">
                  <div className="mb-1 flex items-center justify-between">
                    <span className="text-xs font-medium text-[var(--text-primary)]">{c.authorName}</span>
                    <span className="text-xs text-[var(--text-tertiary)]">{formatDate(c.createdAt)}</span>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)]">{c.content}</p>
                </div>
              ))}
            </div>
          )}

          {/* Add Comment */}
          <div className="flex gap-2">
            <input
              type="text"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleAddComment()}
              placeholder="Add a comment..."
              className="
                flex-1 border-[2px] border-[var(--border-light)] bg-[var(--surface)]
                rounded-xl px-3 py-2 text-sm text-[var(--text-primary)]
                placeholder-[var(--text-tertiary)] outline-none transition-all
                hover:border-[var(--navy)]
                focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/10
              "
            />
            <Button size="sm" variant="secondary" onClick={handleAddComment} disabled={!newComment.trim()}>
              Send
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};
