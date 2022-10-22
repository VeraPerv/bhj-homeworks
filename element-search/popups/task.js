const searchMain = document.getElementById('modal_main');
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
    const modalSuccess = document.getElementById('modal_success');
    modalSuccess.classList.add('modal_active');
});