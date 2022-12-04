const goodForSale = document.querySelector('.cart__products'); //роди-ль
const productAll = [...document.querySelectorAll('div.product')];
productAll.forEach((element) => {
    let decrementElem = element.querySelector('.product__quantity-control_dec'); //декр
    let incrementElem = element.querySelector('.product__quantity-control_inc'); //инкр
    let quantity = element.querySelector('.product__quantity-value'); //value
    incrementElem.addEventListener('click', function () {
        quantity.textContent++;
    });

    decrementElem.addEventListener('click', function () {
        if (quantity.textContent > 1) {
            quantity.textContent--;
        }
    });
    let forButton = element.querySelector('.product__add'); //кнопка "добавить в корзину"
    forButton.addEventListener('click', function () {
        let count = +quantity.textContent; // выявляем кол-во продукта и переводим в число


        let id = element.getAttribute("data-id"); // находим его id
        let productImage = element.querySelector(".product__image").getAttribute("src"); // и изображение

        let productsInCard = [...goodForSale.children]; // находим продукты в корзине и формируем из них массив

        // ищем в корзине с продуктами добавляемый элемент по id
        const productInCard = productsInCard.find(i => i.getAttribute("data-id") === id);

        // Если элемента в корзине нет, то добавляем его в корзину
        if (!productInCard) {
            goodForSale.insertAdjacentHTML("beforeend", `
      <div class="cart__product" data-id = ${id}>
        <img class="cart__product-image" src=${productImage}>
        <div class="cart__product-count"> ${element.querySelector(".product__quantity-value").textContent}</div>
      </div>
    `);
        } else { // если он уже есть в корзине,  находим в корзине его количество,
            //переводим в число и прибавляем к этому кол-ву кол-во добавляемого продукта
            let productInCardValue = +productInCard.textContent;
            let cartCount = productInCard.getElementsByClassName("cart__product-count");
            cartCount[0].textContent = productInCardValue + count;
        };


    });
});


/*В третьем задании, минимальным количеством для выбрпа элементов должна быть одна позиция, а не ноль. Нет смысла позволять пользователю выбирать ноль элементов продукта....В таком случае, и при добавлении продукта в корзину, условие if (count > 0) { // если количество продукта > нуля можно будет убрать.

Внесите, пожалуйста, правки, чтобы доработать свое решение и получить “зачет” по этому заданию. */