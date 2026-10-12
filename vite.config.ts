// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { prerenderPaths } from "./scripts/site-routes.mjs";
import { blogMarkdown } from "./scripts/blog-markdown.mjs";

export default defineConfig({
  vite: {
    base: "/",
    plugins: [blogMarkdown()],
    define: { __BUILD_DATE__: JSON.stringify(new Date().toISOString().slice(0, 10)) },
  },
  tanstackStart: {
    prerender: { enabled: true, crawlLinks: false },
    pages: prerenderPaths.map((path) => ({ path, prerender: { enabled: true } })),
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
});
