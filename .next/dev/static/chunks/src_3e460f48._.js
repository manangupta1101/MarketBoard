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
        type: 'reel',
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
        type: 'reel',
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
        type: 'reel',
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
        type: 'reel',
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
        type: 'carousel',
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
        type: 'reel',
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
        type: 'reel',
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
        type: 'post',
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
        type: 'reel',
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
        type: 'carousel',
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
        type: 'static',
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
        type: 'story',
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
const MOCK_REQUESTS = MOCK_REQUEST_DATA.map(_c = (r)=>({
        ...r,
        totalItems: 1,
        dueDate: null
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
        deleteRequest: (id)=>{
            set((state)=>({
                    requests: state.requests.filter((r)=>r.id !== id)
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
__turbopack_context__.k.register(_c, "MOCK_REQUESTS$MOCK_REQUEST_DATA.map");
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
    }
};
const Badge = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "bc25835e5c1ca17428196c1e7ca7fbaee4567c99896a9901246267e987919838") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "bc25835e5c1ca17428196c1e7ca7fbaee4567c99896a9901246267e987919838";
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
            lineNumber: 69,
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
    if ($[0] !== "d290610ef8d15069bf3aba68b6d890429f7fc8637e8239879ca0430b5bf22a87") {
        for(let $i = 0; $i < 25; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d290610ef8d15069bf3aba68b6d890429f7fc8637e8239879ca0430b5bf22a87";
    }
    const { onNewRequest, onToggleTeamPanel } = t0;
    const user = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$auth$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"])(_temp);
    const logout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$auth$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"])(_temp2);
    if (!user) {
        return null;
    }
    const roleColor = user.role === "admin" ? "blue" : user.role === "editor" ? "green" : "gray";
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
        t5 = (user.role === "admin" || user.role === "member") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
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
                        columnNumber: 187
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/app-header.tsx",
                    lineNumber: 59,
                    columnNumber: 104
                }, ("TURBOPACK compile-time value", void 0)),
                "New Request"
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/app-header.tsx",
            lineNumber: 59,
            columnNumber: 63
        }, ("TURBOPACK compile-time value", void 0));
        $[8] = onNewRequest;
        $[9] = user.role;
        $[10] = t5;
    } else {
        t5 = $[10];
    }
    let t6;
    if ($[11] !== onToggleTeamPanel || $[12] !== user.role) {
        t6 = user.role === "admin" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                        columnNumber: 425
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 1.5,
                        d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/app-header.tsx",
                        lineNumber: 68,
                        columnNumber: 984
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/app-header.tsx",
                lineNumber: 68,
                columnNumber: 336
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/layout/app-header.tsx",
            lineNumber: 68,
            columnNumber: 35
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
    'ui_ux',
    'carousel',
    'static',
    'story',
    'reel',
    'post'
];
const REQUEST_STATUSES = [
    'open',
    'in_progress',
    'review',
    'closed'
];
const REQUEST_PRIORITIES = [
    'urgent',
    'high',
    'medium',
    'low'
];
const APP_ROLES = [
    'admin',
    'editor',
    'member'
];
const REQUEST_STATUS_LABELS = {
    open: 'Open',
    in_progress: 'In Progress',
    review: 'Review',
    closed: 'Closed'
};
const REQUEST_STATUS_ORDER = [
    'open',
    'in_progress',
    'review',
    'closed'
];
const REQUEST_TYPE_LABELS = {
    design_graphics: 'Design/Graphics',
    video: 'Video',
    ui_ux: 'UI/UX',
    carousel: 'Carousel',
    static: 'Static',
    story: 'Story',
    reel: 'Reel',
    post: 'Post'
};
const REQUEST_TYPE_ICONS = {
    design_graphics: '🎨',
    video: '🎬',
    ui_ux: '🖥️',
    carousel: '🔄',
    static: '🖼️',
    story: '📱',
    reel: '🎥',
    post: '📝'
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
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(37);
    if ($[0] !== "3b6d870a7345e2723ced9da81f008f1810d22990fa2b8b1cf674f706af7f3312") {
        for(let $i = 0; $i < 37; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "3b6d870a7345e2723ced9da81f008f1810d22990fa2b8b1cf674f706af7f3312";
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
    if ($[28] !== t10 || $[29] !== t11 || $[30] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col gap-1.5",
            children: [
                t10,
                t11,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/request-card.tsx",
            lineNumber: 128,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[28] = t10;
        $[29] = t11;
        $[30] = t12;
        $[31] = t13;
    } else {
        t13 = $[31];
    }
    let t14;
    if ($[32] !== t1 || $[33] !== t13 || $[34] !== t7 || $[35] !== t8) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: t1,
            className: "\n        w-full text-left\n        bg-[var(--surface)] border border-[var(--border)]\n        rounded-[var(--radius-lg)] p-4\n        shadow-[var(--shadow-xs)]\n        transition-all duration-[var(--transition-fast)]\n        hover:border-[var(--border-hover)] hover:shadow-[var(--shadow-sm)]\n        focus-visible:outline-2 focus-visible:outline-[var(--primary)]\n      ",
            children: [
                t7,
                t8,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/request-card.tsx",
            lineNumber: 138,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[32] = t1;
        $[33] = t13;
        $[34] = t7;
        $[35] = t8;
        $[36] = t14;
    } else {
        t14 = $[36];
    }
    return t14;
};
_c = RequestCard;
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
    closed: 'bg-emerald-50 border-emerald-200'
};
const STATUS_DOT = {
    open: 'bg-blue-500',
    in_progress: 'bg-amber-500',
    review: 'bg-violet-500',
    closed: 'bg-emerald-500'
};
const KanbanColumn = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(23);
    if ($[0] !== "992fe193279e470419426082a93dc123cafe67c8f4003e159ef68bb0996f5b98") {
        for(let $i = 0; $i < 23; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "992fe193279e470419426082a93dc123cafe67c8f4003e159ef68bb0996f5b98";
    }
    const { status, requests, onCardClick } = t0;
    const t1 = `h-2 w-2 rounded-full ${STATUS_DOT[status]}`;
    let t2;
    if ($[1] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t1
        }, void 0, false, {
            fileName: "[project]/src/components/board/kanban-column.tsx",
            lineNumber: 40,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t1;
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    const t3 = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["REQUEST_STATUS_LABELS"][status];
    let t4;
    if ($[3] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-sm font-semibold text-[var(--text-primary)]",
            children: t3
        }, void 0, false, {
            fileName: "[project]/src/components/board/kanban-column.tsx",
            lineNumber: 49,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[3] = t3;
        $[4] = t4;
    } else {
        t4 = $[4];
    }
    let t5;
    if ($[5] !== t2 || $[6] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [
                t2,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/kanban-column.tsx",
            lineNumber: 57,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[5] = t2;
        $[6] = t4;
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    let t6;
    if ($[8] !== requests.length) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "flex h-5 min-w-[20px] items-center justify-center rounded-full bg-[var(--surface-secondary)] px-1.5 text-xs font-medium text-[var(--text-secondary)]",
            children: requests.length
        }, void 0, false, {
            fileName: "[project]/src/components/board/kanban-column.tsx",
            lineNumber: 66,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[8] = requests.length;
        $[9] = t6;
    } else {
        t6 = $[9];
    }
    let t7;
    if ($[10] !== t5 || $[11] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-3 flex items-center justify-between",
            children: [
                t5,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/kanban-column.tsx",
            lineNumber: 74,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[10] = t5;
        $[11] = t6;
        $[12] = t7;
    } else {
        t7 = $[12];
    }
    const t8 = `
          flex flex-1 flex-col gap-2 rounded-[var(--radius-lg)] border p-2
          ${STATUS_COLORS[status]}
          overflow-y-auto
        `;
    let t9;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = {
            maxHeight: "calc(100vh - 200px)"
        };
        $[13] = t9;
    } else {
        t9 = $[13];
    }
    let t10;
    if ($[14] !== onCardClick || $[15] !== requests) {
        t10 = requests.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-1 items-center justify-center py-12",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-sm text-[var(--text-tertiary)]",
                children: "No requests"
            }, void 0, false, {
                fileName: "[project]/src/components/board/kanban-column.tsx",
                lineNumber: 97,
                columnNumber: 98
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/board/kanban-column.tsx",
            lineNumber: 97,
            columnNumber: 35
        }, ("TURBOPACK compile-time value", void 0)) : requests.map((request)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$board$2f$request$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RequestCard"], {
                request: request,
                onClick: onCardClick
            }, request.id, false, {
                fileName: "[project]/src/components/board/kanban-column.tsx",
                lineNumber: 97,
                columnNumber: 203
            }, ("TURBOPACK compile-time value", void 0)));
        $[14] = onCardClick;
        $[15] = requests;
        $[16] = t10;
    } else {
        t10 = $[16];
    }
    let t11;
    if ($[17] !== t10 || $[18] !== t8) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t8,
            style: t9,
            children: t10
        }, void 0, false, {
            fileName: "[project]/src/components/board/kanban-column.tsx",
            lineNumber: 106,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[17] = t10;
        $[18] = t8;
        $[19] = t11;
    } else {
        t11 = $[19];
    }
    let t12;
    if ($[20] !== t11 || $[21] !== t7) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex min-w-[280px] max-w-[320px] flex-1 flex-col",
            children: [
                t7,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/kanban-column.tsx",
            lineNumber: 115,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[20] = t11;
        $[21] = t7;
        $[22] = t12;
    } else {
        t12 = $[22];
    }
    return t12;
};
_c = KanbanColumn;
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
"[project]/src/components/board/list-view.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ListView",
    ()=>ListView
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
    return new Date(dateStr).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric'
    });
};
const ListView = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(7);
    if ($[0] !== "95c9be3aaed6ad4905429dbbaf5be3ddf3cffe227074f2d16131bf3b7dd3dcaf") {
        for(let $i = 0; $i < 7; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "95c9be3aaed6ad4905429dbbaf5be3ddf3cffe227074f2d16131bf3b7dd3dcaf";
    }
    const { requests, onRowClick } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                className: "border-b border-[var(--border)] bg-[var(--surface-secondary)]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                        className: "px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)]",
                        children: "Request"
                    }, void 0, false, {
                        fileName: "[project]/src/components/board/list-view.tsx",
                        lineNumber: 31,
                        columnNumber: 95
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                        className: "px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)]",
                        children: "Priority"
                    }, void 0, false, {
                        fileName: "[project]/src/components/board/list-view.tsx",
                        lineNumber: 31,
                        columnNumber: 219
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                        className: "hidden px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)] md:table-cell",
                        children: "Status"
                    }, void 0, false, {
                        fileName: "[project]/src/components/board/list-view.tsx",
                        lineNumber: 31,
                        columnNumber: 344
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                        className: "hidden px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)] lg:table-cell",
                        children: "Requester"
                    }, void 0, false, {
                        fileName: "[project]/src/components/board/list-view.tsx",
                        lineNumber: 31,
                        columnNumber: 488
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                        className: "hidden px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)] lg:table-cell",
                        children: "Assignee"
                    }, void 0, false, {
                        fileName: "[project]/src/components/board/list-view.tsx",
                        lineNumber: 31,
                        columnNumber: 635
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                        className: "hidden px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)] sm:table-cell",
                        children: "Date"
                    }, void 0, false, {
                        fileName: "[project]/src/components/board/list-view.tsx",
                        lineNumber: 31,
                        columnNumber: 781
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/board/list-view.tsx",
                lineNumber: 31,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/board/list-view.tsx",
            lineNumber: 31,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    let t2;
    if ($[2] !== onRowClick || $[3] !== requests) {
        t2 = requests.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                colSpan: 6,
                className: "px-4 py-12 text-center text-sm text-[var(--text-tertiary)]",
                children: "No requests found"
            }, void 0, false, {
                fileName: "[project]/src/components/board/list-view.tsx",
                lineNumber: 38,
                columnNumber: 38
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/board/list-view.tsx",
            lineNumber: 38,
            columnNumber: 34
        }, ("TURBOPACK compile-time value", void 0)) : requests.map((request)=>{
            const priorityCfg = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PRIORITY_CONFIG"][request.priority];
            const typeIcon = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["REQUEST_TYPE_ICONS"][request.type];
            const statusColor = request.status === "closed" ? "green" : request.status === "review" ? "yellow" : "blue";
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                onClick: ()=>onRowClick(request),
                className: "\n                    cursor-pointer border-b border-[var(--border)] last:border-b-0\n                    transition-colors duration-[var(--transition-fast)]\n                    hover:bg-[var(--surface-hover)]\n                  ",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                        className: "px-4 py-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm",
                                    children: typeIcon
                                }, void 0, false, {
                                    fileName: "[project]/src/components/board/list-view.tsx",
                                    lineNumber: 42,
                                    columnNumber: 383
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm font-medium text-[var(--text-primary)]",
                                    children: request.title
                                }, void 0, false, {
                                    fileName: "[project]/src/components/board/list-view.tsx",
                                    lineNumber: 42,
                                    columnNumber: 426
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/board/list-view.tsx",
                            lineNumber: 42,
                            columnNumber: 342
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/board/list-view.tsx",
                        lineNumber: 42,
                        columnNumber: 316
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                        className: "px-4 py-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                            color: priorityCfg.color,
                            variant: request.priority === "urgent" ? "filled" : "default",
                            children: priorityCfg.label
                        }, void 0, false, {
                            fileName: "[project]/src/components/board/list-view.tsx",
                            lineNumber: 42,
                            columnNumber: 550
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/board/list-view.tsx",
                        lineNumber: 42,
                        columnNumber: 524
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                        className: "hidden px-4 py-3 md:table-cell",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                            color: statusColor,
                            variant: "default",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["REQUEST_STATUS_LABELS"][request.status]
                        }, void 0, false, {
                            fileName: "[project]/src/components/board/list-view.tsx",
                            lineNumber: 42,
                            columnNumber: 725
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/board/list-view.tsx",
                        lineNumber: 42,
                        columnNumber: 678
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                        className: "hidden px-4 py-3 lg:table-cell",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-sm text-[var(--text-secondary)]",
                            children: request.requesterName
                        }, void 0, false, {
                            fileName: "[project]/src/components/board/list-view.tsx",
                            lineNumber: 42,
                            columnNumber: 869
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/board/list-view.tsx",
                        lineNumber: 42,
                        columnNumber: 822
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                        className: "hidden px-4 py-3 lg:table-cell",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-sm text-[var(--text-secondary)]",
                            children: request.assigneeName || "\u2014"
                        }, void 0, false, {
                            fileName: "[project]/src/components/board/list-view.tsx",
                            lineNumber: 42,
                            columnNumber: 1006
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/board/list-view.tsx",
                        lineNumber: 42,
                        columnNumber: 959
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                        className: "hidden px-4 py-3 sm:table-cell",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs text-[var(--text-tertiary)]",
                            children: formatDate(request.createdAt)
                        }, void 0, false, {
                            fileName: "[project]/src/components/board/list-view.tsx",
                            lineNumber: 42,
                            columnNumber: 1154
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/board/list-view.tsx",
                        lineNumber: 42,
                        columnNumber: 1107
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, request.id, true, {
                fileName: "[project]/src/components/board/list-view.tsx",
                lineNumber: 42,
                columnNumber: 14
            }, ("TURBOPACK compile-time value", void 0));
        });
        $[2] = onRowClick;
        $[3] = requests;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                className: "w-full",
                children: [
                    t1,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                        children: t2
                    }, void 0, false, {
                        fileName: "[project]/src/components/board/list-view.tsx",
                        lineNumber: 52,
                        columnNumber: 150
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/board/list-view.tsx",
                lineNumber: 52,
                columnNumber: 120
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/board/list-view.tsx",
            lineNumber: 52,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[5] = t2;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    return t3;
};
_c = ListView;
var _c;
__turbopack_context__.k.register(_c, "ListView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
;
;
const PADDING_STYLES = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
};
const Card = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(11);
    if ($[0] !== "7e08419a93d593ff70da757ace964c1198d0b3e1659017c1978f6d3dde4013eb") {
        for(let $i = 0; $i < 11; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "7e08419a93d593ff70da757ace964c1198d0b3e1659017c1978f6d3dde4013eb";
    }
    let children;
    let props;
    let t1;
    let t2;
    let t3;
    if ($[1] !== t0) {
        ({ children, padding: t1, shadow: t2, className: t3, ...props } = t0);
        $[1] = t0;
        $[2] = children;
        $[3] = props;
        $[4] = t1;
        $[5] = t2;
        $[6] = t3;
    } else {
        children = $[2];
        props = $[3];
        t1 = $[4];
        t2 = $[5];
        t3 = $[6];
    }
    const padding = t1 === undefined ? "lg" : t1;
    const shadow = t2 === undefined ? true : t2;
    const className = t3 === undefined ? "" : t3;
    const t4 = `
        bg-[var(--surface)] border border-[var(--border)]
        rounded-[var(--radius-lg)]
        ${PADDING_STYLES[padding]}
        ${shadow ? "shadow-[var(--shadow-sm)]" : ""}
        ${className}
      `;
    let t5;
    if ($[7] !== children || $[8] !== props || $[9] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t4,
            ...props,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/ui/card.tsx",
            lineNumber: 59,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = children;
        $[8] = props;
        $[9] = t4;
        $[10] = t5;
    } else {
        t5 = $[10];
    }
    return t5;
};
_c = Card;
var _c;
__turbopack_context__.k.register(_c, "Card");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/types/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-client] (ecmascript)");
'use client';
;
;
;
;
const STATUS_COLORS = {
    open: 'text-blue-600 bg-blue-50',
    in_progress: 'text-amber-600 bg-amber-50',
    review: 'text-violet-600 bg-violet-50',
    closed: 'text-emerald-600 bg-emerald-50'
};
const DashboardView = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(62);
    if ($[0] !== "637546e9ba2921fe21b5f2391619ece0f8ef977c9b6e4e66bc362965cb209060") {
        for(let $i = 0; $i < 62; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "637546e9ba2921fe21b5f2391619ece0f8ef977c9b6e4e66bc362965cb209060";
    }
    const { requests } = t0;
    let t1;
    if ($[1] !== requests) {
        t1 = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["REQUEST_STATUS_ORDER"].reduce((acc, status)=>{
            acc[status] = requests.filter((r)=>r.status === status).length;
            return acc;
        }, {});
        $[1] = requests;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const statusCounts = t1;
    let t2;
    if ($[3] !== requests) {
        t2 = [
            "urgent",
            "high",
            "medium",
            "low"
        ].reduce((acc_0, p)=>{
            acc_0[p] = requests.filter((r_0)=>r_0.priority === p).length;
            return acc_0;
        }, {});
        $[3] = requests;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    const priorityCounts = t2;
    let T0;
    let t10;
    let t3;
    let t4;
    let t5;
    let t6;
    let t7;
    let t8;
    let t9;
    if ($[5] !== priorityCounts || $[6] !== requests || $[7] !== statusCounts) {
        const assigneeCounts = {};
        for (const r_1 of requests){
            if (r_1.assigneeName) {
                assigneeCounts[r_1.assigneeName] = (assigneeCounts[r_1.assigneeName] || 0) + 1;
            }
        }
        const topAssignees = Object.entries(assigneeCounts).sort(_temp).slice(0, 6);
        const requesterCounts = {};
        for (const r_2 of requests){
            requesterCounts[r_2.requesterName] = (requesterCounts[r_2.requesterName] || 0) + 1;
        }
        const topRequesters = Object.entries(requesterCounts).sort(_temp2).slice(0, 6);
        let t11;
        if ($[17] !== requests) {
            t11 = requests.filter(_temp3);
            $[17] = requests;
            $[18] = t11;
        } else {
            t11 = $[18];
        }
        const unassigned = t11.length;
        t7 = "space-y-6";
        let t12;
        if ($[19] !== statusCounts) {
            t12 = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["REQUEST_STATUS_ORDER"].map((status_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                    padding: "md",
                    shadow: false,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `flex h-10 w-10 items-center justify-center rounded-[var(--radius-md)] ${STATUS_COLORS[status_0]}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-lg font-bold",
                                    children: statusCounts[status_0]
                                }, void 0, false, {
                                    fileName: "[project]/src/components/board/dashboard-view.tsx",
                                    lineNumber: 85,
                                    columnNumber: 256
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/board/dashboard-view.tsx",
                                lineNumber: 85,
                                columnNumber: 140
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-[var(--text-tertiary)]",
                                        children: "Requests"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/board/dashboard-view.tsx",
                                        lineNumber: 85,
                                        columnNumber: 334
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm font-semibold text-[var(--text-primary)]",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["REQUEST_STATUS_LABELS"][status_0]
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/board/dashboard-view.tsx",
                                        lineNumber: 85,
                                        columnNumber: 397
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/board/dashboard-view.tsx",
                                lineNumber: 85,
                                columnNumber: 329
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/board/dashboard-view.tsx",
                        lineNumber: 85,
                        columnNumber: 99
                    }, ("TURBOPACK compile-time value", void 0))
                }, status_0, false, {
                    fileName: "[project]/src/components/board/dashboard-view.tsx",
                    lineNumber: 85,
                    columnNumber: 50
                }, ("TURBOPACK compile-time value", void 0)));
            $[19] = statusCounts;
            $[20] = t12;
        } else {
            t12 = $[20];
        }
        if ($[21] !== t12) {
            t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 gap-4 sm:grid-cols-4",
                children: t12
            }, void 0, false, {
                fileName: "[project]/src/components/board/dashboard-view.tsx",
                lineNumber: 92,
                columnNumber: 12
            }, ("TURBOPACK compile-time value", void 0));
            $[21] = t12;
            $[22] = t8;
        } else {
            t8 = $[22];
        }
        let t13;
        if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
            t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs text-[var(--text-tertiary)]",
                children: "Total requests"
            }, void 0, false, {
                fileName: "[project]/src/components/board/dashboard-view.tsx",
                lineNumber: 100,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            $[23] = t13;
        } else {
            t13 = $[23];
        }
        let t14;
        if ($[24] !== requests.length) {
            t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                padding: "md",
                shadow: false,
                children: [
                    t13,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-1 text-2xl font-bold text-[var(--text-primary)]",
                        children: requests.length
                    }, void 0, false, {
                        fileName: "[project]/src/components/board/dashboard-view.tsx",
                        lineNumber: 107,
                        columnNumber: 52
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/board/dashboard-view.tsx",
                lineNumber: 107,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            $[24] = requests.length;
            $[25] = t14;
        } else {
            t14 = $[25];
        }
        let t15;
        if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
            t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs text-[var(--text-tertiary)]",
                children: "Active (non-closed)"
            }, void 0, false, {
                fileName: "[project]/src/components/board/dashboard-view.tsx",
                lineNumber: 115,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            $[26] = t15;
        } else {
            t15 = $[26];
        }
        const t16 = requests.length - statusCounts.closed;
        let t17;
        if ($[27] !== t16) {
            t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                padding: "md",
                shadow: false,
                children: [
                    t15,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-1 text-2xl font-bold text-[var(--primary)]",
                        children: t16
                    }, void 0, false, {
                        fileName: "[project]/src/components/board/dashboard-view.tsx",
                        lineNumber: 123,
                        columnNumber: 52
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/board/dashboard-view.tsx",
                lineNumber: 123,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            $[27] = t16;
            $[28] = t17;
        } else {
            t17 = $[28];
        }
        let t18;
        if ($[29] === Symbol.for("react.memo_cache_sentinel")) {
            t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs text-[var(--text-tertiary)]",
                children: "Unassigned"
            }, void 0, false, {
                fileName: "[project]/src/components/board/dashboard-view.tsx",
                lineNumber: 131,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            $[29] = t18;
        } else {
            t18 = $[29];
        }
        let t19;
        if ($[30] !== unassigned) {
            t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                padding: "md",
                shadow: false,
                children: [
                    t18,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-1 text-2xl font-bold text-[var(--warning)]",
                        children: unassigned
                    }, void 0, false, {
                        fileName: "[project]/src/components/board/dashboard-view.tsx",
                        lineNumber: 138,
                        columnNumber: 52
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/board/dashboard-view.tsx",
                lineNumber: 138,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            $[30] = unassigned;
            $[31] = t19;
        } else {
            t19 = $[31];
        }
        if ($[32] !== t14 || $[33] !== t17 || $[34] !== t19) {
            t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-3 gap-4",
                children: [
                    t14,
                    t17,
                    t19
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/board/dashboard-view.tsx",
                lineNumber: 145,
                columnNumber: 12
            }, ("TURBOPACK compile-time value", void 0));
            $[32] = t14;
            $[33] = t17;
            $[34] = t19;
            $[35] = t9;
        } else {
            t9 = $[35];
        }
        let t20;
        if ($[36] === Symbol.for("react.memo_cache_sentinel")) {
            t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "mb-4 text-sm font-semibold text-[var(--text-primary)]",
                children: "By Priority"
            }, void 0, false, {
                fileName: "[project]/src/components/board/dashboard-view.tsx",
                lineNumber: 155,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            $[36] = t20;
        } else {
            t20 = $[36];
        }
        let t21;
        if ($[37] === Symbol.for("react.memo_cache_sentinel")) {
            t21 = [
                "urgent",
                "high",
                "medium",
                "low"
            ];
            $[37] = t21;
        } else {
            t21 = $[37];
        }
        let t22;
        if ($[38] !== priorityCounts || $[39] !== requests.length) {
            t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                padding: "md",
                children: [
                    t20,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3",
                        children: t21.map((p_0)=>{
                            const count = priorityCounts[p_0];
                            const total = requests.length || 1;
                            const pct = Math.round(count / total * 100);
                            const cfg = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PRIORITY_CONFIG"][p_0];
                            const barColor = p_0 === "urgent" ? "bg-red-500" : p_0 === "high" ? "bg-amber-500" : p_0 === "medium" ? "bg-blue-500" : "bg-gray-400";
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-1 flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs font-medium capitalize text-[var(--text-primary)]",
                                                children: cfg.label
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/board/dashboard-view.tsx",
                                                lineNumber: 175,
                                                columnNumber: 91
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs text-[var(--text-tertiary)]",
                                                children: [
                                                    count,
                                                    " (",
                                                    pct,
                                                    "%)"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/board/dashboard-view.tsx",
                                                lineNumber: 175,
                                                columnNumber: 185
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/board/dashboard-view.tsx",
                                        lineNumber: 175,
                                        columnNumber: 35
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-2 w-full rounded-full bg-[var(--surface-secondary)]",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `h-2 rounded-full ${barColor}`,
                                            style: {
                                                width: `${pct}%`
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/board/dashboard-view.tsx",
                                            lineNumber: 175,
                                            columnNumber: 339
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/board/dashboard-view.tsx",
                                        lineNumber: 175,
                                        columnNumber: 268
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, p_0, true, {
                                fileName: "[project]/src/components/board/dashboard-view.tsx",
                                lineNumber: 175,
                                columnNumber: 20
                            }, ("TURBOPACK compile-time value", void 0));
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/components/board/dashboard-view.tsx",
                        lineNumber: 169,
                        columnNumber: 37
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/board/dashboard-view.tsx",
                lineNumber: 169,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            $[38] = priorityCounts;
            $[39] = requests.length;
            $[40] = t22;
        } else {
            t22 = $[40];
        }
        let t23;
        if ($[41] === Symbol.for("react.memo_cache_sentinel")) {
            t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "mb-4 text-sm font-semibold text-[var(--text-primary)]",
                children: "Top Assignees"
            }, void 0, false, {
                fileName: "[project]/src/components/board/dashboard-view.tsx",
                lineNumber: 187,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            $[41] = t23;
        } else {
            t23 = $[41];
        }
        const t24 = topAssignees.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm text-[var(--text-tertiary)]",
            children: "No assignments yet"
        }, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-view.tsx",
            lineNumber: 192,
            columnNumber: 45
        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-2.5",
            children: topAssignees.map(_temp4)
        }, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-view.tsx",
            lineNumber: 192,
            columnNumber: 121
        }, ("TURBOPACK compile-time value", void 0));
        let t25;
        if ($[42] !== t24) {
            t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                padding: "md",
                children: [
                    t23,
                    t24
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/board/dashboard-view.tsx",
                lineNumber: 195,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            $[42] = t24;
            $[43] = t25;
        } else {
            t25 = $[43];
        }
        if ($[44] !== t22 || $[45] !== t25) {
            t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-6 md:grid-cols-2",
                children: [
                    t22,
                    t25
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/board/dashboard-view.tsx",
                lineNumber: 202,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            $[44] = t22;
            $[45] = t25;
            $[46] = t10;
        } else {
            t10 = $[46];
        }
        T0 = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"];
        t5 = "md";
        if ($[47] === Symbol.for("react.memo_cache_sentinel")) {
            t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "mb-4 text-sm font-semibold text-[var(--text-primary)]",
                children: "Top Requesters"
            }, void 0, false, {
                fileName: "[project]/src/components/board/dashboard-view.tsx",
                lineNumber: 212,
                columnNumber: 12
            }, ("TURBOPACK compile-time value", void 0));
            $[47] = t6;
        } else {
            t6 = $[47];
        }
        t3 = "grid gap-2 sm:grid-cols-2 lg:grid-cols-3";
        t4 = topRequesters.map(_temp5);
        $[5] = priorityCounts;
        $[6] = requests;
        $[7] = statusCounts;
        $[8] = T0;
        $[9] = t10;
        $[10] = t3;
        $[11] = t4;
        $[12] = t5;
        $[13] = t6;
        $[14] = t7;
        $[15] = t8;
        $[16] = t9;
    } else {
        T0 = $[8];
        t10 = $[9];
        t3 = $[10];
        t4 = $[11];
        t5 = $[12];
        t6 = $[13];
        t7 = $[14];
        t8 = $[15];
        t9 = $[16];
    }
    let t11;
    if ($[48] !== t3 || $[49] !== t4) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t3,
            children: t4
        }, void 0, false, {
            fileName: "[project]/src/components/board/dashboard-view.tsx",
            lineNumber: 244,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[48] = t3;
        $[49] = t4;
        $[50] = t11;
    } else {
        t11 = $[50];
    }
    let t12;
    if ($[51] !== T0 || $[52] !== t11 || $[53] !== t5 || $[54] !== t6) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(T0, {
            padding: t5,
            children: [
                t6,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/dashboard-view.tsx",
            lineNumber: 253,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[51] = T0;
        $[52] = t11;
        $[53] = t5;
        $[54] = t6;
        $[55] = t12;
    } else {
        t12 = $[55];
    }
    let t13;
    if ($[56] !== t10 || $[57] !== t12 || $[58] !== t7 || $[59] !== t8 || $[60] !== t9) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t7,
            children: [
                t8,
                t9,
                t10,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/dashboard-view.tsx",
            lineNumber: 264,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[56] = t10;
        $[57] = t12;
        $[58] = t7;
        $[59] = t8;
        $[60] = t9;
        $[61] = t13;
    } else {
        t13 = $[61];
    }
    return t13;
};
_c = DashboardView;
function _temp(a, b) {
    return b[1] - a[1];
}
function _temp2(a_0, b_0) {
    return b_0[1] - a_0[1];
}
function _temp3(r_3) {
    return !r_3.assigneeId && r_3.status !== "closed";
}
function _temp4(t0) {
    const [name, count_0] = t0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-between",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-sm text-[var(--text-primary)]",
                children: name
            }, void 0, false, {
                fileName: "[project]/src/components/board/dashboard-view.tsx",
                lineNumber: 287,
                columnNumber: 72
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "flex h-5 min-w-[20px] items-center justify-center rounded-full bg-[var(--surface-secondary)] px-1.5 text-xs font-medium text-[var(--text-secondary)]",
                children: count_0
            }, void 0, false, {
                fileName: "[project]/src/components/board/dashboard-view.tsx",
                lineNumber: 287,
                columnNumber: 138
            }, this)
        ]
    }, name, true, {
        fileName: "[project]/src/components/board/dashboard-view.tsx",
        lineNumber: 287,
        columnNumber: 10
    }, this);
}
function _temp5(t0) {
    const [name_0, count_1] = t0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-between rounded-[var(--radius-md)] bg-[var(--surface-secondary)] px-3 py-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-sm text-[var(--text-primary)]",
                children: name_0
            }, void 0, false, {
                fileName: "[project]/src/components/board/dashboard-view.tsx",
                lineNumber: 291,
                columnNumber: 141
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-xs font-medium text-[var(--text-secondary)]",
                children: [
                    count_1,
                    " requests"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/board/dashboard-view.tsx",
                lineNumber: 291,
                columnNumber: 209
            }, this)
        ]
    }, name_0, true, {
        fileName: "[project]/src/components/board/dashboard-view.tsx",
        lineNumber: 291,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "DashboardView");
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
        role: 'admin'
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
const formatDate = (dateStr)=>{
    return new Date(dateStr).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    });
};
const RequestDetailModal = (t0)=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(165);
    if ($[0] !== "eba0e912e177934afc1eee592bc56f3c8c434d063cf5f500f778feca44494478") {
        for(let $i = 0; $i < 165; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "eba0e912e177934afc1eee592bc56f3c8c434d063cf5f500f778feca44494478";
    }
    const { request, open, onClose } = t0;
    const user = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$auth$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"])(_temp);
    const moveForward = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$request$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRequestStore"])(_temp2);
    const assignRequest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$request$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRequestStore"])(_temp3);
    const addComment = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$request$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRequestStore"])(_temp4);
    const deleteRequest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$request$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRequestStore"])(_temp5);
    const members = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$team$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTeamStore"])(_temp6);
    const [selectedAssignee, setSelectedAssignee] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [newComment, setNewComment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    if (!request || !user) {
        return null;
    }
    const priorityCfg = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PRIORITY_CONFIG"][request.priority];
    const typeIcon = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["REQUEST_TYPE_ICONS"][request.type];
    let T0;
    let canDelete;
    let canMoveForward;
    let handleAddComment;
    let handleDelete;
    let handleMoveForward;
    let nextStatus;
    let t1;
    let t10;
    let t11;
    let t2;
    let t3;
    let t4;
    let t5;
    let t6;
    let t7;
    let t8;
    let t9;
    if ($[1] !== addComment || $[2] !== assignRequest || $[3] !== deleteRequest || $[4] !== members || $[5] !== moveForward || $[6] !== newComment || $[7] !== onClose || $[8] !== open || $[9] !== priorityCfg.color || $[10] !== priorityCfg.label || $[11] !== request.assigneeId || $[12] !== request.assigneeName || $[13] !== request.createdAt || $[14] !== request.description || $[15] !== request.id || $[16] !== request.priority || $[17] !== request.referenceLinks || $[18] !== request.requesterEmail || $[19] !== request.requesterName || $[20] !== request.status || $[21] !== request.teamLeadEmail || $[22] !== request.teamLeadName || $[23] !== request.title || $[24] !== request.type || $[25] !== selectedAssignee || $[26] !== typeIcon || $[27] !== user.id || $[28] !== user.name || $[29] !== user.role) {
        const editors = members.filter(_temp7);
        canMoveForward = request.status !== "closed" && (user.role === "admin" || user.role === "editor" && request.assigneeId === user.id);
        const canAssign = user.role === "admin";
        canDelete = user.role === "admin";
        const idx = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["REQUEST_STATUS_ORDER"].indexOf(request.status);
        nextStatus = idx < __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["REQUEST_STATUS_ORDER"].length - 1 ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["REQUEST_STATUS_ORDER"][idx + 1] : null;
        let t12;
        if ($[48] !== moveForward || $[49] !== onClose || $[50] !== request.id) {
            t12 = ()=>{
                moveForward(request.id);
                onClose();
            };
            $[48] = moveForward;
            $[49] = onClose;
            $[50] = request.id;
            $[51] = t12;
        } else {
            t12 = $[51];
        }
        handleMoveForward = t12;
        let t13;
        if ($[52] !== assignRequest || $[53] !== members || $[54] !== request.id || $[55] !== selectedAssignee) {
            t13 = ()=>{
                if (!selectedAssignee) {
                    return;
                }
                const member = members.find((m_0)=>m_0.id === selectedAssignee);
                if (member) {
                    assignRequest(request.id, member.id, member.name);
                    setSelectedAssignee("");
                }
            };
            $[52] = assignRequest;
            $[53] = members;
            $[54] = request.id;
            $[55] = selectedAssignee;
            $[56] = t13;
        } else {
            t13 = $[56];
        }
        const handleAssign = t13;
        let t14;
        if ($[57] !== addComment || $[58] !== newComment || $[59] !== request.id || $[60] !== user.id || $[61] !== user.name) {
            t14 = ()=>{
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
            $[57] = addComment;
            $[58] = newComment;
            $[59] = request.id;
            $[60] = user.id;
            $[61] = user.name;
            $[62] = t14;
        } else {
            t14 = $[62];
        }
        handleAddComment = t14;
        let t15;
        if ($[63] !== deleteRequest || $[64] !== onClose || $[65] !== request.id) {
            t15 = ()=>{
                deleteRequest(request.id);
                onClose();
            };
            $[63] = deleteRequest;
            $[64] = onClose;
            $[65] = request.id;
            $[66] = t15;
        } else {
            t15 = $[66];
        }
        handleDelete = t15;
        T0 = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"];
        t9 = open;
        t10 = onClose;
        t11 = "lg";
        t1 = "max-h-[70vh] overflow-y-auto pr-2";
        let t16;
        if ($[67] !== typeIcon) {
            t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "mt-0.5 text-lg",
                children: typeIcon
            }, void 0, false, {
                fileName: "[project]/src/components/board/request-detail-modal.tsx",
                lineNumber: 157,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            $[67] = typeIcon;
            $[68] = t16;
        } else {
            t16 = $[68];
        }
        let t17;
        if ($[69] !== request.title) {
            t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-lg font-semibold text-[var(--text-primary)]",
                children: request.title
            }, void 0, false, {
                fileName: "[project]/src/components/board/request-detail-modal.tsx",
                lineNumber: 165,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            $[69] = request.title;
            $[70] = t17;
        } else {
            t17 = $[70];
        }
        if ($[71] !== t16 || $[72] !== t17) {
            t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4 flex items-start gap-2",
                children: [
                    t16,
                    t17
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/board/request-detail-modal.tsx",
                lineNumber: 172,
                columnNumber: 12
            }, ("TURBOPACK compile-time value", void 0));
            $[71] = t16;
            $[72] = t17;
            $[73] = t2;
        } else {
            t2 = $[73];
        }
        const t18 = request.priority === "urgent" ? "filled" : "default";
        let t19;
        if ($[74] !== priorityCfg.color || $[75] !== priorityCfg.label || $[76] !== t18) {
            t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                color: priorityCfg.color,
                variant: t18,
                children: priorityCfg.label
            }, void 0, false, {
                fileName: "[project]/src/components/board/request-detail-modal.tsx",
                lineNumber: 182,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            $[74] = priorityCfg.color;
            $[75] = priorityCfg.label;
            $[76] = t18;
            $[77] = t19;
        } else {
            t19 = $[77];
        }
        let t20;
        if ($[78] !== request.type) {
            t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                color: "default",
                variant: "outline",
                children: request.type
            }, void 0, false, {
                fileName: "[project]/src/components/board/request-detail-modal.tsx",
                lineNumber: 192,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            $[78] = request.type;
            $[79] = t20;
        } else {
            t20 = $[79];
        }
        const t21 = request.status === "closed" ? "green" : request.status === "review" ? "yellow" : "blue";
        const t22 = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["REQUEST_STATUS_LABELS"][request.status];
        let t23;
        if ($[80] !== t21 || $[81] !== t22) {
            t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                color: t21,
                variant: "default",
                children: t22
            }, void 0, false, {
                fileName: "[project]/src/components/board/request-detail-modal.tsx",
                lineNumber: 202,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            $[80] = t21;
            $[81] = t22;
            $[82] = t23;
        } else {
            t23 = $[82];
        }
        if ($[83] !== t19 || $[84] !== t20 || $[85] !== t23) {
            t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-5 flex flex-wrap gap-2",
                children: [
                    t19,
                    t20,
                    t23
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/board/request-detail-modal.tsx",
                lineNumber: 210,
                columnNumber: 12
            }, ("TURBOPACK compile-time value", void 0));
            $[83] = t19;
            $[84] = t20;
            $[85] = t23;
            $[86] = t3;
        } else {
            t3 = $[86];
        }
        let t24;
        if ($[87] === Symbol.for("react.memo_cache_sentinel")) {
            t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "mb-1 text-sm font-semibold text-[var(--text-primary)]",
                children: "Description"
            }, void 0, false, {
                fileName: "[project]/src/components/board/request-detail-modal.tsx",
                lineNumber: 220,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            $[87] = t24;
        } else {
            t24 = $[87];
        }
        const t25 = request.description || "No description";
        if ($[88] !== t25) {
            t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-5",
                children: [
                    t24,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-[var(--text-secondary)]",
                        children: t25
                    }, void 0, false, {
                        fileName: "[project]/src/components/board/request-detail-modal.tsx",
                        lineNumber: 227,
                        columnNumber: 39
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/board/request-detail-modal.tsx",
                lineNumber: 227,
                columnNumber: 12
            }, ("TURBOPACK compile-time value", void 0));
            $[88] = t25;
            $[89] = t4;
        } else {
            t4 = $[89];
        }
        let t26;
        if ($[90] === Symbol.for("react.memo_cache_sentinel")) {
            t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-xs font-medium text-[var(--text-tertiary)]",
                children: "Requester"
            }, void 0, false, {
                fileName: "[project]/src/components/board/request-detail-modal.tsx",
                lineNumber: 235,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            $[90] = t26;
        } else {
            t26 = $[90];
        }
        let t27;
        if ($[91] !== request.requesterName) {
            t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm font-medium text-[var(--text-primary)]",
                children: request.requesterName
            }, void 0, false, {
                fileName: "[project]/src/components/board/request-detail-modal.tsx",
                lineNumber: 242,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            $[91] = request.requesterName;
            $[92] = t27;
        } else {
            t27 = $[92];
        }
        let t28;
        if ($[93] !== request.requesterEmail) {
            t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs text-[var(--text-secondary)]",
                children: request.requesterEmail
            }, void 0, false, {
                fileName: "[project]/src/components/board/request-detail-modal.tsx",
                lineNumber: 250,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            $[93] = request.requesterEmail;
            $[94] = t28;
        } else {
            t28 = $[94];
        }
        let t29;
        if ($[95] !== t27 || $[96] !== t28) {
            t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    t26,
                    t27,
                    t28
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/board/request-detail-modal.tsx",
                lineNumber: 258,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            $[95] = t27;
            $[96] = t28;
            $[97] = t29;
        } else {
            t29 = $[97];
        }
        let t30;
        if ($[98] !== request.teamLeadEmail || $[99] !== request.teamLeadName) {
            t30 = request.teamLeadName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs font-medium text-[var(--text-tertiary)]",
                        children: "Team Lead"
                    }, void 0, false, {
                        fileName: "[project]/src/components/board/request-detail-modal.tsx",
                        lineNumber: 267,
                        columnNumber: 42
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm font-medium text-[var(--text-primary)]",
                        children: request.teamLeadName
                    }, void 0, false, {
                        fileName: "[project]/src/components/board/request-detail-modal.tsx",
                        lineNumber: 267,
                        columnNumber: 124
                    }, ("TURBOPACK compile-time value", void 0)),
                    request.teamLeadEmail && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-[var(--text-secondary)]",
                        children: request.teamLeadEmail
                    }, void 0, false, {
                        fileName: "[project]/src/components/board/request-detail-modal.tsx",
                        lineNumber: 267,
                        columnNumber: 238
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/board/request-detail-modal.tsx",
                lineNumber: 267,
                columnNumber: 37
            }, ("TURBOPACK compile-time value", void 0));
            $[98] = request.teamLeadEmail;
            $[99] = request.teamLeadName;
            $[100] = t30;
        } else {
            t30 = $[100];
        }
        let t31;
        if ($[101] === Symbol.for("react.memo_cache_sentinel")) {
            t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-xs font-medium text-[var(--text-tertiary)]",
                children: "Created"
            }, void 0, false, {
                fileName: "[project]/src/components/board/request-detail-modal.tsx",
                lineNumber: 276,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            $[101] = t31;
        } else {
            t31 = $[101];
        }
        let t32;
        if ($[102] !== request.createdAt) {
            t32 = formatDate(request.createdAt);
            $[102] = request.createdAt;
            $[103] = t32;
        } else {
            t32 = $[103];
        }
        let t33;
        if ($[104] !== t32) {
            t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    t31,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-[var(--text-primary)]",
                        children: t32
                    }, void 0, false, {
                        fileName: "[project]/src/components/board/request-detail-modal.tsx",
                        lineNumber: 291,
                        columnNumber: 23
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/board/request-detail-modal.tsx",
                lineNumber: 291,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            $[104] = t32;
            $[105] = t33;
        } else {
            t33 = $[105];
        }
        let t34;
        if ($[106] !== request.assigneeName) {
            t34 = request.assigneeName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs font-medium text-[var(--text-tertiary)]",
                        children: "Assigned to"
                    }, void 0, false, {
                        fileName: "[project]/src/components/board/request-detail-modal.tsx",
                        lineNumber: 299,
                        columnNumber: 42
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm font-medium text-[var(--text-primary)]",
                        children: request.assigneeName
                    }, void 0, false, {
                        fileName: "[project]/src/components/board/request-detail-modal.tsx",
                        lineNumber: 299,
                        columnNumber: 126
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/board/request-detail-modal.tsx",
                lineNumber: 299,
                columnNumber: 37
            }, ("TURBOPACK compile-time value", void 0));
            $[106] = request.assigneeName;
            $[107] = t34;
        } else {
            t34 = $[107];
        }
        if ($[108] !== t29 || $[109] !== t30 || $[110] !== t33 || $[111] !== t34) {
            t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-5 grid grid-cols-2 gap-4",
                children: [
                    t29,
                    t30,
                    t33,
                    t34
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/board/request-detail-modal.tsx",
                lineNumber: 306,
                columnNumber: 12
            }, ("TURBOPACK compile-time value", void 0));
            $[108] = t29;
            $[109] = t30;
            $[110] = t33;
            $[111] = t34;
            $[112] = t5;
        } else {
            t5 = $[112];
        }
        if ($[113] !== request.referenceLinks) {
            t6 = request.referenceLinks.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                    lineNumber: 316,
                                    columnNumber: 250
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/board/request-detail-modal.tsx",
                                lineNumber: 316,
                                columnNumber: 167
                            }, ("TURBOPACK compile-time value", void 0)),
                            "Reference Links"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/board/request-detail-modal.tsx",
                        lineNumber: 316,
                        columnNumber: 71
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-1.5",
                        children: request.referenceLinks.map(_temp8)
                    }, void 0, false, {
                        fileName: "[project]/src/components/board/request-detail-modal.tsx",
                        lineNumber: 316,
                        columnNumber: 480
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/board/request-detail-modal.tsx",
                lineNumber: 316,
                columnNumber: 49
            }, ("TURBOPACK compile-time value", void 0));
            $[113] = request.referenceLinks;
            $[114] = t6;
        } else {
            t6 = $[114];
        }
        if ($[115] === Symbol.for("react.memo_cache_sentinel")) {
            t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "my-4 border-t border-[var(--border)]"
            }, void 0, false, {
                fileName: "[project]/src/components/board/request-detail-modal.tsx",
                lineNumber: 323,
                columnNumber: 12
            }, ("TURBOPACK compile-time value", void 0));
            $[115] = t7;
        } else {
            t7 = $[115];
        }
        t8 = canAssign && request.status !== "closed" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-5",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "mb-2 text-sm font-semibold text-[var(--text-primary)]",
                    children: "Assign To"
                }, void 0, false, {
                    fileName: "[project]/src/components/board/request-detail-modal.tsx",
                    lineNumber: 328,
                    columnNumber: 76
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                            value: selectedAssignee,
                            onChange: (e)=>setSelectedAssignee(e.target.value),
                            className: "\n                  flex-1 border border-[var(--border)] bg-[var(--surface)]\n                  rounded-[var(--radius-md)] px-3 py-2 text-sm text-[var(--text-primary)]\n                  outline-none transition-all duration-[var(--transition-fast)]\n                  hover:border-[var(--border-hover)]\n                  focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/10\n                ",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "",
                                    children: "Unassigned"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/board/request-detail-modal.tsx",
                                    lineNumber: 328,
                                    columnNumber: 701
                                }, ("TURBOPACK compile-time value", void 0)),
                                editors.map(_temp9)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/board/request-detail-modal.tsx",
                            lineNumber: 328,
                            columnNumber: 188
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            size: "sm",
                            variant: "secondary",
                            onClick: handleAssign,
                            disabled: !selectedAssignee,
                            children: "Assign"
                        }, void 0, false, {
                            fileName: "[project]/src/components/board/request-detail-modal.tsx",
                            lineNumber: 328,
                            columnNumber: 767
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/board/request-detail-modal.tsx",
                    lineNumber: 328,
                    columnNumber: 160
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/request-detail-modal.tsx",
            lineNumber: 328,
            columnNumber: 54
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = addComment;
        $[2] = assignRequest;
        $[3] = deleteRequest;
        $[4] = members;
        $[5] = moveForward;
        $[6] = newComment;
        $[7] = onClose;
        $[8] = open;
        $[9] = priorityCfg.color;
        $[10] = priorityCfg.label;
        $[11] = request.assigneeId;
        $[12] = request.assigneeName;
        $[13] = request.createdAt;
        $[14] = request.description;
        $[15] = request.id;
        $[16] = request.priority;
        $[17] = request.referenceLinks;
        $[18] = request.requesterEmail;
        $[19] = request.requesterName;
        $[20] = request.status;
        $[21] = request.teamLeadEmail;
        $[22] = request.teamLeadName;
        $[23] = request.title;
        $[24] = request.type;
        $[25] = selectedAssignee;
        $[26] = typeIcon;
        $[27] = user.id;
        $[28] = user.name;
        $[29] = user.role;
        $[30] = T0;
        $[31] = canDelete;
        $[32] = canMoveForward;
        $[33] = handleAddComment;
        $[34] = handleDelete;
        $[35] = handleMoveForward;
        $[36] = nextStatus;
        $[37] = t1;
        $[38] = t10;
        $[39] = t11;
        $[40] = t2;
        $[41] = t3;
        $[42] = t4;
        $[43] = t5;
        $[44] = t6;
        $[45] = t7;
        $[46] = t8;
        $[47] = t9;
    } else {
        T0 = $[30];
        canDelete = $[31];
        canMoveForward = $[32];
        handleAddComment = $[33];
        handleDelete = $[34];
        handleMoveForward = $[35];
        nextStatus = $[36];
        t1 = $[37];
        t10 = $[38];
        t11 = $[39];
        t2 = $[40];
        t3 = $[41];
        t4 = $[42];
        t5 = $[43];
        t6 = $[44];
        t7 = $[45];
        t8 = $[46];
        t9 = $[47];
    }
    let t12;
    if ($[116] !== canMoveForward || $[117] !== handleMoveForward || $[118] !== nextStatus) {
        t12 = canMoveForward && nextStatus && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                lineNumber: 398,
                                columnNumber: 192
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/board/request-detail-modal.tsx",
                            lineNumber: 398,
                            columnNumber: 113
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/board/request-detail-modal.tsx",
                    lineNumber: 398,
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
                    lineNumber: 398,
                    columnNumber: 305
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/request-detail-modal.tsx",
            lineNumber: 398,
            columnNumber: 43
        }, ("TURBOPACK compile-time value", void 0));
        $[116] = canMoveForward;
        $[117] = handleMoveForward;
        $[118] = nextStatus;
        $[119] = t12;
    } else {
        t12 = $[119];
    }
    let t13;
    if ($[120] !== canDelete || $[121] !== handleDelete) {
        t13 = canDelete && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-5",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                variant: "danger",
                size: "sm",
                onClick: handleDelete,
                children: "Delete Request"
            }, void 0, false, {
                fileName: "[project]/src/components/board/request-detail-modal.tsx",
                lineNumber: 408,
                columnNumber: 46
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/board/request-detail-modal.tsx",
            lineNumber: 408,
            columnNumber: 24
        }, ("TURBOPACK compile-time value", void 0));
        $[120] = canDelete;
        $[121] = handleDelete;
        $[122] = t13;
    } else {
        t13 = $[122];
    }
    let t14;
    if ($[123] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "my-4 border-t border-[var(--border)]"
        }, void 0, false, {
            fileName: "[project]/src/components/board/request-detail-modal.tsx",
            lineNumber: 417,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[123] = t14;
    } else {
        t14 = $[123];
    }
    let t15;
    if ($[124] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
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
                lineNumber: 424,
                columnNumber: 94
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/board/request-detail-modal.tsx",
            lineNumber: 424,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[124] = t15;
    } else {
        t15 = $[124];
    }
    let t16;
    if ($[125] !== request.comments.length) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "mb-3 flex items-center gap-1.5 text-sm font-semibold text-[var(--text-primary)]",
            children: [
                t15,
                "Comments (",
                request.comments.length,
                ")"
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/request-detail-modal.tsx",
            lineNumber: 431,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[125] = request.comments.length;
        $[126] = t16;
    } else {
        t16 = $[126];
    }
    let t17;
    if ($[127] !== request.comments) {
        t17 = request.comments.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-4 space-y-3",
            children: request.comments.map(_temp10)
        }, void 0, false, {
            fileName: "[project]/src/components/board/request-detail-modal.tsx",
            lineNumber: 439,
            columnNumber: 42
        }, ("TURBOPACK compile-time value", void 0));
        $[127] = request.comments;
        $[128] = t17;
    } else {
        t17 = $[128];
    }
    let t18;
    if ($[129] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = (e_0)=>setNewComment(e_0.target.value);
        $[129] = t18;
    } else {
        t18 = $[129];
    }
    let t19;
    if ($[130] !== handleAddComment) {
        t19 = (e_1)=>e_1.key === "Enter" && handleAddComment();
        $[130] = handleAddComment;
        $[131] = t19;
    } else {
        t19 = $[131];
    }
    let t20;
    if ($[132] !== newComment || $[133] !== t19) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "text",
            value: newComment,
            onChange: t18,
            onKeyDown: t19,
            placeholder: "Add a comment...",
            className: "\n                flex-1 border border-[var(--border)] bg-[var(--surface)]\n                rounded-[var(--radius-md)] px-3 py-2 text-sm text-[var(--text-primary)]\n                placeholder-[var(--text-tertiary)] outline-none transition-all\n                hover:border-[var(--border-hover)]\n                focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/10\n              "
        }, void 0, false, {
            fileName: "[project]/src/components/board/request-detail-modal.tsx",
            lineNumber: 462,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[132] = newComment;
        $[133] = t19;
        $[134] = t20;
    } else {
        t20 = $[134];
    }
    let t21;
    if ($[135] !== newComment) {
        t21 = newComment.trim();
        $[135] = newComment;
        $[136] = t21;
    } else {
        t21 = $[136];
    }
    const t22 = !t21;
    let t23;
    if ($[137] !== handleAddComment || $[138] !== t22) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            size: "sm",
            variant: "secondary",
            onClick: handleAddComment,
            disabled: t22,
            children: "Send"
        }, void 0, false, {
            fileName: "[project]/src/components/board/request-detail-modal.tsx",
            lineNumber: 480,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[137] = handleAddComment;
        $[138] = t22;
        $[139] = t23;
    } else {
        t23 = $[139];
    }
    let t24;
    if ($[140] !== t20 || $[141] !== t23) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex gap-2",
            children: [
                t20,
                t23
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/request-detail-modal.tsx",
            lineNumber: 489,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[140] = t20;
        $[141] = t23;
        $[142] = t24;
    } else {
        t24 = $[142];
    }
    let t25;
    if ($[143] !== t16 || $[144] !== t17 || $[145] !== t24) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t16,
                t17,
                t24
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/request-detail-modal.tsx",
            lineNumber: 498,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[143] = t16;
        $[144] = t17;
        $[145] = t24;
        $[146] = t25;
    } else {
        t25 = $[146];
    }
    let t26;
    if ($[147] !== t1 || $[148] !== t12 || $[149] !== t13 || $[150] !== t2 || $[151] !== t25 || $[152] !== t3 || $[153] !== t4 || $[154] !== t5 || $[155] !== t6 || $[156] !== t7 || $[157] !== t8) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t1,
            children: [
                t2,
                t3,
                t4,
                t5,
                t6,
                t7,
                t8,
                t12,
                t13,
                t14,
                t25
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/request-detail-modal.tsx",
            lineNumber: 508,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[147] = t1;
        $[148] = t12;
        $[149] = t13;
        $[150] = t2;
        $[151] = t25;
        $[152] = t3;
        $[153] = t4;
        $[154] = t5;
        $[155] = t6;
        $[156] = t7;
        $[157] = t8;
        $[158] = t26;
    } else {
        t26 = $[158];
    }
    let t27;
    if ($[159] !== T0 || $[160] !== t10 || $[161] !== t11 || $[162] !== t26 || $[163] !== t9) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(T0, {
            open: t9,
            onClose: t10,
            maxWidth: t11,
            children: t26
        }, void 0, false, {
            fileName: "[project]/src/components/board/request-detail-modal.tsx",
            lineNumber: 526,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[159] = T0;
        $[160] = t10;
        $[161] = t11;
        $[162] = t26;
        $[163] = t9;
        $[164] = t27;
    } else {
        t27 = $[164];
    }
    return t27;
};
_s(RequestDetailModal, "1XYEvHstIJS2zq7AlFOPozGHE0g=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$auth$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"],
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
    return s_0.moveForward;
}
function _temp3(s_1) {
    return s_1.assignRequest;
}
function _temp4(s_2) {
    return s_2.addComment;
}
function _temp5(s_3) {
    return s_3.deleteRequest;
}
function _temp6(s_4) {
    return s_4.members;
}
function _temp7(m) {
    return m.role === "editor" || m.role === "admin";
}
function _temp8(link, i) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        href: link,
        target: "_blank",
        rel: "noopener noreferrer",
        className: "block truncate text-sm text-[var(--primary)] transition-colors hover:text-[var(--primary-hover)]",
        children: link
    }, i, false, {
        fileName: "[project]/src/components/board/request-detail-modal.tsx",
        lineNumber: 560,
        columnNumber: 10
    }, this);
}
function _temp9(m_1) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
        value: m_1.id,
        children: m_1.name
    }, m_1.id, false, {
        fileName: "[project]/src/components/board/request-detail-modal.tsx",
        lineNumber: 563,
        columnNumber: 10
    }, this);
}
function _temp10(c) {
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
                        lineNumber: 566,
                        columnNumber: 155
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs text-[var(--text-tertiary)]",
                        children: formatDate(c.createdAt)
                    }, void 0, false, {
                        fileName: "[project]/src/components/board/request-detail-modal.tsx",
                        lineNumber: 566,
                        columnNumber: 241
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/board/request-detail-modal.tsx",
                lineNumber: 566,
                columnNumber: 99
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-[var(--text-secondary)]",
                children: c.content
            }, void 0, false, {
                fileName: "[project]/src/components/board/request-detail-modal.tsx",
                lineNumber: 566,
                columnNumber: 333
            }, this)
        ]
    }, c.id, true, {
        fileName: "[project]/src/components/board/request-detail-modal.tsx",
        lineNumber: 566,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "RequestDetailModal");
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
            className: "h-7 w-7",
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
            className: "h-7 w-7",
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
            className: "h-7 w-7",
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
    if ($[0] !== "4c7e72a74e04c5cdd017d85e56031b57bc67aa0ac40df02f2f7c793ff99865e4") {
        for(let $i = 0; $i < 71; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "4c7e72a74e04c5cdd017d85e56031b57bc67aa0ac40df02f2f7c793ff99865e4";
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
                comments: [],
                createdAt: new Date().toISOString()
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
            lineNumber: 178,
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
            lineNumber: 185,
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
                    lineNumber: 199,
                    columnNumber: 20
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/new-request-modal.tsx",
            lineNumber: 199,
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
            lineNumber: 207,
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
                    lineNumber: 221,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/new-request-modal.tsx",
            lineNumber: 221,
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
            lineNumber: 229,
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
                        lineNumber: 240,
                        columnNumber: 55
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm font-medium text-[var(--text-primary)]",
                        children: card.label
                    }, void 0, false, {
                        fileName: "[project]/src/components/board/new-request-modal.tsx",
                        lineNumber: 240,
                        columnNumber: 118
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, card.value, true, {
                fileName: "[project]/src/components/board/new-request-modal.tsx",
                lineNumber: 236,
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
                    className: "grid grid-cols-3 gap-3",
                    children: t16
                }, void 0, false, {
                    fileName: "[project]/src/components/board/new-request-modal.tsx",
                    lineNumber: 248,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/new-request-modal.tsx",
            lineNumber: 248,
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
            lineNumber: 256,
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
                    lineNumber: 270,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/new-request-modal.tsx",
            lineNumber: 270,
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
            lineNumber: 278,
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
                    lineNumber: 292,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/new-request-modal.tsx",
            lineNumber: 292,
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
            lineNumber: 300,
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
                    lineNumber: 314,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/board/new-request-modal.tsx",
            lineNumber: 314,
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
            lineNumber: 322,
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
            lineNumber: 332,
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
                                lineNumber: 341,
                                columnNumber: 98
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/board/new-request-modal.tsx",
                            lineNumber: 341,
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
                                    lineNumber: 341,
                                    columnNumber: 780
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/board/new-request-modal.tsx",
                                lineNumber: 341,
                                columnNumber: 685
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/board/new-request-modal.tsx",
                            lineNumber: 341,
                            columnNumber: 256
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, index_1, true, {
                    fileName: "[project]/src/components/board/new-request-modal.tsx",
                    lineNumber: 341,
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
            lineNumber: 355,
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
            lineNumber: 363,
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
            lineNumber: 370,
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
            lineNumber: 378,
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
            lineNumber: 385,
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
            lineNumber: 398,
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
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(59);
    if ($[0] !== "8c585d8ed077d2650465272d8aae5607cdf44769f4ace946de528fcb4effaf18") {
        for(let $i = 0; $i < 59; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "8c585d8ed077d2650465272d8aae5607cdf44769f4ace946de528fcb4effaf18";
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
    if ($[31] !== activeTab || $[32] !== handleCardClick || $[33] !== visibleRequests) {
        t10 = activeTab === "list" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$board$2f$list$2d$view$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ListView"], {
            requests: visibleRequests,
            onRowClick: handleCardClick
        }, void 0, false, {
            fileName: "[project]/src/app/(app)/board/page.tsx",
            lineNumber: 221,
            columnNumber: 35
        }, this);
        $[31] = activeTab;
        $[32] = handleCardClick;
        $[33] = visibleRequests;
        $[34] = t10;
    } else {
        t10 = $[34];
    }
    let t11;
    if ($[35] !== activeTab || $[36] !== allRequests || $[37] !== user.role) {
        t11 = activeTab === "dashboard" && user.role === "admin" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$board$2f$dashboard$2d$view$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DashboardView"], {
            requests: allRequests
        }, void 0, false, {
            fileName: "[project]/src/app/(app)/board/page.tsx",
            lineNumber: 231,
            columnNumber: 65
        }, this);
        $[35] = activeTab;
        $[36] = allRequests;
        $[37] = user.role;
        $[38] = t11;
    } else {
        t11 = $[38];
    }
    let t12;
    if ($[39] !== t10 || $[40] !== t11 || $[41] !== t7 || $[42] !== t8 || $[43] !== t9) {
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
            lineNumber: 241,
            columnNumber: 11
        }, this);
        $[39] = t10;
        $[40] = t11;
        $[41] = t7;
        $[42] = t8;
        $[43] = t9;
        $[44] = t12;
    } else {
        t12 = $[44];
    }
    let t13;
    if ($[45] !== detailOpen || $[46] !== selectedRequest) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$board$2f$request$2d$detail$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RequestDetailModal"], {
            request: selectedRequest,
            open: detailOpen,
            onClose: handleCloseDetail
        }, void 0, false, {
            fileName: "[project]/src/app/(app)/board/page.tsx",
            lineNumber: 253,
            columnNumber: 11
        }, this);
        $[45] = detailOpen;
        $[46] = selectedRequest;
        $[47] = t13;
    } else {
        t13 = $[47];
    }
    let t14;
    if ($[48] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = ({
            "BoardPage[<NewRequestModal>.onClose]": ()=>setNewRequestOpen(false)
        })["BoardPage[<NewRequestModal>.onClose]"];
        $[48] = t14;
    } else {
        t14 = $[48];
    }
    let t15;
    if ($[49] !== newRequestOpen) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$board$2f$new$2d$request$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NewRequestModal"], {
            open: newRequestOpen,
            onClose: t14
        }, void 0, false, {
            fileName: "[project]/src/app/(app)/board/page.tsx",
            lineNumber: 271,
            columnNumber: 11
        }, this);
        $[49] = newRequestOpen;
        $[50] = t15;
    } else {
        t15 = $[50];
    }
    let t16;
    if ($[51] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = ({
            "BoardPage[<TeamPanel>.onClose]": ()=>setTeamPanelOpen(false)
        })["BoardPage[<TeamPanel>.onClose]"];
        $[51] = t16;
    } else {
        t16 = $[51];
    }
    let t17;
    if ($[52] !== teamPanelOpen) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$board$2f$team$2d$panel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TeamPanel"], {
            open: teamPanelOpen,
            onClose: t16
        }, void 0, false, {
            fileName: "[project]/src/app/(app)/board/page.tsx",
            lineNumber: 288,
            columnNumber: 11
        }, this);
        $[52] = teamPanelOpen;
        $[53] = t17;
    } else {
        t17 = $[53];
    }
    let t18;
    if ($[54] !== t12 || $[55] !== t13 || $[56] !== t15 || $[57] !== t17) {
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
            lineNumber: 296,
            columnNumber: 11
        }, this);
        $[54] = t12;
        $[55] = t13;
        $[56] = t15;
        $[57] = t17;
        $[58] = t18;
    } else {
        t18 = $[58];
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

//# sourceMappingURL=src_3e460f48._.js.map