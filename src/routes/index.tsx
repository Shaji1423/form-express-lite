import { createFileRoute, Link } from "@tanstack/react-router";
import { FileText, Mic, Sparkles, ArrowRight } from "lucide-react";
import clLogo from "@/assets/cl-logo.asset.json";
import easwariLogo from "@/assets/easwari-logo.asset.json";
import { NavBar } from "@/components/nav-bar";

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
    tone: "from-fuchsia-500/20 to-fuchsia-500/5 text-fuchsia-400 ring-fuchsia-500/30",
    to: "/user-dashboard" as const,
  },
  {
    title: "Proshows",
    body: "Star-studded performances and electrifying nights await you.",
    icon: Mic,
    tone: "from-rose-500/20 to-rose-500/5 text-rose-400 ring-rose-500/30",
    to: "/user-dashboard" as const,
  },
  {
    title: "About Us",
    body: "Learn more about Campus Life and our mission.",
    icon: Sparkles,
    tone: "from-violet-500/20 to-violet-500/5 text-violet-400 ring-violet-500/30",
    to: "/admin-login" as const,
  },
];

function Landing() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      {/* Animated star field */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.62_0.24_295/0.15),transparent_55%)]" />
        <div
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage:
              "radial-gradient(circle at 12% 18%, oklch(0.66 0.25 350) 1px, transparent 1.5px), radial-gradient(circle at 78% 32%, oklch(0.62 0.24 295) 1px, transparent 1.5px), radial-gradient(circle at 42% 68%, oklch(0.66 0.25 350) 1px, transparent 1.5px), radial-gradient(circle at 88% 82%, oklch(0.62 0.24 295) 1px, transparent 1.5px), radial-gradient(circle at 25% 88%, oklch(0.66 0.25 350) 1px, transparent 1.5px)",
            backgroundSize: "420px 420px",
          }}
        />
      </div>

      <NavBar />

      <main className="mx-auto max-w-6xl px-5 pb-20 pt-10">
        {/* HERO */}
        <section className="relative flex flex-col items-center text-center">
          <div className="relative my-6">
            <img
              src={clLogo.url}
              alt="Campus Life"
              className="h-48 w-auto rounded-xl object-cover shadow-[var(--shadow-glow)] sm:h-64"
            />
          </div>
          <h1 className="bg-gradient-to-r from-foreground via-foreground to-foreground/60 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-6xl">
            Campus <span className="font-serif italic text-[oklch(0.66_0.25_350)]">Life</span>
          </h1>
          <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
            Your gateway to everything happening at{" "}
            <span className="text-foreground">SRM Easwari Engineering College</span>.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/user-login"
              className="w-full rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition hover:opacity-90 sm:w-auto"
            >
              Login as Student
            </Link>
            <Link
              to="/admin-login"
              className="w-full rounded-lg border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-secondary sm:w-auto"
            >
              Login as Admin
            </Link>
          </div>
        </section>

        {/* FEATURE CARDS */}
        <section className="mt-20 space-y-5">
          {cards.map((c) => {
            const Icon = c.icon;
            return (
              <Link
                key={c.title}
                to={c.to}
                className="group flex items-start gap-5 rounded-2xl border border-border bg-card/70 p-6 transition hover:border-primary/40 hover:bg-card"
              >
                <div
                  className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ring-1 ring-inset ${c.tone}`}
                >
                  <Icon className="h-6 w-6" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-lg font-semibold text-foreground">{c.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
                </div>
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground transition group-hover:border-primary group-hover:text-primary">
                  <ArrowRight className="h-4 w-4" />
                </div>
              </Link>
            );
          })}
        </section>

        {/* FOOTER WITH COLLEGE LOGO */}
        <footer className="mt-24 flex flex-col items-center gap-4 border-t border-border pt-10 text-center">
          <div className="rounded-xl bg-white p-4">
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
