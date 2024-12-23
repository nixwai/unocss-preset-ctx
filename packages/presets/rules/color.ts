import type { Theme } from '@unocss/preset-mini';
import type { CSSObject, RuleContext } from 'unocss';
import type { CustomRule } from '../types';
import { parseColor } from '@unocss/preset-mini';
import { mc } from 'magic-color';
import { ctxName } from '../utils';

const directionMap: Record<string, string[]> = {
  'l': ['-left'],
  'r': ['-right'],
  't': ['-top'],
  'b': ['-bottom'],
  's': ['-inline-start'],
  'e': ['-inline-end'],
  'x': ['-left', '-right'],
  'y': ['-top', '-bottom'],
  '': [''],
  'bs': ['-block-start'],
  'be': ['-block-end'],
  'is': ['-inline-start'],
  'ie': ['-inline-end'],
  'block': ['-block-start', '-block-end'],
  'inline': ['-inline-start', '-inline-end'],
};

export const color: CustomRule[] = [
  // Set context colors (ctx-color-${name}_${color})
  [/^ctx-color-(.+)$/, resolveContextColor],
  // Context variable for color
  [/^(?:text-color|text|color|c)-ctx-(.+)$/, cxtColorResolver('color', 'text')],
  [/^outline-color-ctx-(.+)$/, cxtColorResolver('outline-color', 'outline-color')],
  [/^bg-ctx-(.+)$/, cxtColorResolver('background-color', 'bg')],
  [/^(?:underline|decoration)-ctx-(.+)$/, cxtColorResolver('text-decoration-color', 'line')],
  [/^ring-offset-ctx-(.+)$/, cxtColorResolver('--un-ring-offset-color', 'ring-offset')],
  [/^ring-ctx-(.+)$/, cxtColorResolver('--un-ring-color', 'ring')],
  [/^shadow-ctx-(.+)$/, cxtColorResolver('--un-shadow-color', 'shadow')],
  [/^fill-ctx-(.+)$/, cxtColorResolver('fill', 'fill')],
  [/^stroke-ctx-(.+)$/, cxtColorResolver('stroke', 'stroke')],
  [/^text-stroke-ctx-(.+)$/, cxtColorResolver('-webkit-text-stroke-color', 'text-stroke')],
  [/^text-shadow-color-ctx-(.+)$/, cxtColorResolver('--un-text-shadow-color', 'text-shadow')],
  [/^accent-ctx-(.+)$/, cxtColorResolver('accent-color', 'accent')],
  [/^caret-ctx-(.+)$/, cxtColorResolver('caret-color', 'caret')],
  [/^divide-ctx-(.+)$/, cxtColorResolver('border-color', 'divide')],
  [/^(?:filter-)?drop-shadow-color-ctx-(.+)$/, cxtColorResolver('--un-drop-shadow-color', 'drop-shadow')],
  [/^placeholder-ctx-(.+)$/, cxtColorResolver('color', 'placeholder')],
  // border color
  [/^(?:border|b)-()(?:color-)?ctx-(.+)$/, cxtBorderColorResolver],
  [/^(?:border|b)-([xy])-(?:color-)?ctx-(.+)$/, cxtBorderColorResolver],
  [/^(?:border|b)-([rltbse])-(?:color-)?ctx-(.+)$/, cxtBorderColorResolver],
  [/^(?:border|b)-(block|inline)-(?:color-)?ctx-(.+)$/, cxtBorderColorResolver],
  [/^(?:border|b)-([bi][se])-(?:color-)?ctx-(.+)$/, cxtBorderColorResolver],
  // bg gradient color
  [/^(?:bg-gradient-)?(from)-ctx-(.+)$/, cxtBgGradientColorResolver],
  [/^(?:bg-gradient-)?(via)-ctx-(.+)$/, cxtBgGradientColorResolver],
  [/^(?:bg-gradient-)?(to)-ctx-(.+)$/, cxtBgGradientColorResolver],
];

