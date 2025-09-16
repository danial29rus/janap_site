import React, { useMemo, useState, useEffect } from "react";
import { motion } from "framer-motion";

/***************************************
 * Pastel Japan Theme v2 — full‑bleed, legible, motif‑rich
 * - Section backgrounds feature Japanese motifs (seigaiha, asanoha, kintsugi)
 * - Full‑bleed hero with Fuji, rising sun, sakura branch + falling petals
 * - Better contrast via ambient glass panels behind text
 * - Reviews carousel with mask (uchiwa/fan) and soft parallax
 * - Subtle paper texture + wave dividers to connect blocks organically
 * TailwindCSS + Framer Motion
 ***************************************/

/* -------------------- Utilities -------------------- */
const cn = (...cls) => cls.filter(Boolean).join(" ");

/* -------------------- SVG BACKDROPS -------------------- */
function SeigaihaBackdrop({ className = "", opacity = 0.18 }) {
  return (
    <svg className={cn("absolute inset-0 -z-10 h-full w-full", className)} viewBox="0 0 1200 600" aria-hidden>
      <defs>
        <pattern id="seigaiha" x="0" y="0" width="60" height="30" patternUnits="userSpaceOnUse">
          <path d="M0,30 C15,0 45,0 60,30" fill="none" stroke="#cfd8e3" strokeWidth="1.2" />
          <path d="M-30,30 C-15,0 15,0 30,30" fill="none" stroke="#cfd8e3" strokeWidth="1.2" />
          <path d="M30,30 C45,0 75,0 90,30" fill="none" stroke="#cfd8e3" strokeWidth="1.2" />
        </pattern>
      </defs>
      <rect width="1200" height="600" fill="url(#seigaiha)" opacity={opacity} />
    </svg>
  );
}

function AsanohaBackdrop({ className = "", opacity = 0.12 }) {
  return (
    <svg className={cn("absolute inset-0 -z-10 h-full w-full", className)} viewBox="0 0 1200 600" aria-hidden>
      <defs>
        <pattern id="asanoha" width="60" height="60" patternUnits="userSpaceOnUse">
          <g stroke="#e5e7eb" strokeWidth="1">
            <path d="M30 0 L45 15 L30 30 L15 15 Z" fill="none" />
            <path d="M0 30 L15 45 L30 30 L15 15 Z" fill="none" />
            <path d="M30 60 L45 45 L30 30 L15 45 Z" fill="none" />
            <path d="M60 30 L45 45 L30 30 L45 15 Z" fill="none" />
          </g>
        </pattern>
      </defs>
      <rect width="1200" height="600" fill="url(#asanoha)" opacity={opacity} />
    </svg>
  );
}

function PaperTexture({ className = "", opacity = 0.16 }) {
  // subtle handmade-paper look via layered CSS gradients in an SVG foreignObject
  return (
    <svg className={cn("absolute inset-0 -z-10 h-full w-full", className)} aria-hidden>
      <foreignObject x="0" y="0" width="100%" height="100%">
        <div
          xmlns="http://www.w3.org/1999/xhtml"
          style={{
            width: "100%",
            height: "100%",
            backgroundImage:
              `radial-gradient(20px 20px at 10% 15%, rgba(0,0,0,0.035) 0, rgba(0,0,0,0) 60%),
               radial-gradient(18px 18px at 80% 40%, rgba(0,0,0,0.03) 0, rgba(0,0,0,0) 60%),
               radial-gradient(14px 14px at 30% 85%, rgba(0,0,0,0.03) 0, rgba(0,0,0,0) 60%)`,
            opacity,
            mixBlendMode: "multiply",
          }}
        />
      </foreignObject>
    </svg>
  );
}

function KintsugiVeins({ className = "" }) {
  // thin golden lines like kintsugi to add luxury accents
  return (
    <svg className={cn("pointer-events-none absolute inset-0 -z-10 h-full w-full", className)} viewBox="0 0 1200 600" aria-hidden>
      <g stroke="#f4d28e" strokeWidth="1.4" opacity="0.35">
        <path d="M50 540 C200 520 180 420 320 400 C460 380 520 300 640 280 C760 260 860 300 1000 280" fill="none" />
        <path d="M180 60 C260 120 300 160 360 240 C420 320 540 340 620 420" fill="none" />
        <path d="M900 100 C860 180 820 200 780 260 C740 320 720 380 700 420" fill="none" />
      </g>
    </svg>
  );
}

