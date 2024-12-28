# Color (ctx-c)

## Basic Usage

Define a CSS variable in the element's `class` using the format `ctx-c-${name}_${color}`. This creates a CSS variable named `ctx-c-${name}` with the value `${color}`. Subsequent `class` entries within this element can then use `ctx-c-${name}` as a color value.

To control the brightness of the color, add a suffix `-${num}` to the variable name. The brightness is based on `500`; smaller values make the color brighter, while larger values make it darker. The adjusted range is between `5` and `95`.

<demo vue="context-color/base.vue"/>

## Reverse Brightness

When using `-${num}` to control the brightness, you can reverse the brightness behavior with `ctx-r-y`. This makes higher values result in brighter colors and lower values in darker colors. Using `ctx-r-${name}-y` allows you to specify which color name should have its brightness reversed.

If you use `ctx-r-n`, it indicates that no reversal should be applied.

<demo vue="context-color/reverse.vue"/>

## Multiple Assignment

Color variables allow you to assign values using other color variables, which makes your colors more flexible, but also more complex.

<demo vue="context-color/assign.vue"/>
