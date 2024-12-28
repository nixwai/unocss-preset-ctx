# 颜色 ( ctx-c )

## 基本用法

在元素的 `class` 中使用 `ctx-c-${name}_${color}` 的格式定义一个名为 `ctx-c-${name}` 的 CSS 变量，其颜色值为 `${color}`。定义后，该元素下的 `class` 可以直接使用 `ctx-c-${name}` 作为颜色值。

使用时可以在预设名处添加后缀 `-${num}` 来控制颜色的亮度。亮度以 `500` 为基准，值越小颜色越亮，值越大颜色越暗。调整后的范围在 `5` 到 `95` 之间。

<demo vue="context-color/base.vue"/>

## 反转亮度

当你使用 `-${num}` 控制颜色亮度时，可以通过 `ctx-r-y` 来反转亮度，使值越大颜色越亮，值越小颜色越暗。使用 `ctx-r-${name}-y` 可以指定仅反转特定颜色名的亮度。

如果使用 `ctx-r-n`，则表示不进行反转。

<demo vue="context-color/reverse.vue"/>

## 多重赋值

颜色变量允许你使用其他颜色变量赋值，这会让你的颜色变得更加灵活，当然也会更加复杂。

<demo vue="context-color/assign.vue"/>

## 获取原始css颜色变量

预设中提供了`resolveCtxColor`方法，能够直接获取到`ctx-c-${name}_${color}`生成的变量值，这或许能够帮助你定义全局的颜色变量。

前缀`ctx-c-`可加也可不加。如果`color`是主题颜色时，必须要在第二个参数中传入unocss的`theme`。

```ts
import { defineConfig, presetUno } from 'unocss';
import { presetCtx, resolveCtxColor } from 'unocss-preset-ctx';

export default defineConfig({
  presets: [presetUno(), presetCtx()],
  preflights: [
    {
      getCSS: ({ theme }) => {
        const ctxColor = resolveCtxColor('tt_primary', theme);
        if (ctxColor) {
          return `
            :root {
              ${Object.entries(ctxColor).map(([k, v]) => `${k}: ${v};`).join('\n')}
            }
          `;
        }
      },
    },
  ],
});
```
