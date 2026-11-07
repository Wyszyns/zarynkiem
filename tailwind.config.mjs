/** Tailwind is now built into the site at build time (no CDN).
 *  It scans these files for class names, so any class used in them works. */
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,md,json}'],
  theme: { extend: {} },
  plugins: [],
};
