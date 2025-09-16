import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";

// Soft pastel theme with subtle animations and personal-brand accents

function Petals() {
  // floating sakura petals animation (subtle, lightweight)
  const petals = Array.from({ length: 10 });
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {petals.map((_, i) => (
        <motion.span
          key={i}
          initial={{ x: Math.random() * 100 + "%", y: -20, opacity: 0.25, rotate: 0 }}
          animate={{
            y: [ -20, 120 ],
            x: [ `${Math.random() * 100}%`, `${Math.random() * 100}%` ],
            rotate: [0, 45, -15, 0],
            opacity: [0.25, 0.45, 0.25],
          }}
          transition={{ duration: 12 + Math.random() * 8, repeat: Infinity, ease: "easeInOut", delay: Math.random() * 4 }}
          className="absolute h-3 w-5 rounded-full bg-gradient-to-br from-rose-200 to-rose-300 blur-[0.3px]"
          style={{ left: `${Math.random() * 100}%` }}
        />
      ))}
    </div>
  );
}

function Carousel({ reviews }) {
  const [index, setIndex] = React.useState(0);
  const total = reviews.length;
  React.useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % total), 5000);
    return () => clearInterval(id);
  }, [total]);
  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);
  return (
    <div className="relative mt-8">
      <div className="overflow-hidden rounded-2xl ring-1 ring-rose-100">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {reviews.map((r) => (
            <div key={r.id} className="min-w-full p-4 sm:p-6">
              <div className="grid items-center gap-6 rounded-2xl bg-white p-4 shadow-lg sm:grid-cols-2">
                <div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-gradient-to-br from-rose-100 to-rose-200">
                  {/* placeholder for visa or trip photo */}
                </div>
                <div>
                  <h3 className="text-base font-semibold text-neutral-900">{r.case}</h3>
                  <p className="mt-2 text-sm text-neutral-700">{r.text}</p>
                  <div className="mt-3 text-sm text-neutral-500">{r.name}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/70 p-2 shadow hover:bg-white">‹</button>
      <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/70 p-2 shadow hover:bg-white">›</button>
      <div className="mt-4 flex justify-center gap-2">
        {Array.from({ length: total }).map((_, i) => (
          <button key={i} onClick={() => setIndex(i)} className={`h-2.5 w-2.5 rounded-full ${i === index ? 'bg-rose-500' : 'bg-rose-300'}`} />)
        )}
      </div>
    </div>
  );
}

export default function App() {
  const [reviews] = useState([
    {
      id: 1,
      name: "Анна П.",
      case: "Туристическая виза - 7 дней",
      text: "Подготовили документы за двое суток, подсказали по маршруту. Паспорт вернулся раньше, чем ожидала.",
    },
    {
      id: 2,
      name: "Игорь С.",
      case: "Бизнес-виза для IT-команды",
      text: "Сделали все удаленно. Удобная проверка пакета документов и оперативная связь в мессенджере.",
    },
    {
      id: 3,
      name: "Семья Орловых",
      case: "Мультивиза на 3 поездки",
      text: "Помогли с анкетами на каждого, объяснили нюансы для детей. Все прошло гладко.",
    },
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

  function scrollToId(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-rose-100 to-orange-50 text-neutral-900">
      {/* Top nav */}
      <header className="sticky top-0 z-40 bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <span className="text-lg font-semibold text-rose-700">JPN Visa</span>
          <nav className="hidden gap-6 md:flex">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollToId(s.id)}
                className="text-sm text-neutral-700 hover:text-rose-700"
              >
                {s.label}
              </button>
            ))}
          </nav>
          <button
            onClick={() => scrollToId("contact")}
            className="hidden rounded-xl bg-rose-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-rose-700 md:block"
          >
            Оформить визу
          </button>
        </div>
      </header>

      {/* Hero - pastel, with floating petals */}
      <section id="hero" className="relative isolate overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-rose-100 via-rose-50 to-white" />
        <Petals />
        <div className="relative z-10 mx-auto max-w-6xl px-4 py-20">
          <motion.div initial={{ y: 24, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs text-rose-700 ring-1 ring-rose-200">
              by Lev - personal brand
            </div>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-neutral-900 md:text-6xl">
              Виза в Японию без стресса
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-neutral-700">
              Личное сопровождение: проверка документов, заполнение анкет и запись в консульство. Все просто и красиво.
            </p>
            <div className="mt-6 flex gap-4">
              <button onClick={() => scrollToId("contact")} className="rounded-xl bg-rose-600 px-6 py-3 text-white shadow hover:bg-rose-700">Оставить заявку</button>
              <button onClick={() => scrollToId("about")} className="rounded-xl border border-rose-300 bg-white/70 px-6 py-3 text-rose-700 backdrop-blur hover:bg-white">Почему со мной</button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About - personal brand focus */}
      <section id="about" className="relative isolate overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-white via-rose-50 to-white" />
        <div className="relative z-10 mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl font-semibold md:text-3xl">Обо мне</h2>
          <div className="mt-8 grid items-center gap-8 md:grid-cols-3">
            <div className="md:col-span-1">
              <div className="aspect-square w-full rounded-2xl bg-gradient-to-br from-rose-200 to-rose-300 ring-1 ring-rose-200 shadow-xl" aria-label="Фото" />
            </div>
            <div className="md:col-span-2">
              <div className="rounded-2xl border border-rose-200 bg-white p-6 shadow">
                <p className="text-sm/6 text-neutral-700">
                  Я - эксперт по визам с опытом более 7 лет. Работала с десятками клиентов: от туристов до бизнесменов. Моя миссия - сделать поездку в Японию доступной и комфортной. Вы получите личное сопровождение, внимание к деталям и честный сервис.
                </p>
                <ul className="mt-4 grid gap-3 sm:grid-cols-3 text-sm">
                  <li className="rounded-xl bg-rose-50 p-3 ring-1 ring-rose-100">1000+ виз оформлено</li>
                  <li className="rounded-xl bg-rose-50 p-3 ring-1 ring-rose-100">Ответ за 15 минут</li>
                  <li className="rounded-xl bg-rose-50 p-3 ring-1 ring-rose-100">Сопровождение до получения паспорта</li>
                </ul>
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <button onClick={() => scrollToId('pricing')} className="rounded-xl bg-rose-600 px-5 py-3 text-sm font-medium text-white hover:bg-rose-700">Посмотреть цены</button>
                  <div className="ml-auto select-none text-right text-sm italic text-neutral-500">Лев, JPN Visa</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing - pastel glass cards */}
      <section id="pricing" className="relative isolate overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-rose-50 via-white to-rose-50" />
        <div className="relative z-10 mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl font-semibold md:text-3xl">Цены</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {title:'Срочная', price:'10 000 ₽', desc:'приоритетная обработка и ближайшее окно'},
              {title:'Обычная', price:'7 000 ₽', desc:'в порядке очереди консульства'},
              {title:'Групповая', price:'По договоренности', desc:'семьи и корпоративные поездки'},
            ].map((p, i) => (
              <motion.div key={i} initial={{ y: 24, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative overflow-hidden rounded-2xl border border-rose-200 bg-white/80 p-6 shadow-lg backdrop-blur transition-transform duration-300 hover:-translate-y-1">
                <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-rose-100 blur-2xl transition-transform duration-300 group-hover:translate-x-4 group-hover:-translate-y-2"/>
                <h3 className="text-lg font-semibold text-neutral-900">{p.title}</h3>
                <p className="mt-2 text-2xl font-bold text-neutral-900">{p.price}</p>
                <p className="mt-1 text-sm text-neutral-600">{p.desc}</p>
                <button onClick={() => scrollToId('contact')} className="mt-5 w-full rounded-xl bg-rose-600 px-4 py-2 text-sm font-medium text-white hover:bg-rose-700">Оставить заявку</button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews carousel with photo placeholders */}
      <section id="cases" className="relative isolate overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-white via-rose-50 to-white" />
        <div className="relative z-10 mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl font-semibold md:text-3xl">Отзывы</h2>
          <Carousel reviews={reviews} />
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-gradient-to-r from-white via-rose-50 to-white py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-center text-rose-700">Контакты</h2>
          <form className="mx-auto mt-10 max-w-2xl space-y-4 rounded-2xl bg-white p-6 shadow-lg ring-1 ring-rose-100">
            <input className="w-full rounded-xl border border-rose-200 p-3" placeholder="Имя" />
            <input className="w-full rounded-xl border border-rose-200 p-3" placeholder="Телефон" />
            <input className="w-full rounded-xl border border-rose-200 p-3" placeholder="Email" />
            <textarea className="w-full rounded-xl border border-rose-200 p-3" placeholder="Комментарий" />
            <button type="submit" className="w-full rounded-xl bg-rose-600 px-5 py-3 text-sm font-medium text-white hover:bg-rose-700">Отправить заявку</button>
          </form>
        </div>
      </section>

      <footer className="border-t border-rose-100 bg-white py-6 text-center text-sm text-neutral-600">© {new Date().getFullYear()} JPN Visa</footer>
    </div>
  );
}
