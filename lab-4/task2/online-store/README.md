Online Store – Angular Lab 4
============================

This is the Task 2 project for Web Development Lab 4 (Angular).

Tech stack
----------

- Angular 17 (standalone components, routing enabled)
- TypeScript

How to run
----------

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the dev server:

   ```bash
   npm start
   # or: ng serve
   ```

3. Open the app in your browser:

   - `http://localhost:4200`

Project structure (main parts)
------------------------------

- `src/app/models/product.model.ts` – `Product` интерфейсі.
- `src/app/components/product-list` – өнімдер тізімі (`*ngFor`, responsive grid).
- `src/app/components/product-card` – жеке карточка, рейтинг, галерея, Kaspi сілтемесі, WhatsApp/Telegram share.
- `src/app/app.routes.ts` – `/products` маршруты.
- `src/app/app.component.*` – негізгі layout және навигация.

Important
---------

- `Product` моделіндегі `link` өрістерінде қазір демо URL-дар тұр.  
  Тапсыру алдында оларды Kaspi.kz сайтындағы **нақты** тауар сілтемелерімен ауыстыр.
- `node_modules/` қалтасын GitHub-пен бірге жіберме.

