import { presetCtx, themeColors } from '@unocss-preset/ctx';
import { defineConfig, presetAttributify, presetWind3 } from 'unocss';

export default defineConfig({
  theme: { colors: themeColors({ primary: '#0099FF' }) },
  presets: [presetAttributify(), presetWind3(), presetCtx()],
});
