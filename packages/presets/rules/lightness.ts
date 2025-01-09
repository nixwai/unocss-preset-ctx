import type { CustomRule } from '../types';
import { ctxName, toVar } from '../utils';

export const lightness: CustomRule[] = [
  [
    /^ctx-l-(.+)$/,
    ([, s]) => {
      const name = s.match(/(.*)-\d+$/)?.[1]?.replace(/(.*)-$/, '$1');
      const value = s.match(/-(-?\d+)$/)?.[1];
      if (!name) {
        return;
      }
      const diff = (500 - Number(value)) / 10;
      const [ctx1, ctx2] = name.split('_');
      const ctxN = ctxName('l', ctx1);

      // lightness can be assign by other ctx-l
      if (ctx2?.slice(0, 6) === 'ctx-l-') {
        if (diff) {
          return { [ctxN]: `calc(${toVar(`--${ctx2}`, 0)} + ${diff})` };
        }
        return { [ctxN]: toVar(`--${ctx2}`, 0) };
      }
      if (value) {
        return { [ctxN]: diff };
      }
    },
  ],
];
