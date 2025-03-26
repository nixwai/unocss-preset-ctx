# Shortcuts ( ctxs )

## Basic Usage

In the element's class attribute, use the format ctxs-${name}_${rules} for definition. Once defined, both the element and its children can apply the corresponding preset rules by using ctxs-${name}/${name} as either a class name or attribute. Multiple rules can be separated by ,.

<demo vue="context-shortcuts/base.vue"/>

::: warning
Note that `ctxs-${name}` can only be used directly on the `class` and cannot be encapsulated for indirect invocation.
:::
