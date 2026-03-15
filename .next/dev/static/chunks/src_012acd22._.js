(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/mock/data.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MOCK_ACTIVITY_FEED",
    ()=>MOCK_ACTIVITY_FEED,
    "MOCK_BOARDS",
    ()=>MOCK_BOARDS,
    "MOCK_BOARD_COLUMNS",
    ()=>MOCK_BOARD_COLUMNS,
    "MOCK_CAMPAIGNS",
    ()=>MOCK_CAMPAIGNS,
    "MOCK_NOTIFICATIONS",
    ()=>MOCK_NOTIFICATIONS,
    "MOCK_ORG",
    ()=>MOCK_ORG,
    "MOCK_ORG_MEMBERS",
    ()=>MOCK_ORG_MEMBERS,
    "MOCK_PROFILES",
    ()=>MOCK_PROFILES,
    "MOCK_TASKS",
    ()=>MOCK_TASKS,
    "MOCK_TEAMS",
    ()=>MOCK_TEAMS,
    "MOCK_TEAM_MEMBERS",
    ()=>MOCK_TEAM_MEMBERS,
    "getMemberRole",
    ()=>getMemberRole,
    "getProfile",
    ()=>getProfile
]);
const MOCK_PROFILES = [
    {
        id: 'user-001',
        full_name: 'Arjun Mehta',
        email: 'arjun@acmecorp.com',
        avatar_url: null,
        job_title: 'Marketing Director',
        timezone: 'Asia/Kolkata',
        notification_preferences: {
            email: true,
            in_app: true
        },
        created_at: '2025-01-15T10:00:00Z',
        updated_at: '2025-01-15T10:00:00Z'
    },
    {
        id: 'user-002',
        full_name: 'Priya Sharma',
        email: 'priya@acmecorp.com',
        avatar_url: null,
        job_title: 'Paid Ads Manager',
        timezone: 'Asia/Kolkata',
        notification_preferences: {
            email: true,
            in_app: true
        },
        created_at: '2025-02-01T10:00:00Z',
        updated_at: '2025-02-01T10:00:00Z'
    },
    {
        id: 'user-003',
        full_name: 'Rahul Verma',
        email: 'rahul@acmecorp.com',
        avatar_url: null,
        job_title: 'Content Lead',
        timezone: 'Asia/Kolkata',
        notification_preferences: {
            email: true,
            in_app: true
        },
        created_at: '2025-02-05T10:00:00Z',
        updated_at: '2025-02-05T10:00:00Z'
    },
    {
        id: 'user-004',
        full_name: 'Sneha Patel',
        email: 'sneha@acmecorp.com',
        avatar_url: null,
        job_title: 'Graphic Designer',
        timezone: 'Asia/Kolkata',
        notification_preferences: {
            email: true,
            in_app: true
        },
        created_at: '2025-02-10T10:00:00Z',
        updated_at: '2025-02-10T10:00:00Z'
    },
    {
        id: 'user-005',
        full_name: 'Karan Singh',
        email: 'karan@acmecorp.com',
        avatar_url: null,
        job_title: 'SEO Specialist',
        timezone: 'Asia/Kolkata',
        notification_preferences: {
            email: true,
            in_app: true
        },
        created_at: '2025-02-15T10:00:00Z',
        updated_at: '2025-02-15T10:00:00Z'
    },
    {
        id: 'user-006',
        full_name: 'Anita Desai',
        email: 'anita@acmecorp.com',
        avatar_url: null,
        job_title: 'Social Media Manager',
        timezone: 'Asia/Kolkata',
        notification_preferences: {
            email: true,
            in_app: true
        },
        created_at: '2025-03-01T10:00:00Z',
        updated_at: '2025-03-01T10:00:00Z'
    },
    {
        id: 'user-007',
        full_name: 'Vikram Joshi',
        email: 'vikram@acmecorp.com',
        avatar_url: null,
        job_title: 'VP of Marketing',
        timezone: 'Asia/Kolkata',
        notification_preferences: {
            email: false,
            in_app: true
        },
        created_at: '2025-03-05T10:00:00Z',
        updated_at: '2025-03-05T10:00:00Z'
    }
];
const MOCK_ORG = {
    id: 'org-001',
    name: 'Acme Corp Marketing',
    slug: 'acme-marketing',
    logo_url: null,
    owner_id: 'user-001',
    settings: {
        currency: 'INR',
        timezone: 'Asia/Kolkata'
    },
    created_at: '2025-01-15T10:00:00Z',
    updated_at: '2025-01-15T10:00:00Z'
};
const MOCK_ORG_MEMBERS = [
    {
        id: 'om-001',
        organization_id: 'org-001',
        user_id: 'user-001',
        role: 'owner',
        invited_by: null,
        invited_at: null,
        joined_at: '2025-01-15T10:00:00Z',
        is_active: true,
        created_at: '2025-01-15T10:00:00Z',
        updated_at: '2025-01-15T10:00:00Z'
    },
    {
        id: 'om-002',
        organization_id: 'org-001',
        user_id: 'user-002',
        role: 'manager',
        invited_by: 'user-001',
        invited_at: '2025-02-01T10:00:00Z',
        joined_at: '2025-02-01T10:00:00Z',
        is_active: true,
        created_at: '2025-02-01T10:00:00Z',
        updated_at: '2025-02-01T10:00:00Z'
    },
    {
        id: 'om-003',
        organization_id: 'org-001',
        user_id: 'user-003',
        role: 'manager',
        invited_by: 'user-001',
        invited_at: '2025-02-05T10:00:00Z',
        joined_at: '2025-02-05T10:00:00Z',
        is_active: true,
        created_at: '2025-02-05T10:00:00Z',
        updated_at: '2025-02-05T10:00:00Z'
    },
    {
        id: 'om-004',
        organization_id: 'org-001',
        user_id: 'user-004',
        role: 'member',
        invited_by: 'user-003',
        invited_at: '2025-02-10T10:00:00Z',
        joined_at: '2025-02-10T10:00:00Z',
        is_active: true,
        created_at: '2025-02-10T10:00:00Z',
        updated_at: '2025-02-10T10:00:00Z'
    },
    {
        id: 'om-005',
        organization_id: 'org-001',
        user_id: 'user-005',
        role: 'member',
        invited_by: 'user-002',
        invited_at: '2025-02-15T10:00:00Z',
        joined_at: '2025-02-15T10:00:00Z',
        is_active: true,
        created_at: '2025-02-15T10:00:00Z',
        updated_at: '2025-02-15T10:00:00Z'
    },
    {
        id: 'om-006',
        organization_id: 'org-001',
        user_id: 'user-006',
        role: 'member',
        invited_by: 'user-001',
        invited_at: '2025-03-01T10:00:00Z',
        joined_at: '2025-03-01T10:00:00Z',
        is_active: true,
        created_at: '2025-03-01T10:00:00Z',
        updated_at: '2025-03-01T10:00:00Z'
    },
    {
        id: 'om-007',
        organization_id: 'org-001',
        user_id: 'user-007',
        role: 'viewer',
        invited_by: 'user-001',
        invited_at: '2025-03-05T10:00:00Z',
        joined_at: '2025-03-05T10:00:00Z',
        is_active: true,
        created_at: '2025-03-05T10:00:00Z',
        updated_at: '2025-03-05T10:00:00Z'
    }
];
const MOCK_TEAMS = [
    {
        id: 'team-001',
        organization_id: 'org-001',
        name: 'Paid Ads',
        description: 'Google, Meta, and LinkedIn ad campaigns',
        color: '#000000',
        created_by: 'user-001',
        is_archived: false,
        created_at: '2025-01-20T10:00:00Z',
        updated_at: '2025-01-20T10:00:00Z'
    },
    {
        id: 'team-002',
        organization_id: 'org-001',
        name: 'Content',
        description: 'Blog posts, videos, podcasts, and SEO',
        color: '#555555',
        created_by: 'user-001',
        is_archived: false,
        created_at: '2025-01-20T10:00:00Z',
        updated_at: '2025-01-20T10:00:00Z'
    },
    {
        id: 'team-003',
        organization_id: 'org-001',
        name: 'Social Media',
        description: 'Organic social media management',
        color: '#888888',
        created_by: 'user-001',
        is_archived: false,
        created_at: '2025-02-01T10:00:00Z',
        updated_at: '2025-02-01T10:00:00Z'
    }
];
const MOCK_TEAM_MEMBERS = [
    {
        id: 'tm-001',
        team_id: 'team-001',
        user_id: 'user-002',
        role: 'manager',
        created_at: '2025-02-01T10:00:00Z'
    },
    {
        id: 'tm-002',
        team_id: 'team-001',
        user_id: 'user-005',
        role: 'member',
        created_at: '2025-02-15T10:00:00Z'
    },
    {
        id: 'tm-003',
        team_id: 'team-002',
        user_id: 'user-003',
        role: 'manager',
        created_at: '2025-02-05T10:00:00Z'
    },
    {
        id: 'tm-004',
        team_id: 'team-002',
        user_id: 'user-004',
        role: 'member',
        created_at: '2025-02-10T10:00:00Z'
    },
    {
        id: 'tm-005',
        team_id: 'team-002',
        user_id: 'user-005',
        role: 'member',
        created_at: '2025-02-15T10:00:00Z'
    },
    {
        id: 'tm-006',
        team_id: 'team-003',
        user_id: 'user-006',
        role: 'manager',
        created_at: '2025-03-01T10:00:00Z'
    }
];
const MOCK_CAMPAIGNS = [
    {
        id: 'camp-001',
        organization_id: 'org-001',
        team_id: 'team-001',
        name: 'Q1 Product Launch Ads',
        description: 'Paid ads campaign for the new product launch across Google and Meta',
        campaign_type: 'paid_ads',
        status: 'active',
        planned_start_date: '2025-03-01',
        planned_end_date: '2025-04-15',
        actual_start_date: '2025-03-03',
        actual_end_date: null,
        target_audience: 'Small business owners, 25-45, India',
        platforms: [
            'google_ads',
            'meta_ads'
        ],
        tags: [
            'Q1-2025',
            'product-launch'
        ],
        created_by: 'user-002',
        created_at: '2025-02-20T10:00:00Z',
        updated_at: '2025-03-03T10:00:00Z'
    },
    {
        id: 'camp-002',
        organization_id: 'org-001',
        team_id: 'team-002',
        name: 'SEO Content Sprint',
        description: 'Create 20 SEO-optimized blog posts targeting high-intent keywords',
        campaign_type: 'content',
        status: 'active',
        planned_start_date: '2025-02-15',
        planned_end_date: '2025-04-30',
        actual_start_date: '2025-02-18',
        actual_end_date: null,
        target_audience: 'Marketing professionals searching for tools',
        platforms: [
            'blog',
            'youtube'
        ],
        tags: [
            'SEO',
            'content-sprint'
        ],
        created_by: 'user-003',
        created_at: '2025-02-10T10:00:00Z',
        updated_at: '2025-02-18T10:00:00Z'
    },
    {
        id: 'camp-003',
        organization_id: 'org-001',
        team_id: 'team-003',
        name: 'Instagram Growth Campaign',
        description: 'Grow organic Instagram following with reels and carousel content',
        campaign_type: 'social',
        status: 'planning',
        planned_start_date: '2025-04-01',
        planned_end_date: '2025-06-30',
        actual_start_date: null,
        actual_end_date: null,
        target_audience: 'Young professionals, 20-35',
        platforms: [
            'instagram'
        ],
        tags: [
            'social',
            'brand-awareness'
        ],
        created_by: 'user-006',
        created_at: '2025-03-10T10:00:00Z',
        updated_at: '2025-03-10T10:00:00Z'
    },
    {
        id: 'camp-004',
        organization_id: 'org-001',
        team_id: 'team-001',
        name: 'Retargeting Campaign',
        description: 'Retarget website visitors who did not convert',
        campaign_type: 'paid_ads',
        status: 'draft',
        planned_start_date: null,
        planned_end_date: null,
        actual_start_date: null,
        actual_end_date: null,
        target_audience: 'Website visitors, cart abandoners',
        platforms: [
            'meta_ads',
            'google_ads'
        ],
        tags: [
            'retargeting'
        ],
        created_by: 'user-002',
        created_at: '2025-03-12T10:00:00Z',
        updated_at: '2025-03-12T10:00:00Z'
    },
    {
        id: 'camp-005',
        organization_id: 'org-001',
        team_id: null,
        name: 'Brand Awareness Push',
        description: 'Cross-team initiative to boost brand recognition in target market',
        campaign_type: 'other',
        status: 'completed',
        planned_start_date: '2025-01-01',
        planned_end_date: '2025-02-28',
        actual_start_date: '2025-01-05',
        actual_end_date: '2025-02-25',
        target_audience: 'General market awareness',
        platforms: [
            'google_ads',
            'instagram',
            'youtube'
        ],
        tags: [
            'Q1-2025',
            'brand'
        ],
        created_by: 'user-001',
        created_at: '2024-12-15T10:00:00Z',
        updated_at: '2025-02-25T10:00:00Z'
    }
];
const MOCK_BOARDS = [
    {
        id: 'board-001',
        organization_id: 'org-001',
        team_id: 'team-001',
        name: 'Paid Ads Board',
        description: 'Task board for the Paid Ads team',
        is_default: true,
        created_by: 'user-002',
        created_at: '2025-02-01T10:00:00Z',
        updated_at: '2025-02-01T10:00:00Z'
    },
    {
        id: 'board-002',
        organization_id: 'org-001',
        team_id: 'team-002',
        name: 'Content Board',
        description: 'Task board for the Content team',
        is_default: true,
        created_by: 'user-003',
        created_at: '2025-02-05T10:00:00Z',
        updated_at: '2025-02-05T10:00:00Z'
    },
    {
        id: 'board-003',
        organization_id: 'org-001',
        team_id: 'team-003',
        name: 'Social Media Board',
        description: 'Task board for Social Media',
        is_default: true,
        created_by: 'user-006',
        created_at: '2025-03-01T10:00:00Z',
        updated_at: '2025-03-01T10:00:00Z'
    }
];
const MOCK_BOARD_COLUMNS = [
    // Paid Ads Board
    {
        id: 'col-001',
        board_id: 'board-001',
        name: 'Backlog',
        position: 0,
        color: null,
        wip_limit: null,
        is_done_column: false,
        created_at: '2025-02-01T10:00:00Z'
    },
    {
        id: 'col-002',
        board_id: 'board-001',
        name: 'To Do',
        position: 1,
        color: null,
        wip_limit: 8,
        is_done_column: false,
        created_at: '2025-02-01T10:00:00Z'
    },
    {
        id: 'col-003',
        board_id: 'board-001',
        name: 'In Progress',
        position: 2,
        color: null,
        wip_limit: 5,
        is_done_column: false,
        created_at: '2025-02-01T10:00:00Z'
    },
    {
        id: 'col-004',
        board_id: 'board-001',
        name: 'Review',
        position: 3,
        color: null,
        wip_limit: 3,
        is_done_column: false,
        created_at: '2025-02-01T10:00:00Z'
    },
    {
        id: 'col-005',
        board_id: 'board-001',
        name: 'Done',
        position: 4,
        color: null,
        wip_limit: null,
        is_done_column: true,
        created_at: '2025-02-01T10:00:00Z'
    },
    // Content Board
    {
        id: 'col-006',
        board_id: 'board-002',
        name: 'Backlog',
        position: 0,
        color: null,
        wip_limit: null,
        is_done_column: false,
        created_at: '2025-02-05T10:00:00Z'
    },
    {
        id: 'col-007',
        board_id: 'board-002',
        name: 'To Do',
        position: 1,
        color: null,
        wip_limit: 8,
        is_done_column: false,
        created_at: '2025-02-05T10:00:00Z'
    },
    {
        id: 'col-008',
        board_id: 'board-002',
        name: 'In Progress',
        position: 2,
        color: null,
        wip_limit: 5,
        is_done_column: false,
        created_at: '2025-02-05T10:00:00Z'
    },
    {
        id: 'col-009',
        board_id: 'board-002',
        name: 'Review',
        position: 3,
        color: null,
        wip_limit: 3,
        is_done_column: false,
        created_at: '2025-02-05T10:00:00Z'
    },
    {
        id: 'col-010',
        board_id: 'board-002',
        name: 'Done',
        position: 4,
        color: null,
        wip_limit: null,
        is_done_column: true,
        created_at: '2025-02-05T10:00:00Z'
    },
    // Social Media Board
    {
        id: 'col-011',
        board_id: 'board-003',
        name: 'Backlog',
        position: 0,
        color: null,
        wip_limit: null,
        is_done_column: false,
        created_at: '2025-03-01T10:00:00Z'
    },
    {
        id: 'col-012',
        board_id: 'board-003',
        name: 'To Do',
        position: 1,
        color: null,
        wip_limit: 8,
        is_done_column: false,
        created_at: '2025-03-01T10:00:00Z'
    },
    {
        id: 'col-013',
        board_id: 'board-003',
        name: 'In Progress',
        position: 2,
        color: null,
        wip_limit: 5,
        is_done_column: false,
        created_at: '2025-03-01T10:00:00Z'
    },
    {
        id: 'col-014',
        board_id: 'board-003',
        name: 'Review',
        position: 3,
        color: null,
        wip_limit: 3,
        is_done_column: false,
        created_at: '2025-03-01T10:00:00Z'
    },
    {
        id: 'col-015',
        board_id: 'board-003',
        name: 'Done',
        position: 4,
        color: null,
        wip_limit: null,
        is_done_column: true,
        created_at: '2025-03-01T10:00:00Z'
    }
];
const MOCK_TASKS = [
    {
        id: 'task-001',
        organization_id: 'org-001',
        board_id: 'board-001',
        column_id: 'col-003',
        campaign_id: 'camp-001',
        title: 'Set up Google Ads campaign structure',
        description: 'Create campaign, ad groups, and keyword targeting for the product launch',
        priority: 'high',
        position: 0,
        assigned_to: 'user-005',
        created_by: 'user-002',
        due_date: '2025-03-15',
        estimated_hours: 8,
        actual_hours: 5,
        completed_at: null,
        request_status: 'approved',
        requested_by: null,
        approved_by: null,
        is_deleted: false,
        created_at: '2025-03-01T10:00:00Z',
        updated_at: '2025-03-10T10:00:00Z'
    },
    {
        id: 'task-002',
        organization_id: 'org-001',
        board_id: 'board-001',
        column_id: 'col-002',
        campaign_id: 'camp-001',
        title: 'Design ad creatives for Meta',
        description: 'Create 5 ad variants for Meta campaigns (carousel + single image)',
        priority: 'high',
        position: 0,
        assigned_to: 'user-004',
        created_by: 'user-002',
        due_date: '2025-03-18',
        estimated_hours: 12,
        actual_hours: null,
        completed_at: null,
        request_status: 'approved',
        requested_by: null,
        approved_by: null,
        is_deleted: false,
        created_at: '2025-03-02T10:00:00Z',
        updated_at: '2025-03-02T10:00:00Z'
    },
    {
        id: 'task-003',
        organization_id: 'org-001',
        board_id: 'board-001',
        column_id: 'col-004',
        campaign_id: 'camp-001',
        title: 'Write ad copy variations',
        description: 'Create 10 headline + description variations for A/B testing',
        priority: 'medium',
        position: 0,
        assigned_to: 'user-005',
        created_by: 'user-002',
        due_date: '2025-03-14',
        estimated_hours: 4,
        actual_hours: 3,
        completed_at: null,
        request_status: 'approved',
        requested_by: null,
        approved_by: null,
        is_deleted: false,
        created_at: '2025-03-03T10:00:00Z',
        updated_at: '2025-03-12T10:00:00Z'
    },
    {
        id: 'task-004',
        organization_id: 'org-001',
        board_id: 'board-001',
        column_id: 'col-001',
        campaign_id: null,
        title: 'Research competitor ad strategies',
        description: null,
        priority: 'low',
        position: 0,
        assigned_to: null,
        created_by: 'user-005',
        due_date: null,
        estimated_hours: null,
        actual_hours: null,
        completed_at: null,
        request_status: 'pending',
        requested_by: 'user-005',
        approved_by: null,
        is_deleted: false,
        created_at: '2025-03-10T10:00:00Z',
        updated_at: '2025-03-10T10:00:00Z'
    },
    {
        id: 'task-005',
        organization_id: 'org-001',
        board_id: 'board-002',
        column_id: 'col-008',
        campaign_id: 'camp-002',
        title: 'Write blog post: Top 10 Marketing Tools',
        description: 'SEO-optimized article targeting "marketing tools" keyword',
        priority: 'high',
        position: 0,
        assigned_to: 'user-003',
        created_by: 'user-003',
        due_date: '2025-03-20',
        estimated_hours: 6,
        actual_hours: 4,
        completed_at: null,
        request_status: 'approved',
        requested_by: null,
        approved_by: null,
        is_deleted: false,
        created_at: '2025-02-20T10:00:00Z',
        updated_at: '2025-03-10T10:00:00Z'
    },
    {
        id: 'task-006',
        organization_id: 'org-001',
        board_id: 'board-002',
        column_id: 'col-007',
        campaign_id: 'camp-002',
        title: 'Design infographics for blog posts',
        description: 'Create 3 infographics for the top-performing blog posts',
        priority: 'medium',
        position: 0,
        assigned_to: 'user-004',
        created_by: 'user-003',
        due_date: '2025-03-25',
        estimated_hours: 10,
        actual_hours: null,
        completed_at: null,
        request_status: 'approved',
        requested_by: null,
        approved_by: null,
        is_deleted: false,
        created_at: '2025-03-05T10:00:00Z',
        updated_at: '2025-03-05T10:00:00Z'
    },
    {
        id: 'task-007',
        organization_id: 'org-001',
        board_id: 'board-002',
        column_id: 'col-010',
        campaign_id: 'camp-002',
        title: 'Keyword research for Q2 content',
        description: 'Identify 50 target keywords for Q2 content strategy',
        priority: 'urgent',
        position: 0,
        assigned_to: 'user-005',
        created_by: 'user-003',
        due_date: '2025-03-10',
        estimated_hours: 5,
        actual_hours: 6,
        completed_at: '2025-03-09T18:00:00Z',
        request_status: 'approved',
        requested_by: null,
        approved_by: null,
        is_deleted: false,
        created_at: '2025-03-01T10:00:00Z',
        updated_at: '2025-03-09T18:00:00Z'
    }
];
const MOCK_NOTIFICATIONS = [
    {
        id: 'notif-001',
        user_id: 'user-001',
        organization_id: 'org-001',
        notification_type: 'task_request',
        title: 'New task request',
        body: 'Karan Singh requested to create "Research competitor ad strategies"',
        link: '/board?task=task-004',
        is_read: false,
        read_at: null,
        created_at: '2025-03-10T10:00:00Z'
    },
    {
        id: 'notif-002',
        user_id: 'user-001',
        organization_id: 'org-001',
        notification_type: 'campaign_status',
        title: 'Campaign launched',
        body: 'Q1 Product Launch Ads is now active',
        link: '/campaigns/camp-001',
        is_read: true,
        read_at: '2025-03-03T12:00:00Z',
        created_at: '2025-03-03T10:00:00Z'
    },
    {
        id: 'notif-003',
        user_id: 'user-001',
        organization_id: 'org-001',
        notification_type: 'budget_alert',
        title: 'Budget alert',
        body: 'Content Creation budget for SEO Content Sprint is 85% spent',
        link: '/campaigns/camp-002/costs',
        is_read: false,
        read_at: null,
        created_at: '2025-03-12T10:00:00Z'
    }
];
const MOCK_ACTIVITY_FEED = [
    {
        id: 'act-001',
        type: 'task_moved',
        actor: MOCK_PROFILES[1],
        description: 'moved "Write ad copy variations" to Review',
        entity_id: 'task-003',
        entity_type: 'task',
        metadata: {
            from: 'In Progress',
            to: 'Review'
        },
        created_at: '2025-03-12T14:30:00Z'
    },
    {
        id: 'act-002',
        type: 'campaign_status_changed',
        actor: MOCK_PROFILES[1],
        description: 'launched Q1 Product Launch Ads',
        entity_id: 'camp-001',
        entity_type: 'campaign',
        metadata: {
            from: 'planning',
            to: 'active'
        },
        created_at: '2025-03-03T10:00:00Z'
    },
    {
        id: 'act-003',
        type: 'task_completed',
        actor: MOCK_PROFILES[4],
        description: 'completed "Keyword research for Q2 content"',
        entity_id: 'task-007',
        entity_type: 'task',
        metadata: {},
        created_at: '2025-03-09T18:00:00Z'
    },
    {
        id: 'act-004',
        type: 'cost_added',
        actor: MOCK_PROFILES[1],
        description: 'logged ₹25,000 ad spend for Q1 Product Launch Ads',
        entity_id: 'camp-001',
        entity_type: 'campaign',
        metadata: {
            amount: 25000,
            category: 'ad_spend'
        },
        created_at: '2025-03-08T11:00:00Z'
    },
    {
        id: 'act-005',
        type: 'member_joined',
        actor: MOCK_PROFILES[5],
        description: 'joined Social Media team',
        entity_id: 'team-003',
        entity_type: 'team',
        metadata: {},
        created_at: '2025-03-01T10:00:00Z'
    },
    {
        id: 'act-006',
        type: 'campaign_created',
        actor: MOCK_PROFILES[5],
        description: 'created Instagram Growth Campaign',
        entity_id: 'camp-003',
        entity_type: 'campaign',
        metadata: {},
        created_at: '2025-03-10T10:00:00Z'
    }
];
const getProfile = (id)=>MOCK_PROFILES.find((p)=>p.id === id);
const getMemberRole = (userId)=>MOCK_ORG_MEMBERS.find((m)=>m.user_id === userId);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/stores/auth-store.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAuthStore",
    ()=>useAuthStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/mock/data.ts [app-client] (ecmascript)");
