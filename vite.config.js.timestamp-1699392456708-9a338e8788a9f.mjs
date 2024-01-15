// vite.config.js
import react from "file:///C:/programming/work/korp/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { defineConfig } from "file:///C:/programming/work/korp/node_modules/vite/dist/node/index.js";
var vite_config_default = defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      images: "/public/images",
      common: "/src/common",
      assets: "/src/assets",
      constants: "/src/constants",
      icons: "/public/images/icons",
      //  state: "/src/state",
      utils: "/src/utils"
      //  assets: "/src/assets",
      //  constants: "/src/constants",
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxwcm9ncmFtbWluZ1xcXFx3b3JrXFxcXGtvcnBcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXHByb2dyYW1taW5nXFxcXHdvcmtcXFxca29ycFxcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovcHJvZ3JhbW1pbmcvd29yay9rb3JwL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiO1xuXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgIHBsdWdpbnM6IFtyZWFjdCgpXSxcbiAgIHJlc29sdmU6IHtcbiAgICAgIGFsaWFzOiB7XG4gICAgICAgICBpbWFnZXM6IFwiL3B1YmxpYy9pbWFnZXNcIixcbiAgICAgICAgIGNvbW1vbjogXCIvc3JjL2NvbW1vblwiLFxuICAgICAgICAgYXNzZXRzOiBcIi9zcmMvYXNzZXRzXCIsXG4gICAgICAgICBjb25zdGFudHM6IFwiL3NyYy9jb25zdGFudHNcIixcbiAgICAgICAgIGljb25zOiBcIi9wdWJsaWMvaW1hZ2VzL2ljb25zXCIsXG4gICAgICAgICAvLyAgc3RhdGU6IFwiL3NyYy9zdGF0ZVwiLFxuICAgICAgICAgdXRpbHM6IFwiL3NyYy91dGlsc1wiLFxuICAgICAgICAgLy8gIGFzc2V0czogXCIvc3JjL2Fzc2V0c1wiLFxuICAgICAgICAgLy8gIGNvbnN0YW50czogXCIvc3JjL2NvbnN0YW50c1wiLFxuICAgICAgfSxcbiAgIH0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBa1EsT0FBTyxXQUFXO0FBRXBSLFNBQVMsb0JBQW9CO0FBRzdCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQ3pCLFNBQVMsQ0FBQyxNQUFNLENBQUM7QUFBQSxFQUNqQixTQUFTO0FBQUEsSUFDTixPQUFPO0FBQUEsTUFDSixRQUFRO0FBQUEsTUFDUixRQUFRO0FBQUEsTUFDUixRQUFRO0FBQUEsTUFDUixXQUFXO0FBQUEsTUFDWCxPQUFPO0FBQUE7QUFBQSxNQUVQLE9BQU87QUFBQTtBQUFBO0FBQUEsSUFHVjtBQUFBLEVBQ0g7QUFDSCxDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
