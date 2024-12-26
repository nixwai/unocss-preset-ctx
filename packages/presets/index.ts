import type { Theme } from '@unocss/preset-mini';
import { definePreset } from 'unocss';
import { rules } from './rules';
import { shortcuts } from './shortcuts';

export const presetCtx = definePreset<undefined, Theme>(() => {
  return {
    name: 'unocss-preset-ctx',
    layer: 'unocss-preset-ctx',
    layers: { 'unocss-preset-ctx': -100 },
    rules,
    shortcuts,
  };
});

export { themeColors } from './theme';

export * from './types';
