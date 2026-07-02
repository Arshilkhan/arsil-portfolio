import { motion } from "framer-motion";
import { Reveal, SectionHeading } from "./Reveal";
import { ACHIEVEMENTS } from "./data";

export function Achievements() {
  return (
    <section id="achievements" className="section-shell scroll-mt-24 py-24">
      <SectionHeading
        eyebrow="Achievements"
        title="What I've built & explored"
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {ACHIEVEMENTS.map((item, i) => {
          const Icon = item.icon;
          return (
            <Reveal key={item.title} delay={i} as="article">
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group h-full rounded-3xl glass-card p-6 text-center transition-shadow duration-300 hover:shadow-[0_0_44px_-14px_var(--glow-secondary)]"
              >
                <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-[image:var(--gradient-brand)] text-2xl text-background">
                  <Icon />
                </span>
                <p className="mt-4 font-display text-3xl font-bold gradient-text">
                  {item.stat}
                </p>
                <p className="text-[11px] uppercase tracking-widest text-muted-foreground">
                  {item.statLabel}
                </p>
                <h3 className="mt-3 text-sm font-semibold">{item.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
              </motion.div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
