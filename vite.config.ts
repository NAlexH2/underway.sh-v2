import { copyFileSync, mkdirSync } from "node:fs";
import { resolve } from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

const sectionEntries = () => ({
  name: "section-entries",
  closeBundle() {
    const outputDir = resolve(import.meta.dirname, "dist");
    const index = resolve(outputDir, "index.html");

    for (const section of ["experience", "projects"]) {
      const sectionDir = resolve(outputDir, section);
      mkdirSync(sectionDir, { recursive: true });
      copyFileSync(index, resolve(sectionDir, "index.html"));
    }
  },
});

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), tsconfigPaths(), sectionEntries()],
  // Preview over Tailscale: allow the tailnet hostname through Vite's host check.
  server: {
    allowedHosts: ["agentlaz.tail8a84ef.ts.net"],
  },
});
