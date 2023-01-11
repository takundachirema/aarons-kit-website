import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import image from '@astrojs/image';

import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config

export default defineConfig({
  output: 'server',
  site: 'https://odyssey-theme.littlesticks.dev/',
  // Your public domain, e.g.: https://my-site.dev/. Used to generate sitemaps and canonical URLs.
  sitemap: true,
  // Generate sitemap (set to "false" to disable)
  integrations: [sitemap(), mdx(), image()],
  // Add renderers to the config
  // This is for the astro-icon package. You can find more about the package here: https://www.npmjs.com/package/astro-icon
  vite: {
    ssr: {
      external: ['svgo']
    }
  },
  adapter: vercel()
});