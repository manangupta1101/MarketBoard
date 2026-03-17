'use client';

import { useState } from 'react';
import type { CreativeRequest, RequestStatus, RequestPriority } from '@/types';
import { REQUEST_STATUS_ORDER, REQUEST_STATUS_LABELS, PRIORITY_CONFIG, REQUEST_TYPE_ICONS } from '@/types';

// ============================================
// MOCK DATA — completely isolated from stores
// ============================================

const MOCK_REQUESTS: CreativeRequest[] = [
  // Open
  {
    id: 's1', title: 'Axis CBG Ads Reel 5', description: 'Ads reel 5', type: 'video',
    priority: 'high', status: 'open', totalItems: 3, dueDate: '2026-03-10',
    requesterId: 'u3', requesterName: 'Priyanshu Khandelwal', requesterEmail: 'priyanshu@test.com',
    assigneeId: null, assigneeName: null, teamLeadId: null, teamLeadName: null, teamLeadEmail: null,
    referenceLinks: [], scriptNoteId: null, finalLink: null, comments: [], reEdits: [], reEditRequests: [],
    isInReEdit: false, createdAt: '2026-02-25T09:00:00Z', closedAt: null,
    deletedById: null, deletedByName: null, deletedAt: null, deletionReason: null,
  },
  {
    id: 's2', title: 'Axis CBG Ads Reel 4', description: 'Ads reel 4', type: 'video',
    priority: 'high', status: 'open', totalItems: 2, dueDate: '2026-03-12',
    requesterId: 'u3', requesterName: 'Priyanshu Khandelwal', requesterEmail: 'priyanshu@test.com',
    assigneeId: null, assigneeName: null, teamLeadId: null, teamLeadName: null, teamLeadEmail: null,
    referenceLinks: [], scriptNoteId: null, finalLink: null, comments: [], reEdits: [], reEditRequests: [],
    isInReEdit: false, createdAt: '2026-02-24T09:00:00Z', closedAt: null,
    deletedById: null, deletedByName: null, deletedAt: null, deletionReason: null,
  },
  {
    id: 's3', title: 'LinkedIn Banner Design', description: 'New campaign banner for LinkedIn', type: 'design_graphics',
    priority: 'medium', status: 'open', totalItems: 1, dueDate: '2026-03-20',
    requesterId: 'u7', requesterName: 'Sanjay', requesterEmail: 'sanjay@test.com',
    assigneeId: null, assigneeName: null, teamLeadId: null, teamLeadName: null, teamLeadEmail: null,
    referenceLinks: [], scriptNoteId: null, finalLink: null, comments: [], reEdits: [], reEditRequests: [],
    isInReEdit: false, createdAt: '2026-02-23T09:00:00Z', closedAt: null,
    deletedById: null, deletedByName: null, deletedAt: null, deletionReason: null,
  },
  // In Progress
  {
    id: 's4', title: 'TCS Placement Reel', description: 'TCS campus placement video', type: 'video',
    priority: 'urgent', status: 'in_progress', totalItems: 2, dueDate: '2026-03-16',
    requesterId: 'u2', requesterName: 'Akshata Jadhav', requesterEmail: 'akshata@test.com',
    assigneeId: 'u1', assigneeName: 'Manan', teamLeadId: null, teamLeadName: null, teamLeadEmail: null,
    referenceLinks: [], scriptNoteId: null, finalLink: null, comments: [], reEdits: [], reEditRequests: [],
    isInReEdit: false, createdAt: '2026-03-14T09:00:00Z', closedAt: null,
    deletedById: null, deletedByName: null, deletedAt: null, deletionReason: null,
  },
  {
    id: 's5', title: 'Internship Carousel', description: 'Summer internship hiring carousel', type: 'design_graphics',
    priority: 'medium', status: 'in_progress', totalItems: 4, dueDate: '2026-03-18',
    requesterId: 'u8', requesterName: 'Janpreet', requesterEmail: 'janpreet@test.com',
    assigneeId: 'u5', assigneeName: 'Faizan', teamLeadId: null, teamLeadName: null, teamLeadEmail: null,
    referenceLinks: [], scriptNoteId: null, finalLink: null, comments: [], reEdits: [], reEditRequests: [],
    isInReEdit: false, createdAt: '2026-03-13T09:00:00Z', closedAt: null,
    deletedById: null, deletedByName: null, deletedAt: null, deletionReason: null,
  },
  // Review
  {
    id: 's6', title: 'Carousel - 2026', description: 'Deloitte is Hiring Interns', type: 'design_graphics',
    priority: 'urgent', status: 'review', totalItems: 5, dueDate: '2026-03-15',
    requesterId: 'u2', requesterName: 'Akshata Jadhav', requesterEmail: 'akshata@test.com',
    assigneeId: 'u6', assigneeName: 'Akasthiyan Ramachandran', teamLeadId: null, teamLeadName: null, teamLeadEmail: null,
    referenceLinks: [], scriptNoteId: null, finalLink: null, comments: [], reEdits: [], reEditRequests: [],
    isInReEdit: false, createdAt: '2026-03-11T09:00:00Z', closedAt: null,
    deletedById: null, deletedByName: null, deletedAt: null, deletionReason: null,
  },
  {
    id: 's7', title: 'Offcampus Reel', description: 'Off-campus hiring opportunities', type: 'video',
    priority: 'urgent', status: 'review', totalItems: 1, dueDate: '2026-03-17',
    requesterId: 'u2', requesterName: 'Akshata Jadhav', requesterEmail: 'akshata@test.com',
    assigneeId: 'u4', assigneeName: 'Simarpreet Singh', teamLeadId: null, teamLeadName: null, teamLeadEmail: null,
    referenceLinks: [], scriptNoteId: null, finalLink: null, comments: [], reEdits: [], reEditRequests: [],
    isInReEdit: false, createdAt: '2026-03-11T10:00:00Z', closedAt: null,
    deletedById: null, deletedByName: null, deletedAt: null, deletionReason: null,
  },
  // Closed
  {
    id: 's8', title: 'IG Live whatsapp image post', description: 'TCS NQT Live Doubt Solving', type: 'design_graphics',
    priority: 'urgent', status: 'closed', totalItems: 2, dueDate: '2026-03-12',
    requesterId: 'u2', requesterName: 'Akshata Jadhav', requesterEmail: 'akshata@test.com',
    assigneeId: 'u5', assigneeName: 'Faizan', teamLeadId: null, teamLeadName: null, teamLeadEmail: null,
    referenceLinks: [], scriptNoteId: null, finalLink: null, comments: [], reEdits: [], reEditRequests: [],
    isInReEdit: false, createdAt: '2026-03-10T08:00:00Z', closedAt: '2026-03-12T10:00:00Z',
    deletedById: null, deletedByName: null, deletedAt: null, deletionReason: null,
  },
  {
    id: 's9', title: 'TCS Reel', description: 'TCS NQT', type: 'video',
    priority: 'urgent', status: 'closed', totalItems: 1, dueDate: '2026-03-11',
    requesterId: 'u2', requesterName: 'Akshata Jadhav', requesterEmail: 'akshata@test.com',
    assigneeId: 'u1', assigneeName: 'Manan', teamLeadId: null, teamLeadName: null, teamLeadEmail: null,
    referenceLinks: [], scriptNoteId: null, finalLink: null, comments: [], reEdits: [], reEditRequests: [],
    isInReEdit: false, createdAt: '2026-03-10T07:00:00Z', closedAt: '2026-03-11T09:00:00Z',
    deletedById: null, deletedByName: null, deletedAt: null, deletionReason: null,
  },
  {
    id: 's10', title: 'Wipro Hiring Static Post', description: 'Wipro mass recruitment drive', type: 'design_graphics',
    priority: 'high', status: 'closed', totalItems: 2, dueDate: '2026-03-09',
    requesterId: 'u7', requesterName: 'Sanjay', requesterEmail: 'sanjay@test.com',
    assigneeId: 'u5', assigneeName: 'Faizan', teamLeadId: null, teamLeadName: null, teamLeadEmail: null,
    referenceLinks: [], scriptNoteId: null, finalLink: null, comments: [], reEdits: [], reEditRequests: [],
    isInReEdit: false, createdAt: '2026-03-08T09:00:00Z', closedAt: '2026-03-09T10:00:00Z',
    deletedById: null, deletedByName: null, deletedAt: null, deletionReason: null,
  },
  {
    id: 's11', title: 'Resume Tips Video', description: 'Quick tips for resume building', type: 'video',
    priority: 'medium', status: 'closed', totalItems: 1, dueDate: '2026-03-08',
    requesterId: 'u8', requesterName: 'Janpreet', requesterEmail: 'janpreet@test.com',
    assigneeId: 'u4', assigneeName: 'Simarpreet Singh', teamLeadId: null, teamLeadName: null, teamLeadEmail: null,
    referenceLinks: [], scriptNoteId: null, finalLink: null, comments: [], reEdits: [], reEditRequests: [],
    isInReEdit: false, createdAt: '2026-03-07T09:00:00Z', closedAt: '2026-03-08T09:00:00Z',
    deletedById: null, deletedByName: null, deletedAt: null, deletionReason: null,
  },
  {
    id: 's12', title: 'Hiring Carousel Post', description: 'Batch hiring announcement', type: 'design_graphics',
    priority: 'low', status: 'closed', totalItems: 3, dueDate: '2026-03-06',
    requesterId: 'u2', requesterName: 'Akshata Jadhav', requesterEmail: 'akshata@test.com',
    assigneeId: 'u6', assigneeName: 'Akasthiyan Ramachandran', teamLeadId: null, teamLeadName: null, teamLeadEmail: null,
    referenceLinks: [], scriptNoteId: null, finalLink: null, comments: [], reEdits: [], reEditRequests: [],
    isInReEdit: false, createdAt: '2026-03-05T09:00:00Z', closedAt: '2026-03-06T09:00:00Z',
    deletedById: null, deletedByName: null, deletedAt: null, deletionReason: null,
  },
];

