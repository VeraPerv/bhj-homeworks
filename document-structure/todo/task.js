let inputField = document.getElementById('task__input'); //инпут
console.log(inputField);

let buttonAdd = document.getElementById('tasks__add'); //кнопка
let list = document.getElementById('tasks__list'); //список

buttonAdd.addEventListener('click', function (event) {

  event.preventDefault();


  if (inputField.value.trim() != '') {
    list.insertAdjacentHTML('afterbegin', `<div class="task">
  <div class="task__title">${inputField.value.trim()}
  </div>
  <a href="#" class="task__remove">&times;</a>
</div>`);
  }
  inputField.value = '';
  let forRemove = list.querySelectorAll('.task__remove');

  forRemove.forEach((e) => e.addEventListener('click', function (event) {
    event.preventDefault();
    event.target.closest('.task').remove();
  }));


});



/*Исходные данные
Основная HTML-разметка
Базовая CSS-разметка
Шаблон новой задачи выглядит так:

<div class="task">
  <div class="task__title">
    Сходить в магазин
  </div>
  <a href="#" class="task__remove">&times;</a>
</div>
При нажатии на элемент с классом task__remove, задача должна удаляться

Процесс реализации
Реализуйте добавление задач по нажатию клавиши Enter при наличии текста в поле ввода
Реализуйте механизм удаления задач
Важный момент: в задании для кнопок удаления задач для каждой кнопки должен быть только один обработчик события. Тоесть не должно быть более одного обработчика. Для этого добавляйте слушатель события только на добавляемый элемент.

Повышенный уровень сложности (не обязательно)
Сделайте сохранение задач даже после перезагрузки страницы.

В будущих лекциях мы будем касаться локального хранилища (localStorage). Для решения этой задачи, вам потребуется познакомиться с темой уже сейчас.

Материалы для изучения:

Window.localStorage
LocalStorage на пальцах
*/