'use client';

import { useState, useEffect, useMemo, useCallback } from 'react';
import type { EditorSpecialization, EditorCategoryKey, TeamMemberProfile } from '@/types';
import {
  EDITOR_SPECIALIZATIONS,
  SPECIALIZATION_LABELS,
  SPECIALIZATION_ICONS,
  SPECIALIZATION_ROLE_TITLES,
  EDITOR_CATEGORY_CONFIG,
} from '@/types';
import { useTeamStore } from '@/stores/team-store';
import { useEditorSettingsStore } from '@/stores/editor-settings-store';
import { Modal } from '@/components/ui/modal';
import { DashboardEditorAvailability } from './dashboard-editor-availability';

// ============================================
// ICONS
// ============================================

const UserGroupIcon = () => (
  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const PaletteIcon = () => (
  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <circle cx="13.5" cy="6.5" r="2.5" />
    <circle cx="19" cy="11.5" r="2.5" />
    <circle cx="6.5" cy="6.5" r="2.5" />
    <circle cx="17.5" cy="18.5" r="2.5" />
    <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10c0 1.657-1.343 3-3 3h-1.5c-.83 0-1.5.67-1.5 1.5 0 .39.15.74.4 1.01.27.27.6.49.6.99 0 1.657-1.343 3-3 3z" />
  </svg>
);

const FilmIcon = () => (
  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" />
    <line x1="7" y1="2" x2="7" y2="22" />
    <line x1="17" y1="2" x2="17" y2="22" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <line x1="2" y1="7" x2="7" y2="7" />
    <line x1="2" y1="17" x2="7" y2="17" />
    <line x1="17" y1="7" x2="22" y2="7" />
    <line x1="17" y1="17" x2="22" y2="17" />
  </svg>
);

const LayoutIcon = () => (
  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    <line x1="3" y1="9" x2="21" y2="9" />
    <line x1="9" y1="21" x2="9" y2="9" />
  </svg>
);

const PenIcon = () => (
  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M17 3a2.828 2.828 0 114 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
  </svg>
);

const CameraIcon = () => (
  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" />
    <circle cx="12" cy="13" r="4" />
  </svg>
);

const MicIcon = () => (
  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z" />
    <path d="M19 10v2a7 7 0 01-14 0v-2" />
    <line x1="12" y1="19" x2="12" y2="23" />
    <line x1="8" y1="23" x2="16" y2="23" />
  </svg>
);

const SaveIcon = () => (
  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
    <polyline points="17 21 17 13 7 13 7 21" />
    <polyline points="7 3 7 8 15 8" />
  </svg>
);

const ChevronDownIcon = () => (
  <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

// ============================================
// CONSTANTS
// ============================================

const CATEGORY_ICONS: Record<EditorCategoryKey, React.ReactNode> = {
  designers: <PaletteIcon />,
  video_editors: <FilmIcon />,
  ui_ux_designers: <LayoutIcon />,
  writers: <PenIcon />,
  camera_operators: <CameraIcon />,
  anchors: <MicIcon />,
};

const CATEGORY_COLORS: Record<EditorCategoryKey, string> = {
  designers: 'text-purple-600',
  video_editors: 'text-orange-600',
  ui_ux_designers: 'text-blue-600',
  writers: 'text-emerald-600',
  camera_operators: 'text-rose-600',
  anchors: 'text-amber-600',
};

// ============================================
// SPECIALIZATION DROPDOWN
// ============================================

interface SpecDropdownProps {
  value: EditorSpecialization;
  onChange: (val: EditorSpecialization) => void;
  label: string;
}

const SpecDropdown = ({ value, onChange, label }: SpecDropdownProps) => (
  <div className="relative">
    <select
      value={value}
      onChange={(e) => onChange(e.target.value as EditorSpecialization)}
      aria-label={label}
      className="
        appearance-none rounded-[var(--radius-md)] border border-[var(--border)]
        bg-[var(--surface)] py-1.5 pl-3 pr-8 text-sm text-[var(--text-primary)]
        outline-none transition-colors
        hover:border-[var(--border-hover)] focus:border-[var(--primary)]
        cursor-pointer min-w-[120px]
      "
    >
      {EDITOR_SPECIALIZATIONS.map((spec) => (
        <option key={spec} value={spec}>
          {spec === 'none' ? 'None' : `${SPECIALIZATION_ICONS[spec]} ${SPECIALIZATION_LABELS[spec]}`}
        </option>
      ))}
    </select>
    <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-[var(--text-tertiary)]">
      <ChevronDownIcon />
    </span>
  </div>
);

// ============================================
// EDITOR ROW
// ============================================

interface EditorRowProps {
  editor: TeamMemberProfile;
}

const EditorRow = ({ editor }: EditorRowProps) => {
  const { getEditorSettings, setSpecialization } = useEditorSettingsStore();
  const settings = getEditorSettings(editor.id);

  const [localP1, setLocalP1] = useState<EditorSpecialization>(settings.p1);
  const [localP2, setLocalP2] = useState<EditorSpecialization>(settings.p2);
  const [saved, setSaved] = useState(false);

  // Sync local state when store changes externally
  useEffect(() => {
    setLocalP1(settings.p1);
    setLocalP2(settings.p2);
  }, [settings.p1, settings.p2]);

  const hasChanges = localP1 !== settings.p1 || localP2 !== settings.p2;

  const handleSave = useCallback(() => {
    setSpecialization(editor.id, 'p1', localP1);
    setSpecialization(editor.id, 'p2', localP2);
    setSaved(true);
    const timer = setTimeout(() => setSaved(false), 1500);
    return () => clearTimeout(timer);
  }, [editor.id, localP1, localP2, setSpecialization]);

  const roleTitle = SPECIALIZATION_ROLE_TITLES[localP1];

  return (
    <div className="flex items-center gap-4 rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] px-5 py-4 transition-shadow hover:shadow-[var(--shadow-sm)]">
      {/* Editor info */}
      <div className="flex min-w-0 flex-1 items-center gap-3">
        <span className="text-[var(--text-tertiary)]">
          <ChevronDownIcon />
        </span>
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-[var(--text-primary)]">{editor.name}</p>
          <p className="truncate text-xs text-[var(--text-tertiary)]">{editor.email}</p>
        </div>
      </div>

      {/* Role badge */}
      <span className="hidden text-xs text-[var(--text-tertiary)] sm:block">
        {roleTitle}
      </span>

      {/* P1 */}
      <div className="flex items-center gap-2">
        <span className="rounded-[var(--radius-sm)] bg-[var(--text-primary)] px-2 py-0.5 text-xs font-bold text-white">
          P1
        </span>
        <SpecDropdown
          value={localP1}
          onChange={setLocalP1}
          label={`P1 specialization for ${editor.name}`}
        />
      </div>

      {/* P2 */}
      <div className="flex items-center gap-2">
        <span className="rounded-[var(--radius-sm)] bg-[var(--text-primary)] px-2 py-0.5 text-xs font-bold text-white">
          P2
        </span>
        <SpecDropdown
          value={localP2}
          onChange={setLocalP2}
          label={`P2 specialization for ${editor.name}`}
        />
      </div>

      {/* Save button */}
      <button
        type="button"
        onClick={handleSave}
        disabled={!hasChanges && !saved}
        className={`
          flex items-center gap-1.5 rounded-[var(--radius-md)] px-4 py-2 text-sm font-semibold
          transition-all duration-[var(--transition-fast)]
          ${
            saved
              ? 'bg-[var(--success)] text-white'
              : hasChanges
                ? 'bg-[var(--text-primary)] text-white hover:opacity-90 cursor-pointer'
                : 'bg-[var(--text-primary)] text-white opacity-50 cursor-not-allowed'
          }
        `}
        aria-label={`Save settings for ${editor.name}`}
      >
        <SaveIcon />
        {saved ? 'Saved' : 'Save'}
      </button>
    </div>
  );
};

// ============================================
// SUMMARY STAT CARD
// ============================================

interface SummaryCardProps {
  label: string;
  count: number;
  icon: React.ReactNode;
  colorClass: string;
  onClick: () => void;
}

const SummaryCard = ({ label, count, icon, colorClass, onClick }: SummaryCardProps) => (
  <button
    type="button"
    onClick={onClick}
    className="
      flex flex-col items-start gap-2 rounded-[var(--radius-lg)] border border-[var(--border)]
      bg-[var(--surface)] p-5 text-left transition-all
      hover:shadow-[var(--shadow-md)] hover:border-[var(--border-hover)] cursor-pointer
      w-full
    "
    aria-label={`View ${label}`}
  >
    <span className="text-sm text-[var(--text-tertiary)]">{label}</span>
    <div className="flex items-center gap-2">
      <span className={colorClass}>{icon}</span>
      <span className="text-3xl font-bold text-[var(--text-primary)]">{count}</span>
    </div>
  </button>
);

// ============================================
// MEMBER LIST MODAL
// ============================================

interface MemberListModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  members: TeamMemberProfile[];
}

const MemberListModal = ({ open, onClose, title, members }: MemberListModalProps) => (
  <Modal open={open} onClose={onClose} maxWidth="md">
    <h2 className="mb-4 text-lg font-bold text-[var(--text-primary)]">{title}</h2>
    {members.length === 0 ? (
      <p className="py-6 text-center text-sm text-[var(--text-tertiary)]">No members in this category yet.</p>
    ) : (
      <ul className="max-h-80 space-y-2 overflow-y-auto" role="list">
        {members.map((m) => (
          <li
            key={m.id}
            className="flex items-center gap-3 rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--background)] px-4 py-3"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--primary-light)] text-sm font-semibold text-[var(--primary)]">
              {m.name.charAt(0).toUpperCase()}
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-[var(--text-primary)]">{m.name}</p>
              <p className="truncate text-xs text-[var(--text-tertiary)]">{m.email}</p>
            </div>
          </li>
        ))}
      </ul>
    )}
  </Modal>
);