// ============================================
// DESIGN TOKENS — LearnHub-inspired warm playful theme
// ============================================

const T = {
  // Backgrounds
  pageBg: '#FFF5EC',
  surfaceBg: '#ffffff',
  // Navy (borders, dark elements)
  navy: '#1e293b',
  navyLight: '#334155',
  // Primary green accent
  green: '#22C55E',
  greenDark: '#16A34A',
  greenLight: '#DCFCE7',
  greenText: '#15803D',
  // Text
  textPrimary: '#1e293b',
  textSecondary: '#64748b',
  textTertiary: '#94a3b8',
  // Decorative
  pink: '#FDA4AF',
  yellow: '#FDE047',
  cyan: '#A5F3FC',
  lavender: '#C4B5FD',
} as const;

// ============================================
// HELPER
// ============================================

const formatDate = (dateStr: string): string => {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
};

// Status colors matching the warm theme
const STATUS_DOT_COLOR: Record<RequestStatus, string> = {
  open: '#3B82F6',
  in_progress: '#F59E0B',
  review: '#8B5CF6',
  closed: '#22C55E',
  deleted: '#EF4444',
};

const STATUS_COLUMN_BG: Record<RequestStatus, string> = {
  open: '#EFF6FF',
  in_progress: '#FFFBEB',
  review: '#F5F3FF',
  closed: '#F0FDF4',
  deleted: '#FEF2F2',
};

