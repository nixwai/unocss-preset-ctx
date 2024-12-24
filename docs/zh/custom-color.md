# 定制颜色

## 配置

您可以在官方配置文件中的[theme](https://unocss.dev/config/theme)里配置特定的颜色，预设中提供了`themeColors`方法，可以帮助您生成多明亮度的颜色。

颜色是通过[magic-color](https://color.zyob.top/)生成，您可以在[官方文档](https://color.zyob.top/)中预览和调试。

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

## 动态修改

使用`themeColors`时会在CSS中生成对应颜色变量，因此只要通过修改这个颜色变量，就可以更新对应的颜色了。因此预设中提供了`updateThemeColor`方法，可以更加方便去覆盖这些颜色。

参数`dom`可用来指定覆盖的范围，传入`document.documentElement`时即可覆盖整个页面的颜色。

<demo vue="custom-color/dynamic-color.vue"/>
