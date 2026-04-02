import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    target: "es2020",
    cssCodeSplit: true,
    minify: "esbuild",
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks: {
          "vendor-react": ["react", "react-dom", "react-router-dom"],
          "vendor-data": ["@tanstack/react-query", "@supabase/supabase-js"],
          "vendor-radix": [
            "@radix-ui/react-dialog",
            "@radix-ui/react-select",
            "@radix-ui/react-label",
            "@radix-ui/react-checkbox",
            "@radix-ui/react-radio-group",
            "@radix-ui/react-slot",
            "@radix-ui/react-tooltip",
            "@radix-ui/react-accordion",
          ],
          "vendor-forms": ["react-hook-form", "@hookform/resolvers", "zod"],
          "vendor-ui": ["clsx", "tailwind-merge", "class-variance-authority", "lucide-react"],
        },
        assetFileNames: "assets/[name]-[hash][extname]",
        chunkFileNames: "assets/[name]-[hash].js",
        entryFileNames: "assets/[name]-[hash].js",
      },
    },
  },
}));
