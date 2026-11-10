import Link from "next/link";
import { bookHref, site } from "@/lib/site";

const COLUMNS = [
  {
    title: "Free training",
    links: [
      { href: "/training", label: "First Lead Course" },
      { href: "/roadmap", label: "Lead Roadmap" },
      { href: "/leak-check", label: "Lead Leak Check" },
      { href: "/engine", label: "The Engine" },
      { href: "/first-clients", label: "The Four Rings" },
      { href: "/workshop", label: "Lead Workshop" },
      { href: "/book", label: "The book" },
    ],
  },
  {
    title: "Offers",
    links: [
      { href: "/offers#lead-audit", label: "Lead Audit" },
      { href: "/offers#lead-machine", label: "Lead Machine" },
      { href: bookHref, label: "Book a call" },
    ],
  },
  {
    title: "First Lead",
    links: [
      { href: "/#about", label: `About ${site.owner}` },
      { href: "/partners", label: "Partner with me" },
      { href: "/contact", label: "Contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-accent px-5 pb-10 pt-14 text-white sm:px-8">
      <div className="mx-auto max-w-5xl">
        <p className="flex items-center gap-2 text-lg font-extrabold uppercase tracking-tight">
          <span aria-hidden className="inline-block h-3 w-3 rotate-45 bg-white" />
          {site.name}
        </p>
        <div className="mt-8 grid grid-cols-2 gap-8 sm:grid-cols-3">
          {COLUMNS.map((c) => (
            <div key={c.title}>
              <p className="text-xs font-extrabold uppercase tracking-[0.14em]">{c.title}</p>
              <ul className="mt-4 space-y-2 text-sm text-white/80">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="hover:text-white hover:underline">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-semibold">
          <Link href="/imprint" className="hover:underline">
            Imprint
          </Link>
          <Link href="/privacy" className="hover:underline">
            Privacy
          </Link>
          <a href={`mailto:${site.email}`} className="hover:underline">
            {site.email}
          </a>
        </div>
        <p className="mt-6 text-center text-xs leading-relaxed text-white/70">
          Results differ for every business. The numbers on this site are my own and are not typical or
          guaranteed. The Lead Leak Check gives an estimate based on stated assumptions, not a promise of revenue.
          No tax, legal or investment advice.
        </p>
      </div>
    </footer>
  );
}
