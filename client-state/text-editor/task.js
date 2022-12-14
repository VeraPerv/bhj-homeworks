const editor = document.getElementById('editor');


editor.value = localStorage.getItem('text');

editor.addEventListener('input', function () {
    //debugger;
    localStorage.setItem('text', editor.value);
});

let btnForClear = document.getElementById('btn');


btnForClear.addEventListener('click', function () {
    localStorage.removeItem('text');
    editor.value = '';
});




/* Необходимо разработать простейший текстовый редактор, который будет сохранять своё значение даже после перезагрузки страницы.

Процесс реализации
Сохраняйте значение текстового редактора в локальном хранилище.
После перезагрузки, восстанавливайте текст из локального хранилица

Повышенный уровень сложности (не обязательно)
Добавьте кнопку «Очистить содержимое», при нажатии на которую текст в поле ввода очищается.

Для этого вы можете править HTML и CSS по желанию.
*/