// ============================================
// MAIN COMPONENT
// ============================================

export const DashboardEditorSettings = () => {
  const members = useTeamStore((s) => s.members);
  const { settings, syncEditors } = useEditorSettingsStore();

  const [modalCategory, setModalCategory] = useState<EditorCategoryKey | null>(null);

  // Get only editors
  const editors = useMemo(
    () => members.filter((m) => m.role === 'editor'),
    [members],
  );

  // Sync editors into settings store whenever editor list changes
  useEffect(() => {
    syncEditors(editors);
  }, [editors, syncEditors]);

  // Compute category counts + member lists based on P1 specialization
  // Uses `settings` directly (not getEditorSettings) so React tracks the dependency
  const categoryData = useMemo(() => {
    const result: Record<EditorCategoryKey, TeamMemberProfile[]> = {
      designers: [],
      video_editors: [],
      ui_ux_designers: [],
      writers: [],
      camera_operators: [],
      anchors: [],
    };

    const p1ToCategoryMap: Record<string, EditorCategoryKey> = {
      design: 'designers',
      video: 'video_editors',
      ui_ux: 'ui_ux_designers',
      writing: 'writers',
      shooting: 'camera_operators',
      anchor: 'anchors',
    };

    for (const editor of editors) {
      const editorSetting = settings[editor.id];
      const p1 = editorSetting?.p1 ?? 'none';
      const category = p1ToCategoryMap[p1];
      if (category) result[category].push(editor);
    }

    return result;
  }, [editors, settings]);

  return (
    <div className="space-y-8">
      {/* ── Editor Settings List ── */}
      <section>
        <div className="mb-4 flex items-center gap-3">
          <span className="text-[var(--text-tertiary)]">
            <UserGroupIcon />
          </span>
          <div>
            <h2 className="text-lg font-bold text-[var(--text-primary)]">Editor Settings</h2>
            <p className="text-sm text-[var(--text-tertiary)]">
              Assign P1/P2 specializations and set efficiency benchmarks
            </p>
          </div>
        </div>

        <div className="space-y-3">
          {editors.length === 0 ? (
            <div className="flex h-32 items-center justify-center rounded-[var(--radius-lg)] border border-dashed border-[var(--border)] bg-[var(--surface)]">
              <p className="text-sm text-[var(--text-tertiary)]">No editors in the team yet.</p>
            </div>
          ) : (
            editors.map((editor) => <EditorRow key={editor.id} editor={editor} />)
          )}
        </div>
      </section>

      {/* ── Summary Cards ── */}
      <section>
        <h3 className="mb-4 text-base font-semibold text-[var(--text-primary)]">Team Overview</h3>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 xl:grid-cols-6">
          {(Object.keys(EDITOR_CATEGORY_CONFIG) as EditorCategoryKey[]).map((key) => (
            <SummaryCard
              key={key}
              label={EDITOR_CATEGORY_CONFIG[key].label}
              count={categoryData[key].length}
              icon={CATEGORY_ICONS[key]}
              colorClass={CATEGORY_COLORS[key]}
              onClick={() => setModalCategory(key)}
            />
          ))}
        </div>
      </section>

      {/* ── Member List Modal ── */}
      {modalCategory && (
        <MemberListModal
          open={modalCategory !== null}
          onClose={() => setModalCategory(null)}
          title={EDITOR_CATEGORY_CONFIG[modalCategory].label}
          members={categoryData[modalCategory]}
        />
      )}

      {/* ── Editor Availability ── */}
      <DashboardEditorAvailability />
    </div>
  );
};
