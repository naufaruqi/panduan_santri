// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://naufaruqi.github.io',
  base: process.env.NODE_ENV === 'development' ? '/' : '/panduan_santri',
  vite: {
    plugins: [tailwindcss()]
  }
});