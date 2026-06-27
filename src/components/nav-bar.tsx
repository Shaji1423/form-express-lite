import { Link } from "@tanstack/react-router";

export function NavBar() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="text-lg font-semibold text-slate-900">
          FormFlow
        </Link>
        <nav className="flex items-center gap-2 text-sm">
          <Link
            to="/user-dashboard"
            className="rounded-md px-3 py-2 text-slate-700 hover:bg-slate-100"
            activeProps={{ className: "rounded-md px-3 py-2 text-blue-600 font-medium" }}
          >
            User
          </Link>
          <Link
            to="/admin-dashboard"
            className="rounded-md px-3 py-2 text-slate-700 hover:bg-slate-100"
            activeProps={{ className: "rounded-md px-3 py-2 text-blue-600 font-medium" }}
          >
            Admin
          </Link>
          <Link
            to="/responses"
            className="rounded-md px-3 py-2 text-slate-700 hover:bg-slate-100"
            activeProps={{ className: "rounded-md px-3 py-2 text-blue-600 font-medium" }}
          >
            Responses
          </Link>
        </nav>
      </div>
    </header>
  );
}
