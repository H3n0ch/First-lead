"use client";

import { useState, type FormEvent } from "react";
import { btnPrimary, field } from "./ui";

const QUALIFIER_OPTIONS = [
  "0 to 5",
  "6 to 20",
  "21 to 50",
  "More than 50",
  "Not sure",
];

type Status = "idle" | "sending" | "done" | "error";

export function ContactForm({
  source = "contact",
  check,
  submitLabel = "Get my Lead Audit",
}: {
  source?: "contact" | "leak-check" | "roadmap";
  check?: Record<string, unknown>;
  submitLabel?: string;
}) {
  const isRoadmap = source === "roadmap";
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<{ field?: string; message: string } | null>(null);
  const [firstName, setFirstName] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    setStatus("sending");
    setError(null);
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source,
          name,
          contact: data.get("contact"),
          qualifier: data.get("qualifier"),
          siteUrl: data.get("siteUrl"),
          website: data.get("website"),
          check,
        }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || !json.ok) {
        setError({ field: json.field, message: json.error ?? "Something went wrong. Please try again." });
        setStatus("error");
        return;
      }
      setFirstName(name.split(" ")[0]);
      setStatus("done");
    } catch {
      setError({ message: "No connection. Please try again." });
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div role="status" className="rounded-2xl border border-line bg-surface p-8">
        <p className="text-2xl font-semibold">Thanks{firstName ? `, ${firstName}` : ""}. It&apos;s on my desk.</p>
        <p className="mt-3 text-lg text-muted">
          {isRoadmap
            ? "I'll go through your website myself and send your Lead Roadmap by email: what to fix first, in order."
            : "I'll get back to you within one hour on business days, with a first look at your site and a time to talk."}
        </p>
      </div>
    );
  }

  const fieldError = (name: string) =>
    error?.field === name ? (
      <p id={`${source}-${name}-error`} className="mt-2 text-sm font-medium text-accent">
        {error.message}
      </p>
    ) : null;

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <div>
        <label htmlFor={`${source}-name`} className="mb-2 block text-sm font-semibold">
          Your name
        </label>
        <input
          id={`${source}-name`}
          name="name"
          autoComplete="name"
          required
          className={field}
          aria-invalid={error?.field === "name"}
          aria-describedby={error?.field === "name" ? `${source}-name-error` : undefined}
        />
        {fieldError("name")}
      </div>
      <div>
        <label htmlFor={`${source}-contact`} className="mb-2 block text-sm font-semibold">
          {isRoadmap ? "Email" : "Email or phone"}
        </label>
        <input
          id={`${source}-contact`}
          name="contact"
          type={isRoadmap ? "email" : "text"}
          autoComplete="email"
          required
          className={field}
          aria-invalid={error?.field === "contact"}
          aria-describedby={error?.field === "contact" ? `${source}-contact-error` : undefined}
        />
        {fieldError("contact")}
      </div>
      {isRoadmap && (
        <div>
          <label htmlFor={`${source}-siteUrl`} className="mb-2 block text-sm font-semibold">
            Your website
          </label>
          <input
            id={`${source}-siteUrl`}
            name="siteUrl"
            type="url"
            inputMode="url"
            autoComplete="url"
            placeholder="www.yourcompany.com"
            required
            className={field}
            aria-invalid={error?.field === "siteUrl"}
            aria-describedby={error?.field === "siteUrl" ? `${source}-siteUrl-error` : undefined}
          />
          {fieldError("siteUrl")}
        </div>
      )}
      <div>
        <label htmlFor={`${source}-qualifier`} className="mb-2 block text-sm font-semibold">
          Inquiries you get per month today
        </label>
        <select id={`${source}-qualifier`} name="qualifier" className={field} defaultValue="">
          <option value="" disabled>
            Pick one
          </option>
          {QUALIFIER_OPTIONS.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      </div>
      {/* Honeypot, hidden from people */}
      <div aria-hidden="true" className="hidden">
        <label>
          Website
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      {error && !error.field && <p className="text-sm font-medium text-accent">{error.message}</p>}

      <button type="submit" className={`${btnPrimary} w-full sm:w-auto`} disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : submitLabel}
      </button>
      <p className="text-sm text-muted">
        {isRoadmap
          ? "You get your personal Lead Roadmap by email, checked by me, not a template. No newsletter, no spam."
          : "You get a first look at where your site loses inquiries. I'll get back to you within one hour on business days. No newsletter, no spam."}
      </p>
    </form>
  );
}
