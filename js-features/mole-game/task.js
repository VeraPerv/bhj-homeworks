//debugger;
const element = document.querySelector('.hole-game');
const elementArray = Array.from(element.children);
const win = document.getElementById('dead');
const lostL = document.getElementById('lost');

for (let i = 0; i < elementArray.length; i++) {

    elementArray[i].onclick = function () {
        if (elementArray[i].onclick && elementArray[i].classList.contains('hole_has-mole')) {
            win.textContent = Number(win.textContent) + 1;

            if (win.textContent == 10) {
                alert('Выигрыш');
                win.textContent = 0;
                lostL.textContent = 0;
            }

        } else if (elementArray[i].onclick) {
            lostL.textContent = Number(lostL.textContent) + 1;

            if (lostL.textContent == 5) {
                alert('Проигрыш');
                lostL.textContent = 0;
                win.textContent = 0;
            }
        }
    };
}


/*elementArray[i].onclick = function {
    const win = document.getElementById('dead');
    win.textContent = Number(win.textContent) + 1;
}*/

/* if(elementArray[i].onclick && elementArray[i].classList.contains('hole_has-mole')) {
     const win = document.getElementById('dead');
     win.textContent = Number(win.textContent) + 1;

 }*/



/*
Вам требуется дописать уже существующий код, в котором реализовано появление крота в случайной лунке.

Данный проект включает:

Основную HTML-разметку
Базовые CSS-классы
Часть написанного кода JS
HTML-разметка представляет 9 лунок (класс hole), каждая со своим id:

<div class="hole-game">
    <div class="hole hole_has-mole" id="hole1"></div>
    <div class="hole" id="hole2"></div>
    <div class="hole" id="hole3"></div>
    <div class="hole" id="hole4"></div>
    <div class="hole" id="hole5"></div>
    <div class="hole" id="hole6"></div>
    <div class="hole" id="hole7"></div>
    <div class="hole" id="hole8"></div>
    <div class="hole" id="hole9"></div>
</div>
Условия победы и поражения

Случайным образом у одной из лунок добавляется класс hole_has-mole, что значит, что в лунке есть крот.

Только если при клике на лунку с классом hole_has-mole вы должны засчитать +1 к победе. В ином случае - поражение.

Процесс реализации
Используя цикл зарегистрируйте для каждой лунки обработчик событий
Проверьте наличие нужного класса и увеличьте значение нужного счетчика
По выигрышу или проигрышу обнулите статистику
Чтобы не создавать для каждой лунки отдельную переменную, напишите функцию getHole( index ), которая по индексу будет возвращать нужный элемент. Обратите внимание, что идентификаторы лунок располагают для такого подхода. Пример реализации можно посмотреть в файле base.js.

*/
// Первоначальный рабочий вариант
/* for (let i = 0; i < elementArray.length; i++) {

    elementArray[i].onclick = function () {
        if (elementArray[i].onclick && elementArray[i].classList.contains('hole_has-mole')) {
            win.textContent = Number(win.textContent) + 1;

            if (win.textContent == 10) {
                alert('Выигрыш');
                win.textContent = 0;
                lostL.textContent = 0;
            }

        } else if (elementArray[i].onclick) {
            lostL.textContent = Number(lostL.textContent) + 1;

            if (lostL.textContent == 5) {
                alert('Проигрыш');
                lostL.textContent = 0;
                win.textContent = 0;
            }
        }
    };
}*/

/*let winLostFunc = function (textWin, textLost) {
    if (win.textContent == 10) {
        alert(textWin);
        win.textContent = 0;
        lostL.textContent = 0;
    } else if (win.textContent == 5) {
        alert(textLost);
        win.textContent = 0;
        lostL.textContent = 0;
    }
   
};

for (let i = 0; i < elementArray.length; i++) {

    elementArray[i].onclick = function () {
        if (elementArray[i].onclick && elementArray[i].classList.contains('hole_has-mole')) {
            win.textContent = Number(win.textContent) + 1;
            winLostFunc('Выигрыш', 'Проигрыш');

        } else if (elementArray[i].onclick) {
            lostL.textContent = Number(lostL.textContent) + 1;
            winLostFunc('Выигрыш', 'Проигрыш');
         
        }
    };
}*/