import type { CustomShortcut } from '../types';

export const shortcuts: CustomShortcut[] = [
  [
    /^ctxs-(.+)$/,
    ([,str]) => {
      const [name, value] = str.split('_');
      if (value) {
        const presets = value.split(',').join(' ');
        return [
          `[&.ctxs-${name}]:(${presets})`,
          `[&>.ctxs-${name}]:(${presets})`,
        ];
      }
    },
  ],
];
