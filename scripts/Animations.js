class Animations {
    constructor() {
        this.nextFeeding = document.querySelector('.next-feeding');

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