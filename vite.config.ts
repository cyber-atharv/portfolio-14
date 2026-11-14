import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  base: '/portfolio-14/',
  tanstackStart: {
    server: { entry: "server" },
  },
});
