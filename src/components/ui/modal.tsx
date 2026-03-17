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
      className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(30,41,59,0.4)] p-4"
      role="dialog"
      aria-modal="true"
    >
      <div
        className={`
          relative w-full ${MAX_WIDTH_STYLES[maxWidth]}
          bg-[var(--surface)] border-[2.5px] border-[var(--navy)]
          rounded-[20px] p-8
          shadow-[var(--shadow-overlay)]
          animate-in fade-in zoom-in-95 duration-200
          max-h-[90vh] overflow-y-auto
        `}
      >
        <button
          type="button"
          onClick={onClose}
          className="
            absolute top-4 right-4 flex h-8 w-8 items-center justify-center
            rounded-full text-[var(--text-tertiary)]
            border-[2px] border-[var(--border-light)]
            transition-all duration-200 ease-out
            hover:bg-[var(--surface-active)] hover:text-[var(--text-primary)] hover:border-[var(--navy)]
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
              strokeWidth={2.5}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        {children}
      </div>
    </div>
  );
};
