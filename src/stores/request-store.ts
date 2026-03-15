import { create } from 'zustand';
import type {
  CreativeRequest,
  RequestStatus,
  RequestType,
  RequestPriority,
  RequestComment,
  REQUEST_STATUS_ORDER,
} from '@/types';

interface RequestState {
  requests: CreativeRequest[];
  addRequest: (request: CreativeRequest) => void;
  updateRequest: (id: string, updates: Partial<CreativeRequest>) => void;
  moveForward: (id: string) => void;
  moveToStatus: (id: string, status: RequestStatus) => void;
  assignRequest: (id: string, assigneeId: string, assigneeName: string) => void;
  addComment: (requestId: string, comment: RequestComment) => void;
  deleteRequest: (id: string, deletedById: string, deletedByName: string, reason: string) => void;
  getRequestsByStatus: (status: RequestStatus) => CreativeRequest[];
  getRequestsByAssignee: (assigneeId: string) => CreativeRequest[];
  getRequestsByRequester: (requesterId: string) => CreativeRequest[];
}

const STATUS_ORDER: RequestStatus[] = ['open', 'in_progress', 'review', 'closed'];

// Realistic mock data matching the screenshots
type MockRequestData = Omit<CreativeRequest, 'totalItems' | 'dueDate' | 'finalLink' | 'deletedById' | 'deletedByName' | 'deletedAt' | 'deletionReason'>;

