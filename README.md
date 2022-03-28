# methed_cinema - Учебный проект 2021
онлайн-кинотеатр на JS
![Preview](https://github.com/ArtDinWin/methed_cinema/blob/master/img/preview.jpg)
#### Посмотреть тут - https://artdinwin.github.io/methed_cinema/

## Проект выполнил: Топоров Артем

### Функционал веб-приложения:
- Получения информации о фильмах и сериалах (Название, постер, рейтинг, описание с картинкой)
- Вывод трейлера с YouTube
- Поиск фильмов и сериалов по запросу
- Вывод списка трендов. Топ-рейтинг фильмов и сериалов

### Технологии/разработка:
- html
- css
- Основы JS и ES6
- Получение данных через API (открытый источник https://www.themoviedb.org/documentation/api). Технология fetch, async и await. 
- Работа с элементами DOM-дерева
- Работа с объектами и массивами данных


`function removeTask(e) {
if (
e.target.hasAttribute("data-action") &&
e.target.getAttribute("data-action") == "delete"
) {
let taskName = e.target.parentElement.querySelector("div").innerText;
    if (confirm(`Удалить задачу: ${taskName}?`)) {
      e.target.parentNode.remove();
      let indexTask = tasks.findIndex((i) => i == taskName);
      tasks.splice(indexTask, 1);
      resaveStorage(tasks);
    }
}
}`
