import { presetCtx, themeColors } from '@unocss-preset/ctx';
import { defineConfig, presetAttributify, presetUno } from 'unocss';

export default defineConfig({
  theme: { colors: themeColors({ primary: '#0099FF' }) },
  presets: [presetAttributify(), presetUno(), presetCtx()],
});
