import type { Config } from "@react-router/dev/config";

export default {
  appDirectory: "app",

  // GitHub Pages = static host, so no runtime SSR
  ssr: false,

  // SPA mode (no explicit `prerender` field) – React Router will output a
  // single HTML file (index.html) that can hydrate any route.
  // See: https://reactrouter.com/how-to/spa

  // Your app is served from /saahas_website on GitHub Pages
  basename: "/saahas_website",
} satisfies Config;


