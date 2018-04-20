# Symfony Test

# Задание
* Необходимо развернуть проект Symfony 4 используя docker (docker-compose) с двумя контейнерами. Один из них для php-fpm и npm, второй для nginx.

* Добавить пару произвольных зависимостей npm (напр.: jquery и selectize) к проекту.
* Описать сборку в gulpfile.js (минификация и склейка в один файл).

* Сделать базовый шаблон используя twig (подключить css/js )
* Реализовать в проекте пару роутов, подключить к ним базовый шаблон.

* Проект залить и оформить на github.

# Установка
* После клонирования репозитория выполнить `git submodule init`
* Подгрузить подмодули репозитория, выполнив `git submodule update`
* Выполнить `cp samples/laradock-env laradock/.env` и настроить **laradock/.env**
* Запустить контейнеры `cd laradock; docker-compose up -d workspace nginx` 
* Войти в контейнер workspace `docker-compose exec --user=laradock workspace bash`
* Выполнить `composer install && npm install`
* Выполнить сборку js/css `gulp`

* По умолчанию проект доступен на **http://localhost**