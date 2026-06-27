import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { NavBar } from "../components/nav-bar";
import { useStore } from "../lib/form-store";

export const Route = createFileRoute("/fill-form/$id")({
  head: () => ({ meta: [{ title: "Fill Form — FormFlow" }] }),
  component: FillForm,
});

function FillForm() {
  const { id } = Route.useParams();
  const { forms, addResponse } = useStore();
  const navigate = useNavigate();
  const form = forms.find((f) => f.id === id);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!form) {
    return (
      <div className="min-h-screen bg-white text-slate-900">
        <NavBar />
        <main className="mx-auto max-w-2xl px-6 py-16 text-center">
          <h1 className="text-xl font-semibold">Form not found</h1>
          <Link to="/user-dashboard" className="mt-4 inline-block text-blue-600 hover:underline">
            Back to dashboard
          </Link>
        </main>
      </div>
    );
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-white text-slate-900">
        <NavBar />
        <main className="mx-auto max-w-2xl px-6 py-16">
          <div className="rounded-xl border border-green-200 bg-green-50 p-8 text-center">
            <h1 className="text-2xl font-semibold text-green-700">Response submitted</h1>
            <p className="mt-2 text-sm text-green-700">
              Thanks for filling out “{form.title}”. Your response has been recorded.
            </p>
            <div className="mt-6 flex justify-center gap-3">
              <Link
                to="/user-dashboard"
                className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
              >
                Back to dashboard
              </Link>
              <button
                onClick={() => {
                  setName(""); setEmail(""); setDepartment(""); setMessage("");
                  setSubmitted(false);
                }}
                className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                Submit another
              </button>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <NavBar />
      <main className="mx-auto max-w-2xl px-6 py-10">
        <h1 className="text-2xl font-semibold">{form.title}</h1>
        <p className="mt-1 text-sm text-slate-600">{form.description}</p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            addResponse({
              formId: form.id,
              formTitle: form.title,
              name,
              email,
              department,
              message,
            });
            setSubmitted(true);
          }}
          className="mt-8 space-y-5 rounded-xl border border-slate-200 p-6"
        >
          {[
            { label: "Name", value: name, set: setName, type: "text", placeholder: "Jane Doe" },
            { label: "Email", value: email, set: setEmail, type: "email", placeholder: "jane@example.com" },
            { label: "Department", value: department, set: setDepartment, type: "text", placeholder: "Marketing" },
          ].map((f) => (
            <div key={f.label}>
              <label className="block text-sm font-medium text-slate-700">{f.label}</label>
              <input
                required
                type={f.type}
                value={f.value}
                onChange={(e) => f.set(e.target.value)}
                placeholder={f.placeholder}
                className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-500"
              />
            </div>
          ))}
          <div>
            <label className="block text-sm font-medium text-slate-700">Message</label>
            <textarea
              required
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write your message..."
              className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-500"
            />
          </div>

          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={() => navigate({ to: "/user-dashboard" })}
              className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
            >
              Submit
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
