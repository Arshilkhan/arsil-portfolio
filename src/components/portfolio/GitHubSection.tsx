import { FaGithub } from "react-icons/fa";
import { Star, GitFork, GitCommitHorizontal, BookMarked } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import { CONTACT } from "./data";

const STATS = [
  { label: "Repositories", value: "30+", icon: BookMarked },
  { label: "Total Stars", value: "120+", icon: Star },
  { label: "Contributions", value: "800+", icon: GitCommitHorizontal },
  { label: "Forks", value: "45+", icon: GitFork },
];

// Deterministic pseudo-random contribution levels for the graph placeholder
function level(i: number) {
  const v = (Math.sin(i * 12.9898) * 43758.5453) % 1;
  return Math.floor(Math.abs(v) * 5);
}

const LEVEL_BG = [
  "bg-white/5",
  "bg-primary/30",
  "bg-primary/55",
  "bg-secondary/60",
  "bg-accent/70",
];

export function GitHubSection() {
  return (
    <section id="github" className="section-shell scroll-mt-24 py-24">
      <SectionHeading
        eyebrow="GitHub"
        title="Open source activity"
        subtitle="A snapshot of my contribution profile — live stats coming soon."
      />

      <Reveal className="glass-card rounded-3xl p-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/[0.04] text-2xl">
              <FaGithub />
            </span>
            <div>
              <p className="font-semibold">@kashi</p>
              <p className="text-xs text-muted-foreground">
                AI / ML • Wireless Sensing • Full Stack
              </p>
            </div>
          </div>
          <a
            href={CONTACT.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-secondary/40 px-5 py-2 text-sm font-semibold text-secondary transition-colors hover:bg-secondary/10"
          >
            View Profile
          </a>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
          {STATS.map(({ label, value, icon: Icon }) => (
            <div
              key={label}
              className="rounded-2xl border border-border bg-white/[0.02] p-5 text-center"
            >
              <Icon className="mx-auto text-secondary" size={20} />
              <p className="mt-2 font-display text-2xl font-bold gradient-text">
                {value}
              </p>
              <p className="text-[11px] uppercase tracking-widest text-muted-foreground">
                {label}
              </p>
            </div>
          ))}
        </div>

        {/* contribution graph placeholder */}
        <div className="mt-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Contribution graph
          </p>
          <div className="overflow-x-auto">
            <div
              className="grid w-max gap-1"
              style={{ gridTemplateRows: "repeat(7, 1fr)", gridAutoFlow: "column" }}
            >
              {Array.from({ length: 7 * 26 }).map((_, i) => (
                <span
                  key={i}
                  className={`h-3 w-3 rounded-[3px] ${LEVEL_BG[level(i)]}`}
                />
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
