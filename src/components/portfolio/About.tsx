import { Reveal, SectionHeading } from "./Reveal";
import { TECH_ICONS } from "./data";

const FOCUS = [
  "Deep Learning",
  "Computer Vision",
  "Transformer Models",
  "Federated Learning",
  "Meta Learning",
  "IoT",
  "Wireless Sensing",
  "Backend Development",
];

export function About() {
  return (
    <section id="about" className="section-shell scroll-mt-24 py-24">
      <SectionHeading
        eyebrow="About Me"
        title="Turning research into intelligent systems"
      />

      <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
        <Reveal className="glass-card rounded-3xl p-8">
          <p className="text-lg leading-relaxed text-foreground/90">
            I'm a{" "}
            <span className="font-semibold text-secondary">
              Junior Software Developer
            </span>{" "}
            with a strong interest in Artificial Intelligence and a passion for
            building systems that learn. My work spans{" "}
            <span className="font-semibold text-primary">Deep Learning</span>,
            Computer Vision, Transformer models, Federated Learning, and Meta
            Learning.
          </p>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            Beyond the model, I love working close to the signal — from{" "}
            <span className="font-semibold text-accent">IoT</span> and WiFi CSI
            wireless sensing to robust backend development. I build complete,
            end-to-end pipelines: acquiring raw data, engineering features,
            training models, and shipping them into real applications.
          </p>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            I'm always eager to learn emerging technologies and enjoy tackling
            hard, real-world problems that sit at the intersection of research
            and engineering.
          </p>

          <div className="mt-7 flex flex-wrap gap-2">
            {FOCUS.map((f) => (
              <span
                key={f}
                className="rounded-full border border-border bg-white/[0.03] px-3.5 py-1.5 text-sm text-foreground/80"
              >
                {f}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={1} className="glass-card rounded-3xl p-8">
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
            Tech I work with
          </h3>
          <div className="mt-6 grid grid-cols-4 gap-4 sm:grid-cols-5 lg:grid-cols-4">
            {TECH_ICONS.map(({ icon: Icon, label }) => (
              <div
                key={label}
                title={label}
                className="group flex flex-col items-center gap-1.5"
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl glass text-xl text-muted-foreground transition-all duration-300 group-hover:-translate-y-1 group-hover:text-secondary group-hover:shadow-[0_0_20px_-6px_var(--glow-secondary)]">
                  <Icon />
                </span>
                <span className="text-[10px] text-muted-foreground">{label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
