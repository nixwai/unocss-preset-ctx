import type { CustomRule } from '../types';
import { bool } from './bool';
import { color } from './color';
import { reverse } from './reverse';

export const rules: CustomRule[] = [
  bool,
  reverse,
  color,
].flat();
