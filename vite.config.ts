// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { readdirSync, readFileSync } from "node:fs";

const articles = readdirSync("src/content/blog").filter((file) => file.endsWith(".md")).map((file) => {
  const content = readFileSync(`src/content/blog/${file}`, "utf8");
  return /\nslug:\s*([^\n]+)/.exec(content)?.[1]?.trim() ?? file.replace(/\.md$/, "");
});
const care = ["diabetes", "pcos", "weight-management", "glp-1", "heart-health", "kidney-health", "plant-based", "intuitive-eating", "corporate-wellness", "group-family"];
const categories = ["diabetes", "pcos", "glp-1", "kidney", "heart", "recipes", "videos"];
const paths = ["/", "/insurance", "/about", "/blog", "/privacy", "/notice-of-privacy-practices", "/terms", ...care.map((slug) => `/conditions/${slug}`), ...categories.map((cat) => `/blog/category/${cat}`), ...articles.map((slug) => `/blog/${slug}`)];

export default defineConfig({
  vite: { base: "/" },
  tanstackStart: {
    prerender: { enabled: true, crawlLinks: false },
    pages: paths.map((path) => ({ path, prerender: { enabled: true } })),
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
});
