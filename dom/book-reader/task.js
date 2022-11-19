const control = [...document.getElementsByClassName('font-size')];

const book = document.getElementById('book');


control.forEach((element) =>

    element.addEventListener('click', function (event) {
         
        event.preventDefault();

        for (let i = 0; i < control.length; i++) {
            control[i].classList.remove('font-size_active');
        }

        this.classList.add('font-size_active');

        if (this.classList.contains('font-size_small')) {
            book.classList.remove('book_fs-big');
            book.classList.add('book_fs-small');
        }
        if (this.classList.contains('font-size_big')) {
            book.classList.remove('book_fs-small');
            book.classList.add('book_fs-big');
        }
        if (this.classList.contains('font-size') && this.classList.contains('font-size_active') && !this.classList.contains('font-size_small') && !this.classList.contains('font-size_big')) {
            book.classList.remove('book_fs-big');
            book.classList.remove('book_fs-small');
        }

    })


);


/* HTML-разметка элемента управления размером выглядит следующим образом:

<div class="book__control book__control_font-size">
    <a href="" class="font-size font-size_small" data-size="small">A</a>
    <a href="" class="font-size font-size_active">A</a>
    <a href="" class="font-size font-size_big" data-size="big">A</a>
</div>
HTML-разметка читалки выглядит так:

<div class="book" id="book">
    <!-- содержимое -->
</div>

У этого элемента есть два дополнительных класса: book_fs-big и book_fs-small. Именно они делают текст меньшего или большего размеров:

<!-- увеличенный шрифт -->
<div class="book book_fs-big" id="book"></div>

<!-- обычный шрифт (нет классов) -->
<div class="book" id="book"></div>

<!-- уменьшенный шрифт -->
<div class="book book_fs-small" id="book"></div>
Процесс реализации
При нажатии на один из элементов с классом font-size, вам необходимо:

Поставить этому элементу класс font-size_active
В зависимости от размера, поставить элементу с классом book соответствующий класс*/