import { presetCtx, themeColors } from '@unocss-preset/ctx';
import { defineConfig, presetUno } from 'unocss';

export default defineConfig({
  theme: { colors: themeColors({ primary: '#3451b2' }) },
  presets: [presetUno(), presetCtx()],
});
