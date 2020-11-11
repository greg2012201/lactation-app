class FeedingList {

    constructor() {

        this.time = new Time();
        this.ul = document.querySelector('ul');
    }

    addLi() {

        const li = this.createLi();
        const localDate = this.time.getLocalDate()
        this.ul.appendChild(li);



        this.time.display([localDate.hours, localDate.minutes, localDate.seconds], li.querySelectorAll('span'));

    }

    createLi() {

        const li = document.createElement('li');
        li.classList.add('list__list-item')

        li.innerHTML = '<span class="end-time-container__hours"></span>:<span class="end-time-container__minutes"></span>:<span class="end-time-container__seconds"></span>'

        return li

    }
    clearList() {

        document.querySelectorAll('li').forEach(li => li.remove());
    }
}