import { Link } from "@tanstack/react-router";
import clLogo from "@/assets/cl-logo.asset.json";

export function NavBar() {
  return (
    <header className="sticky top-0 z-20 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <Link to="/" className="flex items-center gap-2.5">
          <img src={clLogo.url} alt="Campus Life" className="h-9 w-9 rounded-md object-cover" />
          <span className="text-base font-semibold tracking-tight text-foreground">Campus Life</span>
        </Link>
        <nav className="flex items-center gap-1 text-sm">
          <Link
            to="/user-dashboard"
            className="hidden rounded-md px-3 py-2 text-muted-foreground transition hover:text-foreground sm:inline-block"
            activeProps={{ className: "hidden sm:inline-block rounded-md px-3 py-2 text-foreground font-medium" }}
          >
            Events
          </Link>
          <Link
            to="/admin-dashboard"
            className="hidden rounded-md px-3 py-2 text-muted-foreground transition hover:text-foreground sm:inline-block"
            activeProps={{ className: "hidden sm:inline-block rounded-md px-3 py-2 text-foreground font-medium" }}
          >
            Admin
          </Link>
          <Link
            to="/responses"
            className="hidden rounded-md px-3 py-2 text-muted-foreground transition hover:text-foreground sm:inline-block"
            activeProps={{ className: "hidden sm:inline-block rounded-md px-3 py-2 text-foreground font-medium" }}
          >
            Responses
          </Link>
          <Link
            to="/user-login"
            className="ml-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition hover:opacity-90"
          >
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
}
