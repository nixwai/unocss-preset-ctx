import { defineConfig } from 'vitepress';

export const zh = defineConfig({
  lang: 'zh-CN',
  description: '更轻松的创建css上下文变量和修改元素样式',
  themeConfig: {
    nav: [
      { text: '指南', link: '/zh/getting-start' },
    ],
    sidebar: [
      {
        text: '简介',
        items: [
          { text: '快速开始', link: '/zh/getting-start' },
        ],
      },
    ],
  },
});
