import Link from "next/link";
import { bookHref, site } from "@/lib/site";

type Item = { href: string; label: string; note?: string };
type Menu = { label: string; href?: string; items?: Item[] };

const MENU: Menu[] = [
  {
    label: "Offers",
    items: [
      { href: "/offers#lead-audit", label: "Lead Audit", note: "Find where your site loses inquiries" },
      { href: "/offers#lead-machine", label: "Lead Machine", note: "The engine, built on your site" },
    ],
  },
  {
    label: "Free training",
    items: [
      { href: "/training", label: "First Lead Course", note: "11 free lessons" },
      { href: "/roadmap", label: "Lead Roadmap", note: "Your custom plan, free" },
      { href: "/leak-check", label: "Lead Leak Check", note: "Your leaks in under a minute" },
      { href: "/engine", label: "The Engine", note: "Nine parts, one job each" },
      { href: "/first-clients", label: "The Four Rings", note: "First clients without cold calls" },
      { href: "/workshop", label: "Lead Workshop", note: "Free, coming soon" },
    ],
  },
  { label: "Book", href: "/book" },
  { label: "Partner with me", href: "/partners" },
  { label: "About", href: "/#about" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40">
      <Link
        href="/book"
        className="flex items-center justify-center gap-2 bg-accent px-5 py-2.5 text-center text-xs font-semibold text-white transition hover:opacity-95 sm:text-sm"
      >
        <span className="rounded-full bg-white px-2 py-0.5 text-[10px] font-extrabold uppercase text-navy">Soon</span>
        <span>
          <span className="font-extrabold">The book First Lead is coming:</span> get it first →
        </span>
      </Link>
      <div className="bg-navy text-white">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
          <Link href="/" className="flex items-center gap-2 text-base font-extrabold uppercase tracking-tight">
            <span aria-hidden className="inline-block h-3 w-3 rotate-45 bg-accent-light" />
            {site.name}
          </Link>

          <nav aria-label="Main" className="hidden items-center gap-1 text-sm font-semibold lg:flex">
            {MENU.map((m) =>
              m.items ? (
                <div key={m.label} className="group relative">
                  <button
                    type="button"
                    aria-haspopup="true"
                    className="flex items-center gap-1 rounded-full px-3 py-2 transition hover:bg-white/10"
                  >
                    {m.label}
                    <svg aria-hidden width="10" height="10" viewBox="0 0 10 10" className="transition group-hover:rotate-180 group-focus-within:rotate-180">
                      <path d="M2 4l3 3 3-3" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                    </svg>
                  </button>
                  <div className="invisible absolute left-0 top-full w-72 pt-2 opacity-0 transition group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                    <ul className="rounded-2xl border border-line bg-surface p-2 text-ink shadow-xl">
                      {m.items.map((it) => (
                        <li key={it.href}>
                          <Link href={it.href} className="block rounded-xl px-4 py-3 transition hover:bg-raised">
                            <span className="block font-bold">{it.label}</span>
                            {it.note && <span className="block text-xs font-normal text-muted">{it.note}</span>}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <Link key={m.label} href={m.href!} className="rounded-full px-3 py-2 transition hover:bg-white/10">
                  {m.label}
                </Link>
              ),
            )}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href={bookHref}
              className="rounded-full bg-accent px-5 py-2 text-sm font-bold text-white transition hover:opacity-90"
            >
              Book a call
            </Link>

            <details className="relative lg:hidden">
              <summary
                aria-label="Menu"
                className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-full border border-white/20 [&::-webkit-details-marker]:hidden"
              >
                <svg aria-hidden width="18" height="18" viewBox="0 0 18 18">
                  <path d="M3 5h12M3 9h12M3 13h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </summary>
              <nav
                aria-label="Mobile"
                className="absolute right-0 top-12 w-[min(20rem,calc(100vw-2.5rem))] rounded-2xl border border-line bg-surface p-3 text-ink shadow-xl"
              >
                {MENU.map((m) => (
                  <div key={m.label} className="py-1">
                    {m.items ? (
                      <>
                        <p className="px-3 pb-1 pt-2 text-xs font-extrabold uppercase tracking-[0.14em] text-accent">
                          {m.label}
                        </p>
                        {m.items.map((it) => (
                          <Link key={it.href} href={it.href} className="block rounded-xl px-3 py-2 font-semibold hover:bg-raised">
                            {it.label}
                          </Link>
                        ))}
                      </>
                    ) : (
                      <Link href={m.href!} className="block rounded-xl px-3 py-2 font-semibold hover:bg-raised">
                        {m.label}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>
            </details>
          </div>
        </div>
      </div>
    </header>
  );
}
