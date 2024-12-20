# 1337Code

leetcode-подобный интерфейс с редактором кода и подсветкой. Сервера нет, используется мок.
Запуск dev версии: 
1. npm install
2. npm run dev

Запуск продакшен:
1. npm install
2. не забыть заменить base в vite.config.ts(он там для github pages)
3. npm build
4. Захостить папку dist

Мок выдаёт ошибку при любом значении, отличном от заданных в коде(Они так же написаны на сайте)
JS/TS: console.log("Hello, World!")
Python: print("Hello, World!")
