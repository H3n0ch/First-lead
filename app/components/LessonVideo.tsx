"use client";

import { useState } from "react";

/** YouTube player that only loads after a click (no data goes to YouTube before that). */
export function LessonVideo({ youtubeId, title }: { youtubeId: string | null; title: string }) {
  const [play, setPlay] = useState(false);

  if (youtubeId && play) {
    return (
      <div className="aspect-video w-full overflow-hidden rounded-2xl bg-navy">
        <iframe
          className="h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0`}
          title={title}
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <div className="relative flex aspect-video w-full flex-col items-center justify-center overflow-hidden rounded-2xl bg-navy text-white">
      <div
        aria-hidden
        className="absolute inset-0 opacity-40"
        style={{ background: "radial-gradient(circle at 30% 20%, var(--accent), transparent 55%)" }}
      />
      {youtubeId ? (
        <>
          <button
            type="button"
            onClick={() => setPlay(true)}
            aria-label={`Play video: ${title}`}
            className="relative flex h-20 w-20 items-center justify-center rounded-full bg-accent shadow-2xl transition hover:scale-105"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden>
              <path d="M8 5v14l11-7z" fill="currentColor" />
            </svg>
          </button>
          <p className="relative mt-4 max-w-sm px-4 text-center text-xs text-white/60">
            Clicking play loads the video from YouTube.
          </p>
        </>
      ) : (
        <>
          <span className="relative flex h-20 w-20 items-center justify-center rounded-full border-2 border-white/30">
            <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden className="opacity-50">
              <path d="M8 5v14l11-7z" fill="currentColor" />
            </svg>
          </span>
          <p className="relative mt-4 text-sm font-bold uppercase tracking-[0.14em]">Video coming soon</p>
          <p className="relative mt-1 text-sm text-white/60">The written lesson is below.</p>
        </>
      )}
    </div>
  );
}
