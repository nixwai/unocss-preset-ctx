import { defineConfig } from 'vitepress';

export const en = defineConfig({
  lang: 'en',
  description: 'Make it easier to create css context variables and modify element styles.',
  themeConfig: {
    nav: [
      { text: 'Guide', link: '/en/getting-start' },
    ],
    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'Getting Start', link: '/en/getting-start' },
        ],
      },
    ],
  },
});
