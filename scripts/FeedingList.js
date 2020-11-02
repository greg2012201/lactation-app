class FeedingList {

    constructor() {

        this.time = new Time();
        this.ul = document.querySelector('ul');
    }

    addLi() {

        let li;
        this.li = document.createElement('li');
        const text = document.createElement('span');

        /*  this.li.textContent = `${this.time.getLocalTime().hours}:${this.time.getLocalTime().minutes}:${this.time.getLocalTime().seconds}`; */ // zastanowić się czy nie zrezygnować z metody getLocalTime ? 
        this.ul.appendChild(this.li);
        this.li = this.ul.insertBefore(text, this.li)
        this.createLi(li)

    }

    createLi(li) {

        const parent = document.createElement('li');


        for (let i = 0; i < 3; i++) {


            const child = document.createElement('span');
            if (i == 0) child.className = 'span-hours';
            else if (i == 1) child.className = 'span-minutes';
            else child.className = 'span-seconds';
            parent.appendChild(child);



        }

        parent.childNodes.forEach(element => {

        })



    }

    clearList() {

        document.querySelectorAll('li').forEach(li => li.remove());


    }



}