function WaveDivider({ flip = false }) {
  return (
    <svg viewBox="0 0 1200 80" className={cn("w-full", flip ? "rotate-180" : "")}
      preserveAspectRatio="none" aria-hidden>
      <path d="M0 40 C 150 80 300 0 450 40 C600 80 750 0 900 40 C1050 80 1200 0 1200 0 L1200 80 L0 80 Z"
        fill="#fff" opacity="0.9" />
    </svg>
  );
}

/* -------------------- HERO ART -------------------- */
function HeroFujiSakura() {
  return (
    <div className="absolute inset-0 -z-10">
      {/* ambient gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-pink-50 to-amber-50" />
      <SeigaihaBackdrop opacity={0.12} />
      <KintsugiVeins />

      {/* main illustration */}
      <svg viewBox="0 0 1200 600" className="absolute inset-0 h-full w-full" aria-hidden>
        {/* rising sun */}
        <circle cx="920" cy="170" r="110" fill="#fde68a" opacity="0.6" />

        {/* Mount Fuji */}
        <g>
          <path d="M120 470 L420 220 L540 310 L660 200 L1080 480 Z" fill="#c7d2fe" opacity="0.8" />
          <path d="M420 220 L540 310 L660 200" fill="none" stroke="#ffffff" strokeWidth="12" strokeLinejoin="round" />
          <path d="M445 245 L540 310 L615 215" fill="none" stroke="#ffffff" strokeWidth="8" strokeLinejoin="round" />
        </g>

        {/* sakura branch */}
        <g>
          <path d="M160 140 C280 160 360 190 430 235" stroke="#a78bfa" strokeWidth="8" strokeLinecap="round" fill="none" opacity="0.6" />
          {[
            { x: 205, y: 150 },
            { x: 258, y: 165 },
            { x: 312, y: 182 },
            { x: 364, y: 206 },
            { x: 410, y: 226 },
          ].map((p, i) => (
            <g key={i} transform={`translate(${p.x} ${p.y})`} opacity="0.95">
              <circle r="10" fill="#fecdd3" />
              {[0, 72, 144, 216, 288].map((a) => (
                <ellipse key={a} rx="10" ry="18" transform={`rotate(${a})`} fill="#fbcfe8" />
              ))}
              <circle r="4" fill="#be123c" />
            </g>
          ))}
        </g>

        {/* asanoha curtains */}
        <defs>
          <pattern id="asanohaTop" width="60" height="60" patternUnits="userSpaceOnUse">
            <g stroke="#eef2f7" strokeWidth="1">
              <path d="M30 0 L45 15 L30 30 L15 15 Z" fill="none" />
              <path d="M0 30 L15 45 L30 30 L15 15 Z" fill="none" />
              <path d="M30 60 L45 45 L30 30 L15 45 Z" fill="none" />
              <path d="M60 30 L45 45 L30 30 L45 15 Z" fill="none" />
            </g>
          </pattern>
        </defs>
        <rect x="0" y="0" width="420" height="160" fill="url(#asanohaTop)" opacity="0.16" />
        <rect x="780" y="0" width="420" height="160" fill="url(#asanohaTop)" opacity="0.16" />
      </svg>
    </div>
  );
}

/* -------------------- PETALS ANIMATION -------------------- */
function Petals() {
  const petals = useMemo(
    () =>
      Array.from({ length: 24 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 8,
        duration: 12 + Math.random() * 10,
        size: 12 + Math.random() * 12,
      })),
    []
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {petals.map((p) => (
        <motion.span
          key={p.id}
          initial={{ x: `${p.left}%`, y: -40, rotate: 0, opacity: 0 }}
          animate={{
            y: [-40, 620],
            x: [`${p.left}%`, `${p.left + (Math.random() * 20 - 10)}%`],
            rotate: [0, 60, -30, 0],
            opacity: [0, 0.9, 0.9, 0],
            scale: [0.9, 1.1, 0.9],
          }}
          transition={{ duration: p.duration, repeat: Infinity, ease: "easeInOut", delay: p.delay }}
          className="absolute rounded-full shadow-sm"
          style={{
            left: `${p.left}%`,
            width: p.size * 1.2,
            height: p.size,
            background: "linear-gradient(135deg, #ffe4e6, #f9a8d4)",
            filter: "blur(0.2px)",
          }}
        />
      ))}
    </div>
  );
}

