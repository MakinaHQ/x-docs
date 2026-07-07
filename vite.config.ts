import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { vocs } from "vocs/vite";

export default defineConfig(async () => {
  // Regenerate the static Contracts sidebar (sidebar.generated.ts) before Vocs
  // resolves the config. The scan reads src/pages, which only exists on the build
  // machine — baking the result keeps `vocs.config` filesystem-free at runtime, so
  // it survives the deployed serverless bundle. Runs before `vocs()` builds its
  // plugin list (and imports vocs.config -> sidebar.generated), so ordering holds.
  await import("./scripts/generate-sidebar.js");

  return {
    plugins: [react(), vocs()],
    // Mermaid is loaded via a dynamic import in Vocs' client component. Its
    // transitive `dayjs` dependency ships as UMD, which Vite's dev optimizer
    // otherwise serves without a `default` export ("does not provide an export
    // named 'default'"), so `mermaid.initialize` resolves as undefined and
    // diagrams fail to render. Pre-bundling them fixes the CJS->ESM interop.
    optimizeDeps: { include: ["mermaid", "dayjs"] },
  };
});
