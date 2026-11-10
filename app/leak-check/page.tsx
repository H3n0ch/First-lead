import type { Metadata } from "next";
import { LeakCheck } from "../components/LeakCheck";
import { PageHero } from "../components/ui";

export const metadata: Metadata = {
  title: "Lead Leak Check",
  description: "Free: see in under a minute what your website is likely losing each month, and the three leaks to fix first.",
};

export default function LeakCheckPage() {
  return (
    <>
      <PageHero
        eyebrow="Free tool · under a minute"
        title="Lead Leak Check"
        lead="Six quick numbers about your website. You see right away what you're likely losing each month, and the three leaks to fix first. No email needed."
      />
      <section className="px-5 py-14 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <LeakCheck />
        </div>
      </section>
    </>
  );
}
