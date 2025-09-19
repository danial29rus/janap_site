"use client";

import { motion } from "framer-motion";
import { useTexts, fallbackTexts } from "@/lib/useTexts";
import {
  WaveDivider,
  SeigaihaBackdrop,
  KintsugiVeins,
} from "@/components/ui/svg-backgrounds";
import DarkVeil from "@/components/ui/DarkVeil";
import { SakuraBranches } from "@/components/ui/SakuraBranches";

interface HeroSectionProps {
  scrollToId: (id: string) => void;
}

export function HeroSection({ scrollToId }: HeroSectionProps) {
  const { texts } = useTexts();
  const currentTexts = texts || fallbackTexts;

  return (
    <section id="hero" className="relative isolate overflow-hidden">
      {/* Clean background with Japanese patterns and DarkVeil effect */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-pink-50 to-amber-50" />
        <div className="absolute inset-0 opacity-60">
          <DarkVeil
            hueShift={0}
            noiseIntensity={0.08}
            scanlineIntensity={0.15}
            speed={0.8}
            scanlineFrequency={0.8}
            warpAmount={0.3}
            resolutionScale={1.0}
          />
        </div>
        <SeigaihaBackdrop opacity={0.08} />
        <KintsugiVeins />
      </div>

      {/* Sakura Branches with parallax and mouse tracking */}
      <SakuraBranches />

      {/* glass content panel for readability */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 pt-52 pb-24">
        <motion.div
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm text-rose-600 ring-1 ring-rose-200 shadow">
            {currentTexts.hero.badge}
          </div>
          <h1 className="mt-4 text-5xl font-bold tracking-tight text-neutral-900 md:text-7xl">
            {currentTexts.hero.title}
          </h1>
          <p className="mt-6 text-lg md:text-xl text-neutral-700 leading-relaxed">
            {currentTexts.hero.subtitle}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <button
              onClick={() => scrollToId("contact")}
              className="rounded-xl bg-gradient-to-r from-rose-500 to-pink-600 px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base text-white shadow-lg hover:shadow-xl hover:scale-105 hover:from-rose-600 hover:to-pink-700 transition-all duration-300 ease-out"
            >
              {currentTexts.hero.ctaPrimary}
            </button>
            <button
              onClick={() => scrollToId("about")}
              className="rounded-xl border border-rose-300 bg-white/80 px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base text-rose-600 backdrop-blur hover:bg-white hover:border-rose-400 hover:text-rose-700 hover:shadow-lg hover:scale-105 transition-all duration-300 ease-out"
            >
              {currentTexts.hero.ctaSecondary}
            </button>
          </div>
        </motion.div>
      </div>
      <WaveDivider />
    </section>
  );
}
