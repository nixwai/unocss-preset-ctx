import type { Theme } from '@unocss/preset-mini';
import type { PresetCtxOptions } from '../types';
import { mc } from 'magic-color';
import { ctxName, hslValue } from '../utils';
import { initCtxThemeColors } from '../utils/color';

type Colors = Theme['colors'];

export function theme(options?: PresetCtxOptions): Theme {
  const config: Theme = {};
  if (options?.colors) {
    config.colors = { ctx: initCtxThemeColors(options.colors) };
  }
  return config;
}

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
  const [h, s, l] = hslValue(color).split(' ');
  const hue = `var(${ctxName(`${name}`, 'h')}, ${h})`;
  const saturation = `var(${ctxName(`${name}`, 's')}, ${s})`;
  const lightness = `var(${ctxName(`${name}`, 'l')}, ${l})`;
  return `hsl(${hue} ${saturation} ${lightness})`;
}
