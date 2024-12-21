import { mc } from 'magic-color';
import { ctxName, hslValue } from './utils';

/**
 * Modify the value of the color variable
 * @param params params Parameter object
 * @param params.name Color name
 * @param params.color Color
 * @param params.dom params.dom Target element, modifying the entire page theme when passing `document.documentElement`
 */
export function updateThemeColor(params: { name: string, color: string, dom?: HTMLElement }) {
  const { name, color, dom } = params;
  if (!dom) {
    return;
  }

  const colors = getHslColors(name, color);

  colors.forEach(([name, color]) => {
    dom.style.setProperty(name, color);
  });
}

/**
 * Get the HSL color value
 * @param name Color name
 * @param color Color
 * @return Returns a list of HSL color value combinations
 */
function getHslColors(name: string, color: string) {
  const theme = mc.theme(color, { type: 'hsl' });
  const colors: string[][] = [];
  const defaultHsl = mc(color).hsl();
  colors.push(
    [ctxName(name, 'DEFAULT', 'h'), String(defaultHsl[0])],
    [ctxName(name, 'DEFAULT', 's'), String(defaultHsl[1])],
    [ctxName(name, 'DEFAULT', 'l'), String(defaultHsl[2])],
  );
  Object.entries(theme).forEach(([k, v]) => {
    const [h, s, l] = hslValue(v).split(' ');
    colors.push(
      [ctxName(name, k, 'h'), h],
      [ctxName(name, k, 's'), s],
      [ctxName(name, k, 'l'), l],
    );
  });
  return colors;
}
