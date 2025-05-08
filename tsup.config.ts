import { defineConfig } from "tsup";

export default defineConfig({
  clean: true, // clean dist before build
  dts: true, // generate .d.ts files
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
});
