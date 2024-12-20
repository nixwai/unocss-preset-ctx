import type { Preflight } from 'unocss';
import { mc } from 'magic-color';
import { ctxName, hslValue } from '../utils';

/**
 * 定义全局颜色配置
 * @param options 名称与颜色映射配置
 * @returns 返回作用于对应颜色的全局 CSS 规则
 */
export function preflightColors(options: Record<string, string>): Preflight {
  return {
    getCSS: () =>
      Object.entries(options)
        .map(([name, color]) => toRootColors(name, color))
        .join('\n '),
  };
}

export function toRootColors(name: string, color: string) {
  if (!mc.valid(color)) {
    return '';
  }
  const theme = mc.theme(color, { type: 'hsl' });
  // format structure： { 50: 'hsl(215 75 97)', 100: 'hsl(216 68 93)', ... } ==> [[`--ctx-${name}-50`: '215 75 97'], ...]
  const colors = Object.entries(theme).map(([k, v]) => [
    ctxName(name, k),
    hslValue(v),
  ]);
  colors.unshift([ctxName(name, 'DEFAULT'), mc(color).hsl().join(' ')]);
  return `:root {
    ${colors.map(([name, color]) => `${name}: ${color};`).join('\n')}
  }`;
}
