import { defineConfig, presetWind3 } from 'unocss';
import { presetCtx, themeColors } from 'unocss-preset-ctx';

export default defineConfig({
  theme: { colors: themeColors({ primary: '#3451b2' }) },
  presets: [presetWind3(), presetCtx()],
});
