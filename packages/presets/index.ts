import type { Theme } from "@unocss/preset-mini";
import { definePreset } from "unocss";

interface PresetCtxOptions {}

export const presetMortiseTenon = definePreset<PresetCtxOptions, Theme>(() => {
  return { name: "unocss-preset-ctx" };
});
