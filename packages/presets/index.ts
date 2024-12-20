import type { Theme } from '@unocss/preset-mini';
import type { PresetCtxOptions } from './types';
import { definePreset } from 'unocss';
import { rules } from './rules';
import { shortcuts } from './shortcuts';
import { theme } from './theme';

export const presetCtx = definePreset<PresetCtxOptions, Theme>((options) => {
  return {
    name: 'unocss-preset-ctx',
    theme: theme(options),
    rules: rules(options),
    shortcuts,
  };
});

export * from './types';
