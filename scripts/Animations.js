class Animations {
    constructor() {
        this.nextFeeding = document.querySelector('.next-feeding');

    }

    init() {

        this.activateNextFeeding();
        this.animationOfAppearanceOfListItems();

    }
    activateNextFeeding() {
        this.nextFeeding.classList.add('active');
    }

    animationOfAppearanceOfListItems() {

        document.querySelectorAll('li').forEach(li => {
            setTimeout(() => li.classList.add('active'), 10)
        });


    }
    deactivateNextFeeding() {

        this.nextFeeding.classList.remove('active');
    }




}