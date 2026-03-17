/**
 * Safety net: if @tiptap/core dist files are missing (e.g. a future
 * npm install pulls a source-only version), warn the developer.
 * With pinned 3.13.0 this should not be needed.
 */
const fs = require('fs');
const path = require('path');

const distIndex = path.join(
  __dirname, '..', 'node_modules', '@tiptap', 'core', 'dist', 'index.js'
);

if (!fs.existsSync(distIndex)) {
  console.warn(
    '\n⚠️  @tiptap/core is missing dist/index.js — you may have a source-only version.',
    '\n   Pin @tiptap/* packages to 3.13.0 (last version with compiled dist).\n'
  );
}
