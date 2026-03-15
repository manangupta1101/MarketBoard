(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/stores/request-store.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useRequestStore",
    ()=>useRequestStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
;
const STATUS_ORDER = [
    'open',
    'in_progress',
    'review',
    'closed'
];
const MOCK_REQUEST_DATA = [
    // Open
    {
        id: 'r1',
        title: 'Axis CBG Ads Reel 5',
        description: 'Ads reel 5',
        type: 'video',
        priority: 'high',
        status: 'open',
        requesterId: 'u3',
        requesterName: 'Priyanshu Khandelwal',
        requesterEmail: 'priyanshu.khandelwal@adda247.com',
        assigneeId: null,
        assigneeName: null,
        teamLeadId: null,
        teamLeadName: null,
        teamLeadEmail: null,
        referenceLinks: [
            'https://drive.google.com/drive/folders/1Bsbsd_in1FUQuYdMppk0YpvpkoTQVeO?usp=drive_link',
            'https://docs.google.com/document/d/1BHl8DI-8GyCIdamBrMbRb05lHWjTJiiaAZgcravz19A/edit?usp=sharing'
        ],
        comments: [
            {
                id: 'c1',
                authorId: 'u3',
                authorName: 'Priyanshu Khandelwal',
                content: 'Please prioritize this one',
                createdAt: '2026-02-25T10:00:00Z'
            }
        ],
        createdAt: '2026-02-25T09:00:00Z'
    },
    {
        id: 'r2',
        title: 'Axis CBG Ads Reel 4',
        description: 'Ads reel 4',
        type: 'video',
        priority: 'high',
        status: 'open',
        requesterId: 'u3',
        requesterName: 'Priyanshu Khandelwal',
        requesterEmail: 'priyanshu.khandelwal@adda247.com',
        assigneeId: null,
        assigneeName: null,
        teamLeadId: null,
        teamLeadName: null,
        teamLeadEmail: null,
        referenceLinks: [],
        comments: [],
        createdAt: '2026-02-24T09:00:00Z'
    },
    {
        id: 'r3',
        title: 'Axis CBG Ads Reel 3',
        description: 'Ads reel 3',
        type: 'video',
        priority: 'high',
        status: 'open',
        requesterId: 'u3',
        requesterName: 'Priyanshu Khandelwal',
        requesterEmail: 'priyanshu.khandelwal@adda247.com',
        assigneeId: null,
        assigneeName: null,
        teamLeadId: null,
        teamLeadName: null,
        teamLeadEmail: null,
        referenceLinks: [],
        comments: [],
        createdAt: '2026-02-23T09:00:00Z'
    },
    {
        id: 'r4',
        title: 'Axis Bank ABYB Ads Reel 4',
        description: 'ads reel 4',
        type: 'video',
        priority: 'high',
        status: 'open',
        requesterId: 'u3',
        requesterName: 'Priyanshu Khandelwal',
        requesterEmail: 'priyanshu.khandelwal@adda247.com',
        assigneeId: null,
        assigneeName: null,
        teamLeadId: null,
        teamLeadName: null,
        teamLeadEmail: null,
        referenceLinks: [],
        comments: [],
        createdAt: '2026-02-22T09:00:00Z'
    },
    // Review
    {
        id: 'r5',
        title: 'Carousel - 2026',
        description: 'Deloitte is Hiring Interns',
        type: 'design_graphics',
        priority: 'urgent',
        status: 'review',
        requesterId: 'u2',
        requesterName: 'Akshata Jadhav',
        requesterEmail: 'akshata.jadhav@adda247.com',
        assigneeId: 'u6',
        assigneeName: 'Akasthiyan Ramachandran',
        teamLeadId: null,
        teamLeadName: null,
        teamLeadEmail: null,
        referenceLinks: [],
        comments: [],
        createdAt: '2026-03-11T09:00:00Z'
    },
    {
        id: 'r6',
        title: 'Offcampus Reel',
        description: '.',
        type: 'video',
        priority: 'urgent',
        status: 'review',
        requesterId: 'u2',
        requesterName: 'Akshata Jadhav',
        requesterEmail: 'akshata.jadhav@adda247.com',
        assigneeId: 'u4',
        assigneeName: 'Simarpreet Singh',
        teamLeadId: null,
        teamLeadName: null,
        teamLeadEmail: null,
        referenceLinks: [],
        comments: [],
        createdAt: '2026-03-11T10:00:00Z'
    },
    {
        id: 'r7',
        title: 'Axis Bank ABYB Ads Reel 3',
        description: 'ads reel 3',
        type: 'video',
        priority: 'high',
        status: 'review',
        requesterId: 'u3',
        requesterName: 'Priyanshu Khandelwal',
        requesterEmail: 'priyanshu.khandelwal@adda247.com',
        assigneeId: 'u1',
        assigneeName: 'Manan',
        teamLeadId: null,
        teamLeadName: null,
        teamLeadEmail: null,
        referenceLinks: [],
        comments: [],
        createdAt: '2026-03-10T09:00:00Z'
    },
    // Closed
    {
        id: 'r8',
        title: 'IG Live whatsapp image post',
        description: 'TCS NQT Live Doubt Solving with Mohan Sir (put mine & mohan sir image)',
        type: 'design_graphics',
        priority: 'urgent',
        status: 'closed',
        requesterId: 'u2',
        requesterName: 'Akshata Jadhav',
        requesterEmail: 'akshata.jadhav@adda247.com',
        assigneeId: 'u5',
        assigneeName: 'Faizan',
        teamLeadId: null,
        teamLeadName: null,
        teamLeadEmail: null,
        referenceLinks: [],
        comments: [],
        createdAt: '2026-03-10T08:00:00Z'
    },
    {
        id: 'r9',
        title: 'TCS Reel',
        description: 'TCS NQT',
        type: 'video',
        priority: 'urgent',
        status: 'closed',
        requesterId: 'u2',
        requesterName: 'Akshata Jadhav',
        requesterEmail: 'akshata.jadhav@adda247.com',
        assigneeId: 'u1',
        assigneeName: 'Manan',
        teamLeadId: null,
        teamLeadName: null,
        teamLeadEmail: null,
        referenceLinks: [],
        comments: [],
        createdAt: '2026-03-10T07:00:00Z'
    },
    {
        id: 'r10',
        title: '2025 - 2026 Account Hiring Carousel',
        description: 'Hiring Carousel',
        type: 'design_graphics',
        priority: 'urgent',
        status: 'closed',
        requesterId: 'u2',
        requesterName: 'Akshata Jadhav',
        requesterEmail: 'akshata.jadhav@adda247.com',
        assigneeId: 'u6',
        assigneeName: 'Akasthiyan Ramachandran',
        teamLeadId: null,
        teamLeadName: null,
        teamLeadEmail: null,
        referenceLinks: [],
        comments: [],
        createdAt: '2026-03-09T09:00:00Z'
    },
    {
        id: 'r11',
        title: 'Wipro Hiring Static Post',
        description: 'Wipro mass recruitment drive',
        type: 'design_graphics',
        priority: 'high',
        status: 'closed',
        requesterId: 'u7',
        requesterName: 'Sanjay',
        requesterEmail: 'sanjay.s@adda247.com',
        assigneeId: 'u5',
        assigneeName: 'Faizan',
        teamLeadId: null,
        teamLeadName: null,
        teamLeadEmail: null,
        referenceLinks: [],
        comments: [],
        createdAt: '2026-03-08T09:00:00Z'
    },
    {
        id: 'r12',
        title: 'Infosys Story Ad',
        description: 'Infosys campus placement story',
        type: 'design_graphics',
        priority: 'medium',
        status: 'closed',
        requesterId: 'u8',
        requesterName: 'Janpreet',
        requesterEmail: 'janpreet.ch@adda247.com',
        assigneeId: 'u4',
        assigneeName: 'Simarpreet Singh',
        teamLeadId: null,
        teamLeadName: null,
        teamLeadEmail: null,
        referenceLinks: [],
        comments: [],
        createdAt: '2026-03-07T09:00:00Z'
    }
];
// Due dates & item counts for existing requests
const MOCK_OVERRIDES = {
    r1: {
        totalItems: 3,
        dueDate: '2026-03-10'
    },
    r2: {
        totalItems: 2,
        dueDate: '2026-03-12'
    },
    r3: {
        totalItems: 4,
        dueDate: '2026-03-20'
    },
    r4: {
        totalItems: 2,
        dueDate: null
    },
    r5: {
        totalItems: 5,
        dueDate: '2026-03-15'
    },
    r6: {
        totalItems: 1,
        dueDate: '2026-03-17'
    },
    r7: {
        totalItems: 3,
        dueDate: '2026-03-16'
    },
    r8: {
        totalItems: 2,
        dueDate: '2026-03-12'
    },
    r9: {
        totalItems: 1,
        dueDate: '2026-03-11'
    },
    r10: {
        totalItems: 4,
        dueDate: '2026-03-10'
    },
    r11: {
        totalItems: 2,
        dueDate: '2026-03-09'
    },
    r12: {
        totalItems: 3,
        dueDate: '2026-03-08'
    }
};
// Generate bulk closed requests to match realistic dashboard data
// Target: ~78 total (55 design-category, 23 video-category)
const BULK_REQUESTERS = [
    {
        id: 'u2',
        name: 'Akshata Jadhav',
        email: 'akshata.jadhav@adda247.com'
    },
    {
        id: 'u9',
        name: 'Vandana Garg',
        email: 'vandana.garg@adda247.com'
    },
    {
        id: 'u3',
        name: 'Priyanshu Khandelwal',
        email: 'priyanshu.khandelwal@adda247.com'
    },
    {
        id: 'u10',
        name: 'Mayur Jain',
        email: 'mayur.jain@adda247.com'
    },
    {
        id: 'u11',
        name: 'Aditya Roy',
        email: 'aditya.roy@adda247.com'
    }
];
const BULK_ASSIGNEES = [
    {
        id: 'u1',
        name: 'Manan'
    },
    {
        id: 'u4',
        name: 'Simarpreet Singh'
    },
    {
        id: 'u5',
        name: 'Faizan'
    },
    {
        id: 'u6',
        name: 'Akasthiyan Ramachandran'
    }
];
const DESIGN_TYPES = [
    'design_graphics'
];
const VIDEO_TYPES = [
    'video'
];
const DESIGN_TITLES = [
    'Hiring Carousel Post',
    'Campus Drive Static',
    'Placement Story Ad',
    'IG Post Design',
    'LinkedIn Banner',
    'WhatsApp Status Design',
    'Offer Letter Template',
    'Event Poster',
    'Webinar Banner',
    'Course Promo Static',
    'Internship Carousel',
    'Job Alert Post',
    'Success Story Design',
    'Testimonial Carousel',
    'Workshop Poster',
    'Festival Post',
    'Announcement Static',
    'Profile Graphic',
    'Infographic Design',
    'Newsletter Banner',
    'Recruitment Drive Post',
    'Company Update Static',
    'Product Launch Carousel',
    'Team Spotlight Post',
    'Achievement Story',
    'Contest Poster',
    'Salary Guide Design',
    'Resume Template',
    'Interview Tips Carousel',
    'Skills Infographic',
    'Hackathon Poster',
    'Alumni Meet Banner',
    'Freshers Guide Post',
    'Tech Talk Poster',
    'Aptitude Tips Carousel',
    'Mock Test Promo',
    'Coding Challenge Post',
    'Live Session Banner',
    'Placement Stats Infographic',
    'Company Review Carousel',
    'Salary Hike Post',
    'WFH Guide Static',
    'Referral Bonus Post',
    'Job Fair Banner',
    'Walk-in Drive Poster',
    'Campus Ambassador Post',
    'Scholarship Carousel',
    'Exam Prep Static',
    'Study Group Post',
    'Mentor Connect Poster'
];
const VIDEO_TITLES = [
    'Placement Prep Reel',
    'TCS Hiring Video',
    'Interview Tips Reel',
    'Day in Life Video',
    'Coding Tutorial Reel',
    'Resume Tips Video',
    'Mock Interview Reel',
    'Campus Tour Video',
    'Success Story Reel',
    'Aptitude Tricks Video',
    'Company Review Reel',
    'Salary Guide Video',
    'HR Tips Reel',
    'GD Prep Video',
    'Placement Tips Reel',
    'Walk-in Update Video'
];
const generateBulkRequests = ()=>{
    const bulk = [];
    const priorities = [
        'urgent',
        'high',
        'medium',
        'low'
    ];
    // Requester distribution weights (Akshata ~45, Vandana ~16, Priyanshu ~3, Mayur ~1, Aditya ~1)
    const requesterWeights = [
        45,
        16,
        3,
        1,
        1
    ];
    const requesterPool = [];
    BULK_REQUESTERS.forEach((req, i)=>{
        for(let j = 0; j < requesterWeights[i]; j++)requesterPool.push(req);
    });
    // Need 50 design + 16 video = 66 more closed requests
    let idx = 13;
    // Generate design requests
    for(let i = 0; i < 50; i++){
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
            teamLeadId: null,
            teamLeadName: null,
            teamLeadEmail: null,
            referenceLinks: [],
            comments: [],
            createdAt: date.toISOString()
        });
        idx++;
    }
    // Generate video requests
    for(let i = 0; i < 16; i++){
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
            teamLeadId: null,
            teamLeadName: null,
            teamLeadEmail: null,
            referenceLinks: [],
            comments: [],
            createdAt: date.toISOString()
        });
        idx++;
    }
    return bulk;
};
const ALL_MOCK_DATA = [
    ...MOCK_REQUEST_DATA,
    ...generateBulkRequests()
];
// Generate due dates for bulk requests (most on time, some late for 11% compliance)
const generateDueDate = (createdAt, status, index)=>{
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
const MOCK_REQUESTS = ALL_MOCK_DATA.map(_c = (r, i)=>({
        ...r,
        totalItems: MOCK_OVERRIDES[r.id]?.totalItems ?? 1 + i % 4,
        dueDate: MOCK_OVERRIDES[r.id]?.dueDate ?? generateDueDate(r.createdAt, r.status, i),
        finalLink: null,
        deletedById: null,
        deletedByName: null,
        deletedAt: null,
        deletionReason: null
    }));
_c1 = MOCK_REQUESTS;
const useRequestStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])((set, get)=>({
        requests: MOCK_REQUESTS,
        addRequest: (request)=>{
            set((state)=>({
                    requests: [
                        request,
                        ...state.requests
                    ]
                }));
        },
        updateRequest: (id, updates)=>{
            set((state)=>({
                    requests: state.requests.map((r)=>r.id === id ? {
                            ...r,
                            ...updates
                        } : r)
                }));
        },
        moveForward: (id)=>{
            set((state)=>({
                    requests: state.requests.map((r)=>{
                        if (r.id !== id) return r;
                        const currentIndex = STATUS_ORDER.indexOf(r.status);
                        if (currentIndex < STATUS_ORDER.length - 1) {
                            return {
                                ...r,
                                status: STATUS_ORDER[currentIndex + 1]
                            };
                        }
                        return r;
                    })
                }));
        },
        moveToStatus: (id, status)=>{
            set((state)=>({
                    requests: state.requests.map((r)=>r.id === id ? {
                            ...r,
                            status
                        } : r)
                }));
        },
        assignRequest: (id, assigneeId, assigneeName)=>{
            set((state)=>({
                    requests: state.requests.map((r)=>r.id === id ? {
                            ...r,
                            assigneeId,
                            assigneeName
                        } : r)
                }));
        },
        addComment: (requestId, comment)=>{
            set((state)=>({
                    requests: state.requests.map((r)=>r.id === requestId ? {
                            ...r,
                            comments: [
                                ...r.comments,
                                comment
                            ]
                        } : r)
                }));
        },
        deleteRequest: (id, deletedById, deletedByName, reason)=>{
            set((state)=>({
                    requests: state.requests.map((r)=>r.id === id ? {
                            ...r,
                            status: 'deleted',
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
                                    createdAt: new Date().toISOString()
                                }
                            ]
                        } : r)
                }));
        },
        getRequestsByStatus: (status)=>{
            return get().requests.filter((r)=>r.status === status);
        },
        getRequestsByAssignee: (assigneeId)=>{
            return get().requests.filter((r)=>r.assigneeId === assigneeId);
        },
        getRequestsByRequester: (requesterId)=>{
            return get().requests.filter((r)=>r.requesterId === requesterId);
        }
    }));
var _c, _c1;
__turbopack_context__.k.register(_c, "MOCK_REQUESTS$ALL_MOCK_DATA.map");
__turbopack_context__.k.register(_c1, "MOCK_REQUESTS");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/badge.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
;
;
const COLOR_STYLES = {
    default: {
        default: 'bg-[var(--surface-secondary)] text-[var(--text-primary)]',
        outline: 'border border-[var(--border)] text-[var(--text-primary)]',
        filled: 'bg-[var(--text-primary)] text-[var(--text-inverse)]'
    },
    blue: {
        default: 'bg-[var(--primary-light)] text-[var(--primary)]',
        outline: 'border border-[var(--primary)]/30 text-[var(--primary)]',
        filled: 'bg-[var(--primary)] text-white'
    },
    green: {
        default: 'bg-[var(--success-light)] text-[var(--success)]',
        outline: 'border border-[var(--success)]/30 text-[var(--success)]',
        filled: 'bg-[var(--success)] text-white'
    },
    yellow: {
        default: 'bg-[var(--warning-light)] text-[var(--warning)]',
        outline: 'border border-[var(--warning)]/30 text-[var(--warning)]',
        filled: 'bg-[var(--warning)] text-white'
    },
    red: {
        default: 'bg-[var(--error-light)] text-[var(--error)]',
        outline: 'border border-[var(--error)]/30 text-[var(--error)]',
        filled: 'bg-[var(--error)] text-white'
    },
    gray: {
        default: 'bg-[var(--surface-secondary)] text-[var(--text-secondary)]',
        outline: 'border border-[var(--border)] text-[var(--text-secondary)]',
        filled: 'bg-[var(--text-tertiary)] text-white'
    },
    purple: {
        default: 'bg-purple-50 text-purple-700',
        outline: 'border border-purple-300 text-purple-700',
        filled: 'bg-purple-600 text-white'
    }
};
const Badge = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "f223e200786b9f285a32d8384a7fb850b29bfb9f082d3b854b442c263fa3e8f7") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f223e200786b9f285a32d8384a7fb850b29bfb9f082d3b854b442c263fa3e8f7";
    }
    const { children, variant: t1, color: t2, className: t3 } = t0;
    const variant = t1 === undefined ? "default" : t1;
    const color = t2 === undefined ? "default" : t2;
    const className = t3 === undefined ? "" : t3;
    const t4 = `
        inline-flex items-center px-2 py-0.5
        text-xs font-medium
        rounded-[var(--radius-sm)]
        ${COLOR_STYLES[color][variant]}
        ${className}
      `;
    let t5;
    if ($[1] !== children || $[2] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: t4,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/ui/badge.tsx",
            lineNumber: 74,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = children;
        $[2] = t4;
        $[3] = t5;
    } else {
        t5 = $[3];
    }
    return t5;
};
_c = Badge;
var _c;
__turbopack_context__.k.register(_c, "Badge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
const VARIANT_STYLES = {
    primary: 'bg-[var(--primary)] text-[var(--primary-text)] font-medium hover:bg-[var(--primary-hover)] active:bg-[var(--primary-active)] disabled:opacity-50 disabled:pointer-events-none shadow-[var(--shadow-xs)]',
    secondary: 'border border-[var(--border)] bg-[var(--surface)] text-[var(--text-primary)] font-medium hover:bg-[var(--surface-hover)] active:bg-[var(--surface-active)] disabled:opacity-50 disabled:pointer-events-none shadow-[var(--shadow-xs)]',
    ghost: 'text-[var(--text-secondary)] font-medium hover:text-[var(--text-primary)] hover:bg-[var(--surface-active)] disabled:opacity-50 disabled:pointer-events-none',
    danger: 'bg-[var(--error)] text-white font-medium hover:bg-red-700 active:bg-red-800 disabled:opacity-50 disabled:pointer-events-none shadow-[var(--shadow-xs)]'
};
const SIZE_STYLES = {
    sm: 'px-3 py-1.5 text-xs rounded-[var(--radius-sm)]',
    md: 'px-3.5 py-2 text-sm rounded-[var(--radius-md)]',
    lg: 'px-5 py-2.5 text-sm rounded-[var(--radius-md)]'
};
const Button = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ variant = 'primary', size = 'md', icon, showArrow = false, fullWidth = false, loading = false, disabled, className = '', children, ...props }, ref)=>{
    const isDisabled = disabled || loading;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        ref: ref,
        disabled: isDisabled,
        className: `
          inline-flex items-center justify-center gap-2
          transition-all duration-[var(--transition-fast)]
          ${VARIANT_STYLES[variant]}
          ${variant !== 'ghost' ? SIZE_STYLES[size] : `rounded-[var(--radius-md)] px-2 py-1.5 text-sm`}
          ${fullWidth ? 'w-full' : ''}
          ${className}
        `,
        ...props,
        children: [
            loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/button.tsx",
                lineNumber: 65,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0)) : icon ? icon : showArrow ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "h-4 w-4",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                strokeWidth: 2,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M13 7l5 5m0 0l-5 5m5-5H6"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/button.tsx",
                    lineNumber: 70,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/ui/button.tsx",
                lineNumber: 69,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0)) : null,
            children
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/button.tsx",
        lineNumber: 51,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Button;
Button.displayName = 'Button';
var _c, _c1;
__turbopack_context__.k.register(_c, "Button$forwardRef");
__turbopack_context__.k.register(_c1, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/layout/app-header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AppHeader",
    ()=>AppHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$auth$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/auth-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const AppHeader = (t0)=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(25);
    if ($[0] !== "858560299f3e58028577b6cef7c5ac772c7c98b1b7d7d112aced4d69fddfb154") {
        for(let $i = 0; $i < 25; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "858560299f3e58028577b6cef7c5ac772c7c98b1b7d7d112aced4d69fddfb154";
    }
    const { onNewRequest, onToggleTeamPanel } = t0;
    const user = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$auth$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"])(_temp);
    const logout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$auth$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"])(_temp2);
    if (!user) {
        return null;
    }
    const roleColor = user.role === "owner" ? "purple" : user.role === "admin" ? "blue" : user.role === "editor" ? "green" : "gray";
    let t1;
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex h-8 w-8 items-center justify-center rounded-[var(--radius-md)] bg-[var(--primary)] text-white",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "h-4 w-4",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/app-header.tsx",
                    lineNumber: 32,
                    columnNumber: 205
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/layout/app-header.tsx",
                lineNumber: 32,
                columnNumber: 126
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/layout/app-header.tsx",
            lineNumber: 32,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "text-base font-semibold text-[var(--text-primary)]",
            children: "Creative Requests"
        }, void 0, false, {
            fileName: "[project]/src/components/layout/app-header.tsx",
            lineNumber: 33,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t1;
        $[2] = t2;
    } else {
        t1 = $[1];
        t2 = $[2];
    }
    let t3;
    if ($[3] !== roleColor || $[4] !== user.role) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-3",
            children: [
                t1,
                t2,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                    color: roleColor,
                    variant: "filled",
                    className: "text-[10px] uppercase tracking-wide",
                    children: user.role
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/app-header.tsx",
                    lineNumber: 42,
                    columnNumber: 59
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/app-header.tsx",
            lineNumber: 42,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[3] = roleColor;
        $[4] = user.role;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    if ($[6] !== user.email) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "hidden text-sm text-[var(--text-secondary)] sm:block",
            children: user.email
        }, void 0, false, {
            fileName: "[project]/src/components/layout/app-header.tsx",
            lineNumber: 51,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[6] = user.email;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    let t5;
    if ($[8] !== onNewRequest || $[9] !== user.role) {
        t5 = (user.role === "owner" || user.role === "admin" || user.role === "member") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            size: "sm",
            onClick: onNewRequest,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    className: "h-3.5 w-3.5",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M12 4v16m8-8H4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/app-header.tsx",
                        lineNumber: 59,
                        columnNumber: 212
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/app-header.tsx",
                    lineNumber: 59,
                    columnNumber: 129
                }, ("TURBOPACK compile-time value", void 0)),
                "New Request"
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/app-header.tsx",
            lineNumber: 59,
            columnNumber: 88
        }, ("TURBOPACK compile-time value", void 0));
        $[8] = onNewRequest;
        $[9] = user.role;
        $[10] = t5;
    } else {
        t5 = $[10];
    }
    let t6;
    if ($[11] !== onToggleTeamPanel || $[12] !== user.role) {
        t6 = (user.role === "owner" || user.role === "admin") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: onToggleTeamPanel,
            className: "flex h-9 w-9 items-center justify-center rounded-[var(--radius-md)] text-[var(--text-secondary)] transition-all duration-[var(--transition-fast)] hover:bg-[var(--surface-active)] hover:text-[var(--text-primary)]",
            "aria-label": "Team settings",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "h-[18px] w-[18px]",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 1.5,
                        d: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/app-header.tsx",
                        lineNumber: 68,
                        columnNumber: 452
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 1.5,
                        d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/app-header.tsx",
                        lineNumber: 68,
                        columnNumber: 1011
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/app-header.tsx",
                lineNumber: 68,
                columnNumber: 363
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/layout/app-header.tsx",
            lineNumber: 68,
            columnNumber: 62
        }, ("TURBOPACK compile-time value", void 0));
        $[11] = onToggleTeamPanel;
        $[12] = user.role;
        $[13] = t6;
    } else {
        t6 = $[13];
    }
    let t7;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "h-[18px] w-[18px]",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 1.5,
                d: "M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            }, void 0, false, {
                fileName: "[project]/src/components/layout/app-header.tsx",
                lineNumber: 77,
                columnNumber: 99
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/layout/app-header.tsx",
            lineNumber: 77,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[14] = t7;
    } else {
        t7 = $[14];
    }
    let t8;
    if ($[15] !== logout) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: logout,
            className: "flex h-9 w-9 items-center justify-center rounded-[var(--radius-md)] text-[var(--text-secondary)] transition-all duration-[var(--transition-fast)] hover:bg-[var(--surface-active)] hover:text-[var(--text-primary)]",
            "aria-label": "Sign out",
            children: t7
        }, void 0, false, {
            fileName: "[project]/src/components/layout/app-header.tsx",
            lineNumber: 84,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[15] = logout;
        $[16] = t8;
    } else {
        t8 = $[16];
    }
    let t9;
    if ($[17] !== t4 || $[18] !== t5 || $[19] !== t6 || $[20] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-3",
            children: [
                t4,
                t5,
                t6,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/app-header.tsx",
            lineNumber: 92,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[17] = t4;
        $[18] = t5;
        $[19] = t6;
        $[20] = t8;
        $[21] = t9;
    } else {
        t9 = $[21];
    }
    let t10;
    if ($[22] !== t3 || $[23] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
            className: "sticky top-0 z-40 border-b border-[var(--border)] bg-[var(--surface)]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto flex h-14 max-w-[1400px] items-center justify-between px-6 lg:px-8",
                children: [
                    t3,
                    t9
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/app-header.tsx",
                lineNumber: 103,
                columnNumber: 101
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/layout/app-header.tsx",
            lineNumber: 103,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[22] = t3;
        $[23] = t9;
        $[24] = t10;
    } else {
        t10 = $[24];
    }
    return t10;
};
_s(AppHeader, "1z2WSl37WXQgfkuZxA4pUO+WcZo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$auth$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$auth$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"]
    ];
});
_c = AppHeader;
function _temp(s) {
    return s.user;
}
function _temp2(s_0) {
    return s_0.logout;
}
var _c;
__turbopack_context__.k.register(_c, "AppHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/tab-toggle.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TabToggle",
    ()=>TabToggle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
'use client';
;
;
const TabToggle = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(11);
    if ($[0] !== "8652d4243bd7549a446e54775f5212950be091dd62a2fbee53fa8ea2092e6b05") {
        for(let $i = 0; $i < 11; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "8652d4243bd7549a446e54775f5212950be091dd62a2fbee53fa8ea2092e6b05";
    }
    const { options, value, onChange, className: t1 } = t0;
    const className = t1 === undefined ? "" : t1;
    const t2 = `
        inline-flex rounded-[var(--radius-md)] bg-[var(--surface-secondary)] p-1
        ${className}
      `;
    let t3;
    if ($[1] !== onChange || $[2] !== options || $[3] !== value) {
        let t4;
        if ($[5] !== onChange || $[6] !== value) {
            t4 = (option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    role: "tab",
                    "aria-selected": value === option.value,
                    onClick: ()=>onChange(option.value),
                    className: `
            rounded-[var(--radius-sm)] px-3.5 py-1.5 text-sm font-medium
            transition-all duration-[var(--transition-fast)]
            ${value === option.value ? "bg-[var(--surface)] text-[var(--text-primary)] shadow-[var(--shadow-xs)]" : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"}
          `,
                    children: option.label
                }, option.value, false, {
                    fileName: "[project]/src/components/ui/tab-toggle.tsx",
                    lineNumber: 37,
                    columnNumber: 22
                }, ("TURBOPACK compile-time value", void 0));
            $[5] = onChange;
            $[6] = value;
            $[7] = t4;
        } else {
            t4 = $[7];
        }
        t3 = options.map(t4);
        $[1] = onChange;
        $[2] = options;
        $[3] = value;
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[8] !== t2 || $[9] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t2,
            role: "tablist",
            children: t3
        }, void 0, false, {
            fileName: "[project]/src/components/ui/tab-toggle.tsx",
            lineNumber: 58,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[8] = t2;
        $[9] = t3;
        $[10] = t4;
    } else {
        t4 = $[10];
    }
    return t4;
};
_c = TabToggle;
var _c;
__turbopack_context__.k.register(_c, "TabToggle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/types/index.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ============================================
// ENUMS (mirroring future Supabase enums)
// ============================================
__turbopack_context__.s([
    "ALL_STATUS_ORDER",
    ()=>ALL_STATUS_ORDER,
    "APP_ROLES",
    ()=>APP_ROLES,
    "ATTRIBUTION_MODELS",
    ()=>ATTRIBUTION_MODELS,
    "CAMPAIGN_STATUSES",
    ()=>CAMPAIGN_STATUSES,
    "CAMPAIGN_TYPES",
    ()=>CAMPAIGN_TYPES,
    "CONVERSION_TYPES",
    ()=>CONVERSION_TYPES,
    "COST_CATEGORIES",
    ()=>COST_CATEGORIES,
    "MAX_OWNERS",
    ()=>MAX_OWNERS,
    "NOTIFICATION_TYPES",
    ()=>NOTIFICATION_TYPES,
    "ORG_ROLES",
    ()=>ORG_ROLES,
    "PRIORITY_CONFIG",
    ()=>PRIORITY_CONFIG,
    "REQUEST_PRIORITIES",
    ()=>REQUEST_PRIORITIES,
    "REQUEST_STATUSES",
    ()=>REQUEST_STATUSES,
    "REQUEST_STATUS_LABELS",
    ()=>REQUEST_STATUS_LABELS,
    "REQUEST_STATUS_ORDER",
    ()=>REQUEST_STATUS_ORDER,
    "REQUEST_TYPES",
    ()=>REQUEST_TYPES,
    "REQUEST_TYPE_ICONS",
    ()=>REQUEST_TYPE_ICONS,
    "REQUEST_TYPE_LABELS",
    ()=>REQUEST_TYPE_LABELS,
    "RESOURCE_CATEGORIES",
    ()=>RESOURCE_CATEGORIES,
    "RESOURCE_CATEGORY_LABELS",
    ()=>RESOURCE_CATEGORY_LABELS,
    "TASK_PRIORITIES",
    ()=>TASK_PRIORITIES,
    "TASK_REQUEST_STATUSES",
    ()=>TASK_REQUEST_STATUSES,
    "TOUCHPOINT_TYPES",
    ()=>TOUCHPOINT_TYPES
]);
const ORG_ROLES = [
    'owner',
    'admin',
    'manager',
    'member',
    'viewer'
];
const CAMPAIGN_TYPES = [
    'paid_ads',
    'content',
    'social',
    'email',
    'seo',
    'influencer',
    'event',
    'other'
];
const CAMPAIGN_STATUSES = [
    'draft',
    'planning',
    'active',
    'paused',
    'completed',
    'archived'
];
const TASK_PRIORITIES = [
    'urgent',
    'high',
    'medium',
    'low'
];
const TASK_REQUEST_STATUSES = [
    'pending',
    'approved',
    'rejected'
];
const COST_CATEGORIES = [
    'ad_spend',
    'content_creation',
    'team_hours',
    'tools_software',
    'influencer_fees',
    'event_costs',
    'agency_fees',
    'other'
];
const TOUCHPOINT_TYPES = [
    'ad_click',
    'ad_impression',
    'organic_search',
    'social_organic',
    'social_paid',
    'email_open',
    'email_click',
    'referral',
    'direct',
    'content_view',
    'webinar',
    'event',
    'influencer',
    'other'
];
const CONVERSION_TYPES = [
    'purchase',
    'signup',
    'trial_start',
    'demo_request',
    'lead',
    'download',
    'subscription',
    'other'
];
const ATTRIBUTION_MODELS = [
    'first_touch',
    'last_touch',
    'linear',
    'time_decay',
    'u_shaped',
    'w_shaped'
];
const NOTIFICATION_TYPES = [
    'task_assigned',
    'task_request',
    'request_approved',
    'request_rejected',
    'campaign_status',
    'budget_alert',
    'mention',
    'comment'
];
const REQUEST_TYPES = [
    'design_graphics',
    'video',
    'ui_ux'
];
const REQUEST_STATUSES = [
    'open',
    'in_progress',
    'review',
    'closed',
    'deleted'
];
const REQUEST_PRIORITIES = [
    'urgent',
    'high',
    'medium',
    'low'
];
const APP_ROLES = [
    'owner',
    'admin',
    'editor',
    'member'
];
const MAX_OWNERS = 3;
const REQUEST_STATUS_LABELS = {
    open: 'Open',
    in_progress: 'In Progress',
    review: 'Review',
    closed: 'Closed',
    deleted: 'Deleted'
};
const REQUEST_STATUS_ORDER = [
    'open',
    'in_progress',
    'review',
    'closed'
];
const ALL_STATUS_ORDER = [
    'open',
    'in_progress',
    'review',
    'closed',
    'deleted'
];
const REQUEST_TYPE_LABELS = {
    design_graphics: 'Design/Graphics',
    video: 'Video',
    ui_ux: 'UI/UX'
};
const REQUEST_TYPE_ICONS = {
    design_graphics: '🎨',
    video: '🎬',
    ui_ux: '🖥️'
};
const PRIORITY_CONFIG = {
    urgent: {
        label: 'urgent',
        color: 'red'
    },
    high: {
        label: 'high',
        color: 'yellow'
    },
    medium: {
        label: 'medium',
        color: 'blue'
    },
    low: {
        label: 'low',
        color: 'gray'
    }
};
const RESOURCE_CATEGORIES = [
    'important_links',
    'important_assets',
    'credentials'
];
const RESOURCE_CATEGORY_LABELS = {
    important_links: 'Important Links',
    important_assets: 'Important Assets',
    credentials: 'Credentials'
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/board/request-card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RequestCard",
    ()=>RequestCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/types/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/badge.tsx [app-client] (ecmascript)");
'use client';
;
;
;
;
const formatDate = (dateStr)=>{
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric'
    });
};
const RequestCard = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(40);
    if ($[0] !== "4b76c61415c1010d7e085c0dfcde39335fb98a4accdf7784d350d0be9b174e20") {
        for(let $i = 0; $i < 40; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "4b76c61415c1010d7e085c0dfcde39335fb98a4accdf7784d350d0be9b174e20";
    }
    const { request, onClick } = t0;
    const priorityCfg = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PRIORITY_CONFIG"][request.priority];
    const typeIcon = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["REQUEST_TYPE_ICONS"][request.type];
    let t1;
    if ($[1] !== onClick || $[2] !== request) {
        t1 = ()=>onClick(request);
        $[1] = onClick;
        $[2] = request;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    let t2;
    if ($[4] !== typeIcon) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "shrink-0 text-sm",
            children: typeIcon
        }, void 0, false, {
            fileName: "[project]/src/components/board/request-card.tsx",
            lineNumber: 43,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[4] = typeIcon;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    let t3;
    if ($[6] !== request.title) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "truncate text-sm font-semibold text-[var(--text-primary)]",
            children: request.title
        }, void 0, false, {
            fileName: "[project]/src/components/board/request-card.tsx",
            lineNumber: 51,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[6] = request.title;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    let t4;
    if ($[8] !== t2 || $[9] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 min-w-0",
            children: [
                t2,
                t3
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/request-card.tsx",
            lineNumber: 59,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[8] = t2;
        $[9] = t3;
        $[10] = t4;
    } else {
        t4 = $[10];
    }
    const t5 = request.priority === "urgent" ? "filled" : "default";
    let t6;
    if ($[11] !== priorityCfg.color || $[12] !== priorityCfg.label || $[13] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
            color: priorityCfg.color,
            variant: t5,
            className: "shrink-0",
            children: priorityCfg.label
        }, void 0, false, {
            fileName: "[project]/src/components/board/request-card.tsx",
            lineNumber: 69,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[11] = priorityCfg.color;
        $[12] = priorityCfg.label;
        $[13] = t5;
        $[14] = t6;
    } else {
        t6 = $[14];
    }
    let t7;
    if ($[15] !== t4 || $[16] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-2 flex items-start justify-between gap-2",
            children: [
                t4,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/request-card.tsx",
            lineNumber: 79,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[15] = t4;
        $[16] = t6;
        $[17] = t7;
    } else {
        t7 = $[17];
    }
    let t8;
    if ($[18] !== request.description) {
        t8 = request.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mb-3 truncate text-xs text-[var(--text-secondary)]",
            children: request.description
        }, void 0, false, {
            fileName: "[project]/src/components/board/request-card.tsx",
            lineNumber: 88,
            columnNumber: 33
        }, ("TURBOPACK compile-time value", void 0));
        $[18] = request.description;
        $[19] = t8;
    } else {
        t8 = $[19];
    }
    let t9;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "h-3 w-3 shrink-0 text-[var(--text-tertiary)]",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            }, void 0, false, {
                fileName: "[project]/src/components/board/request-card.tsx",
                lineNumber: 96,
                columnNumber: 126
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/board/request-card.tsx",
            lineNumber: 96,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[20] = t9;
    } else {
        t9 = $[20];
    }
    let t10;
    if ($[21] !== request.requesterName) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-1.5",
            children: [
                t9,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "truncate text-xs text-[var(--text-secondary)]",
                    children: request.requesterName
                }, void 0, false, {
                    fileName: "[project]/src/components/board/request-card.tsx",
                    lineNumber: 103,
                    columnNumber: 58
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/request-card.tsx",
            lineNumber: 103,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[21] = request.requesterName;
        $[22] = t10;
    } else {
        t10 = $[22];
    }
    let t11;
    if ($[23] !== request.assigneeName) {
        t11 = request.assigneeName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-1.5",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    className: "h-3 w-3 shrink-0 text-[var(--text-tertiary)]",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                    }, void 0, false, {
                        fileName: "[project]/src/components/board/request-card.tsx",
                        lineNumber: 111,
                        columnNumber: 194
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/board/request-card.tsx",
                    lineNumber: 111,
                    columnNumber: 78
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "truncate text-xs text-[var(--text-secondary)]",
                    children: request.assigneeName
                }, void 0, false, {
                    fileName: "[project]/src/components/board/request-card.tsx",
                    lineNumber: 111,
                    columnNumber: 475
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/request-card.tsx",
            lineNumber: 111,
            columnNumber: 35
        }, ("TURBOPACK compile-time value", void 0));
        $[23] = request.assigneeName;
        $[24] = t11;
    } else {
        t11 = $[24];
    }
    let t12;
    if ($[25] !== request.createdAt || $[26] !== request.status) {
        t12 = request.status !== "open" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-1.5",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    className: "h-3 w-3 shrink-0 text-[var(--text-tertiary)]",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    }, void 0, false, {
                        fileName: "[project]/src/components/board/request-card.tsx",
                        lineNumber: 119,
                        columnNumber: 199
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/board/request-card.tsx",
                    lineNumber: 119,
                    columnNumber: 83
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-xs text-[var(--text-secondary)]",
                    children: formatDate(request.createdAt)
                }, void 0, false, {
                    fileName: "[project]/src/components/board/request-card.tsx",
                    lineNumber: 119,
                    columnNumber: 365
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/request-card.tsx",
            lineNumber: 119,
            columnNumber: 40
        }, ("TURBOPACK compile-time value", void 0));
        $[25] = request.createdAt;
        $[26] = request.status;
        $[27] = t12;
    } else {
        t12 = $[27];
    }
    let t13;
    if ($[28] !== request.finalLink) {
        t13 = request.finalLink && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-1.5",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    className: "h-3 w-3 shrink-0 text-green-500",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    }, void 0, false, {
                        fileName: "[project]/src/components/board/request-card.tsx",
                        lineNumber: 128,
                        columnNumber: 178
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/board/request-card.tsx",
                    lineNumber: 128,
                    columnNumber: 75
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: request.finalLink,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    onClick: _temp,
                    className: "truncate text-xs font-medium text-green-600 hover:text-green-700",
                    children: "Final Link"
                }, void 0, false, {
                    fileName: "[project]/src/components/board/request-card.tsx",
                    lineNumber: 128,
                    columnNumber: 334
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/request-card.tsx",
            lineNumber: 128,
            columnNumber: 32
        }, ("TURBOPACK compile-time value", void 0));
        $[28] = request.finalLink;
        $[29] = t13;
    } else {
        t13 = $[29];
    }
    let t14;
    if ($[30] !== t10 || $[31] !== t11 || $[32] !== t12 || $[33] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col gap-1.5",
            children: [
                t10,
                t11,
                t12,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/request-card.tsx",
            lineNumber: 136,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[30] = t10;
        $[31] = t11;
        $[32] = t12;
        $[33] = t13;
        $[34] = t14;
    } else {
        t14 = $[34];
    }
    let t15;
    if ($[35] !== t1 || $[36] !== t14 || $[37] !== t7 || $[38] !== t8) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: t1,
            className: "\n        w-full text-left\n        bg-[var(--surface)] border border-[var(--border)]\n        rounded-[var(--radius-lg)] p-4\n        shadow-[var(--shadow-xs)]\n        transition-all duration-[var(--transition-fast)]\n        hover:border-[var(--border-hover)] hover:shadow-[var(--shadow-sm)]\n        focus-visible:outline-2 focus-visible:outline-[var(--primary)]\n      ",
            children: [
                t7,
                t8,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/request-card.tsx",
            lineNumber: 147,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[35] = t1;
        $[36] = t14;
        $[37] = t7;
        $[38] = t8;
        $[39] = t15;
    } else {
        t15 = $[39];
    }
    return t15;
};
_c = RequestCard;
function _temp(e) {
    return e.stopPropagation();
}
var _c;
__turbopack_context__.k.register(_c, "RequestCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/board/kanban-column.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "KanbanColumn",
    ()=>KanbanColumn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/types/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$board$2f$request$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/board/request-card.tsx [app-client] (ecmascript)");
'use client';
;
;
;
;
const STATUS_COLORS = {
    open: 'bg-blue-50 border-blue-200',
    in_progress: 'bg-amber-50 border-amber-200',
    review: 'bg-violet-50 border-violet-200',
    closed: 'bg-emerald-50 border-emerald-200',
    deleted: 'bg-red-50 border-red-200'
};
const STATUS_DOT = {
    open: 'bg-blue-500',
    in_progress: 'bg-amber-500',
    review: 'bg-violet-500',
    closed: 'bg-emerald-500',
    deleted: 'bg-red-500'
};
const CLOSED_CARD_LIMIT = 10;
const KanbanColumn = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(27);
    if ($[0] !== "e1b83b022c5b8bfb214799717a571ddd29092bb9c3a67d2bed73257e00c682ae") {
        for(let $i = 0; $i < 27; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e1b83b022c5b8bfb214799717a571ddd29092bb9c3a67d2bed73257e00c682ae";
    }
    const { status, requests, onCardClick } = t0;
    let t1;
    if ($[1] !== requests || $[2] !== status) {
        t1 = status === "closed" ? [
            ...requests
        ].sort(_temp).slice(0, CLOSED_CARD_LIMIT) : requests;
        $[1] = requests;
        $[2] = status;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    const visibleCards = t1;
    const hiddenCount = requests.length - visibleCards.length;
    const t2 = `h-2 w-2 rounded-full ${STATUS_DOT[status]}`;
    let t3;
    if ($[4] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t2
        }, void 0, false, {
            fileName: "[project]/src/components/board/kanban-column.tsx",
            lineNumber: 54,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[4] = t2;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    const t4 = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["REQUEST_STATUS_LABELS"][status];
    let t5;
    if ($[6] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-sm font-semibold text-[var(--text-primary)]",
            children: t4
        }, void 0, false, {
            fileName: "[project]/src/components/board/kanban-column.tsx",
            lineNumber: 63,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[6] = t4;
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    let t6;
    if ($[8] !== t3 || $[9] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [
                t3,
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/kanban-column.tsx",
            lineNumber: 71,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[8] = t3;
        $[9] = t5;
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    let t7;
    if ($[11] !== requests.length) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "flex h-5 min-w-[20px] items-center justify-center rounded-full bg-[var(--surface-secondary)] px-1.5 text-xs font-medium text-[var(--text-secondary)]",
            children: requests.length
        }, void 0, false, {
            fileName: "[project]/src/components/board/kanban-column.tsx",
            lineNumber: 80,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[11] = requests.length;
        $[12] = t7;
    } else {
        t7 = $[12];
    }
    let t8;
    if ($[13] !== t6 || $[14] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-3 flex items-center justify-between",
            children: [
                t6,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/kanban-column.tsx",
            lineNumber: 88,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[13] = t6;
        $[14] = t7;
        $[15] = t8;
    } else {
        t8 = $[15];
    }
    const t9 = `
          flex flex-1 flex-col gap-2 rounded-[var(--radius-lg)] border p-2
          ${STATUS_COLORS[status]}
          overflow-y-auto
        `;
    let t10;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = {
            maxHeight: "calc(100vh - 200px)"
        };
        $[16] = t10;
    } else {
        t10 = $[16];
    }
    let t11;
    if ($[17] !== hiddenCount || $[18] !== onCardClick || $[19] !== visibleCards) {
        t11 = visibleCards.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-1 items-center justify-center py-12",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-sm text-[var(--text-tertiary)]",
                children: "No requests"
            }, void 0, false, {
                fileName: "[project]/src/components/board/kanban-column.tsx",
                lineNumber: 111,
                columnNumber: 102
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/board/kanban-column.tsx",
            lineNumber: 111,
            columnNumber: 39
        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                visibleCards.map((request)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$board$2f$request$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RequestCard"], {
                        request: request,
                        onClick: onCardClick
                    }, request.id, false, {
                        fileName: "[project]/src/components/board/kanban-column.tsx",
                        lineNumber: 111,
                        columnNumber: 214
                    }, ("TURBOPACK compile-time value", void 0))),
                hiddenCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "py-2 text-center text-xs text-[var(--text-tertiary)]",
                    children: [
                        "+",
                        hiddenCount,
                        " more in List View"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/board/kanban-column.tsx",
                    lineNumber: 111,
                    columnNumber: 308
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true);
        $[17] = hiddenCount;
        $[18] = onCardClick;
        $[19] = visibleCards;
        $[20] = t11;
    } else {
        t11 = $[20];
    }
    let t12;
    if ($[21] !== t11 || $[22] !== t9) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t9,
            style: t10,
            children: t11
        }, void 0, false, {
            fileName: "[project]/src/components/board/kanban-column.tsx",
            lineNumber: 121,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[21] = t11;
        $[22] = t9;
        $[23] = t12;
    } else {
        t12 = $[23];
    }
    let t13;
    if ($[24] !== t12 || $[25] !== t8) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex min-w-[280px] max-w-[320px] flex-1 flex-col",
            children: [
                t8,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/kanban-column.tsx",
            lineNumber: 130,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[24] = t12;
        $[25] = t8;
        $[26] = t13;
    } else {
        t13 = $[26];
    }
    return t13;
};
_c = KanbanColumn;
function _temp(a, b) {
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
}
var _c;
__turbopack_context__.k.register(_c, "KanbanColumn");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/board/kanban-board.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "KanbanBoard",
    ()=>KanbanBoard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/types/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$board$2f$kanban$2d$column$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/board/kanban-column.tsx [app-client] (ecmascript)");
'use client';
;
;
;
;
const KanbanBoard = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(8);
    if ($[0] !== "ede379ef031559818f4f04edb18c136fe650879a64c75704cc0ba84b8267a65f") {
        for(let $i = 0; $i < 8; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "ede379ef031559818f4f04edb18c136fe650879a64c75704cc0ba84b8267a65f";
    }
    const { requests, onCardClick } = t0;
    let t1;
    if ($[1] !== requests) {
        t1 = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["REQUEST_STATUS_ORDER"].reduce((acc, status)=>{
            acc[status] = requests.filter((r)=>r.status === status);
            return acc;
        }, {});
        $[1] = requests;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const groupedByStatus = t1;
    let t2;
    if ($[3] !== groupedByStatus || $[4] !== onCardClick) {
        t2 = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["REQUEST_STATUS_ORDER"].map((status_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$board$2f$kanban$2d$column$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KanbanColumn"], {
                status: status_0,
                requests: groupedByStatus[status_0],
                onCardClick: onCardClick
            }, status_0, false, {
                fileName: "[project]/src/components/board/kanban-board.tsx",
                lineNumber: 37,
                columnNumber: 47
            }, ("TURBOPACK compile-time value", void 0)));
        $[3] = groupedByStatus;
        $[4] = onCardClick;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    let t3;
    if ($[6] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex gap-4 overflow-x-auto pb-4",
            children: t2
        }, void 0, false, {
            fileName: "[project]/src/components/board/kanban-board.tsx",
            lineNumber: 46,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[6] = t2;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    return t3;
};
_c = KanbanBoard;
var _c;
__turbopack_context__.k.register(_c, "KanbanBoard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/input.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
const Input = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ label, error, className = '', id, ...props }, ref)=>{
    const inputId = id || label?.toLowerCase().replace(/\s+/g, '-');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                htmlFor: inputId,
                className: "mb-1.5 block text-sm font-medium text-[var(--text-primary)]",
                children: label
            }, void 0, false, {
                fileName: "[project]/src/components/ui/input.tsx",
                lineNumber: 15,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                ref: ref,
                id: inputId,
                className: `
            w-full border border-[var(--border)] bg-[var(--surface)]
            rounded-[var(--radius-md)] px-3.5 py-2 text-sm text-[var(--text-primary)]
            placeholder-[var(--text-tertiary)] outline-none
            transition-all duration-[var(--transition-fast)]
            hover:border-[var(--border-hover)]
            focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/10
            ${error ? 'border-[var(--error)] focus:ring-[var(--error)]/10' : ''}
            ${className}
          `,
                "aria-invalid": error ? 'true' : undefined,
                "aria-describedby": error ? `${inputId}-error` : undefined,
                ...props
            }, void 0, false, {
                fileName: "[project]/src/components/ui/input.tsx",
                lineNumber: 22,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                id: `${inputId}-error`,
                className: "mt-1.5 text-xs text-[var(--error)]",
                role: "alert",
                children: error
            }, void 0, false, {
                fileName: "[project]/src/components/ui/input.tsx",
                lineNumber: 40,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/input.tsx",
        lineNumber: 13,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Input;
Input.displayName = 'Input';
var _c, _c1;
__turbopack_context__.k.register(_c, "Input$forwardRef");
__turbopack_context__.k.register(_c1, "Input");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/select.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Select",
    ()=>Select
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
const Select = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ label, options, error, placeholder, className = '', id, ...props }, ref)=>{
    const selectId = id || label?.toLowerCase().replace(/\s+/g, '-');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                htmlFor: selectId,
                className: "mb-1.5 block text-sm font-medium text-[var(--text-primary)]",
                children: label
            }, void 0, false, {
                fileName: "[project]/src/components/ui/select.tsx",
                lineNumber: 22,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                ref: ref,
                id: selectId,
                className: `
            w-full border border-[var(--border)] bg-[var(--surface)]
            rounded-[var(--radius-md)] px-3.5 py-2 text-sm text-[var(--text-primary)]
            outline-none transition-all duration-[var(--transition-fast)]
            hover:border-[var(--border-hover)]
            focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/10
            ${error ? 'border-[var(--error)] focus:ring-[var(--error)]/10' : ''}
            ${className}
          `,
                "aria-invalid": error ? 'true' : undefined,
                ...props,
                children: [
                    placeholder && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: "",
                        disabled: true,
                        children: placeholder
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/select.tsx",
                        lineNumber: 45,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    options.map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                            value: opt.value,
                            children: opt.label
                        }, opt.value, false, {
                            fileName: "[project]/src/components/ui/select.tsx",
                            lineNumber: 50,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/select.tsx",
                lineNumber: 29,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-1.5 text-xs text-[var(--error)]",
                role: "alert",
                children: error
            }, void 0, false, {
                fileName: "[project]/src/components/ui/select.tsx",
                lineNumber: 56,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 20,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Select;
Select.displayName = 'Select';
var _c, _c1;
__turbopack_context__.k.register(_c, "Select$forwardRef");
__turbopack_context__.k.register(_c1, "Select");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/board/list-view.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ListView",
    ()=>ListView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/types/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/select.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
// --- Sort constants ---
const PRIORITY_SORT_ORDER = {
    urgent: 0,
    high: 1,
    medium: 2,
    low: 3
};
const STATUS_SORT_ORDER = {
    open: 0,
    in_progress: 1,
    review: 2,
    closed: 3,
    deleted: 4
};
// --- Helpers ---
const formatDate = (dateStr)=>new Date(dateStr).toLocaleDateString('en-IN', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    });
const formatDateTime = (dateStr)=>{
    const d = new Date(dateStr);
    return `${d.toLocaleDateString('en-IN', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    })} ${d.toLocaleTimeString('en-IN', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    })}`;
};
const getStatusBadgeColor = (status)=>{
    switch(status){
        case 'open':
            return 'blue';
        case 'in_progress':
        case 'review':
            return 'yellow';
        case 'closed':
            return 'green';
        case 'deleted':
            return 'red';
    }
};
// --- Sort icon ---
const SortIcon = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "255583b4f6bb46d4ed90e37ae06801eecac08a2b51447fe106427619c7e9dd03") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "255583b4f6bb46d4ed90e37ae06801eecac08a2b51447fe106427619c7e9dd03";
    }
    const { field, activeField, dir } = t0;
    if (activeField !== field) {
        let t1;
        if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
            t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "h-3.5 w-3.5 text-[var(--text-tertiary)]",
                viewBox: "0 0 16 16",
                fill: "currentColor",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M8 3l3 4H5l3-4zM5 9h6l-3 4-3-4z"
                }, void 0, false, {
                    fileName: "[project]/src/components/board/list-view.tsx",
                    lineNumber: 89,
                    columnNumber: 109
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/board/list-view.tsx",
                lineNumber: 89,
                columnNumber: 12
            }, ("TURBOPACK compile-time value", void 0));
            $[1] = t1;
        } else {
            t1 = $[1];
        }
        return t1;
    }
    let t1;
    if ($[2] !== dir) {
        t1 = dir === "asc" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "h-3.5 w-3.5 text-[var(--text-primary)]",
            viewBox: "0 0 16 16",
            fill: "currentColor",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8 3l4 5H4l4-5z"
            }, void 0, false, {
                fileName: "[project]/src/components/board/list-view.tsx",
                lineNumber: 98,
                columnNumber: 122
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/board/list-view.tsx",
            lineNumber: 98,
            columnNumber: 26
        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "h-3.5 w-3.5 text-[var(--text-primary)]",
            viewBox: "0 0 16 16",
            fill: "currentColor",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8 13l-4-5h8l-4 5z"
            }, void 0, false, {
                fileName: "[project]/src/components/board/list-view.tsx",
                lineNumber: 98,
                columnNumber: 255
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/board/list-view.tsx",
            lineNumber: 98,
            columnNumber: 159
        }, ("TURBOPACK compile-time value", void 0));
        $[2] = dir;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    return t1;
};
_c = SortIcon;
// --- External link icon ---
const ExternalLinkIcon = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "255583b4f6bb46d4ed90e37ae06801eecac08a2b51447fe106427619c7e9dd03") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "255583b4f6bb46d4ed90e37ae06801eecac08a2b51447fe106427619c7e9dd03";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "h-3 w-3 shrink-0",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            strokeWidth: "2",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
            }, void 0, false, {
                fileName: "[project]/src/components/board/list-view.tsx",
                lineNumber: 119,
                columnNumber: 114
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/board/list-view.tsx",
            lineNumber: 119,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
};
_c1 = ExternalLinkIcon;
const ListView = (t0)=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(150);
    if ($[0] !== "255583b4f6bb46d4ed90e37ae06801eecac08a2b51447fe106427619c7e9dd03") {
        for(let $i = 0; $i < 150; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "255583b4f6bb46d4ed90e37ae06801eecac08a2b51447fe106427619c7e9dd03";
    }
    const { requests, onRowClick, role } = t0;
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [statusFilter, setStatusFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [priorityFilter, setPriorityFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [typeFilter, setTypeFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [assigneeFilter, setAssigneeFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [fromDate, setFromDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [toDate, setToDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [sortField, setSortField] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("createdAt");
    const [sortDir, setSortDir] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("desc");
    const isAdmin = role === "admin";
    const isMember = role === "member";
    const showRequesterCol = !isMember;
    const showAssigneeCol = isAdmin || isMember;
    const showAssigneeFilter = isAdmin;
    const showExport = !isMember;
    const title = isAdmin ? "All Requests" : role === "editor" ? "My Assignments" : "My Requests";
    let t1;
    if ($[1] !== requests) {
        const map = new Map();
        requests.forEach((r)=>{
            if (r.assigneeId && r.assigneeName) {
                map.set(r.assigneeId, r.assigneeName);
            }
        });
        t1 = Array.from(map.entries()).map(_temp);
        $[1] = requests;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const assigneeOptions = t1;
    let result = requests;
    if (search) {
        let t2;
        if ($[3] !== result || $[4] !== search) {
            const q = search.toLowerCase();
            t2 = result.filter((r_0)=>r_0.title.toLowerCase().includes(q) || r_0.description.toLowerCase().includes(q) || r_0.requesterName.toLowerCase().includes(q));
            $[3] = result;
            $[4] = search;
            $[5] = t2;
        } else {
            t2 = $[5];
        }
        result = t2;
    }
    if (statusFilter) {
        let t2;
        if ($[6] !== result || $[7] !== statusFilter) {
            let t3;
            if ($[9] !== statusFilter) {
                t3 = (r_1)=>r_1.status === statusFilter;
                $[9] = statusFilter;
                $[10] = t3;
            } else {
                t3 = $[10];
            }
            t2 = result.filter(t3);
            $[6] = result;
            $[7] = statusFilter;
            $[8] = t2;
        } else {
            t2 = $[8];
        }
        result = t2;
    }
    if (priorityFilter) {
        let t2;
        if ($[11] !== priorityFilter || $[12] !== result) {
            let t3;
            if ($[14] !== priorityFilter) {
                t3 = (r_2)=>r_2.priority === priorityFilter;
                $[14] = priorityFilter;
                $[15] = t3;
            } else {
                t3 = $[15];
            }
            t2 = result.filter(t3);
            $[11] = priorityFilter;
            $[12] = result;
            $[13] = t2;
        } else {
            t2 = $[13];
        }
        result = t2;
    }
    if (typeFilter) {
        let t2;
        if ($[16] !== result || $[17] !== typeFilter) {
            let t3;
            if ($[19] !== typeFilter) {
                t3 = (r_3)=>r_3.type === typeFilter;
                $[19] = typeFilter;
                $[20] = t3;
            } else {
                t3 = $[20];
            }
            t2 = result.filter(t3);
            $[16] = result;
            $[17] = typeFilter;
            $[18] = t2;
        } else {
            t2 = $[18];
        }
        result = t2;
    }
    if (assigneeFilter) {
        let t2;
        if ($[21] !== assigneeFilter || $[22] !== result) {
            let t3;
            if ($[24] !== assigneeFilter) {
                t3 = (r_4)=>r_4.assigneeId === assigneeFilter;
                $[24] = assigneeFilter;
                $[25] = t3;
            } else {
                t3 = $[25];
            }
            t2 = result.filter(t3);
            $[21] = assigneeFilter;
            $[22] = result;
            $[23] = t2;
        } else {
            t2 = $[23];
        }
        result = t2;
    }
    if (fromDate) {
        let t2;
        if ($[26] !== fromDate) {
            t2 = new Date(fromDate);
            $[26] = fromDate;
            $[27] = t2;
        } else {
            t2 = $[27];
        }
        const from = t2;
        let t3;
        if ($[28] !== from || $[29] !== result) {
            let t4;
            if ($[31] !== from) {
                t4 = (r_5)=>new Date(r_5.createdAt) >= from;
                $[31] = from;
                $[32] = t4;
            } else {
                t4 = $[32];
            }
            t3 = result.filter(t4);
            $[28] = from;
            $[29] = result;
            $[30] = t3;
        } else {
            t3 = $[30];
        }
        result = t3;
    }
    if (toDate) {
        let to;
        if ($[33] !== toDate) {
            to = new Date(toDate);
            to.setHours(23, 59, 59, 999);
            $[33] = toDate;
            $[34] = to;
        } else {
            to = $[34];
        }
        let t2;
        if ($[35] !== result || $[36] !== to) {
            let t3;
            if ($[38] !== to) {
                t3 = (r_6)=>new Date(r_6.createdAt) <= to;
                $[38] = to;
                $[39] = t3;
            } else {
                t3 = $[39];
            }
            t2 = result.filter(t3);
            $[35] = result;
            $[36] = to;
            $[37] = t2;
        } else {
            t2 = $[37];
        }
        result = t2;
    }
    const filtered = result;
    const dir = sortDir === "asc" ? 1 : -1;
    let t2;
    if ($[40] !== dir || $[41] !== filtered || $[42] !== sortField) {
        let t3;
        if ($[44] !== dir || $[45] !== sortField) {
            t3 = (a, b)=>{
                switch(sortField){
                    case "title":
                        {
                            return dir * a.title.localeCompare(b.title);
                        }
                    case "priority":
                        {
                            return dir * (PRIORITY_SORT_ORDER[a.priority] - PRIORITY_SORT_ORDER[b.priority]);
                        }
                    case "status":
                        {
                            return dir * (STATUS_SORT_ORDER[a.status] - STATUS_SORT_ORDER[b.status]);
                        }
                    case "dueDate":
                        {
                            const aD = a.dueDate ? new Date(a.dueDate).getTime() : Infinity;
                            const bD = b.dueDate ? new Date(b.dueDate).getTime() : Infinity;
                            return dir * (aD - bD);
                        }
                    case "createdAt":
                        {
                            return dir * (new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
                        }
                    default:
                        {
                            return 0;
                        }
                }
            };
            $[44] = dir;
            $[45] = sortField;
            $[46] = t3;
        } else {
            t3 = $[46];
        }
        t2 = [
            ...filtered
        ].sort(t3);
        $[40] = dir;
        $[41] = filtered;
        $[42] = sortField;
        $[43] = t2;
    } else {
        t2 = $[43];
    }
    const sorted = t2;
    let t3;
    if ($[47] !== sortField) {
        t3 = (field)=>{
            if (sortField === field) {
                setSortDir(_temp2);
            } else {
                setSortField(field);
                setSortDir("asc");
            }
        };
        $[47] = sortField;
        $[48] = t3;
    } else {
        t3 = $[48];
    }
    const toggleSort = t3;
    let t4;
    if ($[49] !== sorted) {
        t4 = ()=>{
            const headers = [
                "Title",
                "Description",
                "Type",
                "Priority",
                "Status",
                "Requester",
                "Requester Email",
                "Assigned To",
                "Due Date",
                "Created",
                "Items",
                "Reference Links",
                "Final Link"
            ];
            const rows = sorted.map(_temp3);
            const csvContent = [
                headers,
                ...rows
            ].map(_temp5).join("\n");
            const blob = new Blob([
                csvContent
            ], {
                type: "text/csv;charset=utf-8;"
            });
            const url = URL.createObjectURL(blob);
            const a_0 = document.createElement("a");
            a_0.href = url;
            a_0.download = `requests-${new Date().toISOString().slice(0, 10)}.csv`;
            a_0.click();
            URL.revokeObjectURL(url);
        };
        $[49] = sorted;
        $[50] = t4;
    } else {
        t4 = $[50];
    }
    const exportCsv = t4;
    const colCount = 9 + (showRequesterCol ? 1 : 0) + (showAssigneeCol ? 1 : 0);
    let t5;
    if ($[51] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = [
            {
                value: "",
                label: "All Status"
            },
            ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["REQUEST_STATUSES"].map(_temp6)
        ];
        $[51] = t5;
    } else {
        t5 = $[51];
    }
    const statusOptions = t5;
    let t6;
    if ($[52] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = [
            {
                value: "",
                label: "All Priority"
            },
            ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["REQUEST_PRIORITIES"].map(_temp7)
        ];
        $[52] = t6;
    } else {
        t6 = $[52];
    }
    const priorityOptions = t6;
    let t7;
    if ($[53] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = [
            {
                value: "",
                label: "All Types"
            },
            ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["REQUEST_TYPES"].map(_temp8)
        ];
        $[53] = t7;
    } else {
        t7 = $[53];
    }
    const typeOptions = t7;
    let t8;
    if ($[54] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = {
            value: "",
            label: "All Assignees"
        };
        $[54] = t8;
    } else {
        t8 = $[54];
    }
    let t9;
    if ($[55] !== assigneeOptions) {
        t9 = [
            t8,
            ...assigneeOptions
        ];
        $[55] = assigneeOptions;
        $[56] = t9;
    } else {
        t9 = $[56];
    }
    const assigneeSelectOptions = t9;
    let t10;
    if ($[57] !== sortDir || $[58] !== sortField || $[59] !== toggleSort) {
        t10 = (t11)=>{
            const { field: field_0, children } = t11;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                className: "cursor-pointer select-none px-4 py-3 text-left text-xs font-medium text-[var(--text-secondary)]",
                onClick: ()=>toggleSort(field_0),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-1",
                    children: [
                        children,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SortIcon, {
                            field: field_0,
                            activeField: sortField,
                            dir: sortDir
                        }, void 0, false, {
                            fileName: "[project]/src/components/board/list-view.tsx",
                            lineNumber: 474,
                            columnNumber: 213
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/board/list-view.tsx",
                    lineNumber: 474,
                    columnNumber: 162
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/board/list-view.tsx",
                lineNumber: 474,
                columnNumber: 14
            }, ("TURBOPACK compile-time value", void 0));
        };
        $[57] = sortDir;
        $[58] = sortField;
        $[59] = toggleSort;
        $[60] = t10;
    } else {
        t10 = $[60];
    }
    const SortTh = t10;
    const PlainTh = _temp9;
    let t11;
    if ($[61] !== title) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-2xl font-semibold tracking-tight text-[var(--text-primary)]",
            children: title
        }, void 0, false, {
            fileName: "[project]/src/components/board/list-view.tsx",
            lineNumber: 487,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[61] = title;
        $[62] = t11;
    } else {
        t11 = $[62];
    }
    let t12;
    if ($[63] !== exportCsv || $[64] !== showExport) {
        t12 = showExport && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            variant: "secondary",
            size: "sm",
            onClick: exportCsv,
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "h-4 w-4",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                strokeWidth: "1.5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                }, void 0, false, {
                    fileName: "[project]/src/components/board/list-view.tsx",
                    lineNumber: 495,
                    columnNumber: 186
                }, void 0)
            }, void 0, false, {
                fileName: "[project]/src/components/board/list-view.tsx",
                lineNumber: 495,
                columnNumber: 89
            }, void 0),
            children: "Export CSV"
        }, void 0, false, {
            fileName: "[project]/src/components/board/list-view.tsx",
            lineNumber: 495,
            columnNumber: 25
        }, ("TURBOPACK compile-time value", void 0));
        $[63] = exportCsv;
        $[64] = showExport;
        $[65] = t12;
    } else {
        t12 = $[65];
    }
    let t13;
    if ($[66] !== requests.length || $[67] !== sorted.length) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "rounded-[var(--radius-md)] border border-[var(--border)] px-3 py-1.5 text-sm text-[var(--text-secondary)]",
            children: [
                sorted.length,
                " of ",
                requests.length
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/list-view.tsx",
            lineNumber: 504,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[66] = requests.length;
        $[67] = sorted.length;
        $[68] = t13;
    } else {
        t13 = $[68];
    }
    let t14;
    if ($[69] !== t12 || $[70] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-3",
            children: [
                t12,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/list-view.tsx",
            lineNumber: 513,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[69] = t12;
        $[70] = t13;
        $[71] = t14;
    } else {
        t14 = $[71];
    }
    let t15;
    if ($[72] !== t11 || $[73] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between",
            children: [
                t11,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/list-view.tsx",
            lineNumber: 522,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[72] = t11;
        $[73] = t14;
        $[74] = t15;
    } else {
        t15 = $[74];
    }
    let t16;
    if ($[75] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "mb-1 block text-xs font-medium text-[var(--text-secondary)]",
            children: "Search"
        }, void 0, false, {
            fileName: "[project]/src/components/board/list-view.tsx",
            lineNumber: 531,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[75] = t16;
    } else {
        t16 = $[75];
    }
    let t17;
    if ($[76] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = (e)=>setSearch(e.target.value);
        $[76] = t17;
    } else {
        t17 = $[76];
    }
    let t18;
    if ($[77] !== search) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-w-[160px] flex-[1.5]",
            children: [
                t16,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                    placeholder: "Search...",
                    value: search,
                    onChange: t17
                }, void 0, false, {
                    fileName: "[project]/src/components/board/list-view.tsx",
                    lineNumber: 545,
                    columnNumber: 58
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/list-view.tsx",
            lineNumber: 545,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[77] = search;
        $[78] = t18;
    } else {
        t18 = $[78];
    }
    let t19;
    if ($[79] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "mb-1 block text-xs font-medium text-[var(--text-secondary)]",
            children: "Status"
        }, void 0, false, {
            fileName: "[project]/src/components/board/list-view.tsx",
            lineNumber: 553,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[79] = t19;
    } else {
        t19 = $[79];
    }
    let t20;
    if ($[80] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = (e_0)=>setStatusFilter(e_0.target.value);
        $[80] = t20;
    } else {
        t20 = $[80];
    }
    let t21;
    if ($[81] !== statusFilter) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-w-[130px] flex-1",
            children: [
                t19,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                    options: statusOptions,
                    value: statusFilter,
                    onChange: t20
                }, void 0, false, {
                    fileName: "[project]/src/components/board/list-view.tsx",
                    lineNumber: 567,
                    columnNumber: 54
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/list-view.tsx",
            lineNumber: 567,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[81] = statusFilter;
        $[82] = t21;
    } else {
        t21 = $[82];
    }
    let t22;
    if ($[83] === Symbol.for("react.memo_cache_sentinel")) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "mb-1 block text-xs font-medium text-[var(--text-secondary)]",
            children: "Priority"
        }, void 0, false, {
            fileName: "[project]/src/components/board/list-view.tsx",
            lineNumber: 575,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[83] = t22;
    } else {
        t22 = $[83];
    }
    let t23;
    if ($[84] === Symbol.for("react.memo_cache_sentinel")) {
        t23 = (e_1)=>setPriorityFilter(e_1.target.value);
        $[84] = t23;
    } else {
        t23 = $[84];
    }
    let t24;
    if ($[85] !== priorityFilter) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-w-[130px] flex-1",
            children: [
                t22,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                    options: priorityOptions,
                    value: priorityFilter,
                    onChange: t23
                }, void 0, false, {
                    fileName: "[project]/src/components/board/list-view.tsx",
                    lineNumber: 589,
                    columnNumber: 54
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/list-view.tsx",
            lineNumber: 589,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[85] = priorityFilter;
        $[86] = t24;
    } else {
        t24 = $[86];
    }
    let t25;
    if ($[87] === Symbol.for("react.memo_cache_sentinel")) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "mb-1 block text-xs font-medium text-[var(--text-secondary)]",
            children: "Type"
        }, void 0, false, {
            fileName: "[project]/src/components/board/list-view.tsx",
            lineNumber: 597,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[87] = t25;
    } else {
        t25 = $[87];
    }
    let t26;
    if ($[88] === Symbol.for("react.memo_cache_sentinel")) {
        t26 = (e_2)=>setTypeFilter(e_2.target.value);
        $[88] = t26;
    } else {
        t26 = $[88];
    }
    let t27;
    if ($[89] !== typeFilter) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-w-[130px] flex-1",
            children: [
                t25,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                    options: typeOptions,
                    value: typeFilter,
                    onChange: t26
                }, void 0, false, {
                    fileName: "[project]/src/components/board/list-view.tsx",
                    lineNumber: 611,
                    columnNumber: 54
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/list-view.tsx",
            lineNumber: 611,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[89] = typeFilter;
        $[90] = t27;
    } else {
        t27 = $[90];
    }
    let t28;
    if ($[91] !== assigneeFilter || $[92] !== assigneeSelectOptions || $[93] !== showAssigneeFilter) {
        t28 = showAssigneeFilter && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-w-[140px] flex-1",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                    className: "mb-1 block text-xs font-medium text-[var(--text-secondary)]",
                    children: "Assignee"
                }, void 0, false, {
                    fileName: "[project]/src/components/board/list-view.tsx",
                    lineNumber: 619,
                    columnNumber: 71
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                    options: assigneeSelectOptions,
                    value: assigneeFilter,
                    onChange: (e_3)=>setAssigneeFilter(e_3.target.value)
                }, void 0, false, {
                    fileName: "[project]/src/components/board/list-view.tsx",
                    lineNumber: 619,
                    columnNumber: 166
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/list-view.tsx",
            lineNumber: 619,
            columnNumber: 33
        }, ("TURBOPACK compile-time value", void 0));
        $[91] = assigneeFilter;
        $[92] = assigneeSelectOptions;
        $[93] = showAssigneeFilter;
        $[94] = t28;
    } else {
        t28 = $[94];
    }
    let t29;
    if ($[95] === Symbol.for("react.memo_cache_sentinel")) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "mb-1 block text-xs font-medium text-[var(--text-secondary)]",
            children: "From Date"
        }, void 0, false, {
            fileName: "[project]/src/components/board/list-view.tsx",
            lineNumber: 629,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[95] = t29;
    } else {
        t29 = $[95];
    }
    let t30;
    if ($[96] === Symbol.for("react.memo_cache_sentinel")) {
        t30 = (e_4)=>setFromDate(e_4.target.value);
        $[96] = t30;
    } else {
        t30 = $[96];
    }
    let t31;
    if ($[97] !== fromDate) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-w-[140px] flex-1",
            children: [
                t29,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                    type: "date",
                    value: fromDate,
                    onChange: t30
                }, void 0, false, {
                    fileName: "[project]/src/components/board/list-view.tsx",
                    lineNumber: 643,
                    columnNumber: 54
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/list-view.tsx",
            lineNumber: 643,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[97] = fromDate;
        $[98] = t31;
    } else {
        t31 = $[98];
    }
    let t32;
    if ($[99] === Symbol.for("react.memo_cache_sentinel")) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "mb-1 block text-xs font-medium text-[var(--text-secondary)]",
            children: "To Date"
        }, void 0, false, {
            fileName: "[project]/src/components/board/list-view.tsx",
            lineNumber: 651,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[99] = t32;
    } else {
        t32 = $[99];
    }
    let t33;
    if ($[100] === Symbol.for("react.memo_cache_sentinel")) {
        t33 = (e_5)=>setToDate(e_5.target.value);
        $[100] = t33;
    } else {
        t33 = $[100];
    }
    let t34;
    if ($[101] !== toDate) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-w-[140px] flex-1",
            children: [
                t32,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                    type: "date",
                    value: toDate,
                    onChange: t33
                }, void 0, false, {
                    fileName: "[project]/src/components/board/list-view.tsx",
                    lineNumber: 665,
                    columnNumber: 54
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/list-view.tsx",
            lineNumber: 665,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[101] = toDate;
        $[102] = t34;
    } else {
        t34 = $[102];
    }
    let t35;
    if ($[103] !== t18 || $[104] !== t21 || $[105] !== t24 || $[106] !== t27 || $[107] !== t28 || $[108] !== t31 || $[109] !== t34) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-wrap gap-3 rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] p-4",
            children: [
                t18,
                t21,
                t24,
                t27,
                t28,
                t31,
                t34
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/list-view.tsx",
            lineNumber: 673,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[103] = t18;
        $[104] = t21;
        $[105] = t24;
        $[106] = t27;
        $[107] = t28;
        $[108] = t31;
        $[109] = t34;
        $[110] = t35;
    } else {
        t35 = $[110];
    }
    let t36;
    if ($[111] !== SortTh) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SortTh, {
            field: "title",
            children: "Title"
        }, void 0, false, {
            fileName: "[project]/src/components/board/list-view.tsx",
            lineNumber: 687,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[111] = SortTh;
        $[112] = t36;
    } else {
        t36 = $[112];
    }
    let t37;
    if ($[113] === Symbol.for("react.memo_cache_sentinel")) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PlainTh, {
            children: "Type"
        }, void 0, false, {
            fileName: "[project]/src/components/board/list-view.tsx",
            lineNumber: 695,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[113] = t37;
    } else {
        t37 = $[113];
    }
    let t38;
    let t39;
    if ($[114] !== SortTh) {
        t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SortTh, {
            field: "priority",
            children: "Priority"
        }, void 0, false, {
            fileName: "[project]/src/components/board/list-view.tsx",
            lineNumber: 703,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SortTh, {
            field: "status",
            children: "Status"
        }, void 0, false, {
            fileName: "[project]/src/components/board/list-view.tsx",
            lineNumber: 704,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[114] = SortTh;
        $[115] = t38;
        $[116] = t39;
    } else {
        t38 = $[115];
        t39 = $[116];
    }
    let t40;
    if ($[117] !== showRequesterCol) {
        t40 = showRequesterCol && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PlainTh, {
            children: "Requester"
        }, void 0, false, {
            fileName: "[project]/src/components/board/list-view.tsx",
            lineNumber: 714,
            columnNumber: 31
        }, ("TURBOPACK compile-time value", void 0));
        $[117] = showRequesterCol;
        $[118] = t40;
    } else {
        t40 = $[118];
    }
    let t41;
    if ($[119] !== showAssigneeCol) {
        t41 = showAssigneeCol && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PlainTh, {
            children: "Assigned To"
        }, void 0, false, {
            fileName: "[project]/src/components/board/list-view.tsx",
            lineNumber: 722,
            columnNumber: 30
        }, ("TURBOPACK compile-time value", void 0));
        $[119] = showAssigneeCol;
        $[120] = t41;
    } else {
        t41 = $[120];
    }
    let t42;
    let t43;
    if ($[121] !== SortTh) {
        t42 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SortTh, {
            field: "dueDate",
            children: "Due Date"
        }, void 0, false, {
            fileName: "[project]/src/components/board/list-view.tsx",
            lineNumber: 731,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        t43 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SortTh, {
            field: "createdAt",
            children: "Created"
        }, void 0, false, {
            fileName: "[project]/src/components/board/list-view.tsx",
            lineNumber: 732,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[121] = SortTh;
        $[122] = t42;
        $[123] = t43;
    } else {
        t42 = $[122];
        t43 = $[123];
    }
    let t44;
    let t45;
    let t46;
    if ($[124] === Symbol.for("react.memo_cache_sentinel")) {
        t44 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PlainTh, {
            children: "Items"
        }, void 0, false, {
            fileName: "[project]/src/components/board/list-view.tsx",
            lineNumber: 744,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        t45 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PlainTh, {
            children: "Links"
        }, void 0, false, {
            fileName: "[project]/src/components/board/list-view.tsx",
            lineNumber: 745,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        t46 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PlainTh, {
            children: "Final Link"
        }, void 0, false, {
            fileName: "[project]/src/components/board/list-view.tsx",
            lineNumber: 746,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[124] = t44;
        $[125] = t45;
        $[126] = t46;
    } else {
        t44 = $[124];
        t45 = $[125];
        t46 = $[126];
    }
    let t47;
    if ($[127] !== t36 || $[128] !== t38 || $[129] !== t39 || $[130] !== t40 || $[131] !== t41 || $[132] !== t42 || $[133] !== t43) {
        t47 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                className: "border-b border-[var(--border)] bg-[var(--surface-secondary)]",
                children: [
                    t36,
                    t37,
                    t38,
                    t39,
                    t40,
                    t41,
                    t42,
                    t43,
                    t44,
                    t45,
                    t46
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/board/list-view.tsx",
                lineNumber: 757,
                columnNumber: 18
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/board/list-view.tsx",
            lineNumber: 757,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[127] = t36;
        $[128] = t38;
        $[129] = t39;
        $[130] = t40;
        $[131] = t41;
        $[132] = t42;
        $[133] = t43;
        $[134] = t47;
    } else {
        t47 = $[134];
    }
    let t48;
    if ($[135] !== colCount || $[136] !== onRowClick || $[137] !== showAssigneeCol || $[138] !== showRequesterCol || $[139] !== sorted) {
        t48 = sorted.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                colSpan: colCount,
                className: "px-4 py-12 text-center text-sm text-[var(--text-tertiary)]",
                children: "No requests found"
            }, void 0, false, {
                fileName: "[project]/src/components/board/list-view.tsx",
                lineNumber: 771,
                columnNumber: 37
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/board/list-view.tsx",
            lineNumber: 771,
            columnNumber: 33
        }, ("TURBOPACK compile-time value", void 0)) : sorted.map((req)=>{
            const pCfg = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PRIORITY_CONFIG"][req.priority];
            const sColor = getStatusBadgeColor(req.status);
            const isDeleted = req.status === "deleted";
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                onClick: ()=>onRowClick(req),
                className: `cursor-pointer border-b border-[var(--border)] last:border-b-0 transition-colors duration-[var(--transition-fast)] hover:bg-[var(--surface-hover)] ${isDeleted ? "bg-red-50/50 line-through decoration-red-400/60" : ""}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                        className: "max-w-[240px] px-4 py-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "truncate text-sm font-medium text-[var(--text-primary)]",
                                children: req.title
                            }, void 0, false, {
                                fileName: "[project]/src/components/board/list-view.tsx",
                                lineNumber: 775,
                                columnNumber: 334
                            }, ("TURBOPACK compile-time value", void 0)),
                            req.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-0.5 truncate text-xs text-[var(--text-tertiary)]",
                                children: req.description
                            }, void 0, false, {
                                fileName: "[project]/src/components/board/list-view.tsx",
                                lineNumber: 775,
                                columnNumber: 444
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/board/list-view.tsx",
                        lineNumber: 775,
                        columnNumber: 294
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                        className: "whitespace-nowrap px-4 py-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-1.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["REQUEST_TYPE_ICONS"][req.type]
                                }, void 0, false, {
                                    fileName: "[project]/src/components/board/list-view.tsx",
                                    lineNumber: 775,
                                    columnNumber: 629
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm text-[var(--text-secondary)]",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["REQUEST_TYPE_LABELS"][req.type]
                                }, void 0, false, {
                                    fileName: "[project]/src/components/board/list-view.tsx",
                                    lineNumber: 775,
                                    columnNumber: 692
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/board/list-view.tsx",
                            lineNumber: 775,
                            columnNumber: 586
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/board/list-view.tsx",
                        lineNumber: 775,
                        columnNumber: 542
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                        className: "px-4 py-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                            color: pCfg.color,
                            variant: req.priority === "urgent" ? "filled" : "default",
                            children: pCfg.label
                        }, void 0, false, {
                            fileName: "[project]/src/components/board/list-view.tsx",
                            lineNumber: 775,
                            columnNumber: 822
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/board/list-view.tsx",
                        lineNumber: 775,
                        columnNumber: 796
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                        className: "px-4 py-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                            color: sColor,
                            variant: "default",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["REQUEST_STATUS_LABELS"][req.status]
                        }, void 0, false, {
                            fileName: "[project]/src/components/board/list-view.tsx",
                            lineNumber: 775,
                            columnNumber: 958
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/board/list-view.tsx",
                        lineNumber: 775,
                        columnNumber: 932
                    }, ("TURBOPACK compile-time value", void 0)),
                    showRequesterCol && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                        className: "px-4 py-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm font-medium text-[var(--text-primary)]",
                                children: req.requesterName
                            }, void 0, false, {
                                fileName: "[project]/src/components/board/list-view.tsx",
                                lineNumber: 775,
                                columnNumber: 1093
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-[var(--text-tertiary)]",
                                children: req.requesterEmail
                            }, void 0, false, {
                                fileName: "[project]/src/components/board/list-view.tsx",
                                lineNumber: 775,
                                columnNumber: 1182
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/board/list-view.tsx",
                        lineNumber: 775,
                        columnNumber: 1067
                    }, ("TURBOPACK compile-time value", void 0)),
                    showAssigneeCol && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                        className: "px-4 py-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-sm text-[var(--text-secondary)]",
                            children: req.assigneeName || "\u2014"
                        }, void 0, false, {
                            fileName: "[project]/src/components/board/list-view.tsx",
                            lineNumber: 775,
                            columnNumber: 1313
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/board/list-view.tsx",
                        lineNumber: 775,
                        columnNumber: 1287
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                        className: "whitespace-nowrap px-4 py-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-sm text-[var(--text-secondary)]",
                            children: req.dueDate ? formatDate(req.dueDate) : "\u2014"
                        }, void 0, false, {
                            fileName: "[project]/src/components/board/list-view.tsx",
                            lineNumber: 775,
                            columnNumber: 1455
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/board/list-view.tsx",
                        lineNumber: 775,
                        columnNumber: 1411
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                        className: "whitespace-nowrap px-4 py-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs text-[var(--text-tertiary)]",
                            children: formatDateTime(req.createdAt)
                        }, void 0, false, {
                            fileName: "[project]/src/components/board/list-view.tsx",
                            lineNumber: 775,
                            columnNumber: 1616
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/board/list-view.tsx",
                        lineNumber: 775,
                        columnNumber: 1572
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                        className: "px-4 py-3 text-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-sm font-semibold text-[var(--error)]",
                            children: req.totalItems ?? 1
                        }, void 0, false, {
                            fileName: "[project]/src/components/board/list-view.tsx",
                            lineNumber: 775,
                            columnNumber: 1751
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/board/list-view.tsx",
                        lineNumber: 775,
                        columnNumber: 1713
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                        className: "px-4 py-3",
                        children: req.referenceLinks.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-1",
                            children: req.referenceLinks.map(_temp11)
                        }, void 0, false, {
                            fileName: "[project]/src/components/board/list-view.tsx",
                            lineNumber: 775,
                            columnNumber: 1903
                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs text-[var(--text-tertiary)]",
                            children: "—"
                        }, void 0, false, {
                            fileName: "[project]/src/components/board/list-view.tsx",
                            lineNumber: 775,
                            columnNumber: 1982
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/board/list-view.tsx",
                        lineNumber: 775,
                        columnNumber: 1844
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                        className: "px-4 py-3",
                        children: req.finalLink ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: req.finalLink,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            onClick: _temp12,
                            className: "inline-flex items-center gap-1 text-xs font-medium text-[var(--primary)] hover:text-[var(--primary-hover)]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ExternalLinkIcon, {}, void 0, false, {
                                    fileName: "[project]/src/components/board/list-view.tsx",
                                    lineNumber: 775,
                                    columnNumber: 2296
                                }, ("TURBOPACK compile-time value", void 0)),
                                "Final"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/board/list-view.tsx",
                            lineNumber: 775,
                            columnNumber: 2093
                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs text-[var(--text-tertiary)]",
                            children: "—"
                        }, void 0, false, {
                            fileName: "[project]/src/components/board/list-view.tsx",
                            lineNumber: 775,
                            columnNumber: 2328
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/board/list-view.tsx",
                        lineNumber: 775,
                        columnNumber: 2050
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, req.id, true, {
                fileName: "[project]/src/components/board/list-view.tsx",
                lineNumber: 775,
                columnNumber: 14
            }, ("TURBOPACK compile-time value", void 0));
        });
        $[135] = colCount;
        $[136] = onRowClick;
        $[137] = showAssigneeCol;
        $[138] = showRequesterCol;
        $[139] = sorted;
        $[140] = t48;
    } else {
        t48 = $[140];
    }
    let t49;
    if ($[141] !== t48) {
        t49 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
            children: t48
        }, void 0, false, {
            fileName: "[project]/src/components/board/list-view.tsx",
            lineNumber: 788,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[141] = t48;
        $[142] = t49;
    } else {
        t49 = $[142];
    }
    let t50;
    if ($[143] !== t47 || $[144] !== t49) {
        t50 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "overflow-x-auto rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                className: "w-full min-w-[1100px]",
                children: [
                    t47,
                    t49
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/board/list-view.tsx",
                lineNumber: 796,
                columnNumber: 121
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/board/list-view.tsx",
            lineNumber: 796,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[143] = t47;
        $[144] = t49;
        $[145] = t50;
    } else {
        t50 = $[145];
    }
    let t51;
    if ($[146] !== t15 || $[147] !== t35 || $[148] !== t50) {
        t51 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4",
            children: [
                t15,
                t35,
                t50
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/list-view.tsx",
            lineNumber: 805,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[146] = t15;
        $[147] = t35;
        $[148] = t50;
        $[149] = t51;
    } else {
        t51 = $[149];
    }
    return t51;
};
_s(ListView, "QqU9P43CeGv2OOYzu9NNn68P7DA=");
_c2 = ListView;
function _temp(t0) {
    const [value, label] = t0;
    return {
        value,
        label
    };
}
function _temp2(prev) {
    return prev === "asc" ? "desc" : "asc";
}
function _temp3(r_7) {
    return [
        r_7.title,
        r_7.description,
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["REQUEST_TYPE_LABELS"][r_7.type],
        r_7.priority,
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["REQUEST_STATUS_LABELS"][r_7.status],
        r_7.requesterName,
        r_7.requesterEmail,
        r_7.assigneeName || "",
        r_7.dueDate || "",
        r_7.createdAt,
        String(r_7.totalItems ?? 1),
        r_7.referenceLinks.join(" | "),
        r_7.finalLink || ""
    ];
}
function _temp4(cell) {
    return `"${cell.replace(/"/g, "\"\"")}"`;
}
function _temp5(row) {
    return row.map(_temp4).join(",");
}
function _temp6(s) {
    return {
        value: s,
        label: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["REQUEST_STATUS_LABELS"][s]
    };
}
function _temp7(p) {
    return {
        value: p,
        label: p.charAt(0).toUpperCase() + p.slice(1)
    };
}
function _temp8(t) {
    return {
        value: t,
        label: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["REQUEST_TYPE_LABELS"][t]
    };
}
function _temp9(t0) {
    const { children: children_0 } = t0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
        className: "px-4 py-3 text-left text-xs font-medium text-[var(--text-secondary)]",
        children: children_0
    }, void 0, false, {
        fileName: "[project]/src/components/board/list-view.tsx",
        lineNumber: 856,
        columnNumber: 10
    }, this);
}
function _temp10(e_6) {
    return e_6.stopPropagation();
}
function _temp11(link, i) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        href: link,
        target: "_blank",
        rel: "noopener noreferrer",
        onClick: _temp10,
        className: "inline-flex items-center gap-1 text-xs font-medium text-[var(--primary)] hover:text-[var(--primary-hover)]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ExternalLinkIcon, {}, void 0, false, {
                fileName: "[project]/src/components/board/list-view.tsx",
                lineNumber: 862,
                columnNumber: 212
            }, this),
            "Link ",
            i + 1
        ]
    }, i, true, {
        fileName: "[project]/src/components/board/list-view.tsx",
        lineNumber: 862,
        columnNumber: 10
    }, this);
}
function _temp12(e_7) {
    return e_7.stopPropagation();
}
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "SortIcon");
__turbopack_context__.k.register(_c1, "ExternalLinkIcon");
__turbopack_context__.k.register(_c2, "ListView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/stores/team-store.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTeamStore",
    ()=>useTeamStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
;
// Initial team matching the screenshots
const INITIAL_MEMBERS = [
    {
        id: 'u1',
        name: 'Manan',
        email: 'manan.gupta@adda247.com',
        role: 'owner'
    },
    {
        id: 'u2',
        name: 'Akshata Jadhav',
        email: 'akshata.jadhav@adda247.com',
        role: 'admin'
    },
    {
        id: 'u3',
        name: 'Priyanshu Khandelwal',
        email: 'priyanshu.khandelwal@adda247.com',
        role: 'editor'
    },
    {
        id: 'u4',
        name: 'Simarpreet Singh',
        email: 'simarpreet.singh@adda247.com',
        role: 'editor'
    },
    {
        id: 'u5',
        name: 'Faizan',
        email: 'faizan@adda247.com',
        role: 'editor'
    },
    {
        id: 'u6',
        name: 'Akasthiyan Ramachandran',
        email: 'akasthiyan.r@adda247.com',
        role: 'editor'
    },
    {
        id: 'u7',
        name: 'Sanjay',
        email: 'sanjay.s@adda247.com',
        role: 'member'
    },
    {
        id: 'u8',
        name: 'Janpreet',
        email: 'janpreet.ch@adda247.com',
        role: 'member'
    },
    {
        id: 'u9',
        name: 'Pushpak',
        email: 'pushpak.pr@adda247.com',
        role: 'editor'
    },
    {
        id: 'u10',
        name: 'Sheikh Rejaul',
        email: 'rejaul.mon@adda247.com',
        role: 'admin'
    },
    {
        id: 'u11',
        name: 'Rahul Kumar',
        email: 'rahul.kumar@adda247.com',
        role: 'editor'
    }
];
const useTeamStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])((set, get)=>({
        members: INITIAL_MEMBERS,
        addMember: (member)=>{
            set((state)=>{
                if (state.members.some((m)=>m.id === member.id)) return state;
                return {
                    members: [
                        ...state.members,
                        member
                    ]
                };
            });
        },
        removeMember: (id)=>{
            set((state)=>({
                    members: state.members.filter((m)=>m.id !== id)
                }));
        },
        updateRole: (id, role)=>{
            set((state)=>({
                    members: state.members.map((m)=>m.id === id ? {
                            ...m,
                            role
                        } : m)
                }));
        },
        getMemberById: (id)=>{
            return get().members.find((m)=>m.id === id);
        },
        getEditors: ()=>{
            return get().members.filter((m)=>m.role === 'editor');
        }
    }));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/board/dashboard-overview.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DashboardOverview",
    ()=>DashboardOverview
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$LineChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/LineChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/Line.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/XAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/YAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/CartesianGrid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Tooltip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Legend.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$PieChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/PieChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$Pie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/polar/Pie.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Cell.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/BarChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/Bar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/ResponsiveContainer.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
// ============================================
// CONSTANTS
// ============================================
const DESIGN_TYPES = [
    'design_graphics',
    'ui_ux'
];
const VIDEO_TYPES = [
    'video'
];
const CHART_COLORS = {
    primary: '#2383e2',
    green: '#22c55e',
    purple: '#8b5cf6',
    orange: '#f97316',
    red: '#ef4444',
    amber: '#f59e0b',
    blue: '#3b82f6',
    gray: '#9ca3af'
};
const STATUS_COLORS = {
    open: CHART_COLORS.blue,
    review: CHART_COLORS.purple,
    closed: CHART_COLORS.green,
    in_progress: CHART_COLORS.amber
};
const PRIORITY_BAR_COLOR = CHART_COLORS.orange;
// ============================================
// ICONS
// ============================================
const ClockAlertIcon = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "2367a6dec86b74d3c5cc969c4b5e244251f6fbdd735d9524e1f459fbab505455") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "2367a6dec86b74d3c5cc969c4b5e244251f6fbdd735d9524e1f459fbab505455";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "18",
            height: "18",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            viewBox: "0 0 24 24",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "12",
                    cy: "12",
                    r: "10"
                }, void 0, false, {
                    fileName: "[project]/src/components/board/dashboard-overview.tsx",
                    lineNumber: 46,
                    columnNumber: 155
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                    points: "12 6 12 12 16 14"
                }, void 0, false, {
                    fileName: "[project]/src/components/board/dashboard-overview.tsx",
                    lineNumber: 46,
                    columnNumber: 188
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/dashboard-overview.tsx",
            lineNumber: 46,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
};
_c = ClockAlertIcon;
// ============================================
// HELPERS
// ============================================
const formatWeekLabel = (date)=>date.toLocaleDateString('en-US', {
        month: 'short',
        day: '2-digit'
    });
const daysBetween = (a, b)=>Math.floor((b.getTime() - a.getTime()) / (1000 * 60 * 60 * 24));
const ChartCard = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(8);
    if ($[0] !== "2367a6dec86b74d3c5cc969c4b5e244251f6fbdd735d9524e1f459fbab505455") {
        for(let $i = 0; $i < 8; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "2367a6dec86b74d3c5cc969c4b5e244251f6fbdd735d9524e1f459fbab505455";
    }
    const { title, icon, children, className: t1 } = t0;
    const className = t1 === undefined ? "" : t1;
    const t2 = `rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] p-6 ${className}`;
    let t3;
    if ($[1] !== icon || $[2] !== title) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "mb-4 flex items-center gap-2 text-sm font-bold text-[var(--text-primary)]",
            children: [
                icon,
                title
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/dashboard-overview.tsx",
            lineNumber: 92,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = icon;
        $[2] = title;
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    let t4;
    if ($[4] !== children || $[5] !== t2 || $[6] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t2,
            children: [
                t3,
                children
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/dashboard-overview.tsx",
            lineNumber: 101,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[4] = children;
        $[5] = t2;
        $[6] = t3;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    return t4;
};
_c1 = ChartCard;
const useRequestTrends = (requests, from, to)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "2367a6dec86b74d3c5cc969c4b5e244251f6fbdd735d9524e1f459fbab505455") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "2367a6dec86b74d3c5cc969c4b5e244251f6fbdd735d9524e1f459fbab505455";
    }
    let weeks;
    if ($[1] !== from || $[2] !== requests || $[3] !== to) {
        weeks = [];
        const current = new Date(from);
        current.setDate(current.getDate() - current.getDay());
        while(current <= to){
            const weekEnd = new Date(current);
            weekEnd.setDate(weekEnd.getDate() + 6);
            weekEnd.setHours(23, 59, 59, 999);
            const created = requests.filter((r)=>{
                const d = new Date(r.createdAt);
                return d >= current && d <= weekEnd;
            }).length;
            const closed = requests.filter((r_0)=>{
                if (r_0.status !== "closed" && r_0.status !== "deleted") {
                    return false;
                }
                const d_0 = new Date(r_0.createdAt);
                return d_0 >= current && d_0 <= weekEnd;
            }).length;
            weeks.push({
                label: formatWeekLabel(current),
                created,
                closed
            });
            const next = new Date(current);
            next.setDate(next.getDate() + 7);
            current.setTime(next.getTime());
        }
        $[1] = from;
        $[2] = requests;
        $[3] = to;
        $[4] = weeks;
    } else {
        weeks = $[4];
    }
    return weeks;
};
const RequestTrendsChart = (t0)=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(18);
    if ($[0] !== "2367a6dec86b74d3c5cc969c4b5e244251f6fbdd735d9524e1f459fbab505455") {
        for(let $i = 0; $i < 18; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "2367a6dec86b74d3c5cc969c4b5e244251f6fbdd735d9524e1f459fbab505455";
    }
    const { requests, from, to } = t0;
    const data = useRequestTrends(requests, from, to);
    let t1;
    if ($[1] !== from) {
        t1 = formatWeekLabel(from);
        $[1] = from;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const fromLabel = t1;
    let t2;
    if ($[3] !== to) {
        t2 = formatWeekLabel(to);
        $[3] = to;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    const toLabel = t2;
    const t3 = `Request Trends (${fromLabel} - ${toLabel})`;
    let t4;
    let t5;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = {
            top: 5,
            right: 20,
            bottom: 5,
            left: 0
        };
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
            strokeDasharray: "3 3",
            stroke: "var(--border)"
        }, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-overview.tsx",
            lineNumber: 209,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[5] = t4;
        $[6] = t5;
    } else {
        t4 = $[5];
        t5 = $[6];
    }
    let t6;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
            dataKey: "label",
            tick: {
                fontSize: 12,
                fill: "var(--text-tertiary)"
            }
        }, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-overview.tsx",
            lineNumber: 218,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    let t7;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
            tick: {
                fontSize: 12,
                fill: "var(--text-tertiary)"
            }
        }, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-overview.tsx",
            lineNumber: 228,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[8] = t7;
    } else {
        t7 = $[8];
    }
    let t8;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
            contentStyle: {
                backgroundColor: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius-md)",
                fontSize: 12
            }
        }, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-overview.tsx",
            lineNumber: 238,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[9] = t8;
    } else {
        t8 = $[9];
    }
    let t9;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Legend"], {
            iconType: "circle",
            wrapperStyle: {
                fontSize: 12
            }
        }, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-overview.tsx",
            lineNumber: 250,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[10] = t9;
    } else {
        t9 = $[10];
    }
    let t10;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
            type: "monotone",
            dataKey: "created",
            stroke: CHART_COLORS.primary,
            strokeWidth: 2,
            dot: {
                r: 4
            },
            name: "Created"
        }, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-overview.tsx",
            lineNumber: 259,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[11] = t10;
    } else {
        t10 = $[11];
    }
    let t11;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
            type: "monotone",
            dataKey: "closed",
            stroke: CHART_COLORS.green,
            strokeWidth: 2,
            dot: {
                r: 4
            },
            name: "Closed"
        }, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-overview.tsx",
            lineNumber: 268,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[12] = t11;
    } else {
        t11 = $[12];
    }
    let t12;
    if ($[13] !== data) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
            width: "100%",
            height: 220,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$LineChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineChart"], {
                data: data,
                margin: t4,
                children: [
                    t5,
                    t6,
                    t7,
                    t8,
                    t9,
                    t10,
                    t11
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/board/dashboard-overview.tsx",
                lineNumber: 277,
                columnNumber: 58
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-overview.tsx",
            lineNumber: 277,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[13] = data;
        $[14] = t12;
    } else {
        t12 = $[14];
    }
    let t13;
    if ($[15] !== t12 || $[16] !== t3) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChartCard, {
            title: t3,
            children: t12
        }, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-overview.tsx",
            lineNumber: 285,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[15] = t12;
        $[16] = t3;
        $[17] = t13;
    } else {
        t13 = $[17];
    }
    return t13;
};
_s(RequestTrendsChart, "Fc7hcxHIlU368eeIZY7Fq9MSkiI=", false, function() {
    return [
        useRequestTrends
    ];
});
_c2 = RequestTrendsChart;
// ============================================
// REQUEST TYPES (Donut Chart)
// ============================================
const RequestTypesChart = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(21);
    if ($[0] !== "2367a6dec86b74d3c5cc969c4b5e244251f6fbdd735d9524e1f459fbab505455") {
        for(let $i = 0; $i < 21; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "2367a6dec86b74d3c5cc969c4b5e244251f6fbdd735d9524e1f459fbab505455";
    }
    const { requests } = t0;
    let t1;
    if ($[1] !== requests) {
        t1 = requests.filter(_temp);
        $[1] = requests;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const designCount = t1.length;
    let t2;
    if ($[3] !== requests) {
        t2 = requests.filter(_temp2);
        $[3] = requests;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    const videoCount = t2.length;
    let t3;
    if ($[5] !== designCount) {
        t3 = {
            name: "Design",
            value: designCount,
            color: CHART_COLORS.purple
        };
        $[5] = designCount;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    let t4;
    if ($[7] !== videoCount) {
        t4 = {
            name: "Video",
            value: videoCount,
            color: CHART_COLORS.orange
        };
        $[7] = videoCount;
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    let t5;
    if ($[9] !== t3 || $[10] !== t4) {
        t5 = [
            t3,
            t4
        ];
        $[9] = t3;
        $[10] = t4;
        $[11] = t5;
    } else {
        t5 = $[11];
    }
    const data = t5;
    let t6;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = {
            stroke: "var(--text-tertiary)"
        };
        $[12] = t6;
    } else {
        t6 = $[12];
    }
    let t7;
    if ($[13] !== data) {
        t7 = data.map(_temp4);
        $[13] = data;
        $[14] = t7;
    } else {
        t7 = $[14];
    }
    let t8;
    if ($[15] !== data || $[16] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$Pie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Pie"], {
            data: data,
            cx: "50%",
            cy: "50%",
            innerRadius: 55,
            outerRadius: 80,
            paddingAngle: 2,
            dataKey: "value",
            label: _temp3,
            labelLine: t6,
            children: t7
        }, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-overview.tsx",
            lineNumber: 381,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[15] = data;
        $[16] = t7;
        $[17] = t8;
    } else {
        t8 = $[17];
    }
    let t9;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Legend"], {
            iconType: "square",
            wrapperStyle: {
                fontSize: 12
            }
        }, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-overview.tsx",
            lineNumber: 390,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[18] = t9;
    } else {
        t9 = $[18];
    }
    let t10;
    if ($[19] !== t8) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChartCard, {
            title: "Request Types",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                    width: "100%",
                    height: 200,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$PieChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PieChart"], {
                        children: [
                            t8,
                            t9
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/board/dashboard-overview.tsx",
                        lineNumber: 399,
                        columnNumber: 141
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/board/dashboard-overview.tsx",
                    lineNumber: 399,
                    columnNumber: 94
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/board/dashboard-overview.tsx",
                lineNumber: 399,
                columnNumber: 44
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-overview.tsx",
            lineNumber: 399,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[19] = t8;
        $[20] = t10;
    } else {
        t10 = $[20];
    }
    return t10;
};
_c3 = RequestTypesChart;
// ============================================
// ACTIVE REQUESTS BY PRIORITY (Bar Chart)
// ============================================
const ActiveByPriorityChart = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(11);
    if ($[0] !== "2367a6dec86b74d3c5cc969c4b5e244251f6fbdd735d9524e1f459fbab505455") {
        for(let $i = 0; $i < 11; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "2367a6dec86b74d3c5cc969c4b5e244251f6fbdd735d9524e1f459fbab505455";
    }
    const { requests } = t0;
    let t1;
    if ($[1] !== requests) {
        const active = requests.filter(_temp5);
        t1 = [
            "low",
            "medium",
            "high",
            "urgent"
        ].map((p)=>({
                priority: p.charAt(0).toUpperCase() + p.slice(1),
                count: active.filter((r_0)=>r_0.priority === p).length
            }));
        $[1] = requests;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const data = t1;
    let t2;
    let t3;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {
            top: 5,
            right: 10,
            bottom: 5,
            left: 0
        };
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
            strokeDasharray: "3 3",
            stroke: "var(--border)"
        }, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-overview.tsx",
            lineNumber: 445,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[3] = t2;
        $[4] = t3;
    } else {
        t2 = $[3];
        t3 = $[4];
    }
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
            dataKey: "priority",
            tick: {
                fontSize: 11,
                fill: "var(--text-tertiary)"
            }
        }, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-overview.tsx",
            lineNumber: 454,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
            tick: {
                fontSize: 11,
                fill: "var(--text-tertiary)"
            }
        }, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-overview.tsx",
            lineNumber: 464,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
            contentStyle: {
                backgroundColor: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius-md)",
                fontSize: 12
            }
        }, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-overview.tsx",
            lineNumber: 474,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    let t7;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
            dataKey: "count",
            fill: PRIORITY_BAR_COLOR,
            radius: [
                4,
                4,
                0,
                0
            ]
        }, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-overview.tsx",
            lineNumber: 486,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[8] = t7;
    } else {
        t7 = $[8];
    }
    let t8;
    if ($[9] !== data) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChartCard, {
            title: "Active Requests by Priority",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                width: "100%",
                height: 200,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BarChart"], {
                    data: data,
                    margin: t2,
                    children: [
                        t3,
                        t4,
                        t5,
                        t6,
                        t7
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/board/dashboard-overview.tsx",
                    lineNumber: 493,
                    columnNumber: 104
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/board/dashboard-overview.tsx",
                lineNumber: 493,
                columnNumber: 57
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-overview.tsx",
            lineNumber: 493,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[9] = data;
        $[10] = t8;
    } else {
        t8 = $[10];
    }
    return t8;
};
_c4 = ActiveByPriorityChart;
// ============================================
// DUE DATE COMPLIANCE (Donut Chart)
// ============================================
const DueDateComplianceChart = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(39);
    if ($[0] !== "2367a6dec86b74d3c5cc969c4b5e244251f6fbdd735d9524e1f459fbab505455") {
        for(let $i = 0; $i < 39; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "2367a6dec86b74d3c5cc969c4b5e244251f6fbdd735d9524e1f459fbab505455";
    }
    const { requests } = t0;
    let t1;
    let withDue;
    if ($[1] !== requests) {
        withDue = requests.filter(_temp6);
        t1 = withDue.filter(_temp7);
        $[1] = requests;
        $[2] = t1;
        $[3] = withDue;
    } else {
        t1 = $[2];
        withDue = $[3];
    }
    const onTimeCount = t1.length;
    const lateCount = withDue.length - onTimeCount;
    let t2;
    if ($[4] !== onTimeCount || $[5] !== withDue.length) {
        t2 = withDue.length > 0 ? Math.round(onTimeCount / withDue.length * 100) : 0;
        $[4] = onTimeCount;
        $[5] = withDue.length;
        $[6] = t2;
    } else {
        t2 = $[6];
    }
    let t3;
    if ($[7] !== lateCount || $[8] !== onTimeCount || $[9] !== t2 || $[10] !== withDue.length) {
        t3 = {
            onTime: onTimeCount,
            late: lateCount,
            total: withDue.length,
            pct: t2
        };
        $[7] = lateCount;
        $[8] = onTimeCount;
        $[9] = t2;
        $[10] = withDue.length;
        $[11] = t3;
    } else {
        t3 = $[11];
    }
    const { onTime, late, total, pct } = t3;
    let t4;
    if ($[12] !== onTime) {
        t4 = {
            name: "On Time",
            value: onTime,
            color: CHART_COLORS.green
        };
        $[12] = onTime;
        $[13] = t4;
    } else {
        t4 = $[13];
    }
    let t5;
    if ($[14] !== late) {
        t5 = {
            name: "Late",
            value: late,
            color: CHART_COLORS.red
        };
        $[14] = late;
        $[15] = t5;
    } else {
        t5 = $[15];
    }
    let t6;
    if ($[16] !== t4 || $[17] !== t5) {
        t6 = [
            t4,
            t5
        ];
        $[16] = t4;
        $[17] = t5;
        $[18] = t6;
    } else {
        t6 = $[18];
    }
    const data = t6;
    let t7;
    if ($[19] !== data) {
        t7 = data.map(_temp8);
        $[19] = data;
        $[20] = t7;
    } else {
        t7 = $[20];
    }
    let t8;
    if ($[21] !== data || $[22] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$Pie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Pie"], {
            data: data,
            cx: "50%",
            cy: "50%",
            innerRadius: 45,
            outerRadius: 65,
            paddingAngle: 2,
            dataKey: "value",
            children: t7
        }, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-overview.tsx",
            lineNumber: 606,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[21] = data;
        $[22] = t7;
        $[23] = t8;
    } else {
        t8 = $[23];
    }
    let t9;
    if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Legend"], {
            iconType: "square",
            wrapperStyle: {
                fontSize: 11
            }
        }, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-overview.tsx",
            lineNumber: 615,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[24] = t9;
    } else {
        t9 = $[24];
    }
    let t10;
    if ($[25] !== t8) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                width: "100%",
                height: 160,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$PieChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PieChart"], {
                    children: [
                        t8,
                        t9
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/board/dashboard-overview.tsx",
                    lineNumber: 624,
                    columnNumber: 82
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/board/dashboard-overview.tsx",
                lineNumber: 624,
                columnNumber: 35
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-overview.tsx",
            lineNumber: 624,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[25] = t8;
        $[26] = t10;
    } else {
        t10 = $[26];
    }
    let t11;
    if ($[27] !== pct) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-3xl font-bold text-red-500",
            children: [
                pct,
                "%"
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/dashboard-overview.tsx",
            lineNumber: 632,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[27] = pct;
        $[28] = t11;
    } else {
        t11 = $[28];
    }
    let t12;
    if ($[29] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-[var(--text-tertiary)]",
            children: "Compliance Rate"
        }, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-overview.tsx",
            lineNumber: 640,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[29] = t12;
    } else {
        t12 = $[29];
    }
    let t13;
    if ($[30] !== onTime || $[31] !== total) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-1 text-xs text-[var(--text-tertiary)]",
            children: [
                onTime,
                "/",
                total,
                " on time"
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/dashboard-overview.tsx",
            lineNumber: 647,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[30] = onTime;
        $[31] = total;
        $[32] = t13;
    } else {
        t13 = $[32];
    }
    let t14;
    if ($[33] !== t11 || $[34] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-right",
            children: [
                t11,
                t12,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/dashboard-overview.tsx",
            lineNumber: 656,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[33] = t11;
        $[34] = t13;
        $[35] = t14;
    } else {
        t14 = $[35];
    }
    let t15;
    if ($[36] !== t10 || $[37] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChartCard, {
            title: "Due Date Compliance",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-4",
                children: [
                    t10,
                    t14
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/board/dashboard-overview.tsx",
                lineNumber: 665,
                columnNumber: 50
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-overview.tsx",
            lineNumber: 665,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[36] = t10;
        $[37] = t14;
        $[38] = t15;
    } else {
        t15 = $[38];
    }
    return t15;
};
_c5 = DueDateComplianceChart;
// ============================================
// REQUEST STATUS DISTRIBUTION (Donut Chart)
// ============================================
const StatusDistributionChart = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(12);
    if ($[0] !== "2367a6dec86b74d3c5cc969c4b5e244251f6fbdd735d9524e1f459fbab505455") {
        for(let $i = 0; $i < 12; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "2367a6dec86b74d3c5cc969c4b5e244251f6fbdd735d9524e1f459fbab505455";
    }
    const { requests } = t0;
    let t1;
    if ($[1] !== requests) {
        const statusCounts = {};
        for (const r of requests){
            statusCounts[r.status] = (statusCounts[r.status] || 0) + 1;
        }
        t1 = Object.entries(statusCounts).filter(_temp9).map(_temp10);
        $[1] = requests;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const data = t1;
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {
            stroke: "var(--text-tertiary)"
        };
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] !== data) {
        t3 = data.map(_temp12);
        $[4] = data;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    if ($[6] !== data || $[7] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$Pie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Pie"], {
            data: data,
            cx: "50%",
            cy: "50%",
            innerRadius: 60,
            outerRadius: 90,
            paddingAngle: 2,
            dataKey: "value",
            label: _temp11,
            labelLine: t2,
            children: t3
        }, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-overview.tsx",
            lineNumber: 722,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[6] = data;
        $[7] = t3;
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    let t5;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Legend"], {
            iconType: "square",
            wrapperStyle: {
                fontSize: 12
            }
        }, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-overview.tsx",
            lineNumber: 731,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    let t6;
    if ($[10] !== t4) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChartCard, {
            title: "Request Status Distribution",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                width: "100%",
                height: 260,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$PieChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PieChart"], {
                    children: [
                        t4,
                        t5
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/board/dashboard-overview.tsx",
                    lineNumber: 740,
                    columnNumber: 104
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/board/dashboard-overview.tsx",
                lineNumber: 740,
                columnNumber: 57
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-overview.tsx",
            lineNumber: 740,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[10] = t4;
        $[11] = t6;
    } else {
        t6 = $[11];
    }
    return t6;
};
_c6 = StatusDistributionChart;
// ============================================
// AVG RESOLUTION TIME (Bar Chart)
// ============================================
const AvgResolutionTimeChart = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(21);
    if ($[0] !== "2367a6dec86b74d3c5cc969c4b5e244251f6fbdd735d9524e1f459fbab505455") {
        for(let $i = 0; $i < 21; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "2367a6dec86b74d3c5cc969c4b5e244251f6fbdd735d9524e1f459fbab505455";
    }
    const { requests, from, to } = t0;
    let weeks;
    if ($[1] !== from || $[2] !== requests || $[3] !== to) {
        const closed = requests.filter(_temp13);
        weeks = [];
        const current = new Date(from);
        current.setDate(current.getDate() - current.getDay());
        while(current <= to){
            const weekEnd = new Date(current);
            weekEnd.setDate(weekEnd.getDate() + 6);
            weekEnd.setHours(23, 59, 59, 999);
            const weekClosed = closed.filter((r_0)=>{
                const d = new Date(r_0.createdAt);
                return d >= current && d <= weekEnd;
            });
            const avgHours = weekClosed.length > 0 ? Math.round(weekClosed.reduce(_temp14, 0) / weekClosed.length) : 0;
            weeks.push({
                label: formatWeekLabel(current),
                avgHours
            });
            const next = new Date(current);
            next.setDate(next.getDate() + 7);
            current.setTime(next.getTime());
        }
        $[1] = from;
        $[2] = requests;
        $[3] = to;
        $[4] = weeks;
    } else {
        weeks = $[4];
    }
    const data = weeks;
    let t1;
    if ($[5] !== from) {
        t1 = formatWeekLabel(from);
        $[5] = from;
        $[6] = t1;
    } else {
        t1 = $[6];
    }
    const fromLabel = t1;
    let t2;
    if ($[7] !== to) {
        t2 = formatWeekLabel(to);
        $[7] = to;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    const toLabel = t2;
    const t3 = `Avg Resolution Time (${fromLabel} - ${toLabel})`;
    let t4;
    let t5;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = {
            top: 5,
            right: 10,
            bottom: 5,
            left: 0
        };
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
            strokeDasharray: "3 3",
            stroke: "var(--border)"
        }, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-overview.tsx",
            lineNumber: 825,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[9] = t4;
        $[10] = t5;
    } else {
        t4 = $[9];
        t5 = $[10];
    }
    let t6;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
            dataKey: "label",
            tick: {
                fontSize: 11,
                fill: "var(--text-tertiary)"
            }
        }, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-overview.tsx",
            lineNumber: 834,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[11] = t6;
    } else {
        t6 = $[11];
    }
    let t7;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = {
            fontSize: 11,
            fill: "var(--text-tertiary)"
        };
        $[12] = t7;
    } else {
        t7 = $[12];
    }
    let t8;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
            tick: t7,
            label: {
                value: "Hours",
                angle: -90,
                position: "insideLeft",
                style: {
                    fontSize: 11,
                    fill: "var(--text-tertiary)"
                }
            }
        }, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-overview.tsx",
            lineNumber: 854,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[13] = t8;
    } else {
        t8 = $[13];
    }
    let t9;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
            contentStyle: {
                backgroundColor: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius-md)",
                fontSize: 12
            },
            formatter: _temp15
        }, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-overview.tsx",
            lineNumber: 869,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[14] = t9;
    } else {
        t9 = $[14];
    }
    let t10;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
            dataKey: "avgHours",
            fill: CHART_COLORS.purple,
            radius: [
                4,
                4,
                0,
                0
            ]
        }, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-overview.tsx",
            lineNumber: 881,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[15] = t10;
    } else {
        t10 = $[15];
    }
    let t11;
    if ($[16] !== data) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
            width: "100%",
            height: 260,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BarChart"], {
                data: data,
                margin: t4,
                children: [
                    t5,
                    t6,
                    t8,
                    t9,
                    t10
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/board/dashboard-overview.tsx",
                lineNumber: 888,
                columnNumber: 58
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-overview.tsx",
            lineNumber: 888,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[16] = data;
        $[17] = t11;
    } else {
        t11 = $[17];
    }
    let t12;
    if ($[18] !== t11 || $[19] !== t3) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChartCard, {
            title: t3,
            children: t11
        }, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-overview.tsx",
            lineNumber: 896,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[18] = t11;
        $[19] = t3;
        $[20] = t12;
    } else {
        t12 = $[20];
    }
    return t12;
};
_c7 = AvgResolutionTimeChart;
// ============================================
// TOP REQUESTERS (Horizontal Bar Chart)
// ============================================
const REQUESTER_COLORS = [
    CHART_COLORS.green,
    CHART_COLORS.blue,
    CHART_COLORS.purple,
    CHART_COLORS.orange,
    CHART_COLORS.amber
];
const TopRequestersChart = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(16);
    if ($[0] !== "2367a6dec86b74d3c5cc969c4b5e244251f6fbdd735d9524e1f459fbab505455") {
        for(let $i = 0; $i < 16; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "2367a6dec86b74d3c5cc969c4b5e244251f6fbdd735d9524e1f459fbab505455";
    }
    const { requests } = t0;
    let t1;
    if ($[1] !== requests) {
        const counts = {};
        for (const r of requests){
            counts[r.requesterName] = (counts[r.requesterName] || 0) + 1;
        }
        t1 = Object.entries(counts).sort(_temp16).slice(0, 5).map(_temp17);
        $[1] = requests;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const data = t1;
    let t2;
    let t3;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {
            top: 5,
            right: 20,
            bottom: 5,
            left: 10
        };
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
            strokeDasharray: "3 3",
            stroke: "var(--border)",
            horizontal: false
        }, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-overview.tsx",
            lineNumber: 944,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[3] = t2;
        $[4] = t3;
    } else {
        t2 = $[3];
        t3 = $[4];
    }
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
            type: "number",
            tick: {
                fontSize: 11,
                fill: "var(--text-tertiary)"
            }
        }, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-overview.tsx",
            lineNumber: 953,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
            type: "category",
            dataKey: "name",
            width: 80,
            tick: {
                fontSize: 11,
                fill: "var(--text-tertiary)"
            }
        }, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-overview.tsx",
            lineNumber: 963,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
            contentStyle: {
                backgroundColor: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius-md)",
                fontSize: 12
            },
            formatter: _temp18
        }, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-overview.tsx",
            lineNumber: 973,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    let t7;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = [
            0,
            4,
            4,
            0
        ];
        $[8] = t7;
    } else {
        t7 = $[8];
    }
    let t8;
    if ($[9] !== data) {
        t8 = data.map(_temp19);
        $[9] = data;
        $[10] = t8;
    } else {
        t8 = $[10];
    }
    let t9;
    if ($[11] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
            dataKey: "count",
            radius: t7,
            children: t8
        }, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-overview.tsx",
            lineNumber: 1000,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[11] = t8;
        $[12] = t9;
    } else {
        t9 = $[12];
    }
    let t10;
    if ($[13] !== data || $[14] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChartCard, {
            title: "Top Requesters",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                width: "100%",
                height: 220,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BarChart"], {
                    data: data,
                    layout: "vertical",
                    margin: t2,
                    children: [
                        t3,
                        t4,
                        t5,
                        t6,
                        t9
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/board/dashboard-overview.tsx",
                    lineNumber: 1008,
                    columnNumber: 92
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/board/dashboard-overview.tsx",
                lineNumber: 1008,
                columnNumber: 45
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-overview.tsx",
            lineNumber: 1008,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[13] = data;
        $[14] = t9;
        $[15] = t10;
    } else {
        t10 = $[15];
    }
    return t10;
};
_c8 = TopRequestersChart;
// ============================================
// BOTTLENECK ANALYSIS
// ============================================
const BOTTLENECK_NO_PROGRESS_DAYS = 3;
const BottleneckAnalysis = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(30);
    if ($[0] !== "2367a6dec86b74d3c5cc969c4b5e244251f6fbdd735d9524e1f459fbab505455") {
        for(let $i = 0; $i < 30; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "2367a6dec86b74d3c5cc969c4b5e244251f6fbdd735d9524e1f459fbab505455";
    }
    const { requests } = t0;
    let t1;
    let t2;
    let t3;
    let t4;
    let t5;
    let t6;
    let t7;
    let t8;
    if ($[1] !== requests) {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const reviewStuck = requests.filter(_temp20);
        const unassigned = requests.filter(_temp21);
        const noProgress = requests.filter((r_1)=>{
            if (r_1.status === "closed" || r_1.assigneeId) {
                return false;
            }
            const created = new Date(r_1.createdAt);
            return daysBetween(created, today) >= BOTTLENECK_NO_PROGRESS_DAYS;
        });
        const t9 = reviewStuck.length;
        const t10 = reviewStuck.map(_temp22);
        if ($[10] !== reviewStuck || $[11] !== t10) {
            t7 = {
                type: "review",
                label: "Review Bottleneck",
                badgeColor: "bg-red-100 text-red-700 border border-red-200",
                bgColor: "bg-red-50",
                count: t9,
                requestIds: t10
            };
            $[10] = reviewStuck;
            $[11] = t10;
            $[12] = t7;
        } else {
            t7 = $[12];
        }
        const t11 = unassigned.length;
        const t12 = unassigned.map(_temp23);
        if ($[13] !== t12 || $[14] !== unassigned) {
            t8 = {
                type: "unassigned",
                label: "Unassigned",
                badgeColor: "bg-amber-100 text-amber-700 border border-amber-200",
                bgColor: "bg-amber-50",
                count: t11,
                requestIds: t12
            };
            $[13] = t12;
            $[14] = unassigned;
            $[15] = t8;
        } else {
            t8 = $[15];
        }
        t1 = "no_progress";
        t2 = "No Progress";
        t3 = "bg-red-100 text-red-700 border border-red-200";
        t4 = "bg-red-50";
        t5 = noProgress.length;
        t6 = noProgress.map(_temp24);
        $[1] = requests;
        $[2] = t1;
        $[3] = t2;
        $[4] = t3;
        $[5] = t4;
        $[6] = t5;
        $[7] = t6;
        $[8] = t7;
        $[9] = t8;
    } else {
        t1 = $[2];
        t2 = $[3];
        t3 = $[4];
        t4 = $[5];
        t5 = $[6];
        t6 = $[7];
        t7 = $[8];
        t8 = $[9];
    }
    let t9;
    if ($[16] !== t1 || $[17] !== t2 || $[18] !== t3 || $[19] !== t4 || $[20] !== t5 || $[21] !== t6) {
        t9 = {
            type: t1,
            label: t2,
            badgeColor: t3,
            bgColor: t4,
            count: t5,
            requestIds: t6
        };
        $[16] = t1;
        $[17] = t2;
        $[18] = t3;
        $[19] = t4;
        $[20] = t5;
        $[21] = t6;
        $[22] = t9;
    } else {
        t9 = $[22];
    }
    let t10;
    if ($[23] !== t7 || $[24] !== t8 || $[25] !== t9) {
        t10 = [
            t7,
            t8,
            t9
        ];
        $[23] = t7;
        $[24] = t8;
        $[25] = t9;
        $[26] = t10;
    } else {
        t10 = $[26];
    }
    const bottlenecks = t10;
    let t11;
    if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ClockAlertIcon, {}, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-overview.tsx",
            lineNumber: 1154,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[27] = t11;
    } else {
        t11 = $[27];
    }
    let t12;
    if ($[28] !== bottlenecks) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChartCard, {
            title: "Bottleneck Analysis",
            icon: t11,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3",
                children: bottlenecks.map(_temp25)
            }, void 0, false, {
                fileName: "[project]/src/components/board/dashboard-overview.tsx",
                lineNumber: 1161,
                columnNumber: 61
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-overview.tsx",
            lineNumber: 1161,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[28] = bottlenecks;
        $[29] = t12;
    } else {
        t12 = $[29];
    }
    return t12;
};
_c9 = BottleneckAnalysis;
// ============================================
// AGING REQUESTS
// ============================================
const AgingRequests = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(12);
    if ($[0] !== "2367a6dec86b74d3c5cc969c4b5e244251f6fbdd735d9524e1f459fbab505455") {
        for(let $i = 0; $i < 12; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "2367a6dec86b74d3c5cc969c4b5e244251f6fbdd735d9524e1f459fbab505455";
    }
    const { requests } = t0;
    let t1;
    if ($[1] !== requests) {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        t1 = requests.filter(_temp26).map((r_0)=>{
            const created = new Date(r_0.createdAt);
            const age = daysBetween(created, today);
            return {
                ...r_0,
                age
            };
        }).sort(_temp27).slice(0, 5);
        $[1] = requests;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const agingItems = t1;
    const statusBadge = _temp28;
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ClockAlertIcon, {}, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-overview.tsx",
            lineNumber: 1206,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] !== agingItems) {
        let t4;
        if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
            t4 = (item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface)] px-4 py-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm font-medium text-[var(--text-primary)]",
                                    children: item.id.toUpperCase().replace("R", "REQ-")
                                }, void 0, false, {
                                    fileName: "[project]/src/components/board/dashboard-overview.tsx",
                                    lineNumber: 1215,
                                    columnNumber: 177
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-[var(--text-tertiary)]",
                                    children: item.title
                                }, void 0, false, {
                                    fileName: "[project]/src/components/board/dashboard-overview.tsx",
                                    lineNumber: 1215,
                                    columnNumber: 287
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/board/dashboard-overview.tsx",
                            lineNumber: 1215,
                            columnNumber: 172
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `rounded-full px-2.5 py-0.5 text-xs font-medium ${statusBadge(item.status)}`,
                                    children: item.status === "in_progress" ? "in progress" : item.status
                                }, void 0, false, {
                                    fileName: "[project]/src/components/board/dashboard-overview.tsx",
                                    lineNumber: 1215,
                                    columnNumber: 401
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs font-medium text-[var(--text-tertiary)]",
                                    children: [
                                        item.age,
                                        "d old"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/board/dashboard-overview.tsx",
                                    lineNumber: 1215,
                                    columnNumber: 564
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/board/dashboard-overview.tsx",
                            lineNumber: 1215,
                            columnNumber: 360
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, item.id, true, {
                    fileName: "[project]/src/components/board/dashboard-overview.tsx",
                    lineNumber: 1215,
                    columnNumber: 20
                }, ("TURBOPACK compile-time value", void 0));
            $[6] = t4;
        } else {
            t4 = $[6];
        }
        t3 = agingItems.map(t4);
        $[4] = agingItems;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    if ($[7] !== agingItems.length) {
        t4 = agingItems.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "py-4 text-center text-sm text-[var(--text-tertiary)]",
            children: "No aging requests"
        }, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-overview.tsx",
            lineNumber: 1228,
            columnNumber: 37
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = agingItems.length;
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    let t5;
    if ($[9] !== t3 || $[10] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChartCard, {
            title: "Aging Requests",
            icon: t2,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    t3,
                    t4
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/board/dashboard-overview.tsx",
                lineNumber: 1236,
                columnNumber: 54
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-overview.tsx",
            lineNumber: 1236,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[9] = t3;
        $[10] = t4;
        $[11] = t5;
    } else {
        t5 = $[11];
    }
    return t5;
};
_c10 = AgingRequests;
const DashboardOverview = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(25);
    if ($[0] !== "2367a6dec86b74d3c5cc969c4b5e244251f6fbdd735d9524e1f459fbab505455") {
        for(let $i = 0; $i < 25; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "2367a6dec86b74d3c5cc969c4b5e244251f6fbdd735d9524e1f459fbab505455";
    }
    const { requests, from, to } = t0;
    let t1;
    if ($[1] !== from || $[2] !== requests || $[3] !== to) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RequestTrendsChart, {
            requests: requests,
            from: from,
            to: to
        }, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-overview.tsx",
            lineNumber: 1270,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = from;
        $[2] = requests;
        $[3] = to;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    let t2;
    if ($[5] !== requests) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid gap-6 md:grid-cols-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RequestTypesChart, {
                    requests: requests
                }, void 0, false, {
                    fileName: "[project]/src/components/board/dashboard-overview.tsx",
                    lineNumber: 1280,
                    columnNumber: 53
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ActiveByPriorityChart, {
                    requests: requests
                }, void 0, false, {
                    fileName: "[project]/src/components/board/dashboard-overview.tsx",
                    lineNumber: 1280,
                    columnNumber: 94
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DueDateComplianceChart, {
                    requests: requests
                }, void 0, false, {
                    fileName: "[project]/src/components/board/dashboard-overview.tsx",
                    lineNumber: 1280,
                    columnNumber: 139
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/dashboard-overview.tsx",
            lineNumber: 1280,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[5] = requests;
        $[6] = t2;
    } else {
        t2 = $[6];
    }
    let t3;
    if ($[7] !== requests) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatusDistributionChart, {
            requests: requests
        }, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-overview.tsx",
            lineNumber: 1288,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = requests;
        $[8] = t3;
    } else {
        t3 = $[8];
    }
    let t4;
    if ($[9] !== from || $[10] !== requests || $[11] !== to) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AvgResolutionTimeChart, {
            requests: requests,
            from: from,
            to: to
        }, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-overview.tsx",
            lineNumber: 1296,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[9] = from;
        $[10] = requests;
        $[11] = to;
        $[12] = t4;
    } else {
        t4 = $[12];
    }
    let t5;
    if ($[13] !== t3 || $[14] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid gap-6 md:grid-cols-2",
            children: [
                t3,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/dashboard-overview.tsx",
            lineNumber: 1306,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[13] = t3;
        $[14] = t4;
        $[15] = t5;
    } else {
        t5 = $[15];
    }
    let t6;
    let t7;
    if ($[16] !== requests) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid gap-6 md:grid-cols-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TopRequestersChart, {
                    requests: requests
                }, void 0, false, {
                    fileName: "[project]/src/components/board/dashboard-overview.tsx",
                    lineNumber: 1316,
                    columnNumber: 53
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BottleneckAnalysis, {
                    requests: requests
                }, void 0, false, {
                    fileName: "[project]/src/components/board/dashboard-overview.tsx",
                    lineNumber: 1316,
                    columnNumber: 95
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/dashboard-overview.tsx",
            lineNumber: 1316,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AgingRequests, {
            requests: requests
        }, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-overview.tsx",
            lineNumber: 1317,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[16] = requests;
        $[17] = t6;
        $[18] = t7;
    } else {
        t6 = $[17];
        t7 = $[18];
    }
    let t8;
    if ($[19] !== t1 || $[20] !== t2 || $[21] !== t5 || $[22] !== t6 || $[23] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-6",
            children: [
                t1,
                t2,
                t5,
                t6,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/dashboard-overview.tsx",
            lineNumber: 1327,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[19] = t1;
        $[20] = t2;
        $[21] = t5;
        $[22] = t6;
        $[23] = t7;
        $[24] = t8;
    } else {
        t8 = $[24];
    }
    return t8;
};
_c11 = DashboardOverview;
function _temp(r) {
    return DESIGN_TYPES.includes(r.type);
}
function _temp2(r_0) {
    return VIDEO_TYPES.includes(r_0.type);
}
function _temp3(t0) {
    const { name, value } = t0;
    return `${name}: ${value}`;
}
function _temp4(entry) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cell"], {
        fill: entry.color
    }, entry.name, false, {
        fileName: "[project]/src/components/board/dashboard-overview.tsx",
        lineNumber: 1353,
        columnNumber: 10
    }, this);
}
function _temp5(r) {
    return r.status !== "closed" && r.status !== "deleted";
}
function _temp6(r) {
    return r.dueDate;
}
function _temp7(r_0) {
    if (r_0.status === "closed") {
        return new Date(r_0.createdAt) <= new Date(r_0.dueDate);
    }
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const due = new Date(r_0.dueDate);
    due.setHours(0, 0, 0, 0);
    return due >= today;
}
function _temp8(entry) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cell"], {
        fill: entry.color
    }, entry.name, false, {
        fileName: "[project]/src/components/board/dashboard-overview.tsx",
        lineNumber: 1372,
        columnNumber: 10
    }, this);
}
function _temp9(t0) {
    const [, count] = t0;
    return count > 0;
}
function _temp10(t0) {
    const [status, count_0] = t0;
    return {
        name: status === "in_progress" ? "In Progress" : status.charAt(0).toUpperCase() + status.slice(1),
        value: count_0,
        color: STATUS_COLORS[status] || CHART_COLORS.gray
    };
}
function _temp11(t0) {
    const { name, value } = t0;
    return `${name}: ${value}`;
}
function _temp12(entry) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cell"], {
        fill: entry.color
    }, entry.name, false, {
        fileName: "[project]/src/components/board/dashboard-overview.tsx",
        lineNumber: 1394,
        columnNumber: 10
    }, this);
}
function _temp13(r) {
    return r.status === "closed" && r.dueDate;
}
function _temp14(sum, r_1) {
    const created = new Date(r_1.createdAt);
    const due = new Date(r_1.dueDate);
    const hours = Math.abs(daysBetween(created, due)) * 24;
    return sum + Math.max(hours, 24);
}
function _temp15(value) {
    return [
        `${value}h`,
        "Avg Time"
    ];
}
function _temp16(a, b) {
    return b[1] - a[1];
}
function _temp17(t0, i) {
    const [name, count] = t0;
    return {
        name: name.length > 12 ? name.slice(0, 12) + "..." : name,
        fullName: name,
        count,
        fill: REQUESTER_COLORS[i % REQUESTER_COLORS.length]
    };
}
function _temp18(value) {
    return [
        value,
        "Requests"
    ];
}
function _temp19(entry, i_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cell"], {
        fill: entry.fill
    }, i_0, false, {
        fileName: "[project]/src/components/board/dashboard-overview.tsx",
        lineNumber: 1424,
        columnNumber: 10
    }, this);
}
function _temp20(r) {
    return r.status === "review";
}
function _temp21(r_0) {
    return r_0.status !== "closed" && r_0.status !== "deleted" && !r_0.assigneeId;
}
function _temp22(r_2) {
    return r_2.id.toUpperCase().replace("R", "REQ-");
}
function _temp23(r_3) {
    return r_3.id.toUpperCase().replace("R", "REQ-");
}
function _temp24(r_4) {
    return r_4.id.toUpperCase().replace("R", "REQ-");
}
function _temp25(b) {
    const displayIds = b.requestIds.slice(0, 3);
    const remaining = b.requestIds.length - 3;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `rounded-[var(--radius-md)] ${b.bgColor} p-3`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `inline-flex rounded px-2 py-0.5 text-xs font-semibold ${b.badgeColor}`,
                        children: b.label
                    }, void 0, false, {
                        fileName: "[project]/src/components/board/dashboard-overview.tsx",
                        lineNumber: 1444,
                        columnNumber: 127
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm font-medium text-[var(--text-primary)]",
                        children: [
                            b.count,
                            " requests"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/board/dashboard-overview.tsx",
                        lineNumber: 1444,
                        columnNumber: 233
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/board/dashboard-overview.tsx",
                lineNumber: 1444,
                columnNumber: 86
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-1 text-xs text-[var(--text-tertiary)]",
                children: [
                    displayIds.join(", "),
                    remaining > 0 && ` +${remaining} more`,
                    b.type === "no_progress" && ` — Open for ${BOTTLENECK_NO_PROGRESS_DAYS}+ days without assignment`
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/board/dashboard-overview.tsx",
                lineNumber: 1444,
                columnNumber: 329
            }, this)
        ]
    }, b.type, true, {
        fileName: "[project]/src/components/board/dashboard-overview.tsx",
        lineNumber: 1444,
        columnNumber: 10
    }, this);
}
function _temp26(r) {
    return r.status !== "closed" && r.status !== "deleted";
}
function _temp27(a, b) {
    return b.age - a.age;
}
function _temp28(status) {
    const colors = {
        open: "bg-gray-100 text-gray-700",
        in_progress: "bg-amber-100 text-amber-700",
        review: "bg-purple-100 text-purple-700"
    };
    return colors[status] || "bg-gray-100 text-gray-600";
}
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;
__turbopack_context__.k.register(_c, "ClockAlertIcon");
__turbopack_context__.k.register(_c1, "ChartCard");
__turbopack_context__.k.register(_c2, "RequestTrendsChart");
__turbopack_context__.k.register(_c3, "RequestTypesChart");
__turbopack_context__.k.register(_c4, "ActiveByPriorityChart");
__turbopack_context__.k.register(_c5, "DueDateComplianceChart");
__turbopack_context__.k.register(_c6, "StatusDistributionChart");
__turbopack_context__.k.register(_c7, "AvgResolutionTimeChart");
__turbopack_context__.k.register(_c8, "TopRequestersChart");
__turbopack_context__.k.register(_c9, "BottleneckAnalysis");
__turbopack_context__.k.register(_c10, "AgingRequests");
__turbopack_context__.k.register(_c11, "DashboardOverview");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/board/dashboard-editor-performance.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DashboardEditorPerformance",
    ()=>DashboardEditorPerformance
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/BarChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/Bar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/XAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/YAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/CartesianGrid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Tooltip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Legend.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/ResponsiveContainer.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
// ============================================
// CONSTANTS
// ============================================
/** Content specialization categories derived from request types */ const CONTENT_CATEGORIES = [
    'Design',
    'Video',
    'UI/UX'
];
const TYPE_TO_CATEGORY = {
    design_graphics: 'Design',
    video: 'Video',
    ui_ux: 'UI/UX'
};
const CATEGORY_COLORS = {
    Design: '#8b5cf6',
    Video: '#f97316',
    'UI/UX': '#2383e2'
};
const CATEGORY_BG = {
    Design: 'bg-purple-500',
    Video: 'bg-orange-500',
    'UI/UX': 'bg-blue-500'
};
const CATEGORY_TEXT_BG = {
    Design: {
        bg: 'bg-green-600',
        text: 'text-white'
    },
    Video: {
        bg: 'bg-orange-500',
        text: 'text-white'
    },
    'UI/UX': {
        bg: 'bg-blue-600',
        text: 'text-white'
    }
};
const CHART_COLORS = {
    inProgress: '#f97316',
    review: '#0f766e',
    completed: '#22c55e'
};
// ============================================
// ICONS
// ============================================
const BarChartIcon = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "6dd07176afc37a0ee80b95747d8cb818d42302766e196b6a982fb9c719ee9707") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6dd07176afc37a0ee80b95747d8cb818d42302766e196b6a982fb9c719ee9707";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "18",
            height: "18",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            viewBox: "0 0 24 24",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "3",
                    y: "12",
                    width: "4",
                    height: "9"
                }, void 0, false, {
                    fileName: "[project]/src/components/board/dashboard-editor-performance.tsx",
                    lineNumber: 68,
                    columnNumber: 155
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "10",
                    y: "7",
                    width: "4",
                    height: "14"
                }, void 0, false, {
                    fileName: "[project]/src/components/board/dashboard-editor-performance.tsx",
                    lineNumber: 68,
                    columnNumber: 197
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "17",
                    y: "2",
                    width: "4",
                    height: "19"
                }, void 0, false, {
                    fileName: "[project]/src/components/board/dashboard-editor-performance.tsx",
                    lineNumber: 68,
                    columnNumber: 240
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/dashboard-editor-performance.tsx",
            lineNumber: 68,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
};
_c = BarChartIcon;
const TrendingUpIcon = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "6dd07176afc37a0ee80b95747d8cb818d42302766e196b6a982fb9c719ee9707") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6dd07176afc37a0ee80b95747d8cb818d42302766e196b6a982fb9c719ee9707";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "18",
            height: "18",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            viewBox: "0 0 24 24",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                    points: "23 6 13.5 15.5 8.5 10.5 1 18"
                }, void 0, false, {
                    fileName: "[project]/src/components/board/dashboard-editor-performance.tsx",
                    lineNumber: 85,
                    columnNumber: 155
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                    points: "17 6 23 6 23 12"
                }, void 0, false, {
                    fileName: "[project]/src/components/board/dashboard-editor-performance.tsx",
                    lineNumber: 85,
                    columnNumber: 205
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/dashboard-editor-performance.tsx",
            lineNumber: 85,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
};
_c1 = TrendingUpIcon;
const ZapIcon = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "6dd07176afc37a0ee80b95747d8cb818d42302766e196b6a982fb9c719ee9707") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6dd07176afc37a0ee80b95747d8cb818d42302766e196b6a982fb9c719ee9707";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "18",
            height: "18",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2"
            }, void 0, false, {
                fileName: "[project]/src/components/board/dashboard-editor-performance.tsx",
                lineNumber: 102,
                columnNumber: 155
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-editor-performance.tsx",
            lineNumber: 102,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
};
_c2 = ZapIcon;
const ChartCard = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(8);
    if ($[0] !== "6dd07176afc37a0ee80b95747d8cb818d42302766e196b6a982fb9c719ee9707") {
        for(let $i = 0; $i < 8; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6dd07176afc37a0ee80b95747d8cb818d42302766e196b6a982fb9c719ee9707";
    }
    const { title, icon, children, className: t1 } = t0;
    const className = t1 === undefined ? "" : t1;
    const t2 = `rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] p-6 ${className}`;
    let t3;
    if ($[1] !== icon || $[2] !== title) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "mb-4 flex items-center gap-2 text-sm font-bold text-[var(--text-primary)]",
            children: [
                icon,
                title
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/dashboard-editor-performance.tsx",
            lineNumber: 138,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = icon;
        $[2] = title;
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    let t4;
    if ($[4] !== children || $[5] !== t2 || $[6] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t2,
            children: [
                t3,
                children
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/dashboard-editor-performance.tsx",
            lineNumber: 147,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[4] = children;
        $[5] = t2;
        $[6] = t3;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    return t4;
};
_c3 = ChartCard;
// ============================================
// DATA COMPUTATION
// ============================================
const computeEditorStats = (members, requests)=>{
    const now = new Date();
    const weekAgo = new Date(now);
    weekAgo.setDate(weekAgo.getDate() - 7);
    return members.map((member)=>{
        const assigned = requests.filter((r)=>r.assigneeId === member.id && r.status !== 'deleted');
        const inProgress = assigned.filter((r)=>r.status === 'in_progress').length;
        const review = assigned.filter((r)=>r.status === 'review').length;
        const completed = assigned.filter((r)=>r.status === 'closed').length;
        // On-time calculation
        const withDueDate = assigned.filter((r)=>r.status === 'closed' && r.dueDate);
        const onTime = withDueDate.filter((r)=>{
            const created = new Date(r.createdAt);
            const due = new Date(r.dueDate);
            return created <= due;
        }).length;
        const onTimeRate = withDueDate.length > 0 ? Math.round(onTime / withDueDate.length * 100) : 0;
        // Category breakdown
        const categoryBreakdown = {
            Design: 0,
            Video: 0,
            'UI/UX': 0
        };
        assigned.forEach((r)=>{
            const cat = TYPE_TO_CATEGORY[r.type];
            categoryBreakdown[cat]++;
        });
        // Primary & secondary categories
        const sortedCats = Object.entries(categoryBreakdown).filter(([, count])=>count > 0).sort((a, b)=>b[1] - a[1]);
        const primaryCategory = sortedCats[0]?.[0] ?? null;
        const secondaryCategory = sortedCats[1]?.[0] ?? null;
        // This week completed
        const thisWeekCompleted = assigned.filter((r)=>{
            if (r.status !== 'closed') return false;
            const created = new Date(r.createdAt);
            return created >= weekAgo;
        }).length;
        // Simulated hours (based on items completed, ~1.5h per item for design, ~3h for video)
        const totalItems = assigned.filter((r)=>r.status === 'closed').reduce((sum, r)=>sum + r.totalItems, 0);
        const hours = Math.round(totalItems * 1.8);
        const itemsPerHour = hours > 0 ? Math.round(totalItems / hours * 10) / 10 : 0;
        // Time accuracy (percentage of on-time items)
        const timeAccuracy = onTimeRate;
        // Score = weighted: 40% completion rate + 30% on-time + 20% volume + 10% variety
        const completionScore = assigned.length > 0 ? completed / assigned.length * 40 : 0;
        const onTimeScore = onTimeRate * 0.3;
        const volumeScore = Math.min(completed / 30, 1) * 20; // 30 as benchmark
        const varietyScore = sortedCats.length >= 2 ? 10 : sortedCats.length * 5;
        const score = Math.round(completionScore + onTimeScore + volumeScore + varietyScore);
        // Specialization data per category
        const specializations = CONTENT_CATEGORIES.filter((cat)=>categoryBreakdown[cat] > 0).map((cat)=>{
            const catRequests = assigned.filter((r)=>TYPE_TO_CATEGORY[r.type] === cat);
            const catCompleted = catRequests.filter((r)=>r.status === 'closed').length;
            const catThisWeek = catRequests.filter((r)=>{
                if (r.status !== 'closed') return false;
                const created = new Date(r.createdAt);
                return created >= weekAgo;
            }).length;
            const catItems = catRequests.filter((r)=>r.status === 'closed').reduce((sum, r)=>sum + r.totalItems, 0);
            const catHours = Math.round(catItems * (cat === 'Video' ? 3 : 1.5));
            const catItemsPerHour = catHours > 0 ? Math.round(catItems / catHours * 10) / 10 : 0;
            const catWithDue = catRequests.filter((r)=>r.status === 'closed' && r.dueDate);
            const catOnTime = catWithDue.filter((r)=>{
                const created = new Date(r.createdAt);
                const due = new Date(r.dueDate);
                return created <= due;
            }).length;
            const catOnTimeRate = catWithDue.length > 0 ? Math.round(catOnTime / catWithDue.length * 100) : 0;
            return {
                category: cat,
                completed: catCompleted,
                total: catRequests.length,
                thisWeek: catThisWeek,
                thisWeekTarget: 30,
                itemsPerHour: catItemsPerHour,
                itemsPerHourTarget: 2,
                onTimeRate: catOnTimeRate,
                onTimeTarget: 90
            };
        });
        return {
            id: member.id,
            name: member.name,
            inProgress,
            review,
            completed,
            active: inProgress + review,
            done: completed,
            hours,
            onTimeRate,
            score,
            primaryCategory,
            secondaryCategory,
            categoryBreakdown,
            thisWeekCompleted,
            itemsPerHour,
            timeAccuracy,
            specializations
        };
    });
};
// ============================================
// CATEGORY BADGE
// ============================================
const CategoryBadge = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "6dd07176afc37a0ee80b95747d8cb818d42302766e196b6a982fb9c719ee9707") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6dd07176afc37a0ee80b95747d8cb818d42302766e196b6a982fb9c719ee9707";
    }
    const { category } = t0;
    if (!category) {
        let t1;
        if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
            t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-sm text-[var(--text-tertiary)]",
                children: "—"
            }, void 0, false, {
                fileName: "[project]/src/components/board/dashboard-editor-performance.tsx",
                lineNumber: 325,
                columnNumber: 12
            }, ("TURBOPACK compile-time value", void 0));
            $[1] = t1;
        } else {
            t1 = $[1];
        }
        return t1;
    }
    const { bg, text } = CATEGORY_TEXT_BG[category];
    const t1 = `inline-flex items-center rounded-[var(--radius-sm)] px-2.5 py-0.5 text-xs font-medium ${bg} ${text}`;
    let t2;
    if ($[2] !== category || $[3] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: t1,
            children: category
        }, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-editor-performance.tsx",
            lineNumber: 339,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[2] = category;
        $[3] = t1;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    return t2;
};
_c4 = CategoryBadge;
// ============================================
// PERCENTAGE BADGE
// ============================================
const PercentBadge = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "6dd07176afc37a0ee80b95747d8cb818d42302766e196b6a982fb9c719ee9707") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6dd07176afc37a0ee80b95747d8cb818d42302766e196b6a982fb9c719ee9707";
    }
    const { value } = t0;
    const isActive = value > 0;
    const t1 = `inline-flex items-center justify-center rounded-full px-2.5 py-0.5 text-xs font-medium ${isActive ? "bg-emerald-50 text-emerald-700" : "bg-gray-100 text-gray-400"}`;
    let t2;
    if ($[1] !== t1 || $[2] !== value) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: t1,
            children: [
                value,
                "%"
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/dashboard-editor-performance.tsx",
            lineNumber: 368,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t1;
        $[2] = value;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    return t2;
};
_c5 = PercentBadge;
const EditorWorkloadChart = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(21);
    if ($[0] !== "6dd07176afc37a0ee80b95747d8cb818d42302766e196b6a982fb9c719ee9707") {
        for(let $i = 0; $i < 21; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6dd07176afc37a0ee80b95747d8cb818d42302766e196b6a982fb9c719ee9707";
    }
    const { editors } = t0;
    let t1;
    if ($[1] !== editors) {
        t1 = editors.map(_temp).reverse();
        $[1] = editors;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const data = t1;
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BarChartIcon, {}, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-editor-performance.tsx",
            lineNumber: 407,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const t3 = Math.max(300, editors.length * 40);
    let t4;
    let t5;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = {
            top: 0,
            right: 30,
            left: 20,
            bottom: 0
        };
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
            strokeDasharray: "3 3",
            stroke: "var(--border)",
            horizontal: false
        }, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-editor-performance.tsx",
            lineNumber: 422,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[4] = t4;
        $[5] = t5;
    } else {
        t4 = $[4];
        t5 = $[5];
    }
    let t6;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
            type: "number",
            tick: {
                fill: "var(--text-tertiary)",
                fontSize: 12
            }
        }, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-editor-performance.tsx",
            lineNumber: 431,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[6] = t6;
    } else {
        t6 = $[6];
    }
    let t7;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
            type: "category",
            dataKey: "name",
            width: 130,
            tick: {
                fill: "var(--text-secondary)",
                fontSize: 12
            }
        }, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-editor-performance.tsx",
            lineNumber: 441,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = t7;
    } else {
        t7 = $[7];
    }
    let t8;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = {
            backgroundColor: "var(--surface)",
            border: "1px solid var(--border)",
            borderRadius: "var(--radius-md)",
            fontSize: 13
        };
        $[8] = t8;
    } else {
        t8 = $[8];
    }
    let t9;
    if ($[9] !== data) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
            contentStyle: t8,
            labelFormatter: (label)=>{
                const item = data.find((d)=>d.name === String(label));
                return item?.fullName ?? String(label);
            }
        }, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-editor-performance.tsx",
            lineNumber: 463,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[9] = data;
        $[10] = t9;
    } else {
        t9 = $[10];
    }
    let t10;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Legend"], {
            verticalAlign: "bottom",
            iconType: "square",
            wrapperStyle: {
                fontSize: 12,
                paddingTop: 16
            }
        }, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-editor-performance.tsx",
            lineNumber: 474,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[11] = t10;
    } else {
        t10 = $[11];
    }
    let t11;
    let t12;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
            dataKey: "In Progress",
            stackId: "a",
            fill: CHART_COLORS.inProgress,
            radius: [
                0,
                0,
                0,
                0
            ]
        }, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-editor-performance.tsx",
            lineNumber: 485,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
            dataKey: "Review",
            stackId: "a",
            fill: CHART_COLORS.review
        }, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-editor-performance.tsx",
            lineNumber: 486,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[12] = t11;
        $[13] = t12;
    } else {
        t11 = $[12];
        t12 = $[13];
    }
    let t13;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
            dataKey: "Completed",
            stackId: "a",
            fill: CHART_COLORS.completed,
            radius: [
                0,
                4,
                4,
                0
            ]
        }, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-editor-performance.tsx",
            lineNumber: 495,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[14] = t13;
    } else {
        t13 = $[14];
    }
    let t14;
    if ($[15] !== data || $[16] !== t9) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BarChart"], {
            data: data,
            layout: "vertical",
            margin: t4,
            children: [
                t5,
                t6,
                t7,
                t9,
                t10,
                t11,
                t12,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/dashboard-editor-performance.tsx",
            lineNumber: 502,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[15] = data;
        $[16] = t9;
        $[17] = t14;
    } else {
        t14 = $[17];
    }
    let t15;
    if ($[18] !== t14 || $[19] !== t3) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChartCard, {
            title: "Editor Workload",
            icon: t2,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                width: "100%",
                height: t3,
                children: t14
            }, void 0, false, {
                fileName: "[project]/src/components/board/dashboard-editor-performance.tsx",
                lineNumber: 511,
                columnNumber: 56
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-editor-performance.tsx",
            lineNumber: 511,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[18] = t14;
        $[19] = t3;
        $[20] = t15;
    } else {
        t15 = $[20];
    }
    return t15;
};
_c6 = EditorWorkloadChart;
const EditorPerformanceTable = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(7);
    if ($[0] !== "6dd07176afc37a0ee80b95747d8cb818d42302766e196b6a982fb9c719ee9707") {
        for(let $i = 0; $i < 7; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6dd07176afc37a0ee80b95747d8cb818d42302766e196b6a982fb9c719ee9707";
    }
    const { editors } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TrendingUpIcon, {}, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-editor-performance.tsx",
            lineNumber: 541,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                className: "border-b border-[var(--border)]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                        className: "pb-3 pr-4 font-medium text-[var(--text-secondary)]",
                        children: "Editor"
                    }, void 0, false, {
                        fileName: "[project]/src/components/board/dashboard-editor-performance.tsx",
                        lineNumber: 548,
                        columnNumber: 65
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                        className: "pb-3 px-4 text-center font-medium text-[var(--text-secondary)]",
                        children: "P1"
                    }, void 0, false, {
                        fileName: "[project]/src/components/board/dashboard-editor-performance.tsx",
                        lineNumber: 548,
                        columnNumber: 143
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                        className: "pb-3 px-4 text-center font-medium text-[var(--text-secondary)]",
                        children: "P2"
                    }, void 0, false, {
                        fileName: "[project]/src/components/board/dashboard-editor-performance.tsx",
                        lineNumber: 548,
                        columnNumber: 229
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                        className: "pb-3 px-4 text-center font-medium text-[var(--text-secondary)]",
                        children: "Active"
                    }, void 0, false, {
                        fileName: "[project]/src/components/board/dashboard-editor-performance.tsx",
                        lineNumber: 548,
                        columnNumber: 315
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                        className: "pb-3 px-4 text-center font-medium text-[var(--text-secondary)]",
                        children: "Done"
                    }, void 0, false, {
                        fileName: "[project]/src/components/board/dashboard-editor-performance.tsx",
                        lineNumber: 548,
                        columnNumber: 405
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                        className: "pb-3 px-4 text-center font-medium text-[var(--text-secondary)]",
                        children: "Hours"
                    }, void 0, false, {
                        fileName: "[project]/src/components/board/dashboard-editor-performance.tsx",
                        lineNumber: 548,
                        columnNumber: 493
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                        className: "pb-3 px-4 text-center font-medium text-[var(--text-secondary)]",
                        children: "On-Time"
                    }, void 0, false, {
                        fileName: "[project]/src/components/board/dashboard-editor-performance.tsx",
                        lineNumber: 548,
                        columnNumber: 582
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                        className: "pb-3 pl-4 text-center font-medium text-[var(--text-secondary)]",
                        children: "Score"
                    }, void 0, false, {
                        fileName: "[project]/src/components/board/dashboard-editor-performance.tsx",
                        lineNumber: 548,
                        columnNumber: 673
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/board/dashboard-editor-performance.tsx",
                lineNumber: 548,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-editor-performance.tsx",
            lineNumber: 548,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    let t3;
    if ($[3] !== editors) {
        t3 = editors.map(_temp2);
        $[3] = editors;
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChartCard, {
            title: "Editor Performance",
            icon: t1,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "overflow-x-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    className: "w-full text-left text-sm",
                    children: [
                        t2,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            children: t3
                        }, void 0, false, {
                            fileName: "[project]/src/components/board/dashboard-editor-performance.tsx",
                            lineNumber: 563,
                            columnNumber: 139
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/board/dashboard-editor-performance.tsx",
                    lineNumber: 563,
                    columnNumber: 91
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/board/dashboard-editor-performance.tsx",
                lineNumber: 563,
                columnNumber: 58
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-editor-performance.tsx",
            lineNumber: 563,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[5] = t3;
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    return t4;
};
_c7 = EditorPerformanceTable;
const EditorPerformanceDetail = (t0)=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(33);
    if ($[0] !== "6dd07176afc37a0ee80b95747d8cb818d42302766e196b6a982fb9c719ee9707") {
        for(let $i = 0; $i < 33; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6dd07176afc37a0ee80b95747d8cb818d42302766e196b6a982fb9c719ee9707";
    }
    const { editors } = t0;
    let t1;
    if ($[1] !== editors) {
        t1 = editors.filter(_temp3);
        $[1] = editors;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const editorsWithWork = t1;
    const [selectedId, setSelectedId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(editorsWithWork[0]?.id ?? editors[0]?.id ?? "");
    let t2;
    let t3;
    if ($[3] !== editors || $[4] !== selectedId) {
        t3 = Symbol.for("react.early_return_sentinel");
        bb0: {
            let t4;
            if ($[7] !== selectedId) {
                t4 = (e_0)=>e_0.id === selectedId;
                $[7] = selectedId;
                $[8] = t4;
            } else {
                t4 = $[8];
            }
            const selected = editors.find(t4);
            if (!selected) {
                t3 = null;
                break bb0;
            }
            let t5;
            if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
                t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ZapIcon, {}, void 0, false, {
                    fileName: "[project]/src/components/board/dashboard-editor-performance.tsx",
                    lineNumber: 620,
                    columnNumber: 14
                }, ("TURBOPACK compile-time value", void 0));
                $[9] = t5;
            } else {
                t5 = $[9];
            }
            let t6;
            if ($[10] !== selectedId) {
                t6 = (editor)=>{
                    const isActive = editor.id === selectedId;
                    const total = editor.done + editor.active;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>setSelectedId(editor.id),
                        className: `
                flex items-center gap-1.5 px-3 py-2 text-xs font-medium transition-colors
                ${isActive ? "border-b-2 border-[var(--text-primary)] text-[var(--text-primary)]" : "text-[var(--text-tertiary)] hover:text-[var(--text-secondary)]"}
              `,
                        children: [
                            editor.name.split(" ")[0],
                            editor.name.split(" ")[1] ? ` ${editor.name.split(" ")[1][0]}.` : "",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `inline-flex items-center justify-center rounded-full px-1.5 py-0 text-[10px] font-semibold ${isActive ? "bg-[var(--text-primary)] text-white" : "bg-gray-100 text-gray-500"}`,
                                children: total
                            }, void 0, false, {
                                fileName: "[project]/src/components/board/dashboard-editor-performance.tsx",
                                lineNumber: 633,
                                columnNumber: 115
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, editor.id, true, {
                        fileName: "[project]/src/components/board/dashboard-editor-performance.tsx",
                        lineNumber: 630,
                        columnNumber: 18
                    }, ("TURBOPACK compile-time value", void 0));
                };
                $[10] = selectedId;
                $[11] = t6;
            } else {
                t6 = $[11];
            }
            const t7 = editors.map(t6);
            let t8;
            if ($[12] !== t7) {
                t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-6 flex flex-wrap gap-1 border-b border-[var(--border)] pb-0",
                    children: t7
                }, void 0, false, {
                    fileName: "[project]/src/components/board/dashboard-editor-performance.tsx",
                    lineNumber: 643,
                    columnNumber: 14
                }, ("TURBOPACK compile-time value", void 0));
                $[12] = t7;
                $[13] = t8;
            } else {
                t8 = $[13];
            }
            let t9;
            if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
                t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-sm text-[var(--text-secondary)]",
                    children: "Score: "
                }, void 0, false, {
                    fileName: "[project]/src/components/board/dashboard-editor-performance.tsx",
                    lineNumber: 651,
                    columnNumber: 14
                }, ("TURBOPACK compile-time value", void 0));
                $[14] = t9;
            } else {
                t9 = $[14];
            }
            let t10;
            if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
                t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-sm text-[var(--text-tertiary)]",
                    children: "/100"
                }, void 0, false, {
                    fileName: "[project]/src/components/board/dashboard-editor-performance.tsx",
                    lineNumber: 658,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0));
                $[15] = t10;
            } else {
                t10 = $[15];
            }
            let t11;
            if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
                t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    width: "14",
                    height: "14",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    viewBox: "0 0 24 24",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "12",
                            cy: "12",
                            r: "10"
                        }, void 0, false, {
                            fileName: "[project]/src/components/board/dashboard-editor-performance.tsx",
                            lineNumber: 665,
                            columnNumber: 158
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                            points: "12 6 12 12 16 14"
                        }, void 0, false, {
                            fileName: "[project]/src/components/board/dashboard-editor-performance.tsx",
                            lineNumber: 665,
                            columnNumber: 191
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/board/dashboard-editor-performance.tsx",
                    lineNumber: 665,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0));
                $[16] = t11;
            } else {
                t11 = $[16];
            }
            const t12 = `${selected.timeAccuracy}%`;
            let t13;
            if ($[17] !== t12) {
                t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatMini, {
                    icon: t11,
                    label: "Time Accuracy",
                    value: t12
                }, void 0, false, {
                    fileName: "[project]/src/components/board/dashboard-editor-performance.tsx",
                    lineNumber: 673,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0));
                $[17] = t12;
                $[18] = t13;
            } else {
                t13 = $[18];
            }
            let t14;
            if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
                t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    width: "14",
                    height: "14",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    viewBox: "0 0 24 24",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: "3",
                            y: "4",
                            width: "18",
                            height: "18",
                            rx: "2",
                            ry: "2"
                        }, void 0, false, {
                            fileName: "[project]/src/components/board/dashboard-editor-performance.tsx",
                            lineNumber: 681,
                            columnNumber: 158
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "16",
                            y1: "2",
                            x2: "16",
                            y2: "6"
                        }, void 0, false, {
                            fileName: "[project]/src/components/board/dashboard-editor-performance.tsx",
                            lineNumber: 681,
                            columnNumber: 215
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "8",
                            y1: "2",
                            x2: "8",
                            y2: "6"
                        }, void 0, false, {
                            fileName: "[project]/src/components/board/dashboard-editor-performance.tsx",
                            lineNumber: 681,
                            columnNumber: 253
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "3",
                            y1: "10",
                            x2: "21",
                            y2: "10"
                        }, void 0, false, {
                            fileName: "[project]/src/components/board/dashboard-editor-performance.tsx",
                            lineNumber: 681,
                            columnNumber: 289
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/board/dashboard-editor-performance.tsx",
                    lineNumber: 681,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0));
                $[19] = t14;
            } else {
                t14 = $[19];
            }
            const t15 = `${selected.thisWeekCompleted} completed`;
            let t16;
            if ($[20] !== t15) {
                t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatMini, {
                    icon: t14,
                    label: "This Week",
                    value: t15
                }, void 0, false, {
                    fileName: "[project]/src/components/board/dashboard-editor-performance.tsx",
                    lineNumber: 689,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0));
                $[20] = t15;
                $[21] = t16;
            } else {
                t16 = $[21];
            }
            let t17;
            if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
                t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    width: "14",
                    height: "14",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    viewBox: "0 0 24 24",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                        points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2"
                    }, void 0, false, {
                        fileName: "[project]/src/components/board/dashboard-editor-performance.tsx",
                        lineNumber: 697,
                        columnNumber: 158
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/board/dashboard-editor-performance.tsx",
                    lineNumber: 697,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0));
                $[22] = t17;
            } else {
                t17 = $[22];
            }
            const t18 = `${selected.itemsPerHour}`;
            let t19;
            if ($[23] !== t18) {
                t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatMini, {
                    icon: t17,
                    label: "Items/Hour",
                    value: t18
                }, void 0, false, {
                    fileName: "[project]/src/components/board/dashboard-editor-performance.tsx",
                    lineNumber: 705,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0));
                $[23] = t18;
                $[24] = t19;
            } else {
                t19 = $[24];
            }
            let t20;
            if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
                t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    width: "14",
                    height: "14",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    viewBox: "0 0 24 24",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "12",
                            cy: "12",
                            r: "10"
                        }, void 0, false, {
                            fileName: "[project]/src/components/board/dashboard-editor-performance.tsx",
                            lineNumber: 713,
                            columnNumber: 158
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M16 12l-4-4-4 4"
                        }, void 0, false, {
                            fileName: "[project]/src/components/board/dashboard-editor-performance.tsx",
                            lineNumber: 713,
                            columnNumber: 191
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M12 16V8"
                        }, void 0, false, {
                            fileName: "[project]/src/components/board/dashboard-editor-performance.tsx",
                            lineNumber: 713,
                            columnNumber: 219
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/board/dashboard-editor-performance.tsx",
                    lineNumber: 713,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0));
                $[25] = t20;
            } else {
                t20 = $[25];
            }
            const t21 = `${selected.onTimeRate}%`;
            let t22;
            if ($[26] !== t21) {
                t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatMini, {
                    icon: t20,
                    label: "On-Time Rate",
                    value: t21
                }, void 0, false, {
                    fileName: "[project]/src/components/board/dashboard-editor-performance.tsx",
                    lineNumber: 721,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0));
                $[26] = t21;
                $[27] = t22;
            } else {
                t22 = $[27];
            }
            let t23;
            if ($[28] !== t13 || $[29] !== t16 || $[30] !== t19 || $[31] !== t22) {
                t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-6 grid grid-cols-2 gap-3 sm:grid-cols-4",
                    children: [
                        t13,
                        t16,
                        t19,
                        t22
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/board/dashboard-editor-performance.tsx",
                    lineNumber: 729,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0));
                $[28] = t13;
                $[29] = t16;
                $[30] = t19;
                $[31] = t22;
                $[32] = t23;
            } else {
                t23 = $[32];
            }
            t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChartCard, {
                title: "Editor Performance",
                icon: t5,
                children: [
                    t8,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-5 flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: selected.primaryCategory && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "rounded-[var(--radius-sm)] bg-gray-100 px-2 py-0.5 text-xs font-semibold text-[var(--text-secondary)]",
                                            children: "P1"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/board/dashboard-editor-performance.tsx",
                                            lineNumber: 738,
                                            columnNumber: 192
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CategoryBadge, {
                                            category: selected.primaryCategory
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/board/dashboard-editor-performance.tsx",
                                            lineNumber: 738,
                                            columnNumber: 321
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true)
                            }, void 0, false, {
                                fileName: "[project]/src/components/board/dashboard-editor-performance.tsx",
                                lineNumber: 738,
                                columnNumber: 120
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-right",
                                children: [
                                    t9,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-2xl font-bold text-[var(--text-primary)]",
                                        children: selected.score
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/board/dashboard-editor-performance.tsx",
                                        lineNumber: 738,
                                        columnNumber: 416
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    t10
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/board/dashboard-editor-performance.tsx",
                                lineNumber: 738,
                                columnNumber: 384
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/board/dashboard-editor-performance.tsx",
                        lineNumber: 738,
                        columnNumber: 64
                    }, ("TURBOPACK compile-time value", void 0)),
                    t23,
                    selected.specializations.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "mb-3 text-sm font-semibold text-[var(--text-primary)]",
                                children: "Specialization Performance"
                            }, void 0, false, {
                                fileName: "[project]/src/components/board/dashboard-editor-performance.tsx",
                                lineNumber: 738,
                                columnNumber: 570
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: selected.specializations.map((spec)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--background)] p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mb-3 flex items-center justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `inline-block h-2.5 w-2.5 rounded-full ${CATEGORY_BG[spec.category]}`
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/board/dashboard-editor-performance.tsx",
                                                                lineNumber: 738,
                                                                columnNumber: 954
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm font-medium text-[var(--text-primary)]",
                                                                children: spec.category
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/board/dashboard-editor-performance.tsx",
                                                                lineNumber: 738,
                                                                columnNumber: 1044
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            selected.primaryCategory === spec.category && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "rounded-[var(--radius-sm)] bg-gray-200 px-1.5 py-0 text-[10px] font-semibold text-[var(--text-secondary)]",
                                                                children: "P1"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/board/dashboard-editor-performance.tsx",
                                                                lineNumber: 738,
                                                                columnNumber: 1178
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/board/dashboard-editor-performance.tsx",
                                                        lineNumber: 738,
                                                        columnNumber: 913
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs text-[var(--text-tertiary)]",
                                                        children: [
                                                            spec.completed,
                                                            " completed"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/board/dashboard-editor-performance.tsx",
                                                        lineNumber: 738,
                                                        columnNumber: 1318
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/board/dashboard-editor-performance.tsx",
                                                lineNumber: 738,
                                                columnNumber: 857
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-2 gap-3 sm:grid-cols-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SpecMetric, {
                                                        label: "Time Accuracy",
                                                        value: "0%"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/board/dashboard-editor-performance.tsx",
                                                        lineNumber: 738,
                                                        columnNumber: 1466
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SpecMetric, {
                                                        label: "This Week",
                                                        value: `${spec.thisWeek}/${spec.thisWeekTarget}`,
                                                        trending: spec.thisWeek > 0
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/board/dashboard-editor-performance.tsx",
                                                        lineNumber: 738,
                                                        columnNumber: 1513
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SpecMetric, {
                                                        label: "Items/Hour",
                                                        value: `${spec.itemsPerHour}/${spec.itemsPerHourTarget}`,
                                                        trending: spec.itemsPerHour > 0
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/board/dashboard-editor-performance.tsx",
                                                        lineNumber: 738,
                                                        columnNumber: 1624
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SpecMetric, {
                                                        label: "On-Time",
                                                        value: `${spec.onTimeRate}%/${spec.onTimeTarget}%`,
                                                        trending: spec.onTimeRate > 0
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/board/dashboard-editor-performance.tsx",
                                                        lineNumber: 738,
                                                        columnNumber: 1748
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/board/dashboard-editor-performance.tsx",
                                                lineNumber: 738,
                                                columnNumber: 1411
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, spec.category, true, {
                                        fileName: "[project]/src/components/board/dashboard-editor-performance.tsx",
                                        lineNumber: 738,
                                        columnNumber: 736
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/src/components/board/dashboard-editor-performance.tsx",
                                lineNumber: 738,
                                columnNumber: 671
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/board/dashboard-editor-performance.tsx",
                        lineNumber: 738,
                        columnNumber: 565
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/board/dashboard-editor-performance.tsx",
                lineNumber: 738,
                columnNumber: 12
            }, ("TURBOPACK compile-time value", void 0));
        }
        $[3] = editors;
        $[4] = selectedId;
        $[5] = t2;
        $[6] = t3;
    } else {
        t2 = $[5];
        t3 = $[6];
    }
    if (t3 !== Symbol.for("react.early_return_sentinel")) {
        return t3;
    }
    return t2;
};
_s(EditorPerformanceDetail, "+K0O552IYuYrDYV5AIsdFAnHAoc=");
_c8 = EditorPerformanceDetail;
/** Small stat card within the detail section */ const StatMini = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(11);
    if ($[0] !== "6dd07176afc37a0ee80b95747d8cb818d42302766e196b6a982fb9c719ee9707") {
        for(let $i = 0; $i < 11; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6dd07176afc37a0ee80b95747d8cb818d42302766e196b6a982fb9c719ee9707";
    }
    const { icon, label, value } = t0;
    let t1;
    if ($[1] !== label) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-xs",
            children: label
        }, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-editor-performance.tsx",
            lineNumber: 770,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = label;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== icon || $[4] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-1 flex items-center gap-1.5 text-[var(--text-tertiary)]",
            children: [
                icon,
                t1
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/dashboard-editor-performance.tsx",
            lineNumber: 778,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[3] = icon;
        $[4] = t1;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    let t3;
    if ($[6] !== value) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-lg font-bold text-[var(--text-primary)]",
            children: value
        }, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-editor-performance.tsx",
            lineNumber: 787,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[6] = value;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    let t4;
    if ($[8] !== t2 || $[9] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--background)] px-4 py-3",
            children: [
                t2,
                t3
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/dashboard-editor-performance.tsx",
            lineNumber: 795,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[8] = t2;
        $[9] = t3;
        $[10] = t4;
    } else {
        t4 = $[10];
    }
    return t4;
};
_c9 = StatMini;
/** Specialization metric with optional trending indicator */ const SpecMetric = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(13);
    if ($[0] !== "6dd07176afc37a0ee80b95747d8cb818d42302766e196b6a982fb9c719ee9707") {
        for(let $i = 0; $i < 13; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6dd07176afc37a0ee80b95747d8cb818d42302766e196b6a982fb9c719ee9707";
    }
    const { label, value, trending } = t0;
    let t1;
    if ($[1] !== label) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-[var(--text-tertiary)]",
            children: label
        }, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-editor-performance.tsx",
            lineNumber: 821,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = label;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== value) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-sm font-semibold text-[var(--text-primary)]",
            children: value
        }, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-editor-performance.tsx",
            lineNumber: 829,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[3] = value;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== trending) {
        t3 = trending !== undefined && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "10",
            height: "10",
            viewBox: "0 0 10 10",
            fill: "none",
            className: trending ? "text-emerald-500" : "text-red-400",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: trending ? "M1 7L5 3L9 7" : "M1 3L5 7L9 3",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/board/dashboard-editor-performance.tsx",
                lineNumber: 837,
                columnNumber: 155
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-editor-performance.tsx",
            lineNumber: 837,
            columnNumber: 36
        }, ("TURBOPACK compile-time value", void 0));
        $[5] = trending;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    let t4;
    if ($[7] !== t2 || $[8] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-1",
            children: [
                t2,
                t3
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/dashboard-editor-performance.tsx",
            lineNumber: 845,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = t2;
        $[8] = t3;
        $[9] = t4;
    } else {
        t4 = $[9];
    }
    let t5;
    if ($[10] !== t1 || $[11] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t1,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/dashboard-editor-performance.tsx",
            lineNumber: 854,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[10] = t1;
        $[11] = t4;
        $[12] = t5;
    } else {
        t5 = $[12];
    }
    return t5;
};
_c10 = SpecMetric;
const EditorEfficiencyByType = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(15);
    if ($[0] !== "6dd07176afc37a0ee80b95747d8cb818d42302766e196b6a982fb9c719ee9707") {
        for(let $i = 0; $i < 15; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6dd07176afc37a0ee80b95747d8cb818d42302766e196b6a982fb9c719ee9707";
    }
    const { editors } = t0;
    let t1;
    if ($[1] !== editors) {
        t1 = editors.filter(_temp5).map(_temp6);
        $[1] = editors;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const data = t1;
    if (data.length === 0) {
        let t2;
        if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
            t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChartCard, {
                title: "Editor Efficiency by Type",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "py-8 text-center text-sm text-[var(--text-tertiary)]",
                    children: "No data available"
                }, void 0, false, {
                    fileName: "[project]/src/components/board/dashboard-editor-performance.tsx",
                    lineNumber: 894,
                    columnNumber: 57
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/board/dashboard-editor-performance.tsx",
                lineNumber: 894,
                columnNumber: 12
            }, ("TURBOPACK compile-time value", void 0));
            $[3] = t2;
        } else {
            t2 = $[3];
        }
        return t2;
    }
    let t2;
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {
            top: 0,
            right: 20,
            left: 0,
            bottom: 0
        };
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
            strokeDasharray: "3 3",
            stroke: "var(--border)"
        }, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-editor-performance.tsx",
            lineNumber: 910,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[4] = t2;
        $[5] = t3;
    } else {
        t2 = $[4];
        t3 = $[5];
    }
    let t4;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
            dataKey: "name",
            tick: {
                fill: "var(--text-tertiary)",
                fontSize: 12
            },
            interval: 0
        }, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-editor-performance.tsx",
            lineNumber: 919,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    let t5;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
            tick: {
                fill: "var(--text-tertiary)",
                fontSize: 12
            }
        }, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-editor-performance.tsx",
            lineNumber: 929,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    let t6;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
            contentStyle: {
                backgroundColor: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius-md)",
                fontSize: 13
            }
        }, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-editor-performance.tsx",
            lineNumber: 939,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[8] = t6;
    } else {
        t6 = $[8];
    }
    let t7;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Legend"], {
            verticalAlign: "bottom",
            iconType: "square",
            wrapperStyle: {
                fontSize: 12,
                paddingTop: 16
            }
        }, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-editor-performance.tsx",
            lineNumber: 951,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[9] = t7;
    } else {
        t7 = $[9];
    }
    let t8;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
            dataKey: "Design",
            fill: CATEGORY_COLORS.Design,
            radius: [
                2,
                2,
                0,
                0
            ]
        }, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-editor-performance.tsx",
            lineNumber: 961,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[10] = t8;
    } else {
        t8 = $[10];
    }
    let t9;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
            dataKey: "Video",
            fill: CATEGORY_COLORS.Video,
            radius: [
                2,
                2,
                0,
                0
            ]
        }, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-editor-performance.tsx",
            lineNumber: 968,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[11] = t9;
    } else {
        t9 = $[11];
    }
    let t10;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
            dataKey: "UI/UX",
            fill: CATEGORY_COLORS["UI/UX"],
            radius: [
                2,
                2,
                0,
                0
            ]
        }, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-editor-performance.tsx",
            lineNumber: 975,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[12] = t10;
    } else {
        t10 = $[12];
    }
    let t11;
    if ($[13] !== data) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChartCard, {
            title: "Editor Efficiency by Type",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                width: "100%",
                height: 320,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BarChart"], {
                    data: data,
                    margin: t2,
                    children: [
                        t3,
                        t4,
                        t5,
                        t6,
                        t7,
                        t8,
                        t9,
                        t10
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/board/dashboard-editor-performance.tsx",
                    lineNumber: 982,
                    columnNumber: 103
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/board/dashboard-editor-performance.tsx",
                lineNumber: 982,
                columnNumber: 56
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-editor-performance.tsx",
            lineNumber: 982,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[13] = data;
        $[14] = t11;
    } else {
        t11 = $[14];
    }
    return t11;
};
_c11 = EditorEfficiencyByType;
const DashboardEditorPerformance = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
    if ($[0] !== "6dd07176afc37a0ee80b95747d8cb818d42302766e196b6a982fb9c719ee9707") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6dd07176afc37a0ee80b95747d8cb818d42302766e196b6a982fb9c719ee9707";
    }
    const { requests, members } = t0;
    let t1;
    if ($[1] !== members || $[2] !== requests) {
        t1 = computeEditorStats(members, requests);
        $[1] = members;
        $[2] = requests;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    const editors = t1;
    let t2;
    if ($[4] !== editors) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EditorWorkloadChart, {
                    editors: editors
                }, void 0, false, {
                    fileName: "[project]/src/components/board/dashboard-editor-performance.tsx",
                    lineNumber: 1023,
                    columnNumber: 37
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EditorPerformanceTable, {
                    editors: editors
                }, void 0, false, {
                    fileName: "[project]/src/components/board/dashboard-editor-performance.tsx",
                    lineNumber: 1023,
                    columnNumber: 78
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EditorPerformanceDetail, {
                    editors: editors
                }, void 0, false, {
                    fileName: "[project]/src/components/board/dashboard-editor-performance.tsx",
                    lineNumber: 1023,
                    columnNumber: 122
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EditorEfficiencyByType, {
                    editors: editors
                }, void 0, false, {
                    fileName: "[project]/src/components/board/dashboard-editor-performance.tsx",
                    lineNumber: 1023,
                    columnNumber: 167
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/dashboard-editor-performance.tsx",
            lineNumber: 1023,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[4] = editors;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    return t2;
};
_c12 = DashboardEditorPerformance;
function _temp(e) {
    return {
        name: e.name.length > 15 ? e.name.slice(0, 15) + "\u2026" : e.name,
        fullName: e.name,
        "In Progress": e.inProgress,
        Review: e.review,
        Completed: e.completed
    };
}
function _temp2(editor) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
        className: "border-b border-[var(--border)] last:border-b-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: "py-3.5 pr-4 font-medium text-[var(--text-primary)]",
                children: editor.name.length > 20 ? editor.name.slice(0, 20) + "\u2026" : editor.name
            }, void 0, false, {
                fileName: "[project]/src/components/board/dashboard-editor-performance.tsx",
                lineNumber: 1041,
                columnNumber: 90
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: "py-3.5 px-4 text-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CategoryBadge, {
                    category: editor.primaryCategory
                }, void 0, false, {
                    fileName: "[project]/src/components/board/dashboard-editor-performance.tsx",
                    lineNumber: 1041,
                    columnNumber: 279
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/board/dashboard-editor-performance.tsx",
                lineNumber: 1041,
                columnNumber: 239
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: "py-3.5 px-4 text-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CategoryBadge, {
                    category: editor.secondaryCategory
                }, void 0, false, {
                    fileName: "[project]/src/components/board/dashboard-editor-performance.tsx",
                    lineNumber: 1041,
                    columnNumber: 375
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/board/dashboard-editor-performance.tsx",
                lineNumber: 1041,
                columnNumber: 335
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: "py-3.5 px-4 text-center text-[var(--text-primary)]",
                children: editor.active
            }, void 0, false, {
                fileName: "[project]/src/components/board/dashboard-editor-performance.tsx",
                lineNumber: 1041,
                columnNumber: 433
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: "py-3.5 px-4 text-center text-[var(--text-primary)]",
                children: editor.done
            }, void 0, false, {
                fileName: "[project]/src/components/board/dashboard-editor-performance.tsx",
                lineNumber: 1041,
                columnNumber: 520
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: "py-3.5 px-4 text-center text-[var(--text-primary)]",
                children: [
                    editor.hours,
                    "h"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/board/dashboard-editor-performance.tsx",
                lineNumber: 1041,
                columnNumber: 605
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: "py-3.5 px-4 text-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PercentBadge, {
                    value: editor.onTimeRate
                }, void 0, false, {
                    fileName: "[project]/src/components/board/dashboard-editor-performance.tsx",
                    lineNumber: 1041,
                    columnNumber: 732
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/board/dashboard-editor-performance.tsx",
                lineNumber: 1041,
                columnNumber: 692
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: "py-3.5 pl-4 text-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PercentBadge, {
                    value: editor.score
                }, void 0, false, {
                    fileName: "[project]/src/components/board/dashboard-editor-performance.tsx",
                    lineNumber: 1041,
                    columnNumber: 819
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/board/dashboard-editor-performance.tsx",
                lineNumber: 1041,
                columnNumber: 779
            }, this)
        ]
    }, editor.id, true, {
        fileName: "[project]/src/components/board/dashboard-editor-performance.tsx",
        lineNumber: 1041,
        columnNumber: 10
    }, this);
}
function _temp3(e) {
    return e.done > 0 || e.active > 0;
}
function _temp4(v) {
    return v > 0;
}
function _temp5(e) {
    return Object.values(e.categoryBreakdown).some(_temp4);
}
function _temp6(e_0) {
    return {
        name: e_0.name.length > 12 ? e_0.name.slice(0, 12) + "\u2026" : e_0.name,
        Design: e_0.categoryBreakdown.Design,
        Video: e_0.categoryBreakdown.Video,
        "UI/UX": e_0.categoryBreakdown["UI/UX"]
    };
}
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12;
__turbopack_context__.k.register(_c, "BarChartIcon");
__turbopack_context__.k.register(_c1, "TrendingUpIcon");
__turbopack_context__.k.register(_c2, "ZapIcon");
__turbopack_context__.k.register(_c3, "ChartCard");
__turbopack_context__.k.register(_c4, "CategoryBadge");
__turbopack_context__.k.register(_c5, "PercentBadge");
__turbopack_context__.k.register(_c6, "EditorWorkloadChart");
__turbopack_context__.k.register(_c7, "EditorPerformanceTable");
__turbopack_context__.k.register(_c8, "EditorPerformanceDetail");
__turbopack_context__.k.register(_c9, "StatMini");
__turbopack_context__.k.register(_c10, "SpecMetric");
__turbopack_context__.k.register(_c11, "EditorEfficiencyByType");
__turbopack_context__.k.register(_c12, "DashboardEditorPerformance");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/stores/resource-store.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useResourceStore",
    ()=>useResourceStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
;
const useResourceStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])((set, get)=>({
        resources: [],
        addResource: (resource)=>{
            set((state)=>({
                    resources: [
                        ...state.resources,
                        resource
                    ]
                }));
        },
        updateResource: (id, updates)=>{
            set((state)=>({
                    resources: state.resources.map((r)=>r.id === id ? {
                            ...r,
                            ...updates,
                            updatedAt: new Date().toISOString()
                        } : r)
                }));
        },
        deleteResource: (id)=>{
            set((state)=>({
                    resources: state.resources.filter((r)=>r.id !== id)
                }));
        },
        getByCategory: (category)=>{
            return get().resources.filter((r)=>r.category === category);
        }
    }));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/board/dashboard-resources.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DashboardResources",
    ()=>DashboardResources
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/types/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$resource$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/resource-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$auth$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/auth-store.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
// ============================================
// CREDENTIALS ACCESS PASSWORD
// ============================================
const CREDENTIALS_ACCESS_PASSWORD = 'creative@2026';
// ============================================
// CONSTANTS
// ============================================
const RESOURCE_TABS = [
    {
        value: 'important_links',
        label: 'Important Links',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LinkIcon, {}, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-resources.tsx",
            lineNumber: 27,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        value: 'important_assets',
        label: 'Important Assets',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ImageIcon, {}, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-resources.tsx",
            lineNumber: 31,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        value: 'credentials',
        label: 'Credentials',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KeyIcon, {}, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-resources.tsx",
            lineNumber: 35,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }
];
// ============================================
// ICONS
// ============================================
function LinkIcon() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "df6f65cc34e40332df5774fb95d8f3cfa7dd4f9913fc469a41f4fa5f40d8578d") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "df6f65cc34e40332df5774fb95d8f3cfa7dd4f9913fc469a41f4fa5f40d8578d";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "16",
            height: "16",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            viewBox: "0 0 24 24",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"
                }, void 0, false, {
                    fileName: "[project]/src/components/board/dashboard-resources.tsx",
                    lineNumber: 52,
                    columnNumber: 153
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
                }, void 0, false, {
                    fileName: "[project]/src/components/board/dashboard-resources.tsx",
                    lineNumber: 52,
                    columnNumber: 225
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/dashboard-resources.tsx",
            lineNumber: 52,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
}
_c = LinkIcon;
function ImageIcon() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "df6f65cc34e40332df5774fb95d8f3cfa7dd4f9913fc469a41f4fa5f40d8578d") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "df6f65cc34e40332df5774fb95d8f3cfa7dd4f9913fc469a41f4fa5f40d8578d";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "16",
            height: "16",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            viewBox: "0 0 24 24",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "3",
                    y: "3",
                    width: "18",
                    height: "18",
                    rx: "2",
                    ry: "2"
                }, void 0, false, {
                    fileName: "[project]/src/components/board/dashboard-resources.tsx",
                    lineNumber: 69,
                    columnNumber: 153
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "8.5",
                    cy: "8.5",
                    r: "1.5"
                }, void 0, false, {
                    fileName: "[project]/src/components/board/dashboard-resources.tsx",
                    lineNumber: 69,
                    columnNumber: 210
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                    points: "21 15 16 10 5 21"
                }, void 0, false, {
                    fileName: "[project]/src/components/board/dashboard-resources.tsx",
                    lineNumber: 69,
                    columnNumber: 246
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/dashboard-resources.tsx",
            lineNumber: 69,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
}
_c1 = ImageIcon;
function KeyIcon() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "df6f65cc34e40332df5774fb95d8f3cfa7dd4f9913fc469a41f4fa5f40d8578d") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "df6f65cc34e40332df5774fb95d8f3cfa7dd4f9913fc469a41f4fa5f40d8578d";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "16",
            height: "16",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"
            }, void 0, false, {
                fileName: "[project]/src/components/board/dashboard-resources.tsx",
                lineNumber: 86,
                columnNumber: 153
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-resources.tsx",
            lineNumber: 86,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
}
_c2 = KeyIcon;
function PlusIcon() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "df6f65cc34e40332df5774fb95d8f3cfa7dd4f9913fc469a41f4fa5f40d8578d") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "df6f65cc34e40332df5774fb95d8f3cfa7dd4f9913fc469a41f4fa5f40d8578d";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "16",
            height: "16",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            viewBox: "0 0 24 24",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "12",
                    y1: "5",
                    x2: "12",
                    y2: "19"
                }, void 0, false, {
                    fileName: "[project]/src/components/board/dashboard-resources.tsx",
                    lineNumber: 103,
                    columnNumber: 153
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "5",
                    y1: "12",
                    x2: "19",
                    y2: "12"
                }, void 0, false, {
                    fileName: "[project]/src/components/board/dashboard-resources.tsx",
                    lineNumber: 103,
                    columnNumber: 192
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/dashboard-resources.tsx",
            lineNumber: 103,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
}
_c3 = PlusIcon;
function ExternalLinkIcon() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "df6f65cc34e40332df5774fb95d8f3cfa7dd4f9913fc469a41f4fa5f40d8578d") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "df6f65cc34e40332df5774fb95d8f3cfa7dd4f9913fc469a41f4fa5f40d8578d";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "14",
            height: "14",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            viewBox: "0 0 24 24",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                }, void 0, false, {
                    fileName: "[project]/src/components/board/dashboard-resources.tsx",
                    lineNumber: 120,
                    columnNumber: 153
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                    points: "15 3 21 3 21 9"
                }, void 0, false, {
                    fileName: "[project]/src/components/board/dashboard-resources.tsx",
                    lineNumber: 120,
                    columnNumber: 222
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "10",
                    y1: "14",
                    x2: "21",
                    y2: "3"
                }, void 0, false, {
                    fileName: "[project]/src/components/board/dashboard-resources.tsx",
                    lineNumber: 120,
                    columnNumber: 258
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/dashboard-resources.tsx",
            lineNumber: 120,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
}
_c4 = ExternalLinkIcon;
function TrashIcon() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "df6f65cc34e40332df5774fb95d8f3cfa7dd4f9913fc469a41f4fa5f40d8578d") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "df6f65cc34e40332df5774fb95d8f3cfa7dd4f9913fc469a41f4fa5f40d8578d";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "14",
            height: "14",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            viewBox: "0 0 24 24",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                    points: "3 6 5 6 21 6"
                }, void 0, false, {
                    fileName: "[project]/src/components/board/dashboard-resources.tsx",
                    lineNumber: 137,
                    columnNumber: 153
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
                }, void 0, false, {
                    fileName: "[project]/src/components/board/dashboard-resources.tsx",
                    lineNumber: 137,
                    columnNumber: 187
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/dashboard-resources.tsx",
            lineNumber: 137,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
}
_c5 = TrashIcon;
function EditIcon() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "df6f65cc34e40332df5774fb95d8f3cfa7dd4f9913fc469a41f4fa5f40d8578d") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "df6f65cc34e40332df5774fb95d8f3cfa7dd4f9913fc469a41f4fa5f40d8578d";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "14",
            height: "14",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            viewBox: "0 0 24 24",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
                }, void 0, false, {
                    fileName: "[project]/src/components/board/dashboard-resources.tsx",
                    lineNumber: 154,
                    columnNumber: 153
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"
                }, void 0, false, {
                    fileName: "[project]/src/components/board/dashboard-resources.tsx",
                    lineNumber: 154,
                    columnNumber: 224
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/dashboard-resources.tsx",
            lineNumber: 154,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
}
_c6 = EditIcon;
function EyeIcon() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "df6f65cc34e40332df5774fb95d8f3cfa7dd4f9913fc469a41f4fa5f40d8578d") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "df6f65cc34e40332df5774fb95d8f3cfa7dd4f9913fc469a41f4fa5f40d8578d";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "14",
            height: "14",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            viewBox: "0 0 24 24",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                }, void 0, false, {
                    fileName: "[project]/src/components/board/dashboard-resources.tsx",
                    lineNumber: 171,
                    columnNumber: 153
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "12",
                    cy: "12",
                    r: "3"
                }, void 0, false, {
                    fileName: "[project]/src/components/board/dashboard-resources.tsx",
                    lineNumber: 171,
                    columnNumber: 210
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/dashboard-resources.tsx",
            lineNumber: 171,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
}
_c7 = EyeIcon;
function EyeOffIcon() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "df6f65cc34e40332df5774fb95d8f3cfa7dd4f9913fc469a41f4fa5f40d8578d") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "df6f65cc34e40332df5774fb95d8f3cfa7dd4f9913fc469a41f4fa5f40d8578d";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "14",
            height: "14",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            viewBox: "0 0 24 24",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"
                }, void 0, false, {
                    fileName: "[project]/src/components/board/dashboard-resources.tsx",
                    lineNumber: 188,
                    columnNumber: 153
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "1",
                    y1: "1",
                    x2: "23",
                    y2: "23"
                }, void 0, false, {
                    fileName: "[project]/src/components/board/dashboard-resources.tsx",
                    lineNumber: 188,
                    columnNumber: 346
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/dashboard-resources.tsx",
            lineNumber: 188,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
}
_c8 = EyeOffIcon;
function CloseIcon() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "df6f65cc34e40332df5774fb95d8f3cfa7dd4f9913fc469a41f4fa5f40d8578d") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "df6f65cc34e40332df5774fb95d8f3cfa7dd4f9913fc469a41f4fa5f40d8578d";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "16",
            height: "16",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            viewBox: "0 0 24 24",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "18",
                    y1: "6",
                    x2: "6",
                    y2: "18"
                }, void 0, false, {
                    fileName: "[project]/src/components/board/dashboard-resources.tsx",
                    lineNumber: 205,
                    columnNumber: 153
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "6",
                    y1: "6",
                    x2: "18",
                    y2: "18"
                }, void 0, false, {
                    fileName: "[project]/src/components/board/dashboard-resources.tsx",
                    lineNumber: 205,
                    columnNumber: 191
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/dashboard-resources.tsx",
            lineNumber: 205,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
}
_c9 = CloseIcon;
function CopyIcon() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "df6f65cc34e40332df5774fb95d8f3cfa7dd4f9913fc469a41f4fa5f40d8578d") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "df6f65cc34e40332df5774fb95d8f3cfa7dd4f9913fc469a41f4fa5f40d8578d";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "14",
            height: "14",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            viewBox: "0 0 24 24",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "9",
                    y: "9",
                    width: "13",
                    height: "13",
                    rx: "2",
                    ry: "2"
                }, void 0, false, {
                    fileName: "[project]/src/components/board/dashboard-resources.tsx",
                    lineNumber: 222,
                    columnNumber: 153
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"
                }, void 0, false, {
                    fileName: "[project]/src/components/board/dashboard-resources.tsx",
                    lineNumber: 222,
                    columnNumber: 210
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/dashboard-resources.tsx",
            lineNumber: 222,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
}
_c10 = CopyIcon;
function LockIcon() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "df6f65cc34e40332df5774fb95d8f3cfa7dd4f9913fc469a41f4fa5f40d8578d") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "df6f65cc34e40332df5774fb95d8f3cfa7dd4f9913fc469a41f4fa5f40d8578d";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "32",
            height: "32",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            viewBox: "0 0 24 24",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "3",
                    y: "11",
                    width: "18",
                    height: "11",
                    rx: "2",
                    ry: "2"
                }, void 0, false, {
                    fileName: "[project]/src/components/board/dashboard-resources.tsx",
                    lineNumber: 239,
                    columnNumber: 155
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M7 11V7a5 5 0 0 1 10 0v4"
                }, void 0, false, {
                    fileName: "[project]/src/components/board/dashboard-resources.tsx",
                    lineNumber: 239,
                    columnNumber: 213
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/dashboard-resources.tsx",
            lineNumber: 239,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
}
_c11 = LockIcon;
const CredentialsGate = (t0)=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(25);
    if ($[0] !== "df6f65cc34e40332df5774fb95d8f3cfa7dd4f9913fc469a41f4fa5f40d8578d") {
        for(let $i = 0; $i < 25; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "df6f65cc34e40332df5774fb95d8f3cfa7dd4f9913fc469a41f4fa5f40d8578d";
    }
    const { onUnlock } = t0;
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [shake, setShake] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t1;
    if ($[1] !== onUnlock || $[2] !== password) {
        t1 = (e)=>{
            e.preventDefault();
            if (password === CREDENTIALS_ACCESS_PASSWORD) {
                onUnlock();
            } else {
                setError(true);
                setShake(true);
                setTimeout(()=>setShake(false), 500);
            }
        };
        $[1] = onUnlock;
        $[2] = password;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    const handleSubmit = t1;
    const t2 = `w-full max-w-sm rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] p-8 text-center ${shake ? "animate-[shake_0.5s_ease-in-out]" : ""}`;
    let t3;
    let t4;
    let t5;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--background)] text-[var(--text-tertiary)]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LockIcon, {}, void 0, false, {
                fileName: "[project]/src/components/board/dashboard-resources.tsx",
                lineNumber: 292,
                columnNumber: 147
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-resources.tsx",
            lineNumber: 292,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-base font-semibold text-[var(--text-primary)]",
            children: "Password Required"
        }, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-resources.tsx",
            lineNumber: 293,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-1 text-sm text-[var(--text-tertiary)]",
            children: "Enter the access password to view credentials"
        }, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-resources.tsx",
            lineNumber: 294,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[4] = t3;
        $[5] = t4;
        $[6] = t5;
    } else {
        t3 = $[4];
        t4 = $[5];
        t5 = $[6];
    }
    let t6;
    if ($[7] !== error) {
        t6 = (e_0)=>{
            setPassword(e_0.target.value);
            if (error) {
                setError(false);
            }
        };
        $[7] = error;
        $[8] = t6;
    } else {
        t6 = $[8];
    }
    const t7 = `w-full rounded-[var(--radius-md)] border bg-[var(--background)] px-3 py-2.5 text-center text-sm text-[var(--text-primary)] outline-none transition-colors placeholder:text-[var(--text-tertiary)] focus:border-[var(--primary)] ${error ? "border-red-400" : "border-[var(--border)] hover:border-[var(--border-hover)]"}`;
    let t8;
    if ($[9] !== password || $[10] !== t6 || $[11] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "password",
            value: password,
            onChange: t6,
            placeholder: "Enter password",
            className: t7,
            "aria-label": "Credentials access password",
            autoFocus: true
        }, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-resources.tsx",
            lineNumber: 319,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[9] = password;
        $[10] = t6;
        $[11] = t7;
        $[12] = t8;
    } else {
        t8 = $[12];
    }
    let t9;
    if ($[13] !== error) {
        t9 = error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-1.5 text-xs text-red-500",
            children: "Incorrect password. Please try again."
        }, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-resources.tsx",
            lineNumber: 329,
            columnNumber: 19
        }, ("TURBOPACK compile-time value", void 0));
        $[13] = error;
        $[14] = t9;
    } else {
        t9 = $[14];
    }
    let t10;
    if ($[15] !== t8 || $[16] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t8,
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/dashboard-resources.tsx",
            lineNumber: 337,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[15] = t8;
        $[16] = t9;
        $[17] = t10;
    } else {
        t10 = $[17];
    }
    let t11;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "submit",
            className: "w-full rounded-[var(--radius-md)] bg-[var(--text-primary)] px-4 py-2.5 text-sm font-medium text-[var(--surface)] transition-opacity hover:opacity-90",
            children: "Unlock Credentials"
        }, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-resources.tsx",
            lineNumber: 346,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[18] = t11;
    } else {
        t11 = $[18];
    }
    let t12;
    if ($[19] !== handleSubmit || $[20] !== t10) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: handleSubmit,
            className: "mt-5 space-y-3",
            children: [
                t10,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/dashboard-resources.tsx",
            lineNumber: 353,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[19] = handleSubmit;
        $[20] = t10;
        $[21] = t12;
    } else {
        t12 = $[21];
    }
    let t13;
    if ($[22] !== t12 || $[23] !== t2) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center justify-center py-16",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: t2,
                children: [
                    t3,
                    t4,
                    t5,
                    t12
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/board/dashboard-resources.tsx",
                lineNumber: 362,
                columnNumber: 76
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-resources.tsx",
            lineNumber: 362,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[22] = t12;
        $[23] = t2;
        $[24] = t13;
    } else {
        t13 = $[24];
    }
    return t13;
};
_s(CredentialsGate, "0o53jZ+iNC2uyC869tTHjFklMFI=");
_c12 = CredentialsGate;
const INITIAL_FORM = {
    title: '',
    description: '',
    url: '',
    fileName: '',
    username: '',
    password: ''
};
const ResourceModal = (t0)=>{
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(60);
    if ($[0] !== "df6f65cc34e40332df5774fb95d8f3cfa7dd4f9913fc469a41f4fa5f40d8578d") {
        for(let $i = 0; $i < 60; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "df6f65cc34e40332df5774fb95d8f3cfa7dd4f9913fc469a41f4fa5f40d8578d";
    }
    const { category, editingResource, onClose, onSubmit } = t0;
    let t1;
    if ($[1] !== editingResource) {
        t1 = editingResource ? {
            title: editingResource.title,
            description: editingResource.description,
            url: editingResource.url ?? "",
            fileName: editingResource.fileName ?? "",
            username: editingResource.username ?? "",
            password: editingResource.password ?? ""
        } : INITIAL_FORM;
        $[1] = editingResource;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    let t2;
    if ($[3] !== form || $[4] !== onSubmit) {
        t2 = (e)=>{
            e.preventDefault();
            if (!form.title.trim()) {
                return;
            }
            onSubmit(form);
        };
        $[3] = form;
        $[4] = onSubmit;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    const handleSubmit = t2;
    let t3;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = (field, value)=>{
            setForm((prev)=>({
                    ...prev,
                    [field]: value
                }));
        };
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    const updateField = t3;
    const t4 = editingResource ? "Edit resource" : "Add resource";
    const t5 = editingResource ? "Edit" : "Add";
    const t6 = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RESOURCE_CATEGORY_LABELS"][category];
    let t7;
    if ($[7] !== t6) {
        t7 = t6.replace("Important ", "");
        $[7] = t6;
        $[8] = t7;
    } else {
        t7 = $[8];
    }
    let t8;
    if ($[9] !== t5 || $[10] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-base font-semibold text-[var(--text-primary)]",
            children: [
                t5,
                " ",
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/dashboard-resources.tsx",
            lineNumber: 470,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[9] = t5;
        $[10] = t7;
        $[11] = t8;
    } else {
        t8 = $[11];
    }
    let t9;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CloseIcon, {}, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-resources.tsx",
            lineNumber: 479,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[12] = t9;
    } else {
        t9 = $[12];
    }
    let t10;
    if ($[13] !== onClose) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: onClose,
            className: "rounded-[var(--radius-sm)] p-1 text-[var(--text-tertiary)] transition-colors hover:bg-[var(--background)] hover:text-[var(--text-primary)]",
            "aria-label": "Close modal",
            children: t9
        }, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-resources.tsx",
            lineNumber: 486,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[13] = onClose;
        $[14] = t10;
    } else {
        t10 = $[14];
    }
    let t11;
    if ($[15] !== t10 || $[16] !== t8) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between border-b border-[var(--border)] px-6 py-4",
            children: [
                t8,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/dashboard-resources.tsx",
            lineNumber: 494,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[15] = t10;
        $[16] = t8;
        $[17] = t11;
    } else {
        t11 = $[17];
    }
    let t12;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            htmlFor: "resource-title",
            className: "mb-1.5 block text-sm font-medium text-[var(--text-primary)]",
            children: [
                "Title ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-red-500",
                    children: "*"
                }, void 0, false, {
                    fileName: "[project]/src/components/board/dashboard-resources.tsx",
                    lineNumber: 503,
                    columnNumber: 121
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/dashboard-resources.tsx",
            lineNumber: 503,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[18] = t12;
    } else {
        t12 = $[18];
    }
    let t13;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = (e_1)=>updateField("title", e_1.target.value);
        $[19] = t13;
    } else {
        t13 = $[19];
    }
    let t14;
    if ($[20] !== form.title) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t12,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    id: "resource-title",
                    type: "text",
                    value: form.title,
                    onChange: t13,
                    placeholder: "Enter title",
                    className: "w-full rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--background)] px-3 py-2 text-sm text-[var(--text-primary)] outline-none transition-colors placeholder:text-[var(--text-tertiary)] hover:border-[var(--border-hover)] focus:border-[var(--primary)]",
                    required: true,
                    autoFocus: true
                }, void 0, false, {
                    fileName: "[project]/src/components/board/dashboard-resources.tsx",
                    lineNumber: 517,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/dashboard-resources.tsx",
            lineNumber: 517,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[20] = form.title;
        $[21] = t14;
    } else {
        t14 = $[21];
    }
    let t15;
    if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            htmlFor: "resource-description",
            className: "mb-1.5 block text-sm font-medium text-[var(--text-primary)]",
            children: "Description"
        }, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-resources.tsx",
            lineNumber: 525,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[22] = t15;
    } else {
        t15 = $[22];
    }
    let t16;
    if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = (e_2)=>updateField("description", e_2.target.value);
        $[23] = t16;
    } else {
        t16 = $[23];
    }
    let t17;
    if ($[24] !== form.description) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t15,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                    id: "resource-description",
                    value: form.description,
                    onChange: t16,
                    placeholder: "Brief description",
                    rows: 2,
                    className: "w-full rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--background)] px-3 py-2 text-sm text-[var(--text-primary)] outline-none transition-colors placeholder:text-[var(--text-tertiary)] hover:border-[var(--border-hover)] focus:border-[var(--primary)] resize-none"
                }, void 0, false, {
                    fileName: "[project]/src/components/board/dashboard-resources.tsx",
                    lineNumber: 539,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/dashboard-resources.tsx",
            lineNumber: 539,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[24] = form.description;
        $[25] = t17;
    } else {
        t17 = $[25];
    }
    let t18;
    if ($[26] !== category || $[27] !== form.url) {
        t18 = category === "important_links" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                    htmlFor: "resource-url",
                    className: "mb-1.5 block text-sm font-medium text-[var(--text-primary)]",
                    children: [
                        "URL ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-red-500",
                            children: "*"
                        }, void 0, false, {
                            fileName: "[project]/src/components/board/dashboard-resources.tsx",
                            lineNumber: 547,
                            columnNumber: 156
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/board/dashboard-resources.tsx",
                    lineNumber: 547,
                    columnNumber: 50
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    id: "resource-url",
                    type: "url",
                    value: form.url,
                    onChange: (e_3)=>updateField("url", e_3.target.value),
                    placeholder: "https://...",
                    className: "w-full rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--background)] px-3 py-2 text-sm text-[var(--text-primary)] outline-none transition-colors placeholder:text-[var(--text-tertiary)] hover:border-[var(--border-hover)] focus:border-[var(--primary)]",
                    required: true
                }, void 0, false, {
                    fileName: "[project]/src/components/board/dashboard-resources.tsx",
                    lineNumber: 547,
                    columnNumber: 203
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/dashboard-resources.tsx",
            lineNumber: 547,
            columnNumber: 45
        }, ("TURBOPACK compile-time value", void 0));
        $[26] = category;
        $[27] = form.url;
        $[28] = t18;
    } else {
        t18 = $[28];
    }
    let t19;
    if ($[29] !== category || $[30] !== form.fileName || $[31] !== form.url) {
        t19 = category === "important_assets" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            htmlFor: "resource-url",
                            className: "mb-1.5 block text-sm font-medium text-[var(--text-primary)]",
                            children: "Asset URL"
                        }, void 0, false, {
                            fileName: "[project]/src/components/board/dashboard-resources.tsx",
                            lineNumber: 556,
                            columnNumber: 53
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            id: "resource-url",
                            type: "url",
                            value: form.url,
                            onChange: (e_4)=>updateField("url", e_4.target.value),
                            placeholder: "https://drive.google.com/...",
                            className: "w-full rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--background)] px-3 py-2 text-sm text-[var(--text-primary)] outline-none transition-colors placeholder:text-[var(--text-tertiary)] hover:border-[var(--border-hover)] focus:border-[var(--primary)]"
                        }, void 0, false, {
                            fileName: "[project]/src/components/board/dashboard-resources.tsx",
                            lineNumber: 556,
                            columnNumber: 172
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/board/dashboard-resources.tsx",
                    lineNumber: 556,
                    columnNumber: 48
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            htmlFor: "resource-filename",
                            className: "mb-1.5 block text-sm font-medium text-[var(--text-primary)]",
                            children: "File Name"
                        }, void 0, false, {
                            fileName: "[project]/src/components/board/dashboard-resources.tsx",
                            lineNumber: 556,
                            columnNumber: 616
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            id: "resource-filename",
                            type: "text",
                            value: form.fileName,
                            onChange: (e_5)=>updateField("fileName", e_5.target.value),
                            placeholder: "brand-guidelines.pdf",
                            className: "w-full rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--background)] px-3 py-2 text-sm text-[var(--text-primary)] outline-none transition-colors placeholder:text-[var(--text-tertiary)] hover:border-[var(--border-hover)] focus:border-[var(--primary)]"
                        }, void 0, false, {
                            fileName: "[project]/src/components/board/dashboard-resources.tsx",
                            lineNumber: 556,
                            columnNumber: 740
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/board/dashboard-resources.tsx",
                    lineNumber: 556,
                    columnNumber: 611
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true);
        $[29] = category;
        $[30] = form.fileName;
        $[31] = form.url;
        $[32] = t19;
    } else {
        t19 = $[32];
    }
    let t20;
    if ($[33] !== category || $[34] !== form.password || $[35] !== form.url || $[36] !== form.username) {
        t20 = category === "credentials" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            htmlFor: "resource-url",
                            className: "mb-1.5 block text-sm font-medium text-[var(--text-primary)]",
                            children: "Service URL"
                        }, void 0, false, {
                            fileName: "[project]/src/components/board/dashboard-resources.tsx",
                            lineNumber: 566,
                            columnNumber: 48
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            id: "resource-url",
                            type: "url",
                            value: form.url,
                            onChange: (e_6)=>updateField("url", e_6.target.value),
                            placeholder: "https://...",
                            className: "w-full rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--background)] px-3 py-2 text-sm text-[var(--text-primary)] outline-none transition-colors placeholder:text-[var(--text-tertiary)] hover:border-[var(--border-hover)] focus:border-[var(--primary)]"
                        }, void 0, false, {
                            fileName: "[project]/src/components/board/dashboard-resources.tsx",
                            lineNumber: 566,
                            columnNumber: 169
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/board/dashboard-resources.tsx",
                    lineNumber: 566,
                    columnNumber: 43
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            htmlFor: "resource-username",
                            className: "mb-1.5 block text-sm font-medium text-[var(--text-primary)]",
                            children: "Username / Email"
                        }, void 0, false, {
                            fileName: "[project]/src/components/board/dashboard-resources.tsx",
                            lineNumber: 566,
                            columnNumber: 596
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            id: "resource-username",
                            type: "text",
                            value: form.username,
                            onChange: (e_7)=>updateField("username", e_7.target.value),
                            placeholder: "username or email",
                            className: "w-full rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--background)] px-3 py-2 text-sm text-[var(--text-primary)] outline-none transition-colors placeholder:text-[var(--text-tertiary)] hover:border-[var(--border-hover)] focus:border-[var(--primary)]"
                        }, void 0, false, {
                            fileName: "[project]/src/components/board/dashboard-resources.tsx",
                            lineNumber: 566,
                            columnNumber: 727
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/board/dashboard-resources.tsx",
                    lineNumber: 566,
                    columnNumber: 591
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            htmlFor: "resource-password",
                            className: "mb-1.5 block text-sm font-medium text-[var(--text-primary)]",
                            children: "Password"
                        }, void 0, false, {
                            fileName: "[project]/src/components/board/dashboard-resources.tsx",
                            lineNumber: 566,
                            columnNumber: 1176
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            id: "resource-password",
                            type: "password",
                            value: form.password,
                            onChange: (e_8)=>updateField("password", e_8.target.value),
                            placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
                            className: "w-full rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--background)] px-3 py-2 text-sm text-[var(--text-primary)] outline-none transition-colors placeholder:text-[var(--text-tertiary)] hover:border-[var(--border-hover)] focus:border-[var(--primary)]"
                        }, void 0, false, {
                            fileName: "[project]/src/components/board/dashboard-resources.tsx",
                            lineNumber: 566,
                            columnNumber: 1299
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/board/dashboard-resources.tsx",
                    lineNumber: 566,
                    columnNumber: 1171
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true);
        $[33] = category;
        $[34] = form.password;
        $[35] = form.url;
        $[36] = form.username;
        $[37] = t20;
    } else {
        t20 = $[37];
    }
    let t21;
    if ($[38] !== onClose) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: onClose,
            className: "rounded-[var(--radius-md)] border border-[var(--border)] px-4 py-2 text-sm font-medium text-[var(--text-secondary)] transition-colors hover:bg-[var(--background)]",
            children: "Cancel"
        }, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-resources.tsx",
            lineNumber: 577,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[38] = onClose;
        $[39] = t21;
    } else {
        t21 = $[39];
    }
    const t22 = editingResource ? "Save Changes" : "Add Resource";
    let t23;
    if ($[40] !== t22) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "submit",
            className: "rounded-[var(--radius-md)] bg-[var(--text-primary)] px-4 py-2 text-sm font-medium text-[var(--surface)] transition-opacity hover:opacity-90",
            children: t22
        }, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-resources.tsx",
            lineNumber: 586,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[40] = t22;
        $[41] = t23;
    } else {
        t23 = $[41];
    }
    let t24;
    if ($[42] !== t21 || $[43] !== t23) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-end gap-3 pt-2",
            children: [
                t21,
                t23
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/dashboard-resources.tsx",
            lineNumber: 594,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[42] = t21;
        $[43] = t23;
        $[44] = t24;
    } else {
        t24 = $[44];
    }
    let t25;
    if ($[45] !== handleSubmit || $[46] !== t14 || $[47] !== t17 || $[48] !== t18 || $[49] !== t19 || $[50] !== t20 || $[51] !== t24) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: handleSubmit,
            className: "space-y-4 px-6 py-5",
            children: [
                t14,
                t17,
                t18,
                t19,
                t20,
                t24
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/dashboard-resources.tsx",
            lineNumber: 603,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[45] = handleSubmit;
        $[46] = t14;
        $[47] = t17;
        $[48] = t18;
        $[49] = t19;
        $[50] = t20;
        $[51] = t24;
        $[52] = t25;
    } else {
        t25 = $[52];
    }
    let t26;
    if ($[53] !== t11 || $[54] !== t25 || $[55] !== t4) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-lg rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] shadow-xl",
            onClick: _temp,
            role: "dialog",
            "aria-modal": "true",
            "aria-label": t4,
            children: [
                t11,
                t25
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/dashboard-resources.tsx",
            lineNumber: 617,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[53] = t11;
        $[54] = t25;
        $[55] = t4;
        $[56] = t26;
    } else {
        t26 = $[56];
    }
    let t27;
    if ($[57] !== onClose || $[58] !== t26) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 z-50 flex items-center justify-center bg-black/50",
            onClick: onClose,
            children: t26
        }, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-resources.tsx",
            lineNumber: 627,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[57] = onClose;
        $[58] = t26;
        $[59] = t27;
    } else {
        t27 = $[59];
    }
    return t27;
};
_s1(ResourceModal, "VjFdZ0UNYo/RJseaLJ4I/Lx53HE=");
_c13 = ResourceModal;
const DeleteConfirm = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(17);
    if ($[0] !== "df6f65cc34e40332df5774fb95d8f3cfa7dd4f9913fc469a41f4fa5f40d8578d") {
        for(let $i = 0; $i < 17; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "df6f65cc34e40332df5774fb95d8f3cfa7dd4f9913fc469a41f4fa5f40d8578d";
    }
    const { resourceTitle, onConfirm, onCancel } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-base font-semibold text-[var(--text-primary)]",
            children: "Delete Resource"
        }, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-resources.tsx",
            lineNumber: 661,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    let t2;
    if ($[2] !== resourceTitle) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-2 text-sm text-[var(--text-secondary)]",
            children: [
                "Are you sure you want to delete “",
                resourceTitle,
                "”? This action cannot be undone."
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/dashboard-resources.tsx",
            lineNumber: 668,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[2] = resourceTitle;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] !== onCancel) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: onCancel,
            className: "rounded-[var(--radius-md)] border border-[var(--border)] px-4 py-2 text-sm font-medium text-[var(--text-secondary)] transition-colors hover:bg-[var(--background)]",
            children: "Cancel"
        }, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-resources.tsx",
            lineNumber: 676,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[4] = onCancel;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    if ($[6] !== onConfirm) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: onConfirm,
            className: "rounded-[var(--radius-md)] bg-red-600 px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90",
            children: "Delete"
        }, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-resources.tsx",
            lineNumber: 684,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[6] = onConfirm;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    let t5;
    if ($[8] !== t3 || $[9] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-5 flex items-center justify-end gap-3",
            children: [
                t3,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/dashboard-resources.tsx",
            lineNumber: 692,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[8] = t3;
        $[9] = t4;
        $[10] = t5;
    } else {
        t5 = $[10];
    }
    let t6;
    if ($[11] !== t2 || $[12] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-sm rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-xl",
            onClick: _temp2,
            role: "alertdialog",
            "aria-modal": "true",
            "aria-label": "Delete resource confirmation",
            children: [
                t1,
                t2,
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/dashboard-resources.tsx",
            lineNumber: 701,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[11] = t2;
        $[12] = t5;
        $[13] = t6;
    } else {
        t6 = $[13];
    }
    let t7;
    if ($[14] !== onCancel || $[15] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 z-50 flex items-center justify-center bg-black/50",
            onClick: onCancel,
            children: t6
        }, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-resources.tsx",
            lineNumber: 710,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[14] = onCancel;
        $[15] = t6;
        $[16] = t7;
    } else {
        t7 = $[16];
    }
    return t7;
};
_c14 = DeleteConfirm;
const LinkCard = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(29);
    if ($[0] !== "df6f65cc34e40332df5774fb95d8f3cfa7dd4f9913fc469a41f4fa5f40d8578d") {
        for(let $i = 0; $i < 29; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "df6f65cc34e40332df5774fb95d8f3cfa7dd4f9913fc469a41f4fa5f40d8578d";
    }
    const { resource, onEdit, onDelete } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-[var(--text-tertiary)]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LinkIcon, {}, void 0, false, {
                fileName: "[project]/src/components/board/dashboard-resources.tsx",
                lineNumber: 744,
                columnNumber: 56
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-resources.tsx",
            lineNumber: 744,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    let t2;
    if ($[2] !== resource.title) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [
                t1,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                    className: "truncate text-sm font-medium text-[var(--text-primary)]",
                    children: resource.title
                }, void 0, false, {
                    fileName: "[project]/src/components/board/dashboard-resources.tsx",
                    lineNumber: 751,
                    columnNumber: 55
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/dashboard-resources.tsx",
            lineNumber: 751,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[2] = resource.title;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] !== resource.description) {
        t3 = resource.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-1 text-sm text-[var(--text-tertiary)]",
            children: resource.description
        }, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-resources.tsx",
            lineNumber: 759,
            columnNumber: 34
        }, ("TURBOPACK compile-time value", void 0));
        $[4] = resource.description;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    if ($[6] !== resource.url) {
        t4 = resource.url && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: resource.url,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "mt-2 inline-flex items-center gap-1 text-xs text-blue-600 hover:underline",
            children: [
                resource.url.length > 50 ? `${resource.url.slice(0, 50)}...` : resource.url,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ExternalLinkIcon, {}, void 0, false, {
                    fileName: "[project]/src/components/board/dashboard-resources.tsx",
                    lineNumber: 767,
                    columnNumber: 254
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/dashboard-resources.tsx",
            lineNumber: 767,
            columnNumber: 26
        }, ("TURBOPACK compile-time value", void 0));
        $[6] = resource.url;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    let t5;
    if ($[8] !== resource.addedByName) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-2 text-xs text-[var(--text-tertiary)]",
            children: [
                "Added by ",
                resource.addedByName
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/dashboard-resources.tsx",
            lineNumber: 775,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[8] = resource.addedByName;
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    let t6;
    if ($[10] !== t2 || $[11] !== t3 || $[12] !== t4 || $[13] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-w-0 flex-1",
            children: [
                t2,
                t3,
                t4,
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/dashboard-resources.tsx",
            lineNumber: 783,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[10] = t2;
        $[11] = t3;
        $[12] = t4;
        $[13] = t5;
        $[14] = t6;
    } else {
        t6 = $[14];
    }
    const t7 = `Edit ${resource.title}`;
    let t8;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EditIcon, {}, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-resources.tsx",
            lineNumber: 795,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[15] = t8;
    } else {
        t8 = $[15];
    }
    let t9;
    if ($[16] !== onEdit || $[17] !== t7) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: onEdit,
            className: "rounded-[var(--radius-sm)] p-1.5 text-[var(--text-tertiary)] transition-colors hover:bg-[var(--background)] hover:text-[var(--text-primary)]",
            "aria-label": t7,
            children: t8
        }, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-resources.tsx",
            lineNumber: 802,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[16] = onEdit;
        $[17] = t7;
        $[18] = t9;
    } else {
        t9 = $[18];
    }
    const t10 = `Delete ${resource.title}`;
    let t11;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TrashIcon, {}, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-resources.tsx",
            lineNumber: 812,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[19] = t11;
    } else {
        t11 = $[19];
    }
    let t12;
    if ($[20] !== onDelete || $[21] !== t10) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: onDelete,
            className: "rounded-[var(--radius-sm)] p-1.5 text-[var(--text-tertiary)] transition-colors hover:bg-red-50 hover:text-red-600",
            "aria-label": t10,
            children: t11
        }, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-resources.tsx",
            lineNumber: 819,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[20] = onDelete;
        $[21] = t10;
        $[22] = t12;
    } else {
        t12 = $[22];
    }
    let t13;
    if ($[23] !== t12 || $[24] !== t9) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "ml-3 flex shrink-0 items-center gap-1 opacity-0 transition-opacity group-hover:opacity-100",
            children: [
                t9,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/dashboard-resources.tsx",
            lineNumber: 828,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[23] = t12;
        $[24] = t9;
        $[25] = t13;
    } else {
        t13 = $[25];
    }
    let t14;
    if ($[26] !== t13 || $[27] !== t6) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "group flex items-start justify-between rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] p-4 transition-colors hover:border-[var(--border-hover)]",
            children: [
                t6,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/dashboard-resources.tsx",
            lineNumber: 837,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[26] = t13;
        $[27] = t6;
        $[28] = t14;
    } else {
        t14 = $[28];
    }
    return t14;
};
_c15 = LinkCard;
const AssetCard = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(32);
    if ($[0] !== "df6f65cc34e40332df5774fb95d8f3cfa7dd4f9913fc469a41f4fa5f40d8578d") {
        for(let $i = 0; $i < 32; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "df6f65cc34e40332df5774fb95d8f3cfa7dd4f9913fc469a41f4fa5f40d8578d";
    }
    const { resource, onEdit, onDelete } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-[var(--text-tertiary)]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ImageIcon, {}, void 0, false, {
                fileName: "[project]/src/components/board/dashboard-resources.tsx",
                lineNumber: 861,
                columnNumber: 56
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-resources.tsx",
            lineNumber: 861,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    let t2;
    if ($[2] !== resource.title) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [
                t1,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                    className: "truncate text-sm font-medium text-[var(--text-primary)]",
                    children: resource.title
                }, void 0, false, {
                    fileName: "[project]/src/components/board/dashboard-resources.tsx",
                    lineNumber: 868,
                    columnNumber: 55
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/dashboard-resources.tsx",
            lineNumber: 868,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[2] = resource.title;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] !== resource.description) {
        t3 = resource.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-1 text-sm text-[var(--text-tertiary)]",
            children: resource.description
        }, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-resources.tsx",
            lineNumber: 876,
            columnNumber: 34
        }, ("TURBOPACK compile-time value", void 0));
        $[4] = resource.description;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    if ($[6] !== resource.fileName) {
        t4 = resource.fileName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-1 text-xs text-[var(--text-tertiary)]",
            children: resource.fileName
        }, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-resources.tsx",
            lineNumber: 884,
            columnNumber: 31
        }, ("TURBOPACK compile-time value", void 0));
        $[6] = resource.fileName;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    let t5;
    if ($[8] !== resource.url) {
        t5 = resource.url && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: resource.url,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "mt-2 inline-flex items-center gap-1 text-xs text-blue-600 hover:underline",
            children: [
                "Open asset ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ExternalLinkIcon, {}, void 0, false, {
                    fileName: "[project]/src/components/board/dashboard-resources.tsx",
                    lineNumber: 892,
                    columnNumber: 188
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/dashboard-resources.tsx",
            lineNumber: 892,
            columnNumber: 26
        }, ("TURBOPACK compile-time value", void 0));
        $[8] = resource.url;
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    let t6;
    if ($[10] !== resource.addedByName) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-2 text-xs text-[var(--text-tertiary)]",
            children: [
                "Added by ",
                resource.addedByName
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/dashboard-resources.tsx",
            lineNumber: 900,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[10] = resource.addedByName;
        $[11] = t6;
    } else {
        t6 = $[11];
    }
    let t7;
    if ($[12] !== t2 || $[13] !== t3 || $[14] !== t4 || $[15] !== t5 || $[16] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-w-0 flex-1",
            children: [
                t2,
                t3,
                t4,
                t5,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/dashboard-resources.tsx",
            lineNumber: 908,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[12] = t2;
        $[13] = t3;
        $[14] = t4;
        $[15] = t5;
        $[16] = t6;
        $[17] = t7;
    } else {
        t7 = $[17];
    }
    const t8 = `Edit ${resource.title}`;
    let t9;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EditIcon, {}, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-resources.tsx",
            lineNumber: 921,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[18] = t9;
    } else {
        t9 = $[18];
    }
    let t10;
    if ($[19] !== onEdit || $[20] !== t8) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: onEdit,
            className: "rounded-[var(--radius-sm)] p-1.5 text-[var(--text-tertiary)] transition-colors hover:bg-[var(--background)] hover:text-[var(--text-primary)]",
            "aria-label": t8,
            children: t9
        }, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-resources.tsx",
            lineNumber: 928,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[19] = onEdit;
        $[20] = t8;
        $[21] = t10;
    } else {
        t10 = $[21];
    }
    const t11 = `Delete ${resource.title}`;
    let t12;
    if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TrashIcon, {}, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-resources.tsx",
            lineNumber: 938,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[22] = t12;
    } else {
        t12 = $[22];
    }
    let t13;
    if ($[23] !== onDelete || $[24] !== t11) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: onDelete,
            className: "rounded-[var(--radius-sm)] p-1.5 text-[var(--text-tertiary)] transition-colors hover:bg-red-50 hover:text-red-600",
            "aria-label": t11,
            children: t12
        }, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-resources.tsx",
            lineNumber: 945,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[23] = onDelete;
        $[24] = t11;
        $[25] = t13;
    } else {
        t13 = $[25];
    }
    let t14;
    if ($[26] !== t10 || $[27] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "ml-3 flex shrink-0 items-center gap-1 opacity-0 transition-opacity group-hover:opacity-100",
            children: [
                t10,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/dashboard-resources.tsx",
            lineNumber: 954,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[26] = t10;
        $[27] = t13;
        $[28] = t14;
    } else {
        t14 = $[28];
    }
    let t15;
    if ($[29] !== t14 || $[30] !== t7) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "group flex items-start justify-between rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] p-4 transition-colors hover:border-[var(--border-hover)]",
            children: [
                t7,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/dashboard-resources.tsx",
            lineNumber: 963,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[29] = t14;
        $[30] = t7;
        $[31] = t15;
    } else {
        t15 = $[31];
    }
    return t15;
};
_c16 = AssetCard;
const CredentialCard = (t0)=>{
    _s2();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(43);
    if ($[0] !== "df6f65cc34e40332df5774fb95d8f3cfa7dd4f9913fc469a41f4fa5f40d8578d") {
        for(let $i = 0; $i < 43; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "df6f65cc34e40332df5774fb95d8f3cfa7dd4f9913fc469a41f4fa5f40d8578d";
    }
    const { resource, onEdit, onDelete } = t0;
    const [showPassword, setShowPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = async (text, field)=>{
            try {
                await navigator.clipboard.writeText(text);
                setCopied(field);
                setTimeout(()=>setCopied(null), 1500);
            } catch  {}
        };
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const handleCopy = t1;
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-[var(--text-tertiary)]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KeyIcon, {}, void 0, false, {
                fileName: "[project]/src/components/board/dashboard-resources.tsx",
                lineNumber: 1008,
                columnNumber: 56
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-resources.tsx",
            lineNumber: 1008,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    let t3;
    if ($[3] !== resource.title) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [
                t2,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                    className: "truncate text-sm font-medium text-[var(--text-primary)]",
                    children: resource.title
                }, void 0, false, {
                    fileName: "[project]/src/components/board/dashboard-resources.tsx",
                    lineNumber: 1015,
                    columnNumber: 55
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/dashboard-resources.tsx",
            lineNumber: 1015,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[3] = resource.title;
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] !== resource.description) {
        t4 = resource.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-1 text-sm text-[var(--text-tertiary)]",
            children: resource.description
        }, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-resources.tsx",
            lineNumber: 1023,
            columnNumber: 34
        }, ("TURBOPACK compile-time value", void 0));
        $[5] = resource.description;
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    let t5;
    if ($[7] !== t3 || $[8] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-w-0 flex-1",
            children: [
                t3,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/dashboard-resources.tsx",
            lineNumber: 1031,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = t3;
        $[8] = t4;
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    const t6 = `Edit ${resource.title}`;
    let t7;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EditIcon, {}, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-resources.tsx",
            lineNumber: 1041,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[10] = t7;
    } else {
        t7 = $[10];
    }
    let t8;
    if ($[11] !== onEdit || $[12] !== t6) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: onEdit,
            className: "rounded-[var(--radius-sm)] p-1.5 text-[var(--text-tertiary)] transition-colors hover:bg-[var(--background)] hover:text-[var(--text-primary)]",
            "aria-label": t6,
            children: t7
        }, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-resources.tsx",
            lineNumber: 1048,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[11] = onEdit;
        $[12] = t6;
        $[13] = t8;
    } else {
        t8 = $[13];
    }
    const t9 = `Delete ${resource.title}`;
    let t10;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TrashIcon, {}, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-resources.tsx",
            lineNumber: 1058,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[14] = t10;
    } else {
        t10 = $[14];
    }
    let t11;
    if ($[15] !== onDelete || $[16] !== t9) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: onDelete,
            className: "rounded-[var(--radius-sm)] p-1.5 text-[var(--text-tertiary)] transition-colors hover:bg-red-50 hover:text-red-600",
            "aria-label": t9,
            children: t10
        }, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-resources.tsx",
            lineNumber: 1065,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[15] = onDelete;
        $[16] = t9;
        $[17] = t11;
    } else {
        t11 = $[17];
    }
    let t12;
    if ($[18] !== t11 || $[19] !== t8) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "ml-3 flex shrink-0 items-center gap-1 opacity-0 transition-opacity group-hover:opacity-100",
            children: [
                t8,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/dashboard-resources.tsx",
            lineNumber: 1074,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[18] = t11;
        $[19] = t8;
        $[20] = t12;
    } else {
        t12 = $[20];
    }
    let t13;
    if ($[21] !== t12 || $[22] !== t5) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-start justify-between",
            children: [
                t5,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/dashboard-resources.tsx",
            lineNumber: 1083,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[21] = t12;
        $[22] = t5;
        $[23] = t13;
    } else {
        t13 = $[23];
    }
    let t14;
    if ($[24] !== copied || $[25] !== resource.username) {
        t14 = resource.username && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "w-16 shrink-0 text-xs text-[var(--text-tertiary)]",
                    children: "User:"
                }, void 0, false, {
                    fileName: "[project]/src/components/board/dashboard-resources.tsx",
                    lineNumber: 1092,
                    columnNumber: 73
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "truncate text-xs text-[var(--text-primary)]",
                    children: resource.username
                }, void 0, false, {
                    fileName: "[project]/src/components/board/dashboard-resources.tsx",
                    lineNumber: 1092,
                    columnNumber: 153
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: ()=>handleCopy(resource.username, "username"),
                    className: "shrink-0 rounded-[var(--radius-sm)] p-1 text-[var(--text-tertiary)] transition-colors hover:text-[var(--text-primary)]",
                    "aria-label": "Copy username",
                    children: copied === "username" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs text-green-600",
                        children: "Copied"
                    }, void 0, false, {
                        fileName: "[project]/src/components/board/dashboard-resources.tsx",
                        lineNumber: 1092,
                        columnNumber: 504
                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CopyIcon, {}, void 0, false, {
                        fileName: "[project]/src/components/board/dashboard-resources.tsx",
                        lineNumber: 1092,
                        columnNumber: 561
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/board/dashboard-resources.tsx",
                    lineNumber: 1092,
                    columnNumber: 241
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/dashboard-resources.tsx",
            lineNumber: 1092,
            columnNumber: 32
        }, ("TURBOPACK compile-time value", void 0));
        $[24] = copied;
        $[25] = resource.username;
        $[26] = t14;
    } else {
        t14 = $[26];
    }
    let t15;
    if ($[27] !== copied || $[28] !== resource.password || $[29] !== showPassword) {
        t15 = resource.password && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "w-16 shrink-0 text-xs text-[var(--text-tertiary)]",
                    children: "Pass:"
                }, void 0, false, {
                    fileName: "[project]/src/components/board/dashboard-resources.tsx",
                    lineNumber: 1101,
                    columnNumber: 73
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "truncate text-xs font-mono text-[var(--text-primary)]",
                    children: showPassword ? resource.password : "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
                }, void 0, false, {
                    fileName: "[project]/src/components/board/dashboard-resources.tsx",
                    lineNumber: 1101,
                    columnNumber: 153
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: ()=>setShowPassword(!showPassword),
                    className: "shrink-0 rounded-[var(--radius-sm)] p-1 text-[var(--text-tertiary)] transition-colors hover:text-[var(--text-primary)]",
                    "aria-label": showPassword ? "Hide password" : "Show password",
                    children: showPassword ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EyeOffIcon, {}, void 0, false, {
                        fileName: "[project]/src/components/board/dashboard-resources.tsx",
                        lineNumber: 1101,
                        columnNumber: 597
                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EyeIcon, {}, void 0, false, {
                        fileName: "[project]/src/components/board/dashboard-resources.tsx",
                        lineNumber: 1101,
                        columnNumber: 614
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/board/dashboard-resources.tsx",
                    lineNumber: 1101,
                    columnNumber: 319
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: ()=>handleCopy(resource.password, "password"),
                    className: "shrink-0 rounded-[var(--radius-sm)] p-1 text-[var(--text-tertiary)] transition-colors hover:text-[var(--text-primary)]",
                    "aria-label": "Copy password",
                    children: copied === "password" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs text-green-600",
                        children: "Copied"
                    }, void 0, false, {
                        fileName: "[project]/src/components/board/dashboard-resources.tsx",
                        lineNumber: 1101,
                        columnNumber: 898
                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CopyIcon, {}, void 0, false, {
                        fileName: "[project]/src/components/board/dashboard-resources.tsx",
                        lineNumber: 1101,
                        columnNumber: 955
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/board/dashboard-resources.tsx",
                    lineNumber: 1101,
                    columnNumber: 635
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/dashboard-resources.tsx",
            lineNumber: 1101,
            columnNumber: 32
        }, ("TURBOPACK compile-time value", void 0));
        $[27] = copied;
        $[28] = resource.password;
        $[29] = showPassword;
        $[30] = t15;
    } else {
        t15 = $[30];
    }
    let t16;
    if ($[31] !== resource.url) {
        t16 = resource.url && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "w-16 shrink-0 text-xs text-[var(--text-tertiary)]",
                    children: "URL:"
                }, void 0, false, {
                    fileName: "[project]/src/components/board/dashboard-resources.tsx",
                    lineNumber: 1111,
                    columnNumber: 68
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: resource.url,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "truncate text-xs text-blue-600 hover:underline",
                    children: resource.url.length > 40 ? `${resource.url.slice(0, 40)}...` : resource.url
                }, void 0, false, {
                    fileName: "[project]/src/components/board/dashboard-resources.tsx",
                    lineNumber: 1111,
                    columnNumber: 147
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/dashboard-resources.tsx",
            lineNumber: 1111,
            columnNumber: 27
        }, ("TURBOPACK compile-time value", void 0));
        $[31] = resource.url;
        $[32] = t16;
    } else {
        t16 = $[32];
    }
    let t17;
    if ($[33] !== t14 || $[34] !== t15 || $[35] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-3 space-y-2",
            children: [
                t14,
                t15,
                t16
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/dashboard-resources.tsx",
            lineNumber: 1119,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[33] = t14;
        $[34] = t15;
        $[35] = t16;
        $[36] = t17;
    } else {
        t17 = $[36];
    }
    let t18;
    if ($[37] !== resource.addedByName) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-3 text-xs text-[var(--text-tertiary)]",
            children: [
                "Added by ",
                resource.addedByName
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/dashboard-resources.tsx",
            lineNumber: 1129,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[37] = resource.addedByName;
        $[38] = t18;
    } else {
        t18 = $[38];
    }
    let t19;
    if ($[39] !== t13 || $[40] !== t17 || $[41] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "group rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] p-4 transition-colors hover:border-[var(--border-hover)]",
            children: [
                t13,
                t17,
                t18
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/dashboard-resources.tsx",
            lineNumber: 1137,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[39] = t13;
        $[40] = t17;
        $[41] = t18;
        $[42] = t19;
    } else {
        t19 = $[42];
    }
    return t19;
};
_s2(CredentialCard, "Bv6wlS/ZeIaPaiDyUNgtLK1zL4A=");
_c17 = CredentialCard;
const EMPTY_MESSAGES = {
    important_links: 'No important links added yet',
    important_assets: 'No important assets added yet',
    credentials: 'No credentials added yet'
};
const EmptyState = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(3);
    if ($[0] !== "df6f65cc34e40332df5774fb95d8f3cfa7dd4f9913fc469a41f4fa5f40d8578d") {
        for(let $i = 0; $i < 3; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "df6f65cc34e40332df5774fb95d8f3cfa7dd4f9913fc469a41f4fa5f40d8578d";
    }
    const { category } = t0;
    const t1 = EMPTY_MESSAGES[category];
    let t2;
    if ($[1] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex h-48 items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-[var(--text-tertiary)]",
                children: t1
            }, void 0, false, {
                fileName: "[project]/src/components/board/dashboard-resources.tsx",
                lineNumber: 1174,
                columnNumber: 65
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-resources.tsx",
            lineNumber: 1174,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t1;
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    return t2;
};
_c18 = EmptyState;
const DashboardResources = ()=>{
    _s3();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(50);
    if ($[0] !== "df6f65cc34e40332df5774fb95d8f3cfa7dd4f9913fc469a41f4fa5f40d8578d") {
        for(let $i = 0; $i < 50; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "df6f65cc34e40332df5774fb95d8f3cfa7dd4f9913fc469a41f4fa5f40d8578d";
    }
    const user = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$auth$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"])(_temp3);
    const { resources, addResource, updateResource, deleteResource } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$resource$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResourceStore"])();
    const [activeCategory, setActiveCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("important_links");
    const [showModal, setShowModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editingResource, setEditingResource] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [deletingResource, setDeletingResource] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [credentialsUnlocked, setCredentialsUnlocked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t0;
    if ($[1] !== activeCategory || $[2] !== resources) {
        let t1;
        if ($[4] !== activeCategory) {
            t1 = (r)=>r.category === activeCategory;
            $[4] = activeCategory;
            $[5] = t1;
        } else {
            t1 = $[5];
        }
        t0 = resources.filter(t1);
        $[1] = activeCategory;
        $[2] = resources;
        $[3] = t0;
    } else {
        t0 = $[3];
    }
    const filteredResources = t0;
    let t1;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ()=>{
            setEditingResource(null);
            setShowModal(true);
        };
        $[6] = t1;
    } else {
        t1 = $[6];
    }
    const handleAddClick = t1;
    let t2;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = (resource)=>{
            setEditingResource(resource);
            setShowModal(true);
        };
        $[7] = t2;
    } else {
        t2 = $[7];
    }
    const handleEditClick = t2;
    let t3;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = (resource_0)=>{
            setDeletingResource(resource_0);
        };
        $[8] = t3;
    } else {
        t3 = $[8];
    }
    const handleDeleteClick = t3;
    let t4;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = ()=>{
            setShowModal(false);
            setEditingResource(null);
        };
        $[9] = t4;
    } else {
        t4 = $[9];
    }
    const handleModalClose = t4;
    let t5;
    if ($[10] !== activeCategory || $[11] !== addResource || $[12] !== editingResource || $[13] !== updateResource || $[14] !== user) {
        t5 = (data)=>{
            if (!user) {
                return;
            }
            if (editingResource) {
                updateResource(editingResource.id, {
                    title: data.title.trim(),
                    description: data.description.trim(),
                    url: data.url.trim() || null,
                    fileName: data.fileName.trim() || null,
                    username: data.username.trim() || null,
                    password: data.password.trim() || null
                });
            } else {
                const now = new Date().toISOString();
                addResource({
                    id: `res_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
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
                    updatedAt: now
                });
            }
            handleModalClose();
        };
        $[10] = activeCategory;
        $[11] = addResource;
        $[12] = editingResource;
        $[13] = updateResource;
        $[14] = user;
        $[15] = t5;
    } else {
        t5 = $[15];
    }
    const handleSubmit = t5;
    let t6;
    if ($[16] !== deleteResource || $[17] !== deletingResource) {
        t6 = ()=>{
            if (deletingResource) {
                deleteResource(deletingResource.id);
                setDeletingResource(null);
            }
        };
        $[16] = deleteResource;
        $[17] = deletingResource;
        $[18] = t6;
    } else {
        t6 = $[18];
    }
    const handleDeleteConfirm = t6;
    let t7;
    if ($[19] !== activeCategory) {
        t7 = (resource_1)=>{
            const commonProps = {
                key: resource_1.id,
                resource: resource_1,
                onEdit: ()=>handleEditClick(resource_1),
                onDelete: ()=>handleDeleteClick(resource_1)
            };
            switch(activeCategory){
                case "important_links":
                    {
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LinkCard, {
                            ...commonProps
                        }, void 0, false, {
                            fileName: "[project]/src/components/board/dashboard-resources.tsx",
                            lineNumber: 1340,
                            columnNumber: 20
                        }, ("TURBOPACK compile-time value", void 0));
                    }
                case "important_assets":
                    {
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AssetCard, {
                            ...commonProps
                        }, void 0, false, {
                            fileName: "[project]/src/components/board/dashboard-resources.tsx",
                            lineNumber: 1344,
                            columnNumber: 20
                        }, ("TURBOPACK compile-time value", void 0));
                    }
                case "credentials":
                    {
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CredentialCard, {
                            ...commonProps
                        }, void 0, false, {
                            fileName: "[project]/src/components/board/dashboard-resources.tsx",
                            lineNumber: 1348,
                            columnNumber: 20
                        }, ("TURBOPACK compile-time value", void 0));
                    }
            }
        };
        $[19] = activeCategory;
        $[20] = t7;
    } else {
        t7 = $[20];
    }
    const renderCard = t7;
    let t8;
    if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-lg font-bold text-[var(--text-primary)]",
            children: "Resources"
        }, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-resources.tsx",
            lineNumber: 1360,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[21] = t8;
    } else {
        t8 = $[21];
    }
    let t9;
    if ($[22] !== activeCategory || $[23] !== credentialsUnlocked) {
        t9 = !(activeCategory === "credentials" && !credentialsUnlocked) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: handleAddClick,
            className: "inline-flex items-center gap-2 rounded-[var(--radius-md)] bg-[var(--text-primary)] px-4 py-2 text-sm font-medium text-[var(--surface)] transition-opacity hover:opacity-90",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PlusIcon, {}, void 0, false, {
                    fileName: "[project]/src/components/board/dashboard-resources.tsx",
                    lineNumber: 1367,
                    columnNumber: 303
                }, ("TURBOPACK compile-time value", void 0)),
                "Add Resource"
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/dashboard-resources.tsx",
            lineNumber: 1367,
            columnNumber: 73
        }, ("TURBOPACK compile-time value", void 0));
        $[22] = activeCategory;
        $[23] = credentialsUnlocked;
        $[24] = t9;
    } else {
        t9 = $[24];
    }
    let t10;
    if ($[25] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between",
            children: [
                t8,
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/dashboard-resources.tsx",
            lineNumber: 1376,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[25] = t9;
        $[26] = t10;
    } else {
        t10 = $[26];
    }
    let t11;
    if ($[27] !== activeCategory) {
        t11 = RESOURCE_TABS.map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                role: "tab",
                "aria-selected": activeCategory === tab.value,
                onClick: ()=>setActiveCategory(tab.value),
                className: `
                flex items-center justify-center gap-2 py-3 text-sm font-medium
                transition-colors duration-[var(--transition-fast)]
                ${activeCategory === tab.value ? "border-b-2 border-[var(--text-primary)] text-[var(--text-primary)]" : "text-[var(--text-tertiary)] hover:text-[var(--text-secondary)]"}
              `,
                children: [
                    tab.icon,
                    tab.label
                ]
            }, tab.value, true, {
                fileName: "[project]/src/components/board/dashboard-resources.tsx",
                lineNumber: 1384,
                columnNumber: 36
            }, ("TURBOPACK compile-time value", void 0)));
        $[27] = activeCategory;
        $[28] = t11;
    } else {
        t11 = $[28];
    }
    let t12;
    if ($[29] !== t11) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "border-b border-[var(--border)]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "grid grid-cols-3",
                role: "tablist",
                "aria-label": "Resource categories",
                children: t11
            }, void 0, false, {
                fileName: "[project]/src/components/board/dashboard-resources.tsx",
                lineNumber: 1396,
                columnNumber: 60
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-resources.tsx",
            lineNumber: 1396,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[29] = t11;
        $[30] = t12;
    } else {
        t12 = $[30];
    }
    let t13;
    if ($[31] !== activeCategory || $[32] !== credentialsUnlocked || $[33] !== filteredResources || $[34] !== renderCard) {
        t13 = activeCategory === "credentials" && !credentialsUnlocked ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CredentialsGate, {
            onUnlock: ()=>setCredentialsUnlocked(true)
        }, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-resources.tsx",
            lineNumber: 1404,
            columnNumber: 70
        }, ("TURBOPACK compile-time value", void 0)) : filteredResources.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EmptyState, {
            category: activeCategory
        }, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-resources.tsx",
            lineNumber: 1404,
            columnNumber: 171
        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid gap-3 sm:grid-cols-2 xl:grid-cols-3",
            children: filteredResources.map(renderCard)
        }, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-resources.tsx",
            lineNumber: 1404,
            columnNumber: 214
        }, ("TURBOPACK compile-time value", void 0));
        $[31] = activeCategory;
        $[32] = credentialsUnlocked;
        $[33] = filteredResources;
        $[34] = renderCard;
        $[35] = t13;
    } else {
        t13 = $[35];
    }
    let t14;
    if ($[36] !== activeCategory || $[37] !== editingResource || $[38] !== handleSubmit || $[39] !== showModal) {
        t14 = showModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ResourceModal, {
            category: activeCategory,
            editingResource: editingResource,
            onClose: handleModalClose,
            onSubmit: handleSubmit
        }, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-resources.tsx",
            lineNumber: 1415,
            columnNumber: 24
        }, ("TURBOPACK compile-time value", void 0));
        $[36] = activeCategory;
        $[37] = editingResource;
        $[38] = handleSubmit;
        $[39] = showModal;
        $[40] = t14;
    } else {
        t14 = $[40];
    }
    let t15;
    if ($[41] !== deletingResource || $[42] !== handleDeleteConfirm) {
        t15 = deletingResource && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DeleteConfirm, {
            resourceTitle: deletingResource.title,
            onConfirm: handleDeleteConfirm,
            onCancel: ()=>setDeletingResource(null)
        }, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-resources.tsx",
            lineNumber: 1426,
            columnNumber: 31
        }, ("TURBOPACK compile-time value", void 0));
        $[41] = deletingResource;
        $[42] = handleDeleteConfirm;
        $[43] = t15;
    } else {
        t15 = $[43];
    }
    let t16;
    if ($[44] !== t10 || $[45] !== t12 || $[46] !== t13 || $[47] !== t14 || $[48] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-6",
            children: [
                t10,
                t12,
                t13,
                t14,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/dashboard-resources.tsx",
            lineNumber: 1435,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[44] = t10;
        $[45] = t12;
        $[46] = t13;
        $[47] = t14;
        $[48] = t15;
        $[49] = t16;
    } else {
        t16 = $[49];
    }
    return t16;
};
_s3(DashboardResources, "XRySYxmrY6NrZbxfwqmnt0DKS98=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$auth$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$resource$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResourceStore"]
    ];
});
_c19 = DashboardResources;
function _temp(e_0) {
    return e_0.stopPropagation();
}
function _temp2(e) {
    return e.stopPropagation();
}
function _temp3(s) {
    return s.user;
}
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16, _c17, _c18, _c19;
__turbopack_context__.k.register(_c, "LinkIcon");
__turbopack_context__.k.register(_c1, "ImageIcon");
__turbopack_context__.k.register(_c2, "KeyIcon");
__turbopack_context__.k.register(_c3, "PlusIcon");
__turbopack_context__.k.register(_c4, "ExternalLinkIcon");
__turbopack_context__.k.register(_c5, "TrashIcon");
__turbopack_context__.k.register(_c6, "EditIcon");
__turbopack_context__.k.register(_c7, "EyeIcon");
__turbopack_context__.k.register(_c8, "EyeOffIcon");
__turbopack_context__.k.register(_c9, "CloseIcon");
__turbopack_context__.k.register(_c10, "CopyIcon");
__turbopack_context__.k.register(_c11, "LockIcon");
__turbopack_context__.k.register(_c12, "CredentialsGate");
__turbopack_context__.k.register(_c13, "ResourceModal");
__turbopack_context__.k.register(_c14, "DeleteConfirm");
__turbopack_context__.k.register(_c15, "LinkCard");
__turbopack_context__.k.register(_c16, "AssetCard");
__turbopack_context__.k.register(_c17, "CredentialCard");
__turbopack_context__.k.register(_c18, "EmptyState");
__turbopack_context__.k.register(_c19, "DashboardResources");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/board/dashboard-view.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DashboardView",
    ()=>DashboardView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$team$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/team-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$board$2f$dashboard$2d$overview$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/board/dashboard-overview.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$board$2f$dashboard$2d$editor$2d$performance$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/board/dashboard-editor-performance.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$board$2f$dashboard$2d$resources$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/board/dashboard-resources.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
// ============================================
// CONSTANTS
// ============================================
const TIME_PERIODS = [
    {
        value: 'last_7_days',
        label: 'Last 7 days'
    },
    {
        value: 'last_30_days',
        label: 'Last 30 days'
    },
    {
        value: 'last_90_days',
        label: 'Last 90 days'
    },
    {
        value: 'all_time',
        label: 'All time'
    }
];
// ============================================
// HELPERS
// ============================================
const getDateRange = (period)=>{
    const to = new Date();
    const from = new Date();
    switch(period){
        case 'last_7_days':
            from.setDate(from.getDate() - 7);
            break;
        case 'last_30_days':
            from.setDate(from.getDate() - 30);
            break;
        case 'last_90_days':
            from.setDate(from.getDate() - 90);
            break;
        case 'all_time':
            from.setFullYear(2020);
            break;
    }
    return {
        from,
        to
    };
};
const formatDisplayDate = (date)=>date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    });
// ============================================
// ICONS
// ============================================
const UsersIcon = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "ee167e2eca8a493e393397ae9516033dd581fdab37eb1d43c630f4a96a0efcc1") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "ee167e2eca8a493e393397ae9516033dd581fdab37eb1d43c630f4a96a0efcc1";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "20",
            height: "20",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            viewBox: "0 0 24 24",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
                }, void 0, false, {
                    fileName: "[project]/src/components/board/dashboard-view.tsx",
                    lineNumber: 81,
                    columnNumber: 155
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "9",
                    cy: "7",
                    r: "4"
                }, void 0, false, {
                    fileName: "[project]/src/components/board/dashboard-view.tsx",
                    lineNumber: 81,
                    columnNumber: 209
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"
                }, void 0, false, {
                    fileName: "[project]/src/components/board/dashboard-view.tsx",
                    lineNumber: 81,
                    columnNumber: 239
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/dashboard-view.tsx",
            lineNumber: 81,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
};
_c = UsersIcon;
const CheckCircleIcon = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "ee167e2eca8a493e393397ae9516033dd581fdab37eb1d43c630f4a96a0efcc1") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "ee167e2eca8a493e393397ae9516033dd581fdab37eb1d43c630f4a96a0efcc1";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "20",
            height: "20",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            viewBox: "0 0 24 24",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M22 11.08V12a10 10 0 1 1-5.93-9.14"
                }, void 0, false, {
                    fileName: "[project]/src/components/board/dashboard-view.tsx",
                    lineNumber: 98,
                    columnNumber: 155
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                    points: "22 4 12 14.01 9 11.01"
                }, void 0, false, {
                    fileName: "[project]/src/components/board/dashboard-view.tsx",
                    lineNumber: 98,
                    columnNumber: 202
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/dashboard-view.tsx",
            lineNumber: 98,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
};
_c1 = CheckCircleIcon;
const ActivityIcon = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "ee167e2eca8a493e393397ae9516033dd581fdab37eb1d43c630f4a96a0efcc1") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "ee167e2eca8a493e393397ae9516033dd581fdab37eb1d43c630f4a96a0efcc1";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "20",
            height: "20",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                points: "22 12 18 12 15 21 9 3 6 12 2 12"
            }, void 0, false, {
                fileName: "[project]/src/components/board/dashboard-view.tsx",
                lineNumber: 115,
                columnNumber: 155
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-view.tsx",
            lineNumber: 115,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
};
_c2 = ActivityIcon;
const ClockIcon = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "ee167e2eca8a493e393397ae9516033dd581fdab37eb1d43c630f4a96a0efcc1") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "ee167e2eca8a493e393397ae9516033dd581fdab37eb1d43c630f4a96a0efcc1";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "20",
            height: "20",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            viewBox: "0 0 24 24",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "12",
                    cy: "12",
                    r: "10"
                }, void 0, false, {
                    fileName: "[project]/src/components/board/dashboard-view.tsx",
                    lineNumber: 132,
                    columnNumber: 155
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                    points: "12 6 12 12 16 14"
                }, void 0, false, {
                    fileName: "[project]/src/components/board/dashboard-view.tsx",
                    lineNumber: 132,
                    columnNumber: 188
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/dashboard-view.tsx",
            lineNumber: 132,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
};
_c3 = ClockIcon;
const TargetIcon = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "ee167e2eca8a493e393397ae9516033dd581fdab37eb1d43c630f4a96a0efcc1") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "ee167e2eca8a493e393397ae9516033dd581fdab37eb1d43c630f4a96a0efcc1";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "20",
            height: "20",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            viewBox: "0 0 24 24",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "12",
                    cy: "12",
                    r: "10"
                }, void 0, false, {
                    fileName: "[project]/src/components/board/dashboard-view.tsx",
                    lineNumber: 149,
                    columnNumber: 155
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "12",
                    cy: "12",
                    r: "6"
                }, void 0, false, {
                    fileName: "[project]/src/components/board/dashboard-view.tsx",
                    lineNumber: 149,
                    columnNumber: 188
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "12",
                    cy: "12",
                    r: "2"
                }, void 0, false, {
                    fileName: "[project]/src/components/board/dashboard-view.tsx",
                    lineNumber: 149,
                    columnNumber: 220
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/dashboard-view.tsx",
            lineNumber: 149,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
};
_c4 = TargetIcon;
const AlertTriangleIcon = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "ee167e2eca8a493e393397ae9516033dd581fdab37eb1d43c630f4a96a0efcc1") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "ee167e2eca8a493e393397ae9516033dd581fdab37eb1d43c630f4a96a0efcc1";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "20",
            height: "20",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            viewBox: "0 0 24 24",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
                }, void 0, false, {
                    fileName: "[project]/src/components/board/dashboard-view.tsx",
                    lineNumber: 166,
                    columnNumber: 155
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "12",
                    y1: "9",
                    x2: "12",
                    y2: "13"
                }, void 0, false, {
                    fileName: "[project]/src/components/board/dashboard-view.tsx",
                    lineNumber: 166,
                    columnNumber: 256
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "12",
                    y1: "17",
                    x2: "12.01",
                    y2: "17"
                }, void 0, false, {
                    fileName: "[project]/src/components/board/dashboard-view.tsx",
                    lineNumber: 166,
                    columnNumber: 295
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/dashboard-view.tsx",
            lineNumber: 166,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
};
_c5 = AlertTriangleIcon;
const GridIcon = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "ee167e2eca8a493e393397ae9516033dd581fdab37eb1d43c630f4a96a0efcc1") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "ee167e2eca8a493e393397ae9516033dd581fdab37eb1d43c630f4a96a0efcc1";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "16",
            height: "16",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            viewBox: "0 0 24 24",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "3",
                    y: "3",
                    width: "7",
                    height: "7"
                }, void 0, false, {
                    fileName: "[project]/src/components/board/dashboard-view.tsx",
                    lineNumber: 183,
                    columnNumber: 153
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "14",
                    y: "3",
                    width: "7",
                    height: "7"
                }, void 0, false, {
                    fileName: "[project]/src/components/board/dashboard-view.tsx",
                    lineNumber: 183,
                    columnNumber: 194
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "3",
                    y: "14",
                    width: "7",
                    height: "7"
                }, void 0, false, {
                    fileName: "[project]/src/components/board/dashboard-view.tsx",
                    lineNumber: 183,
                    columnNumber: 236
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "14",
                    y: "14",
                    width: "7",
                    height: "7"
                }, void 0, false, {
                    fileName: "[project]/src/components/board/dashboard-view.tsx",
                    lineNumber: 183,
                    columnNumber: 278
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/dashboard-view.tsx",
            lineNumber: 183,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
};
_c6 = GridIcon;
const UserCheckIcon = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "ee167e2eca8a493e393397ae9516033dd581fdab37eb1d43c630f4a96a0efcc1") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "ee167e2eca8a493e393397ae9516033dd581fdab37eb1d43c630f4a96a0efcc1";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "16",
            height: "16",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            viewBox: "0 0 24 24",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
                }, void 0, false, {
                    fileName: "[project]/src/components/board/dashboard-view.tsx",
                    lineNumber: 200,
                    columnNumber: 153
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "8.5",
                    cy: "7",
                    r: "4"
                }, void 0, false, {
                    fileName: "[project]/src/components/board/dashboard-view.tsx",
                    lineNumber: 200,
                    columnNumber: 207
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                    points: "17 11 19 13 23 9"
                }, void 0, false, {
                    fileName: "[project]/src/components/board/dashboard-view.tsx",
                    lineNumber: 200,
                    columnNumber: 239
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/dashboard-view.tsx",
            lineNumber: 200,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
};
_c7 = UserCheckIcon;
const FolderIcon = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "ee167e2eca8a493e393397ae9516033dd581fdab37eb1d43c630f4a96a0efcc1") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "ee167e2eca8a493e393397ae9516033dd581fdab37eb1d43c630f4a96a0efcc1";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "16",
            height: "16",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"
            }, void 0, false, {
                fileName: "[project]/src/components/board/dashboard-view.tsx",
                lineNumber: 217,
                columnNumber: 153
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-view.tsx",
            lineNumber: 217,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
};
_c8 = FolderIcon;
const GearIcon = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "ee167e2eca8a493e393397ae9516033dd581fdab37eb1d43c630f4a96a0efcc1") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "ee167e2eca8a493e393397ae9516033dd581fdab37eb1d43c630f4a96a0efcc1";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "16",
            height: "16",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            viewBox: "0 0 24 24",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"
                }, void 0, false, {
                    fileName: "[project]/src/components/board/dashboard-view.tsx",
                    lineNumber: 234,
                    columnNumber: 153
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "12",
                    cy: "12",
                    r: "3"
                }, void 0, false, {
                    fileName: "[project]/src/components/board/dashboard-view.tsx",
                    lineNumber: 234,
                    columnNumber: 731
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/dashboard-view.tsx",
            lineNumber: 234,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
};
_c9 = GearIcon;
const CalendarIcon = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "ee167e2eca8a493e393397ae9516033dd581fdab37eb1d43c630f4a96a0efcc1") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "ee167e2eca8a493e393397ae9516033dd581fdab37eb1d43c630f4a96a0efcc1";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "16",
            height: "16",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            viewBox: "0 0 24 24",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "3",
                    y: "4",
                    width: "18",
                    height: "18",
                    rx: "2",
                    ry: "2"
                }, void 0, false, {
                    fileName: "[project]/src/components/board/dashboard-view.tsx",
                    lineNumber: 251,
                    columnNumber: 153
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "16",
                    y1: "2",
                    x2: "16",
                    y2: "6"
                }, void 0, false, {
                    fileName: "[project]/src/components/board/dashboard-view.tsx",
                    lineNumber: 251,
                    columnNumber: 210
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "8",
                    y1: "2",
                    x2: "8",
                    y2: "6"
                }, void 0, false, {
                    fileName: "[project]/src/components/board/dashboard-view.tsx",
                    lineNumber: 251,
                    columnNumber: 248
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "3",
                    y1: "10",
                    x2: "21",
                    y2: "10"
                }, void 0, false, {
                    fileName: "[project]/src/components/board/dashboard-view.tsx",
                    lineNumber: 251,
                    columnNumber: 284
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/dashboard-view.tsx",
            lineNumber: 251,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
};
_c10 = CalendarIcon;
const StatCard = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(19);
    if ($[0] !== "ee167e2eca8a493e393397ae9516033dd581fdab37eb1d43c630f4a96a0efcc1") {
        for(let $i = 0; $i < 19; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "ee167e2eca8a493e393397ae9516033dd581fdab37eb1d43c630f4a96a0efcc1";
    }
    const { label, value, subtitle, icon, variant: t1 } = t0;
    const variant = t1 === undefined ? "default" : t1;
    const t2 = `
      rounded-[var(--radius-lg)] border bg-[var(--surface)] p-5
      ${variant === "danger" ? "border-red-200" : "border-[var(--border)]"}
    `;
    let t3;
    if ($[1] !== label) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-sm font-medium text-[var(--text-primary)]",
            children: label
        }, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-view.tsx",
            lineNumber: 292,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = label;
        $[2] = t3;
    } else {
        t3 = $[2];
    }
    const t4 = variant === "danger" ? "text-red-500" : "text-[var(--text-tertiary)]";
    let t5;
    if ($[3] !== icon || $[4] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: t4,
            children: icon
        }, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-view.tsx",
            lineNumber: 301,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[3] = icon;
        $[4] = t4;
        $[5] = t5;
    } else {
        t5 = $[5];
    }
    let t6;
    if ($[6] !== t3 || $[7] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-3 flex items-center justify-between",
            children: [
                t3,
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/dashboard-view.tsx",
            lineNumber: 310,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[6] = t3;
        $[7] = t5;
        $[8] = t6;
    } else {
        t6 = $[8];
    }
    const t7 = `text-3xl font-bold ${variant === "danger" ? "text-red-500" : "text-[var(--text-primary)]"}`;
    let t8;
    if ($[9] !== t7 || $[10] !== value) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: t7,
            children: value
        }, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-view.tsx",
            lineNumber: 320,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[9] = t7;
        $[10] = value;
        $[11] = t8;
    } else {
        t8 = $[11];
    }
    let t9;
    if ($[12] !== subtitle) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-1 text-sm text-[var(--text-tertiary)]",
            children: subtitle
        }, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-view.tsx",
            lineNumber: 329,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[12] = subtitle;
        $[13] = t9;
    } else {
        t9 = $[13];
    }
    let t10;
    if ($[14] !== t2 || $[15] !== t6 || $[16] !== t8 || $[17] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t2,
            children: [
                t6,
                t8,
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/dashboard-view.tsx",
            lineNumber: 337,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[14] = t2;
        $[15] = t6;
        $[16] = t8;
        $[17] = t9;
        $[18] = t10;
    } else {
        t10 = $[18];
    }
    return t10;
};
_c11 = StatCard;
// ============================================
// DASHBOARD TABS CONFIG
// ============================================
const DASHBOARD_TABS = [
    {
        value: 'overview',
        label: 'Overview',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GridIcon, {}, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-view.tsx",
            lineNumber: 360,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        value: 'editor_performance',
        label: 'Editor Performance',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(UserCheckIcon, {}, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-view.tsx",
            lineNumber: 364,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        value: 'resources',
        label: 'Resources',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FolderIcon, {}, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-view.tsx",
            lineNumber: 368,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        value: 'settings',
        label: 'Settings',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GearIcon, {}, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-view.tsx",
            lineNumber: 372,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }
];
const DashboardView = (t0)=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(111);
    if ($[0] !== "ee167e2eca8a493e393397ae9516033dd581fdab37eb1d43c630f4a96a0efcc1") {
        for(let $i = 0; $i < 111; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "ee167e2eca8a493e393397ae9516033dd581fdab37eb1d43c630f4a96a0efcc1";
    }
    const { requests } = t0;
    const members = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$team$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTeamStore"])(_temp);
    const [timePeriod, setTimePeriod] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("last_30_days");
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("overview");
    let t1;
    if ($[1] !== timePeriod) {
        t1 = getDateRange(timePeriod);
        $[1] = timePeriod;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const { from, to } = t1;
    let toEnd;
    if ($[3] !== to) {
        toEnd = new Date(to);
        toEnd.setHours(23, 59, 59, 999);
        $[3] = to;
        $[4] = toEnd;
    } else {
        toEnd = $[4];
    }
    let t2;
    if ($[5] !== from || $[6] !== requests || $[7] !== toEnd) {
        let t3;
        if ($[9] !== from || $[10] !== toEnd) {
            t3 = (r)=>{
                const created = new Date(r.createdAt);
                return created >= from && created <= toEnd;
            };
            $[9] = from;
            $[10] = toEnd;
            $[11] = t3;
        } else {
            t3 = $[11];
        }
        t2 = requests.filter(t3);
        $[5] = from;
        $[6] = requests;
        $[7] = toEnd;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    const filteredRequests = t2;
    let today;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        today = new Date();
        today.setHours(0, 0, 0, 0);
        $[12] = today;
    } else {
        today = $[12];
    }
    let t3;
    if ($[13] !== filteredRequests) {
        t3 = filteredRequests.filter(_temp2);
        $[13] = filteredRequests;
        $[14] = t3;
    } else {
        t3 = $[14];
    }
    const completed = t3.length;
    const total = filteredRequests.length;
    let t4;
    if ($[15] !== filteredRequests) {
        t4 = filteredRequests.reduce(_temp3, 0);
        $[15] = filteredRequests;
        $[16] = t4;
    } else {
        t4 = $[16];
    }
    const totalItems = t4;
    let t5;
    if ($[17] !== filteredRequests) {
        t5 = filteredRequests.filter(_temp4).reduce(_temp5, 0);
        $[17] = filteredRequests;
        $[18] = t5;
    } else {
        t5 = $[18];
    }
    const deliveredItems = t5;
    let t6;
    if ($[19] !== filteredRequests) {
        let t7;
        if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
            t7 = (r_4)=>{
                if (r_4.status === "closed" || !r_4.dueDate) {
                    return false;
                }
                const due = new Date(r_4.dueDate);
                due.setHours(0, 0, 0, 0);
                return due < today;
            };
            $[21] = t7;
        } else {
            t7 = $[21];
        }
        t6 = filteredRequests.filter(t7);
        $[19] = filteredRequests;
        $[20] = t6;
    } else {
        t6 = $[20];
    }
    const overdue = t6.length;
    const t7 = members.length;
    let t8;
    if ($[22] !== completed || $[23] !== total) {
        t8 = total > 0 ? Math.round(completed / total * 100) : 0;
        $[22] = completed;
        $[23] = total;
        $[24] = t8;
    } else {
        t8 = $[24];
    }
    let t9;
    if ($[25] !== filteredRequests) {
        t9 = filteredRequests.filter(_temp6);
        $[25] = filteredRequests;
        $[26] = t9;
    } else {
        t9 = $[26];
    }
    const t10 = t9.length;
    let t11;
    if ($[27] !== filteredRequests) {
        t11 = filteredRequests.filter(_temp7);
        $[27] = filteredRequests;
        $[28] = t11;
    } else {
        t11 = $[28];
    }
    let t12;
    if ($[29] !== completed || $[30] !== deliveredItems || $[31] !== members.length || $[32] !== overdue || $[33] !== t11.length || $[34] !== t8 || $[35] !== t9.length || $[36] !== totalItems) {
        t12 = {
            totalEditors: t7,
            completed,
            completionRate: t8,
            inProgress: t10,
            inReview: t11.length,
            totalItems,
            deliveredItems,
            overdue
        };
        $[29] = completed;
        $[30] = deliveredItems;
        $[31] = members.length;
        $[32] = overdue;
        $[33] = t11.length;
        $[34] = t8;
        $[35] = t9.length;
        $[36] = totalItems;
        $[37] = t12;
    } else {
        t12 = $[37];
    }
    const stats = t12;
    let t13;
    if ($[38] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-sm font-medium text-[var(--text-secondary)]",
            children: "Time Period:"
        }, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-view.tsx",
            lineNumber: 553,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[38] = t13;
    } else {
        t13 = $[38];
    }
    let t14;
    if ($[39] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = (e)=>setTimePeriod(e.target.value);
        $[39] = t14;
    } else {
        t14 = $[39];
    }
    let t15;
    if ($[40] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = TIME_PERIODS.map(_temp8);
        $[40] = t15;
    } else {
        t15 = $[40];
    }
    let t16;
    if ($[41] !== timePeriod) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [
                t13,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                    value: timePeriod,
                    onChange: t14,
                    className: "rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 text-sm text-[var(--text-primary)] outline-none transition-colors hover:border-[var(--border-hover)] focus:border-[var(--primary)]",
                    "aria-label": "Select time period",
                    children: t15
                }, void 0, false, {
                    fileName: "[project]/src/components/board/dashboard-view.tsx",
                    lineNumber: 574,
                    columnNumber: 57
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/dashboard-view.tsx",
            lineNumber: 574,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[41] = timePeriod;
        $[42] = t16;
    } else {
        t16 = $[42];
    }
    let t17;
    if ($[43] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-sm text-[var(--text-secondary)]",
            children: "From:"
        }, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-view.tsx",
            lineNumber: 582,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[43] = t17;
    } else {
        t17 = $[43];
    }
    let t18;
    if ($[44] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-[var(--text-tertiary)]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CalendarIcon, {}, void 0, false, {
                fileName: "[project]/src/components/board/dashboard-view.tsx",
                lineNumber: 589,
                columnNumber: 57
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-view.tsx",
            lineNumber: 589,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[44] = t18;
    } else {
        t18 = $[44];
    }
    let t19;
    if ($[45] !== from) {
        t19 = formatDisplayDate(from);
        $[45] = from;
        $[46] = t19;
    } else {
        t19 = $[46];
    }
    let t20;
    if ($[47] !== t19) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [
                t17,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-1.5 rounded-[var(--radius-md)] border border-[var(--border)] px-3 py-1.5",
                    children: [
                        t18,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-sm text-[var(--text-primary)]",
                            children: t19
                        }, void 0, false, {
                            fileName: "[project]/src/components/board/dashboard-view.tsx",
                            lineNumber: 604,
                            columnNumber: 174
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/board/dashboard-view.tsx",
                    lineNumber: 604,
                    columnNumber: 57
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/dashboard-view.tsx",
            lineNumber: 604,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[47] = t19;
        $[48] = t20;
    } else {
        t20 = $[48];
    }
    let t21;
    if ($[49] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-sm text-[var(--text-secondary)]",
            children: "To:"
        }, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-view.tsx",
            lineNumber: 612,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[49] = t21;
    } else {
        t21 = $[49];
    }
    let t22;
    if ($[50] === Symbol.for("react.memo_cache_sentinel")) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-[var(--text-tertiary)]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CalendarIcon, {}, void 0, false, {
                fileName: "[project]/src/components/board/dashboard-view.tsx",
                lineNumber: 619,
                columnNumber: 57
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-view.tsx",
            lineNumber: 619,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[50] = t22;
    } else {
        t22 = $[50];
    }
    let t23;
    if ($[51] !== to) {
        t23 = formatDisplayDate(to);
        $[51] = to;
        $[52] = t23;
    } else {
        t23 = $[52];
    }
    let t24;
    if ($[53] !== t23) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [
                t21,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-1.5 rounded-[var(--radius-md)] border border-[var(--border)] px-3 py-1.5",
                    children: [
                        t22,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-sm text-[var(--text-primary)]",
                            children: t23
                        }, void 0, false, {
                            fileName: "[project]/src/components/board/dashboard-view.tsx",
                            lineNumber: 634,
                            columnNumber: 174
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/board/dashboard-view.tsx",
                    lineNumber: 634,
                    columnNumber: 57
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/dashboard-view.tsx",
            lineNumber: 634,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[53] = t23;
        $[54] = t24;
    } else {
        t24 = $[54];
    }
    let t25;
    if ($[55] !== t16 || $[56] !== t20 || $[57] !== t24) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-wrap items-center gap-4 rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] px-5 py-3.5",
            children: [
                t16,
                t20,
                t24
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/dashboard-view.tsx",
            lineNumber: 642,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[55] = t16;
        $[56] = t20;
        $[57] = t24;
        $[58] = t25;
    } else {
        t25 = $[58];
    }
    let t26;
    if ($[59] === Symbol.for("react.memo_cache_sentinel")) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(UsersIcon, {}, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-view.tsx",
            lineNumber: 652,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[59] = t26;
    } else {
        t26 = $[59];
    }
    let t27;
    if ($[60] !== stats.totalEditors) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
            label: "Total Editors",
            value: stats.totalEditors,
            subtitle: "Active team members",
            icon: t26
        }, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-view.tsx",
            lineNumber: 659,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[60] = stats.totalEditors;
        $[61] = t27;
    } else {
        t27 = $[61];
    }
    const t28 = `${stats.completionRate}% rate`;
    let t29;
    if ($[62] === Symbol.for("react.memo_cache_sentinel")) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CheckCircleIcon, {}, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-view.tsx",
            lineNumber: 668,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[62] = t29;
    } else {
        t29 = $[62];
    }
    let t30;
    if ($[63] !== stats.completed || $[64] !== t28) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
            label: "Completed",
            value: stats.completed,
            subtitle: t28,
            icon: t29
        }, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-view.tsx",
            lineNumber: 675,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[63] = stats.completed;
        $[64] = t28;
        $[65] = t30;
    } else {
        t30 = $[65];
    }
    let t31;
    if ($[66] === Symbol.for("react.memo_cache_sentinel")) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ActivityIcon, {}, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-view.tsx",
            lineNumber: 684,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[66] = t31;
    } else {
        t31 = $[66];
    }
    let t32;
    if ($[67] !== stats.inProgress) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
            label: "In Progress",
            value: stats.inProgress,
            subtitle: "Being worked on",
            icon: t31
        }, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-view.tsx",
            lineNumber: 691,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[67] = stats.inProgress;
        $[68] = t32;
    } else {
        t32 = $[68];
    }
    let t33;
    if ($[69] === Symbol.for("react.memo_cache_sentinel")) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ClockIcon, {}, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-view.tsx",
            lineNumber: 699,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[69] = t33;
    } else {
        t33 = $[69];
    }
    let t34;
    if ($[70] !== stats.inReview) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
            label: "In Review",
            value: stats.inReview,
            subtitle: "Awaiting approval",
            icon: t33
        }, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-view.tsx",
            lineNumber: 706,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[70] = stats.inReview;
        $[71] = t34;
    } else {
        t34 = $[71];
    }
    const t35 = `${stats.deliveredItems} delivered`;
    let t36;
    if ($[72] === Symbol.for("react.memo_cache_sentinel")) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TargetIcon, {}, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-view.tsx",
            lineNumber: 715,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[72] = t36;
    } else {
        t36 = $[72];
    }
    let t37;
    if ($[73] !== stats.totalItems || $[74] !== t35) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
            label: "Total Items",
            value: stats.totalItems,
            subtitle: t35,
            icon: t36
        }, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-view.tsx",
            lineNumber: 722,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[73] = stats.totalItems;
        $[74] = t35;
        $[75] = t37;
    } else {
        t37 = $[75];
    }
    let t38;
    if ($[76] === Symbol.for("react.memo_cache_sentinel")) {
        t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AlertTriangleIcon, {}, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-view.tsx",
            lineNumber: 731,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[76] = t38;
    } else {
        t38 = $[76];
    }
    let t39;
    if ($[77] !== stats.overdue) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
            label: "Overdue",
            value: stats.overdue,
            subtitle: "Past due date",
            icon: t38,
            variant: "danger"
        }, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-view.tsx",
            lineNumber: 738,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[77] = stats.overdue;
        $[78] = t39;
    } else {
        t39 = $[78];
    }
    let t40;
    if ($[79] !== t27 || $[80] !== t30 || $[81] !== t32 || $[82] !== t34 || $[83] !== t37 || $[84] !== t39) {
        t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-2 gap-4 sm:grid-cols-3 xl:grid-cols-6",
            children: [
                t27,
                t30,
                t32,
                t34,
                t37,
                t39
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/dashboard-view.tsx",
            lineNumber: 746,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[79] = t27;
        $[80] = t30;
        $[81] = t32;
        $[82] = t34;
        $[83] = t37;
        $[84] = t39;
        $[85] = t40;
    } else {
        t40 = $[85];
    }
    let t41;
    if ($[86] !== activeTab) {
        t41 = DASHBOARD_TABS.map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                role: "tab",
                "aria-selected": activeTab === tab.value,
                onClick: ()=>setActiveTab(tab.value),
                className: `
                flex items-center justify-center gap-2 py-3.5 text-sm font-medium
                transition-colors duration-[var(--transition-fast)]
                ${activeTab === tab.value ? "border-b-2 border-[var(--text-primary)] text-[var(--text-primary)]" : "text-[var(--text-tertiary)] hover:text-[var(--text-secondary)]"}
              `,
                children: [
                    tab.icon,
                    tab.label
                ]
            }, tab.value, true, {
                fileName: "[project]/src/components/board/dashboard-view.tsx",
                lineNumber: 759,
                columnNumber: 37
            }, ("TURBOPACK compile-time value", void 0)));
        $[86] = activeTab;
        $[87] = t41;
    } else {
        t41 = $[87];
    }
    let t42;
    if ($[88] !== t41) {
        t42 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "border-b border-[var(--border)]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "grid grid-cols-4",
                role: "tablist",
                "aria-label": "Dashboard sections",
                children: t41
            }, void 0, false, {
                fileName: "[project]/src/components/board/dashboard-view.tsx",
                lineNumber: 771,
                columnNumber: 60
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-view.tsx",
            lineNumber: 771,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[88] = t41;
        $[89] = t42;
    } else {
        t42 = $[89];
    }
    let t43;
    if ($[90] !== activeTab || $[91] !== filteredRequests || $[92] !== from || $[93] !== to) {
        t43 = activeTab === "overview" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$board$2f$dashboard$2d$overview$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DashboardOverview"], {
            requests: filteredRequests,
            from: from,
            to: to
        }, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-view.tsx",
            lineNumber: 779,
            columnNumber: 39
        }, ("TURBOPACK compile-time value", void 0));
        $[90] = activeTab;
        $[91] = filteredRequests;
        $[92] = from;
        $[93] = to;
        $[94] = t43;
    } else {
        t43 = $[94];
    }
    let t44;
    if ($[95] !== activeTab || $[96] !== filteredRequests || $[97] !== members) {
        t44 = activeTab === "editor_performance" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$board$2f$dashboard$2d$editor$2d$performance$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DashboardEditorPerformance"], {
            requests: filteredRequests,
            members: members
        }, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-view.tsx",
            lineNumber: 790,
            columnNumber: 49
        }, ("TURBOPACK compile-time value", void 0));
        $[95] = activeTab;
        $[96] = filteredRequests;
        $[97] = members;
        $[98] = t44;
    } else {
        t44 = $[98];
    }
    let t45;
    if ($[99] !== activeTab) {
        t45 = activeTab === "resources" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$board$2f$dashboard$2d$resources$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DashboardResources"], {}, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-view.tsx",
            lineNumber: 800,
            columnNumber: 40
        }, ("TURBOPACK compile-time value", void 0));
        $[99] = activeTab;
        $[100] = t45;
    } else {
        t45 = $[100];
    }
    let t46;
    if ($[101] !== activeTab) {
        t46 = activeTab === "settings" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex h-48 items-center justify-center rounded-[var(--radius-lg)] border border-dashed border-[var(--border)] bg-[var(--surface)]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-[var(--text-tertiary)]",
                children: "Settings — Coming soon"
            }, void 0, false, {
                fileName: "[project]/src/components/board/dashboard-view.tsx",
                lineNumber: 808,
                columnNumber: 185
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-view.tsx",
            lineNumber: 808,
            columnNumber: 39
        }, ("TURBOPACK compile-time value", void 0));
        $[101] = activeTab;
        $[102] = t46;
    } else {
        t46 = $[102];
    }
    let t47;
    if ($[103] !== t25 || $[104] !== t40 || $[105] !== t42 || $[106] !== t43 || $[107] !== t44 || $[108] !== t45 || $[109] !== t46) {
        t47 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-6",
            children: [
                t25,
                t40,
                t42,
                t43,
                t44,
                t45,
                t46
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/dashboard-view.tsx",
            lineNumber: 816,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[103] = t25;
        $[104] = t40;
        $[105] = t42;
        $[106] = t43;
        $[107] = t44;
        $[108] = t45;
        $[109] = t46;
        $[110] = t47;
    } else {
        t47 = $[110];
    }
    return t47;
};
_s(DashboardView, "VwBGyD88r8KFFXYq5EnQlIlc4Hk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$team$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTeamStore"]
    ];
});
_c12 = DashboardView;
function _temp(s) {
    return s.members;
}
function _temp2(r_0) {
    return r_0.status === "closed";
}
function _temp3(sum, r_1) {
    return sum + r_1.totalItems;
}
function _temp4(r_2) {
    return r_2.status === "closed";
}
function _temp5(sum_0, r_3) {
    return sum_0 + r_3.totalItems;
}
function _temp6(r_5) {
    return r_5.status === "in_progress";
}
function _temp7(r_6) {
    return r_6.status === "review";
}
function _temp8(o) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
        value: o.value,
        children: o.label
    }, o.value, false, {
        fileName: "[project]/src/components/board/dashboard-view.tsx",
        lineNumber: 852,
        columnNumber: 10
    }, this);
}
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12;
__turbopack_context__.k.register(_c, "UsersIcon");
__turbopack_context__.k.register(_c1, "CheckCircleIcon");
__turbopack_context__.k.register(_c2, "ActivityIcon");
__turbopack_context__.k.register(_c3, "ClockIcon");
__turbopack_context__.k.register(_c4, "TargetIcon");
__turbopack_context__.k.register(_c5, "AlertTriangleIcon");
__turbopack_context__.k.register(_c6, "GridIcon");
__turbopack_context__.k.register(_c7, "UserCheckIcon");
__turbopack_context__.k.register(_c8, "FolderIcon");
__turbopack_context__.k.register(_c9, "GearIcon");
__turbopack_context__.k.register(_c10, "CalendarIcon");
__turbopack_context__.k.register(_c11, "StatCard");
__turbopack_context__.k.register(_c12, "DashboardView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/modal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Modal",
    ()=>Modal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const MAX_WIDTH_STYLES = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl'
};
const Modal = (t0)=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(17);
    if ($[0] !== "5d52152e1d3c4725465ca8d2f6a52aca7f038760f89620c63b3087b454ee03ab") {
        for(let $i = 0; $i < 17; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "5d52152e1d3c4725465ca8d2f6a52aca7f038760f89620c63b3087b454ee03ab";
    }
    const { open, onClose, children, maxWidth: t1 } = t0;
    const maxWidth = t1 === undefined ? "sm" : t1;
    const overlayRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t2;
    let t3;
    if ($[1] !== onClose || $[2] !== open) {
        t2 = ()=>{
            if (!open) {
                return;
            }
            const handleEscape = (e)=>{
                if (e.key === "Escape") {
                    onClose();
                }
            };
            document.addEventListener("keydown", handleEscape);
            document.body.style.overflow = "hidden";
            return ()=>{
                document.removeEventListener("keydown", handleEscape);
                document.body.style.overflow = "";
            };
        };
        t3 = [
            open,
            onClose
        ];
        $[1] = onClose;
        $[2] = open;
        $[3] = t2;
        $[4] = t3;
    } else {
        t2 = $[3];
        t3 = $[4];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    if (!open) {
        return null;
    }
    let t4;
    if ($[5] !== onClose) {
        t4 = (e_0)=>{
            if (e_0.target === overlayRef.current) {
                onClose();
            }
        };
        $[5] = onClose;
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    const handleOverlayClick = t4;
    const t5 = `
          relative w-full ${MAX_WIDTH_STYLES[maxWidth]}
          bg-[var(--surface)] border border-[var(--border)]
          rounded-[var(--radius-xl)] p-8
          shadow-[var(--shadow-overlay)]
          animate-in fade-in zoom-in-95 duration-200
        `;
    let t6;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "h-4 w-4",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M6 18L18 6M6 6l12 12"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/modal.tsx",
                lineNumber: 87,
                columnNumber: 89
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/ui/modal.tsx",
            lineNumber: 87,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    let t7;
    if ($[8] !== onClose) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: onClose,
            className: "\n            absolute top-4 right-4 flex h-8 w-8 items-center justify-center\n            rounded-[var(--radius-md)] text-[var(--text-tertiary)]\n            transition-all duration-[var(--transition-fast)]\n            hover:bg-[var(--surface-active)] hover:text-[var(--text-primary)]\n          ",
            "aria-label": "Close",
            children: t6
        }, void 0, false, {
            fileName: "[project]/src/components/ui/modal.tsx",
            lineNumber: 94,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[8] = onClose;
        $[9] = t7;
    } else {
        t7 = $[9];
    }
    let t8;
    if ($[10] !== children || $[11] !== t5 || $[12] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t5,
            children: [
                t7,
                children
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/modal.tsx",
            lineNumber: 102,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[10] = children;
        $[11] = t5;
        $[12] = t7;
        $[13] = t8;
    } else {
        t8 = $[13];
    }
    let t9;
    if ($[14] !== handleOverlayClick || $[15] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: overlayRef,
            onClick: handleOverlayClick,
            className: "fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-[2px]",
            role: "dialog",
            "aria-modal": "true",
            children: t8
        }, void 0, false, {
            fileName: "[project]/src/components/ui/modal.tsx",
            lineNumber: 112,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[14] = handleOverlayClick;
        $[15] = t8;
        $[16] = t9;
    } else {
        t9 = $[16];
    }
    return t9;
};
_s(Modal, "rmj6vZ+Vy6O1wOWphXugz2fiTMw=");
_c = Modal;
var _c;
__turbopack_context__.k.register(_c, "Modal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/board/request-detail-modal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RequestDetailModal",
    ()=>RequestDetailModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/types/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/modal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$request$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/request-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$team$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/team-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$auth$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/auth-store.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
const formatDate = (dateStr)=>{
    return new Date(dateStr).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    });
};
const RequestDetailModal = (t0)=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(199);
    if ($[0] !== "c7b62306975393402c2e3f183b1750623d9c7479ad94eacad76152ebe3eb8e1a") {
        for(let $i = 0; $i < 199; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "c7b62306975393402c2e3f183b1750623d9c7479ad94eacad76152ebe3eb8e1a";
    }
    const { request: requestProp, open, onClose } = t0;
    const user = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$auth$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"])(_temp);
    const requests = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$request$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRequestStore"])(_temp2);
    const moveForward = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$request$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRequestStore"])(_temp3);
    const assignRequest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$request$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRequestStore"])(_temp4);
    const updateRequest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$request$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRequestStore"])(_temp5);
    const addComment = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$request$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRequestStore"])(_temp6);
    const deleteRequest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$request$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRequestStore"])(_temp7);
    const members = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$team$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTeamStore"])(_temp8);
    const [selectedAssignee, setSelectedAssignee] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [newComment, setNewComment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [finalLinkInput, setFinalLinkInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [showDeleteConfirm, setShowDeleteConfirm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [deleteReason, setDeleteReason] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    let t1;
    if ($[1] !== requestProp || $[2] !== requests) {
        t1 = requestProp ? requests.find((r)=>r.id === requestProp.id) ?? requestProp : null;
        $[1] = requestProp;
        $[2] = requests;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    const request = t1;
    if (!request || !user) {
        return null;
    }
    const priorityCfg = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PRIORITY_CONFIG"][request.priority];
    const typeIcon = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["REQUEST_TYPE_ICONS"][request.type];
    let T0;
    let canDelete;
    let canMoveForward;
    let handleAddComment;
    let handleDeleteConfirm;
    let handleMoveForward;
    let nextStatus;
    let t10;
    let t11;
    let t12;
    let t13;
    let t2;
    let t3;
    let t4;
    let t5;
    let t6;
    let t7;
    let t8;
    let t9;
    if ($[4] !== addComment || $[5] !== assignRequest || $[6] !== deleteReason || $[7] !== deleteRequest || $[8] !== finalLinkInput || $[9] !== members || $[10] !== moveForward || $[11] !== newComment || $[12] !== onClose || $[13] !== open || $[14] !== priorityCfg.color || $[15] !== priorityCfg.label || $[16] !== request.assigneeId || $[17] !== request.assigneeName || $[18] !== request.createdAt || $[19] !== request.description || $[20] !== request.finalLink || $[21] !== request.id || $[22] !== request.priority || $[23] !== request.referenceLinks || $[24] !== request.requesterEmail || $[25] !== request.requesterName || $[26] !== request.status || $[27] !== request.teamLeadEmail || $[28] !== request.teamLeadName || $[29] !== request.title || $[30] !== request.type || $[31] !== selectedAssignee || $[32] !== typeIcon || $[33] !== updateRequest || $[34] !== user.id || $[35] !== user.name || $[36] !== user.role) {
        const editors = members.filter(_temp9);
        canMoveForward = request.status !== "closed" && request.status !== "deleted" && (user.role === "admin" || user.role === "editor" && request.assigneeId === user.id);
        const canAssign = user.role === "admin";
        canDelete = user.role === "admin";
        const canEditFinalLink = user.role === "admin" || user.role === "editor" && request.assigneeId === user.id;
        const idx = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["REQUEST_STATUS_ORDER"].indexOf(request.status);
        nextStatus = idx < __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["REQUEST_STATUS_ORDER"].length - 1 ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["REQUEST_STATUS_ORDER"][idx + 1] : null;
        let t14;
        if ($[56] !== moveForward || $[57] !== onClose || $[58] !== request.id) {
            t14 = ()=>{
                moveForward(request.id);
                onClose();
            };
            $[56] = moveForward;
            $[57] = onClose;
            $[58] = request.id;
            $[59] = t14;
        } else {
            t14 = $[59];
        }
        handleMoveForward = t14;
        let t15;
        if ($[60] !== assignRequest || $[61] !== members || $[62] !== request.id || $[63] !== selectedAssignee) {
            t15 = ()=>{
                if (!selectedAssignee) {
                    return;
                }
                const member = members.find((m_0)=>m_0.id === selectedAssignee);
                if (member) {
                    assignRequest(request.id, member.id, member.name);
                    setSelectedAssignee("");
                }
            };
            $[60] = assignRequest;
            $[61] = members;
            $[62] = request.id;
            $[63] = selectedAssignee;
            $[64] = t15;
        } else {
            t15 = $[64];
        }
        const handleAssign = t15;
        let t16;
        if ($[65] !== addComment || $[66] !== newComment || $[67] !== request.id || $[68] !== user.id || $[69] !== user.name) {
            t16 = ()=>{
                if (!newComment.trim()) {
                    return;
                }
                addComment(request.id, {
                    id: `comment_${Date.now()}`,
                    authorId: user.id,
                    authorName: user.name,
                    content: newComment.trim(),
                    createdAt: new Date().toISOString()
                });
                setNewComment("");
            };
            $[65] = addComment;
            $[66] = newComment;
            $[67] = request.id;
            $[68] = user.id;
            $[69] = user.name;
            $[70] = t16;
        } else {
            t16 = $[70];
        }
        handleAddComment = t16;
        let t17;
        if ($[71] !== finalLinkInput || $[72] !== request.id || $[73] !== updateRequest) {
            t17 = ()=>{
                const link = finalLinkInput.trim();
                updateRequest(request.id, {
                    finalLink: link || null
                });
                setFinalLinkInput("");
            };
            $[71] = finalLinkInput;
            $[72] = request.id;
            $[73] = updateRequest;
            $[74] = t17;
        } else {
            t17 = $[74];
        }
        const handleSaveFinalLink = t17;
        let t18;
        if ($[75] !== deleteReason || $[76] !== deleteRequest || $[77] !== onClose || $[78] !== request.id || $[79] !== user.id || $[80] !== user.name) {
            t18 = ()=>{
                if (!deleteReason.trim()) {
                    return;
                }
                deleteRequest(request.id, user.id, user.name, deleteReason.trim());
                setShowDeleteConfirm(false);
                setDeleteReason("");
                onClose();
            };
            $[75] = deleteReason;
            $[76] = deleteRequest;
            $[77] = onClose;
            $[78] = request.id;
            $[79] = user.id;
            $[80] = user.name;
            $[81] = t18;
        } else {
            t18 = $[81];
        }
        handleDeleteConfirm = t18;
        T0 = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"];
        t11 = open;
        t12 = onClose;
        t13 = "lg";
        t2 = "max-h-[70vh] overflow-y-auto pr-2";
        let t19;
        if ($[82] !== typeIcon) {
            t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "mt-0.5 text-lg",
                children: typeIcon
            }, void 0, false, {
                fileName: "[project]/src/components/board/request-detail-modal.tsx",
                lineNumber: 200,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            $[82] = typeIcon;
            $[83] = t19;
        } else {
            t19 = $[83];
        }
        let t20;
        if ($[84] !== request.title) {
            t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-lg font-semibold text-[var(--text-primary)]",
                children: request.title
            }, void 0, false, {
                fileName: "[project]/src/components/board/request-detail-modal.tsx",
                lineNumber: 208,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            $[84] = request.title;
            $[85] = t20;
        } else {
            t20 = $[85];
        }
        if ($[86] !== t19 || $[87] !== t20) {
            t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4 flex items-start gap-2",
                children: [
                    t19,
                    t20
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/board/request-detail-modal.tsx",
                lineNumber: 215,
                columnNumber: 12
            }, ("TURBOPACK compile-time value", void 0));
            $[86] = t19;
            $[87] = t20;
            $[88] = t3;
        } else {
            t3 = $[88];
        }
        const t21 = request.priority === "urgent" ? "filled" : "default";
        let t22;
        if ($[89] !== priorityCfg.color || $[90] !== priorityCfg.label || $[91] !== t21) {
            t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                color: priorityCfg.color,
                variant: t21,
                children: priorityCfg.label
            }, void 0, false, {
                fileName: "[project]/src/components/board/request-detail-modal.tsx",
                lineNumber: 225,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            $[89] = priorityCfg.color;
            $[90] = priorityCfg.label;
            $[91] = t21;
            $[92] = t22;
        } else {
            t22 = $[92];
        }
        let t23;
        if ($[93] !== request.type) {
            t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                color: "default",
                variant: "outline",
                children: request.type
            }, void 0, false, {
                fileName: "[project]/src/components/board/request-detail-modal.tsx",
                lineNumber: 235,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            $[93] = request.type;
            $[94] = t23;
        } else {
            t23 = $[94];
        }
        const t24 = request.status === "deleted" ? "red" : request.status === "closed" ? "green" : request.status === "review" ? "yellow" : "blue";
        const t25 = request.status === "deleted" ? "filled" : "default";
        const t26 = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["REQUEST_STATUS_LABELS"][request.status];
        let t27;
        if ($[95] !== t24 || $[96] !== t25 || $[97] !== t26) {
            t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                color: t24,
                variant: t25,
                children: t26
            }, void 0, false, {
                fileName: "[project]/src/components/board/request-detail-modal.tsx",
                lineNumber: 246,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            $[95] = t24;
            $[96] = t25;
            $[97] = t26;
            $[98] = t27;
        } else {
            t27 = $[98];
        }
        if ($[99] !== t22 || $[100] !== t23 || $[101] !== t27) {
            t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-5 flex flex-wrap gap-2",
                children: [
                    t22,
                    t23,
                    t27
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/board/request-detail-modal.tsx",
                lineNumber: 255,
                columnNumber: 12
            }, ("TURBOPACK compile-time value", void 0));
            $[99] = t22;
            $[100] = t23;
            $[101] = t27;
            $[102] = t4;
        } else {
            t4 = $[102];
        }
        let t28;
        if ($[103] === Symbol.for("react.memo_cache_sentinel")) {
            t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "mb-1 text-sm font-semibold text-[var(--text-primary)]",
                children: "Description"
            }, void 0, false, {
                fileName: "[project]/src/components/board/request-detail-modal.tsx",
                lineNumber: 265,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            $[103] = t28;
        } else {
            t28 = $[103];
        }
        const t29 = request.description || "No description";
        if ($[104] !== t29) {
            t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-5",
                children: [
                    t28,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-[var(--text-secondary)]",
                        children: t29
                    }, void 0, false, {
                        fileName: "[project]/src/components/board/request-detail-modal.tsx",
                        lineNumber: 272,
                        columnNumber: 39
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/board/request-detail-modal.tsx",
                lineNumber: 272,
                columnNumber: 12
            }, ("TURBOPACK compile-time value", void 0));
            $[104] = t29;
            $[105] = t5;
        } else {
            t5 = $[105];
        }
        let t30;
        if ($[106] === Symbol.for("react.memo_cache_sentinel")) {
            t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-xs font-medium text-[var(--text-tertiary)]",
                children: "Requester"
            }, void 0, false, {
                fileName: "[project]/src/components/board/request-detail-modal.tsx",
                lineNumber: 280,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            $[106] = t30;
        } else {
            t30 = $[106];
        }
        let t31;
        if ($[107] !== request.requesterName) {
            t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm font-medium text-[var(--text-primary)]",
                children: request.requesterName
            }, void 0, false, {
                fileName: "[project]/src/components/board/request-detail-modal.tsx",
                lineNumber: 287,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            $[107] = request.requesterName;
            $[108] = t31;
        } else {
            t31 = $[108];
        }
        let t32;
        if ($[109] !== request.requesterEmail) {
            t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs text-[var(--text-secondary)]",
                children: request.requesterEmail
            }, void 0, false, {
                fileName: "[project]/src/components/board/request-detail-modal.tsx",
                lineNumber: 295,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            $[109] = request.requesterEmail;
            $[110] = t32;
        } else {
            t32 = $[110];
        }
        let t33;
        if ($[111] !== t31 || $[112] !== t32) {
            t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    t30,
                    t31,
                    t32
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/board/request-detail-modal.tsx",
                lineNumber: 303,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            $[111] = t31;
            $[112] = t32;
            $[113] = t33;
        } else {
            t33 = $[113];
        }
        let t34;
        if ($[114] !== request.teamLeadEmail || $[115] !== request.teamLeadName) {
            t34 = request.teamLeadName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs font-medium text-[var(--text-tertiary)]",
                        children: "Team Lead"
                    }, void 0, false, {
                        fileName: "[project]/src/components/board/request-detail-modal.tsx",
                        lineNumber: 312,
                        columnNumber: 42
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm font-medium text-[var(--text-primary)]",
                        children: request.teamLeadName
                    }, void 0, false, {
                        fileName: "[project]/src/components/board/request-detail-modal.tsx",
                        lineNumber: 312,
                        columnNumber: 124
                    }, ("TURBOPACK compile-time value", void 0)),
                    request.teamLeadEmail && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-[var(--text-secondary)]",
                        children: request.teamLeadEmail
                    }, void 0, false, {
                        fileName: "[project]/src/components/board/request-detail-modal.tsx",
                        lineNumber: 312,
                        columnNumber: 238
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/board/request-detail-modal.tsx",
                lineNumber: 312,
                columnNumber: 37
            }, ("TURBOPACK compile-time value", void 0));
            $[114] = request.teamLeadEmail;
            $[115] = request.teamLeadName;
            $[116] = t34;
        } else {
            t34 = $[116];
        }
        let t35;
        if ($[117] === Symbol.for("react.memo_cache_sentinel")) {
            t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-xs font-medium text-[var(--text-tertiary)]",
                children: "Created"
            }, void 0, false, {
                fileName: "[project]/src/components/board/request-detail-modal.tsx",
                lineNumber: 321,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            $[117] = t35;
        } else {
            t35 = $[117];
        }
        let t36;
        if ($[118] !== request.createdAt) {
            t36 = formatDate(request.createdAt);
            $[118] = request.createdAt;
            $[119] = t36;
        } else {
            t36 = $[119];
        }
        let t37;
        if ($[120] !== t36) {
            t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    t35,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-[var(--text-primary)]",
                        children: t36
                    }, void 0, false, {
                        fileName: "[project]/src/components/board/request-detail-modal.tsx",
                        lineNumber: 336,
                        columnNumber: 23
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/board/request-detail-modal.tsx",
                lineNumber: 336,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            $[120] = t36;
            $[121] = t37;
        } else {
            t37 = $[121];
        }
        let t38;
        if ($[122] !== request.assigneeName) {
            t38 = request.assigneeName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs font-medium text-[var(--text-tertiary)]",
                        children: "Assigned to"
                    }, void 0, false, {
                        fileName: "[project]/src/components/board/request-detail-modal.tsx",
                        lineNumber: 344,
                        columnNumber: 42
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm font-medium text-[var(--text-primary)]",
                        children: request.assigneeName
                    }, void 0, false, {
                        fileName: "[project]/src/components/board/request-detail-modal.tsx",
                        lineNumber: 344,
                        columnNumber: 126
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/board/request-detail-modal.tsx",
                lineNumber: 344,
                columnNumber: 37
            }, ("TURBOPACK compile-time value", void 0));
            $[122] = request.assigneeName;
            $[123] = t38;
        } else {
            t38 = $[123];
        }
        if ($[124] !== t33 || $[125] !== t34 || $[126] !== t37 || $[127] !== t38) {
            t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-5 grid grid-cols-2 gap-4",
                children: [
                    t33,
                    t34,
                    t37,
                    t38
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/board/request-detail-modal.tsx",
                lineNumber: 351,
                columnNumber: 12
            }, ("TURBOPACK compile-time value", void 0));
            $[124] = t33;
            $[125] = t34;
            $[126] = t37;
            $[127] = t38;
            $[128] = t6;
        } else {
            t6 = $[128];
        }
        if ($[129] !== request.referenceLinks) {
            t7 = request.referenceLinks.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "mb-2 flex items-center gap-1.5 text-sm font-semibold text-[var(--text-primary)]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "h-3.5 w-3.5",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/board/request-detail-modal.tsx",
                                    lineNumber: 361,
                                    columnNumber: 250
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/board/request-detail-modal.tsx",
                                lineNumber: 361,
                                columnNumber: 167
                            }, ("TURBOPACK compile-time value", void 0)),
                            "Reference Links"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/board/request-detail-modal.tsx",
                        lineNumber: 361,
                        columnNumber: 71
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-1.5",
                        children: request.referenceLinks.map(_temp10)
                    }, void 0, false, {
                        fileName: "[project]/src/components/board/request-detail-modal.tsx",
                        lineNumber: 361,
                        columnNumber: 480
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/board/request-detail-modal.tsx",
                lineNumber: 361,
                columnNumber: 49
            }, ("TURBOPACK compile-time value", void 0));
            $[129] = request.referenceLinks;
            $[130] = t7;
        } else {
            t7 = $[130];
        }
        let t39;
        if ($[131] === Symbol.for("react.memo_cache_sentinel")) {
            t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "mb-2 flex items-center gap-1.5 text-sm font-semibold text-[var(--text-primary)]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "h-3.5 w-3.5",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        }, void 0, false, {
                            fileName: "[project]/src/components/board/request-detail-modal.tsx",
                            lineNumber: 369,
                            columnNumber: 192
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/board/request-detail-modal.tsx",
                        lineNumber: 369,
                        columnNumber: 109
                    }, ("TURBOPACK compile-time value", void 0)),
                    "Final Link"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/board/request-detail-modal.tsx",
                lineNumber: 369,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            $[131] = t39;
        } else {
            t39 = $[131];
        }
        if ($[132] !== canEditFinalLink || $[133] !== finalLinkInput || $[134] !== handleSaveFinalLink || $[135] !== request.finalLink || $[136] !== request.id || $[137] !== updateRequest) {
            t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-5",
                children: [
                    t39,
                    request.finalLink ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: request.finalLink,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "block truncate text-sm text-[var(--primary)] transition-colors hover:text-[var(--primary-hover)]",
                                children: request.finalLink
                            }, void 0, false, {
                                fileName: "[project]/src/components/board/request-detail-modal.tsx",
                                lineNumber: 375,
                                columnNumber: 101
                            }, ("TURBOPACK compile-time value", void 0)),
                            canEditFinalLink && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>{
                                    setFinalLinkInput(request.finalLink || "");
                                    updateRequest(request.id, {
                                        finalLink: null
                                    });
                                },
                                className: "shrink-0 text-xs text-[var(--text-tertiary)] hover:text-[var(--error)] transition-colors",
                                "aria-label": "Remove final link",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "h-4 w-4",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    strokeWidth: "2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        d: "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/board/request-detail-modal.tsx",
                                        lineNumber: 380,
                                        columnNumber: 241
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/board/request-detail-modal.tsx",
                                    lineNumber: 380,
                                    columnNumber: 146
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/board/request-detail-modal.tsx",
                                lineNumber: 375,
                                columnNumber: 324
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/board/request-detail-modal.tsx",
                        lineNumber: 375,
                        columnNumber: 60
                    }, ("TURBOPACK compile-time value", void 0)) : canEditFinalLink ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                    placeholder: "Paste the final deliverable link...",
                                    value: finalLinkInput,
                                    onChange: (e)=>setFinalLinkInput(e.target.value),
                                    onKeyDown: (e_0)=>e_0.key === "Enter" && handleSaveFinalLink()
                                }, void 0, false, {
                                    fileName: "[project]/src/components/board/request-detail-modal.tsx",
                                    lineNumber: 380,
                                    columnNumber: 491
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/board/request-detail-modal.tsx",
                                lineNumber: 380,
                                columnNumber: 467
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                size: "sm",
                                variant: "secondary",
                                onClick: handleSaveFinalLink,
                                disabled: !finalLinkInput.trim(),
                                children: "Save"
                            }, void 0, false, {
                                fileName: "[project]/src/components/board/request-detail-modal.tsx",
                                lineNumber: 380,
                                columnNumber: 693
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/board/request-detail-modal.tsx",
                        lineNumber: 380,
                        columnNumber: 439
                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-[var(--text-tertiary)]",
                        children: "Not added yet"
                    }, void 0, false, {
                        fileName: "[project]/src/components/board/request-detail-modal.tsx",
                        lineNumber: 380,
                        columnNumber: 817
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/board/request-detail-modal.tsx",
                lineNumber: 375,
                columnNumber: 12
            }, ("TURBOPACK compile-time value", void 0));
            $[132] = canEditFinalLink;
            $[133] = finalLinkInput;
            $[134] = handleSaveFinalLink;
            $[135] = request.finalLink;
            $[136] = request.id;
            $[137] = updateRequest;
            $[138] = t8;
        } else {
            t8 = $[138];
        }
        if ($[139] === Symbol.for("react.memo_cache_sentinel")) {
            t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "my-4 border-t border-[var(--border)]"
            }, void 0, false, {
                fileName: "[project]/src/components/board/request-detail-modal.tsx",
                lineNumber: 392,
                columnNumber: 12
            }, ("TURBOPACK compile-time value", void 0));
            $[139] = t9;
        } else {
            t9 = $[139];
        }
        t10 = canAssign && request.status !== "closed" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-5",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "mb-2 text-sm font-semibold text-[var(--text-primary)]",
                    children: "Assign To"
                }, void 0, false, {
                    fileName: "[project]/src/components/board/request-detail-modal.tsx",
                    lineNumber: 397,
                    columnNumber: 77
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                            value: selectedAssignee,
                            onChange: (e_1)=>setSelectedAssignee(e_1.target.value),
                            className: "\n                  flex-1 border border-[var(--border)] bg-[var(--surface)]\n                  rounded-[var(--radius-md)] px-3 py-2 text-sm text-[var(--text-primary)]\n                  outline-none transition-all duration-[var(--transition-fast)]\n                  hover:border-[var(--border-hover)]\n                  focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/10\n                ",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "",
                                    children: "Unassigned"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/board/request-detail-modal.tsx",
                                    lineNumber: 397,
                                    columnNumber: 706
                                }, ("TURBOPACK compile-time value", void 0)),
                                editors.map(_temp11)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/board/request-detail-modal.tsx",
                            lineNumber: 397,
                            columnNumber: 189
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            size: "sm",
                            variant: "secondary",
                            onClick: handleAssign,
                            disabled: !selectedAssignee,
                            children: "Assign"
                        }, void 0, false, {
                            fileName: "[project]/src/components/board/request-detail-modal.tsx",
                            lineNumber: 397,
                            columnNumber: 773
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/board/request-detail-modal.tsx",
                    lineNumber: 397,
                    columnNumber: 161
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/request-detail-modal.tsx",
            lineNumber: 397,
            columnNumber: 55
        }, ("TURBOPACK compile-time value", void 0));
        $[4] = addComment;
        $[5] = assignRequest;
        $[6] = deleteReason;
        $[7] = deleteRequest;
        $[8] = finalLinkInput;
        $[9] = members;
        $[10] = moveForward;
        $[11] = newComment;
        $[12] = onClose;
        $[13] = open;
        $[14] = priorityCfg.color;
        $[15] = priorityCfg.label;
        $[16] = request.assigneeId;
        $[17] = request.assigneeName;
        $[18] = request.createdAt;
        $[19] = request.description;
        $[20] = request.finalLink;
        $[21] = request.id;
        $[22] = request.priority;
        $[23] = request.referenceLinks;
        $[24] = request.requesterEmail;
        $[25] = request.requesterName;
        $[26] = request.status;
        $[27] = request.teamLeadEmail;
        $[28] = request.teamLeadName;
        $[29] = request.title;
        $[30] = request.type;
        $[31] = selectedAssignee;
        $[32] = typeIcon;
        $[33] = updateRequest;
        $[34] = user.id;
        $[35] = user.name;
        $[36] = user.role;
        $[37] = T0;
        $[38] = canDelete;
        $[39] = canMoveForward;
        $[40] = handleAddComment;
        $[41] = handleDeleteConfirm;
        $[42] = handleMoveForward;
        $[43] = nextStatus;
        $[44] = t10;
        $[45] = t11;
        $[46] = t12;
        $[47] = t13;
        $[48] = t2;
        $[49] = t3;
        $[50] = t4;
        $[51] = t5;
        $[52] = t6;
        $[53] = t7;
        $[54] = t8;
        $[55] = t9;
    } else {
        T0 = $[37];
        canDelete = $[38];
        canMoveForward = $[39];
        handleAddComment = $[40];
        handleDeleteConfirm = $[41];
        handleMoveForward = $[42];
        nextStatus = $[43];
        t10 = $[44];
        t11 = $[45];
        t12 = $[46];
        t13 = $[47];
        t2 = $[48];
        t3 = $[49];
        t4 = $[50];
        t5 = $[51];
        t6 = $[52];
        t7 = $[53];
        t8 = $[54];
        t9 = $[55];
    }
    let t14;
    if ($[140] !== canMoveForward || $[141] !== handleMoveForward || $[142] !== nextStatus) {
        t14 = canMoveForward && nextStatus && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-5",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    onClick: handleMoveForward,
                    children: [
                        "Move Forward",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "h-4 w-4",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M13 7l5 5m0 0l-5 5m5-5H6"
                            }, void 0, false, {
                                fileName: "[project]/src/components/board/request-detail-modal.tsx",
                                lineNumber: 473,
                                columnNumber: 192
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/board/request-detail-modal.tsx",
                            lineNumber: 473,
                            columnNumber: 113
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/board/request-detail-modal.tsx",
                    lineNumber: 473,
                    columnNumber: 65
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "ml-2 text-xs text-[var(--text-tertiary)]",
                    children: [
                        "to ",
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["REQUEST_STATUS_LABELS"][nextStatus]
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/board/request-detail-modal.tsx",
                    lineNumber: 473,
                    columnNumber: 305
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/request-detail-modal.tsx",
            lineNumber: 473,
            columnNumber: 43
        }, ("TURBOPACK compile-time value", void 0));
        $[140] = canMoveForward;
        $[141] = handleMoveForward;
        $[142] = nextStatus;
        $[143] = t14;
    } else {
        t14 = $[143];
    }
    let t15;
    if ($[144] !== request.deletedAt || $[145] !== request.deletedByName || $[146] !== request.deletionReason || $[147] !== request.status) {
        t15 = request.status === "deleted" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-5 rounded-[var(--radius-md)] border border-red-200 bg-red-50 p-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "mb-1 text-sm font-semibold text-red-700",
                    children: "This request has been deleted"
                }, void 0, false, {
                    fileName: "[project]/src/components/board/request-detail-modal.tsx",
                    lineNumber: 483,
                    columnNumber: 128
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-red-600",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-medium",
                            children: "By:"
                        }, void 0, false, {
                            fileName: "[project]/src/components/board/request-detail-modal.tsx",
                            lineNumber: 483,
                            columnNumber: 254
                        }, ("TURBOPACK compile-time value", void 0)),
                        " ",
                        request.deletedByName
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/board/request-detail-modal.tsx",
                    lineNumber: 483,
                    columnNumber: 218
                }, ("TURBOPACK compile-time value", void 0)),
                request.deletedAt && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-red-600",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-medium",
                            children: "On:"
                        }, void 0, false, {
                            fileName: "[project]/src/components/board/request-detail-modal.tsx",
                            lineNumber: 483,
                            columnNumber: 380
                        }, ("TURBOPACK compile-time value", void 0)),
                        " ",
                        formatDate(request.deletedAt)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/board/request-detail-modal.tsx",
                    lineNumber: 483,
                    columnNumber: 344
                }, ("TURBOPACK compile-time value", void 0)),
                request.deletionReason && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-1 text-sm text-red-600",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-medium",
                            children: "Reason:"
                        }, void 0, false, {
                            fileName: "[project]/src/components/board/request-detail-modal.tsx",
                            lineNumber: 483,
                            columnNumber: 525
                        }, ("TURBOPACK compile-time value", void 0)),
                        " ",
                        request.deletionReason
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/board/request-detail-modal.tsx",
                    lineNumber: 483,
                    columnNumber: 484
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/request-detail-modal.tsx",
            lineNumber: 483,
            columnNumber: 43
        }, ("TURBOPACK compile-time value", void 0));
        $[144] = request.deletedAt;
        $[145] = request.deletedByName;
        $[146] = request.deletionReason;
        $[147] = request.status;
        $[148] = t15;
    } else {
        t15 = $[148];
    }
    let t16;
    if ($[149] !== canDelete || $[150] !== deleteReason || $[151] !== handleDeleteConfirm || $[152] !== request.status || $[153] !== showDeleteConfirm) {
        t16 = canDelete && request.status !== "deleted" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-5",
            children: !showDeleteConfirm ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                variant: "danger",
                size: "sm",
                onClick: ()=>setShowDeleteConfirm(true),
                children: "Delete Request"
            }, void 0, false, {
                fileName: "[project]/src/components/board/request-detail-modal.tsx",
                lineNumber: 494,
                columnNumber: 100
            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-[var(--radius-md)] border border-red-200 bg-red-50 p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "mb-2 text-sm font-semibold text-red-700",
                        children: "Confirm Deletion"
                    }, void 0, false, {
                        fileName: "[project]/src/components/board/request-detail-modal.tsx",
                        lineNumber: 494,
                        columnNumber: 284
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mb-3 text-xs text-red-600",
                        children: "This request will be marked as deleted. Please provide a reason."
                    }, void 0, false, {
                        fileName: "[project]/src/components/board/request-detail-modal.tsx",
                        lineNumber: 494,
                        columnNumber: 361
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        value: deleteReason,
                        onChange: (e_2)=>setDeleteReason(e_2.target.value),
                        placeholder: "Reason for deletion...",
                        rows: 3,
                        className: "\n                    mb-3 w-full border border-red-200 bg-white\n                    rounded-[var(--radius-md)] px-3 py-2 text-sm text-[var(--text-primary)]\n                    placeholder-[var(--text-tertiary)] outline-none transition-all\n                    focus:border-red-400 focus:ring-2 focus:ring-red-100\n                  "
                    }, void 0, false, {
                        fileName: "[project]/src/components/board/request-detail-modal.tsx",
                        lineNumber: 494,
                        columnNumber: 470
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "danger",
                                size: "sm",
                                onClick: handleDeleteConfirm,
                                disabled: !deleteReason.trim(),
                                children: "Confirm Delete"
                            }, void 0, false, {
                                fileName: "[project]/src/components/board/request-detail-modal.tsx",
                                lineNumber: 494,
                                columnNumber: 979
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "secondary",
                                size: "sm",
                                onClick: ()=>{
                                    setShowDeleteConfirm(false);
                                    setDeleteReason("");
                                },
                                children: "Cancel"
                            }, void 0, false, {
                                fileName: "[project]/src/components/board/request-detail-modal.tsx",
                                lineNumber: 494,
                                columnNumber: 1099
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/board/request-detail-modal.tsx",
                        lineNumber: 494,
                        columnNumber: 951
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/board/request-detail-modal.tsx",
                lineNumber: 494,
                columnNumber: 204
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/board/request-detail-modal.tsx",
            lineNumber: 494,
            columnNumber: 56
        }, ("TURBOPACK compile-time value", void 0));
        $[149] = canDelete;
        $[150] = deleteReason;
        $[151] = handleDeleteConfirm;
        $[152] = request.status;
        $[153] = showDeleteConfirm;
        $[154] = t16;
    } else {
        t16 = $[154];
    }
    let t17;
    if ($[155] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "my-4 border-t border-[var(--border)]"
        }, void 0, false, {
            fileName: "[project]/src/components/board/request-detail-modal.tsx",
            lineNumber: 509,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[155] = t17;
    } else {
        t17 = $[155];
    }
    let t18;
    if ($[156] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "h-3.5 w-3.5",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            }, void 0, false, {
                fileName: "[project]/src/components/board/request-detail-modal.tsx",
                lineNumber: 516,
                columnNumber: 94
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/board/request-detail-modal.tsx",
            lineNumber: 516,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[156] = t18;
    } else {
        t18 = $[156];
    }
    let t19;
    if ($[157] !== request.comments.length) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "mb-3 flex items-center gap-1.5 text-sm font-semibold text-[var(--text-primary)]",
            children: [
                t18,
                "Comments (",
                request.comments.length,
                ")"
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/request-detail-modal.tsx",
            lineNumber: 523,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[157] = request.comments.length;
        $[158] = t19;
    } else {
        t19 = $[158];
    }
    let t20;
    if ($[159] !== request.comments) {
        t20 = request.comments.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-4 space-y-3",
            children: request.comments.map(_temp12)
        }, void 0, false, {
            fileName: "[project]/src/components/board/request-detail-modal.tsx",
            lineNumber: 531,
            columnNumber: 42
        }, ("TURBOPACK compile-time value", void 0));
        $[159] = request.comments;
        $[160] = t20;
    } else {
        t20 = $[160];
    }
    let t21;
    if ($[161] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = (e_3)=>setNewComment(e_3.target.value);
        $[161] = t21;
    } else {
        t21 = $[161];
    }
    let t22;
    if ($[162] !== handleAddComment) {
        t22 = (e_4)=>e_4.key === "Enter" && handleAddComment();
        $[162] = handleAddComment;
        $[163] = t22;
    } else {
        t22 = $[163];
    }
    let t23;
    if ($[164] !== newComment || $[165] !== t22) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "text",
            value: newComment,
            onChange: t21,
            onKeyDown: t22,
            placeholder: "Add a comment...",
            className: "\n                flex-1 border border-[var(--border)] bg-[var(--surface)]\n                rounded-[var(--radius-md)] px-3 py-2 text-sm text-[var(--text-primary)]\n                placeholder-[var(--text-tertiary)] outline-none transition-all\n                hover:border-[var(--border-hover)]\n                focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/10\n              "
        }, void 0, false, {
            fileName: "[project]/src/components/board/request-detail-modal.tsx",
            lineNumber: 554,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[164] = newComment;
        $[165] = t22;
        $[166] = t23;
    } else {
        t23 = $[166];
    }
    let t24;
    if ($[167] !== newComment) {
        t24 = newComment.trim();
        $[167] = newComment;
        $[168] = t24;
    } else {
        t24 = $[168];
    }
    const t25 = !t24;
    let t26;
    if ($[169] !== handleAddComment || $[170] !== t25) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            size: "sm",
            variant: "secondary",
            onClick: handleAddComment,
            disabled: t25,
            children: "Send"
        }, void 0, false, {
            fileName: "[project]/src/components/board/request-detail-modal.tsx",
            lineNumber: 572,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[169] = handleAddComment;
        $[170] = t25;
        $[171] = t26;
    } else {
        t26 = $[171];
    }
    let t27;
    if ($[172] !== t23 || $[173] !== t26) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex gap-2",
            children: [
                t23,
                t26
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/request-detail-modal.tsx",
            lineNumber: 581,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[172] = t23;
        $[173] = t26;
        $[174] = t27;
    } else {
        t27 = $[174];
    }
    let t28;
    if ($[175] !== t19 || $[176] !== t20 || $[177] !== t27) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t19,
                t20,
                t27
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/request-detail-modal.tsx",
            lineNumber: 590,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[175] = t19;
        $[176] = t20;
        $[177] = t27;
        $[178] = t28;
    } else {
        t28 = $[178];
    }
    let t29;
    if ($[179] !== t10 || $[180] !== t14 || $[181] !== t15 || $[182] !== t16 || $[183] !== t2 || $[184] !== t28 || $[185] !== t3 || $[186] !== t4 || $[187] !== t5 || $[188] !== t6 || $[189] !== t7 || $[190] !== t8 || $[191] !== t9) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t2,
            children: [
                t3,
                t4,
                t5,
                t6,
                t7,
                t8,
                t9,
                t10,
                t14,
                t15,
                t16,
                t17,
                t28
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/request-detail-modal.tsx",
            lineNumber: 600,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[179] = t10;
        $[180] = t14;
        $[181] = t15;
        $[182] = t16;
        $[183] = t2;
        $[184] = t28;
        $[185] = t3;
        $[186] = t4;
        $[187] = t5;
        $[188] = t6;
        $[189] = t7;
        $[190] = t8;
        $[191] = t9;
        $[192] = t29;
    } else {
        t29 = $[192];
    }
    let t30;
    if ($[193] !== T0 || $[194] !== t11 || $[195] !== t12 || $[196] !== t13 || $[197] !== t29) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(T0, {
            open: t11,
            onClose: t12,
            maxWidth: t13,
            children: t29
        }, void 0, false, {
            fileName: "[project]/src/components/board/request-detail-modal.tsx",
            lineNumber: 620,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[193] = T0;
        $[194] = t11;
        $[195] = t12;
        $[196] = t13;
        $[197] = t29;
        $[198] = t30;
    } else {
        t30 = $[198];
    }
    return t30;
};
_s(RequestDetailModal, "YjOeY3XMb9JU7VJuQOk/8TS0EVg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$auth$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$request$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRequestStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$request$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRequestStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$request$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRequestStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$request$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRequestStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$request$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRequestStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$request$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRequestStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$team$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTeamStore"]
    ];
});
_c = RequestDetailModal;
function _temp(s) {
    return s.user;
}
function _temp2(s_0) {
    return s_0.requests;
}
function _temp3(s_1) {
    return s_1.moveForward;
}
function _temp4(s_2) {
    return s_2.assignRequest;
}
function _temp5(s_3) {
    return s_3.updateRequest;
}
function _temp6(s_4) {
    return s_4.addComment;
}
function _temp7(s_5) {
    return s_5.deleteRequest;
}
function _temp8(s_6) {
    return s_6.members;
}
function _temp9(m) {
    return m.role === "editor" || m.role === "admin";
}
function _temp10(link_0, i) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        href: link_0,
        target: "_blank",
        rel: "noopener noreferrer",
        className: "block truncate text-sm text-[var(--primary)] transition-colors hover:text-[var(--primary-hover)]",
        children: link_0
    }, i, false, {
        fileName: "[project]/src/components/board/request-detail-modal.tsx",
        lineNumber: 660,
        columnNumber: 10
    }, this);
}
function _temp11(m_1) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
        value: m_1.id,
        children: m_1.name
    }, m_1.id, false, {
        fileName: "[project]/src/components/board/request-detail-modal.tsx",
        lineNumber: 663,
        columnNumber: 10
    }, this);
}
function _temp12(c) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-[var(--radius-md)] bg-[var(--surface-secondary)] p-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-1 flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs font-medium text-[var(--text-primary)]",
                        children: c.authorName
                    }, void 0, false, {
                        fileName: "[project]/src/components/board/request-detail-modal.tsx",
                        lineNumber: 666,
                        columnNumber: 155
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs text-[var(--text-tertiary)]",
                        children: formatDate(c.createdAt)
                    }, void 0, false, {
                        fileName: "[project]/src/components/board/request-detail-modal.tsx",
                        lineNumber: 666,
                        columnNumber: 241
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/board/request-detail-modal.tsx",
                lineNumber: 666,
                columnNumber: 99
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-[var(--text-secondary)]",
                children: c.content
            }, void 0, false, {
                fileName: "[project]/src/components/board/request-detail-modal.tsx",
                lineNumber: 666,
                columnNumber: 333
            }, this)
        ]
    }, c.id, true, {
        fileName: "[project]/src/components/board/request-detail-modal.tsx",
        lineNumber: 666,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "RequestDetailModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/textarea.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Textarea",
    ()=>Textarea
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
const Textarea = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ label, error, className = '', id, ...props }, ref)=>{
    const textareaId = id || label?.toLowerCase().replace(/\s+/g, '-');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                htmlFor: textareaId,
                className: "mb-1.5 block text-sm font-medium text-[var(--text-primary)]",
                children: label
            }, void 0, false, {
                fileName: "[project]/src/components/ui/textarea.tsx",
                lineNumber: 15,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                ref: ref,
                id: textareaId,
                className: `
            w-full border border-[var(--border)] bg-[var(--surface)]
            rounded-[var(--radius-md)] px-3.5 py-2 text-sm text-[var(--text-primary)]
            placeholder-[var(--text-tertiary)] outline-none
            transition-all duration-[var(--transition-fast)]
            resize-y min-h-[80px]
            hover:border-[var(--border-hover)]
            focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/10
            ${error ? 'border-[var(--error)] focus:ring-[var(--error)]/10' : ''}
            ${className}
          `,
                "aria-invalid": error ? 'true' : undefined,
                ...props
            }, void 0, false, {
                fileName: "[project]/src/components/ui/textarea.tsx",
                lineNumber: 22,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-1.5 text-xs text-[var(--error)]",
                role: "alert",
                children: error
            }, void 0, false, {
                fileName: "[project]/src/components/ui/textarea.tsx",
                lineNumber: 40,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/textarea.tsx",
        lineNumber: 13,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Textarea;
Textarea.displayName = 'Textarea';
var _c, _c1;
__turbopack_context__.k.register(_c, "Textarea$forwardRef");
__turbopack_context__.k.register(_c1, "Textarea");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/board/new-request-modal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NewRequestModal",
    ()=>NewRequestModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/types/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/modal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/textarea.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/select.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$request$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/request-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$auth$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/auth-store.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
const TYPE_CARDS = [
    {
        value: 'design_graphics',
        label: 'Design / Graphics',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "h-6 w-6",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "1.5",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-1 0-.83.67-1.5 1.5-1.5H16c3.31 0 6-2.69 6-6 0-4.96-4.48-9-10-9z",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/src/components/board/new-request-modal.tsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "7.5",
                    cy: "11.5",
                    r: "1.5",
                    fill: "currentColor",
                    stroke: "none"
                }, void 0, false, {
                    fileName: "[project]/src/components/board/new-request-modal.tsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "10.5",
                    cy: "7.5",
                    r: "1.5",
                    fill: "currentColor",
                    stroke: "none"
                }, void 0, false, {
                    fileName: "[project]/src/components/board/new-request-modal.tsx",
                    lineNumber: 24,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "15",
                    cy: "7.5",
                    r: "1.5",
                    fill: "currentColor",
                    stroke: "none"
                }, void 0, false, {
                    fileName: "[project]/src/components/board/new-request-modal.tsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/new-request-modal.tsx",
            lineNumber: 21,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        value: 'video',
        label: 'Video',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "h-6 w-6",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "1.5",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/board/new-request-modal.tsx",
                lineNumber: 31,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/board/new-request-modal.tsx",
            lineNumber: 30,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        value: 'ui_ux',
        label: 'UI/UX',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "h-6 w-6",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "1.5",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "2",
                    y: "3",
                    width: "20",
                    height: "18",
                    rx: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/src/components/board/new-request-modal.tsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M2 7h20M7 7v14",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/src/components/board/new-request-modal.tsx",
                    lineNumber: 38,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/new-request-modal.tsx",
            lineNumber: 36,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }
];
const NewRequestModal = (t0)=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(71);
    if ($[0] !== "b392cc512e3933fa3d4eb3faf7f15b4e6c0f7712c74d630f43b4a76ddb853190") {
        for(let $i = 0; $i < 71; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "b392cc512e3933fa3d4eb3faf7f15b4e6c0f7712c74d630f43b4a76ddb853190";
    }
    const { open, onClose } = t0;
    const user = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$auth$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"])(_temp);
    const addRequest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$request$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRequestStore"])(_temp2);
    const [title, setTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [description, setDescription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [type, setType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("design_graphics");
    const [priority, setPriority] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("medium");
    const [totalItems, setTotalItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [dueDate, setDueDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = [
            ""
        ];
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const [refLinks, setRefLinks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    if (!user) {
        return null;
    }
    let t2;
    if ($[2] !== onClose) {
        t2 = ()=>{
            setTitle("");
            setDescription("");
            setType("design_graphics");
            setPriority("medium");
            setTotalItems(0);
            setDueDate("");
            setRefLinks([
                ""
            ]);
            onClose();
        };
        $[2] = onClose;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const resetAndClose = t2;
    let t3;
    if ($[4] !== addRequest || $[5] !== description || $[6] !== dueDate || $[7] !== priority || $[8] !== refLinks || $[9] !== resetAndClose || $[10] !== title || $[11] !== totalItems || $[12] !== type || $[13] !== user) {
        t3 = (e)=>{
            e.preventDefault();
            if (!title.trim()) {
                return;
            }
            const newRequest = {
                id: `r_${Date.now()}`,
                title: title.trim(),
                description: description.trim(),
                type,
                priority,
                status: "open",
                totalItems,
                dueDate: dueDate || null,
                requesterId: user.id,
                requesterName: user.name,
                requesterEmail: user.email,
                assigneeId: null,
                assigneeName: null,
                teamLeadId: null,
                teamLeadName: null,
                teamLeadEmail: null,
                referenceLinks: refLinks.map(_temp3).filter(Boolean),
                finalLink: null,
                comments: [],
                createdAt: new Date().toISOString(),
                deletedById: null,
                deletedByName: null,
                deletedAt: null,
                deletionReason: null
            };
            addRequest(newRequest);
            resetAndClose();
        };
        $[4] = addRequest;
        $[5] = description;
        $[6] = dueDate;
        $[7] = priority;
        $[8] = refLinks;
        $[9] = resetAndClose;
        $[10] = title;
        $[11] = totalItems;
        $[12] = type;
        $[13] = user;
        $[14] = t3;
    } else {
        t3 = $[14];
    }
    const handleSubmit = t3;
    let t4;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = (index, value)=>{
            setRefLinks((prev)=>prev.map((l_0, i)=>i === index ? value : l_0));
        };
        $[15] = t4;
    } else {
        t4 = $[15];
    }
    const handleLinkChange = t4;
    let t5;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = ()=>setRefLinks(_temp4);
        $[16] = t5;
    } else {
        t5 = $[16];
    }
    const addLink = t5;
    let t6;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = (index_0)=>{
            setRefLinks((prev_1)=>prev_1.filter((_, i_0)=>i_0 !== index_0));
        };
        $[17] = t6;
    } else {
        t6 = $[17];
    }
    const removeLink = t6;
    let t7;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["REQUEST_PRIORITIES"].map(_temp5);
        $[18] = t7;
    } else {
        t7 = $[18];
    }
    const priorityOptions = t7;
    let t8;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "mb-6 text-2xl font-bold text-[var(--text-primary)]",
            children: "New Creative Request"
        }, void 0, false, {
            fileName: "[project]/src/components/board/new-request-modal.tsx",
            lineNumber: 183,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[19] = t8;
    } else {
        t8 = $[19];
    }
    let t9;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            htmlFor: "req-title",
            className: "mb-1.5 block text-sm font-semibold text-[var(--text-primary)]",
            children: "Request Title"
        }, void 0, false, {
            fileName: "[project]/src/components/board/new-request-modal.tsx",
            lineNumber: 190,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[20] = t9;
    } else {
        t9 = $[20];
    }
    let t10;
    if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = (e_0)=>setTitle(e_0.target.value);
        $[21] = t10;
    } else {
        t10 = $[21];
    }
    let t11;
    if ($[22] !== title) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t9,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                    id: "req-title",
                    placeholder: "Brief title for your request",
                    value: title,
                    onChange: t10,
                    required: true,
                    autoFocus: true
                }, void 0, false, {
                    fileName: "[project]/src/components/board/new-request-modal.tsx",
                    lineNumber: 204,
                    columnNumber: 20
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/new-request-modal.tsx",
            lineNumber: 204,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[22] = title;
        $[23] = t11;
    } else {
        t11 = $[23];
    }
    let t12;
    if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            htmlFor: "req-desc",
            className: "mb-1.5 block text-sm font-semibold text-[var(--text-primary)]",
            children: "Description"
        }, void 0, false, {
            fileName: "[project]/src/components/board/new-request-modal.tsx",
            lineNumber: 212,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[24] = t12;
    } else {
        t12 = $[24];
    }
    let t13;
    if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = (e_1)=>setDescription(e_1.target.value);
        $[25] = t13;
    } else {
        t13 = $[25];
    }
    let t14;
    if ($[26] !== description) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t12,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Textarea"], {
                    id: "req-desc",
                    placeholder: "Describe what you need in detail...",
                    value: description,
                    onChange: t13,
                    rows: 4
                }, void 0, false, {
                    fileName: "[project]/src/components/board/new-request-modal.tsx",
                    lineNumber: 226,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/new-request-modal.tsx",
            lineNumber: 226,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[26] = description;
        $[27] = t14;
    } else {
        t14 = $[27];
    }
    let t15;
    if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "mb-3 block text-sm font-semibold text-[var(--text-primary)]",
            children: "Request Type"
        }, void 0, false, {
            fileName: "[project]/src/components/board/new-request-modal.tsx",
            lineNumber: 234,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[28] = t15;
    } else {
        t15 = $[28];
    }
    let t16;
    if ($[29] !== type) {
        t16 = TYPE_CARDS.map((card)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: ()=>setType(card.value),
                className: `
                  flex flex-col items-center gap-2 rounded-[var(--radius-md)] border-2 px-4 py-5
                  transition-all duration-[var(--transition-fast)] cursor-pointer
                  ${type === card.value ? "border-[var(--text-primary)] bg-[var(--surface-active)]" : "border-[var(--border)] hover:border-[var(--border-hover)]"}
                `,
                "aria-pressed": type === card.value,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[var(--text-primary)]",
                        children: card.icon
                    }, void 0, false, {
                        fileName: "[project]/src/components/board/new-request-modal.tsx",
                        lineNumber: 245,
                        columnNumber: 55
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm font-medium text-[var(--text-primary)]",
                        children: card.label
                    }, void 0, false, {
                        fileName: "[project]/src/components/board/new-request-modal.tsx",
                        lineNumber: 245,
                        columnNumber: 118
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, card.value, true, {
                fileName: "[project]/src/components/board/new-request-modal.tsx",
                lineNumber: 241,
                columnNumber: 34
            }, ("TURBOPACK compile-time value", void 0)));
        $[29] = type;
        $[30] = t16;
    } else {
        t16 = $[30];
    }
    let t17;
    if ($[31] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t15,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-4 gap-3",
                    children: t16
                }, void 0, false, {
                    fileName: "[project]/src/components/board/new-request-modal.tsx",
                    lineNumber: 253,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/new-request-modal.tsx",
            lineNumber: 253,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[31] = t16;
        $[32] = t17;
    } else {
        t17 = $[32];
    }
    let t18;
    if ($[33] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            htmlFor: "req-priority",
            className: "mb-1.5 block text-sm font-semibold text-[var(--text-primary)]",
            children: "Priority"
        }, void 0, false, {
            fileName: "[project]/src/components/board/new-request-modal.tsx",
            lineNumber: 261,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[33] = t18;
    } else {
        t18 = $[33];
    }
    let t19;
    if ($[34] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = (e_2)=>setPriority(e_2.target.value);
        $[34] = t19;
    } else {
        t19 = $[34];
    }
    let t20;
    if ($[35] !== priority) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t18,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                    id: "req-priority",
                    options: priorityOptions,
                    value: priority,
                    onChange: t19
                }, void 0, false, {
                    fileName: "[project]/src/components/board/new-request-modal.tsx",
                    lineNumber: 275,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/new-request-modal.tsx",
            lineNumber: 275,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[35] = priority;
        $[36] = t20;
    } else {
        t20 = $[36];
    }
    let t21;
    if ($[37] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            htmlFor: "req-total-items",
            className: "mb-1.5 block text-sm font-semibold text-[var(--text-primary)]",
            children: "Total Items to Deliver"
        }, void 0, false, {
            fileName: "[project]/src/components/board/new-request-modal.tsx",
            lineNumber: 283,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[37] = t21;
    } else {
        t21 = $[37];
    }
    let t22;
    if ($[38] === Symbol.for("react.memo_cache_sentinel")) {
        t22 = (e_3)=>setTotalItems(Number(e_3.target.value));
        $[38] = t22;
    } else {
        t22 = $[38];
    }
    let t23;
    if ($[39] !== totalItems) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t21,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                    id: "req-total-items",
                    type: "number",
                    min: 0,
                    value: totalItems,
                    onChange: t22
                }, void 0, false, {
                    fileName: "[project]/src/components/board/new-request-modal.tsx",
                    lineNumber: 297,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/new-request-modal.tsx",
            lineNumber: 297,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[39] = totalItems;
        $[40] = t23;
    } else {
        t23 = $[40];
    }
    let t24;
    if ($[41] === Symbol.for("react.memo_cache_sentinel")) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            htmlFor: "req-due-date",
            className: "mb-1.5 block text-sm font-semibold text-[var(--text-primary)]",
            children: "Due Date (Optional)"
        }, void 0, false, {
            fileName: "[project]/src/components/board/new-request-modal.tsx",
            lineNumber: 305,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[41] = t24;
    } else {
        t24 = $[41];
    }
    let t25;
    if ($[42] === Symbol.for("react.memo_cache_sentinel")) {
        t25 = (e_4)=>setDueDate(e_4.target.value);
        $[42] = t25;
    } else {
        t25 = $[42];
    }
    let t26;
    if ($[43] !== dueDate) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t24,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                    id: "req-due-date",
                    type: "date",
                    value: dueDate,
                    onChange: t25
                }, void 0, false, {
                    fileName: "[project]/src/components/board/new-request-modal.tsx",
                    lineNumber: 319,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/new-request-modal.tsx",
            lineNumber: 319,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[43] = dueDate;
        $[44] = t26;
    } else {
        t26 = $[44];
    }
    let t27;
    if ($[45] !== t20 || $[46] !== t23 || $[47] !== t26) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-3 gap-4",
            children: [
                t20,
                t23,
                t26
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/new-request-modal.tsx",
            lineNumber: 327,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[45] = t20;
        $[46] = t23;
        $[47] = t26;
        $[48] = t27;
    } else {
        t27 = $[48];
    }
    let t28;
    if ($[49] === Symbol.for("react.memo_cache_sentinel")) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "mb-1.5 block text-sm font-semibold text-[var(--text-primary)]",
            children: "Reference Links (Optional)"
        }, void 0, false, {
            fileName: "[project]/src/components/board/new-request-modal.tsx",
            lineNumber: 337,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[49] = t28;
    } else {
        t28 = $[49];
    }
    let t29;
    if ($[50] !== refLinks) {
        let t30;
        if ($[52] !== refLinks.length) {
            t30 = (link, index_1)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                placeholder: "https://example.com/reference",
                                value: link,
                                onChange: (e_5)=>handleLinkChange(index_1, e_5.target.value)
                            }, void 0, false, {
                                fileName: "[project]/src/components/board/new-request-modal.tsx",
                                lineNumber: 346,
                                columnNumber: 98
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/board/new-request-modal.tsx",
                            lineNumber: 346,
                            columnNumber: 74
                        }, ("TURBOPACK compile-time value", void 0)),
                        refLinks.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>removeLink(index_1),
                            className: "\n                      flex h-[38px] w-[38px] shrink-0 items-center justify-center\n                      rounded-[var(--radius-md)] border border-[var(--border)]\n                      text-[var(--text-tertiary)] transition-colors\n                      hover:border-[var(--error)] hover:text-[var(--error)]\n                    ",
                            "aria-label": "Remove link",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "h-4 w-4",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                strokeWidth: "2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    d: "M6 18L18 6M6 6l12 12"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/board/new-request-modal.tsx",
                                    lineNumber: 346,
                                    columnNumber: 780
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/board/new-request-modal.tsx",
                                lineNumber: 346,
                                columnNumber: 685
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/board/new-request-modal.tsx",
                            lineNumber: 346,
                            columnNumber: 256
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, index_1, true, {
                    fileName: "[project]/src/components/board/new-request-modal.tsx",
                    lineNumber: 346,
                    columnNumber: 32
                }, ("TURBOPACK compile-time value", void 0));
            $[52] = refLinks.length;
            $[53] = t30;
        } else {
            t30 = $[53];
        }
        t29 = refLinks.map(t30);
        $[50] = refLinks;
        $[51] = t29;
    } else {
        t29 = $[51];
    }
    let t30;
    if ($[54] !== t29) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-2",
            children: t29
        }, void 0, false, {
            fileName: "[project]/src/components/board/new-request-modal.tsx",
            lineNumber: 360,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[54] = t29;
        $[55] = t30;
    } else {
        t30 = $[55];
    }
    let t31;
    if ($[56] === Symbol.for("react.memo_cache_sentinel")) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: addLink,
            className: "\n              mt-2 inline-flex items-center gap-1 rounded-[var(--radius-md)]\n              border border-[var(--border)] px-3 py-1.5 text-sm font-medium\n              text-[var(--text-secondary)] transition-colors\n              hover:bg-[var(--surface-hover)]\n            ",
            children: "+ Add Link"
        }, void 0, false, {
            fileName: "[project]/src/components/board/new-request-modal.tsx",
            lineNumber: 368,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[56] = t31;
    } else {
        t31 = $[56];
    }
    let t32;
    if ($[57] !== t30) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t28,
                t30,
                t31
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/new-request-modal.tsx",
            lineNumber: 375,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[57] = t30;
        $[58] = t32;
    } else {
        t32 = $[58];
    }
    let t33;
    if ($[59] === Symbol.for("react.memo_cache_sentinel")) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            type: "submit",
            fullWidth: true,
            className: "!bg-[var(--text-primary)] !text-[var(--surface)] hover:!opacity-90 !py-3 !text-base !font-semibold",
            children: "Submit Request"
        }, void 0, false, {
            fileName: "[project]/src/components/board/new-request-modal.tsx",
            lineNumber: 383,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[59] = t33;
    } else {
        t33 = $[59];
    }
    let t34;
    if ($[60] !== handleSubmit || $[61] !== t11 || $[62] !== t14 || $[63] !== t17 || $[64] !== t27 || $[65] !== t32) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: handleSubmit,
            className: "space-y-6",
            children: [
                t11,
                t14,
                t17,
                t27,
                t32,
                t33
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/new-request-modal.tsx",
            lineNumber: 390,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[60] = handleSubmit;
        $[61] = t11;
        $[62] = t14;
        $[63] = t17;
        $[64] = t27;
        $[65] = t32;
        $[66] = t34;
    } else {
        t34 = $[66];
    }
    let t35;
    if ($[67] !== open || $[68] !== resetAndClose || $[69] !== t34) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
            open: open,
            onClose: resetAndClose,
            maxWidth: "xl",
            children: [
                t8,
                t34
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/new-request-modal.tsx",
            lineNumber: 403,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[67] = open;
        $[68] = resetAndClose;
        $[69] = t34;
        $[70] = t35;
    } else {
        t35 = $[70];
    }
    return t35;
};
_s(NewRequestModal, "UE2qTdLJLi1oIVjOCbo6JCibRvA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$auth$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$request$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRequestStore"]
    ];
});
_c = NewRequestModal;
function _temp(s) {
    return s.user;
}
function _temp2(s_0) {
    return s_0.addRequest;
}
function _temp3(l) {
    return l.trim();
}
function _temp4(prev_0) {
    return [
        ...prev_0,
        ""
    ];
}
function _temp5(p) {
    return {
        value: p,
        label: p.charAt(0).toUpperCase() + p.slice(1)
    };
}
var _c;
__turbopack_context__.k.register(_c, "NewRequestModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/avatar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Avatar",
    ()=>Avatar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
;
;
const SIZE_STYLES = {
    sm: 'h-7 w-7 text-[10px]',
    md: 'h-9 w-9 text-xs',
    lg: 'h-11 w-11 text-sm'
};
const AVATAR_COLORS = [
    'bg-blue-100 text-blue-700',
    'bg-emerald-100 text-emerald-700',
    'bg-amber-100 text-amber-700',
    'bg-violet-100 text-violet-700',
    'bg-rose-100 text-rose-700',
    'bg-cyan-100 text-cyan-700',
    'bg-orange-100 text-orange-700'
];
const getColorFromName = (name)=>{
    let hash = 0;
    for(let i = 0; i < name.length; i++){
        hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    return AVATAR_COLORS[Math.abs(hash) % AVATAR_COLORS.length];
};
const getInitials = (name)=>{
    const parts = name.trim().split(/\s+/);
    if (parts.length >= 2) {
        return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
    }
    return name.slice(0, 2).toUpperCase();
};
const Avatar = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(14);
    if ($[0] !== "d037a01035bcacc46629e7befdeb6c47b441ef0af9bb14484e692e14d144abdf") {
        for(let $i = 0; $i < 14; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d037a01035bcacc46629e7befdeb6c47b441ef0af9bb14484e692e14d144abdf";
    }
    const { name, src, size: t1, className: t2 } = t0;
    const size = t1 === undefined ? "md" : t1;
    const className = t2 === undefined ? "" : t2;
    if (src) {
        const pxSize = size === "sm" ? 28 : size === "md" ? 36 : 44;
        const t3 = `
          ${SIZE_STYLES[size]} rounded-full object-cover
          ring-2 ring-[var(--surface)] ${className}
        `;
        let t4;
        if ($[1] !== name || $[2] !== pxSize || $[3] !== src || $[4] !== t3) {
            t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: src,
                alt: name,
                width: pxSize,
                height: pxSize,
                className: t3
            }, void 0, false, {
                fileName: "[project]/src/components/ui/avatar.tsx",
                lineNumber: 53,
                columnNumber: 12
            }, ("TURBOPACK compile-time value", void 0));
            $[1] = name;
            $[2] = pxSize;
            $[3] = src;
            $[4] = t3;
            $[5] = t4;
        } else {
            t4 = $[5];
        }
        return t4;
    }
    let t3;
    if ($[6] !== name) {
        t3 = getColorFromName(name);
        $[6] = name;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    const t4 = `
        ${SIZE_STYLES[size]} flex items-center justify-center
        rounded-full font-medium
        ${t3} ${className}
      `;
    let t5;
    if ($[8] !== name) {
        t5 = getInitials(name);
        $[8] = name;
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    let t6;
    if ($[10] !== name || $[11] !== t4 || $[12] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t4,
            "aria-label": name,
            children: t5
        }, void 0, false, {
            fileName: "[project]/src/components/ui/avatar.tsx",
            lineNumber: 87,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[10] = name;
        $[11] = t4;
        $[12] = t5;
        $[13] = t6;
    } else {
        t6 = $[13];
    }
    return t6;
};
_c = Avatar;
var _c;
__turbopack_context__.k.register(_c, "Avatar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/board/team-panel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TeamPanel",
    ()=>TeamPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/types/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$team$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/team-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$auth$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/auth-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/avatar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/badge.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
const ROLE_COLORS = {
    admin: 'blue',
    editor: 'green',
    member: 'gray'
};
const TeamPanel = (t0)=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(29);
    if ($[0] !== "f32fa41669960ef2fad5e3043ce29fc0158da76251453ed2a04b126e2bc05d79") {
        for(let $i = 0; $i < 29; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f32fa41669960ef2fad5e3043ce29fc0158da76251453ed2a04b126e2bc05d79";
    }
    const { open, onClose } = t0;
    const currentUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$auth$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"])(_temp);
    const members = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$team$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTeamStore"])(_temp2);
    const updateRole = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$team$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTeamStore"])(_temp3);
    const removeMember = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$team$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTeamStore"])(_temp4);
    if (!open || !currentUser) {
        return null;
    }
    let t1;
    if ($[1] !== onClose) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 z-40 bg-black/20 backdrop-blur-[1px]",
            onClick: onClose,
            "aria-hidden": "true"
        }, void 0, false, {
            fileName: "[project]/src/components/board/team-panel.tsx",
            lineNumber: 40,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = onClose;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-lg font-semibold text-[var(--text-primary)]",
            children: "Team Members"
        }, void 0, false, {
            fileName: "[project]/src/components/board/team-panel.tsx",
            lineNumber: 48,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] !== members.length) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t2,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs text-[var(--text-tertiary)]",
                    children: [
                        members.length,
                        " members"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/board/team-panel.tsx",
                    lineNumber: 55,
                    columnNumber: 19
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/team-panel.tsx",
            lineNumber: 55,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[4] = members.length;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "h-4 w-4",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M6 18L18 6M6 6l12 12"
            }, void 0, false, {
                fileName: "[project]/src/components/board/team-panel.tsx",
                lineNumber: 63,
                columnNumber: 89
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/board/team-panel.tsx",
            lineNumber: 63,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    let t5;
    if ($[7] !== onClose) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: onClose,
            className: "flex h-8 w-8 items-center justify-center rounded-[var(--radius-md)] text-[var(--text-tertiary)] transition-all hover:bg-[var(--surface-active)] hover:text-[var(--text-primary)]",
            "aria-label": "Close panel",
            children: t4
        }, void 0, false, {
            fileName: "[project]/src/components/board/team-panel.tsx",
            lineNumber: 70,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = onClose;
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    let t6;
    if ($[9] !== t3 || $[10] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "sticky top-0 z-10 flex items-center justify-between border-b border-[var(--border)] bg-[var(--surface)] px-6 py-4",
            children: [
                t3,
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/team-panel.tsx",
            lineNumber: 78,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[9] = t3;
        $[10] = t5;
        $[11] = t6;
    } else {
        t6 = $[11];
    }
    let t7;
    if ($[12] !== currentUser || $[13] !== members || $[14] !== removeMember || $[15] !== updateRole) {
        let t8;
        if ($[17] !== currentUser || $[18] !== removeMember || $[19] !== updateRole) {
            t8 = (member)=>{
                const isSelf = member.id === currentUser.id;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-3 px-6 py-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Avatar"], {
                            name: member.name,
                            size: "md"
                        }, void 0, false, {
                            fileName: "[project]/src/components/board/team-panel.tsx",
                            lineNumber: 91,
                            columnNumber: 83
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "min-w-0 flex-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "truncate text-sm font-medium text-[var(--text-primary)]",
                                            children: member.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/board/team-panel.tsx",
                                            lineNumber: 91,
                                            columnNumber: 195
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        isSelf && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[10px] text-[var(--text-tertiary)]",
                                            children: "(you)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/board/team-panel.tsx",
                                            lineNumber: 91,
                                            columnNumber: 300
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/board/team-panel.tsx",
                                    lineNumber: 91,
                                    columnNumber: 154
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "truncate text-xs text-[var(--text-secondary)]",
                                    children: member.email
                                }, void 0, false, {
                                    fileName: "[project]/src/components/board/team-panel.tsx",
                                    lineNumber: 91,
                                    columnNumber: 377
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                    color: ROLE_COLORS[member.role],
                                    className: "mt-1",
                                    children: member.role
                                }, void 0, false, {
                                    fileName: "[project]/src/components/board/team-panel.tsx",
                                    lineNumber: 91,
                                    columnNumber: 456
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/board/team-panel.tsx",
                            lineNumber: 91,
                            columnNumber: 122
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: !isSelf && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: member.role,
                                        onChange: (e)=>updateRole(member.id, e.target.value),
                                        className: "\n                          border border-[var(--border)] bg-[var(--surface)]\n                          rounded-[var(--radius-sm)] px-2 py-1 text-xs text-[var(--text-primary)]\n                          outline-none transition-all\n                          hover:border-[var(--border-hover)]\n                          focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)]/10\n                        ",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APP_ROLES"].map(_temp5)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/board/team-panel.tsx",
                                        lineNumber: 91,
                                        columnNumber: 595
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>removeMember(member.id),
                                        className: "flex h-7 w-7 items-center justify-center rounded-[var(--radius-sm)] text-[var(--text-tertiary)] transition-all hover:bg-[var(--error-light)] hover:text-[var(--error)]",
                                        "aria-label": `Remove ${member.name}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "h-3.5 w-3.5",
                                            fill: "none",
                                            stroke: "currentColor",
                                            viewBox: "0 0 24 24",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/board/team-panel.tsx",
                                                lineNumber: 91,
                                                columnNumber: 1516
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/board/team-panel.tsx",
                                            lineNumber: 91,
                                            columnNumber: 1433
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/board/team-panel.tsx",
                                        lineNumber: 91,
                                        columnNumber: 1155
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true)
                        }, void 0, false, {
                            fileName: "[project]/src/components/board/team-panel.tsx",
                            lineNumber: 91,
                            columnNumber: 540
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, member.id, true, {
                    fileName: "[project]/src/components/board/team-panel.tsx",
                    lineNumber: 91,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0));
            };
            $[17] = currentUser;
            $[18] = removeMember;
            $[19] = updateRole;
            $[20] = t8;
        } else {
            t8 = $[20];
        }
        t7 = members.map(t8);
        $[12] = currentUser;
        $[13] = members;
        $[14] = removeMember;
        $[15] = updateRole;
        $[16] = t7;
    } else {
        t7 = $[16];
    }
    let t8;
    if ($[21] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "divide-y divide-[var(--border)]",
            children: t7
        }, void 0, false, {
            fileName: "[project]/src/components/board/team-panel.tsx",
            lineNumber: 111,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[21] = t7;
        $[22] = t8;
    } else {
        t8 = $[22];
    }
    let t9;
    if ($[23] !== t6 || $[24] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
            className: "\n          fixed right-0 top-0 z-50 h-full w-full max-w-[400px]\n          border-l border-[var(--border)] bg-[var(--surface)]\n          shadow-[var(--shadow-lg)]\n          overflow-y-auto\n        ",
            role: "dialog",
            "aria-label": "Team members",
            children: [
                t6,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/team-panel.tsx",
            lineNumber: 119,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[23] = t6;
        $[24] = t8;
        $[25] = t9;
    } else {
        t9 = $[25];
    }
    let t10;
    if ($[26] !== t1 || $[27] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                t1,
                t9
            ]
        }, void 0, true);
        $[26] = t1;
        $[27] = t9;
        $[28] = t10;
    } else {
        t10 = $[28];
    }
    return t10;
};
_s(TeamPanel, "5MFjkz3G2lczWX8MCy+4E5SEwak=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$auth$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$team$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTeamStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$team$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTeamStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$team$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTeamStore"]
    ];
});
_c = TeamPanel;
function _temp(s) {
    return s.user;
}
function _temp2(s_0) {
    return s_0.members;
}
function _temp3(s_1) {
    return s_1.updateRole;
}
function _temp4(s_2) {
    return s_2.removeMember;
}
function _temp5(r) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
        value: r,
        children: r.charAt(0).toUpperCase() + r.slice(1)
    }, r, false, {
        fileName: "[project]/src/components/board/team-panel.tsx",
        lineNumber: 150,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "TeamPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/(app)/board/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BoardPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$auth$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/auth-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$request$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/request-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$app$2d$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/app-header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tab$2d$toggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/tab-toggle.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$board$2f$kanban$2d$board$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/board/kanban-board.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$board$2f$list$2d$view$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/board/list-view.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$board$2f$dashboard$2d$view$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/board/dashboard-view.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$board$2f$request$2d$detail$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/board/request-detail-modal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$board$2f$new$2d$request$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/board/new-request-modal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$board$2f$team$2d$panel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/board/team-panel.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
function BoardPage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(60);
    if ($[0] !== "d0d57c55ef9bebb4fb59931c3a3c8b2bd8af3d4e50995068d0885747dde4dc5a") {
        for(let $i = 0; $i < 60; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d0d57c55ef9bebb4fb59931c3a3c8b2bd8af3d4e50995068d0885747dde4dc5a";
    }
    const user = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$auth$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"])(_BoardPageUseAuthStore);
    const allRequests = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$request$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRequestStore"])(_BoardPageUseRequestStore);
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("kanban");
    const [selectedRequest, setSelectedRequest] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [detailOpen, setDetailOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [newRequestOpen, setNewRequestOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [teamPanelOpen, setTeamPanelOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    if (!user) {
        return null;
    }
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            value: "kanban",
            label: "Kanban Board"
        };
        t1 = {
            value: "list",
            label: "List View"
        };
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    let base;
    if ($[3] !== user.role) {
        base = [
            t0,
            t1
        ];
        if (user.role === "admin") {
            let t2;
            if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
                t2 = {
                    value: "dashboard",
                    label: "Dashboard"
                };
                $[5] = t2;
            } else {
                t2 = $[5];
            }
            base.push(t2);
        }
        $[3] = user.role;
        $[4] = base;
    } else {
        base = $[4];
    }
    const tabOptions = base;
    let t2;
    bb0: switch(user.role){
        case "admin":
            {
                t2 = allRequests;
                break bb0;
            }
        case "editor":
            {
                let t3;
                if ($[6] !== allRequests || $[7] !== user.id) {
                    let t4;
                    if ($[9] !== user.id) {
                        t4 = ({
                            "BoardPage[allRequests.filter()]": (r_0)=>r_0.assigneeId === user.id
                        })["BoardPage[allRequests.filter()]"];
                        $[9] = user.id;
                        $[10] = t4;
                    } else {
                        t4 = $[10];
                    }
                    t3 = allRequests.filter(t4);
                    $[6] = allRequests;
                    $[7] = user.id;
                    $[8] = t3;
                } else {
                    t3 = $[8];
                }
                t2 = t3;
                break bb0;
            }
        case "member":
            {
                let t3;
                if ($[11] !== allRequests || $[12] !== user.id) {
                    let t4;
                    if ($[14] !== user.id) {
                        t4 = ({
                            "BoardPage[allRequests.filter()]": (r)=>r.requesterId === user.id
                        })["BoardPage[allRequests.filter()]"];
                        $[14] = user.id;
                        $[15] = t4;
                    } else {
                        t4 = $[15];
                    }
                    t3 = allRequests.filter(t4);
                    $[11] = allRequests;
                    $[12] = user.id;
                    $[13] = t3;
                } else {
                    t3 = $[13];
                }
                t2 = t3;
                break bb0;
            }
        default:
            {
                let t3;
                if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
                    t3 = [];
                    $[16] = t3;
                } else {
                    t3 = $[16];
                }
                t2 = t3;
            }
    }
    const visibleRequests = t2;
    let t3;
    if ($[17] !== allRequests) {
        t3 = ({
            "BoardPage[handleCardClick]": (request)=>{
                const latest = allRequests.find({
                    "BoardPage[handleCardClick > allRequests.find()]": (r_1)=>r_1.id === request.id
                }["BoardPage[handleCardClick > allRequests.find()]"]);
                setSelectedRequest(latest || request);
                setDetailOpen(true);
            }
        })["BoardPage[handleCardClick]"];
        $[17] = allRequests;
        $[18] = t3;
    } else {
        t3 = $[18];
    }
    const handleCardClick = t3;
    let t4;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = ({
            "BoardPage[handleCloseDetail]": ()=>{
                setDetailOpen(false);
                setSelectedRequest(null);
            }
        })["BoardPage[handleCloseDetail]"];
        $[19] = t4;
    } else {
        t4 = $[19];
    }
    const handleCloseDetail = t4;
    let t5;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$app$2d$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppHeader"], {
            onNewRequest: {
                "BoardPage[<AppHeader>.onNewRequest]": ()=>setNewRequestOpen(true)
            }["BoardPage[<AppHeader>.onNewRequest]"],
            onToggleTeamPanel: {
                "BoardPage[<AppHeader>.onToggleTeamPanel]": ()=>setTeamPanelOpen(_BoardPageAppHeaderOnToggleTeamPanelSetTeamPanelOpen)
            }["BoardPage[<AppHeader>.onToggleTeamPanel]"]
        }, void 0, false, {
            fileName: "[project]/src/app/(app)/board/page.tsx",
            lineNumber: 174,
            columnNumber: 10
        }, this);
        $[20] = t5;
    } else {
        t5 = $[20];
    }
    let t6;
    if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = ({
            "BoardPage[<TabToggle>.onChange]": (v)=>setActiveTab(v)
        })["BoardPage[<TabToggle>.onChange]"];
        $[21] = t6;
    } else {
        t6 = $[21];
    }
    let t7;
    if ($[22] !== activeTab || $[23] !== tabOptions) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tab$2d$toggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabToggle"], {
                options: tabOptions,
                value: activeTab,
                onChange: t6
            }, void 0, false, {
                fileName: "[project]/src/app/(app)/board/page.tsx",
                lineNumber: 194,
                columnNumber: 32
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/(app)/board/page.tsx",
            lineNumber: 194,
            columnNumber: 10
        }, this);
        $[22] = activeTab;
        $[23] = tabOptions;
        $[24] = t7;
    } else {
        t7 = $[24];
    }
    let t8;
    if ($[25] !== user.role) {
        t8 = user.role === "member" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-6 rounded-[var(--radius-md)] bg-[var(--primary-light)] px-4 py-3",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-[var(--primary)]",
                children: "You can create new requests and track their status here. Your requests will be assigned to an editor by an admin."
            }, void 0, false, {
                fileName: "[project]/src/app/(app)/board/page.tsx",
                lineNumber: 203,
                columnNumber: 121
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/(app)/board/page.tsx",
            lineNumber: 203,
            columnNumber: 36
        }, this);
        $[25] = user.role;
        $[26] = t8;
    } else {
        t8 = $[26];
    }
    let t9;
    if ($[27] !== activeTab || $[28] !== handleCardClick || $[29] !== visibleRequests) {
        t9 = activeTab === "kanban" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$board$2f$kanban$2d$board$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KanbanBoard"], {
            requests: visibleRequests,
            onCardClick: handleCardClick
        }, void 0, false, {
            fileName: "[project]/src/app/(app)/board/page.tsx",
            lineNumber: 211,
            columnNumber: 36
        }, this);
        $[27] = activeTab;
        $[28] = handleCardClick;
        $[29] = visibleRequests;
        $[30] = t9;
    } else {
        t9 = $[30];
    }
    let t10;
    if ($[31] !== activeTab || $[32] !== handleCardClick || $[33] !== user.role || $[34] !== visibleRequests) {
        t10 = activeTab === "list" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$board$2f$list$2d$view$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ListView"], {
            requests: visibleRequests,
            onRowClick: handleCardClick,
            role: user.role
        }, void 0, false, {
            fileName: "[project]/src/app/(app)/board/page.tsx",
            lineNumber: 221,
            columnNumber: 35
        }, this);
        $[31] = activeTab;
        $[32] = handleCardClick;
        $[33] = user.role;
        $[34] = visibleRequests;
        $[35] = t10;
    } else {
        t10 = $[35];
    }
    let t11;
    if ($[36] !== activeTab || $[37] !== allRequests || $[38] !== user.role) {
        t11 = activeTab === "dashboard" && user.role === "admin" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$board$2f$dashboard$2d$view$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DashboardView"], {
            requests: allRequests
        }, void 0, false, {
            fileName: "[project]/src/app/(app)/board/page.tsx",
            lineNumber: 232,
            columnNumber: 65
        }, this);
        $[36] = activeTab;
        $[37] = allRequests;
        $[38] = user.role;
        $[39] = t11;
    } else {
        t11 = $[39];
    }
    let t12;
    if ($[40] !== t10 || $[41] !== t11 || $[42] !== t7 || $[43] !== t8 || $[44] !== t9) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "mx-auto w-full max-w-[1400px] px-6 py-6 lg:px-8",
            children: [
                t7,
                t8,
                t9,
                t10,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(app)/board/page.tsx",
            lineNumber: 242,
            columnNumber: 11
        }, this);
        $[40] = t10;
        $[41] = t11;
        $[42] = t7;
        $[43] = t8;
        $[44] = t9;
        $[45] = t12;
    } else {
        t12 = $[45];
    }
    let t13;
    if ($[46] !== detailOpen || $[47] !== selectedRequest) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$board$2f$request$2d$detail$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RequestDetailModal"], {
            request: selectedRequest,
            open: detailOpen,
            onClose: handleCloseDetail
        }, void 0, false, {
            fileName: "[project]/src/app/(app)/board/page.tsx",
            lineNumber: 254,
            columnNumber: 11
        }, this);
        $[46] = detailOpen;
        $[47] = selectedRequest;
        $[48] = t13;
    } else {
        t13 = $[48];
    }
    let t14;
    if ($[49] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = ({
            "BoardPage[<NewRequestModal>.onClose]": ()=>setNewRequestOpen(false)
        })["BoardPage[<NewRequestModal>.onClose]"];
        $[49] = t14;
    } else {
        t14 = $[49];
    }
    let t15;
    if ($[50] !== newRequestOpen) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$board$2f$new$2d$request$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NewRequestModal"], {
            open: newRequestOpen,
            onClose: t14
        }, void 0, false, {
            fileName: "[project]/src/app/(app)/board/page.tsx",
            lineNumber: 272,
            columnNumber: 11
        }, this);
        $[50] = newRequestOpen;
        $[51] = t15;
    } else {
        t15 = $[51];
    }
    let t16;
    if ($[52] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = ({
            "BoardPage[<TeamPanel>.onClose]": ()=>setTeamPanelOpen(false)
        })["BoardPage[<TeamPanel>.onClose]"];
        $[52] = t16;
    } else {
        t16 = $[52];
    }
    let t17;
    if ($[53] !== teamPanelOpen) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$board$2f$team$2d$panel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TeamPanel"], {
            open: teamPanelOpen,
            onClose: t16
        }, void 0, false, {
            fileName: "[project]/src/app/(app)/board/page.tsx",
            lineNumber: 289,
            columnNumber: 11
        }, this);
        $[53] = teamPanelOpen;
        $[54] = t17;
    } else {
        t17 = $[54];
    }
    let t18;
    if ($[55] !== t12 || $[56] !== t13 || $[57] !== t15 || $[58] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-[var(--background)]",
            children: [
                t5,
                t12,
                t13,
                t15,
                t17
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(app)/board/page.tsx",
            lineNumber: 297,
            columnNumber: 11
        }, this);
        $[55] = t12;
        $[56] = t13;
        $[57] = t15;
        $[58] = t17;
        $[59] = t18;
    } else {
        t18 = $[59];
    }
    return t18;
}
_s(BoardPage, "FCct1C/SyQQyOllNiwgM08HxxHY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$auth$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$request$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRequestStore"]
    ];
});
_c = BoardPage;
function _BoardPageAppHeaderOnToggleTeamPanelSetTeamPanelOpen(prev) {
    return !prev;
}
function _BoardPageUseRequestStore(s_0) {
    return s_0.requests;
}
function _BoardPageUseAuthStore(s) {
    return s.user;
}
var _c;
__turbopack_context__.k.register(_c, "BoardPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_c08f78ab._.js.map