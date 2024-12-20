import type { CustomShortcut } from '../types';
import { contexts } from './contexts';

export const shortcuts: CustomShortcut[] = [contexts].flat();
