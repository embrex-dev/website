import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://embrex.dev', // Change to your domain
  // base: '/embrex', // Removed base path - site will be at root
  integrations: [
    tailwind(),
    sitemap()
  ],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "fr"],
    routing: {
      prefixDefaultLocale: false
    }
  },
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
});