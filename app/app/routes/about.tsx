import type { Route } from "./+types/about";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About | Saahas" },
    { name: "description", content: "Learn more about me" },
  ];
}

export default function About() {
  const skills = [
    "TypeScript/JavaScript",
    "React & React Router",
    "Node.js",
    "Python",
    "UI/UX Design",
    "System Architecture",
  ];

  const interests = [
    { name: "Open Source", icon: "🌱" },
    { name: "Web Performance", icon: "⚡" },
    { name: "User Experience", icon: "🎨" },
    { name: "Clean Code", icon: "✨" },
    { name: "Continuous Learning", icon: "📚" },
  ];

  const stats = [
    { label: "Projects", value: "50+" },
    { label: "Years Experience", value: "5+" },
    { label: "Technologies", value: "20+" },
  ];

  return (
    <main className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <h1 className="text-5xl font-bold text-text mb-4">About</h1>
          <div className="w-16 h-1 bg-gradient-to-r from-lavender to-blue mb-8 rounded-full"></div>
        </div>

        <div className="space-y-16">
          {/* Introduction Section - Visual Cards Instead of Text Wall */}
          <section className="relative">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-surface1 to-transparent"></div>
              <div className="w-2 h-2 rounded-full bg-surface1"></div>
              <h2 className="text-3xl font-semibold text-text">Introduction</h2>
              <div className="w-2 h-2 rounded-full bg-surface1"></div>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-surface1 to-transparent"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1: Welcome */}
              <div className="group relative p-6 rounded-xl bg-surface0 border border-surface1 hover:border-lavender/50 hover:shadow-lg hover:shadow-lavender/10 transition-all duration-300 hover:-translate-y-1">
                <div className="absolute top-4 right-4 w-16 h-16 bg-lavender/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="text-4xl mb-4">👋</div>
                  <h3 className="text-xl font-semibold text-text mb-3">Welcome</h3>
                  <p className="text-subtext1 leading-relaxed text-xs">
                    Passionate about creating meaningful digital experiences.
                  </p>
                </div>
              </div>

              {/* Card 2: Approach */}
              <div className="group relative p-6 rounded-xl bg-surface0 border border-surface1 hover:border-blue/50 hover:shadow-lg hover:shadow-blue/10 transition-all duration-300 hover:-translate-y-1">
                <div className="absolute top-4 right-4 w-16 h-16 bg-blue/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="text-4xl mb-4">⚡</div>
                  <h3 className="text-xl font-semibold text-text mb-3">Approach</h3>
                  <p className="text-subtext1 leading-relaxed text-xs">
                    Clean code, user-centered design, continuous learning.
                  </p>
                </div>
              </div>

              {/* Card 3: Philosophy */}
              <div className="group relative p-6 rounded-xl bg-surface0 border border-surface1 hover:border-teal/50 hover:shadow-lg hover:shadow-teal/10 transition-all duration-300 hover:-translate-y-1">
                <div className="absolute top-4 right-4 w-16 h-16 bg-teal/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="text-4xl mb-4">✨</div>
                  <h3 className="text-xl font-semibold text-text mb-3">Focus</h3>
                  <p className="text-subtext1 leading-relaxed text-xs">
                    Elegant simplicity in powerful, intuitive solutions.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Stats Section with Visual Cards - Enhanced with Novel Visual Element */}
          <section className="relative">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-surface1 to-transparent"></div>
              <div className="w-2 h-2 rounded-full bg-surface1"></div>
              <h2 className="text-3xl font-semibold text-text">Experience</h2>
              <div className="w-2 h-2 rounded-full bg-surface1"></div>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-surface1 to-transparent"></div>
            </div>
            
            {/* Novel Visual Element: Interactive Stats with Progress Bars */}
            <div className="relative p-8 rounded-2xl bg-surface0 border border-surface1 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-lavender/5 via-transparent to-blue/5"></div>
              <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
                {stats.map((stat, index) => {
                  const percentages = [85, 100, 80]; // Visual representation percentages
                  return (
                    <div key={index} className="space-y-4">
                      <div className="flex items-baseline justify-between mb-2">
                        <div className="text-4xl font-bold text-text">{stat.value}</div>
                        <div className="text-xs font-medium text-subtext1 uppercase tracking-wider">
                          {stat.label}
                        </div>
                      </div>
                      {/* Progress Bar Visualization */}
                      <div className="relative h-2 bg-surface1 rounded-full overflow-hidden">
                        <div
                          className="absolute top-0 left-0 h-full bg-gradient-to-r from-lavender to-blue rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${percentages[index]}%` }}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Interests Section with Icon Cards */}
          <section className="relative">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-surface1 to-transparent"></div>
              <div className="w-2 h-2 rounded-full bg-surface1"></div>
              <h2 className="text-3xl font-semibold text-text">Interests</h2>
              <div className="w-2 h-2 rounded-full bg-surface1"></div>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-surface1 to-transparent"></div>
            </div>
            <p className="text-subtext1 leading-relaxed mb-6 text-sm max-w-2xl">
              Exploring new technologies, contributing to open source, sharing knowledge.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {interests.map((interest, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-surface0 border border-surface1 hover:border-teal/40 hover:bg-surface1/50 transition-all duration-200 text-center group"
                >
                  <div className="text-4xl mb-3 transform group-hover:scale-110 transition-transform duration-200">{interest.icon}</div>
                  <div className="text-sm font-medium text-subtext1">{interest.name}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Skills Section with Grid Layout */}
          <section className="relative">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-surface1 to-transparent"></div>
              <div className="w-2 h-2 rounded-full bg-surface1"></div>
              <h2 className="text-3xl font-semibold text-text">Skills & Expertise</h2>
              <div className="w-2 h-2 rounded-full bg-surface1"></div>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-surface1 to-transparent"></div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="p-5 rounded-lg bg-surface0 border border-surface1 hover:border-blue/40 hover:bg-surface1/50 transition-all duration-200 relative group"
                >
                  <div className="absolute top-2 left-2 w-1.5 h-1.5 rounded-full bg-surface2 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <span className="text-sm font-medium text-subtext1">{skill}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Currently Exploring Section */}
          <section className="relative">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-surface1 to-transparent"></div>
              <div className="w-2 h-2 rounded-full bg-surface1"></div>
              <h2 className="text-3xl font-semibold text-text">Currently Exploring</h2>
              <div className="w-2 h-2 rounded-full bg-surface1"></div>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-surface1 to-transparent"></div>
            </div>
            
            <div className="relative p-8 rounded-2xl bg-surface0 border border-surface1 overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-0 w-64 h-64 bg-lavender rounded-full -translate-x-32 -translate-y-32 blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue rounded-full translate-x-32 translate-y-32 blur-3xl"></div>
              </div>
              
              <div className="relative grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { icon: "⚡", label: "Rust", desc: "Systems programming" },
                  { icon: "🚀", label: "Go", desc: "Backend services" },
                  { icon: "🎨", label: "Svelte", desc: "Frontend framework" },
                  { icon: "🔧", label: "Kubernetes", desc: "Container orchestration" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="group text-center p-6 rounded-xl bg-surface1/50 border border-surface2 hover:border-lavender/50 hover:bg-surface1 transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="text-5xl mb-3 transform group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <div className="text-lg font-semibold text-text mb-1">{item.label}</div>
                    <div className="text-xs text-subtext1">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
