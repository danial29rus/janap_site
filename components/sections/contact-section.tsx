"use client";

import { useState } from "react";
import { PaperTexture } from "@/components/ui/svg-backgrounds";
import { useTexts, fallbackTexts } from "@/lib/useTexts";

export function ContactSection() {
  const { texts } = useTexts();
  const currentTexts = texts || fallbackTexts;
  const [selectedVisaType, setSelectedVisaType] = useState(
    currentTexts.contact.form.visaTypes[0]?.value || "single"
  );

  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden bg-gradient-to-b from-white via-rose-50 to-amber-50 py-24"
    >
      <PaperTexture opacity={0.1} />
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-4xl font-bold text-center text-rose-600">
          {currentTexts.contact.title}
        </h2>
        <form className="mx-auto mt-12 max-w-2xl space-y-6 rounded-3xl bg-white/90 p-8 shadow-2xl ring-1 ring-rose-200 backdrop-blur">
          <input
            className="w-full rounded-xl border border-rose-200 p-4 focus:border-rose-400 focus:ring-2 focus:ring-rose-200"
            placeholder={currentTexts.contact.form.nameLabel}
            type="text"
            name="name"
          />
          <input
            className="w-full rounded-xl border border-rose-200 p-4 focus:border-rose-400 focus:ring-2 focus:ring-rose-200"
            placeholder={currentTexts.contact.form.phoneLabel}
            type="tel"
            name="phone"
          />
          <input
            className="w-full rounded-xl border border-rose-200 p-4 focus:border-rose-400 focus:ring-2 focus:ring-rose-200"
            placeholder={currentTexts.contact.form.emailLabel}
            type="email"
            name="email"
          />

          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-2">
              {currentTexts.contact.form.visaTypeLabel}
            </label>
            <select
              className="w-full rounded-xl border border-rose-200 p-4 focus:border-rose-400 focus:ring-2 focus:ring-rose-200 bg-white"
              value={selectedVisaType}
              onChange={(e) => setSelectedVisaType(e.target.value)}
              name="visaType"
            >
              {currentTexts.contact.form.visaTypes.map((visaType) => (
                <option key={visaType.value} value={visaType.value}>
                  {visaType.label}
                </option>
              ))}
            </select>
          </div>

          <textarea
            className="w-full rounded-xl border border-rose-200 p-4 focus:border-rose-400 focus:ring-2 focus:ring-rose-200"
            placeholder={currentTexts.contact.form.commentLabel}
            name="comment"
            rows={4}
          />
          <button
            type="submit"
            className="w-full rounded-xl bg-gradient-to-r from-rose-500 to-pink-600 px-6 py-4 text-lg font-semibold text-white shadow-lg hover:shadow-xl hover:scale-105 hover:from-rose-600 hover:to-pink-700 transition-all duration-300 ease-out"
          >
            {currentTexts.contact.form.submitButton}
          </button>
        </form>
      </div>
    </section>
  );
}
