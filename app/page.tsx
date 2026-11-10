import { About } from "./components/About";
import { Faq, FAQ } from "./components/Faq";
import { Hero } from "./components/Hero";
import { LeadMagnet } from "./components/LeadMagnet";
import { ProofStrip } from "./components/ProofStrip";
import { StartHere } from "./components/StartHere";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function Home() {
  return (
    <>
      <Hero />
      <ProofStrip />
      <LeadMagnet />
      <StartHere />
      <Faq />
      <About />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
    </>
  );
}
