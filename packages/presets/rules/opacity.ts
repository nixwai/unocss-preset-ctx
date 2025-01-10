import type { CustomRule } from '../types';
import { ctxName, toVar } from '../utils';

export const opacity: CustomRule[] = [
  [
    /^ctx-op-(.+)$/,
    ([, s]) => {
      const name = s.match(/(.*)-\d+$/)?.[1];
      const value = s.match(/.*-(\d+)$/)?.[1];
      if (!name) {
        return;
      }
      const [ctx1, ctx2] = name.split('_');
      const ctxN = ctxName('op', ctx1);
      // lightness can be assign by other ctx-op
      if (ctx2?.slice(0, 7) === 'ctx-op-') {
        const op = (Number(value) - 100) / 100;
        if (op) {
          return { [ctxN]: `calc(${toVar(`--${ctx2}`, 1)} + ${op})` };
        }
        return { [ctxN]: toVar(`--${ctx2}`, 1) };
      }
      if (value) {
        return { [ctxN]: Number(value) / 100 };
      }
    },
  ],
];
