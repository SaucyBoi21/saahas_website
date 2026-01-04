import type { Route } from "./+types/home";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Home | Saahas" },
    { name: "description", content: "Welcome to my website" },
  ];
}

export default function Home() {
  return (
    <main className="min-h-screen pt-24 pb-16 px-6 flex items-center justify-center">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-6xl md:text-7xl font-bold text-text mb-6">
          Hello, I'm Saahas
        </h1>
        <p className="text-xl md:text-2xl text-subtext1 mb-12 max-w-2xl mx-auto leading-relaxed">
          A developer passionate about creating elegant solutions and meaningful
          digital experiences.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            to="/portfolio"
            className="px-8 py-3 rounded-lg bg-lavender text-base font-medium hover:bg-lavender/80 transition-colors duration-200"
          >
            View Portfolio
          </Link>
          <Link
            to="/contact"
            className="px-8 py-3 rounded-lg bg-surface0 border border-surface1 text-text font-medium hover:border-lavender/30 transition-colors duration-200"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </main>
  );
}
