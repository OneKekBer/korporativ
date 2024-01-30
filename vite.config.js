import react from "@vitejs/plugin-react"

import { defineConfig } from "vite"

// https://vitejs.dev/config/
export default defineConfig({
   plugins: [react()],
   resolve: {
      alias: {
         images: "/public/images",
         common: "/src/common",
         assets: "/src/assets",
         constants: "/src/constants",
         icons: "/public/images/icons",
         //  state: "/src/state",
         utils: "/src/utils",
         //  assets: "/src/assets",
         //  constants: "/src/constants",
      },
   },
})
