import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mdx from '@mdx-js/rollup'
import remarkGfm from 'remark-gfm'
import remarkFrontmatter from 'remark-frontmatter'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'
import rehypeHighlight from 'rehype-highlight'
import fs from 'node:fs'
import path from 'node:path'

// In dev, Vite's SPA fallback serves the React app for directory paths like
// "/blog/git-from-the-inside-out/", hiding the static index.html that lives in
// public/. This middleware rewrites a trailing-slash request to its index.html
// when one exists under public/, so standalone static pages work in dev too.
// (Production / GitHub Pages already resolve directory indexes correctly.)
function publicDirIndex() {
  return {
    name: 'public-dir-index',
    configureServer(server) {
      server.middlewares.use((req, _res, next) => {
        try {
          const url = (req.url || '').split('?')[0]
          if (url.endsWith('/')) {
            const candidate = path.join(process.cwd(), 'public', url, 'index.html')
            if (fs.existsSync(candidate)) {
              req.url = url + 'index.html'
            }
          }
        } catch {
          /* fall through */
        }
        next()
      })
    },
  }
}

export default defineConfig({
  plugins: [
    publicDirIndex(),
    {
      enforce: 'pre',
      ...mdx({
        remarkPlugins: [
          remarkGfm,
          remarkFrontmatter,
          [remarkMdxFrontmatter, { name: 'frontmatter' }],
        ],
        rehypePlugins: [rehypeHighlight],
        providerImportSource: '@mdx-js/react',
      }),
    },
    react({ include: /\.(jsx|js|mdx|md|tsx|ts)$/ }),
  ],
  base: '/',
  build: { outDir: 'dist' },
})
