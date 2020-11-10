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
        li.innerHTML = '<span class="hours"></span>:<span class="minutes"></span>:<span class="seconds"></span>'

        return li

    }
    clearList() {

        document.querySelectorAll('li').forEach(li => li.remove());
    }
}