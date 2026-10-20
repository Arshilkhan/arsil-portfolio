
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ExternalLink,
  Github,
  Sparkles,
} from "lucide-react";

import { Reveal, SectionHeading } from "./Reveal";
import { PROJECTS } from "./data";

export function Projects() {
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

          // Safely support projects with or without optional URLs.
          const liveUrl =
            "liveUrl" in project &&
            typeof project.liveUrl === "string"
              ? project.liveUrl.trim()
              : "";

          const repoUrl =
            "repoUrl" in project &&
            typeof project.repoUrl === "string"
              ? project.repoUrl.trim()
              : "";

          const visibleTech = project.tech.slice(0, 6);
          const remainingTech = project.tech.length - visibleTech.length;

          return (
            <Reveal
              key={project.title}
              delay={i * 0.08}
              as="article"
              className={isFeatured ? "md:col-span-2" : ""}
            >
              <motion.div
                whileHover={{ y: -6 }}
                transition={{
                  type: "spring",
                  stiffness: 280,
                  damping: 22,
                }}
                className={`group relative flex h-full flex-col overflow-hidden rounded-3xl glass-card transition-shadow duration-300 hover:shadow-[0_0_60px_-18px_var(--glow-primary)] ${
                  isFeatured ? "p-7 md:p-9" : "p-6 md:p-7"
                }`}
              >
                {/* Decorative hover glow */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[image:var(--gradient-brand)] opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30" />

                {/* Featured project indicator */}
                {isFeatured && (
                  <div className="mb-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
                    <Sparkles size={14} />
                    Featured Project
                  </div>
                )}

                <div
                  className={`relative flex flex-1 flex-col ${
                    isFeatured ? "md:grid md:grid-cols-[1.4fr_1fr] md:gap-10" : ""
                  }`}
                >
                  {/* Main project information */}
                  <div className="flex flex-col">
                    <div className="flex items-center justify-between gap-3">
                      <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-secondary/30 px-3 py-1 text-xs font-semibold text-secondary">
                        <Sparkles size={12} />
                        {project.tag}
                      </span>

                      {liveUrl && (
                        <a
                          href={liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Visit ${project.title} live website`}
                          className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-secondary/10 hover:text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
                        >
                          <ArrowUpRight size={20} />
                        </a>
                      )}
                    </div>

                    <h3
                      className={`mt-4 font-semibold leading-snug tracking-tight ${
                        isFeatured ? "text-2xl md:text-3xl" : "text-xl"
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
                          className="rounded-md border border-border/60 bg-white/[0.04] px-2.5 py-1 text-xs text-foreground/75"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* Project actions */}
                    {(liveUrl || repoUrl) && (
                      <div className="mt-6 flex flex-wrap gap-3">

                        {repoUrl && (
                          <a
                            href={repoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 rounded-xl border border-border px-4 py-2.5 text-sm font-medium transition-colors hover:border-secondary/50 hover:bg-secondary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
                          >
                            <Github size={16} />
                            Source Code
                          </a>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Technology stack */}
                  <div
                    className={`mt-7 flex flex-col ${
                      isFeatured
                        ? "md:mt-0 md:justify-between"
                        : "mt-auto"
                    }`}
                  >
                    {isFeatured && (
                      <div className="mb-4 hidden md:block">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                          Built With
                        </p>
                      </div>
                    )}

                    <div
                      className={`flex flex-wrap gap-2 ${
                        isFeatured ? "md:content-start" : ""
                      }`}
                    >
                      {visibleTech.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-lg border border-secondary/15 bg-secondary/[0.05] px-2.5 py-1.5 text-xs font-medium text-secondary/90"
                        >
                          {technology}
                        </span>
                      ))}

                      {remainingTech > 0 && (
                        <span
                          className="rounded-lg border border-border px-2.5 py-1.5 text-xs text-muted-foreground"
                          title={project.tech.slice(6).join(", ")}
                        >
                          +{remainingTech} more
                        </span>
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