/** Set color and lightness for the context */
export function resolveContextColor([, str]: string[], { theme }: RuleContext<Theme>) {
  // Use "_" to separate name、 color
  const [name, color] = str.split('_');
  if (!color) {
    return;
  }

  const parsedColor = parseColor(color, theme);
  if (!parsedColor || !parsedColor.color || !parsedColor.cssColor) {
    return;
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
  // Less than 3 cannot be split，use origin color
  if (!hslData || hslData.length < 3) {
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
    [ctxName('color', name, 'op')]: parsedColor.alpha || 1,
  };
}

/**
 * Use css variables to control color values
 * @param property css property, color | background-color | border-color | ...
 * @param varName Base name for the opacity variable.
 * @return css variables
 *
 * @example
 * ```ts
 * cxtColorResolver('com-400', 'color', 'text')
 * => {
 *   '--un-text-opacity': 1,
 *   color: 'var(--ctx-color-com, hsl(var(--ctx-color-com-h) var(--ctx-color-com-s) calc(var(--ctx-color-com-l) + var(--ctx-bool-com, var(--ctx-bool)) * 10) / var(--un-text-opacity)))',
 * }
 * ```
 */
function cxtColorResolver(property: string, varName: string) {
  return ([, str]: string[]): CSSObject | undefined => {
    const [origin, value, opacity] = getCxtColor(str);
    return {
      [`--un-${varName}-opacity`]: opacity,
      [property]: `var(${origin}, hsl(${value} / var(--un-${varName}-opacity)))`,
    };
  };
}

/** Use css variables to control border color values */
function cxtBorderColorResolver([, a = '', b]: string[]) {
  if (a in directionMap) {
    const [origin, value, opacity] = getCxtColor(b);
    if (!a) {
      return {
        '--un-border-opacity': opacity,
        'border-color': `var(${origin}, hsl(${value} / var(--un-border-opacity)))`,
      };
    }
    return Object.assign(
      { '--un-border-opacity': opacity },
      ...directionMap[a].map(direction => ({
        [`--un-border${direction}-opacity`]: opacity,
        [`border${direction}-color`]: `var(${origin}, hsl(${value} / var(--un-border${direction}-opacity)))`,
      })),
    );
  }
}

/** Use css variables to control bg gradient color values */
function cxtBgGradientColorResolver([, mode = '', b]: string[]) {
  const [origin, value, opacity] = getCxtColor(b);
  const colorString = `var(${origin}, hsl(${value} / var(--un-${mode}-opacity, ${opacity})))`;

  switch (mode) {
    case 'from':
      return {
        '--un-gradient-from-position': '0%',
        '--un-gradient-from': `${colorString} var(--un-gradient-from-position)`,
        '--un-gradient-to-position': '100%',
        '--un-gradient-to': `rgb(255 255 255 / 0) var(--un-gradient-to-position)`,
        '--un-gradient-stops': 'var(--un-gradient-from), var(--un-gradient-to)',
      };
    case 'via':
      return {
        '--un-gradient-via-position': '50%',
        '--un-gradient-to': 'rgb(255 255 255 / 0)',
        '--un-gradient-stops': `var(--un-gradient-from), ${colorString} var(--un-gradient-via-position), var(--un-gradient-to)`,
      };
    case 'to':
      return {
        '--un-gradient-to-position': '100%',
        '--un-gradient-to': `${colorString} var(--un-gradient-to-position)`,
      };
  }
}

/**
 * Get color variables for string
 * @param str css color string
 * @returns color variables and opacity
 */
function getCxtColor(str: string) {
  const [color, alpha] = str.split(/[:/]/);
  const name = color.replace(/(.*)-\d+/, '$1');

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
  const colorOp = `var(${ctxName('color', name, 'op')})`;

  const origin = ctxName('color', name);
  const value = `${colorH} ${colorS} ${colorL}`;
  const opacity = alpha ? Number.parseInt(alpha) / 100 : colorOp;

  return [origin, value, opacity];
}
