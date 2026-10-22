
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ExternalLink,
  Github,
  Sparkles,
} from "lucide-react";
import { useState } from "react";

import { Reveal, SectionHeading } from "./Reveal";
import { PROJECTS } from "./data";


export function Projects() {
  const [expandedProjects, setExpandedProjects] = useState<Set<string>>(
    () => new Set()
  );

  const toggleProjectTech = (projectTitle: string) => {
    setExpandedProjects((current) => {
      const next = new Set(current);

      if (next.has(projectTitle)) {
        next.delete(projectTitle);
      } else {
        next.add(projectTitle);
      }

      return next;
    });
  };
  return (
    <section
      id="projects"
      className="section-shell scroll-mt-24 py-24"
    >
      <SectionHeading
        eyebrow="Featured Projects"
        title="Selected work"
        subtitle="From enterprise applications and business websites to AI research, computer vision, and wireless sensing."
      />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {PROJECTS.map((project, i) => {
          const isFeatured = project.title === "Abjad ERP";

          const isTechExpanded = expandedProjects.has(project.title);
          const visibleTech = isTechExpanded
            ? project.tech
            : project.tech.slice(0, 6);

          const remainingTech = project.tech.length - 6;

          return (
            <Reveal
              key={project.title}
              delay={i * 0.08}
              as="article"
              className={`h-full ${isFeatured ? "md:col-span-2" : ""}`}
            >
              <motion.div
                whileHover={{ y: -6 }}
                transition={{
                  type: "spring",
                  stiffness: 280,
                  damping: 22,
                }}
                className={`group relative flex h-full flex-col overflow-hidden rounded-3xl glass-card transition-shadow duration-300 hover:shadow-[0_0_60px_-18px_var(--glow-primary)] ${isFeatured ? "p-7 md:p-9" : "p-6 md:p-7"
                  }`}
              >
                {/* Decorative hover glow */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[image:var(--gradient-brand)] opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30" />

                {/* Featured project indicator */}
                {isFeatured && (
                  <div className="mb-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                    <Sparkles size={14} />
                    Featured Project
                  </div>
                )}

                <div
                  className={`relative flex flex-1 flex-col ${isFeatured ? "md:grid md:grid-cols-[1.4fr_1fr] md:gap-10" : ""
                    }`}
                >
                  {/* Main project information */}
                  <div className="flex flex-col">
                    <div className="flex items-center justify-between gap-3">
                      <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-border bg-muted text-secondary-foreground px-3 py-1 text-xs font-semibold">
                        <Sparkles size={12} />
                        {project.tag}
                      </span>

                    </div>

                    <h3
                      className={`mt-4 font-semibold leading-snug tracking-tight ${isFeatured ? "text-2xl md:text-3xl" : "text-xl"
                        }`}
                    >
                      {project.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>

                    {/* Project features */}
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.features.map((feature) => (
                        <span
                          key={feature}
                          className="rounded-md border border-border/60 bg-muted text-foreground px-2.5 py-1 text-xs"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Technology stack */}
                  <div
                    className={`mt-auto flex min-w-0 flex-col pt-7 ${isFeatured ? "md:mt-0 md:pt-0" : ""
                      }`}
                  >
                    {isFeatured && (
                      <div className="mb-4 hidden md:block">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                          Built With
                        </p>
                      </div>
                    )}

                    <div className="flex min-w-0 flex-wrap items-start gap-2">
                      {visibleTech.map((technology) => (
                        <span
                          key={technology}
                          className="max-w-full rounded-lg border border-border bg-muted text-secondary-foreground px-2.5 py-1.5 text-xs font-medium [overflow-wrap:anywhere]"
                        >
                          {technology}
                        </span>
                      ))}

                      {remainingTech > 0 && (
                        <button
                          type="button"
                          onClick={() => toggleProjectTech(project.title)}
                          aria-expanded={isTechExpanded}
                          aria-label={`${isTechExpanded ? "Show fewer" : "Show"
                            } technologies for ${project.title}`}
                          className="shrink-0 rounded-lg border border-border px-2.5 py-1.5 text-xs text-muted-foreground transition-colors hover:border-secondary/40 hover:bg-secondary/[0.08] hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                        >
                          {isTechExpanded ? "Show less" : `+${remainingTech} more`}
                        </button>
                      )}
                    </div>

                    <div className="mt-6 border-t border-border pt-4">
                      <p className="text-xs leading-relaxed text-muted-foreground">
                        {isFeatured
                          ? "Enterprise workflows · Database architecture · Integrations · Deployment"
                          : "Technologies & tools"}
                      </p>
                    </div>
                  </div>

                </div>
              </motion.div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
