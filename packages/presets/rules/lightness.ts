import type { CustomRule } from '../types';
import { ctxName } from '../utils';

export const lightness: CustomRule[] = [
  [
    /^ctx-l-(.+)$/,
    ([, s]) => {
      const name = s.match(/(.*)-\d+$/)?.[1]?.replace(/(.*)-$/, '$1');
      const value = s.match(/-(-?\d+)$/)?.[1];
      if (name && value) {
        return { [ctxName('l', name)]: (500 - Number(value)) / 10 };
      }
    },
  ],
];
