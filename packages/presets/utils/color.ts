import type { Theme } from '@unocss/preset-mini';
import type { CSSValue } from 'unocss';
import { parseColor } from '@unocss/preset-mini';
import { mc } from 'magic-color';
import { ctxName } from '.';

/** Lightness difference between colors */
const colorDiff: Record<string, number> = {
  50: -450,
  100: -400,
  200: -300,
  300: -200,
  400: -100,
  500: 0,
  600: 100,
  700: 200,
  800: 300,
  900: 400,
  950: 450,
};

const colorKeys = Object.keys(colorDiff);

/**
 * init theme context color
 * @returns Context colors for the preset theme
 *
 * @example
 * ```ts
 * initCtxThemeColors(['default']) =>
 * {
 *   default: {
 *     'DEFAULT': 'hsl(var(--ctx-default-color-500))',
 *     '50': 'var(var(--ctx-default-reverse-50, var(--ctx-default-color-50)))',
 *     '100': 'var(var(--ctx-default-reverse-100, var(--ctx-default-color-100)))',
 *     ...
 *   }
 * }
 * ```
 */
export function initCtxThemeColors(names: string[]) {
  const ctxColors: Theme['colors'] = {};
  names.forEach((name) => {
    const themeColors = Object.fromEntries(
      colorKeys.map((k) => {
        const reverseValue = ctxName(name, 'reverse', k); // Lightness reversal of the color
        const colorValue = ctxName(name, 'color', k); // Normal lightness of the color
        return [k, `hsl(var(${reverseValue}, var(${colorValue})))`];
      }),
    );
    themeColors.DEFAULT = `hsl(var(${ctxName(name, 'color', 500)}))`;
    ctxColors[name] = themeColors;
  });

  return ctxColors;
}

/**
 * Reverse color lightness
 * @returns
 * ```ts
 * {
 *    --ctx-${name}-reverse-50: var(--ctx-${name}-color-950);
 *    --ctx-${name}-reverse-100: var(--ctx-${name}-color-900);
 *    --ctx-${name}-reverse-200: var(--ctx-${name}-color-800);
 *    ...
 * }
  ```
 */
export function reverseContextColor(name: string): CSSValue {
  const cssValue: CSSValue = {};
  colorKeys.forEach((k) => {
    cssValue[`${ctxName(name, 'reverse', k)}`]
      = `var(${ctxName(name, 'color', 500 - colorDiff[k])})`;
  });
  return cssValue;
}

/**
 * Set color and lightness for the context
 * @param name Context name
 * @param str Color value, can be a color set in the theme or a CSS color value
 * @param theme preset theme
 * @param lightness all lightness levels
 * @returns Color values for different lightness levels corresponding to the context color
 *
 * @example
 * ```ts
 * resolveContextColor('default', '#F4AFFF', theme, [500,400,600])
 * => {
 *   '--ctx-default-color-500': '292 100 84',
 *   '--ctx-default-color-400': '292 100 94',
 *   '--ctx-default-color-600': '292 100 74',
 * }
 * ```
 */
export function resolveContextColor(
  name: string,
  str: string,
  theme: Theme,
  lightness = colorKeys,
) {
  if (typeof theme.colors?.ctx !== 'object' || !theme.colors.ctx[name]) {
    return '';
  }
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

  let colorLightness: string[] = [];
  // Push color lightness and reversed lightness
  lightness.forEach((key) => {
    if (colorKeys.includes(key)) {
      colorLightness.push(key);
      colorLightness.push(String(500 - colorDiff[key]));
    }
  });
  // Remove duplicates
  colorLightness = Array.from(new Set(colorLightness));

  // Cannot set dynamic lightness when less than 3
  if (hslData.length < 3) {
    const value = hslData.join(' ');
    return Object.fromEntries(
      colorLightness.map(key => [ctxName(name, 'color', key), value]),
    );
  }

  // Generate CSS variables corresponding to the color
  const [h, s, l] = hslData;
  const lValue = Number.isNaN(Number(l))
    ? String(l).replace('%', '')
    : Number(l);
  const colorValues = colorLightness.map((key) => {
    let countValue = lValue;
    const diff = colorDiff[key] / 10;
    if (diff) {
      countValue
        = typeof lValue === 'number'
          ? lValue - diff
          : `calc(${lValue} - ${diff})`;
    }
    return [h, s, countValue].join(' ');
  });
  return Object.fromEntries(
    colorLightness.map((key, index) => [
      ctxName(name, 'color', key),
      colorValues[index],
    ]),
  );
}
