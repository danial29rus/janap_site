"use client";

import { useTexts, fallbackTexts } from "@/lib/useTexts";

interface Section {
  id: string;
  label: string;
}

interface TopNavProps {
  sections: Section[];
  scrollToId: (id: string) => void;
}

export function TopNav({ sections, scrollToId }: TopNavProps) {
  const { texts } = useTexts();
  const currentTexts = texts || fallbackTexts;

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-6xl px-4 pt-4">
        <div className="flex items-center justify-between px-6 py-3 bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg border border-white/20">
          <div className="flex items-center gap-3">
            {/* torii gate tiny mark */}
            <svg width="22" height="22" viewBox="0 0 48 48" aria-hidden>
              <path
                d="M6 12 H42"
                stroke="#e11d48"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <path d="M10 18 H38" stroke="#f43f5e" strokeWidth="3" />
              <path d="M16 18 V40" stroke="#e11d48" strokeWidth="4" />
              <path d="M32 18 V40" stroke="#e11d48" strokeWidth="4" />
            </svg>
            <span className="text-lg font-bold tracking-tight text-rose-600">
              {currentTexts.site.brandName}
            </span>
          </div>
          <nav className="hidden gap-6 md:flex">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollToId(s.id)}
                className="text-sm text-neutral-700 hover:text-rose-600 transition-colors font-medium"
              >
                {s.label}
              </button>
            ))}
          </nav>
          <button
            onClick={() => scrollToId("contact")}
            className="hidden rounded-xl bg-gradient-to-r from-rose-500 to-pink-600 px-5 py-2.5 text-sm font-medium text-white shadow md:block border border-transparent hover:bg-white hover:from-white hover:to-white hover:text-rose-600 hover:border-rose-500 hover:shadow-lg transition-all duration-300 ease-out"
          >
            {currentTexts.navigation.ctaButton}
          </button>
        </div>
      </div>
    </header>
  );
}
