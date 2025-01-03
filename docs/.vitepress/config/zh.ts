import { defineConfig } from 'vitepress';

export const zh = defineConfig({
  lang: 'zh-CN',
  description: '通过Class上下文修改元素样式',
  themeConfig: {
    nav: [
      { text: '指南', link: '/zh/getting-start' },
    ],
    sidebar: [
      {
        text: '指南',
        items: [
          { text: '快速开始', link: '/zh/getting-start' },
          { text: '定制颜色', link: '/zh/custom-color' },
        ],
      },
      {
        text: '预设',
        items: [
          { text: '快捷方式', link: '/zh/context-shortcuts' },
          { text: '颜色', link: '/zh/context-color' },
        ],
      },
    ],
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },
    outline: { label: '页面导航' },
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium',
      },
    },
    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
  },
});
