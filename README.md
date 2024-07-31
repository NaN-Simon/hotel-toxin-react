## Info

**Name**: Hotel-Toxin-React

**Demo**: [Hotel-Toxin-React](https://nan-simon.github.io/hotel-toxin-react/)

**Build**: React, Typescript

**Render type**: Client-Side Rendering

## Installation:

**Install all dependencies**: `npm install`

**For real-time development**: `npm run start` and open [http://localhost:3000](http://localhost:3000)

**Get app**: `npm run dev`

**Get minimized app**: `npm run build`

## Plugins:

[rc-slider](https://www.npmjs.com/package/rc-slider) - слайдер

[react-datepicker](https://www.npmjs.com/package/react-datepicker) - календарь

[react-input-mask](https://www.npmjs.com/package/@react-input/maskr) - маска для номера телефона

[react-paginate](https://www.npmjs.com/package/react-paginate) - переключение страниц

[react-responsive-carousel](https://www.npmjs.com/package/react-responsive-carousel) - переключение изображений


## Description

**Фреймворк**. В качестве основы используется JavaScript библиотека `React`. Каждая страница связана роутингом плагина `react-router-dom` (6-версии) через Link;

**Typescript** Страницы в папке *src/pages*. Все пропсы лежат внутри tsx страниц ввиду отсутствия сервера;

**Библиотека компонентов** Библиотеки не используются, так как цель работы - показать умения работать без использования сторонних пользовательских интерфейсов. Используется только библиотека иконок(плагин `material-icons`);

На проекте используется `eslint` и `stylelint`. Основными пакетными настройками являются: *plugin:react/recommended*, *airbnb*. Настроено автоисправление возможных ошибок;

Папка *src/styles* содержит базовые стили для всего проекта, стили обнуления, файл со шрифтами и миксины плагина `SASS/SCSS`. Вся остальные style-компоненты вынесены в отдельные файлы **.module.css* , данный паттерн используется во всем проекте. Для комфортного объединения className используется плагин `classnames`;

Папка *src/components* содержит все компоненты и карточки (*src/components/Card**) с компонентами.

*src/assets* папка содержит файлы проекта(иконки которых нет в библиотеке `material-icons`, *img*, *fonts*);

Установлен плагин `gh-pages` для комфортного деплоя;