const MOCK_REQUEST_DATA: MockRequestData[] = [
  // Open
  {
    id: 'r1', title: 'Axis CBG Ads Reel 5', description: 'Ads reel 5', type: 'video',
    priority: 'high', status: 'open',
    requesterId: 'u3', requesterName: 'Priyanshu Khandelwal', requesterEmail: 'priyanshu.khandelwal@adda247.com',
    assigneeId: null, assigneeName: null,
    teamLeadId: null, teamLeadName: null, teamLeadEmail: null,
    referenceLinks: [
      'https://drive.google.com/drive/folders/1Bsbsd_in1FUQuYdMppk0YpvpkoTQVeO?usp=drive_link',
      'https://docs.google.com/document/d/1BHl8DI-8GyCIdamBrMbRb05lHWjTJiiaAZgcravz19A/edit?usp=sharing',
    ],
    comments: [{ id: 'c1', authorId: 'u3', authorName: 'Priyanshu Khandelwal', content: 'Please prioritize this one', createdAt: '2026-02-25T10:00:00Z' }],
    createdAt: '2026-02-25T09:00:00Z',
  },
  {
    id: 'r2', title: 'Axis CBG Ads Reel 4', description: 'Ads reel 4', type: 'video',
    priority: 'high', status: 'open',
    requesterId: 'u3', requesterName: 'Priyanshu Khandelwal', requesterEmail: 'priyanshu.khandelwal@adda247.com',
    assigneeId: null, assigneeName: null,
    teamLeadId: null, teamLeadName: null, teamLeadEmail: null,
    referenceLinks: [], comments: [], createdAt: '2026-02-24T09:00:00Z',
  },
  {
    id: 'r3', title: 'Axis CBG Ads Reel 3', description: 'Ads reel 3', type: 'video',
    priority: 'high', status: 'open',
    requesterId: 'u3', requesterName: 'Priyanshu Khandelwal', requesterEmail: 'priyanshu.khandelwal@adda247.com',
    assigneeId: null, assigneeName: null,
    teamLeadId: null, teamLeadName: null, teamLeadEmail: null,
    referenceLinks: [], comments: [], createdAt: '2026-02-23T09:00:00Z',
  },
  {
    id: 'r4', title: 'Axis Bank ABYB Ads Reel 4', description: 'ads reel 4', type: 'video',
    priority: 'high', status: 'open',
    requesterId: 'u3', requesterName: 'Priyanshu Khandelwal', requesterEmail: 'priyanshu.khandelwal@adda247.com',
    assigneeId: null, assigneeName: null,
    teamLeadId: null, teamLeadName: null, teamLeadEmail: null,
    referenceLinks: [], comments: [], createdAt: '2026-02-22T09:00:00Z',
  },
  // Review
  {
    id: 'r5', title: 'Carousel - 2026', description: 'Deloitte is Hiring Interns', type: 'design_graphics',
    priority: 'urgent', status: 'review',
    requesterId: 'u2', requesterName: 'Akshata Jadhav', requesterEmail: 'akshata.jadhav@adda247.com',
    assigneeId: 'u6', assigneeName: 'Akasthiyan Ramachandran',
    teamLeadId: null, teamLeadName: null, teamLeadEmail: null,
    referenceLinks: [], comments: [], createdAt: '2026-03-11T09:00:00Z',
  },
  {
    id: 'r6', title: 'Offcampus Reel', description: '.', type: 'video',
    priority: 'urgent', status: 'review',
    requesterId: 'u2', requesterName: 'Akshata Jadhav', requesterEmail: 'akshata.jadhav@adda247.com',
    assigneeId: 'u4', assigneeName: 'Simarpreet Singh',
    teamLeadId: null, teamLeadName: null, teamLeadEmail: null,
    referenceLinks: [], comments: [], createdAt: '2026-03-11T10:00:00Z',
  },
  {
    id: 'r7', title: 'Axis Bank ABYB Ads Reel 3', description: 'ads reel 3', type: 'video',
    priority: 'high', status: 'review',
    requesterId: 'u3', requesterName: 'Priyanshu Khandelwal', requesterEmail: 'priyanshu.khandelwal@adda247.com',
    assigneeId: 'u1', assigneeName: 'Manan',
    teamLeadId: null, teamLeadName: null, teamLeadEmail: null,
    referenceLinks: [], comments: [], createdAt: '2026-03-10T09:00:00Z',
  },
  // Closed
  {
    id: 'r8', title: 'IG Live whatsapp image post', description: 'TCS NQT Live Doubt Solving with Mohan Sir (put mine & mohan sir image)', type: 'design_graphics',
    priority: 'urgent', status: 'closed',
    requesterId: 'u2', requesterName: 'Akshata Jadhav', requesterEmail: 'akshata.jadhav@adda247.com',
    assigneeId: 'u5', assigneeName: 'Faizan',
    teamLeadId: null, teamLeadName: null, teamLeadEmail: null,
    referenceLinks: [], comments: [], createdAt: '2026-03-10T08:00:00Z',
  },
  {
    id: 'r9', title: 'TCS Reel', description: 'TCS NQT', type: 'video',
    priority: 'urgent', status: 'closed',
    requesterId: 'u2', requesterName: 'Akshata Jadhav', requesterEmail: 'akshata.jadhav@adda247.com',
    assigneeId: 'u1', assigneeName: 'Manan',
    teamLeadId: null, teamLeadName: null, teamLeadEmail: null,
    referenceLinks: [], comments: [], createdAt: '2026-03-10T07:00:00Z',
  },
  {
    id: 'r10', title: '2025 - 2026 Account Hiring Carousel', description: 'Hiring Carousel', type: 'design_graphics',
    priority: 'urgent', status: 'closed',
    requesterId: 'u2', requesterName: 'Akshata Jadhav', requesterEmail: 'akshata.jadhav@adda247.com',
    assigneeId: 'u6', assigneeName: 'Akasthiyan Ramachandran',
    teamLeadId: null, teamLeadName: null, teamLeadEmail: null,
    referenceLinks: [], comments: [], createdAt: '2026-03-09T09:00:00Z',
  },
  {
    id: 'r11', title: 'Wipro Hiring Static Post', description: 'Wipro mass recruitment drive', type: 'design_graphics',
    priority: 'high', status: 'closed',
    requesterId: 'u7', requesterName: 'Sanjay', requesterEmail: 'sanjay.s@adda247.com',
    assigneeId: 'u5', assigneeName: 'Faizan',
    teamLeadId: null, teamLeadName: null, teamLeadEmail: null,
    referenceLinks: [], comments: [], createdAt: '2026-03-08T09:00:00Z',
  },
  {
    id: 'r12', title: 'Infosys Story Ad', description: 'Infosys campus placement story', type: 'design_graphics',
    priority: 'medium', status: 'closed',
    requesterId: 'u8', requesterName: 'Janpreet', requesterEmail: 'janpreet.ch@adda247.com',
    assigneeId: 'u4', assigneeName: 'Simarpreet Singh',
    teamLeadId: null, teamLeadName: null, teamLeadEmail: null,
    referenceLinks: [], comments: [], createdAt: '2026-03-07T09:00:00Z',
  },
];

// Due dates & item counts for existing requests
const MOCK_OVERRIDES: Record<string, { totalItems: number; dueDate: string | null }> = {
  r1: { totalItems: 3, dueDate: '2026-03-10' },   // overdue (open, past due)
  r2: { totalItems: 2, dueDate: '2026-03-12' },   // overdue (open, past due)
  r3: { totalItems: 4, dueDate: '2026-03-20' },
  r4: { totalItems: 2, dueDate: null },
  r5: { totalItems: 5, dueDate: '2026-03-15' },
  r6: { totalItems: 1, dueDate: '2026-03-17' },
  r7: { totalItems: 3, dueDate: '2026-03-16' },
  r8: { totalItems: 2, dueDate: '2026-03-12' },
  r9: { totalItems: 1, dueDate: '2026-03-11' },
  r10: { totalItems: 4, dueDate: '2026-03-10' },
  r11: { totalItems: 2, dueDate: '2026-03-09' },
  r12: { totalItems: 3, dueDate: '2026-03-08' },
};

