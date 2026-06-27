import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { NavBar } from "../components/nav-bar";
import { useStore } from "../lib/form-store";

export const Route = createFileRoute("/create-form")({
  head: () => ({ meta: [{ title: "Create Form — FormFlow" }] }),
  component: CreateForm,
});

function CreateForm() {
  const { addForm } = useStore();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <NavBar />
      <main className="mx-auto max-w-2xl px-6 py-10">
        <h1 className="text-2xl font-semibold">Create a new form</h1>
        <p className="mt-1 text-sm text-slate-600">
          Every form collects: Name, Email, Department, and Message.
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            addForm({ title, description });
            navigate({ to: "/admin-dashboard" });
          }}
          className="mt-8 space-y-5 rounded-xl border border-slate-200 p-6"
        >
          <div>
            <label className="block text-sm font-medium text-slate-700">Form title</label>
            <input
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Customer Feedback"
              className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700">Description</label>
            <textarea
              required
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Brief description shown to users"
              className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-500"
            />
          </div>

          <div className="rounded-lg bg-slate-50 p-4 text-sm text-slate-600">
            <p className="font-medium text-slate-700">Fields included by default</p>
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
              className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
            >
              Save form
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
