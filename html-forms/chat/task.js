const robotWords = [
  'не нравится  - не обращайтесь',
  'везде хорошо, где вас нет',
  'отлично все у них для вас',
  'до вас у нас все хорошо было',
  'идите',
  'не надо спасибо',
  'грубость - наш конек',
  'никаких вам здрасьте',
  'до свидания не  надо, только прощайте',
  'закройте чат',
  'давай ,до свидания'
];
const chatWidget = document.querySelector('.chat-widget');
console.log(chatWidget);
chatWidget.addEventListener('click', function () {
  chatWidget.classList.add('chat-widget_active');
});

const chatMessages = document.getElementById('chat-widget__messages'); //родитель, добавляем к нему разметку
console.log(chatMessages);

document.addEventListener('keyup', function (event) {

  const chatInput = document.getElementById('chat-widget__input'); //поле инпута

  if (event.code == 'Enter' && chatInput.value != '') {
    chatMessages.innerHTML += `<div class="message message_client">
<div class="message__time">${new Date().toLocaleTimeString().slice(0,-3)}</div>
<div class="message__text">${chatInput.value}</div>
</div>`;

    chatInput.value = "";

    let index = Math.floor(Math.random() * robotWords.length);

    chatMessages.innerHTML += ` <div class="message">
<div class="message__time">${new Date().toLocaleTimeString().slice(0,-3)}</div>
<div class="message__text">${robotWords[index]}</div>
</div>`;

  }

});




/*const chatWidget = document.querySelector('.chat-widget');
let logElem = document.querySelector(".chat-widget__messages");
chatWidget.addEventListener('click', function () {
  this.classList.add('chat-widget_active');

});

document.addEventListener('keyup', function (event) {
  const clientMessage = document.querySelector('.message_client');

  const chatInput = document.getElementById('chat-widget__input');


  if (event.code == 'Enter' && chatInput.value != '') {
      clientMessage.classList.add('message_client');
      let timeT = clientMessage.querySelector('.message__time');
      timeT = new Date();
      let timeStr = timeT.toLocaleTimeString();
      logElem.innerHTML += timeStr + ": " + chatInput.value + "<br/>";
      chatInput.value = "";
      let index = Math.floor(Math.random() * robotWords.length);
      logElem.innerHTML += timeStr + ": " + robotWords[index] + "<br/>";

  }

});*/





/*const robotWords = [
    'не нравится  - не обращайтесь',
    'везде хорошо, где вас нет',
    'отлично все у них для вас',
    'до вас у нас все хорошо было',
    'идите',
    'не надо спасибо',
    'грубость - наш конек',
    'никаких вам здрасьте',
    'до свидания не  надо, только прощайте',
    'закройте чат',
    'давай ,до свидания'
];

const chatWidget = document.querySelector('.chat-widget');
let logElem = document.querySelector(".chat-widget__messages");
chatWidget.addEventListener('click', function () {
    this.classList.add('chat-widget_active');

});

const chatInput = document.getElementById('chat-widget__input');//инпут
document.addEventListener('keyup', function (event) {
  debugger;

if (event.code == 'Enter' && chatInput.value != '') {

 
  logElem.insertAdjacentHTML('afterbegin', '<div class="message"><div class="message__time">22:10</div><div class="message__text">Добрый день!</div></div><!-- <div class="message message_client"><div class="message__time">22:10</div><div class="message__text">Добрый день!</div></div>');
    

const clientMessage = document.querySelector('.message_client');//внешн див клиента
console.log(clientMessage);

let clientTime = clientMessage.querySelector('.message__time');

clientTime = new Date().toLocaleTimeString();//время клиента
console.log(clientTime);




let clientText = clientMessage.querySelector('.message__text');//текст клиента
clientText.innerHTML += chatInput.value + " " + clientTime;



let robotMessage = chatWidget.querySelector('div.message');
let robotTime = robotMessage.querySelector('.message__time');
let robotText = robotMessage.querySelector('.message__text');


       
        
      
       /* timeT = new Date();
        let timeStr = timeT.toLocaleTimeString();
        logElem.innerHTML += timeStr + ": " + chatInput.value + "<br/>";
        chatInput.value = "";
        let index = Math.floor(Math.random() * robotWords.length);
        logElem.innerHTML += timeStr + ": " + robotWords[index] + "<br/>";*/

/*    }

});*/




/*   //let messageIn = clientMessage.querySelector('.message__text');

        //let time = new Date();
        //let timeStr = time.toLocaleTimeString();*/
