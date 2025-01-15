import type { CustomRule } from '../types';
import { toCtxName } from '../utils';

export const reverse: CustomRule[] = [
  [
    /^ctx-r-(.+)$/,
    ([, s]) => {
      const name = s.match(/(.*)-[yn]$/)?.[1];
      const value = s.match(/.*([yn])$/)?.[1];
      if (name && value) {
        return { [toCtxName('r', name)]: value === 'y' ? -1 : 1 };
      }
      if (value) {
        return { [toCtxName('r')]: value === 'y' ? -1 : 1 };
      }
    },
  ],
];
