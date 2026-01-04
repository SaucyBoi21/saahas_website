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
        <h1 className="text-5xl font-bold text-text mb-12">Contact</h1>
        <div className="space-y-8">
          <p className="text-lg text-subtext1 leading-relaxed">
            I'd love to hear from you. Whether you have a question, a project
            idea, or just want to connect, feel free to reach out.
          </p>
          <div className="p-6 rounded-lg bg-surface0 border border-surface1">
            <form className="space-y-6">
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
                  className="w-full px-4 py-2 rounded-lg bg-mantle border border-surface1 text-text placeholder-subtext0 focus:outline-none focus:border-lavender transition-colors duration-200"
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
                  className="w-full px-4 py-2 rounded-lg bg-mantle border border-surface1 text-text placeholder-subtext0 focus:outline-none focus:border-lavender transition-colors duration-200"
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
                  className="w-full px-4 py-2 rounded-lg bg-mantle border border-surface1 text-text placeholder-subtext0 focus:outline-none focus:border-lavender transition-colors duration-200 resize-none"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 rounded-lg bg-lavender text-base font-medium hover:bg-lavender/80 transition-colors duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
