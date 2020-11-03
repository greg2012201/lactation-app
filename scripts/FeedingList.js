class FeedingList {

    constructor() {

        this.time = new Time();
        this.ul = document.querySelector('ul');
    }

    addLi() {




        const li = this.createLi();
        const localDate = this.time.getLocalDate()
        this.ul.appendChild(li.parent);
        this.time.displayTest([localDate.hours, localDate.minutes, localDate.seconds], [li.hoursArea, li.minutesArea, li.secondsArea]);



        // powinien wejść sam local time teraz jako obiekt zwrócony

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
            if (i == 0) {

                span.className = 'hoursArea';
            } else if (i == 1) {

                span.className = 'minutesArea';

                createBefore(li, span);

            } else {

                span.className = 'secondsArea';
                createBefore(li, span);
            }
        }

        const liNode = {
            parent: li,
            hoursArea: li.childNodes[0],
            minutesArea: li.childNodes[2],
            secondsArea: li.childNodes[4],

        }


        return liNode;


    }


    clearList() {

        document.querySelectorAll('li').forEach(li => li.remove());


    }



}