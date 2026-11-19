// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://naufaruqi.github.io',
  base: '/panduan_santri',
  vite: {
    plugins: [tailwindcss()]
  }
});