class FeedingList {

    constructor() {

        this.time = new Time();
        this.ul = document.querySelector('ul');
    }

    addLi() {
        this.li = document.createElement('li');
        //  const spanHours = document.createElement('span');

        this.li.textContent = `${this.time.getLocalTime().hours}:${this.time.getLocalTime().minutes}:${this.time.getLocalTime().seconds}`; // zastanowić się czy nie zrezygnować z metody getLocalTime ? 
        this.ul.appendChild(this.li);

    }

    clearList() {

        document.querySelectorAll('li').forEach(li => li.remove());


    }



}