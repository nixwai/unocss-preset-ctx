# 颜色 ( ctx-c )

## 定义

在元素的`class`中通过`ctx-c-${name}_${color}`的格式便可以定义一个名为`ctx-c-${name}`，颜色值为`${color}`的CSS变量。之后该元素下的`class`便可使用`ctx-c-${name}`的作为颜色值。

使用时可以在变量名处添加后缀`-${num}`来控制颜色的明亮度，明亮度以`500`为基准，值越大颜色更亮，越小则颜色更暗。

<demo vue="context-color/base.vue"/>

## 反转明亮度

当你有使用`-${num}`来控制颜色的明亮度时，可以使用`ctx-r-y`来反转明亮度，使值越小越亮，越大则越暗。使用`ctx-r-${name}-y`可以指定只反转的颜色名。

如果使用`ctx-r-n`时则表示不反转。

<demo vue="context-color/reverse.vue"/>
