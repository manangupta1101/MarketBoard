/**
 * Creates the notes system tables in Supabase:
 * note_spaces, note_space_members, note_folders, notes
 * with indexes and RLS policies.
 */
const { Client } = require('pg');

const client = new Client({
  connectionString:
    'postgresql://postgres:qwo8KP6UjeSKBtsE@db.bumxqzozveghswvukmxn.supabase.co:5432/postgres',
});

const sql = `
-- Enums
DO $$ BEGIN
  CREATE TYPE note_space_type AS ENUM ('personal', 'shared');
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;

DO $$ BEGIN
  CREATE TYPE space_role AS ENUM ('owner', 'editor', 'viewer');
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;

-- note_spaces
CREATE TABLE IF NOT EXISTS note_spaces (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name        TEXT NOT NULL,
  type        note_space_type NOT NULL DEFAULT 'shared',
  description TEXT NOT NULL DEFAULT '',
  created_by  UUID NOT NULL REFERENCES profiles(id),
  owner_id    UUID REFERENCES profiles(id),
  icon        TEXT NOT NULL DEFAULT '📁',
  created_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- note_space_members
CREATE TABLE IF NOT EXISTS note_space_members (
  id        UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  space_id  UUID NOT NULL REFERENCES note_spaces(id) ON DELETE CASCADE,
  user_id   UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  role      space_role NOT NULL DEFAULT 'editor',
  added_at  TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE(space_id, user_id)
);

-- note_folders
CREATE TABLE IF NOT EXISTS note_folders (
  id               UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  space_id         UUID NOT NULL REFERENCES note_spaces(id) ON DELETE CASCADE,
  parent_folder_id UUID REFERENCES note_folders(id) ON DELETE CASCADE,
  name             TEXT NOT NULL,
  created_by       UUID NOT NULL REFERENCES profiles(id),
  icon             TEXT NOT NULL DEFAULT '📁',
  created_at       TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- notes
CREATE TABLE IF NOT EXISTS notes (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  space_id        UUID NOT NULL REFERENCES note_spaces(id) ON DELETE CASCADE,
  folder_id       UUID REFERENCES note_folders(id) ON DELETE SET NULL,
  parent_note_id  UUID REFERENCES notes(id) ON DELETE CASCADE,
  title           TEXT NOT NULL DEFAULT 'Untitled',
  content         TEXT NOT NULL DEFAULT '',
  created_by      UUID NOT NULL REFERENCES profiles(id),
  last_edited_by  UUID NOT NULL REFERENCES profiles(id),
  is_script       BOOLEAN NOT NULL DEFAULT false,
  tags            TEXT[] NOT NULL DEFAULT '{}',
  created_at      TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at      TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_note_spaces_created_by ON note_spaces(created_by);
CREATE INDEX IF NOT EXISTS idx_note_spaces_owner ON note_spaces(owner_id);
CREATE INDEX IF NOT EXISTS idx_note_space_members_space ON note_space_members(space_id);
CREATE INDEX IF NOT EXISTS idx_note_space_members_user ON note_space_members(user_id);
CREATE INDEX IF NOT EXISTS idx_note_folders_space ON note_folders(space_id);
CREATE INDEX IF NOT EXISTS idx_note_folders_parent ON note_folders(parent_folder_id);
CREATE INDEX IF NOT EXISTS idx_notes_space ON notes(space_id);
CREATE INDEX IF NOT EXISTS idx_notes_folder ON notes(folder_id);
CREATE INDEX IF NOT EXISTS idx_notes_parent ON notes(parent_note_id);
CREATE INDEX IF NOT EXISTS idx_notes_created_by ON notes(created_by);

-- RLS
ALTER TABLE note_spaces ENABLE ROW LEVEL SECURITY;
ALTER TABLE note_space_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE note_folders ENABLE ROW LEVEL SECURITY;
ALTER TABLE notes ENABLE ROW LEVEL SECURITY;

-- note_spaces policies
CREATE POLICY note_spaces_select ON note_spaces FOR SELECT USING (
  is_admin_or_owner()
  OR owner_id = auth.uid()
  OR id IN (SELECT space_id FROM note_space_members WHERE user_id = auth.uid())
);
CREATE POLICY note_spaces_insert ON note_spaces FOR INSERT WITH CHECK (
  created_by = auth.uid()
);
CREATE POLICY note_spaces_update ON note_spaces FOR UPDATE USING (
  is_admin_or_owner()
  OR owner_id = auth.uid()
  OR id IN (SELECT space_id FROM note_space_members WHERE user_id = auth.uid() AND role = 'owner')
);
CREATE POLICY note_spaces_delete ON note_spaces FOR DELETE USING (
  is_admin_or_owner()
  OR owner_id = auth.uid()
);

-- note_space_members policies
CREATE POLICY note_space_members_select ON note_space_members FOR SELECT USING (
  is_admin_or_owner()
  OR user_id = auth.uid()
  OR space_id IN (SELECT space_id FROM note_space_members nsm WHERE nsm.user_id = auth.uid())
);
CREATE POLICY note_space_members_insert ON note_space_members FOR INSERT WITH CHECK (
  is_admin_or_owner()
  OR space_id IN (SELECT nsm2.space_id FROM note_space_members nsm2 WHERE nsm2.user_id = auth.uid() AND nsm2.role = 'owner')
);
CREATE POLICY note_space_members_update ON note_space_members FOR UPDATE USING (
  is_admin_or_owner()
  OR space_id IN (SELECT nsm2.space_id FROM note_space_members nsm2 WHERE nsm2.user_id = auth.uid() AND nsm2.role = 'owner')
);
CREATE POLICY note_space_members_delete ON note_space_members FOR DELETE USING (
  is_admin_or_owner()
  OR space_id IN (SELECT nsm2.space_id FROM note_space_members nsm2 WHERE nsm2.user_id = auth.uid() AND nsm2.role = 'owner')
);

-- note_folders policies
CREATE POLICY note_folders_select ON note_folders FOR SELECT USING (
  is_admin_or_owner()
  OR space_id IN (SELECT id FROM note_spaces WHERE owner_id = auth.uid())
  OR space_id IN (SELECT space_id FROM note_space_members WHERE user_id = auth.uid())
);
CREATE POLICY note_folders_insert ON note_folders FOR INSERT WITH CHECK (
  created_by = auth.uid()
  AND (
    is_admin_or_owner()
    OR space_id IN (SELECT id FROM note_spaces WHERE owner_id = auth.uid())
    OR space_id IN (SELECT space_id FROM note_space_members WHERE user_id = auth.uid() AND role IN ('owner', 'editor'))
  )
);
CREATE POLICY note_folders_delete ON note_folders FOR DELETE USING (
  is_admin_or_owner()
  OR space_id IN (SELECT id FROM note_spaces WHERE owner_id = auth.uid())
  OR space_id IN (SELECT space_id FROM note_space_members WHERE user_id = auth.uid() AND role = 'owner')
);

-- notes policies
CREATE POLICY notes_select ON notes FOR SELECT USING (
  is_admin_or_owner()
  OR space_id IN (SELECT id FROM note_spaces WHERE owner_id = auth.uid())
  OR space_id IN (SELECT space_id FROM note_space_members WHERE user_id = auth.uid())
);
CREATE POLICY notes_insert ON notes FOR INSERT WITH CHECK (
  created_by = auth.uid()
  AND (
    is_admin_or_owner()
    OR space_id IN (SELECT id FROM note_spaces WHERE owner_id = auth.uid())
    OR space_id IN (SELECT space_id FROM note_space_members WHERE user_id = auth.uid() AND role IN ('owner', 'editor'))
  )
);
CREATE POLICY notes_update ON notes FOR UPDATE USING (
  is_admin_or_owner()
  OR space_id IN (SELECT id FROM note_spaces WHERE owner_id = auth.uid())
  OR space_id IN (SELECT space_id FROM note_space_members WHERE user_id = auth.uid() AND role IN ('owner', 'editor'))
);
CREATE POLICY notes_delete ON notes FOR DELETE USING (
  is_admin_or_owner()
  OR space_id IN (SELECT id FROM note_spaces WHERE owner_id = auth.uid())
  OR space_id IN (SELECT space_id FROM note_space_members WHERE user_id = auth.uid() AND role = 'owner')
  OR created_by = auth.uid()
);
`;

async function run() {
  await client.connect();
  await client.query(sql);
  console.log('Notes tables, indexes, and RLS policies created successfully!');
  await client.end();
}

run().catch((e) => {
  console.error('Migration failed:', e.message);
  process.exit(1);
});
