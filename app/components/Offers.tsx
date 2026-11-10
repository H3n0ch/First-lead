import { bookHref } from "@/lib/site";
import { Section, btnGhost, btnPrimary } from "./ui";

const OFFERS = [
  {
    name: "Lead Audit",
    for: "You have a website, but too few inquiries come in.",
    what: "I go through your site and your lead flow part by part and show you where inquiries leak, biggest leak first.",
    items: [
      "Are buyers finding you? The words they search vs. what your pages say",
      "Trust check: would you call yourself after 10 seconds on your site?",
      "Hook, form and reply time, tested like a real customer",
      "A ranked fix list you can hand to anyone",
      "A call where we go through it together",
    ],
    cta: "Book a call about the audit",
    primary: false,
  },
  {
    name: "Lead Machine",
    for: "You want the engine built and running, not just a list.",
    what: "I build the whole engine on your site with you, from the keywords to the first reply, so leads keep coming when you stop pushing.",
    items: [
      "Keyword map: what your buyers type, sorted into what you can win",
      "Your first cluster of pages, written to rank and to be quoted by AI assistants",
      "A free tool on your site that gives visitors a result",
      "Short form, instant reply, a notification on your phone",
      "A weekly numbers sheet so you know which part to fix next",
    ],
    cta: "Book a call about the machine",
    primary: true,
  },
];

const FOR = [
  "You already sell something, and one customer is worth real money to you",
  "You have a website, or you're ready to build one",
  "You'd rather have people come to you than chase them",
  "You can answer a new lead the same day",
];

const NOT_FOR = [
  "You want leads by tomorrow without lifting a finger",
  "You don't know yet what you sell or who pays for it",
  "You're looking for a list of contacts to cold call",
];

export function Offers() {
  return (
    <Section
      id="offers"
      eyebrow="Work with me"
      title="The how is free. You pay for the doing."
      lead="Everything on this site is the real method. If you'd rather have it done, or checked, here's how we can work together. The price depends on your site and your goals, and you get a fixed price before any work starts."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {OFFERS.map((o) => (
          <article
            key={o.name}
            id={o.name.toLowerCase().replace(" ", "-")}
            className={`flex flex-col rounded-3xl border p-7 sm:p-9 ${
              o.primary ? "border-accent bg-surface shadow-[0_20px_60px_-30px_var(--accent)]" : "border-line bg-surface"
            }`}
          >
            <h3 className="text-3xl font-semibold tracking-tight">{o.name}</h3>
            <p className="mt-3 font-medium">{o.for}</p>
            <p className="mt-3 leading-relaxed text-muted">{o.what}</p>
            <ul className="mt-6 flex-1 space-y-3">
              {o.items.map((it) => (
                <li key={it} className="flex gap-3">
                  <svg aria-hidden width="20" height="20" viewBox="0 0 20 20" className="mt-0.5 shrink-0 text-accent">
                    <path d="M4 10.5l4 4 8-9" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span>{it}</span>
                </li>
              ))}
            </ul>
            <a href={bookHref} className={`mt-8 ${o.primary ? btnPrimary : btnGhost}`}>
              {o.cta}
            </a>
          </article>
        ))}
      </div>

      <div className="mt-10 grid gap-6 rounded-3xl bg-accent-soft p-7 sm:p-9 md:grid-cols-2">
        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-accent">This is for you if</h3>
          <ul className="mt-4 space-y-2">
            {FOR.map((t) => (
              <li key={t} className="flex gap-3">
                <span aria-hidden className="font-bold text-accent">+</span>
                {t}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-muted">Not for you if</h3>
          <ul className="mt-4 space-y-2 text-muted">
            {NOT_FOR.map((t) => (
              <li key={t} className="flex gap-3">
                <span aria-hidden className="font-bold">–</span>
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
