import type { Route } from "./+types/about";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About | Saahas" },
    { name: "description", content: "Learn more about me" },
  ];
}

export default function About() {
  return (
    <main className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold text-text mb-8">About</h1>
        <div className="space-y-6 text-subtext1 leading-relaxed">
          <p className="text-lg">
            Welcome to my corner of the internet. I'm passionate about creating
            meaningful digital experiences and solving complex problems through
            thoughtful design and development.
          </p>
          <p>
            With a focus on clean code, user-centered design, and continuous
            learning, I strive to build solutions that make a difference.
          </p>
          <p>
            When I'm not coding, you'll find me exploring new technologies,
            contributing to open source projects, or sharing knowledge with the
            community.
          </p>
        </div>
      </div>
    </main>
  );
}
