import type { Route } from "./+types/contact";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contact | Saahas" },
    { name: "description", content: "Get in touch" },
  ];
}

export default function Contact() {
  return (
    <main className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-5xl font-bold text-text mb-4">Contact</h1>
        <div className="w-16 h-1 bg-gradient-to-r from-lavender to-blue mb-12 rounded-full"></div>
        <div className="space-y-8">
          <p className="text-lg text-subtext1 leading-relaxed">
            I'd love to hear from you. Whether you have a question, a project
            idea, or just want to connect, feel free to reach out.
          </p>
          <div className="group relative p-8 rounded-xl bg-surface0 border border-surface1 hover:border-lavender/50 hover:shadow-lg hover:shadow-lavender/20 transition-all duration-300 overflow-hidden">
            {/* Animated background gradient on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-lavender/5 via-transparent to-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Subtle animated glow effect */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-lavender/5 rounded-full -translate-y-32 translate-x-32 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue/5 rounded-full translate-y-32 -translate-x-32 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            <form className="relative space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-text mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 rounded-lg bg-mantle border border-surface1 text-text placeholder-subtext0 focus:outline-none focus:border-lavender focus:ring-2 focus:ring-lavender/30 transition-all duration-200 transform focus:scale-[1.01]"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-text mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 rounded-lg bg-mantle border border-surface1 text-text placeholder-subtext0 focus:outline-none focus:border-lavender focus:ring-2 focus:ring-lavender/30 transition-all duration-200 transform focus:scale-[1.01]"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-text mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg bg-mantle border border-surface1 text-text placeholder-subtext0 focus:outline-none focus:border-lavender focus:ring-2 focus:ring-lavender/30 transition-all duration-200 resize-none transform focus:scale-[1.01]"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3.5 rounded-lg bg-lavender text-base font-medium hover:bg-lavender/80 hover:shadow-lg hover:shadow-lavender/40 transition-all duration-200 transform hover:-translate-y-1 hover:scale-[1.02] relative overflow-hidden group/btn"
              >
                <span className="relative z-10">Send Message</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
