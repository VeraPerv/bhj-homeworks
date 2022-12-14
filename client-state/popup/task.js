let modal = document.getElementById('subscribe-modal');
let buttonForClose = document.querySelector('.modal__close');
//document.cookie = "info=; Expires=Thu, 01 Jan 1970 00:00:0 GMT";//убиваю куку

window.onload = function () {
    if (getCookie('info') === undefined) {
        modal.classList.add('modal_active');
    }
};

const getCookie = (name) => {

    const value = "; " + document.cookie;
    let parts = value.split('; ' + name + '=');
    if (parts.length === 2) {
        return parts
            .pop()
            .split(';')
            .shift();
    }
};


buttonForClose.addEventListener('click', function () {

    modal.classList.remove('modal_active');
    document.cookie = 'info=' + encodeURIComponent('modal_close') + '; Expires=Tue, 19 Jan 2038 03:14:07 GMT';
});

//Еще одно работающее решение внизу

/* const modal = document.getElementById('subscribe-modal');//нашла модальное окно
const modalClose = document.querySelector('.modal__close');//нашла крестик
//document.cookie = "modalActive=; Expires=Thu, 01 Jan 1970 00:00:0 GMT";//убиваю куку
const pairsOfCookie = document.cookie.split('; ');//массив из кук с разделителем

const foundCookie = pairsOfCookie.find((e) => e.startsWith('modalActiv' + '='));//перебор массива кук, ищем куку, имя которой начинается с modalActiv=

if(!foundCookie){
    modal.classList.add('modal_active');
} else {
    modal.classList.remove('modal_active');
}

modalClose.addEventListener('click', (event) => {
modal.classList.remove('modal_active');//закр на крестик
document.cookie = 'modalActiv = not';//добавила кукe на это событие  с именем modalActiv...???
//event.preventDefault();
});*/

/*Исходные данные
Основная HTML-разметка
Базовая CSS-разметка
Базовая разметка окна представлена в виде:

<div class="modal" id="subscribe-modal">
    <div class="modal__content">
        <div class="modal__close modal__close_times">&times;</div>
        Подпишитесь на нашу рассылку пожалуйста!
    </div>
</div>
При нажатии на элемент с классом modal__close необходимо закрыть окно. Закрыть окно - значит удалить у него класс modal_active.

Открытое окно имеет следующую разметку:

<div class="modal modal_active" id="subscribe-modal">
    <!-- ... -->
</div>
Процесс реализации
После закрытия окна, установите в cookie-файле информацию о закрытии окна
Если после перезагрузки в cookie нет информации о закрытии, необходимо окно показать.
Если страница была перезагружена с показанным окном, в cookie-файл не нужно ничего вносить */

/*При открытии окна мы сразу должны проверять, есть ли кука, т.е. вторая строка кода не нужна, там должна быть проверка, если кука пустая (т.е. undefined), то добавить класс (отобразить модалку). Проверка сделана по слушателю события DOMContentLoaded, либо слушатель окна и - load.
В куки можно сохранять что угодно, я делал так - document.cookie = "modalClosed=true". Это - const getCookie - у меня точно такое же. Вызывать getCookie('info'); - не нужно, удали. Браузер хром не сохраняет куки при перезагрузке страницы (по F5), если открыть html просто так, тут надо либо через лайв-сервер запустить, либо использовать мозилу. Куки отображаются на вкладке отладчика Application в строках Local/Session Storage, Cookies там же их можно и удалять вручную */