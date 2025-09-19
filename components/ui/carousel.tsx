"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export interface Review {
  id: number;
  name: string;
  case: string;
  text: string;
}

interface CarouselProps {
  reviews: Review[];
}

export function Carousel({ reviews }: CarouselProps) {
  const [index, setIndex] = useState(0);
  const total = reviews.length;

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % total), 6000);
    return () => clearInterval(id);
  }, [total]);

  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  return (
    <div className="relative mt-8">
      <div className="overflow-hidden rounded-3xl ring-1 ring-rose-200/60 shadow-2xl bg-white/80 backdrop-blur">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {reviews.map((r) => (
            <div key={r.id} className="min-w-full p-4 sm:p-6">
              <div className="grid items-center gap-8 rounded-2xl bg-white/90 p-6 shadow-xl ring-1 ring-rose-100 sm:grid-cols-2">
                {/* Fan-shaped image placeholder */}
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl ring-1 ring-rose-200">
                  <svg
                    viewBox="0 0 400 300"
                    className="absolute inset-0 h-full w-full"
                    aria-hidden
                  >
                    <defs>
                      <clipPath
                        id={`fan-${r.id}`}
                        clipPathUnits="objectBoundingBox"
                      >
                        <path d="M0.5,0.1 C0.8,0.1 0.95,0.25 0.98,0.5 C0.95,0.75 0.8,0.9 0.5,0.9 C0.2,0.9 0.05,0.75 0.02,0.5 C0.05,0.25 0.2,0.1 0.5,0.1 Z" />
                      </clipPath>
                    </defs>
                  </svg>
                  <div
                    className="h-full w-full bg-gradient-to-br from-rose-100 to-pink-100"
                    style={{ clipPath: `url(#fan-${r.id})` }}
                  />
                  <div className="absolute bottom-2 right-3 rounded-full bg-white/80 px-2 py-1 text-xs text-rose-600 ring-1 ring-rose-200">
                    visa photo
                  </div>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-neutral-900">
                    {r.case}
                  </h3>
                  <p className="mt-2 text-sm text-neutral-700 leading-relaxed">
                    {r.text}
                  </p>
                  <div className="mt-3 text-sm font-medium text-rose-700">
                    {r.name}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={prev}
        aria-label="Previous"
        className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-3 shadow-lg ring-1 ring-rose-200 hover:bg-white transition-all"
      >
        ‹
      </button>
      <button
        onClick={next}
        aria-label="Next"
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-3 shadow-lg ring-1 ring-rose-200 hover:bg-white transition-all"
      >
        ›
      </button>
      <div className="mt-4 flex justify-center gap-2">
        {Array.from({ length: total }).map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={cn(
              "h-2.5 w-2.5 rounded-full transition-all",
              i === index ? "bg-rose-500 scale-125" : "bg-rose-300"
            )}
          />
        ))}
      </div>
    </div>
  );
}
