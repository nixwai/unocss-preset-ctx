import type { CustomRule } from '../types';
import { ctxName } from '../utils';

export const bool: CustomRule[] = [
  [
    /^ctx-b-(.+)$/,
    ([, s]) => {
      const name = s.match(/(.*)-[yn]$/)?.[1];
      const bool = s.match(/.*-([yn])$/)?.[1];
      if (name && bool) {
        return { [ctxName('b', name)]: bool === 'y' ? 1 : 0 };
      }
      if (bool) {
        return { [ctxName('b')]: bool === 'y' ? 1 : 0 };
      }
    },
  ],
];
