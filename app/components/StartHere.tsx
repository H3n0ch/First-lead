import Link from "next/link";
import type { ReactNode } from "react";

// Add more cards here as new trainings are ready.
const CARDS: { badge: string; title: string; cta: string; href: string; cover: ReactNode }[] = [
  {
    badge: "It's free",
    title: "First Lead Course",
    cta: "Take this course",
    href: "/training",
    cover: <Cover top="Free course" big="The Engine" sub="11 lessons" />,
  },
  {
    badge: "Coming soon",
    title: "First Lead book",
    cta: "Get it first",
    href: "/book",
    cover: <Cover top="Stop waiting." big="First Lead" sub="Start moving" />,
  },
  {
    badge: "Free · coming soon",
    title: "Lead Workshop",
    cta: "Save my seat",
    href: "/workshop",
    cover: <Cover top="Free workshop" big="Leads" sub="The engine in one session" />,
  },
];

export function StartHere() {
  return (
    <section id="training" className="px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="text-3xl font-extrabold uppercase tracking-tight sm:text-4xl">
          <span className="text-accent">Free</span> training
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-muted">
          The exact playbook I use to get leads in niche markets. Videos, guides and templates. In the right niche,
          the first leads can come in weeks, not months.
        </p>
        <hr className="mx-auto mt-8 max-w-xl border-line" />

        <div className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-10 sm:grid-cols-3">
          {CARDS.map((c) => (
            <div key={c.title} className="flex flex-col items-center">
              <span className="self-end rounded bg-[#e5484d] px-2 py-0.5 text-[10px] font-extrabold text-white">
                {c.badge}
              </span>
              <h3 className="mt-1 min-h-12 text-base font-extrabold uppercase leading-tight">{c.title}</h3>
              <div className="mt-3 flex h-48 w-48 items-center justify-center rounded-full bg-navy">{c.cover}</div>
              <Link
                href={c.href}
                className="mt-6 w-full max-w-56 rounded-full bg-accent px-6 py-3 text-sm font-bold text-white transition hover:opacity-90"
              >
                {c.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Cover({ top, big, sub }: { top: string; big: string; sub: string }) {
  return (
    <div className="flex h-36 w-26 flex-col justify-between rounded-sm bg-accent p-2.5 text-left text-white shadow-xl">
      <span className="text-[9px] font-bold uppercase tracking-wider opacity-80">{top}</span>
      <span className="text-lg font-extrabold uppercase leading-none">{big}</span>
      <span className="text-[8px] font-semibold uppercase opacity-80">{sub}</span>
    </div>
  );
}
