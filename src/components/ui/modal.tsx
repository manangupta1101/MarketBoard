'use client';

import { useEffect, useRef, type ReactNode } from 'react';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl';
}

const MAX_WIDTH_STYLES = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
};

export const Modal = ({
  open,
  onClose,
  children,
  maxWidth = 'sm',
}: ModalProps) => {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  if (!open) return null;

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) onClose();
  };

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-[2px]"
      role="dialog"
      aria-modal="true"
    >
      <div
        className={`
          relative w-full ${MAX_WIDTH_STYLES[maxWidth]}
          bg-[var(--surface)] border border-[var(--border)]
          rounded-[var(--radius-xl)] p-8
          shadow-[var(--shadow-overlay)]
          animate-in fade-in zoom-in-95 duration-200
        `}
      >
        <button
          type="button"
          onClick={onClose}
          className="
            absolute top-4 right-4 flex h-8 w-8 items-center justify-center
            rounded-[var(--radius-md)] text-[var(--text-tertiary)]
            transition-all duration-[var(--transition-fast)]
            hover:bg-[var(--surface-active)] hover:text-[var(--text-primary)]
          "
          aria-label="Close"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        {children}
      </div>
    </div>
  );
};
