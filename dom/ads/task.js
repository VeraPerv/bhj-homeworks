//2 setTimeout

const rotatorText = [...document.querySelectorAll('.rotator__case')];

let index = 0;

let timerId = setTimeout(function timer() {

    rotatorText[index].classList.toggle('rotator__case_active');

    if (rotatorText[index].classList.contains('rotator__case_active')) {
        rotatorText[index].classList.remove('rotator__case_active');
    }

    index++;
    if (index == rotatorText.length - 1) {
        index = 0;
    }

    rotatorText[index].classList.toggle('rotator__case_active');

    setTimeout(timer, 1000);
}, 1000);

// setinterval
/*const rotatorText = [...document.querySelectorAll('.rotator__case')];
console.log(rotatorText);

let index = 0;
let rep = setInterval(function () {
    //debugger;
    
    rotatorText[index].classList.toggle('rotator__case_active');
    if (rotatorText[index].classList.contains('rotator__case_active')) {
        rotatorText[index].classList.remove('rotator__case_active');
    }
    index++;
    if (index == rotatorText.length - 1) {
        index = 0;
    }
    rotatorText[index].classList.add('rotator__case_active');
    //rotatorText[index].classList.toggle('rotator__case_active');
    console.log(rotatorText[index]);

}, 1000);
*/


/* Процесс реализации
Каждую секунду меняйте класс с одного элемента на другой
Сделайте акцент на том, чтобы на странице можно было использовать несколько ротаторов одновременно
Смена текстовых блоков должна быть бесконечной.
Подумайте, как из setInterval сделать бесконечный цикл*/