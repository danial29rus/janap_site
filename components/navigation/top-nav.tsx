"use client";

import { useState } from "react";
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMobileNavClick = (id: string) => {
    scrollToId(id);
    setIsMobileMenuOpen(false);
  };

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
          <div className="flex items-center gap-4">
            <button
              onClick={() => scrollToId("contact")}
              className="hidden rounded-xl bg-gradient-to-r from-rose-500 to-pink-600 px-5 py-2.5 text-sm font-medium text-white shadow md:block border border-transparent hover:bg-white hover:from-white hover:to-white hover:text-rose-600 hover:border-rose-500 hover:shadow-lg transition-all duration-300 ease-out"
            >
              {currentTexts.navigation.ctaButton}
            </button>

            {/* Mobile Burger Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden relative w-8 h-8 flex items-center justify-center"
              aria-label="Toggle mobile menu"
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <span
                  className={`block h-0.5 w-full bg-rose-600 transition-all duration-300 ease-in-out ${
                    isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-full bg-rose-600 transition-all duration-300 ease-in-out ${
                    isMobileMenuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-full bg-rose-600 transition-all duration-300 ease-in-out ${
                    isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 z-50 transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Mobile Menu Panel */}
        <div
          className={`absolute top-0 left-0 right-0 bg-white shadow-2xl transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          {/* Header with close button */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-rose-100">
            <div className="flex items-center gap-3">
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
            <button
              onClick={toggleMobileMenu}
              className="relative w-8 h-8 flex items-center justify-center"
              aria-label="Close mobile menu"
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <span className="block h-0.5 w-full bg-rose-600 rotate-45 translate-y-2 transition-all duration-300 ease-in-out" />
                <span className="block h-0.5 w-full bg-rose-600 opacity-0 transition-all duration-300 ease-in-out" />
                <span className="block h-0.5 w-full bg-rose-600 -rotate-45 -translate-y-2 transition-all duration-300 ease-in-out" />
              </div>
            </button>
          </div>

          {/* Navigation Links */}
          <div className="px-6 py-6">
            <nav className="space-y-4 mb-8">
              {sections.map((s) => (
                <button
                  key={s.id}
                  onClick={() => handleMobileNavClick(s.id)}
                  className="block w-full text-left text-lg font-medium text-neutral-700 hover:text-rose-600 transition-colors py-3 border-b border-rose-50 last:border-b-0"
                >
                  {s.label}
                </button>
              ))}
            </nav>

            {/* Direct Contacts */}
            <div className="space-y-4 mb-6">
              <h3 className="text-lg font-bold text-rose-600 mb-4">
                {currentTexts.contact.directContacts.title}
              </h3>
              <div className="space-y-3">
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
                      className="flex items-center gap-3 p-3 rounded-xl border border-rose-200 hover:border-rose-400 hover:bg-rose-50 transition-all duration-300"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <div className="text-xl">{contact.icon}</div>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-neutral-600">
                          {contact.label}
                        </div>
                        <div className="text-base font-semibold text-neutral-800">
                          {contact.value}
                        </div>
                      </div>
                    </a>
                  )
                )}
              </div>
            </div>

            {/* CTA Button */}
            <button
              onClick={() => handleMobileNavClick("contact")}
              className="w-full rounded-xl bg-gradient-to-r from-rose-500 to-pink-600 px-6 py-4 text-base font-semibold text-white shadow-lg hover:shadow-xl hover:from-rose-600 hover:to-pink-700 transition-all duration-300 ease-out"
            >
              {currentTexts.navigation.ctaButton}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
