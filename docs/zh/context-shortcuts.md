# 快捷方式 ( ctxs )

## 基本用法

在元素的`class`中通过`ctxs-${name}_${rules}`的格式定义，之后该元素下的使用的`ctxs-${name}`便可生效对应`rules`的预设，有多条时可用`,`隔开。

<demo vue="context-shortcuts/base.vue"/>

::: warning
注意`ctxs-${name}`只能直接在`class`上使用，无法再被封装间接调用。
:::
