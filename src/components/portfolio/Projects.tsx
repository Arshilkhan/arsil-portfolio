import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import { PROJECTS } from "./data";

export function Projects() {
  return (
    <section id="projects" className="section-shell scroll-mt-24 py-24">
      <SectionHeading
        eyebrow="Featured Projects"
        title="Selected work"
        subtitle="End-to-end systems across AI research, wireless sensing, computer vision, and full stack development."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {PROJECTS.map((project, i) => (
          <Reveal key={project.title} delay={i} as="article">
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 280, damping: 22 }}
              className="group relative flex h-full flex-col overflow-hidden rounded-3xl glass-card p-7 transition-shadow duration-300 hover:shadow-[0_0_60px_-18px_#915eff]"
            >
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[image:var(--gradient-brand)] opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30" />

              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-secondary/30 px-3 py-1 text-xs font-semibold text-secondary">
                  <Sparkles size={12} /> {project.tag}
                </span>
                <ArrowUpRight
                  className="text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-secondary"
                  size={20}
                />
              </div>

              <h3 className="mt-4 text-xl font-semibold leading-snug">
                {project.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.features.map((f) => (
                  <span
                    key={f}
                    className="rounded-md bg-white/[0.04] px-2.5 py-1 text-xs text-foreground/75"
                  >
                    {f}
                  </span>
                ))}
              </div>

              <div className="mt-auto border-t border-border pt-4">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-medium text-secondary/90"
                    >
                      #{t.replace(/\s+/g, "")}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
