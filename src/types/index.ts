// ============================================
// ENUMS (mirroring future Supabase enums)
// ============================================

export const ORG_ROLES = ['owner', 'admin', 'manager', 'member', 'viewer'] as const;
export type OrgRole = (typeof ORG_ROLES)[number];

export const CAMPAIGN_TYPES = ['paid_ads', 'content', 'social', 'email', 'seo', 'influencer', 'event', 'other'] as const;
export type CampaignType = (typeof CAMPAIGN_TYPES)[number];

export const CAMPAIGN_STATUSES = ['draft', 'planning', 'active', 'paused', 'completed', 'archived'] as const;
export type CampaignStatus = (typeof CAMPAIGN_STATUSES)[number];

export const TASK_PRIORITIES = ['urgent', 'high', 'medium', 'low'] as const;
export type TaskPriority = (typeof TASK_PRIORITIES)[number];

export const TASK_REQUEST_STATUSES = ['pending', 'approved', 'rejected'] as const;
export type TaskRequestStatus = (typeof TASK_REQUEST_STATUSES)[number];

export const COST_CATEGORIES = ['ad_spend', 'content_creation', 'team_hours', 'tools_software', 'influencer_fees', 'event_costs', 'agency_fees', 'other'] as const;
export type CostCategory = (typeof COST_CATEGORIES)[number];

export const TOUCHPOINT_TYPES = ['ad_click', 'ad_impression', 'organic_search', 'social_organic', 'social_paid', 'email_open', 'email_click', 'referral', 'direct', 'content_view', 'webinar', 'event', 'influencer', 'other'] as const;
export type TouchpointType = (typeof TOUCHPOINT_TYPES)[number];

export const CONVERSION_TYPES = ['purchase', 'signup', 'trial_start', 'demo_request', 'lead', 'download', 'subscription', 'other'] as const;
export type ConversionType = (typeof CONVERSION_TYPES)[number];

export const ATTRIBUTION_MODELS = ['first_touch', 'last_touch', 'linear', 'time_decay', 'u_shaped', 'w_shaped'] as const;
export type AttributionModel = (typeof ATTRIBUTION_MODELS)[number];

export const NOTIFICATION_TYPES = ['task_assigned', 'task_request', 'request_approved', 'request_rejected', 'campaign_status', 'budget_alert', 'mention', 'comment'] as const;
export type NotificationType = (typeof NOTIFICATION_TYPES)[number];

// ============================================
// CORE MODELS
// ============================================

export interface Profile {
  id: string;
  full_name: string;
  email: string;
  avatar_url: string | null;
  job_title: string | null;
  timezone: string;
  notification_preferences: {
    email: boolean;
    in_app: boolean;
  };
  created_at: string;
  updated_at: string;
}

export interface Organization {
  id: string;
  name: string;
  slug: string;
  logo_url: string | null;
  owner_id: string;
  settings: Record<string, unknown>;
  created_at: string;
  updated_at: string;
}

