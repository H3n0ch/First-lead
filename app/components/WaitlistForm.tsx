"use client";

import { useState, type FormEvent } from "react";
import { btnPrimary, field } from "./ui";

/** Email-only waitlist (book, workshop). */
export function WaitlistForm({
  source,
  label,
  button,
  done,
}: {
  source: "book" | "workshop" | "course";
  label: string;
  button: string;
  done: string;
}) {
  const [state, setState] = useState<"idle" | "sending" | "done">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    setState("sending");
    setError("");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ source, contact: data.get("email"), website: data.get("website") }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || !json.ok) {
        setError(json.error ?? "Something went wrong. Please try again.");
        setState("idle");
        return;
      }
      setState("done");
    } catch {
      setError("No connection. Please try again.");
      setState("idle");
    }
  }

  if (state === "done") {
    return (
      <p role="status" className="text-lg font-bold">
        {done}
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-3">
      <label htmlFor={`${source}-email`} className="block text-sm font-semibold">
        {label}
      </label>
      <input
        id={`${source}-email`}
        name="email"
        type="email"
        autoComplete="email"
        placeholder="you@company.com"
        className={field}
        aria-invalid={!!error}
        aria-describedby={error ? `${source}-error` : undefined}
      />
      <div aria-hidden="true" className="hidden">
        <input name="website" tabIndex={-1} autoComplete="off" />
      </div>
      {error && (
        <p id={`${source}-error`} className="text-sm font-medium text-[#e5484d]">
          {error}
        </p>
      )}
      <button type="submit" disabled={state === "sending"} className={`${btnPrimary} w-full`}>
        {state === "sending" ? "Sending…" : button}
      </button>
      <p className="text-xs text-muted">One email when it&apos;s ready. Nothing else.</p>
    </form>
  );
}
