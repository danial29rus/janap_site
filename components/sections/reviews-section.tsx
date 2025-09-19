"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useTexts, fallbackTexts } from "@/lib/useTexts";
import {
  AsanohaBackdrop,
  KintsugiVeins,
} from "@/components/ui/svg-backgrounds";

export function ReviewsSection() {
  const { texts } = useTexts();
  const currentTexts = texts || fallbackTexts;
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`text-lg ${
          i < rating ? "text-yellow-400" : "text-gray-300"
        }`}
      >
        ⭐
      </span>
    ));
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("ru-RU", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -320, behavior: "smooth" });
      updateScrollButtons();
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 320, behavior: "smooth" });
      updateScrollButtons();
    }
  };

  const updateScrollButtons = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  return (
    <section id="cases" className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-rose-50 to-white" />
      <AsanohaBackdrop opacity={0.08} />
      <KintsugiVeins />

      <div className="relative mx-auto max-w-6xl px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold md:text-4xl text-rose-600 flex items-center justify-center gap-3 mb-4">
            <span className="inline-block h-5 w-1.5 rounded-full bg-rose-400" />
            {currentTexts.feedback.title}
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            {currentTexts.feedback.subtitle}
          </p>
        </motion.div>

        {/* Горизонтальный свайпер с кнопками */}
        <div className="relative">
          {/* Кнопка влево */}
          {canScrollLeft && (
            <button
              onClick={scrollLeft}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg border border-rose-200 hover:bg-white hover:scale-110 transition-all duration-200"
              aria-label="Предыдущие отзывы"
            >
              <svg
                className="w-5 h-5 text-rose-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          )}

          {/* Кнопка вправо */}
          {canScrollRight && (
            <button
              onClick={scrollRight}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg border border-rose-200 hover:bg-white hover:scale-110 transition-all duration-200"
              aria-label="Следующие отзывы"
            >
              <svg
                className="w-5 h-5 text-rose-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          )}

          {/* Скроллируемый контейнер */}
          <div
            ref={scrollRef}
            className="overflow-x-auto overflow-y-hidden scrollbar-hide"
            onScroll={updateScrollButtons}
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <div className="flex gap-6 pb-4 px-12">
              {currentTexts.feedback.items.map((review, index) => (
                <motion.div
                  key={review.id}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-rose-100 hover:shadow-xl transition-all duration-300 flex-shrink-0"
                  style={{ width: "320px" }}
                >
                  {/* Аватар и имя */}
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center text-2xl mr-4">
                      {review.avatar}
                    </div>
                    <div>
                      <h3 className="font-semibold text-neutral-900 text-lg">
                        {review.name}
                      </h3>
                      <p className="text-sm text-rose-600 font-medium">
                        {review.visaType}
                      </p>
                    </div>
                  </div>

                  {/* Рейтинг */}
                  <div className="flex items-center mb-3">
                    {renderStars(review.rating)}
                  </div>

                  {/* Текст отзыва */}
                  <p className="text-neutral-700 leading-relaxed mb-4 text-sm">
                    "{review.text}"
                  </p>

                  {/* Дата */}
                  <div className="text-sm text-neutral-500 border-t border-rose-100 pt-3">
                    {formatDate(review.date)}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Подсказка о прокрутке */}
          <div className="text-center mt-4">
            <p className="text-sm text-neutral-500">
              ← Прокрутите или используйте кнопки для просмотра всех отзывов →
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
