# Landing Page (Vite + SCSS + BEM)

## Запуск проекта

1. Установите зависимости:
   ```sh
   npm install
   ```
2. Запустите проект:
   ```sh
   npm run dev
   ```

## Стек технологий
- HTML5 (семантическая разметка)
- SCSS (Sass) с переменными и структурой по БЭМ
- Vite (сборщик)
- SVG-графика (в том числе swoosh-элементы)
- BEM-методология
- Адаптивность (опционально)

## Структура SCSS
- Каждый блок — отдельный файл в `src/scss/blocks/`
- Общие переменные — в `src/scss/_variables.scss`
- Импортируйте все SCSS-файлы в `src/scss/main.scss`

## Пример структуры
```
src/
  scss/
    blocks/
      header.scss
      profile.scss
      ...
    _variables.scss
    main.scss
  assets/
    svg/
      swoosh-top.svg
      ...
  index.html
```

## Пример vite.config.js
```js
import { defineConfig } from 'vite';
export default defineConfig({
  css: { preprocessorOptions: { scss: { additionalData: `@import './src/scss/_variables.scss';` } } }
});
```

## Примечания
- Используйте комментарии в коде для пояснений.
- Все стили — через SCSS и БЭМ.
- SVG можно вставлять как inline или через `<img>`.