;
;
const useAuthStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])((set)=>({
        // Default: logged in as Arjun (Owner) for development
        user: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOCK_PROFILES"][0],
        role: 'owner',
        isAuthenticated: true,
        isLoading: false,
        login: (email)=>{
            const profile = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOCK_PROFILES"].find((p)=>p.email === email);
            if (profile) {
                const membership = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOCK_ORG_MEMBERS"].find((m)=>m.user_id === profile.id);
                set({
                    user: profile,
                    role: membership?.role ?? 'viewer',
                    isAuthenticated: true
                });
            }
        },
        logout: ()=>{
            set({
                user: null,
                role: 'viewer',
                isAuthenticated: false
            });
        },
        // Dev helper: switch between users to test different roles
        switchUser: (userId)=>{
            const profile = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOCK_PROFILES"].find((p)=>p.id === userId);
            if (profile) {
                const membership = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOCK_ORG_MEMBERS"].find((m)=>m.user_id === profile.id);
                set({
                    user: profile,
                    role: membership?.role ?? 'viewer',
                    isAuthenticated: true
                });
            }
        }
    }));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/stores/org-store.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useOrgStore",
    ()=>useOrgStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/mock/data.ts [app-client] (ecmascript)");
;
;
const useOrgStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])((set, get)=>({
        organization: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOCK_ORG"],
        teams: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOCK_TEAMS"],
        members: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOCK_ORG_MEMBERS"],
        teamMembers: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOCK_TEAM_MEMBERS"],
        profiles: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOCK_PROFILES"],
        getTeam: (teamId)=>get().teams.find((t)=>t.id === teamId),
        getTeamMembers: (teamId)=>{
            const memberIds = get().teamMembers.filter((tm)=>tm.team_id === teamId).map((tm)=>tm.user_id);
            return get().profiles.filter((p)=>memberIds.includes(p.id));
        },
        getProfile: (userId)=>get().profiles.find((p)=>p.id === userId),
        getMemberRole: (userId)=>get().members.find((m)=>m.user_id === userId),
        getUserTeams: (userId)=>{
            const teamIds = get().teamMembers.filter((tm)=>tm.user_id === userId).map((tm)=>tm.team_id);
            return get().teams.filter((t)=>teamIds.includes(t.id));
        }
    }));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/constants/roles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ROLE_CONFIG",
    ()=>ROLE_CONFIG,
    "hasMinRole",
    ()=>hasMinRole,
    "hasPermission",
    ()=>hasPermission
]);
const ROLE_CONFIG = {
    owner: {
        label: 'Owner',
        description: 'Full control over the organization',
        level: 5
    },
    admin: {
        label: 'Admin',
        description: 'Manages teams, members, campaigns, and settings',
        level: 4
    },
    manager: {
        label: 'Manager',
        description: 'Leads a team, assigns tasks, approves requests',
        level: 3
    },
    member: {
        label: 'Member',
        description: 'Creates task requests, works on assigned tasks',
        level: 2
    },
    viewer: {
        label: 'Viewer',
        description: 'Read-only access to dashboards and reports',
        level: 1
    }
};
const ROLE_PERMISSIONS = {
    owner: [
        'org:manage_settings',
        'org:create_teams',
        'org:invite_users',
        'org:assign_roles',
        'org:delete',
        'campaign:create',
        'campaign:approve',
        'campaign:delete',
        'campaign:view',
        'task:create',
        'task:approve_requests',
        'task:assign',
        'task:move_own',
        'task:move_any',
        'board:view',
        'dashboard:view_all',
        'dashboard:view_team',
        'dashboard:view_own',
        'budget:manage',
        'data:export',
        'attribution:view'
    ],
    admin: [
        'org:manage_settings',
        'org:create_teams',
        'org:invite_users',
        'org:assign_roles',
        'campaign:create',
        'campaign:approve',
        'campaign:delete',
        'campaign:view',
        'task:create',
        'task:approve_requests',
        'task:assign',
        'task:move_own',
        'task:move_any',
        'board:view',
        'dashboard:view_all',
        'dashboard:view_team',
        'dashboard:view_own',
        'budget:manage',
        'data:export',
        'attribution:view'
    ],
    manager: [
        'campaign:create',
        'campaign:approve',
        'campaign:view',
        'task:create',
        'task:approve_requests',
        'task:assign',
        'task:move_own',
        'task:move_any',
        'board:view',
        'dashboard:view_team',
        'dashboard:view_own',
        'budget:manage',
        'data:export',
        'attribution:view'
    ],
    member: [
        'campaign:view',
        'task:move_own',
        'board:view',
        'dashboard:view_own'
    ],
    viewer: [
        'campaign:view',
        'board:view',
        'dashboard:view_own',
        'attribution:view'
    ]
};
const hasPermission = (role, permission)=>{
    return ROLE_PERMISSIONS[role].includes(permission);
};
const hasMinRole = (role, minRole)=>{
    return ROLE_CONFIG[role].level >= ROLE_CONFIG[minRole].level;
};
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
    sm: 'h-8 w-8 text-xs',
    md: 'h-10 w-10 text-sm',
    lg: 'h-12 w-12 text-base'
};
const getInitials = (name)=>{
    const parts = name.trim().split(/\s+/);
    if (parts.length >= 2) {
        return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
    }
    return name.slice(0, 2).toUpperCase();
};
const Avatar = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(12);
    if ($[0] !== "89ad89a266a28ec3c4e8d4454f7b2a14f8e1200b9955dc62887f013a8fcc517d") {
        for(let $i = 0; $i < 12; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "89ad89a266a28ec3c4e8d4454f7b2a14f8e1200b9955dc62887f013a8fcc517d";
    }
    const { name, src, size: t1, className: t2 } = t0;
    const size = t1 === undefined ? "md" : t1;
    const className = t2 === undefined ? "" : t2;
    if (src) {
        const pxSize = size === "sm" ? 32 : size === "md" ? 40 : 48;
        const t3 = `${SIZE_STYLES[size]} rounded-full border-2 border-black object-cover ${className}`;
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
                lineNumber: 42,
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
    const t3 = `${SIZE_STYLES[size]} flex items-center justify-center rounded-full bg-black font-bold text-white ${className}`;
    let t4;
    if ($[6] !== name) {
        t4 = getInitials(name);
        $[6] = name;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    let t5;
    if ($[8] !== name || $[9] !== t3 || $[10] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t3,
            "aria-label": name,
            children: t4
        }, void 0, false, {
            fileName: "[project]/src/components/ui/avatar.tsx",
            lineNumber: 64,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[8] = name;
        $[9] = t3;
        $[10] = t4;
        $[11] = t5;
    } else {
        t5 = $[11];
    }
    return t5;
};
_c = Avatar;
var _c;
__turbopack_context__.k.register(_c, "Avatar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/layout/sidebar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Sidebar",
    ()=>Sidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$auth$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/auth-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$org$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/org-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$roles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/constants/roles.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/avatar.tsx [app-client] (ecmascript)");
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
const NAV_ITEMS = [
    {
        label: 'Board',
        href: '/board',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "h-5 w-5",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"
            }, void 0, false, {
                fileName: "[project]/src/components/layout/sidebar.tsx",
                lineNumber: 20,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/layout/sidebar.tsx",
            lineNumber: 19,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0)),
        permission: 'board:view'
    },
    {
        label: 'My Tasks',
        href: '/my-tasks',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "h-5 w-5",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
            }, void 0, false, {
                fileName: "[project]/src/components/layout/sidebar.tsx",
                lineNumber: 27,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/layout/sidebar.tsx",
            lineNumber: 26,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        label: 'Campaigns',
        href: '/campaigns',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "h-5 w-5",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
            }, void 0, false, {
                fileName: "[project]/src/components/layout/sidebar.tsx",
                lineNumber: 33,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/layout/sidebar.tsx",
            lineNumber: 32,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0)),
        permission: 'campaign:view'
    },
    {
        label: 'Analytics',
        href: '/analytics',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "h-5 w-5",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            }, void 0, false, {
                fileName: "[project]/src/components/layout/sidebar.tsx",
                lineNumber: 40,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/layout/sidebar.tsx",
            lineNumber: 39,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0)),
        permission: 'dashboard:view_own'
    },
    {
        label: 'Approvals',
        href: '/approvals',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "h-5 w-5",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            }, void 0, false, {
                fileName: "[project]/src/components/layout/sidebar.tsx",
                lineNumber: 47,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/layout/sidebar.tsx",
            lineNumber: 46,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0)),
        permission: 'task:approve_requests'
    },
    {
        label: 'Activity',
        href: '/activity',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "h-5 w-5",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            }, void 0, false, {
                fileName: "[project]/src/components/layout/sidebar.tsx",
                lineNumber: 54,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/layout/sidebar.tsx",
            lineNumber: 53,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0)),
        permission: 'dashboard:view_team'
    }
];
const BOTTOM_NAV_ITEMS = [
    {
        label: 'Settings',
        href: '/settings',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "h-5 w-5",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/sidebar.tsx",
                    lineNumber: 62,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/sidebar.tsx",
                    lineNumber: 63,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/sidebar.tsx",
            lineNumber: 61,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0)),
        permission: 'org:manage_settings'
    }
];
const Sidebar = ()=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(46);
    if ($[0] !== "fdfa502076a4a47bc928d53f22f953a479bcebd6cdb8d6d12c225e7c7c295172") {
        for(let $i = 0; $i < 46; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "fdfa502076a4a47bc928d53f22f953a479bcebd6cdb8d6d12c225e7c7c295172";
    }
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const { user, role } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$auth$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"])();
    const organization = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$org$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOrgStore"])(_temp);
    let t0;
    if ($[1] !== pathname) {
        t0 = (href)=>{
            if (href === "/board") {
                return pathname === "/board" || pathname.startsWith("/board/");
            }
            return pathname.startsWith(href);
        };
        $[1] = pathname;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    const isActive = t0;
    let t1;
    let t2;
    let t3;
    let t4;
    let t5;
    let t6;
    if ($[3] !== isActive || $[4] !== organization?.name || $[5] !== organization?.slug || $[6] !== role) {
        let t7;
        if ($[13] !== role) {
            t7 = (item)=>!item.permission || (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$roles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasPermission"])(role, item.permission);
            $[13] = role;
            $[14] = t7;
        } else {
            t7 = $[14];
        }
        const filteredNav = NAV_ITEMS.filter(t7);
        let t8;
        if ($[15] !== role) {
            t8 = (item_0)=>!item_0.permission || (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$roles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasPermission"])(role, item_0.permission);
            $[15] = role;
            $[16] = t8;
        } else {
            t8 = $[16];
        }
        const filteredBottomNav = BOTTOM_NAV_ITEMS.filter(t8);
        t4 = "flex h-screen w-64 flex-col border-r-2 border-black bg-white";
        let t9;
        if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
            t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex h-9 w-9 items-center justify-center rounded-full bg-black",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    className: "h-4 w-4 text-white",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/sidebar.tsx",
                        lineNumber: 123,
                        columnNumber: 182
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/sidebar.tsx",
                    lineNumber: 123,
                    columnNumber: 92
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/layout/sidebar.tsx",
                lineNumber: 123,
                columnNumber: 12
            }, ("TURBOPACK compile-time value", void 0));
            $[17] = t9;
        } else {
            t9 = $[17];
        }
        const t10 = organization?.name ?? "MarketBoard";
        let t11;
        if ($[18] !== t10) {
            t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "truncate text-sm font-black text-black",
                children: t10
            }, void 0, false, {
                fileName: "[project]/src/components/layout/sidebar.tsx",
                lineNumber: 131,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            $[18] = t10;
            $[19] = t11;
        } else {
            t11 = $[19];
        }
        const t12 = organization?.slug ?? "";
        let t13;
        if ($[20] !== t12) {
            t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "truncate text-xs text-neutral-400",
                children: t12
            }, void 0, false, {
                fileName: "[project]/src/components/layout/sidebar.tsx",
                lineNumber: 140,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            $[20] = t12;
            $[21] = t13;
        } else {
            t13 = $[21];
        }
        if ($[22] !== t11 || $[23] !== t13) {
            t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3 border-b-2 border-black p-4",
                children: [
                    t9,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "min-w-0 flex-1",
                        children: [
                            t11,
                            t13
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/sidebar.tsx",
                        lineNumber: 147,
                        columnNumber: 85
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/sidebar.tsx",
                lineNumber: 147,
                columnNumber: 12
            }, ("TURBOPACK compile-time value", void 0));
            $[22] = t11;
            $[23] = t13;
            $[24] = t5;
        } else {
            t5 = $[24];
        }
        let t14;
        if ($[25] !== isActive) {
            t14 = (item_1)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: item_1.href,
                        className: `flex items-center gap-3 px-3 py-2.5 text-sm font-bold transition-colors ${isActive(item_1.href) ? "bg-black text-white" : "text-black hover:bg-neutral-100"}`,
                        children: [
                            item_1.icon,
                            item_1.label
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/sidebar.tsx",
                        lineNumber: 156,
                        columnNumber: 45
                    }, ("TURBOPACK compile-time value", void 0))
                }, item_1.href, false, {
                    fileName: "[project]/src/components/layout/sidebar.tsx",
                    lineNumber: 156,
                    columnNumber: 23
                }, ("TURBOPACK compile-time value", void 0));
            $[25] = isActive;
            $[26] = t14;
        } else {
            t14 = $[26];
        }
        const t15 = filteredNav.map(t14);
        if ($[27] !== t15) {
            t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "flex-1 overflow-y-auto p-3",
                "aria-label": "Main navigation",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "space-y-1",
                    children: t15
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/sidebar.tsx",
                    lineNumber: 164,
                    columnNumber: 85
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/layout/sidebar.tsx",
                lineNumber: 164,
                columnNumber: 12
            }, ("TURBOPACK compile-time value", void 0));
            $[27] = t15;
            $[28] = t6;
        } else {
            t6 = $[28];
        }
        t3 = "border-t-2 border-black p-3";
        t1 = "space-y-1";
        let t16;
        if ($[29] !== isActive) {
            t16 = (item_2)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: item_2.href,
                        className: `flex items-center gap-3 px-3 py-2.5 text-sm font-bold transition-colors ${isActive(item_2.href) ? "bg-black text-white" : "text-black hover:bg-neutral-100"}`,
                        children: [
                            item_2.icon,
                            item_2.label
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/sidebar.tsx",
                        lineNumber: 174,
                        columnNumber: 45
                    }, ("TURBOPACK compile-time value", void 0))
                }, item_2.href, false, {
                    fileName: "[project]/src/components/layout/sidebar.tsx",
                    lineNumber: 174,
                    columnNumber: 23
                }, ("TURBOPACK compile-time value", void 0));
            $[29] = isActive;
            $[30] = t16;
        } else {
            t16 = $[30];
        }
        t2 = filteredBottomNav.map(t16);
        $[3] = isActive;
        $[4] = organization?.name;
        $[5] = organization?.slug;
        $[6] = role;
        $[7] = t1;
        $[8] = t2;
        $[9] = t3;
        $[10] = t4;
        $[11] = t5;
        $[12] = t6;
    } else {
        t1 = $[7];
        t2 = $[8];
        t3 = $[9];
        t4 = $[10];
        t5 = $[11];
        t6 = $[12];
    }
    let t7;
    if ($[31] !== t1 || $[32] !== t2) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
            className: t1,
            children: t2
        }, void 0, false, {
            fileName: "[project]/src/components/layout/sidebar.tsx",
            lineNumber: 201,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[31] = t1;
        $[32] = t2;
        $[33] = t7;
    } else {
        t7 = $[33];
    }
    let t8;
    if ($[34] !== role || $[35] !== user) {
        t8 = user && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-3 flex items-center gap-3 border-t border-neutral-200 pt-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Avatar"], {
                    name: user.full_name,
                    src: user.avatar_url,
                    size: "sm"
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/sidebar.tsx",
                    lineNumber: 210,
                    columnNumber: 97
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "min-w-0 flex-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "truncate text-sm font-bold text-black",
                            children: user.full_name
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/sidebar.tsx",
                            lineNumber: 210,
                            columnNumber: 193
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "truncate text-xs text-neutral-400 capitalize",
                            children: role
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/sidebar.tsx",
                            lineNumber: 210,
                            columnNumber: 266
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/layout/sidebar.tsx",
                    lineNumber: 210,
                    columnNumber: 161
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/sidebar.tsx",
            lineNumber: 210,
            columnNumber: 18
        }, ("TURBOPACK compile-time value", void 0));
        $[34] = role;
        $[35] = user;
        $[36] = t8;
    } else {
        t8 = $[36];
    }
    let t9;
    if ($[37] !== t3 || $[38] !== t7 || $[39] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t3,
            children: [
                t7,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/sidebar.tsx",
            lineNumber: 219,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[37] = t3;
        $[38] = t7;
        $[39] = t8;
        $[40] = t9;
    } else {
        t9 = $[40];
    }
    let t10;
    if ($[41] !== t4 || $[42] !== t5 || $[43] !== t6 || $[44] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
            className: t4,
            children: [
                t5,
                t6,
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/sidebar.tsx",
            lineNumber: 229,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[41] = t4;
        $[42] = t5;
        $[43] = t6;
        $[44] = t9;
        $[45] = t10;
    } else {
        t10 = $[45];
    }
    return t10;
};
_s(Sidebar, "JQs5VVF2alhVOys8W6jXj/U/B88=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$auth$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$org$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOrgStore"]
    ];
});
_c = Sidebar;
function _temp(s) {
    return s.organization;
}
var _c;
__turbopack_context__.k.register(_c, "Sidebar");
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
    black: {
        default: 'bg-black text-white',
        outline: 'border-2 border-black text-black',
        filled: 'bg-black text-white'
    },
    neutral: {
        default: 'bg-neutral-100 text-neutral-600',
        outline: 'border-2 border-neutral-300 text-neutral-600',
        filled: 'bg-neutral-200 text-neutral-700'
    },
    success: {
        default: 'bg-neutral-100 text-black border-2 border-black',
        outline: 'border-2 border-black text-black',
        filled: 'bg-black text-white'
    },
    warning: {
        default: 'bg-neutral-100 text-black',
        outline: 'border-2 border-neutral-400 text-black',
        filled: 'bg-neutral-300 text-black'
    },
    error: {
        default: 'bg-neutral-100 text-black border-2 border-black',
        outline: 'border-2 border-black text-black',
        filled: 'bg-black text-white'
    }
};
const Badge = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "27d31443e26b9e1c7ce0118fe1ba85a026bb078978b386aca1cfcad3afcea72f") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "27d31443e26b9e1c7ce0118fe1ba85a026bb078978b386aca1cfcad3afcea72f";
    }
    const { children, variant: t1, color: t2, className: t3 } = t0;
    const variant = t1 === undefined ? "default" : t1;
    const color = t2 === undefined ? "black" : t2;
    const className = t3 === undefined ? "" : t3;
    const t4 = `
        inline-flex items-center px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider
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
            lineNumber: 62,
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
"[project]/src/components/layout/header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$auth$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/auth-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$org$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/org-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/avatar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/mock/data.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
const Header = ()=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(21);
    if ($[0] !== "86f72d4cd4687905b861ed6f258602cb77c94f8afcf2eb4371d9e5572791a40b") {
        for(let $i = 0; $i < 21; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "86f72d4cd4687905b861ed6f258602cb77c94f8afcf2eb4371d9e5572791a40b";
    }
    const { user, role, switchUser } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$auth$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"])();
    const organization = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$org$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOrgStore"])(_temp);
    const t0 = organization?.name ?? "MarketBoard";
    let t1;
    if ($[1] !== t0) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-3",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-sm font-black uppercase tracking-wider text-black",
                children: t0
            }, void 0, false, {
                fileName: "[project]/src/components/layout/header.tsx",
                lineNumber: 26,
                columnNumber: 51
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/layout/header.tsx",
            lineNumber: 26,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t0;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-xs text-neutral-400",
            children: "Switch:"
        }, void 0, false, {
            fileName: "[project]/src/components/layout/header.tsx",
            lineNumber: 34,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const t3 = user?.id ?? "";
    let t4;
    if ($[4] !== switchUser) {
        t4 = (e)=>switchUser(e.target.value);
        $[4] = switchUser;
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOCK_PROFILES"].map(_temp2);
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    if ($[7] !== t3 || $[8] !== t4) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [
                t2,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                    value: t3,
                    onChange: t4,
                    className: "border border-neutral-300 bg-white px-2 py-1 text-xs text-black outline-none",
                    "aria-label": "Switch user for testing",
                    children: t5
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/header.tsx",
                    lineNumber: 57,
                    columnNumber: 55
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/header.tsx",
            lineNumber: 57,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = t3;
        $[8] = t4;
        $[9] = t6;
    } else {
        t6 = $[9];
    }
    let t7;
    if ($[10] !== role) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
            variant: "outline",
            children: role
        }, void 0, false, {
            fileName: "[project]/src/components/layout/header.tsx",
            lineNumber: 66,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[10] = role;
        $[11] = t7;
    } else {
        t7 = $[11];
    }
    let t8;
    if ($[12] !== user) {
        t8 = user && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Avatar"], {
                name: user.full_name,
                src: user.avatar_url,
                size: "sm"
            }, void 0, false, {
                fileName: "[project]/src/components/layout/header.tsx",
                lineNumber: 74,
                columnNumber: 59
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/layout/header.tsx",
            lineNumber: 74,
            columnNumber: 18
        }, ("TURBOPACK compile-time value", void 0));
        $[12] = user;
        $[13] = t8;
    } else {
        t8 = $[13];
    }
    let t9;
    if ($[14] !== t6 || $[15] !== t7 || $[16] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-4",
            children: [
                t6,
                t7,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/header.tsx",
            lineNumber: 82,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[14] = t6;
        $[15] = t7;
        $[16] = t8;
        $[17] = t9;
    } else {
        t9 = $[17];
    }
    let t10;
    if ($[18] !== t1 || $[19] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
            className: "flex h-14 items-center justify-between border-b-2 border-black bg-white px-6",
            children: [
                t1,
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/header.tsx",
            lineNumber: 92,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[18] = t1;
        $[19] = t9;
        $[20] = t10;
    } else {
        t10 = $[20];
    }
    return t10;
};
_s(Header, "F6g17a21EspnwgW2UjDzCo8FlhU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$auth$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$org$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOrgStore"]
    ];
});
_c = Header;
function _temp(s) {
    return s.organization;
}
function _temp2(p) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
        value: p.id,
        children: p.full_name
    }, p.id, false, {
        fileName: "[project]/src/components/layout/header.tsx",
        lineNumber: 105,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_012acd22._.js.map