/* -------------------- REVIEWS CAROUSEL -------------------- */
function Carousel({ reviews }) {
  const [index, setIndex] = useState(0);
  const total = reviews.length;

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % total), 6000);
    return () => clearInterval(id);
  }, [total]);

  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  return (
    <div className="relative mt-8">
      <div className="overflow-hidden rounded-3xl ring-1 ring-rose-200/60 shadow-2xl bg-white/80 backdrop-blur">
        <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${index * 100}%)` }}>
          {reviews.map((r) => (
            <div key={r.id} className="min-w-full p-4 sm:p-6">
              <div className="grid items-center gap-8 rounded-2xl bg-white/90 p-6 shadow-xl ring-1 ring-rose-100 sm:grid-cols-2">
                {/* Fan-shaped image placeholder */}
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl ring-1 ring-rose-200">
                  <svg viewBox="0 0 400 300" className="absolute inset-0 h-full w-full" aria-hidden>
                    <defs>
                      <clipPath id={`fan-${r.id}`} clipPathUnits="objectBoundingBox">
                        <path d="M0.5,0.1 C0.8,0.1 0.95,0.25 0.98,0.5 C0.95,0.75 0.8,0.9 0.5,0.9 C0.2,0.9 0.05,0.75 0.02,0.5 C0.05,0.25 0.2,0.1 0.5,0.1 Z" />
                      </clipPath>
                    </defs>
                  </svg>
                  <div className="h-full w-full bg-gradient-to-br from-rose-100 to-pink-100" style={{ clipPath: `url(#fan-${r.id})` }} />
                  <div className="absolute bottom-2 right-3 rounded-full bg-white/80 px-2 py-1 text-xs text-rose-600 ring-1 ring-rose-200">visa photo</div>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-neutral-900">{r.case}</h3>
                  <p className="mt-2 text-sm text-neutral-700 leading-relaxed">{r.text}</p>
                  <div className="mt-3 text-sm font-medium text-rose-700">{r.name}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button onClick={prev} aria-label="Previous" className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-3 shadow-lg ring-1 ring-rose-200 hover:bg-white transition-all">‹</button>
      <button onClick={next} aria-label="Next" className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-3 shadow-lg ring-1 ring-rose-200 hover:bg-white transition-all">›</button>
      <div className="mt-4 flex justify-center gap-2">
        {Array.from({ length: total }).map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={cn(
              "h-2.5 w-2.5 rounded-full transition-all",
              i === index ? "bg-rose-500 scale-125" : "bg-rose-300"
            )}
          />
        ))}
      </div>
    </div>
  );
}

/* -------------------- NAV -------------------- */
function TopNav({ sections, scrollToId }) {
  return (
    <header className="sticky top-0 z-40 bg-white/75 backdrop-blur-md shadow">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          {/* torii gate tiny mark */}
          <svg width="22" height="22" viewBox="0 0 48 48" aria-hidden>
            <path d="M6 12 H42" stroke="#e11d48" strokeWidth="4" strokeLinecap="round" />
            <path d="M10 18 H38" stroke="#f43f5e" strokeWidth="3" />
            <path d="M16 18 V40" stroke="#e11d48" strokeWidth="4" />
            <path d="M32 18 V40" stroke="#e11d48" strokeWidth="4" />
          </svg>
          <span className="text-lg font-bold tracking-tight text-rose-600">JPN Visa</span>
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
        <button onClick={() => scrollToId("contact")} className="hidden rounded-xl bg-gradient-to-r from-rose-500 to-pink-600 px-5 py-2.5 text-sm font-medium text-white shadow md:block">
          Оформить визу
        </button>
      </div>
    </header>
  );
}