// Generate bulk closed requests to match realistic dashboard data
// Target: ~78 total (55 design-category, 23 video-category)
const BULK_REQUESTERS = [
  { id: 'u2', name: 'Akshata Jadhav', email: 'akshata.jadhav@adda247.com' },
  { id: 'u9', name: 'Vandana Garg', email: 'vandana.garg@adda247.com' },
  { id: 'u3', name: 'Priyanshu Khandelwal', email: 'priyanshu.khandelwal@adda247.com' },
  { id: 'u10', name: 'Mayur Jain', email: 'mayur.jain@adda247.com' },
  { id: 'u11', name: 'Aditya Roy', email: 'aditya.roy@adda247.com' },
];

const BULK_ASSIGNEES = [
  { id: 'u1', name: 'Manan' },
  { id: 'u4', name: 'Simarpreet Singh' },
  { id: 'u5', name: 'Faizan' },
  { id: 'u6', name: 'Akasthiyan Ramachandran' },
];

const DESIGN_TYPES: RequestType[] = ['design_graphics'];
const VIDEO_TYPES: RequestType[] = ['video'];

const DESIGN_TITLES = [
  'Hiring Carousel Post', 'Campus Drive Static', 'Placement Story Ad', 'IG Post Design',
  'LinkedIn Banner', 'WhatsApp Status Design', 'Offer Letter Template', 'Event Poster',
  'Webinar Banner', 'Course Promo Static', 'Internship Carousel', 'Job Alert Post',
  'Success Story Design', 'Testimonial Carousel', 'Workshop Poster', 'Festival Post',
  'Announcement Static', 'Profile Graphic', 'Infographic Design', 'Newsletter Banner',
  'Recruitment Drive Post', 'Company Update Static', 'Product Launch Carousel',
  'Team Spotlight Post', 'Achievement Story', 'Contest Poster', 'Salary Guide Design',
  'Resume Template', 'Interview Tips Carousel', 'Skills Infographic',
  'Hackathon Poster', 'Alumni Meet Banner', 'Freshers Guide Post', 'Tech Talk Poster',
  'Aptitude Tips Carousel', 'Mock Test Promo', 'Coding Challenge Post', 'Live Session Banner',
  'Placement Stats Infographic', 'Company Review Carousel', 'Salary Hike Post',
  'WFH Guide Static', 'Referral Bonus Post', 'Job Fair Banner', 'Walk-in Drive Poster',
  'Campus Ambassador Post', 'Scholarship Carousel', 'Exam Prep Static', 'Study Group Post',
  'Mentor Connect Poster',
];

const VIDEO_TITLES = [
  'Placement Prep Reel', 'TCS Hiring Video', 'Interview Tips Reel', 'Day in Life Video',
  'Coding Tutorial Reel', 'Resume Tips Video', 'Mock Interview Reel', 'Campus Tour Video',
  'Success Story Reel', 'Aptitude Tricks Video', 'Company Review Reel', 'Salary Guide Video',
  'HR Tips Reel', 'GD Prep Video', 'Placement Tips Reel', 'Walk-in Update Video',
];

const generateBulkRequests = (): MockRequestData[] => {
  const bulk: MockRequestData[] = [];
  const priorities: RequestPriority[] = ['urgent', 'high', 'medium', 'low'];

  // Requester distribution weights (Akshata ~45, Vandana ~16, Priyanshu ~3, Mayur ~1, Aditya ~1)
  const requesterWeights = [45, 16, 3, 1, 1];
  const requesterPool: typeof BULK_REQUESTERS = [];
  BULK_REQUESTERS.forEach((req, i) => {
    for (let j = 0; j < requesterWeights[i]; j++) requesterPool.push(req);
  });

  // Need 50 design + 16 video = 66 more closed requests
  let idx = 13;

  // Generate design requests
  for (let i = 0; i < 50; i++) {
    const requester = requesterPool[i % requesterPool.length];
    const assignee = BULK_ASSIGNEES[i % BULK_ASSIGNEES.length];
    const type = DESIGN_TYPES[i % DESIGN_TYPES.length];
    const dayOffset = Math.floor(i / 2);
    const date = new Date('2026-02-12T09:00:00Z');
    date.setDate(date.getDate() + dayOffset);

    bulk.push({
      id: `r${idx}`,
      title: DESIGN_TITLES[i % DESIGN_TITLES.length],
      description: DESIGN_TITLES[i % DESIGN_TITLES.length],
      type,
      priority: priorities[i % priorities.length],
      status: 'closed',
      requesterId: requester.id,
      requesterName: requester.name,
      requesterEmail: requester.email,
      assigneeId: assignee.id,
      assigneeName: assignee.name,
      teamLeadId: null, teamLeadName: null, teamLeadEmail: null,
      referenceLinks: [],
      comments: [],
      createdAt: date.toISOString(),
    });
    idx++;
  }

  // Generate video requests
  for (let i = 0; i < 16; i++) {
    const requester = requesterPool[i % requesterPool.length];
    const assignee = BULK_ASSIGNEES[i % BULK_ASSIGNEES.length];
    const type = VIDEO_TYPES[i % VIDEO_TYPES.length];
    const dayOffset = Math.floor(i / 1.5);
    const date = new Date('2026-02-14T09:00:00Z');
    date.setDate(date.getDate() + dayOffset);

    bulk.push({
      id: `r${idx}`,
      title: VIDEO_TITLES[i % VIDEO_TITLES.length],
      description: VIDEO_TITLES[i % VIDEO_TITLES.length],
      type,
      priority: priorities[i % priorities.length],
      status: 'closed',
      requesterId: requester.id,
      requesterName: requester.name,
      requesterEmail: requester.email,
      assigneeId: assignee.id,
      assigneeName: assignee.name,
      teamLeadId: null, teamLeadName: null, teamLeadEmail: null,
      referenceLinks: [],
      comments: [],
      createdAt: date.toISOString(),
    });
    idx++;
  }

  return bulk;
};

