import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { NavBar } from "../components/nav-bar";
import { BackButton } from "../components/back-button";
import { useStore } from "../lib/form-store";
import { CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/fill-form/$id")({
  head: () => ({ meta: [{ title: "Fill Form — Campus Life" }] }),
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
      <div className="min-h-screen bg-background text-foreground">
        <NavBar />
        <main className="mx-auto max-w-2xl px-5 py-16 text-center">
          <h1 className="text-xl font-semibold">Form not found</h1>
          <Link to="/user-dashboard" className="mt-4 inline-block text-primary hover:underline">
            Back to dashboard
          </Link>
        </main>
      </div>
    );
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <NavBar />
        <main className="mx-auto max-w-2xl px-5 py-16">
          <div className="rounded-2xl border border-primary/30 bg-card p-8 text-center shadow-[var(--shadow-glow)]">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/20 text-primary">
              <CheckCircle2 className="h-7 w-7" />
            </div>
            <h1 className="mt-4 text-2xl font-semibold text-foreground">Response submitted</h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Thanks for filling out "{form.title}". Your response has been recorded.
            </p>
            <div className="mt-6 flex justify-center gap-3">
              <Link
                to="/user-dashboard"
                className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90"
              >
                Back to dashboard
              </Link>
              <button
                onClick={() => {
                  setName(""); setEmail(""); setDepartment(""); setMessage("");
                  setSubmitted(false);
                }}
                className="rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary"
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
    <div className="min-h-screen bg-background text-foreground">
      <NavBar />
      <main className="mx-auto max-w-2xl px-5 py-10">
        <BackButton fallback="/user-dashboard" />
        <h1 className="mt-4 text-2xl font-semibold sm:text-3xl">{form.title}</h1>
        <p className="mt-1 text-sm text-muted-foreground">{form.description}</p>

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
          className="mt-8 space-y-5 rounded-2xl border border-border bg-card p-6"
        >
          {[
            { label: "Name", value: name, set: setName, type: "text", placeholder: "Jane Doe" },
            { label: "Email", value: email, set: setEmail, type: "email", placeholder: "jane@srmeaswari.ac.in" },
            { label: "Department", value: department, set: setDepartment, type: "text", placeholder: "CSE" },
          ].map((f) => (
            <div key={f.label}>
              <label className="block text-sm font-medium text-foreground">{f.label}</label>
              <input
                required
                type={f.type}
                value={f.value}
                onChange={(e) => f.set(e.target.value)}
                placeholder={f.placeholder}
                className="mt-1 w-full rounded-md border border-border bg-input px-3 py-2.5 text-sm text-foreground outline-none focus:border-primary"
              />
            </div>
          ))}
          <div>
            <label className="block text-sm font-medium text-foreground">Message</label>
            <textarea
              required
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write your message..."
              className="mt-1 w-full rounded-md border border-border bg-input px-3 py-2.5 text-sm text-foreground outline-none focus:border-primary"
            />
          </div>

          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={() => navigate({ to: "/user-dashboard" })}
              className="rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition hover:opacity-90"
            >
              Submit
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
