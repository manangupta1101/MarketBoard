'use client';

import { useState } from 'react';
import type { CreativeRequest } from '@/types';
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
}

const formatDate = (dateStr: string): string => {
  return new Date(dateStr).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
};

export const RequestDetailModal = ({ request: requestProp, open, onClose }: RequestDetailModalProps) => {
  const user = useAuthStore((s) => s.user);
  const requests = useRequestStore((s) => s.requests);
  const moveForward = useRequestStore((s) => s.moveForward);
  const assignRequest = useRequestStore((s) => s.assignRequest);
  const updateRequest = useRequestStore((s) => s.updateRequest);
  const addComment = useRequestStore((s) => s.addComment);
  const deleteRequest = useRequestStore((s) => s.deleteRequest);
  const members = useTeamStore((s) => s.members);

  const [selectedAssignee, setSelectedAssignee] = useState('');
  const [newComment, setNewComment] = useState('');
  const [finalLinkInput, setFinalLinkInput] = useState('');
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [deleteReason, setDeleteReason] = useState('');

  // Always read the latest version from the store so updates (assign, etc.) reflect immediately
  const request = requestProp ? requests.find((r) => r.id === requestProp.id) ?? requestProp : null;

  if (!request || !user) return null;

  const priorityCfg = PRIORITY_CONFIG[request.priority];
  const typeIcon = REQUEST_TYPE_ICONS[request.type];
  const isAdminOrOwner = user.role === 'admin' || user.role === 'owner';
  const editors = members.filter((m) => m.role === 'editor' || m.role === 'admin' || m.role === 'owner');

  const canMoveForward =
    request.status !== 'closed' &&
    request.status !== 'deleted' &&
    (isAdminOrOwner || (user.role === 'editor' && request.assigneeId === user.id));

  const canAssign = isAdminOrOwner;
  const canDelete = isAdminOrOwner;
  const canEditFinalLink =
    isAdminOrOwner || (user.role === 'editor' && request.assigneeId === user.id);

  const nextStatus = (() => {
    const idx = REQUEST_STATUS_ORDER.indexOf(request.status);
    return idx < REQUEST_STATUS_ORDER.length - 1 ? REQUEST_STATUS_ORDER[idx + 1] : null;
  })();

  const handleMoveForward = () => {
    moveForward(request.id);
    onClose();
  };

  const handleAssign = () => {
    if (!selectedAssignee) return;
    const member = members.find((m) => m.id === selectedAssignee);
    if (member) {
      assignRequest(request.id, member.id, member.name);
      setSelectedAssignee('');
    }
  };

  const handleAddComment = () => {
    if (!newComment.trim()) return;
    addComment(request.id, {
      id: `comment_${Date.now()}`,
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

  return (
    <Modal open={open} onClose={onClose} maxWidth="lg">
      <div className="max-h-[70vh] overflow-y-auto pr-2">
        {/* Title */}
        <div className="mb-4 flex items-start gap-2">
          <span className="mt-0.5 text-lg">{typeIcon}</span>
          <h2 className="text-lg font-semibold text-[var(--text-primary)]">{request.title}</h2>
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
          <h3 className="mb-1 text-sm font-semibold text-[var(--text-primary)]">Description</h3>
          <p className="text-sm text-[var(--text-secondary)]">{request.description || 'No description'}</p>
        </div>

        {/* Info Grid */}
        <div className="mb-5 grid grid-cols-2 gap-4">
          <div>
            <span className="text-xs font-medium text-[var(--text-tertiary)]">Requester</span>
            <p className="text-sm font-medium text-[var(--text-primary)]">{request.requesterName}</p>
            <p className="text-xs text-[var(--text-secondary)]">{request.requesterEmail}</p>
          </div>
          {request.teamLeadName && (
            <div>
              <span className="text-xs font-medium text-[var(--text-tertiary)]">Team Lead</span>
              <p className="text-sm font-medium text-[var(--text-primary)]">{request.teamLeadName}</p>
              {request.teamLeadEmail && (
                <p className="text-xs text-[var(--text-secondary)]">{request.teamLeadEmail}</p>
              )}
            </div>
          )}
          <div>
            <span className="text-xs font-medium text-[var(--text-tertiary)]">Created</span>
            <p className="text-sm text-[var(--text-primary)]">{formatDate(request.createdAt)}</p>
          </div>
          {request.assigneeName && (
            <div>
              <span className="text-xs font-medium text-[var(--text-tertiary)]">Assigned to</span>
              <p className="text-sm font-medium text-[var(--text-primary)]">{request.assigneeName}</p>
            </div>
          )}
        </div>

        {/* Reference Links */}
        {request.referenceLinks.length > 0 && (
          <div className="mb-5">
            <h3 className="mb-2 flex items-center gap-1.5 text-sm font-semibold text-[var(--text-primary)]">
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

        {/* Final Link — display + edit */}
        <div className="mb-5">
          <h3 className="mb-2 flex items-center gap-1.5 text-sm font-semibold text-[var(--text-primary)]">
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

        <div className="my-4 border-t border-[var(--border)]" />

        {/* Assign To — Admin only */}
        {canAssign && request.status !== 'closed' && (
          <div className="mb-5">
            <h3 className="mb-2 text-sm font-semibold text-[var(--text-primary)]">Assign To</h3>
            <div className="flex gap-2">
              <select
                value={selectedAssignee}
                onChange={(e) => setSelectedAssignee(e.target.value)}
                className="
                  flex-1 border border-[var(--border)] bg-[var(--surface)]
                  rounded-[var(--radius-md)] px-3 py-2 text-sm text-[var(--text-primary)]
                  outline-none transition-all duration-[var(--transition-fast)]
                  hover:border-[var(--border-hover)]
                  focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/10
                "
              >
                <option value="">Unassigned</option>
                {editors.map((m) => (
                  <option key={m.id} value={m.id}>
                    {m.name}
                  </option>
                ))}
              </select>
              <Button size="sm" variant="secondary" onClick={handleAssign} disabled={!selectedAssignee}>
                Assign
              </Button>
            </div>
          </div>
        )}

        {/* Move Forward */}
        {canMoveForward && nextStatus && (
          <div className="mb-5">
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

        {/* Deletion Info — shown for deleted requests */}
        {request.status === 'deleted' && (
          <div className="mb-5 rounded-[var(--radius-md)] border border-red-200 bg-red-50 p-4">
            <h3 className="mb-1 text-sm font-semibold text-red-700">This request has been deleted</h3>
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
              <div className="rounded-[var(--radius-md)] border border-red-200 bg-red-50 p-4">
                <h3 className="mb-2 text-sm font-semibold text-red-700">Confirm Deletion</h3>
                <p className="mb-3 text-xs text-red-600">
                  This request will be marked as deleted. Please provide a reason.
                </p>
                <textarea
                  value={deleteReason}
                  onChange={(e) => setDeleteReason(e.target.value)}
                  placeholder="Reason for deletion..."
                  rows={3}
                  className="
                    mb-3 w-full border border-red-200 bg-white
                    rounded-[var(--radius-md)] px-3 py-2 text-sm text-[var(--text-primary)]
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

        <div className="my-4 border-t border-[var(--border)]" />

        {/* Comments */}
        <div>
          <h3 className="mb-3 flex items-center gap-1.5 text-sm font-semibold text-[var(--text-primary)]">
            <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            Comments ({request.comments.length})
          </h3>

          {request.comments.length > 0 && (
            <div className="mb-4 space-y-3">
              {request.comments.map((c) => (
                <div key={c.id} className="rounded-[var(--radius-md)] bg-[var(--surface-secondary)] p-3">
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
                flex-1 border border-[var(--border)] bg-[var(--surface)]
                rounded-[var(--radius-md)] px-3 py-2 text-sm text-[var(--text-primary)]
                placeholder-[var(--text-tertiary)] outline-none transition-all
                hover:border-[var(--border-hover)]
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
