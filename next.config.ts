import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  transpilePackages: [
    '@blocknote/core',
    '@blocknote/react',
    '@blocknote/mantine',
    '@mantine/core',
    '@mantine/hooks',
    '@tiptap/core',
    '@tiptap/pm',
    '@tiptap/react',
    '@tiptap/extension-bold',
    '@tiptap/extension-code',
    '@tiptap/extension-italic',
    '@tiptap/extension-link',
    '@tiptap/extension-strike',
    '@tiptap/extension-text',
    '@tiptap/extension-underline',
    '@tiptap/extension-paragraph',
    '@tiptap/extension-horizontal-rule',
    '@tiptap/extensions',
  ],
};

export default nextConfig;
