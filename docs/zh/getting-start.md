# unocss-preset-ctx

## 介绍

unocss-preset-ctx 是一个基于 UnoCSS 扩展的预设库，提供了更多的预设规则，能够更加便捷的通过CSS的上下文来修改元素样式。

例如：

<div class="ctxs-p_px-1 ctx-c-text_[#3451b2] ctx-c-bg_gray dark:ctx-r-y">
  <span class="ctxs-p c-ctx-c-text-700 bg-ctx-c-bg-300">Hello</span>
  <span class="ctxs-p c-ctx-c-text-300 bg-ctx-c-bg-700">World</span>
</div>

```html [unocss]
<div class="ctxs-p_px-1 ctx-c-text_[#3451b2] ctx-c-bg_gray dark:ctx-r-y">
  <span class="ctxs-p c-ctx-c-text-700 bg-ctx-c-bg-300">Hello</span>
  <span class="ctxs-p c-ctx-c-text-300 bg-ctx-c-bg-700">World</span>
</div>
```

## 安装

使用前请先按照[UnoCss](https://unocss.dev/integrations/vite)官方文档要求，为项目添加所需的UnoCss依赖与配置后，再根据以下步骤进行使用。

::: code-group

```shell [npm]
npm i -D unocss-preset-ctx
```

```shell [pnpm]
pnpm i -D unocss-preset-ctx
```

```shell [yarn]
yarn add -D unocss-preset-ctx
```

:::

与其他UnoCss预设库一样，使用unocss-preset-ctx需要先在 UnoCss 配置文件中添加该预设库。

```ts {2,7}
import { defineConfig, presetUno } from 'unocss';
import { presetCtx } from 'unocss-preset-ctx';

export default defineConfig({
  presets: [
    presetUno(),
    presetCtx(),
  ],
});
```
