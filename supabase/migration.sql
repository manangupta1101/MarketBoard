-- ============================================
-- MARKETING TRACK BOARD — Full Database Schema
-- ============================================

-- ── Custom Enums ────────────────────────────────────────────────────────

CREATE TYPE app_role AS ENUM ('owner', 'admin', 'editor', 'member');
CREATE TYPE request_type AS ENUM ('design_graphics', 'video', 'ui_ux', 'writing', 'shooting', 'anchor');
CREATE TYPE request_status AS ENUM ('open', 'in_progress', 'review', 'closed', 'deleted');
CREATE TYPE request_priority AS ENUM ('urgent', 'high', 'medium', 'low');
CREATE TYPE resource_category AS ENUM ('important_links', 'important_assets', 'credentials');
CREATE TYPE editor_specialization AS ENUM ('design', 'video', 'ui_ux', 'writing', 'shooting', 'anchor', 'none');
CREATE TYPE availability_type AS ENUM ('unavailable', 'partial', 'overtime');
CREATE TYPE promotion_status AS ENUM ('pending', 'approved', 'rejected');
CREATE TYPE re_edit_status AS ENUM ('pending', 'approved', 'rejected');

-- ── Profiles ────────────────────────────────────────────────────────────
-- Linked 1:1 to auth.users via trigger

CREATE TABLE profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  role app_role NOT NULL DEFAULT 'member',
  avatar_url TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Auto-create profile on signup
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, full_name, email, role)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'full_name', ''),
    NEW.email,
    COALESCE((NEW.raw_user_meta_data->>'role')::app_role, 'member')
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION handle_new_user();

-- Auto-update updated_at
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER profiles_updated_at
  BEFORE UPDATE ON profiles
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- ── Creative Requests ───────────────────────────────────────────────────

CREATE TABLE creative_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT NOT NULL DEFAULT '',
  type request_type NOT NULL,
  priority request_priority NOT NULL DEFAULT 'medium',
  status request_status NOT NULL DEFAULT 'open',
  total_items INTEGER NOT NULL DEFAULT 1,
  due_date DATE,
  requester_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  assignee_id UUID REFERENCES profiles(id) ON DELETE SET NULL,
  team_lead_id UUID REFERENCES profiles(id) ON DELETE SET NULL,
  reference_links TEXT[] NOT NULL DEFAULT '{}',
  script_note_id TEXT,
  final_link TEXT,
  is_in_re_edit BOOLEAN NOT NULL DEFAULT FALSE,
  closed_at TIMESTAMPTZ,
  deleted_by_id UUID REFERENCES profiles(id) ON DELETE SET NULL,
  deleted_at TIMESTAMPTZ,
  deletion_reason TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_requests_status ON creative_requests(status);
CREATE INDEX idx_requests_requester ON creative_requests(requester_id);
CREATE INDEX idx_requests_assignee ON creative_requests(assignee_id);
CREATE INDEX idx_requests_type ON creative_requests(type);
CREATE INDEX idx_requests_created ON creative_requests(created_at DESC);

CREATE TRIGGER requests_updated_at
  BEFORE UPDATE ON creative_requests
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- ── Request Comments ────────────────────────────────────────────────────

CREATE TABLE request_comments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  request_id UUID NOT NULL REFERENCES creative_requests(id) ON DELETE CASCADE,
  author_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  content TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_comments_request ON request_comments(request_id);

-- ── Re-Edit Entries (completed re-edits) ────────────────────────────────

CREATE TABLE re_edit_entries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  request_id UUID NOT NULL REFERENCES creative_requests(id) ON DELETE CASCADE,
  deadline DATE NOT NULL,
  comment TEXT,
  submitted_at TIMESTAMPTZ,
  created_by_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_re_edits_request ON re_edit_entries(request_id);

-- ── Re-Edit Requests (pending approval) ─────────────────────────────────

CREATE TABLE re_edit_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  request_id UUID NOT NULL REFERENCES creative_requests(id) ON DELETE CASCADE,
  requested_by_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  requested_date DATE NOT NULL DEFAULT CURRENT_DATE,
  comment TEXT,
  status re_edit_status NOT NULL DEFAULT 'pending',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_re_edit_requests_request ON re_edit_requests(request_id);

-- ── Resources ───────────────────────────────────────────────────────────

