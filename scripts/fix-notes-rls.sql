-- ============================================================
-- Fix Notes RLS Policies
-- Run this in Supabase Dashboard → SQL Editor
-- ============================================================

-- 1. Drop ALL existing policies on notes tables
DO $$
DECLARE
  pol RECORD;
BEGIN
  FOR pol IN
    SELECT policyname, tablename
    FROM pg_policies
    WHERE schemaname = 'public'
      AND tablename IN ('note_spaces', 'note_space_members', 'note_folders', 'notes')
  LOOP
    EXECUTE format('DROP POLICY IF EXISTS %I ON %I', pol.policyname, pol.tablename);
  END LOOP;
END $$;

-- 2. Ensure helper function exists
CREATE OR REPLACE FUNCTION is_admin_or_owner()
RETURNS boolean
LANGUAGE sql
SECURITY DEFINER
STABLE
AS $$
  SELECT EXISTS (
    SELECT 1 FROM profiles
    WHERE id = auth.uid()
    AND role IN ('owner', 'admin')
  );
$$;

-- 3. Add unique constraint to prevent duplicate personal spaces
CREATE UNIQUE INDEX IF NOT EXISTS unique_personal_space_per_owner
  ON note_spaces (owner_id) WHERE type = 'personal';

-- 4. Enable realtime on notes tables (skip if already added)
DO $$
BEGIN
  ALTER PUBLICATION supabase_realtime ADD TABLE note_spaces;
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;
DO $$
BEGIN
  ALTER PUBLICATION supabase_realtime ADD TABLE notes;
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;
DO $$
BEGIN
  ALTER PUBLICATION supabase_realtime ADD TABLE note_folders;
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;
DO $$
BEGIN
  ALTER PUBLICATION supabase_realtime ADD TABLE note_space_members;
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;
DO $$
BEGIN
  ALTER PUBLICATION supabase_realtime ADD TABLE editor_settings;
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;

-- ============================================================
-- note_spaces policies
-- ============================================================

-- SELECT: see your personal spaces, shared spaces you're a member of, or all if admin/owner
CREATE POLICY note_spaces_select ON note_spaces FOR SELECT USING (
  owner_id = auth.uid()
  OR is_admin_or_owner()
  OR id IN (SELECT space_id FROM note_space_members WHERE user_id = auth.uid())
);

-- INSERT: anyone can create spaces
CREATE POLICY note_spaces_insert ON note_spaces FOR INSERT WITH CHECK (
  created_by = auth.uid()
);

-- UPDATE: owner of space, space member with owner role, or app admin/owner
CREATE POLICY note_spaces_update ON note_spaces FOR UPDATE USING (
  owner_id = auth.uid()
  OR is_admin_or_owner()
  OR id IN (SELECT space_id FROM note_space_members WHERE user_id = auth.uid() AND role = 'owner')
);

-- DELETE: owner of space or app admin/owner
CREATE POLICY note_spaces_delete ON note_spaces FOR DELETE USING (
  owner_id = auth.uid()
  OR is_admin_or_owner()
);

-- ============================================================
-- note_space_members policies
-- ============================================================

-- SELECT: see members of spaces you belong to, or all if admin/owner
CREATE POLICY note_space_members_select ON note_space_members FOR SELECT USING (
  is_admin_or_owner()
  OR user_id = auth.uid()
  OR space_id IN (SELECT space_id FROM note_space_members nsm WHERE nsm.user_id = auth.uid())
);

-- INSERT: space owners or app admin/owner
CREATE POLICY note_space_members_insert ON note_space_members FOR INSERT WITH CHECK (
  is_admin_or_owner()
  OR space_id IN (SELECT id FROM note_spaces WHERE created_by = auth.uid())
  OR space_id IN (SELECT nsm.space_id FROM note_space_members nsm WHERE nsm.user_id = auth.uid() AND nsm.role = 'owner')
);

-- UPDATE: space owners or app admin/owner
CREATE POLICY note_space_members_update ON note_space_members FOR UPDATE USING (
  is_admin_or_owner()
  OR space_id IN (SELECT nsm.space_id FROM note_space_members nsm WHERE nsm.user_id = auth.uid() AND nsm.role = 'owner')
);

-- DELETE: space owners or app admin/owner
CREATE POLICY note_space_members_delete ON note_space_members FOR DELETE USING (
  is_admin_or_owner()
  OR space_id IN (SELECT nsm.space_id FROM note_space_members nsm WHERE nsm.user_id = auth.uid() AND nsm.role = 'owner')
);

-- ============================================================
-- note_folders policies
-- ============================================================

-- SELECT: see folders in spaces you have access to
CREATE POLICY note_folders_select ON note_folders FOR SELECT USING (
  is_admin_or_owner()
  OR space_id IN (SELECT id FROM note_spaces WHERE owner_id = auth.uid())
  OR space_id IN (SELECT space_id FROM note_space_members WHERE user_id = auth.uid())
);

-- INSERT: create folders in spaces you have edit access to
CREATE POLICY note_folders_insert ON note_folders FOR INSERT WITH CHECK (
  created_by = auth.uid()
  AND (
    is_admin_or_owner()
    OR space_id IN (SELECT id FROM note_spaces WHERE owner_id = auth.uid())
    OR space_id IN (SELECT space_id FROM note_space_members WHERE user_id = auth.uid() AND role IN ('owner', 'editor'))
  )
);

-- DELETE: space owners or app admin/owner
CREATE POLICY note_folders_delete ON note_folders FOR DELETE USING (
  is_admin_or_owner()
  OR space_id IN (SELECT id FROM note_spaces WHERE owner_id = auth.uid())
  OR space_id IN (SELECT space_id FROM note_space_members WHERE user_id = auth.uid() AND role = 'owner')
);

-- ============================================================
-- notes policies
-- ============================================================

-- SELECT: see notes in spaces you have access to
CREATE POLICY notes_select ON notes FOR SELECT USING (
  is_admin_or_owner()
  OR space_id IN (SELECT id FROM note_spaces WHERE owner_id = auth.uid())
  OR space_id IN (SELECT space_id FROM note_space_members WHERE user_id = auth.uid())
);

-- INSERT: create notes in spaces you have edit access to
CREATE POLICY notes_insert ON notes FOR INSERT WITH CHECK (
  created_by = auth.uid()
  AND (
    is_admin_or_owner()
    OR space_id IN (SELECT id FROM note_spaces WHERE owner_id = auth.uid())
    OR space_id IN (SELECT space_id FROM note_space_members WHERE user_id = auth.uid() AND role IN ('owner', 'editor'))
  )
);

-- UPDATE: edit notes in spaces you have edit access to
CREATE POLICY notes_update ON notes FOR UPDATE USING (
  is_admin_or_owner()
  OR space_id IN (SELECT id FROM note_spaces WHERE owner_id = auth.uid())
  OR space_id IN (SELECT space_id FROM note_space_members WHERE user_id = auth.uid() AND role IN ('owner', 'editor'))
);

-- DELETE: space owners, note creator, or app admin/owner
CREATE POLICY notes_delete ON notes FOR DELETE USING (
  is_admin_or_owner()
  OR space_id IN (SELECT id FROM note_spaces WHERE owner_id = auth.uid())
  OR created_by = auth.uid()
  OR space_id IN (SELECT space_id FROM note_space_members WHERE user_id = auth.uid() AND role = 'owner')
);
