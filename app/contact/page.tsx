import type { Metadata } from "next";
import { ContactForm } from "../components/ContactForm";
import { PageHero } from "../components/ui";

export const metadata: Metadata = {
  title: "Book a call",
  description: "Tell me who you are and how to reach you. I look at your site before the call.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Book a call"
        title="Let's find your leaks."
        lead="Tell me who you are and how to reach you. I look at your site before the call, so the first conversation is already useful."
      />
      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-xl">
          <ContactForm />
        </div>
      </section>
    </>
  );
}
