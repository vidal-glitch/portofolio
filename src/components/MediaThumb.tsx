"use client";

import { useState } from "react";
import Image from "next/image";

export default function MediaThumb({
  type,
  src,
  alt,
}: {
  type: "image" | "video";
  src: string;
  alt: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="relative h-28 w-28 shrink-0 cursor-zoom-in overflow-hidden rounded-lg border border-neutral-800 transition-opacity hover:opacity-80 sm:h-36 sm:w-36"
        aria-label={alt}
      >
        {type === "image" ? (
          <Image src={src} alt={alt} fill sizes="144px" className="object-cover" />
        ) : (
          <video src={src} preload="metadata" className="h-full w-full object-cover" />
        )}
        <span className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors hover:bg-black/20">
          {type === "video" && (
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-white">
              ▶
            </span>
          )}
        </span>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setOpen(false)}
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-neutral-800 text-neutral-100 hover:bg-neutral-700"
            aria-label="Close"
          >
            ✕
          </button>
          {type === "image" ? (
            <Image
              src={src}
              alt={alt}
              width={1600}
              height={1600}
              className="max-h-[85vh] w-auto max-w-[90vw] rounded-lg object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          ) : (
            <video
              src={src}
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
