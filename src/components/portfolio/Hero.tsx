import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Download, Mail, FolderGit2, ArrowDown } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import profile from "@/assets/profile.jpg";
import { CONTACT } from "./data";

const ROLES = [
  "AI & Machine Learning Engineer",
  "Deep Learning Practitioner",
  "Computer Vision Engineer",
  "IoT & Wireless Sensing Researcher",
  "Full Stack Developer",
];

function useTyping(words: string[]) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];
    const speed = deleting ? 45 : 90;
    const timeout = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) setTimeout(() => setDeleting(true), 1400);
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setIndex((i) => i + 1);
        }
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [text, deleting, index, words]);

  return text;
}

export function Hero() {
  const typed = useTyping(ROLES);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center pt-28 pb-16"
    >
      <div className="section-shell grid w-full items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
            <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
            Available for opportunities
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] sm:text-6xl">
            Hi, I'm <span className="gradient-text">Kashi</span>
          </h1>

          <p className="mt-4 min-h-[2.2rem] font-display text-lg font-semibold text-foreground/90 sm:text-2xl">
            <span className="gradient-text">{typed}</span>
            <span
              className="ml-0.5 inline-block w-[3px] bg-secondary align-middle"
              style={{ height: "1.1em", animation: "caret-blink 1s step-end infinite" }}
            />
          </p>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            Passionate AI and Machine Learning enthusiast focused on solving
            real-world problems through Deep Learning, Computer Vision, Wireless
            Sensing, and Intelligent Systems.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-brand)] px-6 py-3 text-sm font-semibold text-background shadow-[0_0_28px_-6px_var(--glow-primary)] transition-transform hover:scale-105"
            >
              <Download size={18} /> Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-semibold transition-colors hover:bg-white/10"
            >
              <Mail size={18} /> Contact Me
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full border border-secondary/40 px-6 py-3 text-sm font-semibold text-secondary transition-colors hover:bg-secondary/10"
            >
              <FolderGit2 size={18} /> View Projects
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <a
              href={CONTACT.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="grid h-11 w-11 place-items-center rounded-full glass text-muted-foreground transition-colors hover:text-foreground"
            >
              <FaGithub size={20} />
            </a>
            <a
              href={CONTACT.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="grid h-11 w-11 place-items-center rounded-full glass text-muted-foreground transition-colors hover:text-secondary"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </motion.div>

        {/* Profile visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="animate-float-y relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-[image:var(--gradient-brand-tri)] opacity-60 blur-2xl" />
            <div className="glass-card relative overflow-hidden rounded-[2rem] p-2">
              <img
                src={profile}
                alt="Portrait of Kashi, AI & Machine Learning Engineer"
                width={768}
                height={896}
                className="w-full rounded-[1.6rem] object-cover"
              />
              <div className="pointer-events-none absolute inset-2 rounded-[1.6rem] ring-1 ring-inset ring-white/10" />
            </div>

            <div className="glass-card absolute -bottom-5 -left-5 rounded-2xl px-4 py-3">
              <p className="font-display text-xl font-bold gradient-text">AI/ML</p>
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
                Engineer
              </p>
            </div>
            <div className="glass-card absolute -right-4 top-8 rounded-2xl px-4 py-3">
              <p className="font-display text-xl font-bold text-accent">CSI</p>
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
                Wireless AI
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted-foreground"
      >
        <ArrowDown className="animate-bounce" size={22} />
      </a>
    </section>
  );
}
