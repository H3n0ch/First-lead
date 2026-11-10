import type { Metadata } from "next";
import { site } from "@/lib/site";
import { LegalPage } from "../components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy",
  robots: { index: false },
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy">
      <p>[ROBERT: draft, have this checked before going live.]</p>
      <h2>Who is responsible</h2>
      <p>
        [ROBERT: full name and address], {site.email}. See the imprint for full details.
      </p>
      <h2>What this site collects</h2>
      <p>
        This site sets no tracking or advertising cookies and uses no analytics. The Lead Leak Check runs
        entirely in your browser. Nothing you type there is sent anywhere unless you submit the form below it.
      </p>
      <h2>Videos</h2>
      <p>
        Course videos are hosted on YouTube (Google Ireland Ltd.) and embedded in privacy-enhanced mode. Nothing is
        loaded from YouTube until you click play. After that, YouTube processes data such as your IP address
        under its own privacy policy (Art. 6(1)(a) GDPR, consent by clicking play).
      </p>
      <h2>When you send a form</h2>
      <p>
        If you send a form, I receive your name, your email and/or phone number, your answers to the qualifying
        questions (for example annual revenue, whether you have partners, and how you heard of First Lead), your
        website if you enter it and, for the Lead Leak Check, the numbers you entered. In two-step forms, step 1
        (name and email) is saved even if you don&apos;t finish step 2. I use this only to answer you and to
        prepare our conversation (Art. 6(1)(b) GDPR, steps prior to a contract). For the book list I store only
        your email, to tell you once when the book is out (Art. 6(1)(a) GDPR, consent, which you can withdraw at
        any time).
      </p>
      <h2>How long it is kept</h2>
      <p>
        Until your request is handled and no legal retention period applies, or until you ask me to delete it.
      </p>
      <h2>Hosting</h2>
      <p>
        [ROBERT: hosting provider and where its servers are, e.g. Vercel or Netlify. Server log files (IP
        address, time, page) are processed for security for a short period.]
      </p>
      <h2>Your rights</h2>
      <p>
        You can ask for access, correction, deletion, restriction or transfer of your data, and object to its
        use. Write to {site.email}. You can also complain to a data protection authority.
      </p>
    </LegalPage>
  );
}
