// @ts-check
import { defineConfig } from 'astro/config';

// SITE_URL / BASE_PATH are set by the GitHub Actions workflow.
// With a custom domain (e.g. apartamentzarynkiem.pl) BASE_PATH is simply "/".
export default defineConfig({
  site: process.env.SITE_URL || 'https://apartamentzarynkiem.pl',
  base: process.env.BASE_PATH || '/',
  // Languages: Polish at "/", English at "/en/".
  // Texts live in src/translations/<lang>.json
  i18n: {
    defaultLocale: 'pl',
    locales: ['pl', 'en'],
    routing: { prefixDefaultLocale: false },
  },
});
