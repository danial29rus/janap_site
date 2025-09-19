"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Массив с вашими картинками отзывов
  const reviewImages = [
    {
      id: 1,
      image: "/reviews/Снимок экрана 2025-09-19 в 16.53.58.png",
      alt: "Отзыв клиента"
    },
    {
      id: 2,
      image: "/reviews/Снимок экрана 2025-09-19 в 17.06.57.png",
      alt: "Отзыв клиента"
    },
    {
      id: 3,
      image: "/reviews/Снимок экрана 2025-09-19 в 17.11.04.png",
      alt: "Отзыв клиента"
    },
    {
      id: 4,
      image: "/reviews/Снимок экрана 2025-09-19 в 17.15.43.png",
      alt: "Отзыв клиента"
    },
    {
      id: 5,
      image: "/reviews/Снимок экрана 2025-09-19 в 17.20.49.png",
      alt: "Отзыв клиента"
    },
    {
      id: 6,
      image: "/reviews/Снимок экрана 2025-09-19 в 17.34.10.png",
      alt: "Отзыв клиента"
    },
    {
      id: 7,
      image: "/reviews/Снимок экрана 2025-09-19 в 17.37.16.png",
      alt: "Отзыв клиента"
    },
    {
      id: 8,
      image: "/reviews/Снимок экрана 2025-09-19 в 17.42.19.png",
      alt: "Отзыв клиента"
    }
  ];

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -380, behavior: "smooth" });
      updateScrollButtons();
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 380, behavior: "smooth" });
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

  const openModal = (image: string) => {
    setSelectedImage(image);
    // Блокируем прокрутку страницы при открытии модала
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    // Разблокируем прокрутку страницы при закрытии модала
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      <section id="cases" className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-rose-50 to-white" />
        <AsanohaBackdrop opacity={0.08} />
        <KintsugiVeins />

        <div className="relative mx-auto max-w-7xl px-4 py-20">
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
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm rounded-full p-4 shadow-lg border border-rose-200 hover:bg-white hover:scale-110 transition-all duration-200"
                aria-label="Предыдущие отзывы"
              >
                <svg
                  className="w-6 h-6 text-rose-600"
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
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm rounded-full p-4 shadow-lg border border-rose-200 hover:bg-white hover:scale-110 transition-all duration-200"
                aria-label="Следующие отзывы"
              >
                <svg
                  className="w-6 h-6 text-rose-600"
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
              <div className="flex gap-6 pb-4 px-16">
                {reviewImages.map((review, index) => (
                  <motion.div
                    key={review.id}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="relative group flex-shrink-0 cursor-pointer"
                    style={{ width: "350px" }}
                    onClick={() => openModal(review.image)}
                  >
                    {/* Красивая рамка с градиентом */}
                    <div className="bg-gradient-to-br from-rose-200 via-pink-200 to-rose-300 rounded-2xl p-3 shadow-xl group-hover:shadow-2xl transition-all duration-300">
                      <div className="bg-gradient-to-br from-rose-100 via-pink-100 to-rose-200 rounded-xl p-2">
                        <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                          {/* Изображение отзыва */}
                          <div className="relative">
                            <img
                              src={review.image}
                              alt={review.alt}
                              className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-105"
                              loading="lazy"
                              style={{
                                maxHeight: "600px",
                                objectFit: "contain",
                                objectPosition: "center"
                              }}
                              onError={(e) => {
                                console.log('Ошибка загрузки изображения:', review.image);
                              }}
                            />
                            
                            {/* Оверлей с иконкой увеличения */}
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
                              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 rounded-full p-3">
                                <svg className="w-6 h-6 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Эффект при наведении */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-rose-400/0 via-pink-400/0 to-rose-400/0 group-hover:from-rose-400/5 group-hover:via-pink-400/5 group-hover:to-rose-400/5 transition-all duration-300 pointer-events-none" />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Подсказка о прокрутке */}
            <div className="text-center mt-6">
              <p className="text-sm text-neutral-500">
                ← Прокрутите или используйте кнопки для просмотра всех отзывов →
              </p>
              <p className="text-xs text-neutral-400 mt-1">
                Нажмите на отзыв для увеличения
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Модальное окно для увеличенного просмотра */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Кнопка закрытия */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200"
                aria-label="Закрыть"
              >
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Увеличенное изображение */}
              <div className="p-4">
                <img
                  src={selectedImage}
                  alt="Увеличенный отзыв"
                  className="w-full h-auto object-contain"
                  style={{ maxHeight: "80vh" }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
