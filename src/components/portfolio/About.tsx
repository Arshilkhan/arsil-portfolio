import { Reveal, SectionHeading } from "./Reveal";

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

      <div className="grid grid-cols-1 gap-8">
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
      </div>
    </section>
  );
}
