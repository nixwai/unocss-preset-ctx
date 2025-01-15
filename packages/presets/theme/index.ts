import type { Theme } from '@unocss/preset-mini';
import { mc } from 'magic-color';
import { toCtxName, toHslValue } from '../utils';

type Colors = Theme['colors'];

/**
 * Customize theme colors
 * @param options Configuration mapping names to colors
 * @returns Returns corresponding colors with multiple brightness levels
 */
export function themeColors(options: Record<string, string>): Colors {
  const colors: Record<string, Record<string, string>> = {};
  for (const name in options) {
    const mcColor = mc.theme(options[name], { type: 'hsl' });
    // Use CSS variable names as actual color values, with configured color values as defaults
    colors[name] = {};
    colors[name].DEFAULT = getHslColorValue(
      `${name}-DEFAULT`,
      mc(options[name]).hsl().join(' '),
    );
    Object.entries(mcColor).forEach(([k, v]) => {
      colors[name][k] = getHslColorValue(`${name}-${k}`, v);
    });
  }
  return colors;
}

/**
 * Get dynamic HSL variable value
 * @param name The name of the variable
 * @param color HSL color value
 * @returns Dynamic CSS variable value corresponding to the HSL value
 */
function getHslColorValue(name: string, color: string) {
  const [h, s, l] = toHslValue(color).split(' ');
  const hue = `var(${toCtxName(`${name}`, 'h')}, ${h})`;
  const saturation = `var(${toCtxName(`${name}`, 's')}, ${s})`;
  const lightness = `var(${toCtxName(`${name}`, 'l')}, ${l})`;
  return `hsl(${hue} ${saturation} ${lightness})`;
}
