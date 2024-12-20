import { resolve } from 'node:path';

/** project root */
export const projRoot = resolve(__dirname, '../../');
/** packages root */
export const pkgRoot = resolve(projRoot, 'packages');
/** presets root */
export const presetRoot = resolve(pkgRoot, 'presets');

/** `/dist` */
export const buildOutput = resolve(projRoot, 'dist');
/** `/dist/unocss-preset-ctx` */
export const presetOutput = resolve(buildOutput, 'unocss-preset-ctx');
