# unocss-preset-ctx

## Introduction

unocss-preset-ctx is an extension library based on UnoCSS that provides additional preset rules. Make it easier to modify element styles in the context of CSS.

For example:

<div class="ctx-c-text_[#3451b2] ctx-c-bg_gray dark:ctx-r-y ctxs-p_px-1">
  <span class="c-ctx-c-text-700 bg-ctx-c-bg-300 ctxs-p">Hello</span>
  <span class="c-ctx-c-text-300 bg-ctx-c-bg-700 ctxs-p">World</span>
</div>

```html [unocss]
<div class="ctx-c-text_[#3451b2] ctx-c-bg_gray dark:ctx-r-y ctxs-p_px-1">
  <span class="c-ctx-c-text-700 bg-ctx-c-bg-300 ctxs-p">Hello</span>
  <span class="c-ctx-c-text-300 bg-ctx-c-bg-700 ctxs-p">World</span>
</div>
```

## Installation

Before using, please follow the official [UnoCss](https://unocss.dev/integrations/vite) documentation to add the required UnoCss dependencies and configurations to your project. Then proceed with the following steps.

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

Similar to other UnoCss preset libraries, you need to add this preset library in the UnoCss configuration file before using.

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
