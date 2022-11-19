const revealedElement = Array.from(document.querySelectorAll('.reveal'));

revealedElement.forEach((el) => {

    window.addEventListener('scroll', function () {

        const {
            top,
            bottom
        } = el.getBoundingClientRect();

        if (bottom < 0 || top > window.innerHeight) {
            return false;
        } else {
            el.classList.add('reveal_active');
        }
    });
});



/* Процесс реализации
Отслеживайте изменение прокрутки окна
При изменении прокрутки, получите информацию о конкретном положении элемента с классом reveal.
При нахождении элемента в поле зрения, присвойте этому элементу класс reveal_active
Подсказки (спойлеры)
Используемые темы
Событие scroll
Метод getBoundingClientRect
Советы
Обратите внимание, что при прокрутке возвращаемые координаты getBoundingClientRect() меняются*/