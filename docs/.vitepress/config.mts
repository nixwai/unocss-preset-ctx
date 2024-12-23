import { resolve } from 'node:path';
import UnoCSS from 'unocss/vite';
import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'en',
  title: 'unocss preset ctx',
  description: 'Make it easier to create css context variables and modify element styles.',
  base: '/unocss-preset-ctx/',
  outDir: resolve(__dirname, '../../dist/docs'),
  vite: {
    plugins: [UnoCSS() as any],
    css: { preprocessorOptions: { scss: { api: 'modern-compiler' } } },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'getting-start', link: '/en/getting-start' },
    ],

    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'getting-start', link: '/en/getting-start' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/nixwai/unocss-preset-ctx' },
    ],
  },
});
