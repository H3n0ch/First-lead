import Link from "next/link";
import { bookHref, site } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-band">
      {/* Depth instead of a flat wall: soft purple glow + faint dot grid. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_80%_at_15%_60%,var(--accent-soft),transparent_70%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-50 [background-image:radial-gradient(var(--line)_1px,transparent_1px)] [background-size:22px_22px] [mask-image:linear-gradient(to_left,black,transparent_60%)]"
      />

      <div className="relative mx-auto grid max-w-6xl items-end gap-4 px-5 sm:px-8 md:grid-cols-[0.85fr_1.15fr]">
        <div className="pt-14 text-center md:pb-24 md:pt-20 md:text-left">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-bold text-accent shadow-sm ring-1 ring-accent/15">
            <span className="h-2 w-2 rounded-full bg-accent" />
            Lead generation for business owners
          </span>
          <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">
            More leads. <span className="text-accent">More customers.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ink/75 md:mx-0">
            Every customer starts as a lead. With a steady flow of leads, you get more clients, more sign-ups, more
            sales. Throughout my career I&apos;ve built lead engines for multiple businesses and
            found them customers worth millions. Now I&apos;ve turned it into a system: I build it for you, or teach you how to do it
            yourself.
          </p>
          {/* The promise in one glance: leads are what turn into customers and revenue. */}
          <ol className="mx-auto mt-7 flex max-w-xl flex-wrap items-center justify-center gap-2 text-sm font-extrabold md:mx-0 md:justify-start">
            {["Leads", "Customers", "Revenue"].map((t, i) => (
              <li key={t} className="flex items-center gap-2">
                {i > 0 && <span aria-hidden className="text-accent">→</span>}
                <span
                  className={`rounded-full px-4 py-1.5 ${i === 0 ? "bg-accent text-white" : "bg-white text-ink ring-1 ring-line"}`}
                >
                  {t}
                </span>
              </li>
            ))}
          </ol>
          <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row sm:justify-center md:justify-start">
            <Link
              href={bookHref}
              className="inline-flex min-w-64 items-center justify-center rounded-full bg-accent px-10 py-4 text-base font-extrabold uppercase tracking-wide text-white shadow-lg shadow-accent/25 transition hover:-translate-y-0.5 hover:opacity-90"
            >
              Talk to Robert
            </Link>
            <Link href="/engine" className="text-sm font-bold text-ink/70 underline-offset-4 hover:text-accent hover:underline">
              See how the engine works →
            </Link>
          </div>
        </div>

        {/* Robert as a sticker standing in front of a purple disc, cut off at the hips by the section edge. */}
        <div className="relative mx-auto h-[26rem] w-full max-w-[380px] self-end sm:h-[34rem] md:order-first">
          <div
            aria-hidden
            className="absolute bottom-[-18%] left-1/2 aspect-square w-[95%] -translate-x-1/2 rounded-full bg-gradient-to-br from-accent-light to-accent"
          />
          {/* Slowly turning dashed ring around the disc. */}
          <svg
            aria-hidden
            viewBox="0 0 100 100"
            className="hero-spin absolute bottom-[-27%] left-1/2 aspect-square w-[112%] -translate-x-1/2 text-accent/40"
          >
            <circle cx="50" cy="50" r="49" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 3" />
          </svg>
          <div className="absolute inset-0 overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/robert-sticker.webp"
              alt={`${site.owner}, founder of ${site.name}`}
              className="absolute left-1/2 top-[20%] w-[78%] max-w-none -translate-x-1/2 rotate-2 drop-shadow-[0_14px_20px_rgba(30,20,60,0.3)]"
            />
          </div>

          {/* Playful handwritten note with a curly arrow pointing at Robert. */}
          <p className="absolute left-0 top-[1%] z-10 -rotate-6 font-hand text-[1.7rem] font-bold leading-[1.05] text-accent sm:text-[2rem]">
            This is Robert.
            <br />
            He had the same problem
            <br />
            and solved it for good.
          </p>
          {/* Short curved arrow from under the note to the left side of Robert's face. */}
          <svg
            aria-hidden
            viewBox="0 0 60 60"
            className="absolute left-[24%] top-[21%] z-10 h-14 w-14 text-accent"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 4 C 4 28, 22 44, 48 46" />
            <path d="M38 37 L 48 46 L 37 54" />
          </svg>

          {/* Illustrative "leads coming in" notifications: pop in one by one, then float. */}
          <Notification className="left-[-10%] top-[83%] rotate-2" delay={0.6} icon="✉️" title="New inquiry" sub="via contact form · just now" live />
          <Notification className="left-[-14%] top-[58%] -rotate-3" delay={1.4} icon="🧮" title="Calculator used" sub="→ asked for a quote" />
          <Notification className="right-0 top-[70%] rotate-1" delay={2.2} icon="🔍" title="New lead" sub="found you on Google" />
        </div>
      </div>
    </section>
  );
}

function Notification({
  className = "",
  delay,
  icon,
  title,
  sub,
  live = false,
}: {
  className?: string;
  delay: number;
  icon: string;
  title: string;
  sub: string;
  live?: boolean;
}) {
  return (
    <div aria-hidden className={`absolute z-20 ${className}`}>
      <div className="hero-pop" style={{ animationDelay: `${delay}s` }}>
        <div
          className="hero-float flex items-center gap-2.5 rounded-2xl bg-white py-2 pl-2 pr-4 shadow-xl shadow-navy/10 ring-1 ring-line"
          style={{ animationDelay: `${delay}s` }}
        >
          <span className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-base">
            {icon}
            {live && (
              <span className="absolute -right-0.5 -top-0.5 flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
              </span>
            )}
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-extrabold text-ink">{title}</span>
            <span className="block text-[11px] font-semibold text-muted">{sub}</span>
          </span>
        </div>
      </div>
    </div>
  );
}
