# Custom Color

## Configuration

You can configure specific colors in the [theme](https://unocss.dev/config/theme) section of the official configuration file. The preset provides a `themeColors` method to help you generate colors with varying brightness levels.

The colors are generated through [magic-color](https://color.zyob.top/), and you can preview and debug them in the official documentation.

```ts {2,6-10}
import { defineConfig, presetUno } from 'unocss';
import { themeColors } from 'unocss-preset-ctx';

export default defineConfig({
  theme: {
    colors: themeColors({
      primary: '#3451b2',
      warning: '#ffb300',
      danger: '#e53935',
    }),
  },
});
```

```html
<div class="c-primary">text</div>
<div class="c-primary-300">text</div>
<div class="c-primary-700">text</div>
```

## Dynamic Modification

When using `themeColors`, corresponding color variables are generated in CSS. Therefore, by modifying these color variables, you can update the corresponding colors. The preset provides an `updateThemeColor` method for more convenient color overrides.

The `dom` parameter can be used to specify the scope of the override. Passing `document.documentElement` will override the colors for the entire page.

<demo vue="custom-color/dynamic-color.vue"/>
