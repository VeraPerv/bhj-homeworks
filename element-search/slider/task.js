const arrows = Array.from(document.querySelectorAll('.slider__arrow'));
console.log(arrows);
const sliderSamples = Array.from(document.querySelectorAll('.slider__item'));
console.log(sliderSamples);

for (let i = 0; i < arrows.length; i++) {

    arrows[i].addEventListener('click', function () {
        //debugger;
        for (let i = 0; i < sliderSamples.length; i++) {
            if (sliderSamples[i].classList.contains('slider__item_active')) {
                sliderSamples[i].classList.remove('slider__item_active');
            } else {
                sliderSamples[i].classList.add('slider__item_active');
                break;
            }           
        }
    });
}

/*  arrows[i].addEventListener('click', function () {
sliderSamples.forEach(slider => slider.classList.add('slider__item_active'));
    });
}*/
/*Процесс реализации
Установите обработчики события click на элементах «Влево» и «Вправо»
При смене слайдов учитывайте, что навигация должна быть бесконечной. То есть, смена крайнего левого слайда должна перекидывать к крайнему правому и наоборот.
В решении старайтесь делать разделение кода. Регистрация обработчиков отдельно, управление слайдером отдельно. 

СОВЕТЫ: 
Опирайтесь на свойство length для подсчёта количества слайдов или точек
При движении вправо и влево, следите, чтобы номер слайда существовал
Храните номер текцщего слайда в отдельной переменной. Меняйте значение в переменной по смене слайда. По этому значению легко будет найти нужный слайд или активную точку. Задайте начальным значением 0.
Для проверки на наличие того или иного класса, используйте метод includes:
*/