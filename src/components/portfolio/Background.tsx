import { motion } from "framer-motion";
import { useMemo } from "react";

// Deterministic pseudo-random so SSR and client render identical particles.
function rand(seed: number) {
  const v = Math.sin(seed * 127.1 + 311.7) * 43758.5453;
  return v - Math.floor(v);
}

export function Background() {
  const particles = useMemo(
    () =>
      Array.from({ length: 26 }).map((_, i) => ({
        id: i,
        left: rand(i + 1) * 100,
        top: rand(i + 8) * 100,
        size: rand(i + 15) * 3 + 1,
        duration: rand(i + 22) * 10 + 8,
        delay: rand(i + 29) * 6,
      })),
    [],
  );


  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* base */}
      <div className="absolute inset-0 bg-background" />

      {/* animated grid */}
      <div
        className="absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(145,94,255,0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,217,255,0.35) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          animation: "grid-drift 20s linear infinite",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 78%)",
        }}
      />

      {/* gradient blobs */}
      <div className="animate-blob absolute -left-32 top-10 h-[28rem] w-[28rem] rounded-full bg-[#915eff] opacity-25 blur-[120px]" />
      <div
        className="animate-blob absolute -right-24 top-1/3 h-[26rem] w-[26rem] rounded-full bg-[#00d9ff] opacity-20 blur-[120px]"
        style={{ animationDelay: "-6s" }}
      />
      <div
        className="animate-blob absolute bottom-0 left-1/3 h-[24rem] w-[24rem] rounded-full bg-[#4ade80] opacity-[0.12] blur-[130px]"
        style={{ animationDelay: "-12s" }}
      />

      {/* floating particles */}
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{ y: [0, -30, 0], opacity: [0.1, 0.7, 0.1] }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
