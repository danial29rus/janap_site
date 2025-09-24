"use client";

import { motion } from "framer-motion";
import {
  AsanohaBackdrop,
  PaperTexture,
  WaveDivider,
} from "@/components/ui/svg-backgrounds";

export function ProcessSection() {
  const includedServices = [
    {
      icon: "📋",
      title: "Подача документов в посольство",
      description: "Подача документов в посольство и получение паспорта с готовой визой без личного присутствия"
    },
    {
      icon: "📝",
      title: "Формирование визовой анкеты",
      description: "Профессиональное заполнение всех документов с учетом требований консульства"
    },
    {
      icon: "🗺️",
      title: "Подготовка маршрутного листа",
      description: "Составление детального маршрута поездки для консульства"
    },
    {
      icon: "📄",
      title: "Исчерпывающий список документов",
      description: "Формирование полного списка документов к сбору, подготовка мотивационного письма на мультивизу"
    },
    {
      icon: "✈️",
      title: "Оформление броней авиабилетов",
      description: "Если опасаетесь покупать их заранее — поможем с бронированием"
    }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Связываетесь со мной",
      description: "Вы пишете мне в WhatsApp / Telegram",
      icon: "💬"
    },
    {
      step: "2", 
      title: "Определяем детали",
      description: "Я уточняю ваш маршрут и выбираем тип визы",
      icon: "🎯"
    },
    {
      step: "3",
      title: "Собираете документы",
      description: "Вы собираете и присылаете необходимые документы",
      icon: "📎"
    },
    {
      step: "4",
      title: "Проверка и заполнение",
      description: "Я всё проверяю и заполняю анкеты",
      icon: "✅"
    },
    {
      step: "5",
      title: "Подача в посольство",
      description: "Подаю паспорта на визу в японское посольство в Москве",
      icon: "🏛️"
    },
    {
      step: "6",
      title: "Получение визы",
      description: "Через 5-7 дней вы получаете паспорт с визой и спокойно готовитесь к путешествию",
      icon: "🎉"
    }
  ];

  return (
    <section id="process" className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-rose-50 via-white to-rose-50" />
      <AsanohaBackdrop opacity={0.08} />
      <PaperTexture opacity={0.1} />
      
      <div className="relative mx-auto max-w-6xl px-4 py-20">
        {/* Что входит в стоимость */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold md:text-4xl text-rose-600 flex items-center gap-3 mb-12">
            <span className="inline-block h-5 w-1.5 rounded-full bg-rose-400" />
            В стоимость входит
          </h2>
          
          {/* Улучшенная сетка с фиксированными размерами */}
          <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {includedServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/90 rounded-2xl p-4 sm:p-6 shadow-lg border border-rose-100 transition-shadow duration-300 backdrop-blur min-h-[180px] sm:min-h-[200px]"
                style={{ willChange: "transform, opacity" }}
              >
                <div className="text-2xl sm:text-3xl mb-3">{service.icon}</div>
                <h3 className="font-semibold text-base sm:text-lg text-neutral-900 mb-2 leading-tight">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Важное примечание */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8 p-4 sm:p-6 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl border border-amber-200"
          >
            <div className="flex items-start gap-3">
              <span className="text-xl sm:text-2xl flex-shrink-0">💡</span>
              <div>
                <h4 className="font-semibold text-amber-800 mb-2 text-sm sm:text-base">Важно знать</h4>
                <p className="text-amber-700 text-xs sm:text-sm leading-relaxed">
                  Список документов не публикуется на сайте, так как постоянно есть новые нюансы. 
                  Актуальный список будет отправлен вам лично после консультации.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Как проходит процесс */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold md:text-4xl text-rose-600 flex items-center gap-3 mb-12">
            <span className="inline-block h-5 w-1.5 rounded-full bg-rose-400" />
            Как проходит процесс
          </h2>

          <div className="space-y-4 sm:space-y-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start gap-4 sm:gap-6 bg-white/90 rounded-2xl p-4 sm:p-6 shadow-lg border border-rose-100 transition-shadow duration-300 backdrop-blur"
                style={{ willChange: "transform, opacity" }}
              >
                {/* Номер шага */}
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-rose-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-lg shadow-lg">
                  {step.step}
                </div>
                
                {/* Иконка */}
                <div className="flex-shrink-0 text-2xl sm:text-3xl">
                  {step.icon}
                </div>
                
                {/* Контент */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-lg sm:text-xl text-neutral-900 mb-2 leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Призыв к действию */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12 text-center p-6 sm:p-8 bg-gradient-to-r from-rose-100 to-pink-100 rounded-2xl border border-rose-200"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-rose-700 mb-4">
              Готовы начать?
            </h3>
            <p className="text-rose-600 mb-6 text-base sm:text-lg">
              Весь процесс займет всего 5-7 дней!
            </p>
            <a
              href="#contact"
              className="inline-block rounded-xl bg-gradient-to-r from-rose-500 to-pink-600 px-6 sm:px-8 py-3 sm:py-4 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 hover:from-rose-600 hover:to-pink-700 transition-all duration-300 text-sm sm:text-base"
            >
              Написать в мессенджер
            </a>
          </motion.div>
        </motion.div>
      </div>
      
      <WaveDivider />
    </section>
  );
}
