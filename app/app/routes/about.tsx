import type { Route } from "./+types/about";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About | Saahas" },
    { name: "description", content: "Learn more about me" },
  ];
}

export default function About() {
  const skills = [
    {
      name: "TypeScript",
      icon: "🔷",
      level: 4,
      description: "Programming language that adds static typing to JavaScript for better code reliability",
      color: "blue"
    },
    {
      name: "React",
      icon: "⚛️",
      level: 5,
      description: "Frontend framework used to build interactive user interfaces and single-page applications",
      color: "blue"
    },
    {
      name: "Node.js",
      icon: "🟢",
      level: 4,
      description: "JavaScript runtime built on Chrome's V8 engine for server-side application development",
      color: "green"
    },
    {
      name: "Python",
      icon: "🐍",
      level: 3,
      description: "High-level programming language known for its simplicity and versatility in web development",
      color: "yellow"
    },
    {
      name: "UI/UX Design",
      icon: "🎨",
      level: 4,
      description: "Design discipline focused on creating intuitive, accessible, and user-friendly interfaces",
      color: "pink"
    },
    {
      name: "System Architecture",
      icon: "🏗️",
      level: 3,
      description: "Practice of designing complex software systems and their components for scalability",
      color: "mauve"
    },
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
          {/* Experience Section - Now First */}
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

          {/* Skills Section with Flip Cards */}
          <section className="relative">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-surface1 to-transparent"></div>
              <div className="w-2 h-2 rounded-full bg-surface1"></div>
              <h2 className="text-3xl font-semibold text-text">Skills & Expertise</h2>
              <div className="w-2 h-2 rounded-full bg-surface1"></div>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-surface1 to-transparent"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="group relative h-64 cursor-pointer perspective-1000"
                  style={{ perspective: '1000px' }}
                >
                  {/* Level Indicator */}
                  <div className="absolute -right-2 top-4 z-20 flex flex-col gap-1">
                    {Array.from({ length: 5 }, (_, i) => (
                      <div
                        key={i}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          i < skill.level
                            ? skill.color === 'blue' ? 'bg-blue'
                            : skill.color === 'green' ? 'bg-green'
                            : skill.color === 'yellow' ? 'bg-yellow'
                            : skill.color === 'pink' ? 'bg-pink'
                            : skill.color === 'mauve' ? 'bg-mauve'
                            : 'bg-lavender'
                            : 'bg-surface2'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Flip Card Container */}
                  <div className="relative w-full h-full transition-transform duration-500 preserve-3d group-hover:rotate-y-180">
                    {/* Front of Card */}
                    <div className="absolute inset-0 w-full h-full backface-hidden rounded-xl bg-surface0 border border-surface1 hover:border-lavender/50 hover:shadow-lg hover:shadow-lavender/10 transition-all duration-300 flex flex-col items-center justify-center p-6">
                      <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                        {skill.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-text mb-2 text-center">
                        {skill.name}
                      </h3>
                    </div>

                    {/* Back of Card */}
                    <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-xl bg-gradient-to-br from-surface0 to-surface1 border border-surface1 flex flex-col justify-center p-6">
                      <div className="text-4xl mb-3 text-center">
                        {skill.icon}
                      </div>
                      <h3 className="text-lg font-semibold text-text mb-3 text-center">
                        {skill.name}
                      </h3>
                      <p className="text-sm text-subtext1 leading-relaxed text-center flex-1 flex items-center">
                        {skill.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Enhanced Legend */}
            <div className="mt-10">
              <div className="text-center mb-6">
                <h3 className="text-lg font-semibold text-text mb-2">Skill Proficiency Levels</h3>
                <p className="text-sm text-subtext1">Hover over cards to see detailed descriptions</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-surface0 border border-surface1 hover:border-lavender/50 transition-colors">
                  <div className="flex flex-col gap-1">
                    {Array.from({ length: 5 }, (_, i) => (
                      <div key={i} className="w-2 h-2 rounded-full bg-lavender"></div>
                    ))}
                  </div>
                  <div>
                    <div className="font-medium text-text">Expert</div>
                    <div className="text-xs text-subtext1">5/5 - Deep expertise & leadership</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-lg bg-surface0 border border-surface1 hover:border-blue/50 transition-colors">
                  <div className="flex flex-col gap-1">
                    {Array.from({ length: 4 }, (_, i) => (
                      <div key={i} className="w-2 h-2 rounded-full bg-blue"></div>
                    ))}
                    <div className="w-2 h-2 rounded-full bg-surface2"></div>
                  </div>
                  <div>
                    <div className="font-medium text-text">Advanced</div>
                    <div className="text-xs text-subtext1">4/5 - Strong proficiency & complex projects</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-lg bg-surface0 border border-surface1 hover:border-green/50 transition-colors">
                  <div className="flex flex-col gap-1">
                    {Array.from({ length: 3 }, (_, i) => (
                      <div key={i} className="w-2 h-2 rounded-full bg-green"></div>
                    ))}
                    {Array.from({ length: 2 }, (_, i) => (
                      <div key={i} className="w-2 h-2 rounded-full bg-surface2"></div>
                    ))}
                  </div>
                  <div>
                    <div className="font-medium text-text">Intermediate</div>
                    <div className="text-xs text-subtext1">3/5 - Solid understanding & implementation</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-lg bg-surface0 border border-surface1 hover:border-yellow/50 transition-colors">
                  <div className="flex flex-col gap-1">
                    {Array.from({ length: 2 }, (_, i) => (
                      <div key={i} className="w-2 h-2 rounded-full bg-yellow"></div>
                    ))}
                    {Array.from({ length: 3 }, (_, i) => (
                      <div key={i} className="w-2 h-2 rounded-full bg-surface2"></div>
                    ))}
                  </div>
                  <div>
                    <div className="font-medium text-text">Beginner</div>
                    <div className="text-xs text-subtext1">2/5 - Basic knowledge & simple projects</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-lg bg-surface0 border border-surface1 hover:border-red/50 transition-colors">
                  <div className="flex flex-col gap-1">
                    <div className="w-2 h-2 rounded-full bg-red"></div>
                    {Array.from({ length: 4 }, (_, i) => (
                      <div key={i} className="w-2 h-2 rounded-full bg-surface2"></div>
                    ))}
                  </div>
                  <div>
                    <div className="font-medium text-text">Novice</div>
                    <div className="text-xs text-subtext1">1/5 - Learning fundamentals</div>
                  </div>
                </div>
              </div>
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
