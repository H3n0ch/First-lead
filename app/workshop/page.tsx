import type { Metadata } from "next";
import { LeadCaptureForm } from "../components/LeadCaptureForm";
import { PageHero } from "../components/ui";

export const metadata: Metadata = {
  title: "Free Lead Workshop",
  description: "A free workshop on building a lead engine: get found, get the lead, win the customer. Join the waitlist.",
};

const PARTS = [
  { title: "Get found", text: "Find the words your buyers already type, and build pages that answer them." },
  { title: "Get the lead", text: "Earn trust, give a free result, and make contacting you a fair trade." },
  { title: "Win the customer", text: "Answer in minutes, follow up with something useful, and ask for the deal." },
];

export default function WorkshopPage() {
  return (
    <>
      <PageHero
        eyebrow="Free · coming soon"
        title="The Lead Workshop"
        lead="The whole engine in one session: how to make customers come to you, without ads you can't afford and without cold calls."
      />
      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto grid max-w-4xl gap-12 md:grid-cols-[1.2fr_1fr]">
          <div>
            <h2 className="text-lg font-extrabold uppercase tracking-tight">What you&apos;ll learn</h2>
            <ol className="mt-5 space-y-5">
              {PARTS.map((p, i) => (
                <li key={p.title} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-bold">{p.title}</p>
                    <p className="mt-1 text-muted">{p.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div className="self-start">
            <LeadCaptureForm
              source="workshop"
              title="Save your seat for the free Lead Workshop."
              button="Save my seat"
              done="You're on the list. I'll email you the date as soon as it's set."
            />
          </div>
        </div>
      </section>
    </>
  );
}
