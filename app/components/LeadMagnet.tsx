import Link from "next/link";

/** "Lead Roadmap" offer card shown under the proof numbers. */
export function LeadMagnet() {
  return (
    <section className="bg-band px-5 py-14 sm:px-8">
      <div className="mx-auto grid max-w-4xl items-center gap-10 rounded-2xl bg-surface p-6 shadow-sm sm:p-10 md:grid-cols-[1.3fr_1fr]">
        <RoadmapPreview />
        <div className="relative text-center md:text-left">
          <span className="absolute -top-2 right-0 rounded bg-[#e5484d] px-2.5 py-1 text-[10px] font-extrabold uppercase italic text-white">
            Brand new
          </span>
          <h2 className="mt-6 text-2xl font-extrabold uppercase tracking-tight sm:text-3xl">The Lead Roadmap</h2>
          <p className="mt-3 text-muted">
            Send me your website. You get back your personal roadmap: which parts of the engine to fix first, in
            order. Free.
          </p>
          <Link
            href="/roadmap"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-accent px-7 py-3.5 text-sm font-extrabold uppercase tracking-wide text-white transition hover:opacity-90"
          >
            Get my custom lead roadmap
          </Link>
        </div>
      </div>
    </section>
  );
}

const SHEETS = [
  { title: "1: Get found", rows: ["Know your product", "Find the buyers", "Get in front of them"] },
  { title: "2: Get the lead", rows: ["Earn trust", "The hook", "Capture"] },
  { title: "3: Win the customer", rows: ["Answer fast", "Follow up", "Close"] },
];

/** Three roadmap "sheets", fanned out like printed pages. */
function RoadmapPreview() {
  return (
    <div aria-hidden className="relative mx-auto flex h-52 w-full max-w-md items-center justify-center">
      {SHEETS.map((s, i) => {
        const pos = ["-translate-x-[62%] -rotate-3 scale-90", "z-10", "translate-x-[62%] rotate-3 scale-90"][i];
        return (
          <div
            key={s.title}
            className={`absolute w-40 overflow-hidden rounded-md border border-line bg-surface text-[8px] shadow-lg ${pos}`}
          >
            <p className={`px-2 py-1.5 font-extrabold uppercase text-white ${i === 1 ? "bg-navy" : "bg-ink/80"}`}>
              {s.title}
            </p>
            <ul>
              {s.rows.map((r, j) => (
                <li key={r} className="flex items-center gap-1.5 border-t border-line px-2 py-1.5">
                  <span className={`h-2 w-2 shrink-0 rounded-full ${i === 1 && j === 0 ? "bg-[#e5484d]" : "bg-accent"}`} />
                  <span className="font-semibold">{r}</span>
                </li>
              ))}
            </ul>
            <div className="space-y-1 border-t border-line px-2 py-2">
              <div className="h-1 w-full rounded bg-line" />
              <div className="h-1 w-3/4 rounded bg-line" />
              <div className="h-1 w-5/6 rounded bg-line" />
            </div>
          </div>
        );
      })}
    </div>
  );
}
