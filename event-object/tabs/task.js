const mainTab = Array.from(document.getElementsByClassName('tab'));

const tabContent = Array.from(document.getElementsByClassName('tab__content'));

mainTab.forEach(e => {
    e.addEventListener('click', () => {

        for (let i = 0; i < mainTab.length; i++) {
            mainTab[i].classList.remove('tab_active');
        }
        e.classList.toggle('tab_active');

        let indexE = mainTab.indexOf(e);
        console.log(indexE);
        if (e.classList.contains('tab_active')) {
            for (let i = 0; i < tabContent.length; i++) {
                tabContent[i].classList.remove('tab__content_active');
                e.classList.remove('tab_active');
            }
            e.classList.add('tab_active');
            tabContent[indexE].classList.add('tab__content_active');
        }
        if (!e.classList.contains('tab_active')) {

            tabContent[indexE].classList.remove('tab__content_active');
        }

    });

});