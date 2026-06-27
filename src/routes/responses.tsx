import { createFileRoute } from "@tanstack/react-router";
import { NavBar } from "../components/nav-bar";
import { BackButton } from "../components/back-button";
import { useStore } from "../lib/form-store";

export const Route = createFileRoute("/responses")({
  head: () => ({ meta: [{ title: "Responses — Campus Life" }] }),
  component: Responses,
});

function Responses() {
  const { responses } = useStore();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavBar />
      <main className="mx-auto max-w-6xl px-5 py-10">
        <BackButton fallback="/admin-dashboard" />
        <h1 className="mt-4 text-2xl font-semibold sm:text-3xl">Responses</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          All submissions across every form ({responses.length} total).
        </p>

        <div className="mt-6 overflow-x-auto rounded-2xl border border-border bg-card">
          <table className="w-full text-left text-sm">
            <thead className="bg-secondary/60 text-xs uppercase tracking-wide text-muted-foreground">
              <tr>
                <th className="px-4 py-3">Form</th>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Email</th>
                <th className="px-4 py-3">Department</th>
                <th className="px-4 py-3">Message</th>
                <th className="px-4 py-3">Submitted</th>
              </tr>
            </thead>
            <tbody>
              {responses.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-4 py-8 text-center text-muted-foreground">
                    No responses yet.
                  </td>
                </tr>
              )}
              {responses.map((r) => (
                <tr key={r.id} className="border-t border-border">
                  <td className="px-4 py-3 font-medium text-foreground">{r.formTitle}</td>
                  <td className="px-4 py-3">{r.name}</td>
                  <td className="px-4 py-3 text-muted-foreground">{r.email}</td>
                  <td className="px-4 py-3">{r.department}</td>
                  <td className="max-w-xs truncate px-4 py-3 text-muted-foreground">{r.message}</td>
                  <td className="px-4 py-3 text-muted-foreground">
                    {new Date(r.submittedAt).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
