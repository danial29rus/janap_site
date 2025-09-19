"use client";

import { useMemo, useState } from "react";
import { useTexts, fallbackTexts } from "@/lib/useTexts";
import { DynamicSEO } from "@/components/seo/dynamic-seo";
import { TopNav } from "@/components/navigation/top-nav";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { PricingSection } from "@/components/sections/pricing-section";
import { ReviewsSection } from "@/components/sections/reviews-section";
import { ContactSection } from "@/components/sections/contact-section";
import { FaqSection } from "@/components/sections/faq-section";
import { Footer } from "@/components/layout/footer";

/***************************************
 * Pastel Japan Theme v2 — full‑bleed, legible, motif‑rich
 * - Section backgrounds feature Japanese motifs (seigaiha, asanoha, kintsugi)
 * - Full‑bleed hero with Fuji, rising sun, sakura branch + falling petals
 * - Better contrast via ambient glass panels behind text
 * - Reviews carousel with mask (uchiwa/fan) and soft parallax
 * - Subtle paper texture + wave dividers to connect blocks organically
 * Next.js 15 + TailwindCSS + Framer Motion
 ***************************************/

interface Section {
  id: string;
  label: string;
}

export default function Home() {
  const { texts } = useTexts();
  const currentTexts = texts || fallbackTexts;

  const sections = useMemo(
    (): Section[] => [
      { id: "hero", label: currentTexts.navigation.sections.hero },
      { id: "about", label: currentTexts.navigation.sections.about },
      { id: "pricing", label: currentTexts.navigation.sections.pricing },
      { id: "cases", label: currentTexts.navigation.sections.cases },
      { id: "contact", label: currentTexts.navigation.sections.contact },
    ],
    [currentTexts]
  );

  const scrollToId = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <DynamicSEO />
      <div className="min-h-screen bg-rose-50 text-neutral-900">
        <TopNav sections={sections} scrollToId={scrollToId} />
        <HeroSection scrollToId={scrollToId} />
        <AboutSection scrollToId={scrollToId} />
        <PricingSection scrollToId={scrollToId} />
        <ReviewsSection />
        <ContactSection />
        <FaqSection />
        {/* <Footer /> */}
      </div>
    </>
  );
}
