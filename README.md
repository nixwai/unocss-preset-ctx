# unocss-preset-ctx

## Introduction

unocss-preset-ctx is an extension library based on UnoCSS that provides additional preset rules. It facilitates the creation of CSS context variables to modify element styles.

For example:

```html
<div class="ctx-c-text_[#3451b2] ctx-c-bg_gray dark:ctx-r-y">
  <span class="c-ctx-c-text-700 bg-ctx-c-bg-300 px-1">Hello</span>
  <span class="c-ctx-c-text-300 bg-ctx-c-bg-700 px-1">World</span>
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
