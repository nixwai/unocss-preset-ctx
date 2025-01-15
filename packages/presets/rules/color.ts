import type { Theme } from '@unocss/preset-mini';
import type { CSSObject, RuleContext } from 'unocss';
import type { CustomRule } from '../types';
import { parseColor } from '@unocss/preset-mini';
import { mc } from 'magic-color';
import { toCtxName, toVar } from '../utils';

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
  // Set context colors (ctx-c-${name}_${color})
  [/^ctx-c-(.+)$/, resolveContextColor],
  // Context variable for color
  [/^(?:text-color|text|color|c)-ctx-c-(.+)$/, cxtColorResolver('color', 'text')],
  [/^outline-color-ctx-c-(.+)$/, cxtColorResolver('outline-color', 'outline-color')],
  [/^bg-ctx-c-(.+)$/, cxtColorResolver('background-color', 'bg')],
  [/^(?:underline|decoration)-ctx-c-(.+)$/, cxtColorResolver('text-decoration-color', 'line')],
  [/^ring-offset-ctx-c-(.+)$/, cxtColorResolver('--un-ring-offset-color', 'ring-offset')],
  [/^ring-ctx-c-(.+)$/, cxtColorResolver('--un-ring-color', 'ring')],
  [/^shadow-ctx-c-(.+)$/, cxtColorResolver('--un-shadow-color', 'shadow')],
  [/^fill-ctx-c-(.+)$/, cxtColorResolver('fill', 'fill')],
  [/^stroke-ctx-c-(.+)$/, cxtColorResolver('stroke', 'stroke')],
  [/^text-stroke-ctx-c-(.+)$/, cxtColorResolver('-webkit-text-stroke-color', 'text-stroke')],
  [/^text-shadow-color-ctx-c-(.+)$/, cxtColorResolver('--un-text-shadow-color', 'text-shadow')],
  [/^accent-ctx-c-(.+)$/, cxtColorResolver('accent-color', 'accent')],
  [/^caret-ctx-c-(.+)$/, cxtColorResolver('caret-color', 'caret')],
  [/^divide-ctx-c-(.+)$/, cxtColorResolver('border-color', 'divide')],
  [/^(?:filter-)?drop-shadow-color-ctx-c-(.+)$/, cxtColorResolver('--un-drop-shadow-color', 'drop-shadow')],
  [/^placeholder-ctx-c-(.+)$/, cxtColorResolver('color', 'placeholder')],
  // border color
  [/^(?:border|b)-()(?:color-)?ctx-c-(.+)$/, cxtBorderColorResolver],
  [/^(?:border|b)-([xy])-(?:color-)?ctx-c-(.+)$/, cxtBorderColorResolver],
  [/^(?:border|b)-([rltbse])-(?:color-)?ctx-c-(.+)$/, cxtBorderColorResolver],
  [/^(?:border|b)-(block|inline)-(?:color-)?ctx-c-(.+)$/, cxtBorderColorResolver],
  [/^(?:border|b)-([bi][se])-(?:color-)?ctx-c-(.+)$/, cxtBorderColorResolver],
  // bg gradient color
  [/^(?:bg-gradient-)?(from)-ctx-c-(.+)$/, cxtBgGradientColorResolver],
  [/^(?:bg-gradient-)?(via)-ctx-c-(.+)$/, cxtBgGradientColorResolver],
  [/^(?:bg-gradient-)?(to)-ctx-c-(.+)$/, cxtBgGradientColorResolver],
];

function resolveContextColor([, str]: string[], { theme }: RuleContext<Theme>) {
  return resolveCtxColor(str, theme);
}

