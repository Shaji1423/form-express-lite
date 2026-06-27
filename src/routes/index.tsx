import { createFileRoute, Link } from "@tanstack/react-router";
import { FileText, Mic, Sparkles, ArrowRight, GraduationCap, ShieldCheck, Users, CalendarDays, Trophy } from "lucide-react";
import clLogo from "@/assets/cl-logo.asset.json";
import easwariLogo from "@/assets/easwari-logo.asset.json";
import { NavBar } from "@/components/nav-bar";
import { GlowDots } from "@/components/glow-dots";
import { AuroraBg } from "@/components/aurora-bg";
import { Marquee } from "@/components/marquee";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Campus Life — SRM Easwari Engineering College" },
      { name: "description", content: "Your gateway to everything happening at SRM Easwari Engineering College — events, proshows, and more." },
      { property: "og:title", content: "Campus Life — SRM Easwari Engineering College" },
      { property: "og:description", content: "Your gateway to everything happening at SRM Easwari Engineering College." },
    ],
  }),
  component: Landing,
});

const cards = [
  {
    title: "Events",
    body: "Fill out event registrations, student applications, and other campus forms.",
    icon: FileText,
    tone: "from-fuchsia-500/25 to-fuchsia-500/5 text-fuchsia-300 ring-fuchsia-500/30",
    tag: "Live",
    to: "/user-dashboard" as const,
  },
  {
    title: "Proshows",
    body: "Star-studded performances and electrifying nights await you.",
    icon: Mic,
    tone: "from-rose-500/25 to-rose-500/5 text-rose-300 ring-rose-500/30",
    tag: "Hot",
    to: "/user-dashboard" as const,
  },
  {
    title: "About Us",
    body: "Learn more about Campus Life and our mission.",
    icon: Sparkles,
    tone: "from-violet-500/25 to-violet-500/5 text-violet-300 ring-violet-500/30",
    tag: "New",
    to: "/admin-login" as const,
  },
];

const stats = [
  { icon: Users, k: "12k+", v: "Students" },
  { icon: CalendarDays, k: "80+", v: "Events / yr" },
  { icon: Trophy, k: "25+", v: "Clubs" },
];

function Landing() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <AuroraBg />
      <GlowDots count={90} />

      <NavBar />

      <main className="relative mx-auto max-w-6xl px-5 pb-20 pt-6">
        {/* HERO */}
        <section className="relative flex flex-col items-center text-center">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-fuchsia-400 opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-fuchsia-400" />
            </span>
            Campus Life · Spring '26 season is live
          </span>

          <div className="animate-float relative my-2">
            <div className="absolute -inset-6 rounded-full bg-gradient-to-br from-fuchsia-500/30 via-violet-500/20 to-rose-500/30 blur-2xl" />
            <img
              src={clLogo.url}
              alt="Campus Life"
              className="relative h-44 w-44 rounded-2xl object-cover ring-1 ring-white/10 shadow-[var(--shadow-glow)] sm:h-56 sm:w-56"
            />
          </div>

          <h1 className="mt-6 text-5xl font-bold tracking-tight sm:text-7xl">
            <span className="text-gradient-primary">Campus</span>{" "}
            <span className="font-serif italic text-[oklch(0.78_0.22_350)]">Life</span>
          </h1>
          <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
            Your gateway to everything happening at{" "}
            <span className="text-foreground">SRM Easwari Engineering College</span>.
          </p>

          {/* Stat strip */}
          <div className="mt-8 grid w-full max-w-md grid-cols-3 gap-3">
            {stats.map(({ icon: Icon, k, v }) => (
              <div key={v} className="glass-card rounded-xl px-3 py-3 text-center">
                <Icon className="mx-auto h-4 w-4 text-[oklch(0.78_0.2_305)]" />
                <div className="mt-1 text-lg font-bold tracking-tight">{k}</div>
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{v}</div>
              </div>
            ))}
          </div>

          {/* Role selector */}
          <div className="glass-card relative mt-10 w-full max-w-xl overflow-hidden rounded-2xl p-6">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-fuchsia-400/60 to-transparent" />
            <p className="text-sm font-semibold text-foreground">How would you like to continue?</p>
            <p className="mt-1 text-xs text-muted-foreground">Choose your role to sign in.</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <Link
                to="/user-login"
                className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-fuchsia-500 via-violet-500 to-rose-500 px-5 py-4 text-center text-sm font-semibold text-white shadow-[var(--shadow-glow)] transition hover:scale-[1.02]"
              >
                <span className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 animate-shine bg-white/30 blur-md" />
                <span className="relative inline-flex items-center justify-center gap-2">
                  <GraduationCap className="h-4 w-4" /> Student Login
                </span>
              </Link>
              <Link
                to="/admin-login"
                className="group rounded-xl border border-border bg-background/60 px-5 py-4 text-center text-sm font-semibold text-foreground backdrop-blur transition hover:border-fuchsia-400/40 hover:bg-secondary"
              >
                <span className="inline-flex items-center justify-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-fuchsia-300" /> Admin Login
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* MARQUEE */}
        <div className="mt-16">
          <Marquee />
        </div>

        {/* FEATURE CARDS */}
        <section className="mt-12 space-y-5">
          <div className="flex items-end justify-between px-1">
            <h2 className="text-2xl font-semibold tracking-tight">Explore</h2>
            <span className="text-xs uppercase tracking-widest text-muted-foreground">3 sections</span>
          </div>
          {cards.map((c) => {
            const Icon = c.icon;
            return (
              <Link
                key={c.title}
                to={c.to}
                className="group relative flex items-start gap-5 overflow-hidden rounded-2xl border border-border bg-card/60 p-6 backdrop-blur transition hover:-translate-y-0.5 hover:border-fuchsia-400/40 hover:bg-card"
              >
                <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-fuchsia-500 via-violet-500 to-rose-500 opacity-0 transition group-hover:opacity-100" />
                <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ring-1 ring-inset ${c.tone}`}>
                  <Icon className="h-6 w-6" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-semibold text-foreground">{c.title}</h3>
                    <span className="rounded-full border border-fuchsia-400/30 bg-fuchsia-500/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-fuchsia-300">
                      {c.tag}
                    </span>
                  </div>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
                </div>
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground transition group-hover:translate-x-1 group-hover:border-fuchsia-400 group-hover:text-fuchsia-300">
                  <ArrowRight className="h-4 w-4" />
                </div>
              </Link>
            );
          })}
        </section>

        {/* FOOTER */}
        <footer className="mt-24 flex flex-col items-center gap-4 border-t border-border pt-10 text-center">
          <div className="rounded-xl bg-white p-4 ring-1 ring-white/20">
            <img src={easwariLogo.url} alt="SRM Easwari Engineering College" className="h-16 w-auto object-contain" />
          </div>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Campus Life · SRM Easwari Engineering College, Ramapuram, Chennai
          </p>
        </footer>
      </main>
    </div>
  );
}
