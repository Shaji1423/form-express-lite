import { createFileRoute, Link } from "@tanstack/react-router";
import { NavBar } from "../components/nav-bar";
import { useStore } from "../lib/form-store";

export const Route = createFileRoute("/user-dashboard")({
  head: () => ({ meta: [{ title: "User Dashboard — FormFlow" }] }),
  component: UserDashboard,
});

function UserDashboard() {
  const { forms } = useStore();

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <NavBar />
      <main className="mx-auto max-w-6xl px-6 py-10">
        <h1 className="text-2xl font-semibold">Available forms</h1>
        <p className="mt-1 text-sm text-slate-600">Pick a form below to fill it out.</p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {forms.length === 0 && (
            <p className="text-sm text-slate-500">No forms available yet.</p>
          )}
          {forms.map((f) => (
            <div key={f.id} className="flex flex-col rounded-xl border border-slate-200 p-5">
              <h3 className="text-base font-semibold">{f.title}</h3>
              <p className="mt-1 line-clamp-3 text-sm text-slate-600">{f.description}</p>
              <Link
                to="/fill-form/$id"
                params={{ id: f.id }}
                className="mt-4 inline-flex w-fit rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
              >
                Fill form
              </Link>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
