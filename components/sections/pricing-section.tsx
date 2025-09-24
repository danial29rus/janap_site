"use client";

import { motion } from "framer-motion";
import {
  SeigaihaBackdrop,
  PaperTexture,
  WaveDivider,
} from "@/components/ui/svg-backgrounds";
import { useTexts, fallbackTexts } from "@/lib/useTexts";

interface PricingSectionProps {
  scrollToId: (id: string) => void;
}

export function PricingSection({ scrollToId }: PricingSectionProps) {
  const { texts } = useTexts();
  const currentTexts = texts || fallbackTexts;

  return (
    <section id="pricing" className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-rose-50 to-amber-50" />
      <SeigaihaBackdrop opacity={0.1} />
      <PaperTexture opacity={0.1} />
      <div className="relative mx-auto max-w-6xl px-4 py-20">
        <h2 className="text-3xl font-bold md:text-4xl text-rose-600 flex items-center gap-3">
          <span className="inline-block h-5 w-1.5 rounded-full bg-rose-400" />
          {currentTexts.pricing.title}
        </h2>
        {currentTexts.pricing.subtitle && (
          <div className="mt-6 w-full">
            <div className="rounded-2xl bg-rose-50 border border-rose-200 p-6">
              <p className="text-sm text-rose-700 font-medium leading-relaxed">
                {currentTexts.pricing.subtitle}
              </p>
            </div>
          </div>
        )}
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {currentTexts.pricing.plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ y: 24, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-3xl border border-rose-200 bg-white/90 p-8 shadow-xl backdrop-blur hover:-translate-y-1.5 hover:shadow-2xl flex flex-col"
            >
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-rose-200/60 blur-2xl transition-transform group-hover:translate-x-6 group-hover:-translate-y-4" />

              <div className="flex flex-col h-full">
                <h3 className="text-xl font-bold text-neutral-900 mb-3">
                  {plan.title}
                </h3>

                <p className="text-3xl font-bold text-rose-600 mb-4">
                  {plan.price}
                </p>

                <p className="text-sm text-neutral-600 leading-relaxed mb-4">
                  {plan.description}
                </p>

                {plan.details && (
                  <div className="mb-4">
                    <ul className="space-y-2">
                      {plan.details.map((detail, idx) => (
                        <li
                          key={idx}
                          className="text-xs text-neutral-600 flex items-center gap-2"
                        >
                          <span className="text-rose-500">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {plan.suitableFor && (
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-neutral-700 mb-2">
                      Кому подходит:
                    </p>
                    <ul className="space-y-1">
                      {plan.suitableFor.map((item, idx) => (
                        <li
                          key={idx}
                          className="text-xs text-neutral-600 flex items-center gap-2"
                        >
                          <span className="text-green-500">–</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {plan.note && (
                  <div className="mb-4 p-3 bg-rose-50 rounded-xl border border-rose-200">
                    <p className="text-xs text-rose-700 font-medium">
                      💡 {plan.note}
                    </p>
                  </div>
                )}

                <div className="mt-auto pt-6">
                  <button
                    onClick={() => scrollToId("contact")}
                    className="w-full rounded-xl bg-gradient-to-r from-rose-500 to-pink-600 px-4 py-3 text-sm font-semibold text-white shadow hover:shadow-xl hover:scale-105 hover:from-rose-600 hover:to-pink-700 transition-all duration-300 ease-out"
                  >
                    {currentTexts.pricing.ctaButton}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <WaveDivider />
    </section>
  );
}
