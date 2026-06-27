import { useMemo } from "react";

type Dot = {
  left: string;
  top: string;
  size: number;
  delay: string;
  duration: string;
  hue: "pink" | "purple";
};

function rand(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

export function GlowDots({ count = 90 }: { count?: number }) {
  const dots = useMemo<Dot[]>(() => {
    return Array.from({ length: count }, (_, i) => {
      const r1 = rand(i + 1);
      const r2 = rand(i + 99);
      const r3 = rand(i + 233);
      const r4 = rand(i + 451);
      const size = 1 + r3 * 1.5; // 1 - 2.5 px (small dots)
      return {
        left: `${r1 * 100}%`,
        top: `${r2 * 100}%`,
        size,
        delay: `${(r4 * 8).toFixed(2)}s`,
        duration: `${(6 + r3 * 4).toFixed(2)}s`, // slow: 6 - 10 s
        hue: r4 > 0.5 ? "pink" : "purple",
      };
    });
  }, [count]);

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.62_0.24_295/0.18),transparent_60%)]" />
      {dots.map((d, i) => {
        const color =
          d.hue === "pink" ? "oklch(0.72 0.28 350)" : "oklch(0.68 0.26 295)";
        return (
          <span
            key={i}
            className="absolute rounded-full animate-glow-pulse"
            style={{
              left: d.left,
              top: d.top,
              width: `${d.size}px`,
              height: `${d.size}px`,
              backgroundColor: color,
              boxShadow: `0 0 ${d.size * 2}px ${d.size * 0.6}px ${color}, 0 0 ${d.size * 5}px ${d.size}px ${color}`,
              animationDelay: d.delay,
              animationDuration: d.duration,
            }}
          />
        );
      })}
    </div>
  );
}
