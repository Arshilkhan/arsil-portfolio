import { useState, type FormEvent } from "react";
import { Mail, Download, Send, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { toast } from "sonner";
import { Reveal, SectionHeading } from "./Reveal";
import { CONTACT } from "./data";

const CHANNELS = [
  {
    icon: Mail,
    label: "Email",
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    value: "Arsil",
    href: CONTACT.linkedin,
  },
  {
    icon: FaGithub,
    label: "GitHub",
    value: "Arsil",
    href: CONTACT.github,
  },
];

export function Contact() {
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Thanks! Your message has been noted. I'll get back to you soon.");
    }, 900);
  };

  return (
    <section id="contact" className="section-shell scroll-mt-24 py-24">
      <SectionHeading
        eyebrow="Contact"
        title="Let's build something intelligent"
        subtitle="Open to research collaborations, internships, and full-time opportunities."
      />

      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal className="flex flex-col gap-4">
          {CHANNELS.map(({ icon: Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="group flex items-center gap-4 rounded-2xl glass-card p-5 transition-colors hover:border-secondary/40"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-white/[0.04] text-xl text-secondary">
                <Icon />
              </span>
              <div className="min-w-0">
                <p className="text-xs uppercase tracking-widest text-muted-foreground">
                  {label}
                </p>
                <p className="truncate font-medium">{value}</p>
              </div>
            </a>
          ))}

          <div className="flex items-center gap-4 rounded-2xl glass-card p-5">
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-white/[0.04] text-xl text-accent">
              <MapPin />
            </span>
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">
                Location
              </p>
              <p className="font-medium">Thane</p>
            </div>
          </div>

          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[image:var(--gradient-brand)] px-6 py-4 text-sm font-semibold text-background shadow-[0_0_28px_-8px_var(--glow-primary)] transition-transform hover:scale-[1.02]"
          >
            <Download size={18} /> Download Resume
          </a>
        </Reveal>

        <Reveal delay={1} className="glass-card rounded-3xl p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  placeholder="Your name"
                  className="w-full rounded-xl border border-input bg-white/[0.03] px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-secondary/60"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-input bg-white/[0.03] px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-secondary/60"
                />
              </div>
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium" htmlFor="subject">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                required
                placeholder="What's this about?"
                className="w-full rounded-xl border border-input bg-white/[0.03] px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-secondary/60"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Tell me about your project or opportunity..."
                className="w-full resize-none rounded-xl border border-input bg-white/[0.03] px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-secondary/60"
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[image:var(--gradient-brand)] px-6 py-3.5 text-sm font-semibold text-background shadow-[0_0_28px_-8px_var(--glow-secondary)] transition-transform hover:scale-[1.01] disabled:opacity-70"
            >
              <Send size={17} /> {sending ? "Sending..." : "Send Message"}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
