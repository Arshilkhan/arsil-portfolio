import { motion } from "framer-motion";
import { Reveal, SectionHeading } from "./Reveal";
import { SKILL_GROUPS } from "./data";

const ACCENT: Record<string, string> = {
  primary: "text-primary",
  secondary: "text-primary",
  accent: "text-primary",
};

const GLOW: Record<string, string> = {
  primary: "group-hover:shadow-[0_0_40px_-12px_var(--glow-primary)]",
  secondary: "group-hover:shadow-[0_0_40px_-12px_var(--glow-secondary)]",
  accent: "group-hover:shadow-[0_0_40px_-12px_var(--glow-accent)]",
};

export function Skills() {
  return (
    <section id="skills" className="section-shell scroll-mt-24 py-24">
      <SectionHeading
        eyebrow="Skills"
        title="A full-stack AI toolkit"
        subtitle="From low-level signal processing to deep neural networks and modern web platforms."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SKILL_GROUPS.map((group, i) => {
          const Icon = group.icon;

          return (
            <Reveal key={group.title} delay={i} as="article">
              <motion.div
                whileHover={{ y: -6 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
                className={`group h-full rounded-3xl glass-card p-7 transition-shadow duration-300 ${GLOW[group.accent]}`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-border bg-muted text-2xl ${ACCENT[group.accent]}`}
                  >
                    <Icon />
                  </span>

                  <h3 className="text-lg font-semibold text-foreground">
                    {group.title}
                  </h3>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-border bg-muted px-3 py-1.5 text-sm text-foreground transition-colors duration-200 group-hover:border-primary/40"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}