/** Set color and lightness for the context */
export function resolveCtxColor(str: string, theme?: Theme) {
  str = str.replace(/^ctx-c-(.*)/, '$1');
  // Use "_" to separate name、 color
  const [name, hue] = str.split('_');
  let [color, alpha] = hue?.split(/[:/]/) || [];
  if (!color) {
    return;
  }
  // if the color is ctx color
  if (color.slice(0, 6) === 'ctx-c-') {
    const ctxColor = color.slice(6);
    const ctxN = ctxColor.replace(/(.*)-\d+/, '$1');
    const degree = ctxColor.match(/.*-(\d+)/)?.[1];
    const diffValue = (500 - Number(degree || 500)) / 10;
    let colorL = toVar(toCtxName('c', ctxN, 'l'));
    if (diffValue) {
      const reverse = toVar(toCtxName('r', ctxN), toVar(toCtxName('r'), 1));
      colorL = `calc(${colorL} + ${reverse} * ${diffValue})`;
    }
    return {
      [toCtxName('c', name, 'h')]: toVar(toCtxName('c', ctxN, 'h')),
      [toCtxName('c', name, 's')]: toVar(toCtxName('c', ctxN, 's')),
      [toCtxName('c', name, 'l')]: colorL,
      [toCtxName('c', name, 'deg')]: degree ? diffValue : toVar(toCtxName('deg', ctxN), toVar(toCtxName('c', ctxN, 'deg'))),
      [toCtxName('c', name, 'op')]: alpha ? Number(alpha) / 100 : toVar(toCtxName('op', ctxN), toVar(toCtxName('c', ctxN, 'op'))),
    };
  }
  const degree = color.match(/.*-(\d+)/)?.[1] || '500';
  const diffValue = (500 - Number(degree)) / 10;
  // If the color can resolve by theme
  if (theme) {
    const parsedColor = parseColor(color, theme);
    if (!parsedColor) {
      return;
    }
    if (parsedColor.color) {
      color = parsedColor.color;
    }
    // If it is an HSL type
    if (parsedColor.cssColor?.type === 'hsl') {
      const hslData = parsedColor.cssColor.components;
      return generateCSSVariables(hslData, name, diffValue, alpha);
    }
  }
  // Otherwise, convert to HSL using magic-color
  if (mc.valid(color)) {
    const hslData = mc(color).hsl();
    return generateCSSVariables(hslData, name, diffValue, alpha);
  }
  // can not resolve => { '--ctx-c-${name}': '${color}' }
  return { [toCtxName('c', name)]: color };
}

/** Generate CSS variables corresponding to the color */
function generateCSSVariables(hslData: (string | number)[], name: string, diffValue: number, alpha?: string) {
  let [h, s, l] = hslData;
  h = String(h).replace('deg', '');
  s = String(s).replace('%', '');
  l = String(l).replace('%', '');
  return {
    [toCtxName('c', name, 'h')]: h,
    [toCtxName('c', name, 's')]: s,
    [toCtxName('c', name, 'l')]: l,
    [toCtxName('c', name, 'deg')]: diffValue,
    [toCtxName('c', name, 'op')]: alpha ? Number(alpha) / 100 : 1,
  };
}

/**
 * Get color variables for string
 * @param str css color string
 * @returns color variables and opacity
 */
