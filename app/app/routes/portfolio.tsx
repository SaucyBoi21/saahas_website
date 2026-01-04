import type { Route } from "./+types/portfolio";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Portfolio | Saahas" },
    { name: "description", content: "My projects and experience" },
  ];
}

export default function Portfolio() {
  const projects = [
    {
      title: "Project One",
      description:
        "A brief description of your project, highlighting key features and technologies used.",
      tags: ["React", "TypeScript", "Tailwind"],
    },
    {
      title: "Project Two",
      description:
        "Another project showcasing your skills and expertise in different domains.",
      tags: ["Node.js", "Express", "MongoDB"],
    },
    {
      title: "Project Three",
      description:
        "A third project that demonstrates your versatility and problem-solving abilities.",
      tags: ["Python", "Django", "PostgreSQL"],
    },
  ];

  return (
    <main className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-text mb-12">Portfolio</h1>
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-surface0 border border-surface1 hover:border-lavender/30 transition-colors duration-200"
            >
              <h2 className="text-2xl font-semibold text-text mb-3">
                {project.title}
              </h2>
              <p className="text-subtext1 mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 text-sm rounded-full bg-surface1 text-subtext0"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
