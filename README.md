# JPN Visa - Next.js 15

Сайт для оформления виз в Японию, переписанный на Next.js 15 с App Router.

## Технологии

- **Next.js 15** - React фреймворк с App Router
- **TypeScript** - типизация
- **Tailwind CSS** - стилизация
- **Framer Motion** - анимации
- **React 18** - UI библиотека

## Особенности дизайна

- Японская тематика с традиционными узорами (seigaiha, asanoha, kintsugi)
- Минималистичный чистый дизайн главного баннера
- Карусель отзывов с уникальным дизайном
- Адаптивный дизайн для всех устройств
- Плавная прокрутка и анимации

## Запуск проекта

```bash
# Установка зависимостей
npm install

# Запуск в режиме разработки
npm run dev

# Сборка для продакшена
npm run build

# Запуск продакшен сервера
npm start
```

Откройте [http://localhost:3000](http://localhost:3000) в браузере.

## Структура проекта

```
app/
├── layout.tsx                    # Корневой лэйаут
├── page.tsx                     # Главная страница
└── globals.css                  # Глобальные стили

components/
├── layout/
│   └── footer.tsx              # Футер
├── navigation/
│   └── top-nav.tsx             # Навигация
├── sections/
│   ├── hero-section.tsx        # Главная секция
│   ├── about-section.tsx       # О нас
│   ├── pricing-section.tsx     # Цены
│   ├── reviews-section.tsx     # Отзывы
│   └── contact-section.tsx     # Контакты
└── ui/
    ├── svg-backgrounds.tsx     # SVG фоны (японские узоры)
    └── carousel.tsx           # Карусель отзывов

lib/
└── utils.ts                    # Утилиты

public/
└── favicon.ico                # Иконка сайта
```

## Миграция с Vite

Проект успешно мигрирован с Vite + React на Next.js 15:

- ✅ Полная функциональность сохранена
- ✅ Все анимации и интерактивность работают
- ✅ Адаптивный дизайн
- ✅ SEO оптимизация
- ✅ TypeScript поддержка
- ✅ Современная архитектура App Router

## Развертывание

Проект готов к развертыванию на Vercel, Netlify или любом другом хостинге, поддерживающем Next.js.