// Priority badges — warm, playful pill style
const PRIORITY_BADGE_STYLES: Record<RequestPriority, { bg: string; text: string; border: string }> = {
  urgent: { bg: '#FEE2E2', text: '#DC2626', border: '#FECACA' },
  high: { bg: '#FEF3C7', text: '#D97706', border: '#FDE68A' },
  medium: { bg: '#DBEAFE', text: '#2563EB', border: '#BFDBFE' },
  low: { bg: '#F1F5F9', text: '#64748B', border: '#E2E8F0' },
};

// ============================================
// PRIORITY BADGE
// ============================================

const PriorityBadge = ({ priority, children }: { priority: RequestPriority; children: React.ReactNode }) => {
  const s = PRIORITY_BADGE_STYLES[priority];
  return (
    <span
      className="inline-flex items-center px-2.5 py-0.5 text-[11px] font-bold tracking-wide uppercase rounded-full shrink-0"
      style={{ background: s.bg, color: s.text, border: `2px solid ${s.border}` }}
    >
      {children}
    </span>
  );
};

// ============================================
// SANDBOX CARD — thick navy border, warm white, rounded
// ============================================

const SandboxCard = ({ request }: { request: CreativeRequest }) => {
  const priorityCfg = PRIORITY_CONFIG[request.priority];
  const typeIcon = REQUEST_TYPE_ICONS[request.type];

  return (
    <div
      className="
        w-full text-left rounded-2xl p-4
        bg-white
        transition-all duration-200 ease-out
        hover:-translate-y-0.5 hover:shadow-lg
        cursor-pointer group
      "
      style={{
        border: `2.5px solid ${T.navy}`,
        boxShadow: `4px 4px 0px ${T.navy}`,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = `6px 6px 0px ${T.navy}`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = `4px 4px 0px ${T.navy}`;
      }}
    >
      {/* Title Row */}
      <div className="mb-2 flex items-start justify-between gap-2">
        <div className="flex items-center gap-2 min-w-0">
          <span
            className="shrink-0 flex h-7 w-7 items-center justify-center rounded-lg text-sm"
            style={{ background: T.greenLight, border: `1.5px solid ${T.green}` }}
          >
            {typeIcon}
          </span>
          <span
            className="truncate text-sm font-bold"
            style={{ color: T.textPrimary, fontFamily: '"DM Sans", "Inter", sans-serif' }}
          >
            {request.title}
          </span>
        </div>
        <PriorityBadge priority={request.priority}>
          {priorityCfg.label}
        </PriorityBadge>
      </div>

      {/* Description */}
      {request.description && (
        <p className="mb-3 truncate text-xs font-medium" style={{ color: T.textSecondary }}>
          {request.description}
        </p>
      )}

      {/* Meta */}
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center gap-1.5">
          <svg className="h-3.5 w-3.5 shrink-0" style={{ color: T.textTertiary }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          <span className="truncate text-xs font-medium" style={{ color: T.textSecondary }}>{request.requesterName}</span>
        </div>

        {request.assigneeName && (
          <div className="flex items-center gap-1.5">
            <svg className="h-3.5 w-3.5 shrink-0" style={{ color: T.textTertiary }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="truncate text-xs font-medium" style={{ color: T.textSecondary }}>{request.assigneeName}</span>
          </div>
        )}

        {request.dueDate && (
          <div className="flex items-center gap-1.5">
            <svg className="h-3.5 w-3.5 shrink-0" style={{ color: T.textTertiary }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="text-xs font-medium" style={{ color: T.textSecondary }}>{formatDate(request.dueDate)}</span>
          </div>
        )}
      </div>
    </div>
  );
};

// ============================================
// SANDBOX COLUMN
// ============================================

const SandboxColumn = ({ status, requests }: { status: RequestStatus; requests: CreativeRequest[] }) => {
  const dotColor = STATUS_DOT_COLOR[status];
  const colBg = STATUS_COLUMN_BG[status];

  return (
    <div className="flex min-w-[280px] max-w-[320px] flex-1 flex-col">
      {/* Column Header */}
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div
            className="h-3 w-3 rounded-full"
            style={{ background: dotColor, border: `2px solid ${T.navy}` }}
          />
          <h3
            className="text-sm font-extrabold uppercase tracking-wide"
            style={{ color: T.textPrimary, fontFamily: '"DM Sans", "Inter", sans-serif' }}
          >
            {REQUEST_STATUS_LABELS[status]}
          </h3>
        </div>
        <span
          className="flex h-6 min-w-[24px] items-center justify-center rounded-full px-2 text-xs font-bold"
          style={{
            background: T.navy,
            color: '#ffffff',
          }}
        >
          {requests.length}
        </span>
      </div>

      {/* Column Body */}
      <div
        className="flex flex-1 flex-col gap-3 rounded-2xl p-3 overflow-y-auto"
        style={{
          background: colBg,
          border: `2.5px solid ${T.navy}`,
          boxShadow: `4px 4px 0px ${T.navy}`,
          maxHeight: 'calc(100vh - 200px)',
        }}
      >
        {requests.length === 0 ? (
          <div className="flex flex-1 items-center justify-center py-12">
            <span className="text-sm font-semibold" style={{ color: T.textTertiary }}>No requests</span>
          </div>
        ) : (
          requests.map((request) => (
            <SandboxCard key={request.id} request={request} />
          ))
        )}
      </div>
    </div>
  );
};

// ============================================
// DECORATIVE FLOATING ELEMENTS (like LearnHub reference)
// ============================================

const FloatingDecorations = () => (
  <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
    {/* Top right — pink blob */}
    <div
      className="absolute -top-10 right-[15%] h-32 w-32 rounded-full opacity-40"
      style={{ background: T.pink }}
    />
    {/* Mid left — yellow star-ish */}
    <div
      className="absolute top-[40%] -left-6 h-20 w-20 rounded-2xl rotate-12 opacity-30"
      style={{ background: T.yellow }}
    />
    {/* Bottom right — green circle */}
    <div
      className="absolute bottom-[20%] right-[8%] h-16 w-16 rounded-full opacity-30"
      style={{ background: T.green }}
    />
    {/* Bottom left — lavender */}
    <div
      className="absolute bottom-[10%] left-[12%] h-12 w-12 rounded-xl rotate-45 opacity-25"
      style={{ background: T.lavender }}
    />
    {/* Top left — cyan */}
    <div
      className="absolute top-[25%] left-[5%] h-10 w-10 rounded-full opacity-25"
      style={{ background: T.cyan }}
    />
  </div>
);

// ============================================
// SANDBOX PAGE
// ============================================

export default function SandboxPage() {
  const [activeDesign, setActiveDesign] = useState('current');

  const groupedByStatus = REQUEST_STATUS_ORDER.reduce(
    (acc, status) => {
      acc[status] = MOCK_REQUESTS.filter((r) => r.status === status);
      return acc;
    },
    {} as Record<RequestStatus, CreativeRequest[]>
  );

  return (
    <div
      className="min-h-screen relative"
      style={{
        background: T.pageBg,
        fontFamily: '"DM Sans", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      }}
    >
      <FloatingDecorations />

      {/* Sandbox Header */}
      <header
        className="sticky top-0 z-40"
        style={{
          background: T.surfaceBg,
          borderBottom: `2.5px solid ${T.navy}`,
        }}
      >
        <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-6 lg:px-8">
          <div className="flex items-center gap-3">
            {/* Logo icon — rounded with navy border */}
            <div
              className="flex h-9 w-9 items-center justify-center rounded-xl text-white"
              style={{
                background: T.green,
                border: `2.5px solid ${T.navy}`,
                boxShadow: `2px 2px 0px ${T.navy}`,
              }}
            >
              <svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h1
              className="text-lg font-extrabold"
              style={{ color: T.textPrimary }}
            >
              Design Sandbox
            </h1>
            {/* Experimental badge — green pill like "New: AI-Powered Learning" */}
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1 text-[11px] font-bold tracking-wide uppercase rounded-full"
              style={{
                background: T.greenLight,
                color: T.greenText,
                border: `2px solid ${T.green}`,
              }}
            >
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ background: T.green }}
              />
              Experimental
            </span>
          </div>

          {/* Design Switcher — thick bordered pill */}
          <div
            className="inline-flex rounded-xl p-1"
            style={{
              background: T.surfaceBg,
              border: `2.5px solid ${T.navy}`,
              boxShadow: `3px 3px 0px ${T.navy}`,
            }}
          >
            <button
              type="button"
              onClick={() => setActiveDesign('current')}
              className="rounded-lg px-4 py-2 text-sm font-bold transition-all duration-200 cursor-pointer"
              style={
                activeDesign === 'current'
                  ? {
                      background: T.green,
                      color: '#ffffff',
                    }
                  : {
                      background: 'transparent',
                      color: T.textSecondary,
                    }
              }
            >
              Current Design
            </button>
            {/* Future design tabs will go here */}
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="relative z-10 mx-auto w-full max-w-[1400px] px-6 py-6 lg:px-8">
        {activeDesign === 'current' && (
          <div className="flex gap-5 overflow-x-auto pb-4">
            {REQUEST_STATUS_ORDER.map((status) => (
              <SandboxColumn
                key={status}
                status={status}
                requests={groupedByStatus[status]}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
