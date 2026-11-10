import type { Metadata } from "next";
import { ContactForm } from "../components/ContactForm";
import { PageHero } from "../components/ui";

export const metadata: Metadata = {
  title: "The Lead Roadmap",
  description:
    "Send your website and get your personal Lead Roadmap: which parts of the lead engine to fix first, in order. Free.",
};

const YOU_GET = [
  "Where your website loses inquiries today",
  "Which of the 9 engine parts is your weakest",
  "What to fix first, second and third",
  "One quick win you can do this week",
];

export default function RoadmapPage() {
  return (
    <>
      <PageHero
        eyebrow="Free · brand new"
        title="Get your custom Lead Roadmap"
        lead="Send me your website. I go through it part by part, using the same engine that brought free leads to my own site, and send you your roadmap."
      />
      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto grid max-w-4xl gap-12 md:grid-cols-[1fr_1.1fr]">
          <div>
            <h2 className="text-lg font-extrabold uppercase tracking-tight">Your roadmap shows you</h2>
            <ul className="mt-5 space-y-3">
              {YOU_GET.map((t) => (
                <li key={t} className="flex gap-3">
                  <svg aria-hidden width="20" height="20" viewBox="0 0 20 20" className="mt-0.5 shrink-0 text-accent">
                    <path d="M4 10.5l4 4 8-9" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-line bg-surface p-6 shadow-lg sm:p-8">
            <ContactForm source="roadmap" submitLabel="Get my custom lead roadmap" />
          </div>
        </div>
      </section>
    </>
  );
}
