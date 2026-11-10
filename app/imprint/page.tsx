import type { Metadata } from "next";
import { site } from "@/lib/site";
import { LegalPage } from "../components/LegalPage";

export const metadata: Metadata = {
  title: "Imprint",
  robots: { index: false },
};

export default function ImprintPage() {
  return (
    <LegalPage title="Imprint">
      <p>Information according to § 5 DDG (Digitale-Dienste-Gesetz).</p>
      <h2>Provider</h2>
      <p>
        [ROBERT: full name]
        <br />
        [ROBERT: business name, if any]
        <br />
        [ROBERT: street and number]
        <br />
        [ROBERT: postcode and city], Germany
      </p>
      <h2>Contact</h2>
      <p>
        Email: {site.email}
        <br />
        Phone: {site.phone}
      </p>
      <h2>VAT ID</h2>
      <p>[ROBERT: VAT ID according to § 27a UStG, if available. Otherwise remove this section.]</p>
      <h2>Responsible for content</h2>
      <p>[ROBERT: full name and address]</p>
    </LegalPage>
  );
}
