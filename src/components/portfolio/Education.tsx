import { GraduationCap, BookOpen } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import { COURSEWORK } from "./data";

export function Education() {
  return (
    <section id="education" className="section-shell scroll-mt-24 py-24">
      <SectionHeading eyebrow="Education" title="Academic foundation" />

      <div className="grid gap-6 lg:grid-cols-2">
        <Reveal className="glass-card rounded-3xl p-8">
          <div className="flex items-start gap-4">
            <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-primary text-2xl text-primary-foreground">
              <GraduationCap />
            </span>

            <div className="min-w-0">
              <h3 className="text-xl font-semibold text-foreground">
                Computer Engineering
              </h3>

              <p className="mt-1 text-sm text-secondary-foreground">
                Bachelor of Engineering
              </p>

              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Specializing in Artificial Intelligence and intelligent systems,
                combining rigorous coursework with hands-on research in deep
                learning and wireless sensing.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={1} className="glass-card rounded-3xl p-8">
          <div className="flex items-center gap-3">
            <BookOpen className="text-accent" size={22} />

            <h3 className="text-lg font-semibold text-foreground">
              Relevant Coursework
            </h3>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3">
            {COURSEWORK.map((course) => (
              <div
                key={course}
                className="rounded-xl border border-border bg-muted px-4 py-3 text-sm text-foreground transition-colors hover:border-primary/40"
              >
                {course}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
