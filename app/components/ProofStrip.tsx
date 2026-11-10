// What we offer, what we've done, why it works. One line each, on purpose.
const POINTS = [
  { kicker: "What I offer", title: "Lead engines and ad campaigns, built or taught" },
  { kicker: "What I've done", title: "Customers worth millions, for multiple businesses" },
  { kicker: "Why it works", title: "Niche-focused. First leads in weeks." },
];

export function ProofStrip() {
  return (
    <section aria-label="Why work with me" className="px-5 py-14 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
          I help you <span className="text-accent">scale your business.</span>
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {POINTS.map((p) => (
            <div key={p.kicker} className="border-l-4 border-accent pl-4">
              <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-muted">{p.kicker}</p>
              <p className="mt-1 text-lg font-extrabold leading-snug">{p.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
