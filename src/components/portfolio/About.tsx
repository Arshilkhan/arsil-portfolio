
import { Reveal, SectionHeading } from "./Reveal";

const FOCUS = [
  "Full-Stack Development",
  "React & TypeScript",
  "ERP Systems",
  "REST API Integration",
  "Database Design",
  "Laravel & PHP",
  "Deep Learning",
  "Computer Vision",
  "Transformer Models",
  "Federated Learning",
  "Wi-Fi CSI & IoT",
  "Signal Processing",
];

export function About() {
  return (
    <section id="about" className="section-shell scroll-mt-24 py-24">
      <SectionHeading
        eyebrow="About Me"
        title="Building intelligent systems and practical software"
      />

      <div className="grid grid-cols-1 gap-8">
        <Reveal className="glass-card rounded-3xl p-8">
          <p className="text-lg leading-relaxed text-foreground/90">
            I'm a{" "}
            <span className="font-semibold text-secondary-foreground">
              Junior Software Developer and AI/ML Enthusiast
            </span>{" "}
            interested in building reliable software and intelligent systems
            that solve real-world problems. My work spans full-stack web
            development, enterprise applications, machine learning, and
            wireless sensing.
          </p>

          <p className="mt-5 leading-relaxed text-muted-foreground">
            On the software engineering side, I've developed an{" "}
            <span className="font-semibold text-primary">ERP platform</span>{" "}
            for managing invoices, challans, inventory, purchases, and business
            workflows, along with business websites and a Laravel-based
            attendance management system. I work with React, TypeScript,
            JavaScript, PHP, PostgreSQL, Supabase, REST APIs, and deployment
            tools to build complete applications.
          </p>

          <p className="mt-5 leading-relaxed text-muted-foreground">
            My research interests include deep learning, computer vision,
            transformer-based models, federated learning, and IoT. I've worked
            on image-based fall detection, Wi-Fi CSI human activity recognition,
            and multimodal transformer approaches to indoor positioning,
            combining data processing, feature engineering, model training,
            and evaluation.
          </p>

          <p className="mt-5 leading-relaxed text-muted-foreground">
            I enjoy working across the stack—from database design and backend
            logic to model experimentation and deployment. I'm continuously
            improving my engineering skills and exploring ways to turn research
            ideas into practical, maintainable applications.
          </p>

          <div className="mt-7 flex flex-wrap gap-2">
            {FOCUS.map((focus) => (
              <span
                key={focus}
                className="rounded-full border border-border bg-muted text-foreground px-3.5 py-1.5 text-sm"
              >
                {focus}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
