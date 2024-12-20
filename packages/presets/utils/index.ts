/**
 * --ctx-${ary.join('-')}
 */
export function ctxName(...ary: (string | number)[]) {
  return `--ctx-${ary.join('-')}`;
}

/** Get HSL color value */
export function hslValue(color?: string) {
  return color?.match(/\d+\s[\d\s]+/)?.[0] || '';
}
