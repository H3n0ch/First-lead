"use client";

import Link from "next/link";
import { useState, type FormEvent, type ReactNode } from "react";

const COUNTRIES = [
  { code: "+49", label: "DE +49" },
  { code: "+43", label: "AT +43" },
  { code: "+41", label: "CH +41" },
  { code: "+31", label: "NL +31" },
  { code: "+44", label: "UK +44" },
  { code: "+1", label: "US +1" },
  { code: "+972", label: "IL +972" },
  { code: "", label: "Other" },
];

const REVENUE = [
  "No revenue yet",
  "Under 100,000 €",
  "100,000 to 500,000 €",
  "500,000 € to 1M €",
  "1M to 3M €",
  "More than 3M €",
];
const OWNERSHIP = ["Solo owner", "With partner(s)", "Not a business owner yet"];
const HEARD = ["Today", "Less than a month ago", "1 to 6 months ago", "More than 6 months ago"];

type Errors = Record<string, string>;

const input =
  "w-full rounded-lg border border-white/15 bg-navy px-3 py-2.5 text-sm text-white placeholder:text-white/45 focus:border-accent-light focus:outline-none focus:ring-2 focus:ring-accent-light/40";
const labelCls = "mb-1 block text-xs font-semibold text-white/85";

/** One-step lead capture in a navy card. */
export function LeadCaptureForm({
  source,
  eyebrow = "Business owners",
  title,
  button = "Sign me up",
  done,
}: {
  source: "course" | "workshop";
  eyebrow?: string;
  title: ReactNode;
  button?: string;
  done: string;
}) {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Errors>({});

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const v = (k: string) => String(d.get(k) ?? "").trim();
    const errs: Errors = {};
    if (!v("firstName")) errs.firstName = "Required.";
    if (!v("lastName")) errs.lastName = "Required.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v("email"))) errs.email = "Please enter a valid email.";
    if (!/^[\d\s()/-]{5,20}$/.test(v("phone"))) errs.phone = "Please enter a valid phone number.";
    for (const k of ["revenue", "ownership", "heard"]) if (!v(k)) errs[k] = "Please select one.";
    setErrors(errs);
    if (Object.keys(errs).length) return;

    setSending(true);
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source,
          name: `${v("firstName")} ${v("lastName")}`,
          contact: v("email"),
          phone: `${v("country")} ${v("phone")}`.trim(),
          revenue: v("revenue"),
          ownership: v("ownership"),
          heard: v("heard"),
          website: v("website"),
        }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || !json.ok) {
        setErrors({ [json.field ?? "form"]: json.error ?? "Something went wrong. Please try again." });
        return;
      }
      setSent(true);
    } catch {
      setErrors({ form: "No connection. Please try again." });
    } finally {
      setSending(false);
    }
  }

  const err = (k: string) =>
    errors[k] ? (
      <p id={`${source}-${k}-err`} className="mt-1 text-xs font-semibold text-[#ff8a8d]">
        {errors[k]}
      </p>
    ) : null;
  const a11y = (k: string) => ({
    "aria-invalid": !!errors[k],
    "aria-describedby": errors[k] ? `${source}-${k}-err` : undefined,
  });

  return (
    <div className="rounded-2xl bg-navy p-5 text-white shadow-2xl ring-1 ring-white/5 sm:p-6">
      <p className="text-center text-xs font-extrabold uppercase tracking-[0.14em] text-[#f5c542]">{eyebrow}</p>
      <p className="mt-2 text-center text-lg font-extrabold leading-tight">{title}</p>

      {sent ? (
        <p role="status" className="mt-5 font-bold">
          {done}
        </p>
      ) : (
        <form onSubmit={onSubmit} noValidate className="mt-5 space-y-3">
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label htmlFor={`${source}-firstName`} className={labelCls}>First name*</label>
              <input id={`${source}-firstName`} name="firstName" autoComplete="given-name" className={input} {...a11y("firstName")} />
              {err("firstName")}
            </div>
            <div>
              <label htmlFor={`${source}-lastName`} className={labelCls}>Last name*</label>
              <input id={`${source}-lastName`} name="lastName" autoComplete="family-name" className={input} {...a11y("lastName")} />
              {err("lastName")}
            </div>
          </div>
          <div>
            <label htmlFor={`${source}-email`} className={labelCls}>Email*</label>
            <input id={`${source}-email`} name="email" type="email" autoComplete="email" className={input} {...a11y("email")} />
            {err("email")}
          </div>
          <div>
            <label htmlFor={`${source}-phone`} className={labelCls}>Phone number*</label>
            <div className="flex gap-2">
              <select name="country" aria-label="Country code" defaultValue="+49" className={`${input} w-24 shrink-0 px-2`}>
                {COUNTRIES.map((c) => (
                  <option key={c.label} value={c.code}>{c.label}</option>
                ))}
              </select>
              <input id={`${source}-phone`} name="phone" type="tel" autoComplete="tel-national" className={input} {...a11y("phone")} />
            </div>
            {err("phone")}
          </div>
          <Select id="revenue" label="Annual business revenue*" options={REVENUE} source={source} err={err} a11y={a11y} />
          <Select id="ownership" label="Are you a solo owner or do you have partner(s)?*" options={OWNERSHIP} source={source} err={err} a11y={a11y} />
          <Select id="heard" label="How long ago did you first hear of First Lead?*" options={HEARD} source={source} err={err} a11y={a11y} />
          <div aria-hidden="true" className="hidden">
            <input name="website" tabIndex={-1} autoComplete="off" />
          </div>
          {err("form")}
          <button
            type="submit"
            disabled={sending}
            className="w-full rounded-lg bg-[#f8e27a] px-5 py-3.5 text-sm font-extrabold uppercase tracking-wide text-navy transition hover:brightness-105 disabled:opacity-60"
          >
            {sending ? "Sending…" : button}
          </button>
          <p className="text-[11px] leading-relaxed text-white/55">
            By submitting, you agree that First Lead may contact you by email or phone about this request. No spam,
            and your data is never sold. You can withdraw at any time. See the{" "}
            <Link href="/privacy" className="underline">privacy policy</Link>.
          </p>
        </form>
      )}
    </div>
  );
}

function Select({
  id,
  label,
  options,
  source,
  err,
  a11y,
}: {
  id: string;
  label: string;
  options: string[];
  source: string;
  err: (k: string) => ReactNode;
  a11y: (k: string) => Record<string, unknown>;
}) {
  return (
    <div>
      <label htmlFor={`${source}-${id}`} className={labelCls}>{label}</label>
      <select id={`${source}-${id}`} name={id} defaultValue="" className={input} {...a11y(id)}>
        <option value="" disabled>Please select</option>
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
      {err(id)}
    </div>
  );
}
