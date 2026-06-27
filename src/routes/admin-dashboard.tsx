import { createFileRoute, Link } from "@tanstack/react-router";
import { NavBar } from "../components/nav-bar";
import { BackButton } from "../components/back-button";
import { useStore } from "../lib/form-store";
import { FileText, Plus } from "lucide-react";

export const Route = createFileRoute("/admin-dashboard")({
  head: () => ({ meta: [{ title: "Admin Dashboard — Campus Life" }] }),
  component: AdminDashboard,
});

function AdminDashboard() {
  const { forms, responses } = useStore();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavBar />
      <main className="mx-auto max-w-6xl px-5 py-10">
        <BackButton fallback="/" />
        <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold sm:text-3xl">Admin Dashboard</h1>
            <p className="mt-1 text-sm text-muted-foreground">Overview of all forms and responses.</p>
          </div>
          <Link
            to="/create-form"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition hover:opacity-90"
          >
            <Plus className="h-4 w-4" /> Create new form
          </Link>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-6">
            <p className="text-sm text-muted-foreground">Total forms</p>
            <p className="mt-2 text-3xl font-semibold">{forms.length}</p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6">
            <p className="text-sm text-muted-foreground">Total responses</p>
            <p className="mt-2 text-3xl font-semibold">{responses.length}</p>
          </div>
        </div>

        <section className="mt-10">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Forms</h2>
            <Link to="/responses" className="text-sm text-primary hover:underline">
              View all responses →
            </Link>
          </div>

          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {forms.length === 0 && (
              <p className="text-sm text-muted-foreground">No forms yet. Create your first form.</p>
            )}
            {forms.map((f) => {
              const count = responses.filter((r) => r.formId === f.id).length;
              return (
                <div key={f.id} className="rounded-2xl border border-border bg-card p-5 transition hover:border-primary/40">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15 text-primary">
                    <FileText className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-foreground">{f.title}</h3>
                  <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{f.description}</p>
                  <p className="mt-3 text-xs text-muted-foreground">{count} response{count === 1 ? "" : "s"}</p>
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
}