function getCxtColor(str: string, varName: string) {
  const [color, alpha] = str.split(/[:/]/);
  const name = color.replace(/(.*)-\d+/, '$1').replace(/(.*)-$/, '$1');
  // Get reverse
  const reverseVar = toCtxName('', varName, 'reverse');
  const reverseValue = toVar(toCtxName('r', name), toVar(toCtxName('r'), 1));
  // Get lightness
  const lightnessVar = toCtxName('', varName, 'lightness');
  let lightnessValue = toVar(toCtxName('c', name, 'l'));
  const degree = color.match(/-(-?\d+)$/)?.[1];
  const diffValue = degree ? (500 - Number(degree)) / 10 : toVar(toCtxName('deg', name), 0);
  if (diffValue) {
    lightnessValue = `clamp(15, calc(${lightnessValue} + ${toVar(reverseVar)} * ${diffValue}), 95)`;
  }
  // Get color
  const colorVar = toCtxName('', varName, 'color');
  const colorH = toVar(toCtxName('c', name, 'h'));
  const colorS = toVar(toCtxName('c', name, 's'));
  const colorL = toVar(lightnessVar);
  const colorValue = `${colorH} ${colorS} ${colorL}`;
  // Get opacity
  const opValue = alpha ? Number.parseInt(alpha) / 100 : toVar(toCtxName('op', name), toVar(toCtxName('c', name, 'op')));
  // Get origin
  const originVar = toCtxName('c', name);

  const variables = {
    [reverseVar]: reverseValue,
    [lightnessVar]: lightnessValue,
    [colorVar]: colorValue,
  };

  return { originVar, colorVar, opValue, variables };
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
 *   color: 'var(--ctx-c-com, hsl(var(--ctx-c-com-h) var(--ctx-c-com-s) calc(var(--ctx-c-com-l) + var(--ctx-r-com, var(--ctx-r)) * 10) / var(--un-text-opacity)))',
 * }
 * ```
 */
function cxtColorResolver(property: string, varName: string) {
  return ([, str]: string[]): CSSObject | undefined => {
    const { originVar, colorVar, opValue, variables } = getCxtColor(str, varName);
    const opVar = toCtxName('', varName, 'opacity');
    return {
      ...variables,
      [opVar]: toVar(`--un-${varName}-opacity`, opValue),
      [property]: toVar(originVar, `hsl(${toVar(colorVar)} / ${toVar(opVar)})`),
    };
  };
}

/** Use css variables to control border color values */
function cxtBorderColorResolver([, a = '', b]: string[]) {
  if (a in directionMap) {
    if (!a) {
      const { originVar, colorVar, opValue, variables } = getCxtColor(b, 'border');
      const opVar = toCtxName('', 'border', 'opacity');
      return {
        ...variables,
        [opVar]: toVar('--un-border-opacity', opValue),
        'border-color': toVar(originVar, `hsl(${toVar(colorVar)} / ${toVar(opVar)})`),
      };
    }
    const { originVar, colorVar, opValue, variables } = getCxtColor(b, `border-${a}`);
    return Object.assign(
      {},
      variables,
      ...directionMap[a].map((direction) => {
        const opVar = toCtxName('', `border${direction}`, 'opacity');
        return {
          [opVar]: toVar(`--un-border${direction}-opacity`, toVar('--un-border-opacity', opValue)),
          [`border${direction}-color`]: toVar(originVar, `hsl(${toVar(colorVar)} / ${toVar(opVar)})`),
        };
      }),
    );
  }
}

/** Use css variables to control bg gradient color values */
function cxtBgGradientColorResolver([, mode = '', b]: string[]) {
  const { originVar, colorVar, opValue, variables } = getCxtColor(b, mode);
  const colorString = toVar(originVar, `hsl(${toVar(colorVar)} / ${toVar(`--un-${mode}-opacity`, opValue)})`);

  switch (mode) {
    case 'from':
      return {
        ...variables,
        '--un-gradient-from-position': '0%',
        '--un-gradient-from': `${colorString} var(--un-gradient-from-position)`,
        '--un-gradient-to-position': '100%',
        '--un-gradient-to': `rgb(255 255 255 / 0) var(--un-gradient-to-position)`,
        '--un-gradient-stops': 'var(--un-gradient-from), var(--un-gradient-to)',
      };
    case 'via':
      return {
        ...variables,
        '--un-gradient-via-position': '50%',
        '--un-gradient-to': 'rgb(255 255 255 / 0)',
        '--un-gradient-stops': `var(--un-gradient-from), ${colorString} var(--un-gradient-via-position), var(--un-gradient-to)`,
      };
    case 'to':
      return {
        ...variables,
        '--un-gradient-to-position': '100%',
        '--un-gradient-to': `${colorString} var(--un-gradient-to-position)`,
      };
  }
}
