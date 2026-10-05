import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.cinebody.com',
  output: 'static',
  // Adapter is only here to let src/middleware.ts run on Vercel's edge, gating
  // the /research/* investor pages. Every other page keeps rendering fully
  // static at build time, exactly as before - adding the adapter under
  // output: 'static' does not change that (see middleware.ts for the scope).
  adapter: vercel({ edgeMiddleware: true }),
  trailingSlash: 'never',
  redirects: {
    '/software': '/platform',
  },
  build: {
    format: 'directory', // /software/index.html -> served at /software
    inlineStylesheets: 'always',
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/beta-testing') && !page.includes('/boeing') && !page.includes('/cinebody-blog/preview/') && !page.includes('/cinebody-blog/upcoming') && !page.includes('/giin') && !page.includes('/gilead-cds') && !page.includes('/kc-current') && !page.includes('/kong') && !page.includes('/royal-caribbean-renewal') && !page.includes('/sashco-year2'),
    }),
  ],
  compressHTML: true,
});
