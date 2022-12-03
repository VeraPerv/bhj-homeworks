let inputField = document.getElementById('task__input'); //инпут
let list = document.getElementById('tasks__list'); //див для списка
let buttonIn = document.getElementById('tasks__add');
let formIn = document.getElementById('tasks__form');

buttonIn.addEventListener('click', function (event) {

  event.preventDefault();

  if (inputField.value != '') {

    list.insertAdjacentHTML('afterBegin', '<div class="task">  <div class="task__title">Сходить в магазин</div><a href="#" class="task__remove">&times;</a></div>');

    let forSave = list.querySelector('.task__title');
    forSave.textContent = inputField.value;
    inputField.value = '';

    let forRemove = list.querySelector('.task__remove');

    forRemove.addEventListener('click', function (event) {
      event.preventDefault();
      list.querySelector('.task').remove();
    });
  }
});

/*Правильно добавила логику для крестика? внутри и после добавления элемента */



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
/*let inputField = document.getElementById('task__input');
console.log(inputField);
console.log(inputField.value);

 let list = document.getElementById('tasks__list');
 console.log(list);
 inputField.addEventListener('keydown', function(event){
  debugger;
      if(event.сode == 'Enter'){
  
        console.log(event.code);
        list.insertAdjacentHTML('afterBegin','<div class="task"> <div class="task__title">Сходить в магазин</div><a href="#" class="task__remove">&times;</a> </div>');
        let elementText = list.querySelector('.task__title');
        console.log(elementText);
        elementText.textContent = inputField.value;
    }
 }); */