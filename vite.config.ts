import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [react(), dts({ insertTypesEntry: true })],
  build: {
    lib: {
      entry: resolve(__dirname, "src/CrudeUI/index.ts"),
      name: "CrudeUI",
      fileName: "index",
    },
    rollupOptions: {
      external: ["react", "react-dom", "styled"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          styled: "styled-components",
        },
      },
    },
  },
});
