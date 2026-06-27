import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { NavBar } from "../components/nav-bar";
import { useStore } from "../lib/form-store";

export const Route = createFileRoute("/create-form")({
  head: () => ({ meta: [{ title: "Create Form — Campus Life" }] }),
  component: CreateForm,
});

function CreateForm() {
  const { addForm } = useStore();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavBar />
      <main className="mx-auto max-w-2xl px-5 py-10">
        <h1 className="text-2xl font-semibold sm:text-3xl">Create a new form</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Every form collects: Name, Email, Department, and Message.
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            addForm({ title, description });
            navigate({ to: "/admin-dashboard" });
          }}
          className="mt-8 space-y-5 rounded-2xl border border-border bg-card p-6"
        >
          <div>
            <label className="block text-sm font-medium text-foreground">Form title</label>
            <input
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Proshow Registration"
              className="mt-1 w-full rounded-md border border-border bg-input px-3 py-2.5 text-sm text-foreground outline-none focus:border-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground">Description</label>
            <textarea
              required
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Brief description shown to students"
              className="mt-1 w-full rounded-md border border-border bg-input px-3 py-2.5 text-sm text-foreground outline-none focus:border-primary"
            />
          </div>

          <div className="rounded-lg border border-border bg-secondary/50 p-4 text-sm text-muted-foreground">
            <p className="font-medium text-foreground">Fields included by default</p>
            <ul className="mt-2 list-disc pl-5">
              <li>Name</li>
              <li>Email</li>
              <li>Department</li>
              <li>Message</li>
            </ul>
          </div>

          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={() => navigate({ to: "/admin-dashboard" })}
              className="rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition hover:opacity-90"
            >
              Save form
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