CREATE TABLE resources (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT NOT NULL DEFAULT '',
  category resource_category NOT NULL,
  url TEXT,
  file_name TEXT,
  file_size INTEGER,
  username TEXT,
  password TEXT,
  added_by_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TRIGGER resources_updated_at
  BEFORE UPDATE ON resources
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- ── Editor Settings (specializations) ───────────────────────────────────

CREATE TABLE editor_settings (
  editor_id UUID PRIMARY KEY REFERENCES profiles(id) ON DELETE CASCADE,
  p1 editor_specialization NOT NULL DEFAULT 'none',
  p2 editor_specialization NOT NULL DEFAULT 'none',
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TRIGGER editor_settings_updated_at
  BEFORE UPDATE ON editor_settings
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- ── Availability Entries ────────────────────────────────────────────────

CREATE TABLE availability_entries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  editor_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  type availability_type NOT NULL,
  reason TEXT NOT NULL DEFAULT '',
  created_by UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  CONSTRAINT valid_date_range CHECK (end_date >= start_date)
);

CREATE INDEX idx_availability_editor ON availability_entries(editor_id);
CREATE INDEX idx_availability_dates ON availability_entries(start_date, end_date);

-- ── Admin Promotion Requests ────────────────────────────────────────────

CREATE TABLE admin_promotion_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  requester_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  target_user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  status promotion_status NOT NULL DEFAULT 'pending',
  reviewed_by_id UUID REFERENCES profiles(id) ON DELETE SET NULL,
  reviewed_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_promotions_target ON admin_promotion_requests(target_user_id);
CREATE INDEX idx_promotions_status ON admin_promotion_requests(status);

-- ── Removed Emails (blocked from re-registration without OTP) ───────────

CREATE TABLE removed_emails (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL UNIQUE,
  removed_by_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  re_registration_otp TEXT NOT NULL,
  removed_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- ── Member Activity Tracking ────────────────────────────────────────────

CREATE TABLE member_activity (
  member_id UUID PRIMARY KEY REFERENCES profiles(id) ON DELETE CASCADE,
  last_task_assigned_at TIMESTAMPTZ,
  preserve_metrics BOOLEAN NOT NULL DEFAULT FALSE,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TRIGGER member_activity_updated_at
  BEFORE UPDATE ON member_activity
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- ── App Settings (credentials password, etc.) ───────────────────────────

CREATE TABLE app_settings (
  key TEXT PRIMARY KEY,
  value TEXT NOT NULL,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

INSERT INTO app_settings (key, value) VALUES ('credentials_password', 'creative@2026');

-- ============================================
-- ROW LEVEL SECURITY
-- ============================================

ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE creative_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE request_comments ENABLE ROW LEVEL SECURITY;
ALTER TABLE re_edit_entries ENABLE ROW LEVEL SECURITY;
ALTER TABLE re_edit_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE resources ENABLE ROW LEVEL SECURITY;
ALTER TABLE editor_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE availability_entries ENABLE ROW LEVEL SECURITY;
ALTER TABLE admin_promotion_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE removed_emails ENABLE ROW LEVEL SECURITY;
ALTER TABLE member_activity ENABLE ROW LEVEL SECURITY;
ALTER TABLE app_settings ENABLE ROW LEVEL SECURITY;

-- ── Helper: get current user's role ─────────────────────────────────────

CREATE OR REPLACE FUNCTION get_my_role()
RETURNS app_role AS $$
  SELECT role FROM profiles WHERE id = auth.uid();
$$ LANGUAGE sql SECURITY DEFINER STABLE;

-- ── Helper: check if current user is owner or admin ─────────────────────

CREATE OR REPLACE FUNCTION is_admin_or_owner()
RETURNS BOOLEAN AS $$
  SELECT EXISTS (
    SELECT 1 FROM profiles
    WHERE id = auth.uid()
    AND role IN ('owner', 'admin')
  );
$$ LANGUAGE sql SECURITY DEFINER STABLE;

-- ── Profiles Policies ───────────────────────────────────────────────────

-- Everyone can read all profiles (needed for team display)
CREATE POLICY "profiles_select" ON profiles
  FOR SELECT USING (true);

-- Users can update their own profile (name, avatar)
CREATE POLICY "profiles_update_own" ON profiles
  FOR UPDATE USING (id = auth.uid())
  WITH CHECK (id = auth.uid());

-- Owners/admins can update any profile (role changes)
CREATE POLICY "profiles_update_admin" ON profiles
  FOR UPDATE USING (is_admin_or_owner());

-- ── Creative Requests Policies ──────────────────────────────────────────

-- Owners/admins see all requests; editors see assigned; members see own + assigned
CREATE POLICY "requests_select" ON creative_requests
  FOR SELECT USING (
    is_admin_or_owner()
    OR assignee_id = auth.uid()
    OR requester_id = auth.uid()
  );

-- Any authenticated user can create requests
CREATE POLICY "requests_insert" ON creative_requests
  FOR INSERT WITH CHECK (auth.uid() IS NOT NULL AND requester_id = auth.uid());

-- Owners/admins can update any request; assignees can update their assigned requests
CREATE POLICY "requests_update" ON creative_requests
  FOR UPDATE USING (
    is_admin_or_owner()
    OR assignee_id = auth.uid()
    OR requester_id = auth.uid()
  );

-- Only owners/admins can delete (soft delete via status)
CREATE POLICY "requests_delete" ON creative_requests
  FOR DELETE USING (is_admin_or_owner());

-- ── Request Comments Policies ───────────────────────────────────────────

-- Visible if user can see the parent request
CREATE POLICY "comments_select" ON request_comments
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM creative_requests r
      WHERE r.id = request_id
      AND (
        is_admin_or_owner()
        OR r.assignee_id = auth.uid()
        OR r.requester_id = auth.uid()
      )
    )
  );

-- Any authenticated user can add comments to requests they can see
CREATE POLICY "comments_insert" ON request_comments
  FOR INSERT WITH CHECK (
    author_id = auth.uid()
    AND EXISTS (
      SELECT 1 FROM creative_requests r
      WHERE r.id = request_id
      AND (
        is_admin_or_owner()
        OR r.assignee_id = auth.uid()
        OR r.requester_id = auth.uid()
      )
    )
  );

-- ── Re-Edit Entries Policies ────────────────────────────────────────────

CREATE POLICY "re_edit_entries_select" ON re_edit_entries
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM creative_requests r
      WHERE r.id = request_id
      AND (is_admin_or_owner() OR r.assignee_id = auth.uid() OR r.requester_id = auth.uid())
    )
  );

