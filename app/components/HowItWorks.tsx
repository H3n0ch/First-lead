import { Section } from "./ui";

const STEPS = [
  {
    title: "Audit",
    text: "We find where your site loses inquiries today, and which part of the engine is the weakest.",
  },
  {
    title: "Build the engine",
    text: "Keywords, pages, a free tool, a short form, an instant reply. One part at a time, weakest first.",
  },
  {
    title: "Run it every week",
    text: "Six numbers, every Monday. Find the one that drops the most, fix it, repeat. That's the whole system.",
  },
];

export function HowItWorks() {
  return (
    <Section id="how" eyebrow="How it works" title="Three steps. Then rinse, repeat.">
      <ol className="grid gap-6 md:grid-cols-3">
        {STEPS.map((s, i) => (
          <li key={s.title} className="border-t-2 border-accent pt-6">
            <p className="font-mono text-sm font-semibold text-accent">0{i + 1}</p>
            <h3 className="mt-2 text-2xl font-semibold">{s.title}</h3>
            <p className="mt-3 leading-relaxed text-muted">{s.text}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
