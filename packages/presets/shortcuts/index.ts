import type { CustomShortcut } from '../types';

export const shortcuts: CustomShortcut[] = [
  [
    /^ctxs-(.+)$/,
    ([,str]) => {
      const splitIndex = str.indexOf('_');
      if (splitIndex > 0) {
        const name = str.slice(0, splitIndex);
        const value = str.slice(splitIndex + 1);
        const presets = value.split(/,(?![^\][]*\])/g).join(' ');
        return [
          `[&.ctxs-${name},&_.ctxs-${name},&.${name},&_.${name},&[ctxs-${name}],&_[ctxs-${name}],&[${name}],&_[${name}]]:(${presets})`,
        ];
      }
    },
  ],
];
