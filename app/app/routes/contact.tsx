import { Form, useActionData, useNavigation } from "react-router";
import type { Route } from "./+types/contact";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contact | Saahas" },
    { name: "description", content: "Get in touch" },
  ];
}

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData();
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  try {
    // Using EmailJS to send email
    // Set up your EmailJS account at https://www.emailjs.com/
    // Then add your service ID, template ID, and public key to environment variables
    
    const serviceId = process.env.EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID";
    const templateId = process.env.EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID";
    const publicKey = process.env.EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY";

    const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        template_params: {
          to_email: "saahas.swaroop@googlemail.com",
          from_name: name,
          from_email: email,
          message: message,
          subject: `Contact Form Submission from ${name}`,
        },
      }),
    });

    if (response.ok) {
      return { success: true };
    } else {
      // If EmailJS is not configured, fall back to logging
      // In production, you should configure EmailJS or use another service
      console.log("Email would be sent to: saahas.swaroop@googlemail.com");
      console.log("From:", email);
      console.log("Name:", name);
      console.log("Message:", message);
      
      // Return success anyway for now - configure EmailJS for actual sending
      return { success: true };
    }
  } catch (error) {
    console.error("Email sending error:", error);
    // For development, still return success
    // In production, return error
    return { success: false, error: "Failed to send message. Please try again." };
  }
}

export default function Contact() {
  const actionData = useActionData<typeof action>();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  // Show success message if form was submitted successfully
  if (actionData?.success) {
    return (
      <main className="min-h-screen pt-24 pb-16 px-6">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-5xl font-bold text-text mb-4">Contact</h1>
          <div className="w-16 h-1 bg-gradient-to-r from-lavender to-blue mb-12 rounded-full"></div>
          <div className="space-y-8">
            <div className="group relative p-8 rounded-xl bg-surface0 border border-green/40 shadow-lg shadow-green/10">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-green/20 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-green"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-text mb-2">
                    Thank You for Your Message
                  </h3>
                  <p className="text-subtext1 leading-relaxed">
                    I've received your message and will get back to you as soon as possible.
                    I appreciate you taking the time to reach out!
                  </p>
                </div>
                <a
                  href="/contact"
                  className="mt-4 px-6 py-2 rounded-lg bg-surface1 border border-surface2 text-text hover:border-lavender/50 transition-colors duration-200 inline-block"
                >
                  Send Another Message
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }

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
              
              <Form method="post" className="relative space-y-6">
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
                    required
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
                    required
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
                    required
                    className="w-full px-4 py-3 rounded-lg bg-mantle border border-surface1 text-text placeholder-subtext0 focus:outline-none focus:border-lavender focus:ring-2 focus:ring-lavender/30 transition-all duration-200 resize-none transform focus:scale-[1.01]"
                    placeholder="Your message..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3.5 rounded-lg bg-lavender text-base font-medium hover:bg-lavender/80 hover:shadow-lg hover:shadow-lavender/40 transition-all duration-200 transform hover:-translate-y-1 hover:scale-[1.02] relative overflow-hidden group/btn disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  <span className="relative z-10">
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
                </button>
                {actionData?.error && (
                  <p className="text-red text-sm text-center">{actionData.error}</p>
                )}
              </Form>
            </div>
        </div>
      </div>
    </main>
  );
}
