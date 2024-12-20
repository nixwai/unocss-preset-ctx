import type { CustomRule, PresetCtxOptions } from '../types';
import { resolveContextColor, reverseContextColor } from '../utils/color';

export function color(options?: PresetCtxOptions): CustomRule[] {
  const names: string[] = options?.colors || [];
  return [
    // Set context colors (ctx-color-${name}_${color}_${lightness})
    [
      /^ctx-color-(.+)$/,
      ([, s], { theme }) => {
        // Use "_" to separate name、 color and lightness
        const [name, color, lightness] = s.split('_');
        if (names.includes(name) && color) {
          // Set colors and various lightness levels
          const colors = resolveContextColor(
            name,
            color,
            theme,
            lightness?.split('-'),
          );
          if (colors) {
            return [colors];
          }
        }
      },
    ],
    // Reverse all context colors
    [/^reverse-ctx$/, () => names.map(reverseContextColor)],
    // Reverse specific context colors
    [
      /^reverse-ctx-(.+)$/,
      ([, s]) => {
        if (names.includes(s)) {
          return reverseContextColor(s);
        }
      },
    ],
  ];
}
