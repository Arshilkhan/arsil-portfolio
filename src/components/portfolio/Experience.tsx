import { Reveal, SectionHeading } from "./Reveal";
import { TIMELINE } from "./data";

export function Experience() {
  return (
    <section id="experience" className="section-shell scroll-mt-24 py-24">
      <SectionHeading
        eyebrow="Experience"
        title="A journey through building"
        subtitle="Research, IoT, deep learning, and full stack — a timeline of hands-on work."
      />

      <div className="relative mx-auto max-w-3xl">
        {/* vertical line */}
        <div className="absolute left-5 top-2 h-full w-px bg-[image:linear-gradient(to_bottom,#915eff,#00d9ff,#4ade80)] md:left-1/2" />

        <div className="space-y-10">
          {TIMELINE.map((item, i) => {
            const Icon = item.icon;
            const left = i % 2 === 0;
            return (
              <Reveal key={item.title} delay={i} as="div">
                <div
                  className={`relative flex items-start gap-6 md:w-1/2 ${
                    left ? "md:pr-12" : "md:ml-auto md:flex-row-reverse md:pl-12"
                  }`}
                >
                  {/* node */}
                  <span
                    className={`absolute left-5 top-1 z-10 grid h-10 w-10 -translate-x-1/2 place-items-center rounded-full bg-[image:var(--gradient-brand)] text-background shadow-[0_0_20px_-4px_#00d9ff] md:left-auto ${
                      left ? "md:-right-5 md:translate-x-1/2" : "md:-left-5 md:-translate-x-1/2"
                    }`}
                  >
                    <Icon size={18} />
                  </span>

                  <div className="ml-12 flex-1 rounded-2xl glass-card p-6 md:ml-0">
                    <span className="text-xs font-semibold uppercase tracking-widest text-secondary">
                      {item.period}
                    </span>
                    <h3 className="mt-1 text-lg font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
