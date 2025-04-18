# unocss-preset-ctx

## Introduction

unocss-preset-ctx is an extension library based on UnoCSS that provides additional preset rules. Make it easier to modify element styles in the context of CSS.

For example:

```html
<div class="ctxs-p_px-1 ctx-c-text_[#3451b2] ctx-c-bg_gray dark:ctx-r-y">
  <span class="ctxs-p c-ctx-c-text-700 bg-ctx-c-bg-300">Hello</span>
  <span class="ctxs-p c-ctx-c-text-300 bg-ctx-c-bg-700">World</span>
</div>
```

## Usage

Before using, please follow the official [UnoCss](https://unocss.dev/integrations/vite) documentation to add the required UnoCss dependencies and configurations to your project. Then proceed with the following steps.

### npm

```shell
npm i -D unocss-preset-ctx
```

### pnpm

```shell [pnpm]
pnpm i -D unocss-preset-ctx
```

### yarn

```shell [yarn]
yarn add -D unocss-preset-ctx
```

Similar to other UnoCss preset libraries, you need to add this preset library in the UnoCss configuration file before using.

```ts
import { defineConfig, presetUno } from 'unocss';
import { presetCtx } from 'unocss-preset-ctx';

export default defineConfig({ presets: [presetUno(), presetCtx()] });
```

## Documentation

Read the [documentation](https://nixwai.github.io/unocss-preset-ctx/) for more details.

## Credits

- [UnoCSS](https://github.com/unocss/unocss)
- [magic-color](https://github.com/zyyv/magic-color)
- [onu-ui](https://github.com/onu-ui/onu-ui)

## License

[MIT](https://github.com/nixwai/unocss-preset-ctx/blob/main/LICENSE)
