import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const variants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function Reveal({
  children,
  className,
  delay = 0,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "li" | "article";
}) {
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={className}
      variants={variants}
      custom={delay}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
    >
      {children}
    </MotionTag>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mx-auto mb-14 max-w-2xl text-center">
      <Reveal>
        <span className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={1}>
        <h2 className="mt-5 text-3xl font-bold sm:text-4xl md:text-5xl">
          <span className="gradient-text">{title}</span>
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={2}>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}
