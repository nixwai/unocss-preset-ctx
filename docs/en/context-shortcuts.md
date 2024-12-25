# Shortcuts ( ctxs )

## Basic Usage

Define in the element's `class` using the format `ctxs-${name}_${rules}`, after which using `ctxs-${name}` under this element will apply the corresponding preset `rules`. Multiple rules can be separated by `,`.

<demo vue="context-shortcuts/base.vue"/>

::: warning
Note that `ctxs-${name}` can only be used directly on the `class` and cannot be encapsulated for indirect invocation.
:::
