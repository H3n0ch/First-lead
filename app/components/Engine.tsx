import { Section } from "./ui";

const PARTS = [
  { n: 0, title: "Know your product", job: "Who pays, for what problem." },
  { n: 1, title: "Find the buyers", job: "The words they already type." },
  { n: 2, title: "Get in front of them", job: "Pages that rank, ads for the rest." },
  { n: 3, title: "Earn trust", job: "Look like someone worth calling." },
  { n: 4, title: "The hook", job: "A tool that gives a result for free." },
  { n: 5, title: "Capture", job: "A fair trade: the result for their contact." },
  { n: 6, title: "Answer fast", job: "Minutes, not days." },
  { n: 7, title: "Follow up", job: "Help them get ready." },
  { n: 8, title: "Close", job: "Ask, qualify, sign." },
];

const STAGES = [
  { label: "The fuel", sub: "Keywords: what buyers search", parts: [0, 1, 2] },
  { label: "The engine", sub: "Your website does the work", parts: [3, 4, 5] },
  { label: "The customer", sub: "You turn interest into a deal", parts: [6, 7, 8] },
];

export function Engine() {
  return (
    <Section
      id="engine"
      eyebrow="The system"
      title="Nine parts. Each has one job."
      lead="Keywords are the fuel, your website is the engine, a customer comes out the other end. Build them in this order."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {STAGES.map((stage, si) => (
          <div key={stage.label} className="relative rounded-3xl border border-line bg-surface p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">{stage.label}</p>
            <p className="mt-1 text-sm text-muted">{stage.sub}</p>
            <ol className="mt-6 space-y-4">
              {stage.parts.map((pi) => {
                const p = PARTS[pi];
                return (
                  <li key={p.n} className="flex gap-3">
                    <span className="font-mono text-sm font-semibold text-muted">{p.n}</span>
                    <div>
                      <p className="font-semibold leading-snug">{p.title}</p>
                      <p className="text-sm text-muted">{p.job}</p>
                    </div>
                  </li>
                );
              })}
            </ol>
            {si < STAGES.length - 1 && (
              <span
                aria-hidden
                className="absolute -bottom-4 left-1/2 z-10 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-accent text-accent-ink md:-right-4 md:bottom-auto md:left-auto md:top-1/2 md:-translate-y-1/2 md:translate-x-0"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" className="rotate-90 md:rotate-0">
                  <path d="M2 7h10M8 3l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl bg-accent-soft p-5">
          <p className="font-semibold">No leads coming in?</p>
          <p className="mt-1 text-muted">The problem is in parts 0 to 4.</p>
        </div>
        <div className="rounded-2xl bg-accent-soft p-5">
          <p className="font-semibold">Leads, but nobody buys?</p>
          <p className="mt-1 text-muted">The problem is in parts 5 to 8. Fix the weakest part first.</p>
        </div>
      </div>
    </Section>
  );
}
