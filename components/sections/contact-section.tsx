"use client";

import { PaperTexture } from "@/components/ui/svg-backgrounds";
import { useTexts, fallbackTexts } from "@/lib/useTexts";

export function ContactSection() {
  const { texts } = useTexts();
  const currentTexts = texts || fallbackTexts;

  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden bg-gradient-to-b from-white via-rose-50 to-amber-50 py-24"
    >
      <PaperTexture opacity={0.1} />
      <div className="mx-auto max-w-4xl px-4">
        <h2 className="text-4xl font-bold text-center text-rose-600 mb-4">
          {currentTexts.contact.title}
        </h2>
        <p className="text-xl text-center text-neutral-600 mb-12">
          Свяжитесь со мной напрямую в удобном мессенджере
        </p>

        {/* Только контакты мессенджеров */}
        <div className="max-w-2xl mx-auto">
          <div className="rounded-3xl bg-white/90 p-8 shadow-2xl ring-1 ring-rose-200 backdrop-blur">
            <h3 className="text-2xl font-bold text-rose-600 mb-2 text-center">
              {currentTexts.contact.directContacts.title}
            </h3>
            <p className="text-lg text-neutral-600 mb-8 font-medium text-center">
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
                    className="flex items-center gap-4 p-6 rounded-xl border border-rose-200 hover:border-rose-400 hover:bg-rose-50 transition-all duration-300 group hover:shadow-lg"
                  >
                    <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                      {contact.icon}
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-neutral-600">
                        {contact.label}
                      </div>
                      <div className="text-xl font-semibold text-neutral-800 group-hover:text-rose-600 transition-colors">
                        {contact.value}
                      </div>
                    </div>
                    <div className="text-rose-400 group-hover:text-rose-600 group-hover:translate-x-1 transition-all duration-300 text-2xl">
                      →
                    </div>
                  </a>
                )
              )}
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-rose-50 to-pink-50 rounded-xl border border-rose-200">
              <p className="text-sm text-rose-700 text-center font-medium">
                💡 Отвечаю быстро в любом удобном для вас мессенджере
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
