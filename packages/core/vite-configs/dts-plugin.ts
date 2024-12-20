import type { PluginOption } from "vite";
import { resolve } from "node:path";
import dts from "vite-plugin-dts";
import { projRoot } from "../paths";

/** output ts file */
export function dtsPlugin(rootPath: string, outputPath: string) {
  return dts({
    entryRoot: rootPath,
    include: rootPath,
    exclude: [resolve(rootPath, "**/__test__")],
    outDir: resolve(outputPath, "types"),
    tsconfigPath: resolve(projRoot, "tsconfig.json"),
  }) as PluginOption;
}
