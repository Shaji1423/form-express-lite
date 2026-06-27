import { Sparkles } from "lucide-react";

const items = [
  "Tech Fest 2026",
  "Proshow Night",
  "Hackathon 48h",
  "Cultural Week",
  "Sports Meet",
  "AI Symposium",
  "Open Mic",
  "Design Jam",
];

export function Marquee() {
  const row = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-border/70 bg-card/40 py-3">
      <div className="animate-marquee flex w-max gap-10 whitespace-nowrap">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-[oklch(0.7_0.24_305)]" />
            <span className="text-foreground/80">{t}</span>
            <span className="text-foreground/30">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