/* -------------------- APP -------------------- */
export default function App() {
  const [reviews] = useState([
    { id: 1, name: "Анна П.", case: "Туристическая виза - 7 дней", text: "Подготовили документы за двое суток, подсказали по маршруту. Паспорт вернулся раньше, чем ожидала." },
    { id: 2, name: "Игорь С.", case: "Бизнес-виза для IT-команды", text: "Сделали всё удаленно. Удобная проверка пакета документов и оперативная связь в мессенджере." },
    { id: 3, name: "Семья Орловых", case: "Мультивиза на 3 поездки", text: "Помогли с анкетами на каждого, объяснили нюансы для детей. Всё прошло гладко." },
  ]);

  const sections = useMemo(
    () => [
      { id: "hero", label: "Главная" },
      { id: "about", label: "Обо мне" },
      { id: "pricing", label: "Цены" },
      { id: "cases", label: "Отзывы" },
      { id: "contact", label: "Контакты" },
    ],
    []
  );

  const scrollToId = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-rose-50 text-neutral-900">
      <TopNav sections={sections} scrollToId={scrollToId} />

      {/* HERO */}
      <section id="hero" className="relative isolate overflow-hidden">
        <HeroFujiSakura />
        <Petals />
        {/* glass content panel for readability */}
        <div className="relative z-10 mx-auto max-w-6xl px-4 py-24">
          <motion.div initial={{ y: 24, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7 }} className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm text-rose-600 ring-1 ring-rose-200 shadow">
              by Lev - personal brand
            </div>
            <h1 className="mt-4 text-5xl font-bold tracking-tight text-neutral-900 md:text-7xl">
              Виза в Японию без стресса
            </h1>
            <p className="mt-6 text-lg md:text-xl text-neutral-700 leading-relaxed">
              Традиционная эстетика, современный сервис: проверка документов, заполнение анкет и запись в консульство.
            </p>
            <div className="mt-8 flex gap-4">
              <button onClick={() => scrollToId("contact")} className="rounded-xl bg-gradient-to-r from-rose-500 to-pink-600 px-8 py-4 text-white shadow-lg">
                Оставить заявку
              </button>
              <button onClick={() => scrollToId("about")} className="rounded-xl border border-rose-300 bg-white/80 px-8 py-4 text-rose-600 backdrop-blur hover:bg-white">
                Почему со мной
              </button>
            </div>
          </motion.div>
        </div>
        <WaveDivider />
      </section>

      {/* ABOUT */}
      <section id="about" className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white via-rose-50 to-amber-50" />
        <AsanohaBackdrop opacity={0.10} />
        <PaperTexture opacity={0.12} />
        <div className="relative mx-auto max-w-6xl px-4 py-20">
          <h2 className="text-3xl font-bold md:text-4xl text-rose-600 flex items-center gap-3">
            <span className="inline-block h-5 w-1.5 rounded-full bg-rose-400" />
            Обо мне
          </h2>
          <div className="mt-10 grid items-center gap-10 md:grid-cols-3">
            <div className="md:col-span-1">
              <div className="aspect-square w-full rounded-3xl bg-gradient-to-br from-rose-200 via-pink-200 to-rose-300 ring-1 ring-rose-200 shadow-2xl" aria-label="Фото" />
            </div>
            <div className="md:col-span-2">
              <div className="rounded-3xl border border-rose-200 bg-white/90 p-8 shadow-xl backdrop-blur">
                <p className="text-lg leading-relaxed text-neutral-700">
                  Я - эксперт по визам с опытом более 7 лет. Работала с десятками клиентов: от туристов до бизнесменов. Моя миссия - сделать поездку в Японию доступной и комфортной. Вы получите личное сопровождение, внимание к деталям и честный сервис.
                </p>
                <ul className="mt-6 grid gap-4 sm:grid-cols-3 text-sm">
                  <li className="rounded-xl bg-rose-50 p-4 ring-1 ring-rose-200 font-semibold text-rose-700">1000+ виз оформлено</li>
                  <li className="rounded-xl bg-rose-50 p-4 ring-1 ring-rose-200 font-semibold text-rose-700">Ответ за 15 минут</li>
                  <li className="rounded-xl bg-rose-50 p-4 ring-1 ring-rose-200 font-semibold text-rose-700">Сопровождение до получения паспорта</li>
                </ul>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <button onClick={() => scrollToId('pricing')} className="rounded-xl bg-gradient-to-r from-rose-500 to-pink-600 px-6 py-3 text-sm font-semibold text-white shadow">
                    Посмотреть цены
                  </button>
                  <div className="ml-auto select-none text-right text-sm italic text-rose-600 font-semibold">Лев, JPN Visa</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <WaveDivider flip />
      </section>

      {/* PRICING */}
      <section id="pricing" className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-rose-50 via-white to-amber-50" />
        <SeigaihaBackdrop opacity={0.10} />
        <PaperTexture opacity={0.10} />
        <div className="relative mx-auto max-w-6xl px-4 py-20">
          <h2 className="text-3xl font-bold md:text-4xl text-rose-600 flex items-center gap-3">
            <span className="inline-block h-5 w-1.5 rounded-full bg-rose-400" />
            Цены
          </h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {[
              {title:'Срочная', price:'10 000 ₽', desc:'приоритетная обработка и ближайшее окно'},
              {title:'Обычная', price:'7 000 ₽', desc:'в порядке очереди консульства'},
              {title:'Групповая', price:'По договоренности', desc:'семьи и корпоративные поездки'},
            ].map((p, i) => (
              <motion.div key={i} initial={{ y: 24, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-3xl border border-rose-200 bg-white/90 p-8 shadow-xl backdrop-blur hover:-translate-y-1.5 hover:shadow-2xl">
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-rose-200/60 blur-2xl transition-transform group-hover:translate-x-6 group-hover:-translate-y-4"/>
                <h3 className="text-xl font-bold text-neutral-900">{p.title}</h3>
                <p className="mt-3 text-3xl font-bold text-rose-600">{p.price}</p>
                <p className="mt-2 text-sm text-neutral-600">{p.desc}</p>
                <button onClick={() => scrollToId('contact')} className="mt-6 w-full rounded-xl bg-gradient-to-r from-rose-500 to-pink-600 px-4 py-3 text-sm font-semibold text-white shadow">
                  Оставить заявку
                </button>
              </motion.div>
            ))}
          </div>
        </div>
        <WaveDivider />
      </section>

      {/* REVIEWS */}
      <section id="cases" className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-rose-50 to-white" />
        <AsanohaBackdrop opacity={0.08} />
        <KintsugiVeins />
        <div className="relative mx-auto max-w-6xl px-4 py-20">
          <h2 className="text-3xl font-bold md:text-4xl text-rose-600 flex items-center gap-3">
            <span className="inline-block h-5 w-1.5 rounded-full bg-rose-400" />
            Отзывы
          </h2>
          <Carousel reviews={reviews} />
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative isolate overflow-hidden bg-gradient-to-r from-white via-rose-50 to-amber-50 py-24">
        <PaperTexture opacity={0.10} />
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-4xl font-bold text-center text-rose-600">Контакты</h2>
          <form className="mx-auto mt-12 max-w-2xl space-y-6 rounded-3xl bg-white/90 p-8 shadow-2xl ring-1 ring-rose-200 backdrop-blur">
            <input className="w-full rounded-xl border border-rose-200 p-4 focus:border-rose-400 focus:ring-2 focus:ring-rose-200" placeholder="Имя" />
            <input className="w-full rounded-xl border border-rose-200 p-4 focus:border-rose-400 focus:ring-2 focus:ring-rose-200" placeholder="Телефон" />
            <input className="w-full rounded-xl border border-rose-200 p-4 focus:border-rose-400 focus:ring-2 focus:ring-rose-200" placeholder="Email" />
            <textarea className="w-full rounded-xl border border-rose-200 p-4 focus:border-rose-400 focus:ring-2 focus:ring-rose-200" placeholder="Комментарий" />
            <button type="submit" className="w-full rounded-xl bg-gradient-to-r from-rose-500 to-pink-600 px-6 py-4 text-lg font-semibold text-white shadow-lg">
              Отправить заявку
            </button>
          </form>
        </div>
      </section>

      <footer className="border-t border-rose-200 bg-white/90 py-8 text-center text-sm text-neutral-600">© {new Date().getFullYear()} JPN Visa</footer>
    </div>
  );
}
