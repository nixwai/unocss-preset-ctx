import type { CustomRule } from '../types';
import { toCtxName, toVar } from '../utils';

export const opacity: CustomRule[] = [
  [
    /^ctx-op-(.+)$/,
    ([, s]) => {
      const name = s.match(/(.*)-\d+$/)?.[1];
      const value = s.match(/.*-(\d+)$/)?.[1];
      if (!name) {
        return;
      }
      let [ctx1, ctx2] = name.split('_');
      const ctxVar = toCtxName('op', ctx1);
      // lightness can be assign by other ctx-op
      if (ctx2?.slice(0, 7) === 'ctx-op-') {
        ctx2 = ctx2.slice(7);
        const op = (Number(value) - 100) / 100;
        const ctx2Value = toVar(toCtxName('op', ctx2), toVar(toCtxName('c', ctx2, 'op'), 1));
        if (op) {
          return { [ctxVar]: `calc(${ctx2Value} + ${op})` };
        }
        return { [ctxVar]: ctx2Value };
      }
      if (value) {
        return { [ctxVar]: Number(value) / 100 };
      }
    },
  ],
];
