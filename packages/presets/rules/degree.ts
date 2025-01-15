import type { CustomRule } from '../types';
import { toCtxName, toVar } from '../utils';

export const degree: CustomRule[] = [
  [
    /^ctx-deg-(.+)$/,
    ([, s]) => {
      const name = s.match(/(.*)-\d+$/)?.[1]?.replace(/(.*)-$/, '$1');
      const value = s.match(/-(-?\d+)$/)?.[1];
      if (!name) {
        return;
      }
      const diffValue = (500 - Number(value)) / 10;
      let [ctx1, ctx2] = name.split('_');
      const ctxN = toCtxName('deg', ctx1);

      // lightness can be assign by other ctx-deg
      if (ctx2?.slice(0, 8) === 'ctx-deg-') {
        ctx2 = ctx2.slice(8);
        const ctx2Value = toVar(toCtxName('deg', ctx2), toVar(toCtxName('c', ctx2, 'deg'), 0));
        if (diffValue) {
          return { [ctxN]: `calc(${ctx2Value} + ${diffValue})` };
        }
        return { [ctxN]: ctx2Value };
      }
      if (value) {
        return { [ctxN]: diffValue };
      }
    },
  ],
];
