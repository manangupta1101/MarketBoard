'use client';

import { useState, useMemo, useCallback } from 'react';
import type { ResourceCategory, Resource } from '@/types';
import { RESOURCE_CATEGORY_LABELS } from '@/types';
import { useResourceStore } from '@/stores/resource-store';
import { useAuthStore } from '@/stores/auth-store';
import { useOwnershipStore } from '@/stores/ownership-store';

// ============================================
// CONSTANTS
// ============================================

const RESOURCE_TABS: { value: ResourceCategory; label: string; icon: React.ReactNode }[] = [
  { value: 'important_links', label: 'Important Links', icon: <LinkIcon /> },
  { value: 'important_assets', label: 'Important Assets', icon: <ImageIcon /> },
  { value: 'credentials', label: 'Credentials', icon: <KeyIcon /> },
];

// ============================================
// ICONS
// ============================================

function LinkIcon() {
  return (
    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  );
}

function ImageIcon() {
  return (
    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <polyline points="21 15 16 10 5 21" />
    </svg>
  );
}

function KeyIcon() {
  return (
    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function TrashIcon() {
  return (
    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <polyline points="3 6 5 6 21 6" />
      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    </svg>
  );
}

function EditIcon() {
  return (
    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function EyeOffIcon() {
  return (
    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
      <line x1="1" y1="1" x2="23" y2="23" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function CopyIcon() {
  return (
    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

// ============================================
// CREDENTIALS GATE
// ============================================

interface CredentialsGateProps {
  onUnlock: () => void;
  isOwner: boolean;
  onChangePassword: () => void;
}

const CredentialsGate = ({ onUnlock, isOwner, onChangePassword }: CredentialsGateProps) => {
  const credentialsPassword = useOwnershipStore((s) => s.credentialsPassword);
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [shake, setShake] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === credentialsPassword) {
      onUnlock();
    } else {
      setError(true);
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center py-16">
      <div
        className={`w-full max-w-sm rounded-2xl border-[2.5px] border-[var(--navy)] bg-[var(--surface)] p-8 text-center shadow-[var(--shadow-md)] ${
          shake ? 'animate-[shake_0.5s_ease-in-out]' : ''
        }`}
      >
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--background)] text-[var(--text-tertiary)]">
          <LockIcon />
        </div>
        <h3 className="text-base font-semibold text-[var(--text-primary)]">
          Password Required
        </h3>
        <p className="mt-1 text-sm text-[var(--text-tertiary)]">
          Enter the access password to view credentials
        </p>
        <form onSubmit={handleSubmit} className="mt-5 space-y-3">
          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                if (error) setError(false);
              }}
              placeholder="Enter password"
              className={`w-full rounded-xl border-[2px] bg-[var(--background)] px-3 py-2.5 text-center text-sm text-[var(--text-primary)] outline-none transition-colors placeholder:text-[var(--text-tertiary)] focus:border-[var(--primary)] ${
                error ? 'border-red-400' : 'border-[var(--border-light)] hover:border-[var(--navy)]'
              }`}
              aria-label="Credentials access password"
              autoFocus
            />
            {error && (
              <p className="mt-1.5 text-xs text-red-500">Incorrect password. Please try again.</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full rounded-full border-[2px] border-[var(--navy)] bg-[var(--navy)] px-4 py-2.5 text-sm font-bold text-white shadow-[var(--shadow-xs)] transition-all hover:bg-[var(--navy-deep)]"
          >
            Unlock Credentials
          </button>
        </form>
        {isOwner && (
          <button
            type="button"
            onClick={onChangePassword}
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-purple-600 transition-colors hover:text-purple-700"
          >
            <KeyIcon />
            Forgot? Change Password
          </button>
        )}
      </div>
    </div>
  );
};

// ============================================
// CHANGE PASSWORD MODAL (owners only)
// ============================================

interface ChangePasswordModalProps {
  onClose: () => void;
}

const ChangePasswordModal = ({ onClose }: ChangePasswordModalProps) => {
  const setCredentialsPassword = useOwnershipStore((s) => s.setCredentialsPassword);

  const [newPass, setNewPass] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (newPass.length < 6) {
      setError('New password must be at least 6 characters');
      return;
    }
    if (newPass !== confirmPass) {
      setError('New passwords do not match');
      return;
    }

    setCredentialsPassword(newPass);
    setSuccess(true);
    setTimeout(() => onClose(), 1200);
  };

  const inputClasses =
    'w-full rounded-xl border-[2px] border-[var(--border-light)] bg-[var(--background)] px-3 py-2.5 text-sm text-[var(--text-primary)] outline-none transition-colors placeholder:text-[var(--text-tertiary)] hover:border-[var(--navy)] focus:border-[var(--primary)]';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50" onClick={onClose}>
      <div
        className="w-full max-w-sm rounded-2xl border-[2.5px] border-[var(--navy)] bg-[var(--surface)] shadow-[var(--shadow-overlay)]"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Change credentials password"
      >
        <div className="flex items-center justify-between border-b border-[var(--border)] px-6 py-4">
          <h3 className="text-base font-semibold text-[var(--text-primary)]">Change Credentials Password</h3>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-1.5 text-[var(--text-tertiary)] transition-colors hover:bg-[var(--surface-hover)] hover:text-[var(--text-primary)]"
            aria-label="Close"
          >
            <CloseIcon />
          </button>
        </div>

        {success ? (
          <div className="px-6 py-8 text-center">
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-green-50 text-green-600">
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <p className="text-sm font-medium text-[var(--text-primary)]">Password updated successfully</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 px-6 py-5">
            <p className="text-xs text-[var(--text-tertiary)]">
              As the owner, you can set a new credentials password directly.
            </p>
            <div>
              <label htmlFor="new-pass" className="mb-1.5 block text-sm font-medium text-[var(--text-primary)]">
                New Password
              </label>
              <input
                id="new-pass"
                type="password"
                value={newPass}
                onChange={(e) => setNewPass(e.target.value)}
                placeholder="Enter new password"
                className={inputClasses}
                required
                autoFocus
              />
            </div>
            <div>
              <label htmlFor="confirm-pass" className="mb-1.5 block text-sm font-medium text-[var(--text-primary)]">
                Confirm New Password
              </label>
              <input
                id="confirm-pass"
                type="password"
                value={confirmPass}
                onChange={(e) => setConfirmPass(e.target.value)}
                placeholder="Confirm new password"
                className={inputClasses}
                required
              />
            </div>
            {error && <p className="text-xs text-red-500">{error}</p>}
            <div className="flex items-center justify-end gap-3 pt-1">
              <button
                type="button"
                onClick={onClose}
                className="rounded-full border-[2px] border-[var(--navy)] px-4 py-2 text-sm font-bold text-[var(--text-secondary)] transition-all hover:bg-[var(--surface-hover)]"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="rounded-full border-[2px] border-[var(--navy)] bg-purple-600 px-4 py-2 text-sm font-bold text-white shadow-[var(--shadow-xs)] transition-all hover:bg-purple-700"
              >
                Update Password
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

// ============================================
// ADD/EDIT RESOURCE MODAL
// ============================================

interface ResourceFormData {
  title: string;
  description: string;
  url: string;
  fileName: string;
  username: string;
  password: string;
}

const INITIAL_FORM: ResourceFormData = {
  title: '',
  description: '',
  url: '',
  fileName: '',
  username: '',
  password: '',
};

interface ResourceModalProps {
  category: ResourceCategory;
  editingResource: Resource | null;
  onClose: () => void;
  onSubmit: (data: ResourceFormData) => void;
}

const ResourceModal = ({ category, editingResource, onClose, onSubmit }: ResourceModalProps) => {
  const [form, setForm] = useState<ResourceFormData>(
    editingResource
      ? {
          title: editingResource.title,
          description: editingResource.description,
          url: editingResource.url ?? '',
          fileName: editingResource.fileName ?? '',
          username: editingResource.username ?? '',
          password: editingResource.password ?? '',
        }
      : INITIAL_FORM
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.title.trim()) return;
    onSubmit(form);
  };

  const updateField = (field: keyof ResourceFormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const inputClasses =
    'w-full rounded-xl border-[2px] border-[var(--border-light)] bg-[var(--background)] px-3 py-2.5 text-sm text-[var(--text-primary)] outline-none transition-colors placeholder:text-[var(--text-tertiary)] hover:border-[var(--navy)] focus:border-[var(--primary)]';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50" onClick={onClose}>
      <div
        className="w-full max-w-lg rounded-2xl border-[2.5px] border-[var(--navy)] bg-[var(--surface)] shadow-[var(--shadow-overlay)]"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={editingResource ? 'Edit resource' : 'Add resource'}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[var(--border)] px-6 py-4">
          <h3 className="text-base font-semibold text-[var(--text-primary)]">
            {editingResource ? 'Edit' : 'Add'} {RESOURCE_CATEGORY_LABELS[category].replace('Important ', '')}
          </h3>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-1.5 text-[var(--text-tertiary)] transition-colors hover:bg-[var(--surface-hover)] hover:text-[var(--text-primary)]"
            aria-label="Close modal"
          >
            <CloseIcon />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 px-6 py-5">
          {/* Title */}
          <div>
            <label htmlFor="resource-title" className="mb-1.5 block text-sm font-medium text-[var(--text-primary)]">
              Title <span className="text-red-500">*</span>
            </label>
            <input
              id="resource-title"
              type="text"
              value={form.title}
              onChange={(e) => updateField('title', e.target.value)}
              placeholder="Enter title"
              className={inputClasses}
              required
              autoFocus
            />
          </div>

          {/* Description */}
          <div>
            <label htmlFor="resource-description" className="mb-1.5 block text-sm font-medium text-[var(--text-primary)]">
              Description
            </label>
            <textarea
              id="resource-description"
              value={form.description}
              onChange={(e) => updateField('description', e.target.value)}
              placeholder="Brief description"
              rows={2}
              className={`${inputClasses} resize-none`}
            />
          </div>

          {/* Category-specific fields */}
          {category === 'important_links' && (
            <div>
              <label htmlFor="resource-url" className="mb-1.5 block text-sm font-medium text-[var(--text-primary)]">
                URL <span className="text-red-500">*</span>
              </label>
              <input
                id="resource-url"
                type="url"
                value={form.url}
                onChange={(e) => updateField('url', e.target.value)}
                placeholder="https://..."
                className={inputClasses}
                required
              />
            </div>
          )}

          {category === 'important_assets' && (
            <>
              <div>
                <label htmlFor="resource-url" className="mb-1.5 block text-sm font-medium text-[var(--text-primary)]">
                  Asset URL
                </label>
                <input
                  id="resource-url"
                  type="url"
                  value={form.url}
                  onChange={(e) => updateField('url', e.target.value)}
                  placeholder="https://drive.google.com/..."
                  className={inputClasses}
                />
              </div>
              <div>
                <label htmlFor="resource-filename" className="mb-1.5 block text-sm font-medium text-[var(--text-primary)]">
                  File Name
                </label>
                <input
                  id="resource-filename"
                  type="text"
                  value={form.fileName}
                  onChange={(e) => updateField('fileName', e.target.value)}
                  placeholder="brand-guidelines.pdf"
                  className={inputClasses}
                />
              </div>
            </>
          )}

          {category === 'credentials' && (
            <>
              <div>
                <label htmlFor="resource-url" className="mb-1.5 block text-sm font-medium text-[var(--text-primary)]">
                  Service URL
                </label>
                <input
                  id="resource-url"
                  type="url"
                  value={form.url}
                  onChange={(e) => updateField('url', e.target.value)}
                  placeholder="https://..."
                  className={inputClasses}
                />
              </div>
              <div>
                <label htmlFor="resource-username" className="mb-1.5 block text-sm font-medium text-[var(--text-primary)]">
                  Username / Email
                </label>
                <input
                  id="resource-username"
                  type="text"
                  value={form.username}
                  onChange={(e) => updateField('username', e.target.value)}
                  placeholder="username or email"
                  className={inputClasses}
                />
              </div>
              <div>
                <label htmlFor="resource-password" className="mb-1.5 block text-sm font-medium text-[var(--text-primary)]">
                  Password
                </label>
                <input
                  id="resource-password"
                  type="password"
                  value={form.password}
                  onChange={(e) => updateField('password', e.target.value)}
                  placeholder="••••••••"
                  className={inputClasses}
                />
              </div>
            </>
          )}

          {/* Actions */}
          <div className="flex items-center justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="rounded-full border-[2px] border-[var(--navy)] px-4 py-2 text-sm font-bold text-[var(--text-secondary)] transition-all hover:bg-[var(--surface-hover)]"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-full border-[2px] border-[var(--navy)] bg-[var(--navy)] px-4 py-2 text-sm font-bold text-white shadow-[var(--shadow-xs)] transition-all hover:bg-[var(--navy-deep)]"
            >
              {editingResource ? 'Save Changes' : 'Add Resource'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// ============================================
// DELETE CONFIRMATION
// ============================================

interface DeleteConfirmProps {
  resourceTitle: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const DeleteConfirm = ({ resourceTitle, onConfirm, onCancel }: DeleteConfirmProps) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50" onClick={onCancel}>
    <div
      className="w-full max-w-sm rounded-2xl border-[2.5px] border-[var(--navy)] bg-[var(--surface)] p-6 shadow-[var(--shadow-overlay)]"
      onClick={(e) => e.stopPropagation()}
      role="alertdialog"
      aria-modal="true"
      aria-label="Delete resource confirmation"
    >
      <h3 className="text-base font-semibold text-[var(--text-primary)]">Delete Resource</h3>
      <p className="mt-2 text-sm text-[var(--text-secondary)]">
        Are you sure you want to delete &ldquo;{resourceTitle}&rdquo;? This action cannot be undone.
      </p>
      <div className="mt-5 flex items-center justify-end gap-3">
        <button
          type="button"
          onClick={onCancel}
          className="rounded-full border-[2px] border-[var(--navy)] px-4 py-2 text-sm font-bold text-[var(--text-secondary)] transition-all hover:bg-[var(--surface-hover)]"
        >
          Cancel
        </button>
        <button
          type="button"
          onClick={onConfirm}
          className="rounded-full border-[2px] border-[var(--navy)] bg-red-500 px-4 py-2 text-sm font-bold text-white shadow-[var(--shadow-xs)] transition-all hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  </div>
);

// ============================================
// RESOURCE CARDS
// ============================================

interface LinkCardProps {
  resource: Resource;
  onEdit: () => void;
  onDelete: () => void;
}

const LinkCard = ({ resource, onEdit, onDelete }: LinkCardProps) => (
  <div className="group flex items-start justify-between rounded-2xl border-[2.5px] border-[var(--navy)] bg-[var(--surface)] p-4 shadow-[var(--shadow-xs)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[var(--shadow-sm)]">
    <div className="min-w-0 flex-1">
      <div className="flex items-center gap-2">
        <span className="text-[var(--text-tertiary)]"><LinkIcon /></span>
        <h4 className="truncate text-sm font-medium text-[var(--text-primary)]">{resource.title}</h4>
      </div>
      {resource.description && (
        <p className="mt-1 text-sm text-[var(--text-tertiary)]">{resource.description}</p>
      )}
      {resource.url && (
        <a
          href={resource.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-flex items-center gap-1 text-xs text-blue-600 hover:underline"
        >
          {resource.url.length > 50 ? `${resource.url.slice(0, 50)}...` : resource.url}
          <ExternalLinkIcon />
        </a>
      )}
      <p className="mt-2 text-xs text-[var(--text-tertiary)]">
        Added by {resource.addedByName}
      </p>
    </div>
    <div className="ml-3 flex shrink-0 items-center gap-1 opacity-0 transition-opacity group-hover:opacity-100">
      <button
        type="button"
        onClick={onEdit}
        className="rounded-lg p-1.5 text-[var(--text-tertiary)] transition-colors hover:bg-[var(--surface-hover)] hover:text-[var(--text-primary)]"
        aria-label={`Edit ${resource.title}`}
      >
        <EditIcon />
      </button>
      <button
        type="button"
        onClick={onDelete}
        className="rounded-lg p-1.5 text-[var(--text-tertiary)] transition-colors hover:bg-red-50 hover:text-red-600"
        aria-label={`Delete ${resource.title}`}
      >
        <TrashIcon />
      </button>
    </div>
  </div>
);

const AssetCard = ({ resource, onEdit, onDelete }: LinkCardProps) => (
  <div className="group flex items-start justify-between rounded-2xl border-[2.5px] border-[var(--navy)] bg-[var(--surface)] p-4 shadow-[var(--shadow-xs)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[var(--shadow-sm)]">
    <div className="min-w-0 flex-1">
      <div className="flex items-center gap-2">
        <span className="text-[var(--text-tertiary)]"><ImageIcon /></span>
        <h4 className="truncate text-sm font-medium text-[var(--text-primary)]">{resource.title}</h4>
      </div>
      {resource.description && (
        <p className="mt-1 text-sm text-[var(--text-tertiary)]">{resource.description}</p>
      )}
      {resource.fileName && (
        <p className="mt-1 text-xs text-[var(--text-tertiary)]">{resource.fileName}</p>
      )}
      {resource.url && (
        <a
          href={resource.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-flex items-center gap-1 text-xs text-blue-600 hover:underline"
        >
          Open asset <ExternalLinkIcon />
        </a>
      )}
      <p className="mt-2 text-xs text-[var(--text-tertiary)]">
        Added by {resource.addedByName}
      </p>
    </div>
    <div className="ml-3 flex shrink-0 items-center gap-1 opacity-0 transition-opacity group-hover:opacity-100">
      <button
        type="button"
        onClick={onEdit}
        className="rounded-lg p-1.5 text-[var(--text-tertiary)] transition-colors hover:bg-[var(--surface-hover)] hover:text-[var(--text-primary)]"
        aria-label={`Edit ${resource.title}`}
      >
        <EditIcon />
      </button>
      <button
        type="button"
        onClick={onDelete}
        className="rounded-lg p-1.5 text-[var(--text-tertiary)] transition-colors hover:bg-red-50 hover:text-red-600"
        aria-label={`Delete ${resource.title}`}
      >
        <TrashIcon />
      </button>
    </div>
  </div>
);

interface CredentialCardProps {
  resource: Resource;
  onEdit: () => void;
  onDelete: () => void;
}

const CredentialCard = ({ resource, onEdit, onDelete }: CredentialCardProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [copied, setCopied] = useState<'username' | 'password' | null>(null);

  const handleCopy = useCallback(async (text: string, field: 'username' | 'password') => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(field);
      setTimeout(() => setCopied(null), 1500);
    } catch {
      // clipboard API may not be available
    }
  }, []);

  return (
    <div className="group rounded-2xl border-[2.5px] border-[var(--navy)] bg-[var(--surface)] p-4 shadow-[var(--shadow-xs)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[var(--shadow-sm)]">
      <div className="flex items-start justify-between">
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <span className="text-[var(--text-tertiary)]"><KeyIcon /></span>
            <h4 className="truncate text-sm font-medium text-[var(--text-primary)]">{resource.title}</h4>
          </div>
          {resource.description && (
            <p className="mt-1 text-sm text-[var(--text-tertiary)]">{resource.description}</p>
          )}
        </div>
        <div className="ml-3 flex shrink-0 items-center gap-1 opacity-0 transition-opacity group-hover:opacity-100">
          <button
            type="button"
            onClick={onEdit}
            className="rounded-lg p-1.5 text-[var(--text-tertiary)] transition-colors hover:bg-[var(--surface-hover)] hover:text-[var(--text-primary)]"
            aria-label={`Edit ${resource.title}`}
          >
            <EditIcon />
          </button>
          <button
            type="button"
            onClick={onDelete}
            className="rounded-lg p-1.5 text-[var(--text-tertiary)] transition-colors hover:bg-red-50 hover:text-red-600"
            aria-label={`Delete ${resource.title}`}
          >
            <TrashIcon />
          </button>
        </div>
      </div>

      {/* Credential fields */}
      <div className="mt-3 space-y-2">
        {resource.username && (
          <div className="flex items-center gap-2">
            <span className="w-16 shrink-0 text-xs text-[var(--text-tertiary)]">User:</span>
            <span className="truncate text-xs text-[var(--text-primary)]">{resource.username}</span>
            <button
              type="button"
              onClick={() => handleCopy(resource.username!, 'username')}
              className="shrink-0 rounded-[var(--radius-sm)] p-1 text-[var(--text-tertiary)] transition-colors hover:text-[var(--text-primary)]"
              aria-label="Copy username"
            >
              {copied === 'username' ? (
                <span className="text-xs text-green-600">Copied</span>
              ) : (
                <CopyIcon />
              )}
            </button>
          </div>
        )}
        {resource.password && (
          <div className="flex items-center gap-2">
            <span className="w-16 shrink-0 text-xs text-[var(--text-tertiary)]">Pass:</span>
            <span className="truncate text-xs font-mono text-[var(--text-primary)]">
              {showPassword ? resource.password : '••••••••'}
            </span>
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="shrink-0 rounded-[var(--radius-sm)] p-1 text-[var(--text-tertiary)] transition-colors hover:text-[var(--text-primary)]"
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? <EyeOffIcon /> : <EyeIcon />}
            </button>
            <button
              type="button"
              onClick={() => handleCopy(resource.password!, 'password')}
              className="shrink-0 rounded-[var(--radius-sm)] p-1 text-[var(--text-tertiary)] transition-colors hover:text-[var(--text-primary)]"
              aria-label="Copy password"
            >
              {copied === 'password' ? (
                <span className="text-xs text-green-600">Copied</span>
              ) : (
                <CopyIcon />
              )}
            </button>
          </div>
        )}
        {resource.url && (
          <div className="flex items-center gap-2">
            <span className="w-16 shrink-0 text-xs text-[var(--text-tertiary)]">URL:</span>
            <a
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="truncate text-xs text-blue-600 hover:underline"
            >
              {resource.url.length > 40 ? `${resource.url.slice(0, 40)}...` : resource.url}
            </a>
          </div>
        )}
      </div>

      <p className="mt-3 text-xs text-[var(--text-tertiary)]">
        Added by {resource.addedByName}
      </p>
    </div>
  );
};

// ============================================
// EMPTY STATE
// ============================================

interface EmptyStateProps {
  category: ResourceCategory;
}

const EMPTY_MESSAGES: Record<ResourceCategory, string> = {
  important_links: 'No important links added yet',
  important_assets: 'No important assets added yet',
  credentials: 'No credentials added yet',
};

const EmptyState = ({ category }: EmptyStateProps) => (
  <div className="flex h-48 items-center justify-center">
    <p className="text-sm text-[var(--text-tertiary)]">{EMPTY_MESSAGES[category]}</p>
  </div>
);

// ============================================
// MAIN COMPONENT
// ============================================

export const DashboardResources = () => {
  const user = useAuthStore((s) => s.user);
  const { resources, addResource, updateResource, deleteResource } = useResourceStore();

  const [activeCategory, setActiveCategory] = useState<ResourceCategory>('important_links');
  const [showModal, setShowModal] = useState(false);
  const [editingResource, setEditingResource] = useState<Resource | null>(null);
  const [deletingResource, setDeletingResource] = useState<Resource | null>(null);
  const [credentialsUnlocked, setCredentialsUnlocked] = useState(false);
  const [showChangePassword, setShowChangePassword] = useState(false);

  const isOwner = user?.role === 'owner';

  const filteredResources = useMemo(
    () => resources.filter((r) => r.category === activeCategory),
    [resources, activeCategory]
  );

  const handleAddClick = useCallback(() => {
    setEditingResource(null);
    setShowModal(true);
  }, []);

  const handleEditClick = useCallback((resource: Resource) => {
    setEditingResource(resource);
    setShowModal(true);
  }, []);

  const handleDeleteClick = useCallback((resource: Resource) => {
    setDeletingResource(resource);
  }, []);

  const handleModalClose = useCallback(() => {
    setShowModal(false);
    setEditingResource(null);
  }, []);

  const handleSubmit = useCallback(
    (data: ResourceFormData) => {
      if (!user) return;

      if (editingResource) {
        updateResource(editingResource.id, {
          title: data.title.trim(),
          description: data.description.trim(),
          url: data.url.trim() || null,
          fileName: data.fileName.trim() || null,
          username: data.username.trim() || null,
          password: data.password.trim() || null,
        });
      } else {
        const now = new Date().toISOString();
        addResource({
          id: crypto.randomUUID(),
          title: data.title.trim(),
          description: data.description.trim(),
          category: activeCategory,
          url: data.url.trim() || null,
          fileName: data.fileName.trim() || null,
          fileSize: null,
          username: data.username.trim() || null,
          password: data.password.trim() || null,
          addedById: user.id,
          addedByName: user.name,
          createdAt: now,
          updatedAt: now,
        });
      }

      handleModalClose();
    },
    [user, editingResource, activeCategory, addResource, updateResource, handleModalClose]
  );

  const handleDeleteConfirm = useCallback(() => {
    if (deletingResource) {
      deleteResource(deletingResource.id);
      setDeletingResource(null);
    }
  }, [deletingResource, deleteResource]);

  const renderCard = useCallback(
    (resource: Resource) => {
      const commonProps = {
        key: resource.id,
        resource,
        onEdit: () => handleEditClick(resource),
        onDelete: () => handleDeleteClick(resource),
      };

      switch (activeCategory) {
        case 'important_links':
          return <LinkCard {...commonProps} />;
        case 'important_assets':
          return <AssetCard {...commonProps} />;
        case 'credentials':
          return <CredentialCard {...commonProps} />;
      }
    },
    [activeCategory, handleEditClick, handleDeleteClick]
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-extrabold text-[var(--text-primary)]">Resources</h2>
        <div className="flex items-center gap-2">
          {/* Change Password — owners only, when credentials tab is active and unlocked */}
          {isOwner && activeCategory === 'credentials' && credentialsUnlocked && (
            <button
              type="button"
              onClick={() => setShowChangePassword(true)}
              className="inline-flex items-center gap-1.5 rounded-full border-[2px] border-purple-400 bg-purple-50 px-3 py-2 text-sm font-bold text-purple-700 transition-colors hover:bg-purple-100"
            >
              <KeyIcon />
              Change Password
            </button>
          )}
          {!(activeCategory === 'credentials' && !credentialsUnlocked) && (
            <button
              type="button"
              onClick={handleAddClick}
              className="inline-flex items-center gap-2 rounded-full border-[2px] border-[var(--navy)] bg-[var(--navy)] px-4 py-2 text-sm font-bold text-white shadow-[var(--shadow-xs)] transition-all hover:bg-[var(--navy-deep)]"
            >
              <PlusIcon />
              Add Resource
            </button>
          )}
        </div>
      </div>

      {/* Category Tabs */}
      <div className="rounded-2xl border-[2.5px] border-[var(--navy)] bg-[var(--surface)] p-1 shadow-[var(--shadow-xs)]">
        <nav className="grid grid-cols-3 gap-1" role="tablist" aria-label="Resource categories">
          {RESOURCE_TABS.map((tab) => (
            <button
              key={tab.value}
              type="button"
              role="tab"
              aria-selected={activeCategory === tab.value}
              onClick={() => setActiveCategory(tab.value)}
              className={`
                flex items-center justify-center gap-2 rounded-xl py-2.5 text-sm font-bold
                transition-all duration-200
                ${
                  activeCategory === tab.value
                    ? 'bg-[var(--primary)] text-white'
                    : 'text-[var(--text-tertiary)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-hover)]'
                }
              `}
            >
              {tab.icon}
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Resource List — credentials tab requires password */}
      {activeCategory === 'credentials' && !credentialsUnlocked ? (
        <CredentialsGate
          onUnlock={() => setCredentialsUnlocked(true)}
          isOwner={isOwner}
          onChangePassword={() => setShowChangePassword(true)}
        />
      ) : filteredResources.length === 0 ? (
        <EmptyState category={activeCategory} />
      ) : (
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {filteredResources.map(renderCard)}
        </div>
      )}

      {/* Add/Edit Modal */}
      {showModal && (
        <ResourceModal
          category={activeCategory}
          editingResource={editingResource}
          onClose={handleModalClose}
          onSubmit={handleSubmit}
        />
      )}

      {/* Delete Confirmation */}
      {deletingResource && (
        <DeleteConfirm
          resourceTitle={deletingResource.title}
          onConfirm={handleDeleteConfirm}
          onCancel={() => setDeletingResource(null)}
        />
      )}

      {/* Change Password Modal — owners only */}
      {showChangePassword && (
        <ChangePasswordModal onClose={() => setShowChangePassword(false)} />
      )}
    </div>
  );
};
