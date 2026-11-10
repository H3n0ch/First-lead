import { Section, btnPrimary } from "./ui";

const WHO = ["Tax advisors", "Lawyers", "Business consultants", "Web designers and agencies"];

export function Partners() {
  return (
    <Section
      id="partners"
      eyebrow="Partner with me"
      title="You have the clients. I have the engine."
      lead="Your clients ask you how to get more customers. Send them to me: they get a working lead engine, and you get to be the person who solved it."
    >
      <div className="grid items-center gap-8 rounded-3xl border border-line bg-surface p-7 sm:p-9 md:grid-cols-[1fr_auto]">
        <ul className="flex flex-wrap gap-3">
          {WHO.map((w) => (
            <li key={w} className="rounded-full bg-accent-soft px-4 py-2 font-semibold text-accent">
              {w}
            </li>
          ))}
        </ul>
        <a href="/contact" className={btnPrimary}>
          Talk about a partnership
        </a>
      </div>
    </Section>
  );
}
