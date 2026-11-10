"use client";

import { useState, type FormEvent } from "react";
import { field } from "./ui";

export function BookTeaser() {
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
        body: JSON.stringify({ source: "book", contact: data.get("email"), website: data.get("website") }),
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

  return (
    <section id="book" className="px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto grid max-w-5xl items-center gap-10 rounded-[2rem] bg-navy p-8 text-white sm:p-14 md:grid-cols-[1fr_auto]">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-accent-light">The book, coming soon</p>
          <h2 className="mt-3 text-4xl font-black uppercase tracking-tight sm:text-6xl">First Lead.</h2>
          <p className="mt-2 text-xl opacity-80">Stop Waiting. Start Moving. Get Your First Customers.</p>
          <p className="mt-5 max-w-xl leading-relaxed opacity-70">
            The whole system, part by part: get your first clients by hand this month, and build the engine so
            you never have to chase them again.
          </p>
        </div>

        {state === "done" ? (
          <p role="status" className="text-lg font-semibold md:w-80">
            You&apos;re on the list. I&apos;ll email you when it&apos;s out.
          </p>
        ) : (
          <form onSubmit={onSubmit} noValidate className="w-full space-y-3 md:w-80">
            <label htmlFor="book-email" className="block text-sm font-semibold">
              Get it first
            </label>
            <input
              id="book-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@company.com"
              className={`${field} text-ink`}
              aria-invalid={!!error}
              aria-describedby={error ? "book-error" : undefined}
            />
            <div aria-hidden="true" className="hidden">
              <input name="website" tabIndex={-1} autoComplete="off" />
            </div>
            {error && (
              <p id="book-error" className="text-sm font-medium text-accent-light">
                {error}
              </p>
            )}
            <button
              type="submit"
              disabled={state === "sending"}
              className="w-full rounded-full bg-accent px-6 py-3 font-semibold text-accent-ink transition hover:opacity-90 disabled:opacity-60"
            >
              {state === "sending" ? "Sending…" : "Put me on the list"}
            </button>
            <p className="text-xs opacity-60">One email when it&apos;s out. Nothing else.</p>
          </form>
        )}
      </div>
    </section>
  );
}
