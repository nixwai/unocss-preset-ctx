import { resolve } from "node:path";
import { defineConfig } from "vite";
import { presetOutput, presetRoot } from "../paths";
import { copyPlugin, dtsPlugin } from "../vite-configs";

const entryIndex = resolve(__dirname, "./index.ts");

export default defineConfig({
  build: {
    emptyOutDir: false,
    lib: {
      entry: { index: entryIndex },
      name: "unocss-preset-ctx",
      fileName: "unocss-preset-ctx",
    },
    rollupOptions: {
      external: ["unocss", "magic-color", "@unocss/preset-mini"],
      output: [
        {
          format: "es",
          entryFileNames: "[name].js",
          exports: "named",
          dir: resolve(presetOutput, "dist"),
        },
      ],
    },
  },
  resolve: { alias: { "@unocss-preset/ctx": presetRoot } },
  plugins: [dtsPlugin(presetRoot, presetOutput), copyPlugin(presetOutput)],
});
