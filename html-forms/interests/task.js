const checkboxList = [...document.querySelectorAll('.interest__check')]; // все инпуты

for (let element of checkboxList) {
    const checkboxElements = element.closest('.interest').querySelectorAll('.interest__check');
    element.addEventListener('change', () => {
        if (element.checked && element.closest('ul.interests_active') == null) {
            for (let subMenu of checkboxElements) {
                subMenu.checked = true;
            }
        } else if (!element.checked && element.closest('ul.interests_active') == null) {
            for (let subMenu of checkboxElements) {
                subMenu.checked = false;
            }
        }
    });
}





//решение с комментарием

/*const checkboxList = [...document.querySelectorAll('.interest__check')]; // все инпуты
console.log(checkboxList);

for (let element of checkboxList) {
    const checkboxElements = element.closest('.interest').querySelectorAll('.interest__check'); // у конкретного инпута ищем ближайшего родителя ли с классом интерест, в которого вложены другие инпуты с классом .interest__check (вложенные чекбоксы)
    element.addEventListener('change', () => {
        if (element.checked && element.closest('ul.interests_active') == null) {
            /* если элемент нажат и его ближ родитель НЕ ул интерест-актив, а это подсписок для вложенных, т.е. элемент не вложен в подсписок, то проматываются все вложенные в этого родителя инпуты:*/
/*
            for (let subMenu of checkboxElements) {
                subMenu.checked = true;
            }
        } else if (!element.checked && element.closest('ul.interests_active') == null) {
            for (let subMenu of checkboxElements) {
                subMenu.checked = false;
            }
        }
    });
} */

/*const interestMenu = document.querySelectorAll('.interest__check'); //все чекбоксы/инпуты

for (let elementMenu of interestMenu) { // перебираем чекбоксы/инпуты
  const subElementMenu = elementMenu.closest('.interest').querySelectorAll('.interest__check'); //вложенные чекбоксы
  elementMenu.addEventListener('change', () => { //на каждый навешиваем слушатель по данному событию
    //если изменился/включился чекбокс (верхнего уровня) и у него есть вложенный класс, то
    if (elementMenu.checked && elementMenu.closest('ul.interests_active') == null) {
      for (let subMenu of subElementMenu) {
        subMenu.checked = true; //устанавливаем все чекбоксы группы
      }
    // иначе если был включен/отключился
    } else if (!elementMenu.checked && elementMenu.closest('ul.interests_active') == null) {
      for (let subMenu of subElementMenu) {
        subMenu.checked = false; //снимаем все чекбоксы группы
      }
    }
  });
}*/
/*const mainList = [...document.querySelectorAll('.interest__check')];
console.log(mainList);
const list = [...document.querySelectorAll('.interests_active')];
console.log(list);

mainList.forEach((element) => {
    element.addEventListener('click', function () {
            // debugger;
            if (this.checked == true && this.closest('.interest')) {
                // list.children.checked == true;
                for (let i = 0; i < list.length; i++) {

                    console.log(list[i].children);
                    let foundInp = [...list[i].querySelectorAll('.interest__check')];
                    console.log(foundInp);
                    foundInp.forEach((e) => e.checked = true);
                    //foundInp.checked = true;
                }
            }

            if (this.checked == false && this.closest('.interest')) {
                //debugger;
                for (let i = 0; i < list.length; i++) {

                    console.log(list[i].children);
                    let foundInp = [...list[i].querySelectorAll('.interest__check')];
                    console.log(foundInp);
                    foundInp.forEach((e) => e.checked = false);
                    //foundInp.checked = true;
                }
            }
           
        }

    );
}); */


/*Процесс реализации
Реализуйте функционал, когда при клике на галочку будут проставляться/сниматься галочки вложенных списков
В этом варианте задаче списки имеют максимум 1 уровень вложенности, поэтому не нужно делать максимально общее и абстрактное решение.*/
/*if (this.checked == true && this.closest('.interest')){
              console.log(list.querySelectorAll('.interest__check'));
               console.log(this.closest('.interest')).querySelectorAll( 'input.interest__check');
               console.log(this.closest('.interest').children);
               console.log(this.querySelectorAll('.interest__check'));
               console.log(this);
               console.log(this.checked);
               console.log(this.children);
           }*/
/*const mainList = [...document.querySelectorAll('.interest__check')];//все инпуты
console.log(mainList);
const list = [...document.querySelectorAll('.interests_active')];
console.log(list);

mainList.forEach((element) => { //обработчик на каждый инпут
    element.addEventListener('click', function () {
             debugger;
            if (this.checked == true && this.closest('ul.interests_active')) {
                // list.children.checked == true;
                for (let i = 0; i < list.length; i++) {

                    console.log(list[i].children);
                    let foundInp = [...list[i].querySelectorAll('.interest__check')];
                    console.log(foundInp);
                    foundInp.forEach((e) => e.checked = true);
                    //foundInp.checked = true;
                }
            }

            if (this.checked == false && this.closest('ul.interests_active')) {
                //debugger;
                for (let i = 0; i < list.length; i++) {

                    console.log(list[i].children);
                    let foundInp = [...list[i].querySelectorAll('.interest__check')];
                    console.log(foundInp);
                    foundInp.forEach((e) => e.checked = false);
                    //foundInp.checked = true;
                }
            }
           
        }

    );
});*/