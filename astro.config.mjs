import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://courageous-figolla-7a97d4.netlify.app",
  integrations: [preact()]
});