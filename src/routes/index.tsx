import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FormFlow — Simple Form Management" },
      { name: "description", content: "Create, share, and review forms with a clean, modern interface." },
      { property: "og:title", content: "FormFlow — Simple Form Management" },
      { property: "og:description", content: "Create, share, and review forms with a clean, modern interface." },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="border-b border-slate-200">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <span className="text-lg font-semibold">FormFlow</span>
          <nav className="flex gap-2 text-sm">
            <Link to="/user-login" className="rounded-md px-3 py-2 text-slate-700 hover:bg-slate-100">
              User Login
            </Link>
            <Link to="/admin-login" className="rounded-md px-3 py-2 text-slate-700 hover:bg-slate-100">
              Admin Login
            </Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-24">
        <section className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600">
            Frontend-only demo
          </span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
            A simple way to manage forms and responses
          </h1>
          <p className="mt-6 text-lg text-slate-600">
            Create forms as an admin, share them with users, and review every submission in one
            clean dashboard.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/user-login"
              className="w-full rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-blue-700 sm:w-auto"
            >
              Login as User
            </Link>
            <Link
              to="/admin-login"
              className="w-full rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-medium text-slate-900 transition hover:bg-slate-50 sm:w-auto"
            >
              Login as Admin
            </Link>
          </div>
        </section>

        <section className="mt-24 grid gap-6 sm:grid-cols-3">
          {[
            { title: "Create", body: "Admins design forms in seconds with a simple builder." },
            { title: "Fill", body: "Users browse available forms and submit responses." },
            { title: "Review", body: "All submissions appear in a clean, sortable table." },
          ].map((f) => (
            <div key={f.title} className="rounded-xl border border-slate-200 p-6">
              <h3 className="text-base font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{f.body}</p>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
