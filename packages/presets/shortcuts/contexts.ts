import type { CustomShortcut } from '../types';

export const contexts: CustomShortcut[] = [
  [
    /^ctxs-(.+)$/,
    ([, s]) => {
      return `ctx-${s} [&>*]:(ctx-${s})`;
    },
  ],
  [
    /^reverse-ctxs(.+)$/,
    ([, s]) => {
      return `^reverse-ctx${s} [&>*]:(reverse-ctx${s})`;
    },
  ],
];
