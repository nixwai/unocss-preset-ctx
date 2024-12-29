import { series } from 'gulp';
import { presetOutput } from '../paths';
import { delPath, run } from '../tasks';

export default series(
  () => delPath(presetOutput),
  () => run('vite build'),
);
