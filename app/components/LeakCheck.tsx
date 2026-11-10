"use client";

import { useMemo, useState } from "react";
import { ContactForm } from "./ContactForm";
import { field } from "./ui";

// Assumptions, shown on the page. Rough benchmarks, not promises.
const BENCHMARK_RATE = 0.025; // 2.5% of visitors send an inquiry on a site with a working hook + short form
const CLOSE_RATE = 0.2; // 1 in 5 qualified inquiries becomes a customer
const REPLY_OPTIONS = [
  { value: "hour", label: "Within an hour", cold: 0 },
  { value: "day", label: "Same day", cold: 0.2 },
  { value: "next", label: "Next day", cold: 0.4 },
  { value: "later", label: "Two days or more", cold: 0.6 },
] as const;
type Reply = (typeof REPLY_OPTIONS)[number]["value"];

type Leak = { title: string; text: string; impact: number };

const eur = new Intl.NumberFormat("en-IE", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
});
const num = new Intl.NumberFormat("en-IE", { maximumFractionDigits: 0 });

function toNumber(s: string) {
  const n = Number(s.replace(/[^\d.]/g, ""));
  return Number.isFinite(n) && n > 0 ? n : 0;
}

export function LeakCheck() {
  const [visitors, setVisitors] = useState("");
  const [inquiries, setInquiries] = useState("");
  const [value, setValue] = useState("");
  const [reply, setReply] = useState<Reply>("day");
  const [fields, setFields] = useState("6");
  const [face, setFace] = useState<"yes" | "no">("no");
  const [showForm, setShowForm] = useState(false);

  const result = useMemo(() => {
    const V = toNumber(visitors);
    const I = toNumber(inquiries);
    const C = toNumber(value);
    const F = toNumber(fields);
    if (!V || !C) return null;

    const cold = REPLY_OPTIONS.find((o) => o.value === reply)!.cold;
    const rate = I / V;
    const missedBySite = Math.max(0, V * BENCHMARK_RATE - I);
    const lostToSlowReply = I * cold;
    const lostInquiries = missedBySite + lostToSlowReply;
    const lostValue = lostInquiries * CLOSE_RATE * C;

    const leaks: Leak[] = [];
    if (cold > 0) {
      leaks.push({
        title: "You answer too late",
        text: `A lead is hot for minutes, not days. Answering "${REPLY_OPTIONS.find((o) => o.value === reply)!.label.toLowerCase()}" lets about ${Math.round(cold * 100)}% of your inquiries go cold. Set up an instant reply and call hot leads within the hour.`,
        impact: lostToSlowReply * CLOSE_RATE * C,
      });
    }
    if (F > 4) {
      leaks.push({
        title: `Your form has ${num.format(F)} fields`,
        text: "Every extra field loses people. Ask only what you need to call back: name, email or phone, and one question that tells you if they can buy.",
        impact: missedBySite * 0.35 * CLOSE_RATE * C,
      });
    }
    if (face === "no") {
      leaks.push({
        title: "Visitors can't see who they'd call",
        text: "People check you before they contact you. Put a real face, a name and one real proof with a number on the first screen.",
        impact: missedBySite * 0.3 * CLOSE_RATE * C,
      });
    }
    if (rate < BENCHMARK_RATE) {
      leaks.push({
        title: "No reason to reach out",
        text: `${(rate * 100).toFixed(1)}% of your visitors send an inquiry. Give them a free result first, like a calculator or a quick check, and the form becomes a fair trade.`,
        impact: missedBySite * 0.35 * CLOSE_RATE * C,
      });
    }
    leaks.sort((a, b) => b.impact - a.impact);

    return { V, I, C, rate, lostInquiries, lostValue, leaks: leaks.slice(0, 3) };
  }, [visitors, inquiries, value, reply, fields, face]);

  const check = result
    ? {
        visitors: result.V,
        inquiries: result.I,
        customerValue: result.C,
        replyTime: reply,
        formFields: toNumber(fields),
        faceAndProof: face,
        estLostInquiries: Math.round(result.lostInquiries),
        estLostValueEur: Math.round(result.lostValue),
      }
    : undefined;

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
      <form
        className="space-y-5 rounded-3xl border border-line bg-surface p-6 sm:p-8"
        onSubmit={(e) => e.preventDefault()}
      >
        <NumberField id="lc-visitors" label="Website visitors per month" value={visitors} onChange={setVisitors} placeholder="e.g. 1,500" />
        <NumberField id="lc-inquiries" label="Inquiries per month" value={inquiries} onChange={setInquiries} placeholder="e.g. 8" />
        <NumberField id="lc-value" label="What one customer is worth to you (€)" value={value} onChange={setValue} placeholder="e.g. 3,000" />

        <div>
          <label htmlFor="lc-reply" className="mb-2 block text-sm font-semibold">
            How fast do you usually answer a new inquiry?
          </label>
          <select id="lc-reply" className={field} value={reply} onChange={(e) => setReply(e.target.value as Reply)}>
            {REPLY_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </div>

        <NumberField id="lc-fields" label="Fields in your contact form" value={fields} onChange={setFields} placeholder="e.g. 6" />

        <fieldset>
          <legend className="mb-2 block text-sm font-semibold">
            Can visitors see your face and one real result on the first screen?
          </legend>
          <div className="flex gap-3">
            {(["yes", "no"] as const).map((v) => (
              <label
                key={v}
                className={`flex-1 cursor-pointer rounded-xl border px-4 py-3 text-center font-medium transition ${
                  face === v ? "border-accent bg-accent-soft text-accent" : "border-line"
                }`}
              >
                <input
                  type="radio"
                  name="lc-face"
                  value={v}
                  checked={face === v}
                  onChange={() => setFace(v)}
                  className="sr-only"
                />
                {v === "yes" ? "Yes" : "No"}
              </label>
            ))}
          </div>
        </fieldset>
      </form>

      <div aria-live="polite" className="rounded-3xl bg-navy p-6 text-white sm:p-8">
        {!result ? (
          <div className="flex h-full flex-col justify-center">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] opacity-60">Your result</p>
            <p className="mt-4 text-2xl font-semibold leading-snug">
              Enter your visitors and what one customer is worth. Your estimate shows up here right away.
            </p>
          </div>
        ) : (
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] opacity-60">Estimated every month</p>
            <p className="mt-3 text-5xl font-semibold tracking-tight sm:text-6xl">{eur.format(result.lostValue)}</p>
            <p className="mt-2 text-lg opacity-75">
              left on the table, from about {num.format(Math.round(result.lostInquiries))} inquiries you don&apos;t
              get or lose.
            </p>

            {result.leaks.length > 0 ? (
              <ol className="mt-8 space-y-5">
                {result.leaks.map((leak, i) => (
                  <li key={leak.title} className="flex gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-accent-ink">
                      {i + 1}
                    </span>
                    <div>
                      <p className="font-semibold">{leak.title}</p>
                      <p className="mt-1 text-sm leading-relaxed opacity-75">{leak.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            ) : (
              <p className="mt-8 leading-relaxed opacity-80">
                No big leak on these numbers. Your next lever is more of the right visitors: pages that answer
                what your buyers already search for.
              </p>
            )}

            {!showForm && (
              <button
                type="button"
                onClick={() => setShowForm(true)}
                className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-accent px-6 py-3 font-semibold text-accent-ink transition hover:opacity-90 sm:w-auto"
              >
                Get the full Lead Audit for your site
              </button>
            )}

            <p className="mt-6 text-xs leading-relaxed opacity-55">
              An estimate, not a promise. Assumes {BENCHMARK_RATE * 100}% of visitors could send an inquiry, 1 in{" "}
              {Math.round(1 / CLOSE_RATE)} inquiries becomes a customer, and slow replies let 20 to 60% go cold.
            </p>
          </div>
        )}
      </div>

      {showForm && result && (
        <div className="rounded-3xl border border-accent/40 bg-surface p-6 sm:p-8 lg:col-span-2">
          <h3 className="text-2xl font-semibold">Where exactly does your site leak?</h3>
          <p className="mb-6 mt-2 max-w-2xl text-muted">
            I&apos;ll look at your site with these numbers and show you the fixes in order, biggest first.
          </p>
          <ContactForm source="leak-check" check={check} submitLabel="Send me my audit" />
        </div>
      )}
    </div>
  );
}

function NumberField({
  id,
  label,
  value,
  onChange,
  placeholder,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-semibold">
        {label}
      </label>
      <input
        id={id}
        inputMode="numeric"
        className={field}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
