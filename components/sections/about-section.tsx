"use client";

import {
  AsanohaBackdrop,
  PaperTexture,
  WaveDivider,
} from "@/components/ui/svg-backgrounds";
import { useTexts, fallbackTexts } from "@/lib/useTexts";

interface AboutSectionProps {
  scrollToId: (id: string) => void;
}

export function AboutSection({ scrollToId }: AboutSectionProps) {
  const { texts } = useTexts();
  const currentTexts = texts || fallbackTexts;

  return (
    <section id="about" className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-rose-50 to-[#EEDEDB]" />
      <AsanohaBackdrop opacity={0.1} />
      <PaperTexture opacity={0.12} />
      <div className="relative mx-auto max-w-6xl px-4 py-20">
        <h2 className="text-3xl font-bold md:text-4xl text-rose-600 flex items-center gap-3">
          <span className="inline-block h-5 w-1.5 rounded-full bg-rose-400" />
          {currentTexts.about.title}
        </h2>
        <div className="mt-10 grid items-start gap-10 md:grid-cols-3">
          <div className="md:col-span-1">
            <div
              className="aspect-square w-full rounded-3xl bg-gradient-to-br from-rose-200 via-pink-200 to-rose-300 ring-1 ring-rose-200 shadow-2xl"
              aria-label="Фото"
            />
          </div>
          <div className="md:col-span-2">
            <div className="rounded-3xl border border-rose-200 bg-white/90 p-8 shadow-xl backdrop-blur">
              <div className="space-y-4 text-lg leading-relaxed text-neutral-700">
                <p>
                  <strong>Привет! Меня зовут Ирина Миронова</strong> и да, я не
                  представляю своей жизни без Японии.
                </p>
                <p>
                  Именно из этой любви родилось моё дело — помогать другим людям
                  получить визу в Японию легко, понятно, без нервов и огромных
                  очередей в посольство.
                </p>
                <p>
                  За последний год я оформила более <strong>200 виз</strong> для
                  туристов, семей, бизнесменов, студентов и школьников.
                </p>
                <p>
                  Многие из них едут в Японию впервые и для меня это всегда
                  личная история. Ведь это первое прикосновение к стране,
                  которая может изменить вас навсегда.
                </p>
                <p>
                  Я работаю <strong>напрямую, без посредников</strong> и это
                  значит, что каждый документ проходит через мои руки.
                </p>
                <p>
                  Я тщательно проверяю всё до мельчайших деталей, чтобы у вас не
                  было шансов на отказ.
                </p>
                <p>
                  Для меня вы — не просто "одна заявка из множества", а
                  отдельный человек, с планами, мечтами и тревогами. И я делаю
                  всё, чтобы эта мечта сбылась.
                </p>
              </div>

              <ul className="mt-8 grid gap-4 sm:grid-cols-2 text-sm">
                <li className="rounded-xl bg-rose-50 p-4 ring-1 ring-rose-200 font-semibold text-rose-700 flex items-start gap-3">
                  <span className="text-rose-500">✓</span>
                  <span>
                    <strong>Официально и легально:</strong> с учётом всех
                    требований консульства
                  </span>
                </li>
                <li className="rounded-xl bg-rose-50 p-4 ring-1 ring-rose-200 font-semibold text-rose-700 flex items-start gap-3">
                  <span className="text-rose-500">✓</span>
                  <span>
                    <strong>Без лишней бюрократии:</strong> только то, что нужно
                  </span>
                </li>
                <li className="rounded-xl bg-rose-50 p-4 ring-1 ring-rose-200 font-semibold text-rose-700 flex items-start gap-3">
                  <span className="text-rose-500">✓</span>
                  <span>
                    <strong>Гарантия внимания:</strong> на связи от начала до
                    конца
                  </span>
                </li>
                <li className="rounded-xl bg-rose-50 p-4 ring-1 ring-rose-200 font-semibold text-rose-700 flex items-start gap-3">
                  <span className="text-rose-500">✓</span>
                  <span>
                    <strong>99,9% успеха:</strong> если следовать моим
                    инструкциям, визу вы обязательно получите
                  </span>
                </li>
              </ul>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => scrollToId("pricing")}
                  className="rounded-xl bg-gradient-to-r from-rose-500 to-pink-600 px-6 py-3 text-sm font-semibold text-white shadow hover:shadow-xl hover:scale-105 hover:from-rose-600 hover:to-pink-700 transition-all duration-300 ease-out"
                >
                  Посмотреть цены
                </button>
                <div className="ml-auto select-none text-right text-sm italic text-rose-600 font-semibold">
                  Ирина Миронова, JPN Visa
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <WaveDivider />
    </section>
  );
}
