export const FAQ = [
  {
    q: "What exactly is a lead?",
    a: "A lead is someone who has a problem you solve and the money to pay for it, and who raised their hand: they left their name and a way to reach them. A visitor is not a lead. A newsletter signup is usually not a lead either.",
  },
  {
    q: "Do I have to cold call?",
    a: "No. The engine is built so people come to you. While it warms up, you work outward in rings: people you know, free help for businesses you'd like to work with, then partners. Strangers come last, when you have stories and results.",
  },
  {
    q: "How long until the first lead comes in?",
    a: "Pages that rank take weeks to months before they bring the first inquiry. Ads can be faster but cost money from day one. That's why you start with people you know, value-first help and partners while the engine warms up.",
  },
  {
    q: "What does it cost to work with you?",
    a: "The training on this site is free. For the Lead Audit or the Lead Machine, the price depends on your site and on how much you want built. After a first call you get a fixed price in writing, before any work starts.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="bg-band px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-center text-2xl font-extrabold uppercase tracking-tight">FAQs</h2>
        <div className="mt-6">
          {FAQ.map((f) => (
            <details key={f.q} className="group border-b border-dashed border-ink/30 py-4">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-bold [&::-webkit-details-marker]:hidden">
                {f.q}
                <svg aria-hidden width="12" height="12" viewBox="0 0 10 10" className="shrink-0 transition group-open:rotate-180">
                  <path d="M2 4l3 3 3-3" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              </summary>
              <p className="mt-3 leading-relaxed text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
