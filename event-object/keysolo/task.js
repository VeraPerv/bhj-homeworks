class Game {
  constructor(container) {
    this.container = container;
    this.wordElement = container.querySelector('.word');
    this.winsElement = container.querySelector('.status__wins');
    this.lossElement = container.querySelector('.status__loss');

    this.reset();

    this.registerEvents();
  }

  reset() {
    this.setNewWord();
    this.winsElement.textContent = 0;
    this.lossElement.textContent = 0;
  }

  registerEvents() {
    console.log(this.currentSymbol.textContent);

    document.addEventListener('keydown', (event) => {

      if (event.key == this.currentSymbol.textContent) {
        this.success();
      } else {
        this.fail();
      }
    });

  }

  success() {
    this.currentSymbol.classList.add('symbol_correct');
    this.currentSymbol = this.currentSymbol.nextElementSibling;
    if (this.currentSymbol !== null) {
      return;
    }

    if (++this.winsElement.textContent === 10) {
      alert('Победа!');
      this.reset();
    }
    this.setNewWord();
  }

  fail() {
    if (++this.lossElement.textContent === 5) {
      alert('Вы проиграли!');
      this.reset();
    }
    this.setNewWord();
  }

  setNewWord() {
    const word = this.getWord();

    this.renderWord(word);
  }

  getWord() {
    const words = [
        'bob',
        'awesome',
        'netology',
        'hello',
        'kitty',
        'rock',
        'youtube',
        'popcorn',
        'cinema',
        'love',
        'javascript'
      ],
      index = Math.floor(Math.random() * words.length);

    return words[index];
  }

  renderWord(word) {
    const html = [...word]
      .map(
        (s, i) =>
        `<span class="symbol ${i === 0 ? 'symbol_current': ''}">${s}</span>`
      )
      .join('');
    this.wordElement.innerHTML = html;

    this.currentSymbol = this.wordElement.querySelector('.symbol_current');
  }
}

new Game(document.getElementById('game'))

/*Необходимо __дописать__ игру, в которой пользователь вводит слово по буквам с клавиатуры.
В случайное время появляется фраза. Если игрок вводит не так слово, 
ему засчитываeтся поражение. После 3 поражений игра заканчивается. 
Игрок побеждает после 10 побед.

![Demo](./demo.gif)

### Исходные данные

1. Основная HTML-разметка
2. Базовая CSS-разметка
3. Базовый код игры

В настоящий момент в коде игры не хватает только обработчика ввода с клавиатуры 
для распознавания введённых символов и сравнении с текущим.

### Процесс реализации

Допишите метод *registerEvents*, в котором необходимо задать обработчик
нажатия клавиш. Принцип работы метода:

1. Получить DOM-элемент текущего символа, который необходимо ввести (свойство *this.currentSymbol*)
2. Получить символ, который был введён с клавиатуры. 
3. Если два символа одинаковые, вызывать метод *this.success*
4. Если два символа отличаются, вызвать метод *this.fail*
5. При сравнении регистр не должен быть важен (а или А)

_Обратите внимание на то, что именно записывается в this.currentSymbol.
Вспомните в чем различия между keydown и keyup_
////// СТРЕЛОЧНАЯ И ОБЫЧНАЯ ФУНКЦИИ
 надо заменить это - ,function(event){ на это - , (event) => {, т.е. обычную ф-ию на стрелочную, всё из-за контекста вызова.


При открытии/обновлении страницы создаётся экземпляр класса в котором через конструктор вызываются имеющиеся методы (в т.ч. и слушатель события нажатия клавиш) и фиксируется текущий контекст. Раз в слушателе ф-ия обработчик нажатий клавиш написана обычной ф-ей, то у неё есть собственный контекст вызова и она теряет связь с контекстом экземпляра класса (т.е. не имеет доступа к его свойствам). К ней (этой ф-ии) нужно привязать текущий (экземпляра класса) контекст через метод bind, либо переписать на стрелочную.

Решение по нему будет такое: надо вынести ф-ию из обработчика, присвоить ей имя, например, function func(event){весь код без изменений}. В обработчике написать так (вместо того кода) - func.bind(this). Тогда тоже всё заработает,  заморочнее, чем через ф-ию стрелку.
*/