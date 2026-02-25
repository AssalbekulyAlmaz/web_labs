Online Store – Angular Lab 5
============================

This is the Web Development **Lab 5** project (Components & Interaction).

It is based on the Lab 4 online store, extended with:

- Category → products hierarchy (4 categories × 5 products)
- `Product` model with `likes` and `categoryId`
- `ProductService` holding all data
- `AppComponent` → `ProductListComponent` → `ProductItemComponent` hierarchy
- Like and Delete interactions via `input()` / `@Input()` and `output()` / `@Output()`

Tech stack
----------

- Angular 17 (standalone components, new control flow)
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

- `src/app/models/product.model.ts` – `Product` interface with `categoryId` and `likes`.
- `src/app/models/category.model.ts` – `Category` interface.
- `src/app/services/product.service.ts` – 4 categories, 20 products, data access.
- `src/app/components/product-item` – single product card, like/delete/share.
- `src/app/components/product-list` – renders list of `ProductItemComponent` via `@for`, handles delete events.
- `src/app/app.component.*` – root layout, category sidebar, passes products to list.

Important
---------

- All `link` fields in `Product` should point to **real** product URLs on `kaspi.kz`.
- Do **not** commit `node_modules/` to Git.

