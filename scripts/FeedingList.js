class FeedingList {

    constructor() {

        this.time = new Time();
        this.ul = document.querySelector('ul');
    }

    addLi() {

        let li;

        /*  this.li.textContent = `${this.time.getLocalTime().hours}:${this.time.getLocalTime().minutes}:${this.time.getLocalTime().seconds}`; */ // zastanowić się czy nie zrezygnować z metody getLocalTime ? 
        /*  this.ul.appendChild(this.li);
         this.li = this.ul.insertBefore(text, this.li) */

        this.ul.appendChild(this.createLi())

    }

    createLi() {

        const li = document.createElement('li');


        const createBefore = (parent, elementAfter) => {

            const span = document.createElement('span');
            span.textContent = ':'
            parent.insertBefore(span, elementAfter);
            return span
        }


        for (let i = 0; i < 3; i++) {


            const span = document.createElement('span');
            li.appendChild(span);
            if (i == 0) span.className = 'hours';
            else if (i == 1) {
                span.className = 'minutes';
                createBefore(li, span);

            } else {
                span.className = 'seconds';
                createBefore(li, span);
            }
        }

        return li;


    }














    clearList() {

        document.querySelectorAll('li').forEach(li => li.remove());


    }



}