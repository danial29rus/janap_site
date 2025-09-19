"use client";

export function Footer() {
  return (
    <footer className="border-t border-rose-200 bg-white/90 py-8 text-center text-sm text-neutral-600">
      © {new Date().getFullYear()} JPN Visa
    </footer>
  );
}
