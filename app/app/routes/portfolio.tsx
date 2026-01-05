import type { Route } from "./+types/portfolio";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Portfolio | Saahas" },
    { name: "description", content: "My projects and experience" },
  ];
}

export default function Portfolio() {
  const tagColors = ["blue", "teal", "blue", "teal"];

  const experience = [
    {
      title: "Reseach & Development Intern",
      company: "Manhattan Associates",
      period: "Incoming: 2026",
      description:
        "Leading development of scalable web applications and mentoring junior developers. Focused on modern architecture and best practices.",
      achievements: [
        "Architected microservices infrastructure",
        "Improved application performance by 40%",
        "Led team of 5 developers",
      ],
    },
    {
      title: "Research Assistant",
      company: "Clayton Labs",
      period: "2025 - Present",
      description:
        "Developed full-stack applications from concept to deployment. Worked closely with design and product teams to deliver user-centric solutions.",
      achievements: [
        "Built customer-facing dashboard",
        "Implemented CI/CD pipelines",
        "Reduced deployment time by 60%",
      ],
    },
    {
      title: "Software Engineering Intern",
      company: "Apparity",
      period: "2023",
      description:
        "Created interactive web experiences for clients across various industries. Collaborated on multiple projects simultaneously.",
      achievements: [
        "Delivered 20+ client projects",
        "Increased client satisfaction scores",
        "Optimized codebase for maintainability",
      ],
    },
    {
      title: "Research Assistant",
      company: "Ferrarezi Labs",
      period: "2022 - 2023",
      description:
        "Started my professional journey building responsive websites and learning modern web technologies. Contributed to team projects and gained valuable experience.",
      achievements: [
        "Completed frontend development training",
        "Contributed to 10+ projects",
        "Learned modern frameworks and tools",
      ],
    },
  ];

  const projects = [
    {
      title: "Project One",
      description:
        "A comprehensive web application built with modern technologies, focusing on performance and user experience.",
      highlights: [
        "Implemented responsive design for multiple device sizes",
        "Optimized performance with code splitting and lazy loading",
        "Integrated third-party APIs for real-time data",
        "Built with accessibility standards in mind",
      ],
      tags: ["React", "TypeScript", "Tailwind"],
    },
    {
      title: "Project Two",
      description:
        "A full-stack application showcasing expertise in backend development and database design.",
      highlights: [
        "Designed and implemented RESTful API architecture",
        "Created efficient database schema with proper indexing",
        "Implemented authentication and authorization",
        "Deployed using containerization and CI/CD pipelines",
      ],
      tags: ["Node.js", "Express", "MongoDB"],
    },
    {
      title: "Project Three",
      description:
        "A Python-based application demonstrating versatility and problem-solving in data processing.",
      highlights: [
        "Developed scalable data processing pipeline",
        "Implemented automated testing suite",
        "Created intuitive command-line interface",
        "Optimized algorithms for large datasets",
      ],
      tags: ["Python", "Django", "PostgreSQL"],
    },
  ];

  const getTagColor = (index: number) => {
    return tagColors[index % tagColors.length];
  };

  const colorClasses: Record<string, { bg: string; text: string; border: string }> = {
    blue: { bg: "bg-blue/15", text: "text-blue", border: "border-blue/40" },
    teal: { bg: "bg-teal/15", text: "text-teal", border: "border-teal/40" },
  };

  return (
    <main className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold text-text mb-4">Portfolio</h1>
        <div className="w-16 h-1 bg-gradient-to-r from-lavender to-blue mb-12 rounded-full"></div>

        {/* Timeline Section */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-surface1 to-transparent"></div>
            <div className="w-2 h-2 rounded-full bg-surface1"></div>
            <h2 className="text-3xl font-semibold text-text">Work Experience</h2>
            <div className="w-2 h-2 rounded-full bg-surface1"></div>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-surface1 to-transparent"></div>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-lavender via-blue to-transparent"></div>

            <div className="space-y-12">
              {experience.map((entry, index) => (
                <div
                  key={index}
                  className="relative pl-20 animate-fadeInUp"
                  style={{ animationDelay: `${index * 150}ms`, animationFillMode: "both" }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 top-2 w-4 h-4 rounded-full bg-surface0 border-4 border-lavender shadow-lg shadow-lavender/20 group-hover:scale-125 group-hover:shadow-lavender/40 transition-all duration-300 z-10"></div>

                  <div className="group relative p-6 rounded-xl bg-surface0 border border-surface1 hover:border-lavender/50 hover:shadow-lg hover:shadow-lavender/10 transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                    {/* Animated background gradient on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-lavender/5 via-transparent to-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                        <div>
                          <h3 className="text-2xl font-semibold text-text mb-1 group-hover:text-lavender transition-colors duration-300">
                            {entry.title}
                          </h3>
                          <p className="text-lg text-lavender font-medium">{entry.company}</p>
                        </div>
                        <div className="text-sm font-medium text-subtext1 bg-surface1 px-4 py-2 rounded-full inline-block group-hover:bg-surface2 transition-colors duration-300">
                          {entry.period}
                        </div>
                      </div>

                      <p className="text-subtext1 leading-relaxed mb-4">{entry.description}</p>

                      <div className="space-y-2">
                        <h4 className="text-xs font-medium text-text uppercase tracking-wide">
                          Key Achievements
                        </h4>
                        <ul className="space-y-2">
                          {entry.achievements.map((achievement, achievementIndex) => (
                            <li
                              key={achievementIndex}
                              className="flex items-start gap-3 text-subtext1 group-hover:translate-x-1 transition-transform duration-300"
                              style={{ transitionDelay: `${achievementIndex * 50}ms` }}
                            >
                              <span className="text-blue mt-1 flex-shrink-0 font-bold group-hover:scale-125 transition-transform duration-300">•</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section - More Compact */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-surface1 to-transparent"></div>
            <div className="w-2 h-2 rounded-full bg-surface1"></div>
            <h2 className="text-3xl font-semibold text-text">Projects</h2>
            <div className="w-2 h-2 rounded-full bg-surface1"></div>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-surface1 to-transparent"></div>
          </div>

          <div className="space-y-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative p-6 rounded-xl bg-surface0 border border-surface1 hover:border-lavender/50 hover:shadow-lg hover:shadow-lavender/10 transition-all duration-300 hover:-translate-y-1 overflow-hidden animate-fadeInUp"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: "both" }}
              >
                {/* Animated left border */}
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-lavender to-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-l-xl"></div>
                
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-lavender/5 via-transparent to-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-text mb-2 flex items-center gap-3 group-hover:text-lavender transition-colors duration-300">
                      <span className="text-lavender text-2xl group-hover:rotate-90 transition-transform duration-300">▹</span>
                      {project.title}
                    </h3>
                    <p className="text-subtext1 leading-relaxed mb-4 ml-7">
                      {project.description}
                    </p>

                    <div className="ml-7 space-y-2">
                      <h4 className="text-xs font-medium text-text uppercase tracking-wide">
                        Key Features
                      </h4>
                      <ul className="space-y-1.5">
                        {project.highlights.map((highlight, highlightIndex) => (
                          <li
                            key={highlightIndex}
                            className="flex items-start gap-2 text-sm text-subtext1 group-hover:translate-x-1 transition-transform duration-300"
                            style={{ transitionDelay: `${highlightIndex * 50}ms` }}
                          >
                            <span className="text-blue mt-1 flex-shrink-0 font-bold group-hover:scale-125 transition-transform duration-300">•</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 md:justify-end">
                    {project.tags.map((tag, tagIndex) => {
                      const color = getTagColor(tagIndex);
                      const classes = colorClasses[color];
                      return (
                        <span
                          key={tagIndex}
                          className={`px-3 py-1.5 text-sm rounded-full border ${classes.bg} ${classes.text} ${classes.border} hover:scale-110 hover:rotate-1 transition-all duration-200 font-medium`}
                        >
                          {tag}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
