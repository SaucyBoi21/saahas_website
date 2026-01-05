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
        <div className="mb-8">
          <div className="inline-block w-20 h-1 bg-gradient-to-r from-lavender via-blue to-lavender mb-8 rounded-full"></div>
        </div>
        <h1 className="text-6xl md:text-7xl font-bold mb-6">
          <span className="text-text">Hello, I'm </span>
          <span className="text-lavender">Saahas</span>
        </h1>
        <p className="text-xl md:text-2xl text-subtext1 mb-12 max-w-2xl mx-auto leading-relaxed">
          A developer passionate about creating elegant solutions and meaningful
          digital experiences.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            to="/portfolio"
            className="px-8 py-3.5 rounded-lg bg-lavender text-base font-medium hover:bg-lavender/80 hover:shadow-lg hover:shadow-lavender/30 transition-all duration-200 transform hover:-translate-y-0.5"
          >
            View Portfolio
          </Link>
          <Link
            to="/contact"
            className="px-8 py-3.5 rounded-lg bg-surface0 border border-surface1 text-text font-medium hover:border-lavender/50 hover:bg-surface1 transition-all duration-200 transform hover:-translate-y-0.5"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </main>
  );
}
