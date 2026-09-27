import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.cinebody.com',
  output: 'static',
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