CREATE POLICY "re_edit_entries_insert" ON re_edit_entries
  FOR INSERT WITH CHECK (is_admin_or_owner() AND created_by_id = auth.uid());

-- ── Re-Edit Requests Policies ───────────────────────────────────────────

CREATE POLICY "re_edit_requests_select" ON re_edit_requests
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM creative_requests r
      WHERE r.id = request_id
      AND (is_admin_or_owner() OR r.assignee_id = auth.uid() OR r.requester_id = auth.uid())
    )
  );

CREATE POLICY "re_edit_requests_insert" ON re_edit_requests
  FOR INSERT WITH CHECK (requested_by_id = auth.uid());

CREATE POLICY "re_edit_requests_update" ON re_edit_requests
  FOR UPDATE USING (is_admin_or_owner());

-- ── Resources Policies ──────────────────────────────────────────────────

-- All authenticated users can read resources
CREATE POLICY "resources_select" ON resources
  FOR SELECT USING (auth.uid() IS NOT NULL);

-- Only owners/admins can manage resources
CREATE POLICY "resources_insert" ON resources
  FOR INSERT WITH CHECK (is_admin_or_owner() AND added_by_id = auth.uid());

CREATE POLICY "resources_update" ON resources
  FOR UPDATE USING (is_admin_or_owner());

CREATE POLICY "resources_delete" ON resources
  FOR DELETE USING (is_admin_or_owner());

-- ── Editor Settings Policies ────────────────────────────────────────────

CREATE POLICY "editor_settings_select" ON editor_settings
  FOR SELECT USING (auth.uid() IS NOT NULL);

CREATE POLICY "editor_settings_upsert" ON editor_settings
  FOR INSERT WITH CHECK (is_admin_or_owner());

CREATE POLICY "editor_settings_update" ON editor_settings
  FOR UPDATE USING (is_admin_or_owner());

-- ── Availability Entries Policies ───────────────────────────────────────

CREATE POLICY "availability_select" ON availability_entries
  FOR SELECT USING (auth.uid() IS NOT NULL);

CREATE POLICY "availability_insert" ON availability_entries
  FOR INSERT WITH CHECK (is_admin_or_owner() AND created_by = auth.uid());

CREATE POLICY "availability_update" ON availability_entries
  FOR UPDATE USING (is_admin_or_owner());

CREATE POLICY "availability_delete" ON availability_entries
  FOR DELETE USING (is_admin_or_owner());

-- ── Admin Promotion Requests Policies ───────────────────────────────────

-- Owners can see all; admins can see their own requests
CREATE POLICY "promotions_select" ON admin_promotion_requests
  FOR SELECT USING (
    get_my_role() = 'owner'
    OR requester_id = auth.uid()
    OR target_user_id = auth.uid()
  );

-- Only admins/owners can create promotion requests
CREATE POLICY "promotions_insert" ON admin_promotion_requests
  FOR INSERT WITH CHECK (is_admin_or_owner() AND requester_id = auth.uid());

-- Only owners can approve/reject
CREATE POLICY "promotions_update" ON admin_promotion_requests
  FOR UPDATE USING (get_my_role() = 'owner');

-- ── Removed Emails Policies ────────────────────────────────────────────

CREATE POLICY "removed_emails_select" ON removed_emails
  FOR SELECT USING (is_admin_or_owner());

CREATE POLICY "removed_emails_insert" ON removed_emails
  FOR INSERT WITH CHECK (is_admin_or_owner());

CREATE POLICY "removed_emails_delete" ON removed_emails
  FOR DELETE USING (is_admin_or_owner());

-- ── Member Activity Policies ────────────────────────────────────────────

CREATE POLICY "activity_select" ON member_activity
  FOR SELECT USING (auth.uid() IS NOT NULL);

CREATE POLICY "activity_upsert" ON member_activity
  FOR INSERT WITH CHECK (is_admin_or_owner());

CREATE POLICY "activity_update" ON member_activity
  FOR UPDATE USING (is_admin_or_owner());

-- ── App Settings Policies ───────────────────────────────────────────────

-- All authenticated users can read settings
CREATE POLICY "settings_select" ON app_settings
  FOR SELECT USING (auth.uid() IS NOT NULL);

-- Only owners can update settings
CREATE POLICY "settings_update" ON app_settings
  FOR UPDATE USING (get_my_role() = 'owner');
