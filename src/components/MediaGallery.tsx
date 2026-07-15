"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";

export type Media = {
  type: "image" | "video";
  src: string;
  poster?: string;
};

export default function MediaGallery({ items, alt }: { items: Media[]; alt: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const touchStartX = useRef<number | null>(null);

  const close = useCallback(() => setOpenIndex(null), []);
  const goNext = useCallback(() => {
    setOpenIndex((i) => (i === null ? null : (i + 1) % items.length));
  }, [items.length]);
  const goPrev = useCallback(() => {
    setOpenIndex((i) => (i === null ? null : (i - 1 + items.length) % items.length));
  }, [items.length]);

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") goNext();
      else if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openIndex, close, goNext, goPrev]);

  function onTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX;
  }

  function onTouchEnd(e: React.TouchEvent) {
    if (touchStartX.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    const threshold = 40;
    if (deltaX > threshold) goPrev();
    else if (deltaX < -threshold) goNext();
  }

  const current = openIndex !== null ? items[openIndex] : null;

  return (
    <>
      <div className="mt-3 flex flex-wrap gap-2">
        {items.map((item, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setOpenIndex(i)}
            className="relative h-14 w-14 shrink-0 cursor-zoom-in overflow-hidden rounded-md border border-neutral-800 transition-opacity hover:opacity-80 sm:h-16 sm:w-16"
            aria-label={`${alt} ${i + 1}`}
          >
            <Image
              src={item.type === "video" ? item.poster ?? item.src : item.src}
              alt={alt}
              fill
              sizes="64px"
              loading="lazy"
              className="object-cover"
            />
            {item.type === "video" && (
              <span className="absolute inset-0 flex items-center justify-center bg-black/20">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-black/60 text-[10px] text-white">
                  ▶
                </span>
              </span>
            )}
          </button>
        ))}
      </div>

      {current && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={close}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <button
            type="button"
            onClick={close}
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-neutral-800 text-neutral-100 hover:bg-neutral-700"
            aria-label="Close"
          >
            ✕
          </button>

          {items.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  goPrev();
                }}
                className="absolute left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-neutral-800/80 text-neutral-100 hover:bg-neutral-700 sm:left-4"
                aria-label="Previous"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  goNext();
                }}
                className="absolute right-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-neutral-800/80 text-neutral-100 hover:bg-neutral-700 sm:right-4"
                aria-label="Next"
              >
                ›
              </button>
              <span className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/60 px-3 py-1 text-xs text-neutral-300">
                {openIndex! + 1} / {items.length}
              </span>
            </>
          )}

          {current.type === "image" ? (
            // eslint-disable-next-line @next/next/no-img-element -- natural intrinsic sizing avoids aspect-ratio lock from next/image's required width/height
            <img
              key={current.src}
              src={current.src}
              alt={alt}
              className="max-h-[85vh] max-w-[90vw] rounded-lg object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          ) : (
            <video
              key={current.src}
              src={current.src}
              controls
              autoPlay
              playsInline
              className="max-h-[85vh] w-auto max-w-[90vw] rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          )}
        </div>
      )}
    </>
  );
}
