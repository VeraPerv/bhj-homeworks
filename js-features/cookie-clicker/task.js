const image = document.getElementById('cookie');
const clickCounter = document.getElementById('clicker__counter');

function changeSize() {
    image.width = ++clickCounter.textContent % 2 ? 250 : 200;
}

image.onclick = changeSize;


/*Процесс реализации

Всё, что делает игра - увеличивает счётчик нажатий на печеньку.

Увеличивайте значение счётчика при каждом клике на печеньку
Чередуйте уменьшение и увеличение печеньки при каждом клике (уменьшайте и увеличивайте значения width/height) */
// ВАРИАНТ БЕЗ ТЕРНАРНОГО ОПЕРАТОРА
/*function changeSize() {
    image.width = 250;
    clickCounter.textContent = Number(clickCounter.textContent) + 1;
    if (clickCounter.textContent % 2 === 0) {
        image.width = 200;
    }
}*/