const form = document.getElementById('signin__form');
let inputFields = [...document.querySelectorAll('.control')]; //инпуты
console.log(inputFields);
const welcome = document.getElementById('welcome');
let welcomeSpan = document.getElementById('user_id');
const signIn = document.querySelector('.signin'); //верхний див
let btn = document.getElementById('signin__btn');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('readystatechange', () => {
        if (xhr.readyState === xhr.DONE) {
            let text = JSON.parse(xhr.responseText); //распарсили ответ запроса
            if (text.success === true) {
                inputFields.value = '';
                localStorage.setItem('id', JSON.stringify(text.user_id));
                let localStorageId = localStorage.getItem('id'); //получаем id из локального
                console.log(localStorageId); //???
                welcomeSpan.textContent = localStorage.getItem('id'); //272 ставим id в велкам ;надо парсить?
                signIn.classList.remove('signin_active');
                welcome.classList.add('welcome_active');
            } else {

                alert('Неверный логин/пароль');
                inputFields.value = '';
            }
        }
    });
    let url = 'https://students.netoservices.ru/nestjs-backend/auth';
    xhr.open('POST', url);
    const formData = new FormData(form);
    xhr.send(formData);
});
//достала значение инпутов, в массив, записала в хранилище
btn.addEventListener('click', () => {
    let arrOfInputFieldsValue = [];
    inputFields.forEach((e) => {
        arrOfInputFieldsValue.push(e.value);
        console.log(e.value); //demo           
    });
    localStorage.setItem('key', JSON.stringify(arrOfInputFieldsValue));
});











/*window.addEventListener('load', () => {
    let listen = JSON.parse(localStorage.getItem('key')); //убр["demo","demo"]
    console.log(listen); //["demo",""]убр
  inputFields.forEach((el,i) => {
    el.value = listen[i];
  });
    });*/

/*const signin = document.querySelector(".signin");
const form = document.getElementById("signin__form");
const field = Array.from(document.querySelectorAll(".control"));
const btn = document.querySelector(".btn");
const welcome = document.querySelector(".welcome");
const userId = document.getElementById("user_id");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    debugger;
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('readystatechange', () => {
        if (xhr.readyState === xhr.DONE) {
            let text = JSON.parse(xhr.responseText);

            if (text.success === true) {
                field.value = "";
                localStorage.setItem("id", JSON.stringify(text.user_id));
                let storageid = localStorage.getItem("id");
                userId.textContent = storageid;
                signin.classList.remove("signin_active");
                welcome.classList.add("welcome_active");
            } else {
                alert("Неверный логин/пароль");
                lines();
            };
        };
    });

    const url = 'https://students.netoservices.ru/nestjs-backend/auth';
    xhr.open("POST", url);

    const formData = new FormData(form);
    xhr.send(formData);
});

function lines() {
    btn.addEventListener("click", (e) => {

        let inputArray = [];
        field.forEach((el) => {
            inputArray.push(el.value);
        });
        localStorage.setItem('key', JSON.stringify(inputArray));
    });

    window.addEventListener("load", () => {
        let inputArray = JSON.parse(localStorage.getItem("key"));
        field.forEach((el, i) => {
            el.value = inputArray[i];
        });
    });
};*/

/* Исходные данные
Основная HTML-разметка
Базовая CSS-разметка
Форма авторизации представлена разметкой вида:

<div class="signin" id="signin">
    <h2 class="title">Вход</h2>
    <form action="https://students.netoservices.ru/nestjs-backend/auth" id="signin__form">
        <div class="row">
            <input type="text" name="login" class="control" placeholder="Логин">
        </div>
        <div class="row">
            <input type="password" name="password" class="control" placeholder="Пароль">
        </div>
        <div class="row">
            <button class="btn" id="signin__btn">Войти</button>
        </div>
    </form>
</div>
Для отображения формы необходимо задать класс signin_active:

<div class="signin signin_active">
    <!-- ... -->
</div>
В момент, когда пользователь нажимает на кнопку #signin__btn, необходимо направить AJAX-запрос с содержимым формы по адресу https://students.netoservices.ru/nestjs-backend/auth

При неверных данных для входа вы получите JSON-ответ

{
  "success": false
}
При успешной авторизации (логин demo, пароль demo)

{
  "success": true,
  "user_id": 123 
}
Блок приветствия пользователя представлен разметкой вида:

<div class="welcome" id="welcome">
    Добро пожаловать, пользователь #<span id="user_id"></span>
</div>
Для его показа вам необходимо задать класс welcome_active:

<div class="welcome welcome_active">
    <!-- ... -->
</div>
Процесс реализации
Реализуйте механизм авторизации. Для этого передайте данные формы с помощью POST-запроса по адресу https://students.netoservices.ru/nestjs-backend/auth
После успешного входа, сохраните полученный id-пользователя в локальное хранилище
При успешной авторизации, задайте id пользователя в блок #welcome и отобразите его
Если авторизация не удалась, выведите сообщение «Неверный логин/пароль»
При загрузке страницы, в случае, если в локальном хранилище имеется id пользователя, выведите блок #welcome с заданным id пользователя
Повышенный уровень сложности (не обязательно)
Добавьте возможность деавторизации.
После попытки авторизации данные из полей формы необходимо очищать
Для этого вы можете править HTML и CSS по желанию.

Подсказки (спойлеры)
Советы
Самый простой способ отправить данные для авторизации - воспользоваться FormData*/