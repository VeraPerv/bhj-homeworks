const modalOne = document.getElementById('modal_main');//первое мод окно

const modalSuccess = document.getElementById('modal_success');//второе мод 

modalOne.classList.add('modal_active');//мод окно появилось

const modalClose = Array.from(document.getElementsByClassName('modal__close'));// все закрывающие классы
console.log(modalClose);

for (let i = 0; i < modalClose.length; i++) {
    modalClose[i].addEventListener('click', function () {
modalOne.classList.remove('modal_active');
modalSuccess.classList.remove('modal_active');
    });
}

const showSuccess = document.getElementsByClassName('show-success');
console.log(showSuccess);
showSuccess[0].addEventListener('click', function () {   
    modalSuccess.classList.add('modal_active');
});
/* вопросы: 1.modalClose реализовано через цикл, который на каждой итерации, как я понимаю, закрывает по одному активному окну, на сколько это правильно реализовано? Не может ли это привести к ошибке в реальному коде? Как настроить закрытие окон оптимально без цикла? или цикл норм...

2. showSuccess[0].addEventListener - элемент шоусаксесс найден при помощи getElementsByClassName, который возвращает коллекцию хтмл. в этой коллекции пока один единственный элемент с таким классом нулевой. А если вдруг верстка поменяется, то посыпится и js? как оптимально обращаться к showSuccess[0].addEventListener, чтобы стопроцентно открывалось именно modalSuccess.classList.add('modal_active'); (а не что - то другое при изменении верстки)
*/

/*modalOne.addEventListener('click', function () {
    modalOne.classList.add('modal_active');

});*/



/*1. В момент запуска скрипта, покажите окно *#modal_main*
2. Сделайте закрытие активного окна по нажатию на его элемент с классом *modal__close*
3. По нажатию на элемент с классом *show-success* покажите окно *#modal_success* */

//ПРАВИЛЬНЫЙ ПРОВЕРЕННЫЙ ВАРИАНТ
/*const searchMain = document.getElementById('modal_main');
searchMain.classList.add('modal_active');
const modalSuccess = document.getElementById('modal_success');


const modalClose = Array.from(document.querySelectorAll('.modal__close'));
for (let i = 0; i < modalClose.length; i++) {

    modalClose[i].addEventListener('click', function () {
        searchMain.classList.remove('modal_active');
        modalSuccess.classList.remove('modal_active');
    });
}

const showSuccess = document.querySelector('.show-success');

showSuccess.addEventListener('click', function () {
    //const modalSuccess = document.getElementById('modal_success');
    modalSuccess.classList.add('modal_active');
});*/