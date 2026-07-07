import { Award, ExternalLink } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const CERTIFICATES = [
  {
    title: "Deep Learning Specialization",
    issuer: "Coursera",
    link: "#",
  },
  {
    title: "TensorFlow Developer Certificate",
    issuer: "Google",
    link: "#",
  },
  {
    title: "Machine Learning",
    issuer: "Stanford University",
    link: "#",
  },
  {
    title: "Computer Vision",
    issuer: "Coursera",
    link: "#",
  },
  {
    title: "IoT & Embedded Systems",
    issuer: "NPTEL",
    link: "#",
  },
  {
    title: "Full Stack Web Development",
    issuer: "Udemy",
    link: "#",
  },
];

export function Certificates() {
  return (
    <section id="certificates" className="section-shell scroll-mt-24 py-24">
      <SectionHeading
        eyebrow="Certificates"
        title="Certifications"
        subtitle="Professional certifications and completed courses."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {CERTIFICATES.map((certificate, i) => (
          <Reveal key={certificate.title} delay={i} as="article">
            <a
              href={certificate.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col rounded-3xl border border-border bg-white/[0.02] p-8 transition-all hover:border-secondary/40 hover:-translate-y-1"
            >
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-white/[0.04] text-secondary transition-transform duration-300 group-hover:scale-110">
                <Award size={28} />
              </span>

              <h3 className="mt-5 text-lg font-semibold">
                {certificate.title}
              </h3>

              <p className="mt-2 text-sm text-muted-foreground">
                {certificate.issuer}
              </p>

              <div className="mt-auto pt-6 inline-flex items-center gap-2 text-sm text-secondary">
                View Certificate
                <ExternalLink size={16} />
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
