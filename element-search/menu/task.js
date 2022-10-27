const menuLink = Array.from(document.querySelectorAll('.menu__link')); //ссылки
const menuSub = Array.from(document.querySelectorAll('.menu_sub')); //2подменю
const menuItem = Array.from(document.querySelectorAll('.menu__item')); //все ли

for (let i = 0; i < menuLink.length; i++) {
    menuLink[i].addEventListener('click', function (event) {
        this.nextElementSibling.classList.toggle('menu_active');
        event.preventDefault();
    });
}

















//элемент.classList.toggle('класс');
//debugger;

/*for (let i = 0; i < menuSub.length; i++) {
    menuSub[i].addEventListener('click', function () {
        if (this.classList.contains('menu_active')) {
            this.classList.remove('menu_active');

        }


    });

}*/
/*menuLink[i].addEventListener('click', function (evt) { //клик на все ссылки


    for (let j = 0; j < menuItem.length; j++) {
        if (menuItem[j].closest('.menu_sub')) {
            for (let i = 0; i < menuSub.length; i++) {
                menuSub[i].classList.add('menu_active');
                //evt.defaultPrevented();
            }

        }

    }
});*/



/*const menuLink = Array.from(document.querySelectorAll('.menu__link')); //ссылки
console.log(menuLink)

const menuSub = Array.from(document.querySelectorAll('.menu_sub')); //2подменю
const menuItem = Array.from(document.querySelectorAll('.menu__item')); //все ли
console.log(menuSub);
console.log(menuItem);
debugger;
for (let i = 0; i < menuLink.length; i++) {
    menuLink[i].addEventListener('click', function (evt) { //клик на все ссылки
        for (let j = 0; j < menuItem.length; j++) {
            if (menuItem[j].closest('.menu_sub')) {
                for (let i = 0; i < menuSub.length; i++) {
                    menuSub[i].classList.add('menu_active');
                   
                }
            }

        }
        // 

    });
};*/

/*if(menuLink[i].querySelector('.menu_sub')) {
    evt.preventDefault();
    menuLink[i].classList.add('menu_active');

}*/

/*for (let i = 0; i < menuSub.length; i++) {
       if (menuItem[i].parentElement === ul.menu_sub) {
       menuSub[i].classList.add('menu_active');}
   }*/



/*
Необходимо реализовать двухуровневое навигационное меню. При клике на пункт должны открываться подразделы.
Используя цикл зарегистрируйте обработчики события click на элементах с классом menu__link
Найдите меню рядом со ссылкой. Если оно есть, переключите у него класс menu_active
Запрещайте переход по ссылке для тех, что имеют вложенное меню. Остальные пункты меню должны без помех переводить пользователя на соответствующие страницы.
В решении необходимо использовать методы, изученные на занятии, работы с ручной подстановкой индексов массива приниматься не будут. Необходимые методы указаны в "Подсказках" */

/*for (let i = 0; i < menuLink.length; i++) {
    menuLink[i].addEventListener('click', function (evt) { //клик на все ссылки
        for (let j = 0; j < menuItem.length; j++) {
            if (menuItem[j].closest('.menu_sub')) {
                for (let i = 0; i < menuSub.length; i++) {
                    menuSub[i].classList.add('menu_active');
                    //evt.defaultPrevented();
                }

            }

        }
    });
}*/

/*menuLink[i].addEventListener('click', function (event) {
    if (this.nextElementSibling.classList.contains('menu_active')) {
        this.nextElementSibling.classList.remove('menu_active');
    }*/

/*const menuLink = Array.from(document.querySelectorAll('.menu__link')); //ссылки
const menuSub = Array.from(document.querySelectorAll('.menu_sub')); //2подменю
const menuItem = Array.from(document.querySelectorAll('.menu__item')); //все ли

for (let i = 0; i < menuLink.length; i++) {
    menuLink[i].addEventListener('click', function (event) {
        if (this.nextElementSibling.classList.contains('menu_sub')) {
            this.nextElementSibling.classList.add('menu_active');
        }

        event.preventDefault();
    });
}

/*for (let i = 0; i < menuSub.length; i++) {
    menuSub[i].addEventListener('click', function () {
        if (this.classList.contains('menu_active')) {
            this.classList.remove('menu_active');

        }


    });

}*/
/*if (this.nextElementSibling.classList.contains('menu_sub')) {
           this.nextElementSibling.classList.add('menu_active');
       }*/