import type { Metadata } from "next";
import { HowItWorks } from "../components/HowItWorks";
import { Offers } from "../components/Offers";
import { PageHero } from "../components/ui";

export const metadata: Metadata = {
  title: "Offers",
  description: "Lead Audit and Lead Machine: have your lead engine checked, or built on your site.",
};

export default function OffersPage() {
  return (
    <>
      <PageHero
        eyebrow="Work with me"
        title="The how is free. You pay for the doing."
        lead="If you'd rather have the engine checked or built, here's how we work together. You get a fixed price after the first call, before any work starts."
      />
      <Offers />
      <HowItWorks />
    </>
  );
}
