import { createFileRoute } from "@tanstack/react-router";
import { NavBar } from "../components/nav-bar";
import { useStore } from "../lib/form-store";

export const Route = createFileRoute("/responses")({
  head: () => ({ meta: [{ title: "Responses — FormFlow" }] }),
  component: Responses,
});

function Responses() {
  const { responses } = useStore();

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <NavBar />
      <main className="mx-auto max-w-6xl px-6 py-10">
        <h1 className="text-2xl font-semibold">Responses</h1>
        <p className="mt-1 text-sm text-slate-600">
          All submissions across every form ({responses.length} total).
        </p>

        <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
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
                  <td colSpan={6} className="px-4 py-8 text-center text-slate-500">
                    No responses yet.
                  </td>
                </tr>
              )}
              {responses.map((r) => (
                <tr key={r.id} className="border-t border-slate-200">
                  <td className="px-4 py-3 font-medium text-slate-900">{r.formTitle}</td>
                  <td className="px-4 py-3">{r.name}</td>
                  <td className="px-4 py-3 text-slate-600">{r.email}</td>
                  <td className="px-4 py-3">{r.department}</td>
                  <td className="max-w-xs truncate px-4 py-3 text-slate-600">{r.message}</td>
                  <td className="px-4 py-3 text-slate-500">
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
