import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import tsconfigPaths from "vite-tsconfig-paths";


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss(),tsconfigPaths()],
  // Preview over Tailscale: allow the tailnet hostname through Vite's host check.
  server: {
    allowedHosts: ["agentlaz.tail8a84ef.ts.net"],
  },
})
