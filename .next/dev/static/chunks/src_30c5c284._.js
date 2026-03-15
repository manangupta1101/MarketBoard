(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
    if ($[0] !== "d4bfa201ce740db7e62bb72c0ac2e1aece89313378bb99f5968737a1791c66a5") {
        for(let $i = 0; $i < 11; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d4bfa201ce740db7e62bb72c0ac2e1aece89313378bb99f5968737a1791c66a5";
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
        border-2 border-black bg-white
        ${PADDING_STYLES[padding]}
        ${shadow ? "shadow-[5px_5px_0px_0px_#000]" : ""}
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
            lineNumber: 58,
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
    primary: 'border-2 border-black bg-black text-white font-bold tracking-wide hover:bg-neutral-800 active:bg-neutral-900 disabled:opacity-40 disabled:hover:bg-black',
    secondary: 'border-2 border-black bg-white text-black font-bold tracking-wide hover:bg-neutral-100 active:bg-neutral-200 disabled:opacity-40',
    ghost: 'text-neutral-500 hover:text-black transition-colors disabled:opacity-40',
    danger: 'border-2 border-black bg-black text-white font-bold tracking-wide hover:bg-red-900 active:bg-red-950 disabled:opacity-40'
};
const SIZE_STYLES = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-4 py-2.5 text-sm',
    lg: 'px-6 py-3 text-sm'
};
const Button = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ variant = 'primary', size = 'md', icon, showArrow = false, fullWidth = false, loading = false, disabled, className = '', children, ...props }, ref)=>{
    const isDisabled = disabled || loading;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        ref: ref,
        disabled: isDisabled,
        className: `
          inline-flex items-center justify-center gap-2 transition-all
          ${VARIANT_STYLES[variant]}
          ${variant !== 'ghost' ? SIZE_STYLES[size] : ''}
          ${fullWidth ? 'w-full' : ''}
          ${className}
        `,
        ...props,
        children: [
            loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "h-4 w-4 animate-spin border-2 border-current border-t-transparent"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/button.tsx",
                lineNumber: 64,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0)) : icon ? icon : showArrow ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-base",
                children: "→"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/button.tsx",
                lineNumber: 68,
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
"[project]/src/components/shared/role-gate.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RoleGate",
    ()=>RoleGate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$auth$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/auth-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$roles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/constants/roles.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const RoleGate = (t0)=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(7);
    if ($[0] !== "68efa1dabd33be887be78fe73dac463a7da31e2c9a0bcc6b09b38586af10c338") {
        for(let $i = 0; $i < 7; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "68efa1dabd33be887be78fe73dac463a7da31e2c9a0bcc6b09b38586af10c338";
    }
    const { children, permission, minRole, fallback: t1 } = t0;
    const fallback = t1 === undefined ? null : t1;
    const role = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$auth$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"])(_temp);
    if (permission && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$roles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasPermission"])(role, permission)) {
        let t2;
        if ($[1] !== fallback) {
            t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: fallback
            }, void 0, false);
            $[1] = fallback;
            $[2] = t2;
        } else {
            t2 = $[2];
        }
        return t2;
    }
    if (minRole && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$roles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasMinRole"])(role, minRole)) {
        let t2;
        if ($[3] !== fallback) {
            t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: fallback
            }, void 0, false);
            $[3] = fallback;
            $[4] = t2;
        } else {
            t2 = $[4];
        }
        return t2;
    }
    let t2;
    if ($[5] !== children) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: children
        }, void 0, false);
        $[5] = children;
        $[6] = t2;
    } else {
        t2 = $[6];
    }
    return t2;
};
_s(RoleGate, "/hMJssJVO78AZDD55s7erKuH82I=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$auth$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"]
    ];
});
_c = RoleGate;
function _temp(s) {
    return s.role;
}
var _c;
__turbopack_context__.k.register(_c, "RoleGate");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/constants/campaigns.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CAMPAIGN_STATUS_CONFIG",
    ()=>CAMPAIGN_STATUS_CONFIG,
    "CAMPAIGN_TYPE_CONFIG",
    ()=>CAMPAIGN_TYPE_CONFIG,
    "COST_CATEGORY_CONFIG",
    ()=>COST_CATEGORY_CONFIG
]);
const CAMPAIGN_STATUS_CONFIG = {
    draft: {
        label: 'Draft',
        description: 'Campaign is being prepared',
        transitions: [
            'planning',
            'archived'
        ]
    },
    planning: {
        label: 'Planning',
        description: 'Campaign strategy and tasks being defined',
        transitions: [
            'active',
            'archived'
        ]
    },
    active: {
        label: 'Active',
        description: 'Campaign is live and running',
        transitions: [
            'paused',
            'completed'
        ]
    },
    paused: {
        label: 'Paused',
        description: 'Campaign temporarily stopped',
        transitions: [
            'active',
            'completed'
        ]
    },
    completed: {
        label: 'Completed',
        description: 'Campaign has finished',
        transitions: [
            'archived'
        ]
    },
    archived: {
        label: 'Archived',
        description: 'Campaign is stored for historical reference',
        transitions: []
    }
};
const CAMPAIGN_TYPE_CONFIG = {
    paid_ads: {
        label: 'Paid Ads',
        description: 'Google, Meta, LinkedIn ads',
        icon: 'megaphone'
    },
    content: {
        label: 'Content',
        description: 'Blog, video, podcast content',
        icon: 'document'
    },
    social: {
        label: 'Social Media',
        description: 'Organic social posts',
        icon: 'chat'
    },
    email: {
        label: 'Email',
        description: 'Email campaigns and newsletters',
        icon: 'mail'
    },
    seo: {
        label: 'SEO',
        description: 'Search engine optimization',
        icon: 'search'
    },
    influencer: {
        label: 'Influencer',
        description: 'Influencer partnerships',
        icon: 'star'
    },
    event: {
        label: 'Event',
        description: 'Webinars, conferences, meetups',
        icon: 'calendar'
    },
    other: {
        label: 'Other',
        description: 'Custom campaign type',
        icon: 'dots'
    }
};
const COST_CATEGORY_CONFIG = {
    ad_spend: {
        label: 'Ad Spend',
        description: 'Paid advertising costs'
    },
    content_creation: {
        label: 'Content Creation',
        description: 'Design, video, copy production'
    },
    team_hours: {
        label: 'Team Hours',
        description: 'Internal team labor costs'
    },
    tools_software: {
        label: 'Tools & Software',
        description: 'SaaS subscriptions, tools'
    },
    influencer_fees: {
        label: 'Influencer Fees',
        description: 'Influencer partnership costs'
    },
    event_costs: {
        label: 'Event Costs',
        description: 'Venue, catering, materials'
    },
    agency_fees: {
        label: 'Agency Fees',
        description: 'External agency retainers'
    },
    other: {
        label: 'Other',
        description: 'Miscellaneous costs'
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/(dashboard)/campaigns/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CampaignsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$role$2d$gate$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/role-gate.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/mock/data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$campaigns$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/constants/campaigns.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$org$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/org-store.ts [app-client] (ecmascript)");
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
function CampaignsPage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(7);
    if ($[0] !== "f48b1ad09ed2f52ed1c046d70894f966924a65cfff29ab2a46f20db29302e1d6") {
        for(let $i = 0; $i < 7; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f48b1ad09ed2f52ed1c046d70894f966924a65cfff29ab2a46f20db29302e1d6";
    }
    const getTeam = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$org$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOrgStore"])(_CampaignsPageUseOrgStore);
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-2xl font-black tracking-tight text-black",
                    children: "Campaigns"
                }, void 0, false, {
                    fileName: "[project]/src/app/(dashboard)/campaigns/page.tsx",
                    lineNumber: 22,
                    columnNumber: 15
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-neutral-500",
                    children: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOCK_CAMPAIGNS"].length,
                        " campaigns across all teams"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(dashboard)/campaigns/page.tsx",
                    lineNumber: 22,
                    columnNumber: 91
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(dashboard)/campaigns/page.tsx",
            lineNumber: 22,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-6 flex items-center justify-between",
            children: [
                t0,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$role$2d$gate$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoleGate"], {
                    permission: "campaign:create",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        size: "sm",
                        children: "+ New Campaign"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(dashboard)/campaigns/page.tsx",
                        lineNumber: 29,
                        columnNumber: 109
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/(dashboard)/campaigns/page.tsx",
                    lineNumber: 29,
                    columnNumber: 70
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(dashboard)/campaigns/page.tsx",
            lineNumber: 29,
            columnNumber: 10
        }, this);
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== getTeam) {
        t2 = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOCK_CAMPAIGNS"].map({
            "CampaignsPage[MOCK_CAMPAIGNS.map()]": (campaign)=>{
                const team = campaign.team_id ? getTeam(campaign.team_id) : null;
                const statusConfig = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$campaigns$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CAMPAIGN_STATUS_CONFIG"][campaign.status];
                const typeConfig = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$campaigns$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CAMPAIGN_TYPE_CONFIG"][campaign.campaign_type];
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                    padding: "md",
                    shadow: false,
                    className: "hover:shadow-[3px_3px_0px_0px_#000] transition-shadow cursor-pointer",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "min-w-0 flex-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-1 flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-sm font-black text-black",
                                            children: campaign.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(dashboard)/campaigns/page.tsx",
                                            lineNumber: 41,
                                            columnNumber: 278
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                            variant: "outline",
                                            children: statusConfig.label
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(dashboard)/campaigns/page.tsx",
                                            lineNumber: 41,
                                            columnNumber: 344
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                            color: "neutral",
                                            children: typeConfig.label
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(dashboard)/campaigns/page.tsx",
                                            lineNumber: 41,
                                            columnNumber: 397
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(dashboard)/campaigns/page.tsx",
                                    lineNumber: 41,
                                    columnNumber: 232
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "truncate text-xs text-neutral-500",
                                    children: campaign.description
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(dashboard)/campaigns/page.tsx",
                                    lineNumber: 41,
                                    columnNumber: 452
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-2 flex items-center gap-3 text-xs text-neutral-400",
                                    children: [
                                        team && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: team.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(dashboard)/campaigns/page.tsx",
                                            lineNumber: 41,
                                            columnNumber: 607
                                        }, this),
                                        campaign.planned_start_date && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                new Date(campaign.planned_start_date).toLocaleDateString("en-IN", {
                                                    month: "short",
                                                    day: "numeric"
                                                }),
                                                campaign.planned_end_date && ` — ${new Date(campaign.planned_end_date).toLocaleDateString("en-IN", {
                                                    month: "short",
                                                    day: "numeric"
                                                })}`
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(dashboard)/campaigns/page.tsx",
                                            lineNumber: 41,
                                            columnNumber: 664
                                        }, this),
                                        campaign.tags.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: campaign.tags.join(", ")
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(dashboard)/campaigns/page.tsx",
                                            lineNumber: 47,
                                            columnNumber: 61
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(dashboard)/campaigns/page.tsx",
                                    lineNumber: 41,
                                    columnNumber: 527
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(dashboard)/campaigns/page.tsx",
                            lineNumber: 41,
                            columnNumber: 200
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/(dashboard)/campaigns/page.tsx",
                        lineNumber: 41,
                        columnNumber: 149
                    }, this)
                }, campaign.id, false, {
                    fileName: "[project]/src/app/(dashboard)/campaigns/page.tsx",
                    lineNumber: 41,
                    columnNumber: 16
                }, this);
            }
        }["CampaignsPage[MOCK_CAMPAIGNS.map()]"]);
        $[3] = getTeam;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t1,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-3",
                    children: t2
                }, void 0, false, {
                    fileName: "[project]/src/app/(dashboard)/campaigns/page.tsx",
                    lineNumber: 57,
                    columnNumber: 19
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(dashboard)/campaigns/page.tsx",
            lineNumber: 57,
            columnNumber: 10
        }, this);
        $[5] = t2;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    return t3;
}
_s(CampaignsPage, "T9xaDX2wc2yBz4Ew2SMAozJF9oU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$org$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOrgStore"]
    ];
});
_c = CampaignsPage;
function _CampaignsPageUseOrgStore(s) {
    return s.getTeam;
}
var _c;
__turbopack_context__.k.register(_c, "CampaignsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_30c5c284._.js.map