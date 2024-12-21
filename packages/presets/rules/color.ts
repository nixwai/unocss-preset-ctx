import type { Theme } from '@unocss/preset-mini';
import type { CustomRule } from '../types';
import { parseColor } from '@unocss/preset-mini';
import { mc } from 'magic-color';
import { ctxName } from '../utils';

export const color: CustomRule[] = [
  // Set context colors (ctx-color-${name}_${color})
  [
    /^ctx-color-(.+)$/,
    ([, s], { theme }) => {
      // Use "_" to separate name、 color
      const [name, color] = s.split('_');
      if (color) {
        // Set colors and various lightness levels
        const colors = resolveContextColor(name, color, theme);
        if (colors) {
          return colors;
        }
      }
    },
  ],
  // Context variable for color
  [
    /^(text-color|color|c)-ctx-(.+)$/,
    ([,,s]) => getColorValue(s, 'color', 'text'),
  ],
];

/**
 * Set color and lightness for the context
 * @param name Context name
 * @param str Color value, can be a color set in the theme or a CSS color value
 * @param theme preset theme
 * @returns Context color value
 *
 * @example
 * ```ts
 * resolveContextColor('default', '#F4AFFF', theme)
 * => {
 *   '--ctx-color-default-h': '292',
 *   '--ctx-color-default-s': '100',
 *   '--ctx-color-default-l': '84',
 * }
 * ```
 */
export function resolveContextColor(
  name: string,
  str: string,
  theme: Theme,
) {
  const parsedColor = parseColor(str, theme);
  if (!parsedColor || !parsedColor.color || !parsedColor.cssColor) {
    return '';
  }

  let hslData: undefined | (string | number)[];
  // If it is an HSL type
  if (parsedColor.cssColor.type === 'hsl') {
    hslData = parsedColor.cssColor.components;
  }
  // Otherwise, convert to HSL using magic-color
  if (!hslData && mc.valid(parsedColor.color)) {
    hslData = mc(parsedColor.color).hsl();
  }
  if (!hslData) {
    return '';
  }
  // Less than 3 cannot be split
  if (hslData.length < 3) {
    // => { '--ctx-color-${name}': '${parsedColor.color}' }
    return { [ctxName('color', name)]: parsedColor.color };
  }

  // Generate CSS variables corresponding to the color
  let [h, s, l] = hslData;
  h = String(h).replace('deg', '');
  s = String(s).replace('%', '');
  l = String(l).replace('%', '');
  return {
    [ctxName('color', name, 'h')]: h,
    [ctxName('color', name, 's')]: s,
    [ctxName('color', name, 'l')]: l,
  };
}

/**
 * Use css variables to control color values
 * @param str color name and lightness
 * @param property css property, color | background-color | border-color | ...
 * @param varName Base name for the opacity variable.
 * @return css variables
 *
 * @example
 * ```ts
 * getColorValue('com-400', 'color', 'text')
 * => {
 *   '--un-text-opacity': 1,
 *   '--ctx-bool-com': 1,
 *   color: 'var(--ctx-color-com, hsl(var(--ctx-color-com-h) var(--ctx-color-com-s) calc(var(--ctx-color-com-l) + var(--ctx-bool-com, var(--ctx-bool)) * 10) / var(--un-text-opacity)))',
 * }
 * ```
 */
function getColorValue(str: string, property: string, varName: string) {
  const [color, alpha] = str.split(/[:/]/);
  const name = color.replace(/(.*)-\d+/, '$1');

  const colorDefault = ctxName('color', name);
  const colorH = `var(${ctxName('color', name, 'h')})`;
  const colorS = `var(${ctxName('color', name, 's')})`;
  // Dynamic lightness
  let colorL = `var(${ctxName('color', name, 'l')})`;
  const lightness = color.match(/.*-(\d+)/)?.[1] || '500';
  if (lightness) {
    const diffL = (500 - Number(lightness)) / 10;
    if (diffL) {
      const reverse = `var(${ctxName('reverse', name)}, var(${ctxName('reverse')}, 1))`;
      colorL = `calc(${colorL} + ${reverse} * ${diffL})`;
    }
  }

  const value: Record<string, string | number> = {};
  value[`--un-${varName}-opacity`] = alpha ? Number.parseInt(alpha) / 100 : 1;
  value[property] = `var(${colorDefault}, hsl(${colorH} ${colorS} ${colorL} / var(--un-${varName}-opacity)))`;
  return value;
}
