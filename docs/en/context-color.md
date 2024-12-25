# Color ( ctx-c )

## Basic Usage

Defines the `class` of the format `ctx-c-${name}_${color}` in the element. You can get a CSS variable called `ctx-c-${name}` with the value `${color}`. Then `class` after this element can use `ctx-c-${name}` as the color value.

When using this, you can add a suffix `-${num}` to the variable name to control the brightness of the color. The brightness is based on `500`. Higher values make the color brighter, while lower values make it darker.

<demo vue="context-color/base.vue"/>

## Reverse Brightness

When you use `-${num}` to control the brightness of the color, you can reverse the brightness using `ctx-r-y`, making smaller values brighter and larger values darker. Using `ctx-r-${name}-y` allows you to specify which color name to reverse.

If you use `ctx-r-n`, it indicates that no reversal should be applied.

<demo vue="context-color/reverse.vue"/>
