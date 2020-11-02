class FeedingList {

    constructor() {

        this.time = new Time();
        this.ul = document.querySelector('ul');
    }

    addLi() {



        /*  this.li.textContent = `${this.time.getLocalTime().hours}:${this.time.getLocalTime().minutes}:${this.time.getLocalTime().seconds}`; */ // zastanowić się czy nie zrezygnować z metody getLocalTime ? 
        /*  this.ul.appendChild(this.li);
         this.li = this.ul.insertBefore(text, this.li) */

        this.ul.appendChild(this.createLi())
        console.log(this.time.getLocalDate().hour);
        // powinien wejść sam local time teraz jako obiekt zwrócony

    }

    createLi() {

        const li = document.createElement('li');





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


        function createBefore(parent, elementAfter) {

            const span = document.createElement('span');
            span.textContent = ':'
            parent.insertBefore(span, elementAfter);
            return span
        }

        return li;


    }


    clearList() {

        document.querySelectorAll('li').forEach(li => li.remove());


    }



}