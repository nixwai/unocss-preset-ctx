import type { CustomRule } from '../types';
import { color } from './color';
import { lightness } from './lightness';
import { opacity } from './opacity';
import { reverse } from './reverse';

export const rules: CustomRule[] = [
  reverse,
  color,
  lightness,
  opacity,
].flat();