//console.log(getWord());
//logElem.innerHTML += getWord();



/* const messages = document.querySelector( '.chat-widget__messages' );*/
// добавит всесто мессаджес логелем ниже
/*messages.innerHTML += `
  <div class="message">
    <div class="message__time">09:21</div>
    <div class="message__text">
      Добрый день, мы ещё не проснулись. Позвоните через 10 лет
    </div>
  </div>
`;*/
/*

    /*if( event.code === 'Enter' ) {   
        function log(msg) {
        let logElem = document.querySelector(".chat-widget__messages");
      
        let time = new Date();
        let timeStr = time.toLocaleTimeString();
        logElem.innerHTML += timeStr + ": " + msg + "<br/>";
      }  
       
        log(logElem.value);
    }*/



//const messages = document.querySelector( '.chat-widget__messages' );
//console.log(messages);

/*document.addEventListener( 'keyup', event => {
    if( event.code === 'Enter' ) {        
        console.log('enter was pressed');
        log(logElem.value);
    };
  });


function log(msg) {
  let logElem = document.querySelector(".chat-widget__messages");

  let time = new Date();
  let timeStr = time.toLocaleTimeString();
  logElem.innerHTML += timeStr + ": " + msg + "<br/>";
}*/

/* 
HTML-структура сообщения в чате такова:

<div class="message">
    <div class="message__time">22:10</div>
    <div class="message__text">Добрый день!</div>
</div>
Сообщение, которое отправляется пользователем, должно иметь класс message_client:

<div class="message message_client">
    <div class="message__time">21:10</div>
    <div class="message__text">Добрый день! Хочу купить розы для любимой!</div>
</div>
Теория
Вы уже знакомы со свойством textContent DOM-элемента. В следующей лекции вы узнаете о свойстве innerHTML.

Тем не менее, для этого ДЗ нам оно потребуется. С ним вы уже сталкивались, дописывая игру «Соло на клавиатуре».

С его помощью вы можете записывать внутрь элемента не только обычный текст, но и HTML:

const messages = document.querySelector( '.chat-widget__messages' );
// добавит
messages.innerHTML += `
  <div class="message">
    <div class="message__time">09:21</div>
    <div class="message__text">
      Добрый день, мы ещё не проснулись. Позвоните через 10 лет
    </div>
  </div>
`;
Более подробно информацию о свойстве можно узнать тут:

MDN: Element.innerHTML
Свойства узлов: тип, тег и содержимое
Процесс реализации
Реализуйте открытие окна чата при нажатии на красный боковой бэйдж
По нажатию Enter, реализуйте отправку в чат непустого текстового сообщения
Реализуйте ответ робота (случайное сообщение из списка)
Проставляйте реальную дату переписки
Повышенный уровень сложности (не обязательно)
Реализуйте автоматическую прокрутку окна чата до блока последнего комментария после каждого нового комментария.
При активном окне чата и простое 30 секунд, робот должен задать вопрос в чат*/
/*  logElem.innerHTML += `
   <div class="message">
     <div class="message__time"></div>
     <div class="message__text">
       Добрый день, мы ещё не проснулись. Позвоните через 10 лет
     </div>
   </div>
 `;*/

/* const robotWords = [
    'не нравится  - не обращайтесь',
    'везде хорошо, где вас нет',
    'отлично все у них для вас',
    'до вас у нас все хорошо было',
    'идите',
    'не надо спасибо',
    'грубость - наш конек',
    'никаких вам здрасьте',
    'до свидания не  надо, только прощайте',
    'закройте чат',
    'давай ,до свидания'
];

const chatWidget = document.querySelector('.chat-widget');
let logElem = document.querySelector(".chat-widget__messages");
chatWidget.addEventListener('click', function () {
    this.classList.add('chat-widget_active');

});

document.addEventListener('keyup', function (event) {
    const clientMessage = document.querySelector('.message_client');

    const chatInput = document.getElementById('chat-widget__input');


    if (event.code == 'Enter' && chatInput.value != '') {
        clientMessage.classList.add('message_client');
        let timeT = clientMessage.querySelector('.message__time');
        timeT = new Date();
        let timeStr = timeT.toLocaleTimeString();
        logElem.innerHTML += timeStr + ": " + chatInput.value + "<br/>";
        chatInput.value = "";
        let index = Math.floor(Math.random() * robotWords.length);
        logElem.innerHTML += timeStr + ": " + robotWords[index] + "<br/>";

    }

});

*/