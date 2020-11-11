class Animations {
    constructor() {
        this.nextFeeding = document.querySelector('.start-time');

    }
    init() {

        this.activateNextFeeding();
        this.animationOfAppearanceOfListItems();

    }
    activateNextFeeding() {
        this.nextFeeding.classList.add('start-time--active');
    }

    animationOfAppearanceOfListItems() {

        document.querySelectorAll('.list__list-item').forEach(li => {
            setTimeout(() => li.classList.add('list__list-item--active'), 10)
        });


    }
    deactivateNextFeeding() {

        this.nextFeeding.classList.remove('start-time--active');
    }




}