import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      entry: "./src/main.ts",
      fileName: "main",
      formats: ["cjs", "es", "umd"],
      name: "LynxtsNative",
    },
    rollupOptions: {
      external: ["react-native", "@react-native"],
    },
    sourcemap: true,
  },
  plugins: [
    dts({
      compilerOptions: {
        emitDeclarationOnly: true,
        incremental: false,
      },
      include: ["src/**", "typings/**"],
    }),
  ],
});
