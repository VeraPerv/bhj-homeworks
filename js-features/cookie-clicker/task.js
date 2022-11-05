const clickCounter = document.getElementById('clicker__counter');
const clickCounter2 = document.getElementById('clicker__counter2');
const image = document.getElementById('cookie');

function changeSize() {

  image.width = ++clickCounter.textContent % 2 ? 250 : 200;
}

image.onclick = changeSize;


// СКОРОСТЬ КЛИКОВ

/*
const cookie = document.getElementById('cookie');
const clickerCounter = document.getElementById('clicker__counter');
let currentData; // время на момент начала клика
let speedOfClick; //скорость
let quantityOfClickSecond; //сколько выходит кликов в секунду
let avg = 0;

cookie.addEventListener('click', function() {
  currentData = !+clickerCounter.textContent ? new Date() : currentData;

  if (+clickerCounter.textContent) {
    avg = clickerCounter.textContent / ((Date.now() - currentData) / 1000); // разница между кликами в сек.
    console.log('Прошло сек. с начала кликов: ' + (Date.now() - currentData) / 1000);
    console.log('среднее количествео кликов в секунду: ' + avg.toFixed(2));
  }
  clickerCounter.textContent++;
  cookie.width = (cookie.width == 200) ? 185 : 200;
});*/

// ВАРИАНТ БЕЗ ТЕРНАРНОГО ОПЕРАТОРА

/*function changeSize() {
    image.width = 250;
    clickCounter.textContent = Number(clickCounter.textContent) + 1;
    if (clickCounter.textContent % 2 === 0) {
        image.width = 200;
    }
}*/