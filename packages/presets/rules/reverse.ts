import type { CustomRule } from '../types';
import { ctxName } from '../utils';

export const reverse: CustomRule[] = [
  [
    /^ctx-reverse-(.+)$/,
    ([, s]) => {
      const name = s.match(/(.*)-[yn]$/)?.[1];
      const value = s.match(/.*([yn])$/)?.[1];
      if (name && value) {
        return { [ctxName('reverse', name)]: value === 'y' ? -1 : 1 };
      }
      if (value) {
        return { [ctxName('reverse')]: value === 'y' ? -1 : 1 };
      }
    },
  ],
];
