# TravelTrucks Frontend

## Проєкт

TravelTrucks – це веб-додаток для оренди кемперів, який дозволяє переглядати доступні кемпери, фільтрувати їх за характеристиками, додавати у вибране та бронювати.

## Функціонал

- Головна сторінка з CTA-кнопкою для переходу в каталог.
- Сторінка каталогу з фільтрами, кнопкою "Load More" та можливістю додавання у вибране.
- Сторінка деталей кемпера з відгуками та формою бронювання.
- Управління станом через Redux.

## Використані технології

- **React + Vite** – швидке середовище розробки.
- **React Router** – маршрутизація.
- **Redux Toolkit** – управління станом.
- **Axios** – запити до API.
- **CSS-модулі** – стилізація компонентів.

## Встановлення та запуск

1. Клонування репозиторію:
   ```sh
   git clone https://github.com/your-repo/traveltrucks.git
   cd traveltrucks
   ```
2. Встановлення залежностей:
   ```sh
   npm install
   ```
3. Запуск локального сервера:
   ```sh
   npm run dev
   ```

## API

Дані отримуються з [MockAPI](https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers):

- `GET /campers` – отримання списку кемперів.
- `GET /campers/:id` – отримання деталей кемпера.

## Автор

Розроблено **[VLADYSLAV NOVODATSKYI]**

## Деплой

Проєкт розміщено на [Vercel/Netlify](https://your-deploy-link.com)

---

**TravelTrucks – найкращий вибір для подорожей на кемперах!**
