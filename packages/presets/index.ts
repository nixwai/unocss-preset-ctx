import type { Theme } from '@unocss/preset-mini';
import type { PresetCtxOptions } from './types';
import { definePreset } from 'unocss';
import { rules } from './rules';

export const presetCtx = definePreset<PresetCtxOptions, Theme>(() => {
  return {
    name: 'unocss-preset-ctx',
    layer: 'unocss-preset-ctx',
    layers: { 'unocss-preset-ctx': -100 },
    rules,
  };
});

export { themeColors } from './theme';

export * from './types';
