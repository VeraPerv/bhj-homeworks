const value = document.querySelector('.dropdown__value'); //внутри текст яваскрипт

const list = document.querySelector('.dropdown__list'); //ul

const listItem = Array.from(document.querySelectorAll('.dropdown__item')); // li


value.addEventListener('click', function (event) {

    list.classList.toggle('dropdown__list_active');
    for (let i = 0; i < listItem.length; i++) {
        event.preventDefault();
        list.classList.toggle('dropdown__list_active');
    }

});

listItem[1].addEventListener('click', function (event) {
    event.preventDefault();
    value.textContent = listItem[1].textContent;
    list.classList.toggle('dropdown__list_active');
});

listItem[2].addEventListener('click', function (event) {
    event.preventDefault();
    value.textContent = listItem[2].textContent;
    list.classList.toggle('dropdown__list_active');
});

listItem[3].addEventListener('click', function (event) {
    event.preventDefault();
    value.textContent = listItem[3].textContent;
    list.classList.toggle('dropdown__list_active');
});

/*this.textContent = this.textContent === 'Подробнее' ? 'Скрыть' : 'Подробнее'; */

/*Сделайте сворачивание/разворачивание списка по нажатию на кнопку
Сделайте замену значения по выбору соответствующего пункта меню
Предусмотрите случай, когда на странице может одновременно находиться несколько таких кнопок
Не забывайте запрещать переход по ссылке */
/*В элементе с классом *dropdown__value* содержится выбранное значение.

Для того, чтобы открыть меню, требуется проставить класс *dropdown__list_active*:

```html
<ul class="dropdown__list dropdown__list_active"></ul>
```

Нажатие на элемент с классом *dropdown__item* при открытом списке должно:
1. Закрывать список
2. Устанавливать новое значение в элемент с классом *dropdown__value*

### Процесс реализации

1. Сделайте сворачивание/разворачивание списка по нажатию на кнопку
2. Сделайте замену значения по выбору соответствующего пункта меню
3. Предусмотрите случай, когда на странице может одновременно находиться несколько
таких кнопок
4. Не забывайте запрещать переход по ссылке 

## Подсказки (спойлеры)

<details>
<summary>Используемые темы</summary>

1. Событие *click*, метод *addEventListener*, обработчик события
2. Свойство *textContent*
3. Метод Array.from() или оператор распространения (spread, «...») для удобной
   навигации по найденным элементам
4. Метод *closest*
   
</details> */