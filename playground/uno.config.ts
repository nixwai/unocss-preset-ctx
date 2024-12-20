import { presetCtx } from '@unocss-preset/ctx';
import { defineConfig, presetAttributify, presetUno } from 'unocss';

export default defineConfig({ presets: [presetAttributify(), presetUno(), presetCtx({ colors: ['com'] })] });
