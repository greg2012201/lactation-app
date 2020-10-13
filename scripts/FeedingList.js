class FeedingList {

    constructor() {

        this.time = new Time();
        this.ul = document.querySelector('ul');
    }

    addLi() {
        this.li = document.createElement('li');
        this.li.textContent = this.time.getLocalTime(); //tu trzeba to zrobić inną metodą z tego
        this.ul.appendChild(this.li);

    }

    clearList() {

        document.querySelectorAll('li').forEach(li => li.remove());


    }



}