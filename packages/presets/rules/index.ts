import type { CustomRule, PresetCtxOptions } from '../types';
import { color } from './color';

export function rules(options?: PresetCtxOptions): CustomRule[] {
  return [color(options)].flat();
}
