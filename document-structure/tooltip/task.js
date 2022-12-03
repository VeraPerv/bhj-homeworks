const toolTips = [...document.querySelectorAll('.has-tooltip')]; //все ссылки
console.log(toolTips);
//клик на каждую ссылку
toolTips.forEach((element) => {

    element.addEventListener('click', function (event) {
        //debugger; 
        event.preventDefault();
        //добавление div по клику     
        let forText = document.querySelector('div.tooltip');
        if (forText) {
            forText.remove();
        }
        element.insertAdjacentHTML('afterEnd', '<div class="tooltip" style= "left: event.clientX; top: event.clientY"> Проверка! </div> ');
        forText = document.querySelector('div.tooltip');
        forText.textContent = element.title;
        forText.classList.add('tooltip_active');

    });
});

/* Необходимо написать всплывающую подсказку для элементов. Подсказка появляется после клика на элементе.


Исходные данные
Основная HTML-разметка
Базовая CSS-разметка
Базовая разметка элемента, который нуждается в подсказке:

<a href="" class="has-tooltip" title="Что бы вы хотели?">Помогите пожалуйста</a>

Шаблон подсказки выглядит так:
<div class="tooltip">Текст подсказки</div>
Данные для текста подсказки берутся из атрибута title

Подсказки активируются классом tooltip_active

Процесс реализации
Реализуйте появление подсказки на основе положения текста
Показывайте подсказку при клике на элемент.
Повышенный уровень сложности #1 (не обязательно)
В один момент времени должна показываться только одна подсказка

Повышенный уровень сложности #2 (не обязательно)
Добавьте подсказке дополнительный атрибут data-position для настройки места появления подсказки:

top - над текстом
left - слева от текста
right - справа от текста
bottom - снизу от текста*/