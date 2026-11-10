import type { ReactNode } from "react";

export function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="px-5 py-16 sm:px-8 sm:py-24">
      <article className="mx-auto max-w-2xl space-y-5 leading-relaxed text-muted [&_h2]:mt-10 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-ink">
        <h1 className="text-4xl font-extrabold uppercase tracking-tight text-ink">{title}</h1>
        {children}
      </article>
    </div>
  );
}
