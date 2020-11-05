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





    }

    createLi() {

        const li = document.createElement('li');


        const createBefore = (parent, elementAfter) => {

            const span = document.createElement('span');
            span.textContent = ':'
            parent.insertBefore(span, elementAfter);
            return span
        }

        const liNode = {
            parent: li,
            hoursArea: this.hoursArea,
            minutesArea: this.minutesArea,
            secondsArea: this.secondsArea,

        }
        // tutaj możemy mapować jeżeli będzie wcześniej o
        for (const key in liNode) {


            const span = document.createElement('span');
            li.appendChild(span);
            if (key == 'hoursArea') {

                span.className = 'hoursArea';
                liNode.hoursArea = span;
            } else if (key == 'minutesArea') {

                span.className = 'minutesArea';

                createBefore(li, span);
                liNode.minutesArea = span;
            } else if (key == 'secondsArea') {

                span.className = 'secondsArea';
                createBefore(li, span);
                liNode.secondsArea = span;
            }

        }
        return liNode;


    }


    clearList() {

        document.querySelectorAll('li').forEach(li => li.remove());


    }



}