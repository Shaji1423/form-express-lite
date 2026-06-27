import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/user-login")({
  head: () => ({ meta: [{ title: "User Login — FormFlow" }] }),
  component: UserLogin,
});

function UserLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-6">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          navigate({ to: "/user-dashboard" });
        }}
        className="w-full max-w-sm rounded-xl border border-slate-200 p-8"
      >
        <h1 className="text-2xl font-semibold text-slate-900">User Login</h1>
        <p className="mt-1 text-sm text-slate-600">Sign in to fill out available forms.</p>

        <label className="mt-6 block text-sm font-medium text-slate-700">Email</label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-500"
          placeholder="you@example.com"
        />

        <label className="mt-4 block text-sm font-medium text-slate-700">Password</label>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-500"
          placeholder="••••••••"
        />

        <button
          type="submit"
          className="mt-6 w-full rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700"
        >
          Login
        </button>

        <p className="mt-4 text-center text-xs text-slate-500">
          Are you an admin?{" "}
          <Link to="/admin-login" className="text-blue-600 hover:underline">
            Admin login
          </Link>
        </p>
      </form>
    </div>
  );
}
