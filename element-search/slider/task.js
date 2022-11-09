const arrowPrev = document.getElementsByClassName('slider__arrow_prev');
const arrowNext = document.getElementsByClassName('slider__arrow_next');
const sliderItems = document.getElementsByClassName('slider__item');
const dots = Array.from(document.getElementsByClassName('slider__dot'));
console.log(dots);

let index = 0;
dots[index].classList.add('slider__dot_active');

arrowNext[0].addEventListener('click', function () {
    //debugger;
    sliderItems[index].classList.remove('slider__item_active');
    dots[index].classList.remove('slider__dot_active');
    if (index + 1 > sliderItems.length - 1) {
        index = 0;
        sliderItems[index].classList.add('slider__item_active');
        dots[index].classList.add('slider__dot_active');
        return;
    }
    index += 1;
    sliderItems[index].classList.add('slider__item_active');
    dots[index].classList.add('slider__dot_active');

});

arrowPrev[0].addEventListener('click', function () {
    sliderItems[index].classList.remove('slider__item_active');
    dots[index].classList.remove('slider__dot_active');

    if (index == 0) {
        index = sliderItems.length - 1;
        sliderItems[index].classList.add('slider__item_active');
        dots[index].classList.add('slider__dot_active');
        return;
    }

    index -= 1;
    sliderItems[index].classList.add('slider__item_active');
    dots[index].classList.add('slider__dot_active');

});

//index = 1;
for (let i = 0; i < dots.length; i++) {
    //sliderItems[i].classList.remove('slider__item_active');
   // this.classList.remove('slider__dot_active');
dots[i].addEventListener('click', function () {
//debugger;
if(!this.classList.contains('slider__dot_active')) {
    this.classList.add('slider__dot_active');
    sliderItems[i].classList.add('slider__item_active');
}   
    
    
});
//this.classList.remove('slider__dot_active');
}
/*dots[1].addEventListener('click', function () {

    this.classList.toggle('slider__dot_active');
    if (this.classList.contains('slider__dot_active')) {
        sliderItems[1].classList.add('slider__item_active');

    } else {
        sliderItems[1].classList.remove('slider__item_active');
    }
});


dots[2].addEventListener('click', function () {



    this.classList.toggle('slider__dot_active');
    if (this.classList.contains('slider__dot_active')) {
        sliderItems[2].classList.add('slider__item_active');

    } else {
        sliderItems[2].classList.remove('slider__item_active');
    }
});

dots[3].addEventListener('click', function () {



    this.classList.toggle('slider__dot_active');
    if (this.classList.contains('slider__dot_active')) {
        sliderItems[3].classList.add('slider__item_active');

    } else {
        sliderItems[3].classList.remove('slider__item_active');
    }
});

dots[4].addEventListener('click', function () {



    this.classList.toggle('slider__dot_active');
    if (this.classList.contains('slider__dot_active')) {
        sliderItems[4].classList.add('slider__item_active');

    } else {
        sliderItems[4].classList.remove('slider__item_active');
    }
}); */