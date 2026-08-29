import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Override SITE_URL env var to switch domains.
// Default: fizjomat.com.pl (production). Set to https://fizjomat.pages.dev or fizjomat.com for staging.
export default defineConfig({
  site: process.env.SITE_URL ?? 'https://fizjomat.com.pl',
  integrations: [sitemap()],
});
