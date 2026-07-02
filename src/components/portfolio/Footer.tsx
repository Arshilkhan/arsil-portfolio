import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail, ArrowUp } from "lucide-react";
import { CONTACT } from "./data";

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="section-shell flex flex-col items-center justify-between gap-6 md:flex-row">
        <div className="text-center md:text-left">
          <a href="#home" className="font-display text-lg font-bold">
            Kashi<span className="text-secondary">.</span>
          </a>
          <p className="mt-1 text-sm text-muted-foreground">
            AI & Machine Learning Engineer • Deep Learning • IoT • Full Stack
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={CONTACT.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="grid h-10 w-10 place-items-center rounded-full glass text-muted-foreground transition-colors hover:text-foreground"
          >
            <FaGithub size={18} />
          </a>
          <a
            href={CONTACT.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="grid h-10 w-10 place-items-center rounded-full glass text-muted-foreground transition-colors hover:text-secondary"
          >
            <FaLinkedin size={18} />
          </a>
          <a
            href={`mailto:${CONTACT.email}`}
            aria-label="Email"
            className="grid h-10 w-10 place-items-center rounded-full glass text-muted-foreground transition-colors hover:text-accent"
          >
            <Mail size={18} />
          </a>
          <a
            href="#home"
            aria-label="Back to top"
            className="grid h-10 w-10 place-items-center rounded-full bg-[image:var(--gradient-brand)] text-background transition-transform hover:scale-110"
          >
            <ArrowUp size={18} />
          </a>
        </div>
      </div>

      <p className="mt-8 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Kashi. Designed & built with passion.
      </p>
    </footer>
  );
}
