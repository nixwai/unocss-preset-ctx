import type { CustomRule } from '../types';
import { color } from './color';
import { degree } from './degree';
import { opacity } from './opacity';
import { reverse } from './reverse';

export const rules: CustomRule[] = [
  reverse,
  color,
  degree,
  opacity,
].flat();
