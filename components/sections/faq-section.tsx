"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PaperTexture } from "@/components/ui/svg-backgrounds";

const faqData = [
  {
    id: 1,
    question: "Сколько времени занимает оформление визы?",
    answer:
      "Обычно процесс занимает 5-10 рабочих дней с момента подачи документов в консульство. Срочное оформление возможно за 2-3 дня с доплатой.",
  },
  {
    id: 2,
    question: "Какие документы нужны для туристической визы?",
    answer:
      "Загранпаспорт (действующий не менее 6 месяцев), заполненная анкета, фото 3×4, справка с работы, выписка с банковского счета, бронь отеля и авиабилеты.",
  },
  {
    id: 3,
    question: "Что делать, если в визе откажут?",
    answer:
      "Отказы случаются редко при правильной подготовке документов. В случае отказа мы бесплатно проанализируем причины и поможем подать документы повторно с учетом замечаний.",
  },
];

export function FaqSection() {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const toggleItem = (id: number) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <section
      id="faq"
      className="relative isolate overflow-hidden bg-gradient-to-b from-[#FFFBEB] via-rose-50 to-amber-50 py-24"
    >
      <PaperTexture opacity={0.1} />
      <div className="mx-auto max-w-4xl px-4">
        <h2 className="text-3xl font-bold md:text-4xl text-rose-600 text-center flex items-center justify-center gap-3">
          <span className="inline-block h-5 w-1.5 rounded-full bg-rose-400" />
          Часто задаваемые вопросы
          <span className="inline-block h-5 w-1.5 rounded-full bg-rose-400" />
        </h2>

        <div className="mt-12 space-y-4">
          {faqData.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (item.id - 1) * 0.1 }}
              className="rounded-2xl border border-rose-200 bg-white/90 shadow-lg backdrop-blur overflow-hidden"
            >
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full px-6 py-5 text-left hover:bg-rose-50/50 transition-colors duration-200 flex items-center justify-between"
              >
                <h3 className="text-lg font-semibold text-neutral-900 pr-4">
                  {item.question}
                </h3>
                <motion.div
                  animate={{ rotate: openItem === item.id ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    className="text-rose-500"
                  >
                    <path
                      d="M10 4V16M4 10H16"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </motion.div>
              </button>

              <AnimatePresence>
                {openItem === item.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 pt-2">
                      <div className="h-px bg-rose-200 mb-4" />
                      <p className="text-neutral-700 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
