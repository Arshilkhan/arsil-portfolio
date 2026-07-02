import { Award, Plus } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const PLACEHOLDERS = [
  "Deep Learning Specialization",
  "Computer Vision",
  "TensorFlow Developer",
  "Machine Learning",
  "IoT & Embedded Systems",
  "Full Stack Web Dev",
];

export function Certificates() {
  return (
    <section id="certificates" className="section-shell scroll-mt-24 py-24">
      <SectionHeading
        eyebrow="Certificates"
        title="Certifications"
        subtitle="Credentials and learning milestones — this space grows over time."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PLACEHOLDERS.map((title, i) => (
          <Reveal key={title} delay={i} as="article">
            <div className="group flex h-full flex-col items-center justify-center rounded-3xl border border-dashed border-border bg-white/[0.02] p-8 text-center transition-colors hover:border-secondary/40">
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-white/[0.04] text-2xl text-secondary transition-transform duration-300 group-hover:scale-110">
                <Award />
              </span>
              <h3 className="mt-4 text-sm font-semibold">{title}</h3>
              <p className="mt-1 inline-flex items-center gap-1 text-xs text-muted-foreground">
                <Plus size={12} /> Coming soon
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
