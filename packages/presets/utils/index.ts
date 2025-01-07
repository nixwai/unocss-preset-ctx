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

/** var(value, def)) */
export function toVar(value: string, def?: string | number) {
  if (def !== undefined) {
    return `var(${value}, ${def})`;
  }
  return `var(${value})`;
}
