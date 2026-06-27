import { createFileRoute, Link } from "@tanstack/react-router";
import { NavBar } from "../components/nav-bar";
import { useStore } from "../lib/form-store";

export const Route = createFileRoute("/admin-dashboard")({
  head: () => ({ meta: [{ title: "Admin Dashboard — FormFlow" }] }),
  component: AdminDashboard,
});

function AdminDashboard() {
  const { forms, responses } = useStore();

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <NavBar />
      <main className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold">Admin Dashboard</h1>
            <p className="mt-1 text-sm text-slate-600">Overview of all forms and responses.</p>
          </div>
          <Link
            to="/create-form"
            className="rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700"
          >
            + Create new form
          </Link>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-slate-200 p-6">
            <p className="text-sm text-slate-500">Total forms</p>
            <p className="mt-2 text-3xl font-semibold">{forms.length}</p>
          </div>
          <div className="rounded-xl border border-slate-200 p-6">
            <p className="text-sm text-slate-500">Total responses</p>
            <p className="mt-2 text-3xl font-semibold">{responses.length}</p>
          </div>
        </div>

        <section className="mt-10">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Forms</h2>
            <Link to="/responses" className="text-sm text-blue-600 hover:underline">
              View all responses →
            </Link>
          </div>

          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {forms.length === 0 && (
              <p className="text-sm text-slate-500">No forms yet. Create your first form.</p>
            )}
            {forms.map((f) => {
              const count = responses.filter((r) => r.formId === f.id).length;
              return (
                <div key={f.id} className="rounded-xl border border-slate-200 p-5">
                  <h3 className="text-base font-semibold">{f.title}</h3>
                  <p className="mt-1 line-clamp-2 text-sm text-slate-600">{f.description}</p>
                  <p className="mt-3 text-xs text-slate-500">{count} response{count === 1 ? "" : "s"}</p>
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
}
