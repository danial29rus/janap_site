# Используем более стабильный базовый образ
FROM node:18-alpine AS base

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем ВСЕ зависимости (используем npm install вместо npm ci)
RUN npm config set fetch-timeout 60000 && \
    npm config set fetch-retry-mintimeout 20000 && \
    npm config set fetch-retry-maxtimeout 120000 && \
    npm install

# Копируем исходный код
COPY . .

# Собираем статический сайт
RUN npm run build

# Устанавливаем serve глобально для раздачи статических файлов
RUN npm install -g serve

# Экспонируем порт 3045
EXPOSE 3045

# Запускаем статический сервер на порту 3045
CMD ["serve", "-s", "out", "-l", "3045"]
