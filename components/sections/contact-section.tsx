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
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Contact Form */}
          <form className="space-y-6 rounded-3xl bg-white/90 p-8 shadow-2xl ring-1 ring-rose-200 backdrop-blur">
            <h3 className="text-2xl font-bold text-rose-600 mb-6">
              {currentTexts.contact.form.title}
            </h3>
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

          {/* Direct Contacts */}
          <div className="space-y-6">
            <div className="rounded-3xl bg-white/90 p-8 shadow-2xl ring-1 ring-rose-200 backdrop-blur">
              <h3 className="text-2xl font-bold text-rose-600 mb-2">
                {currentTexts.contact.directContacts.title}
              </h3>
              <p className="text-lg text-neutral-600 mb-6 font-medium">
                {currentTexts.contact.directContacts.subtitle}
              </p>

              <div className="space-y-4">
                {currentTexts.contact.directContacts.contacts.map(
                  (contact, index) => (
                    <a
                      key={index}
                      href={contact.link}
                      target={contact.type === "phone" ? "_self" : "_blank"}
                      rel={
                        contact.type !== "phone"
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="flex items-center gap-4 p-4 rounded-xl border border-rose-200 hover:border-rose-400 hover:bg-rose-50 transition-all duration-300 group"
                    >
                      <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
                        {contact.icon}
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-neutral-600">
                          {contact.label}
                        </div>
                        <div className="text-lg font-semibold text-neutral-800 group-hover:text-rose-600 transition-colors">
                          {contact.value}
                        </div>
                      </div>
                      <div className="text-rose-400 group-hover:text-rose-600 group-hover:translate-x-1 transition-all duration-300">
                        →
                      </div>
                    </a>
                  )
                )}
              </div>

              <div className="mt-6 p-4 bg-rose-50 rounded-xl border border-rose-200">
                <p className="text-sm text-rose-700 text-center">
                  💡 Отвечаю быстро в любом удобном для вас мессенджере
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
