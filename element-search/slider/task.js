const arrows = Array.from(document.querySelectorAll('.slider__arrow')); //стрелки

const arrowPrev = arrows[0];
const arrowNext = arrows[1];

const sliderSamples = Array.from(document.querySelectorAll('.slider__item'));
let index = 0;

arrowNext.addEventListener('click', function () {
    sliderSamples[index].classList.remove('slider__item_active');

    if (index + 1 > sliderSamples.length - 1) {
        index = 0;
        sliderSamples[index].classList.add('slider__item_active');
        return;
    }
    index += 1;
    sliderSamples[index].classList.add('slider__item_active');

});



arrowPrev.addEventListener('click', function () {
    sliderSamples[index].classList.remove('slider__item_active');
    if (index == 0) {
        index = sliderSamples.length - 1;
        sliderSamples[index].classList.add('slider__item_active');
        return;
    }
    index -= 1;
    sliderSamples[index].classList.add('slider__item_active');
});