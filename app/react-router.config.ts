import type { Config } from "@react-router/dev/config";

export default {
  appDirectory: "app",

  // We are deploying to GitHub Pages (static hosting), so disable SSR.
  ssr: false,

  // Pre-render routes to static HTML files (GitHub Pages needs index.html).
  prerender: true,

  // Your site lives at /saahas_website on GitHub Pages.
  basename: "/saahas_website",
} satisfies Config;

