## Тестовое задание на вакансию стажера в BIOCAD.

### Реализованный функционал:

 - Стек: node.js, javascript, css, html, sqlite.
 - Страница home.html, на которой выводится краткая информация о приборах (https://biotech-task.netlify.app/home.html)
 - На странице home.html имеется строка поиска для фильтра приборов по названию.
 - Страница analytics.html (принимает аргумент - id прибора), на которой отображается подробная информация о приборе (https://biotech-task.netlify.app/analytics.html?id=3).
 - На странице analytics.html имеется возможность отфильтровать данные по дате.
 - Сервер на node.js служит в качестве rest api. Информация о приборах хранится в sqlite базе данных в двух таблицах: Tools (id, title, pic, isTaken, notifType, code, serial_number) и Usage (id, start_date, usage, result, username, type).

### Запуск на своем сервере:

 - Необходимо скачать проект.
 - Перейти в папку `server` и прописать команду `npm start`.
 - Готово. Открыть файл `home.html` в папке `client`
