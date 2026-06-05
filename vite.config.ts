import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { vocs } from "vocs/vite";

// to fix: https://github.com/wevm/vocs/issues/450
// not needed once fixed
export default defineConfig(async () => ({
  plugins: [react(), vocs({})],
}));