const ALL_MOCK_DATA = [...MOCK_REQUEST_DATA, ...generateBulkRequests()];

// Generate due dates for bulk requests (most on time, some late for 11% compliance)
const generateDueDate = (createdAt: string, status: string, index: number): string | null => {
  const created = new Date(createdAt);
  if (status === 'closed') {
    // ~89% late (miss due date), ~11% on time
    const daysAfter = index % 9 === 0 ? 5 : -2; // every 9th is on time
    const due = new Date(created);
    due.setDate(due.getDate() + daysAfter);
    return due.toISOString().split('T')[0];
  }
  return null;
};

const MOCK_REQUESTS: CreativeRequest[] = ALL_MOCK_DATA.map((r, i) => ({
  ...r,
  totalItems: MOCK_OVERRIDES[r.id]?.totalItems ?? (1 + (i % 4)),
  dueDate: MOCK_OVERRIDES[r.id]?.dueDate ?? generateDueDate(r.createdAt, r.status, i),
  finalLink: null,
  deletedById: null,
  deletedByName: null,
  deletedAt: null,
  deletionReason: null,
}));

export const useRequestStore = create<RequestState>((set, get) => ({
  requests: MOCK_REQUESTS,

  addRequest: (request) => {
    set((state) => ({ requests: [request, ...state.requests] }));
  },

  updateRequest: (id, updates) => {
    set((state) => ({
      requests: state.requests.map((r) => (r.id === id ? { ...r, ...updates } : r)),
    }));
  },

  moveForward: (id) => {
    set((state) => ({
      requests: state.requests.map((r) => {
        if (r.id !== id) return r;
        const currentIndex = STATUS_ORDER.indexOf(r.status);
        if (currentIndex < STATUS_ORDER.length - 1) {
          return { ...r, status: STATUS_ORDER[currentIndex + 1] };
        }
        return r;
      }),
    }));
  },

  moveToStatus: (id, status) => {
    set((state) => ({
      requests: state.requests.map((r) => (r.id === id ? { ...r, status } : r)),
    }));
  },

  assignRequest: (id, assigneeId, assigneeName) => {
    set((state) => ({
      requests: state.requests.map((r) =>
        r.id === id ? { ...r, assigneeId, assigneeName } : r
      ),
    }));
  },

  addComment: (requestId, comment) => {
    set((state) => ({
      requests: state.requests.map((r) =>
        r.id === requestId ? { ...r, comments: [...r.comments, comment] } : r
      ),
    }));
  },

  deleteRequest: (id, deletedById, deletedByName, reason) => {
    set((state) => ({
      requests: state.requests.map((r) =>
        r.id === id
          ? {
              ...r,
              status: 'deleted' as const,
              deletedById,
              deletedByName,
              deletedAt: new Date().toISOString(),
              deletionReason: reason,
              comments: [
                ...r.comments,
                {
                  id: `comment_del_${Date.now()}`,
                  authorId: deletedById,
                  authorName: deletedByName,
                  content: `[Deleted] ${reason}`,
                  createdAt: new Date().toISOString(),
                },
              ],
            }
          : r
      ),
    }));
  },

  getRequestsByStatus: (status) => {
    return get().requests.filter((r) => r.status === status);
  },

  getRequestsByAssignee: (assigneeId) => {
    return get().requests.filter((r) => r.assigneeId === assigneeId);
  },

  getRequestsByRequester: (requesterId) => {
    return get().requests.filter((r) => r.requesterId === requesterId);
  },
}));
