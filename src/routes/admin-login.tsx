import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import clLogo from "@/assets/cl-logo.asset.json";

export const Route = createFileRoute("/admin-login")({
  head: () => ({ meta: [{ title: "Admin Login — Campus Life" }] }),
  component: AdminLogin,
});

function AdminLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-5 py-10">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          navigate({ to: "/admin-dashboard" });
        }}
        className="w-full max-w-sm rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-glow)]"
      >
        <Link to="/" className="mb-6 flex items-center justify-center gap-2">
          <img src={clLogo.url} alt="Campus Life" className="h-10 w-10 rounded-md object-cover" />
          <span className="text-base font-semibold">Campus Life</span>
        </Link>
        <h1 className="text-2xl font-semibold text-foreground">Admin Login</h1>
        <p className="mt-1 text-sm text-muted-foreground">Manage forms and review responses.</p>

        <label className="mt-6 block text-sm font-medium text-foreground">Email</label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 w-full rounded-md border border-border bg-input px-3 py-2.5 text-sm text-foreground outline-none transition focus:border-primary"
          placeholder="admin@srmeaswari.ac.in"
        />

        <label className="mt-4 block text-sm font-medium text-foreground">Password</label>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-1 w-full rounded-md border border-border bg-input px-3 py-2.5 text-sm text-foreground outline-none transition focus:border-primary"
          placeholder="••••••••"
        />

        <button
          type="submit"
          className="mt-6 w-full rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition hover:opacity-90"
        >
          Login
        </button>

        <p className="mt-4 text-center text-xs text-muted-foreground">
          Not an admin?{" "}
          <Link to="/user-login" className="text-primary hover:underline">
            Student login
          </Link>
        </p>
      </form>
    </div>
  );
}
