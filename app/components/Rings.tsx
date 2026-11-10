import { Section } from "./ui";

const RINGS = [
  {
    title: "People you know",
    text: "Not “buy something”. Just: “This is what I do now. Who do you know who needs more customers?”",
  },
  {
    title: "Value first",
    text: "Pick businesses you’d like to work with. Show them three places where they lose inquiries, for free. Nobody hangs up on free help.",
  },
  {
    title: "Partners",
    text: "Tax advisors, lawyers, consultants. They already have your buyers. You have the solution.",
  },
  {
    title: "Strangers, last",
    text: "By now you have stories, results and confidence. Calling strangers is easy because you’re not guessing anymore.",
  },
];

export function Rings() {
  return (
    <Section
      id="rings"
      eyebrow="While the engine warms up"
      title="Your first clients, without begging strangers."
      lead="An engine takes weeks to months before the first lead comes in. Use that time well: start where people already like you, and move outward."
    >
      <div className="grid items-center gap-12 md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
        <div className="relative mx-auto aspect-square w-full max-w-sm" aria-hidden>
          {[100, 76, 52, 28].map((size, i) => (
            <div
              key={size}
              className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-start justify-center rounded-full border"
              style={{
                width: `${size}%`,
                height: `${size}%`,
                borderColor: "var(--accent)",
                opacity: 0.25 + i * 0.25,
                background: i === 3 ? "var(--accent)" : "transparent",
              }}
            >
              <span
                className={`mt-2 text-xs font-bold ${i === 3 ? "mt-[38%] text-accent-ink" : "text-accent"}`}
              >
                {4 - i}
              </span>
            </div>
          ))}
        </div>
        <ol className="space-y-6">
          {RINGS.map((r, i) => (
            <li key={r.title} className="flex gap-4">
              <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-accent text-sm font-bold text-accent">
                {i + 1}
              </span>
              <div>
                <h3 className="text-lg font-semibold">{r.title}</h3>
                <p className="mt-1 leading-relaxed text-muted">{r.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
