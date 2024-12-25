# 快捷方式 ( ctxs )

## 基本用法

在元素的 `class` 中使用 `ctxs-${name}_${rules}` 的格式进行定义。定义后，该元素下 `ctxs-${name}` 将应用对应的预设`rules`。多个规则可以用 `,` 分隔。

<demo vue="context-shortcuts/base.vue"/>

::: warning
`ctxs-${name}` 仅能直接应用于 `class`，不能通过封装方式进行间接调用。
:::