export interface OrganizationMember {
  id: string;
  organization_id: string;
  user_id: string;
  role: OrgRole;
  invited_by: string | null;
  invited_at: string | null;
  joined_at: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface Team {
  id: string;
  organization_id: string;
  name: string;
  description: string | null;
  color: string | null;
  created_by: string;
  is_archived: boolean;
  created_at: string;
  updated_at: string;
}

export interface TeamMember {
  id: string;
  team_id: string;
  user_id: string;
  role: OrgRole;
  created_at: string;
}

export interface Invitation {
  id: string;
  organization_id: string;
  email: string;
  role: OrgRole;
  token: string;
  invited_by: string;
  accepted_at: string | null;
  expires_at: string;
  created_at: string;
}

// ============================================
// CAMPAIGNS
// ============================================

export interface Campaign {
  id: string;
  organization_id: string;
  team_id: string | null;
  name: string;
  description: string | null;
  campaign_type: CampaignType;
  status: CampaignStatus;
  planned_start_date: string | null;
  planned_end_date: string | null;
  actual_start_date: string | null;
  actual_end_date: string | null;
  target_audience: string | null;
  platforms: string[];
  tags: string[];
  created_by: string;
  created_at: string;
  updated_at: string;
}

export interface CampaignStatusHistory {
  id: string;
  campaign_id: string;
  from_status: CampaignStatus | null;
  to_status: CampaignStatus;
  changed_by: string;
  reason: string | null;
  created_at: string;
}

export interface CampaignCost {
  id: string;
  campaign_id: string;
  category: CostCategory;
  description: string | null;
  amount: number;
  currency: string;
  incurred_at: string;
  receipt_url: string | null;
  entered_by: string;
  created_at: string;
}

export interface CampaignBudget {
  id: string;
  campaign_id: string;
  category: CostCategory;
  planned_amount: number;
  currency: string;
  notes: string | null;
  created_at: string;
  updated_at: string;
}

export interface CampaignMetrics {
  id: string;
  campaign_id: string;
  date: string;
  impressions: number | null;
  clicks: number | null;
  conversions: number | null;
  revenue: number | null;
  spend: number | null;
  open_rate: number | null;
  bounce_rate: number | null;
  ctr: number | null;
  conversion_rate: number | null;
  cpc: number | null;
  cpm: number | null;
  roas: number | null;
  created_at: string;
}

// ============================================
// TASKS / KANBAN
// ============================================

export interface Board {
  id: string;
  organization_id: string;
  team_id: string | null;
  name: string;
  description: string | null;
  is_default: boolean;
  created_by: string;
  created_at: string;
  updated_at: string;
}

export interface BoardColumn {
  id: string;
  board_id: string;
  name: string;
  position: number;
  color: string | null;
  wip_limit: number | null;
  is_done_column: boolean;
  created_at: string;
}

export interface Task {
  id: string;
  organization_id: string;
  board_id: string;
  column_id: string;
  campaign_id: string | null;
  title: string;
  description: string | null;
  priority: TaskPriority;
  position: number;
  assigned_to: string | null;
  created_by: string;
  due_date: string | null;
  estimated_hours: number | null;
  actual_hours: number | null;
  completed_at: string | null;
  request_status: TaskRequestStatus;
  requested_by: string | null;
  approved_by: string | null;
  is_deleted: boolean;
  created_at: string;
  updated_at: string;
}

export interface TaskComment {
  id: string;
  task_id: string;
  user_id: string;
  content: string;
  created_at: string;
  updated_at: string;
}

export interface TaskActivity {
  id: string;
  task_id: string;
  user_id: string;
  action: string;
  old_value: string | null;
  new_value: string | null;
  created_at: string;
}

// ============================================
// ATTRIBUTION
// ============================================

export interface Customer {
  id: string;
  organization_id: string;
  external_id: string | null;
  email: string | null;
  name: string | null;
  company: string | null;
  metadata: Record<string, unknown>;
  first_seen_at: string | null;
  converted_at: string | null;
  lifetime_value: number;
  created_at: string;
  updated_at: string;
}

export interface Touchpoint {
  id: string;
  organization_id: string;
  customer_id: string;
  campaign_id: string | null;
  touchpoint_type: TouchpointType;
  channel: string | null;
  source: string | null;
  medium: string | null;
  content: string | null;
  metadata: Record<string, unknown>;
  occurred_at: string;
  created_at: string;
}

export interface Conversion {
  id: string;
  organization_id: string;
  customer_id: string;
  conversion_type: ConversionType;
  value: number | null;
  occurred_at: string;
  metadata: Record<string, unknown>;
  created_at: string;
}

export interface AttributionResult {
  id: string;
  organization_id: string;
  conversion_id: string;
  campaign_id: string | null;
  touchpoint_id: string | null;
  model: AttributionModel;
  attributed_value: number;
  weight: number;
  confidence_score: number;
  created_at: string;
}

// ============================================
// SYSTEM
// ============================================

export interface AppNotification {
  id: string;
  user_id: string;
  organization_id: string;
  notification_type: NotificationType;
  title: string;
  body: string | null;
  link: string | null;
  is_read: boolean;
  read_at: string | null;
  created_at: string;
}

export interface RevenueEntry {
  id: string;
  organization_id: string;
  customer_id: string | null;
  conversion_id: string | null;
  amount: number;
  currency: string;
  description: string | null;
  occurred_at: string;
  metadata: Record<string, unknown>;
  created_at: string;
}

// ============================================
// CREATIVE REQUESTS
// ============================================

export const REQUEST_TYPES = ['design_graphics', 'video', 'ui_ux', 'writing', 'shooting', 'anchor'] as const;
export type RequestType = (typeof REQUEST_TYPES)[number];

export const REQUEST_STATUSES = ['open', 'in_progress', 'review', 'closed', 'deleted'] as const;
export type RequestStatus = (typeof REQUEST_STATUSES)[number];

export const REQUEST_PRIORITIES = ['urgent', 'high', 'medium', 'low'] as const;
export type RequestPriority = (typeof REQUEST_PRIORITIES)[number];

export const APP_ROLES = ['owner', 'admin', 'editor', 'member'] as const;
export type AppRole = (typeof APP_ROLES)[number];

export const MAX_OWNERS = 3;

export interface AdminPromotionRequest {
  id: string;
  requesterId: string;
  requesterName: string;
  targetUserId: string;
  targetUserName: string;
  status: 'pending' | 'approved' | 'rejected';
  reviewedById: string | null;
  reviewedByName: string | null;
  createdAt: string;
  reviewedAt: string | null;
}

export interface TeamMemberProfile {
  id: string;
  name: string;
  email: string;
  role: AppRole;
}

export interface RequestComment {
  id: string;
  authorId: string;
  authorName: string;
  content: string;
  createdAt: string;
}

export interface CreativeRequest {
  id: string;
  title: string;
  description: string;
  type: RequestType;
  priority: RequestPriority;
  status: RequestStatus;
  totalItems: number;
  dueDate: string | null;
  requesterId: string;
  requesterName: string;
  requesterEmail: string;
  assigneeId: string | null;
  assigneeName: string | null;
  teamLeadId: string | null;
  teamLeadName: string | null;
  teamLeadEmail: string | null;
  referenceLinks: string[];
  finalLink: string | null;
  comments: RequestComment[];
  createdAt: string;
  deletedById: string | null;
  deletedByName: string | null;
  deletedAt: string | null;
  deletionReason: string | null;
}

export const REQUEST_STATUS_LABELS: Record<RequestStatus, string> = {
  open: 'Open',
  in_progress: 'In Progress',
  review: 'Review',
  closed: 'Closed',
  deleted: 'Deleted',
};

export const REQUEST_STATUS_ORDER: RequestStatus[] = ['open', 'in_progress', 'review', 'closed'];
export const ALL_STATUS_ORDER: RequestStatus[] = ['open', 'in_progress', 'review', 'closed', 'deleted'];

export const REQUEST_TYPE_LABELS: Record<RequestType, string> = {
  design_graphics: 'Design/Graphics',
  video: 'Video',
  ui_ux: 'UI/UX',
  writing: 'Writing',
  shooting: 'Shooting',
  anchor: 'Anchor',
};

export const REQUEST_TYPE_ICONS: Record<RequestType, string> = {
  design_graphics: '🎨',
  video: '🎬',
  ui_ux: '🖥️',
  writing: '✍️',
  shooting: '📷',
  anchor: '🎙️',
};

export const PRIORITY_CONFIG: Record<RequestPriority, { label: string; color: 'red' | 'yellow' | 'blue' | 'gray' }> = {
  urgent: { label: 'urgent', color: 'red' },
  high: { label: 'high', color: 'yellow' },
  medium: { label: 'medium', color: 'blue' },
  low: { label: 'low', color: 'gray' },
};

// ============================================
// RESOURCES
// ============================================

export const RESOURCE_CATEGORIES = ['important_links', 'important_assets', 'credentials'] as const;
export type ResourceCategory = (typeof RESOURCE_CATEGORIES)[number];

export const RESOURCE_CATEGORY_LABELS: Record<ResourceCategory, string> = {
  important_links: 'Important Links',
  important_assets: 'Important Assets',
  credentials: 'Credentials',
};

export interface Resource {
  id: string;
  title: string;
  description: string;
  category: ResourceCategory;
  url: string | null;
  fileName: string | null;
  fileSize: number | null;
  username: string | null;
  password: string | null;
  addedById: string;
  addedByName: string;
  createdAt: string;
  updatedAt: string;
}

// ============================================
// EDITOR SPECIALIZATIONS
// ============================================

export const EDITOR_SPECIALIZATIONS = ['design', 'video', 'ui_ux', 'writing', 'shooting', 'anchor', 'none'] as const;
export type EditorSpecialization = (typeof EDITOR_SPECIALIZATIONS)[number];

export const SPECIALIZATION_LABELS: Record<EditorSpecialization, string> = {
  design: 'Design',
  video: 'Video',
  ui_ux: 'UI/UX',
  writing: 'Writing',
  shooting: 'Shooting',
  anchor: 'Anchor',
  none: 'None',
};

export const SPECIALIZATION_ICONS: Record<EditorSpecialization, string> = {
  design: '🎨',
  video: '🎬',
  ui_ux: '🖥️',
  writing: '✍️',
  shooting: '📷',
  anchor: '🎙️',
  none: '',
};

/** Maps P1 specialization → role title */
export const SPECIALIZATION_ROLE_TITLES: Record<EditorSpecialization, string> = {
  design: 'Graphic Designer',
  video: 'Video Editor',
  ui_ux: 'UI/UX Designer',
  writing: 'Writer',
  shooting: 'Camera Operator',
  anchor: 'Anchor',
  none: 'Unassigned',
};

export interface EditorSettings {
  editorId: string;
  p1: EditorSpecialization;
  p2: EditorSpecialization;
}

/** Summary card category for the stats section */
export type EditorCategoryKey = 'designers' | 'video_editors' | 'ui_ux_designers' | 'writers' | 'camera_operators' | 'anchors';

export const EDITOR_CATEGORY_CONFIG: Record<EditorCategoryKey, { label: string; p1Value: EditorSpecialization }> = {
  designers: { label: 'Total Designers', p1Value: 'design' },
  video_editors: { label: 'Total Video Editors', p1Value: 'video' },
  ui_ux_designers: { label: 'Total UI/UX Designers', p1Value: 'ui_ux' },
  writers: { label: 'Total Writers', p1Value: 'writing' },
  camera_operators: { label: 'Total Camera', p1Value: 'shooting' },
  anchors: { label: 'Total Anchors', p1Value: 'anchor' },
};

// ============================================
// EDITOR AVAILABILITY
// ============================================

export const AVAILABILITY_TYPES = ['unavailable', 'partial', 'overtime'] as const;
export type AvailabilityType = (typeof AVAILABILITY_TYPES)[number];

export const AVAILABILITY_TYPE_LABELS: Record<AvailabilityType, string> = {
  unavailable: 'Unavailable (Leave/Vacation)',
  partial: 'Partial Availability',
  overtime: 'Available for Overtime',
};

export const AVAILABILITY_TYPE_COLORS: Record<AvailabilityType, { bg: string; border: string; text: string; dot: string }> = {
  unavailable: { bg: 'bg-red-50', border: 'border-red-200', text: 'text-red-700', dot: 'bg-red-400' },
  partial: { bg: 'bg-amber-50', border: 'border-amber-200', text: 'text-amber-700', dot: 'bg-amber-400' },
  overtime: { bg: 'bg-emerald-50', border: 'border-emerald-200', text: 'text-emerald-700', dot: 'bg-emerald-400' },
};

export interface AvailabilityEntry {
  id: string;
  editorId: string;
  startDate: string; // YYYY-MM-DD
  endDate: string;   // YYYY-MM-DD
  type: AvailabilityType;
  reason: string;
  createdBy: string;
  createdAt: string;
}

// ============================================
// UI / DERIVED TYPES
// ============================================

export interface ProfileWithRole extends Profile {
  role: OrgRole;
  team_ids: string[];
}

export interface TaskWithAssignee extends Task {
  assignee: Profile | null;
  creator: Profile;
  campaign_name: string | null;
}

export interface CampaignWithMetrics extends Campaign {
  total_budget: number;
  total_spent: number;
  task_count: number;
  team_name: string | null;
}

export interface ActivityFeedItem {
  id: string;
  type: 'task_created' | 'task_moved' | 'task_completed' | 'campaign_created' | 'campaign_status_changed' | 'member_joined' | 'cost_added' | 'comment_added';
  actor: Profile;
  description: string;
  entity_id: string;
  entity_type: 'task' | 'campaign' | 'team' | 'member';
  metadata: Record<string, unknown>;
  created_at: string;
}
