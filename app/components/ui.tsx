import type { ReactNode } from "react";
import { site } from "@/lib/site";

export const btnPrimary =
  "inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-extrabold uppercase tracking-wide text-white transition hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:opacity-60";

export const btnGhost =
  "inline-flex items-center justify-center gap-2 rounded-full border-2 border-navy px-7 py-3 text-sm font-extrabold uppercase tracking-wide text-ink transition hover:bg-navy hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

export const field =
  "w-full rounded-xl border border-line bg-surface px-4 py-3 text-base text-ink placeholder:text-muted/70 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/25";

export function Section({
  id,
  eyebrow,
  title,
  lead,
  children,
  className = "",
}: {
  id?: string;
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`px-5 py-16 sm:px-8 sm:py-20 ${className}`}>
      <div className="mx-auto max-w-5xl">
        {eyebrow && (
          <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.18em] text-accent">{eyebrow}</p>
        )}
        <h2 className="max-w-3xl text-2xl font-extrabold uppercase leading-[1.1] tracking-tight sm:text-4xl">
          {title}
        </h2>
        {lead && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{lead}</p>}
        {children && <div className="mt-12">{children}</div>}
      </div>
    </section>
  );
}

/** Page title band used at the top of every sub-page. */
export function PageHero({ eyebrow, title, lead }: { eyebrow?: string; title: ReactNode; lead?: ReactNode }) {
  return (
    <section className="bg-band px-5 py-16 text-center sm:px-8 sm:py-20">
      {eyebrow && <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-accent">{eyebrow}</p>}
      <h1 className="mx-auto mt-3 max-w-3xl text-3xl font-extrabold uppercase leading-[1.1] tracking-tight sm:text-4xl">
        {title}
      </h1>
      {lead && <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-ink/75">{lead}</p>}
    </section>
  );
}

export function Avatar({ size = 96 }: { size?: number }) {
  if (site.photo) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={site.photo}
        alt={`${site.owner}, founder of ${site.name}`}
        width={size}
        height={size}
        className="rounded-full object-cover"
        style={{ width: size, height: size }}
      />
    );
  }
  return (
    <div
      role="img"
      aria-label={`${site.owner} (photo coming soon)`}
      className="flex shrink-0 items-center justify-center rounded-full bg-accent-soft font-extrabold text-accent"
      style={{ width: size, height: size, fontSize: size * 0.38 }}
    >
      {site.owner.charAt(0)}
    </div>
  );
}

/**
 * Robert's full-body photo (473×1024), cropped to head-to-hips: scaled up and shifted inside an
 * overflow-hidden box. The parent must set the size and `relative overflow-hidden`; pass the
 * position/width classes that fit the box's aspect ratio.
 */
export function UpperBodyPhoto({ className = "left-[-16%] top-[-26%] w-[135%]" }: { className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/7f62d28f-fc37-4fb7-aa2a-20a195836c2c.webp"
      alt={`${site.owner}, founder of ${site.name}`}
      className={`absolute max-w-none ${className}`}
    />
  );
}

/** Tall photo of Robert, or a placeholder until site.photo is set. */
export function Portrait({ className = "" }: { className?: string }) {
  if (site.photo) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={site.photo}
        alt={`${site.owner}, founder of ${site.name}`}
        className={`rounded-2xl object-cover object-top ${className}`}
      />
    );
  }
  return (
    <div
      role="img"
      aria-label={`${site.owner} (photo coming soon)`}
      className={`flex flex-col items-center justify-center gap-2 rounded-2xl bg-gradient-to-b from-accent-soft to-accent/30 text-accent ${className}`}
    >
      <span className="text-7xl font-extrabold">{site.owner.charAt(0)}</span>
      <span className="text-xs font-bold uppercase tracking-wider">Photo of {site.owner}</span>
    </div>
  );
}
