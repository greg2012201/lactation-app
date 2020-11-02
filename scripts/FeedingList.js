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
        /*  this.ul.appendChild(this.li);
         this.li = this.ul.insertBefore(text, this.li) */
        this.createLi(li, this.ul);

    }

    createLi(li, ul) {

        li = document.createElement('li');



        for (let i = 0; i < 3; i++) {


            const span = document.createElement('span');
            if (i == 0) span.className = 'hours';
            else if (i == 1) span.className = 'minutes';
            else span.className = 'seconds';
            li.appendChild(span);
            console.log(li);



        }


        li.childNodes.forEach(element => {

            /* element.className == 'minutes' ? element = li.insertBefore(text, element) : element.className == 'seconds' ? element = li.insertBefore(text, element) : null; */
            console.log(element);
            const text = document.createElement('span');
            text.textContent = ':'



            if (element.className == 'minutes') element = li.insertBefore(text, element);
            else
            if (element.className == 'seconds') element = li.insertBefore(text, element);
            else return



        })

        console.log(li);


    }

    clearList() {

        document.querySelectorAll('li').forEach(li => li.remove());


    }



}