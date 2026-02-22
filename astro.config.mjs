// @ts-check
import { defineConfig } from 'astro/config';

import vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
  image: {
    domains: ['cdn.sanity.io'],
  },
});