# Supabase Integration Plan

Quick reference for what needs to be set up in Supabase. Types are already defined in `src/types/index.ts`.

---

## Auth

| Feature | Supabase Service | Notes |
|---------|-----------------|-------|
| Email/password signup | Auth | Default provider |
| Login / logout | Auth | Session via `supabase.auth.signInWithPassword()` |
| Password reset | Auth | `supabase.auth.resetPasswordForEmail()` → `/reset-password` page handles token |
| Accept invite | Auth + Edge Function | Invite link → `/accept-invite` validates token, creates account, adds to org |
| OAuth (Google) | Auth | Optional — add later if needed |
| Session management | Auth | Auto-refresh tokens, `onAuthStateChange` listener |

## Tables (21 total)

### Core (create first — auth pages depend on these)
| Table | Key columns | RLS |
|-------|-------------|-----|
| `profiles` | id (= auth.uid), full_name, email, avatar_url, job_title, timezone | Users read own + org members; update own only |
| `organizations` | id, name, slug, owner_id, settings | Members read; owner/admin update |
| `organization_members` | org_id, user_id, role (enum), invited_by, joined_at | Members read own org; admin+ manage |

### Teams & Campaigns (Phase 2)
| Table | Key columns |
|-------|-------------|
| `teams` | org_id, name, description, created_by |
| `team_members` | team_id, user_id, role |
| `campaigns` | org_id, team_id, name, type (enum), status (enum), dates, platforms[], tags[] |
| `campaign_status_history` | campaign_id, from_status, to_status, changed_by, reason |
| `campaign_costs` | campaign_id, category (enum), amount, currency |

### Kanban / Tasks (Phase 3)
| Table | Key columns |
|-------|-------------|
| `boards` | org_id, team_id, name, is_default |
| `board_columns` | board_id, name, position, color, wip_limit, is_done_column |
| `tasks` | board_id, column_id, campaign_id, title, priority (enum), position, assigned_to, request_status |
| `task_comments` | task_id, user_id, content |
| `task_attachments` | task_id, file_url, file_name, file_size |
| `task_activity_log` | task_id, user_id, action, old_value, new_value |

### Creative Requests (Phase 3 — alongside Kanban)
| Table | Key columns |
|-------|-------------|
| `creative_requests` | id, org_id, title, description, type (enum: `design_graphics`, `video`, `ui_ux`, `carousel`, `static`, `story`, `reel`, `post`), priority (enum), status (enum: `open`, `in_progress`, `review`, `closed`), total_items (int, default 1), due_date (timestamptz, nullable), requester_id (FK profiles), requester_name, requester_email, assignee_id (FK profiles, nullable), assignee_name, team_lead_id (FK profiles, nullable), team_lead_name, team_lead_email, reference_links (text[]), created_at |
| `request_comments` | id, request_id (FK creative_requests), author_id (FK profiles), author_name, content, created_at |

> **RLS**: Members read own org's requests. Requester or admin+ can update. Anyone in org can comment.
> **Realtime**: Subscribe to `creative_requests` for live board updates (status/assignee changes).

### Analytics & Attribution (Phase 4)
| Table | Key columns |
|-------|-------------|
| `campaign_metrics` | campaign_id, date, impressions, clicks, conversions, spend, revenue |
| `customers` | org_id, external_id, email, lifetime_value |
| `touchpoints` | customer_id, campaign_id, type (enum), channel, source, medium |
| `conversions` | customer_id, type (enum), value |
| `attribution_results` | conversion_id, campaign_id, model (enum), attributed_value, weight |

### System (Phase 5)
| Table | Key columns |
|-------|-------------|
| `notifications` | user_id, org_id, type (enum), title, body, link, is_read |
| `revenue_entries` | org_id, customer_id, conversion_id, amount, currency |

## Enums (create as Postgres enums)

`org_role`, `campaign_type`, `campaign_status`, `task_priority`, `task_request_status`, `cost_category`, `touchpoint_type`, `conversion_type`, `attribution_model`, `notification_type`, `request_type` (`design_graphics`, `video`, `ui_ux`, `carousel`, `static`, `story`, `reel`, `post`), `request_status` (`open`, `in_progress`, `review`, `closed`), `request_priority` (`urgent`, `high`, `medium`, `low`)

## RLS Rules (apply to every table)

- All tables filtered by `organization_id` — users only see their org's data
- `profiles`: read own + same-org members; update own only
- `tasks`: member+ can create; assigned user or admin+ can update
- `campaigns`: manager+ can create/update; member+ can read
- `organization_members`: admin+ can invite/remove; owner can change roles
- Service role key: **server-side only**, never exposed to client

## Realtime Subscriptions

- `tasks` — board updates (column changes, position changes)
- `notifications` — real-time notification bell
- `campaign_status_history` — live status changes on campaign cards

## Storage Buckets

| Bucket | Purpose | Access |
|--------|---------|--------|
| `avatars` | Profile photos | Public read, authenticated upload own |
| `attachments` | Task file attachments | Org members only |
| `org-logos` | Organization logos | Public read, admin+ upload |

## Edge Functions (if needed)

- `invite-member` — sends invite email, creates pending org_member row
- `process-attribution` — runs attribution model calculations (CPU-heavy)

---

## Setup Order

1. **Now**: Auth + `profiles` + `organizations` + `organization_members` (auth pages need these)
2. **Phase 2**: Teams, campaigns, costs
3. **Phase 3**: Boards, columns, tasks, comments, attachments, activity log + `creative_requests`, `request_comments`
4. **Phase 4**: Metrics, customers, touchpoints, conversions, attribution
5. **Phase 5**: Notifications, revenue entries, realtime, storage
