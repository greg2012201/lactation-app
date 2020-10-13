/* setTimeout(() => {
        li.classList.add('active');
    },
    10);  */

class Animations {
    constructor() {
        this.nextFeeding = document.querySelector('.next-feeding');
        /* 
                document.querySelector('ul').addEventListener('click', function (e) {
                    console.log(e.target);
                    if (e.target && e.target.nodeName == 'BUTTON') addLi();
                }, false); */ // użyć tutaj event delegation ?? 

    }

    init() {

        this.activateNextFeeding();
        this.animationOfAppearanceOfListItems();
        console.log('wywołanie');
    }
    activateNextFeeding() {
        this.nextFeeding.classList.add('active');
    }
    deactivateNextFeeding() {

        this.nextFeeding.classList.remove('active');
    }
    animationOfAppearanceOfListItems() {

        document.querySelectorAll('li').forEach(li => {
            setTimeout(() => li.classList.add('active'), 10)
        });


    }




}