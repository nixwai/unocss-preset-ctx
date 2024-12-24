import { resolve } from 'node:path';
import UnoCSS from 'unocss/vite';
import { defineConfig } from 'vitepress';
import { en } from './en';
import { zh } from './zh';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'unocss preset ctx',
  rewrites: { 'en/:rest*': ':rest*' },
  base: '/unocss-preset-ctx/',
  outDir: resolve(__dirname, '../../dist/docs'),
  vite: {
    plugins: [UnoCSS() as any],
    css: { preprocessorOptions: { scss: { api: 'modern-compiler' } } },
  },
  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/nixwai/unocss-preset-ctx' },
    ],
  },
  locales: {
    root: {
      label: 'English',
      ...en,
    },
    zh: {
      label: '中文',
      ...zh,
    },
  },
});
