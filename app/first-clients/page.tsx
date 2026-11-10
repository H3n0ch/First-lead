import type { Metadata } from "next";
import { Rings } from "../components/Rings";
import { PageHero } from "../components/ui";

export const metadata: Metadata = {
  title: "Your first clients, no cold calls",
  description: "The four rings: people you know, value first, partners, strangers last. Get your first clients while your engine warms up.",
};

export default function FirstClientsPage() {
  return (
    <>
      <PageHero
        eyebrow="Free training"
        title="Your first clients. No cold calls."
        lead="An engine takes weeks to months before the first lead comes in. Use that time well: start where people already like you, and move outward."
      />
      <Rings />
      <section className="px-5 pb-20 sm:px-8">
        <div className="mx-auto max-w-3xl rounded-2xl bg-band p-7 sm:p-9">
          <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-accent">Template: the value-first message</p>
          <p className="mt-4 text-lg leading-relaxed">
            Hi [name], I looked at [company]&apos;s website and noticed three places where you probably lose inquiries:
            [1], [2], [3]. Happy to show you how to fix them in 15 minutes, no strings. [Your name]
          </p>
          <p className="mt-6 font-bold">
            Action step: write down 20 people you know and 10 businesses you&apos;d like to help. Send the first five
            messages today.
          </p>
        </div>
      </section>
    </>
  );
}
