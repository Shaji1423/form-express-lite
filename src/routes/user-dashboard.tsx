import { createFileRoute, Link } from "@tanstack/react-router";
import { NavBar } from "../components/nav-bar";
import { useStore } from "../lib/form-store";
import { FileText, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/user-dashboard")({
  head: () => ({ meta: [{ title: "Events — Campus Life" }] }),
  component: UserDashboard,
});

function UserDashboard() {
  const { forms } = useStore();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavBar />
      <main className="mx-auto max-w-6xl px-5 py-10">
        <h1 className="text-2xl font-semibold sm:text-3xl">Available forms</h1>
        <p className="mt-1 text-sm text-muted-foreground">Pick a form below to fill it out.</p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {forms.length === 0 && (
            <p className="text-sm text-muted-foreground">No forms available yet.</p>
          )}
          {forms.map((f) => (
            <div key={f.id} className="flex flex-col rounded-2xl border border-border bg-card p-5 transition hover:border-primary/40">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15 text-primary">
                <FileText className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-foreground">{f.title}</h3>
              <p className="mt-1 line-clamp-3 text-sm text-muted-foreground">{f.description}</p>
              <Link
                to="/fill-form/$id"
                params={{ id: f.id }}
                className="mt-4 inline-flex w-fit items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
              >
                Fill form <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
