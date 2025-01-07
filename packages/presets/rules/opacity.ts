import type { CustomRule } from '../types';
import { ctxName } from '../utils';

export const opacity: CustomRule[] = [
  [
    /^ctx-op-(.+)$/,
    ([, s]) => {
      const name = s.match(/(.*)-\d+$/)?.[1];
      const value = s.match(/.*-(\d+)$/)?.[1];
      if (name && value) {
        return { [ctxName('op', name)]: Number(value) / 100 };
      }
    },
  ],
];
