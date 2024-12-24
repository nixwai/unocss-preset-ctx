import type { CustomRule } from '../types';
import { ctxName } from '../utils';

export const reverse: CustomRule[] = [
  [
    /^ctx-r-(.+)$/,
    ([, s]) => {
      const name = s.match(/(.*)-[yn]$/)?.[1];
      const value = s.match(/.*([yn])$/)?.[1];
      if (name && value) {
        return { [ctxName('r', name)]: value === 'y' ? -1 : 1 };
      }
      if (value) {
        return { [ctxName('r')]: value === 'y' ? -1 : 1 };
      }
    },
  ],
];
