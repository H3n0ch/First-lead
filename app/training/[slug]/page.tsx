import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LeadCaptureForm } from "../../components/LeadCaptureForm";
import { LessonVideo } from "../../components/LessonVideo";
import { course, lessonIndex, lessons } from "@/lib/course";

export function generateStaticParams() {
  return lessons.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const lesson = lessons[lessonIndex(slug)];
  if (!lesson) return {};
  return { title: `${lesson.title} | ${course.title}`, description: lesson.rule };
}

export default async function LessonPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const i = lessonIndex(slug);
  if (i === -1) notFound();
  const lesson = lessons[i];
  const prev = lessons[i - 1];
  const next = lessons[i + 1];
  const numbered = lessons.length - 1;

  return (
    <>
      {/* Navy title band */}
      <section
        className="px-5 pb-44 pt-14 text-center text-white sm:px-8"
        style={{ background: "linear-gradient(180deg, var(--navy) 0%, #2a1f55 100%)" }}
      >
        <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-accent-light">
          {lesson.label === "Context" ? "Start here" : `Lesson ${lesson.label} of ${numbered}`}
        </p>
        <h1 className="mx-auto mt-3 max-w-4xl text-3xl font-extrabold uppercase leading-tight tracking-tight sm:text-5xl">
          {lesson.title}
        </h1>
        <p className="mt-3 text-sm font-semibold text-white/75">{course.subtitle}</p>
      </section>

      <div className="-mt-36 px-4 pb-20 sm:px-6">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[260px_minmax(0,1fr)_300px]">
          {/* LEFT: course sections */}
          <aside className="order-3 lg:order-1">
            <nav aria-label="Course lessons" className="rounded-2xl border border-line bg-surface p-3 shadow-lg lg:sticky lg:top-32">
              <p className="px-3 pb-3 pt-2 text-[11px] font-extrabold uppercase tracking-[0.16em] text-accent">{course.title}</p>
              <ol className="space-y-0.5">
                {lessons.map((l, j) => {
                  const active = j === i;
                  return (
                    <li key={l.slug}>
                      <Link
                        href={`/training/${l.slug}`}
                        aria-current={active ? "page" : undefined}
                        className={`flex items-center gap-3 rounded-lg border-l-4 px-3 py-2.5 text-sm transition ${
                          active ? "border-accent bg-accent-soft font-bold" : "border-transparent hover:bg-band"
                        }`}
                      >
                        <span
                          className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[11px] font-bold ${
                            active ? "bg-accent text-white" : "bg-band text-muted"
                          }`}
                        >
                          {l.label === "Context" ? "▶" : l.label}
                        </span>
                        <span className="leading-snug">{l.title}</span>
                      </Link>
                    </li>
                  );
                })}
                <li>
                  <Link href="/book" className="flex items-center gap-3 rounded-lg border-l-4 border-transparent px-3 py-2.5 text-sm hover:bg-band">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-band text-[11px] text-muted">★</span>
                    <span>The book</span>
                  </Link>
                </li>
              </ol>
            </nav>
          </aside>

          {/* MIDDLE: video + lesson */}
          <div className="order-1 min-w-0 lg:order-2">
            <div className="overflow-hidden rounded-2xl shadow-2xl">
              <LessonVideo youtubeId={lesson.youtubeId} title={lesson.title} />
            </div>

            <h2 className="mt-6 text-2xl font-extrabold tracking-tight">{lesson.title}</h2>

            <div className="mt-4 flex flex-wrap gap-3 text-sm font-bold">
              <Link
                href={prev ? `/training/${prev.slug}` : "/"}
                className="rounded-lg border-2 border-navy px-5 py-2.5 transition hover:bg-navy hover:text-white"
              >
                ← Back
              </Link>
              <Link
                href={next ? `/training/${next.slug}` : "/roadmap"}
                className="rounded-lg bg-navy px-5 py-2.5 text-white transition hover:opacity-90"
              >
                {next ? `Next: ${next.title} →` : "Get your custom roadmap →"}
              </Link>
            </div>

            <Link
              href="/roadmap"
              className="mt-6 flex items-center justify-center gap-3 rounded-full bg-accent px-6 py-4 text-lg font-extrabold text-white shadow-lg shadow-accent/25 transition hover:opacity-90"
            >
              <svg aria-hidden width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 6l6-3 6 3 6-3v15l-6 3-6-3-6 3z" />
                <path d="M9 3v15M15 6v15" />
              </svg>
              Get your custom Lead Roadmap
            </Link>
            <p className="mt-2 text-center text-xs font-bold">Free</p>

            <Link
              href="/workshop"
              className="mt-4 flex items-center justify-center gap-3 rounded-full bg-accent px-6 py-4 text-lg font-extrabold text-white shadow-lg shadow-accent/25 transition hover:opacity-90"
            >
              <svg aria-hidden width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="5" width="18" height="16" rx="2" />
                <path d="M3 10h18M8 3v4M16 3v4" />
              </svg>
              Check Lead Workshop dates
            </Link>

            {/* Written lesson */}
            <article className="mt-10 space-y-8 rounded-2xl border border-line bg-surface p-6 sm:p-8">
              <div className="border-l-4 border-accent pl-5">
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-accent">The rule</p>
                <p className="mt-2 text-lg font-bold leading-snug">{lesson.rule}</p>
              </div>
              <div>
                <h3 className="text-base font-extrabold uppercase tracking-tight">Steps</h3>
                <ol className="mt-4 space-y-3">
                  {lesson.steps.map((s, k) => (
                    <li key={k} className="flex gap-4">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent-soft text-sm font-bold text-accent">{k + 1}</span>
                      <span className="leading-relaxed">{s}</span>
                    </li>
                  ))}
                </ol>
              </div>
              {lesson.template && (
                <div className="rounded-xl bg-band p-5">
                  <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-accent">Template: {lesson.template.title}</p>
                  <p className="mt-3 leading-relaxed">{lesson.template.text}</p>
                </div>
              )}
              <div>
                <h3 className="text-base font-extrabold uppercase tracking-tight">Mistakes</h3>
                <ul className="mt-4 space-y-2 text-muted">
                  {lesson.mistakes.map((m) => (
                    <li key={m} className="flex gap-3">
                      <span aria-hidden className="font-bold text-[#e5484d]">×</span>
                      {m}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl bg-navy p-5 text-white">
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-accent-light">Action step</p>
                <p className="mt-2 font-bold leading-snug">{lesson.action}</p>
              </div>
            </article>
          </div>

          {/* RIGHT: sign up */}
          <aside className="order-2 lg:order-3">
            <div className="lg:sticky lg:top-32">
              <LeadCaptureForm
                source="course"
                eyebrow="Business owners"
                title="Get every new lesson first, plus the templates."
                done="You're in. Next lesson goes straight to your inbox."
              />
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
