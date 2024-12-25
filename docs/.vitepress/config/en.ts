import { defineConfig } from 'vitepress';

export const en = defineConfig({
  lang: 'en',
  description: 'Make it easier to create css context variables and modify element styles.',
  themeConfig: {
    nav: [
      { text: 'Guide', link: '/getting-start' },
    ],
    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Getting Start', link: '/getting-start' },
          { text: 'Custom Color', link: '/custom-color' },
        ],
      },
      {
        text: 'Presets',
        items: [
          { text: 'Shortcuts', link: '/context-shortcuts' },
          { text: 'Color', link: '/context-color' },
        ],
      },
    ],
  },
});
