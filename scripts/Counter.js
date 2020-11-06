class Counter {

    constructor() {

        this.time = new Time();

        this.nextFeeding = document.querySelector('.next-feeding');
        this.secondsSpan = document.querySelector('.seconds')
        this.minutesSpan = document.querySelector('.minutes');
        this.hoursSpan = document.querySelector('.hours');

    }

    init() {

        this.countingDown(this.time.getActualTimeInMilliseconds, this.time.getEndTimeInMilliseconds());


    }

    countingDown(actualTimeInMilliseconds, endTimeInMilliseconds) {


        this.stopAndReset();
        this.indexInterval = setInterval(() => {
            this.getDifferenceBetweenDates(actualTimeInMilliseconds(), endTimeInMilliseconds);
            this.print();

        }, 1000);
    }
    getDifferenceBetweenDates(nowTime, endTime) {


        this.hours = Math.floor((endTime / (1000 * 60 * 60) - nowTime / (1000 * 60 * 60)) % 24)
        this.minutes = Math.floor((endTime / (1000 * 60) - nowTime / (1000 * 60)) % 60);
        this.seconds = Math.floor((endTime / 1000 - nowTime / 1000) % 60);


    }

    print() {


        this.time.display([this.hours, this.minutes, this.seconds], [this.hoursSpan, this.minutesSpan, this.secondsSpan]);



    }


    displayNextFeedingTime() {

        this.time.dsiplayEndTime(this.nextFeeding.querySelectorAll('span'));
    }

    stopAndReset() {

        clearInterval(this.indexInterval);
        this.seconds = 0;
        this.minutes = 0;
        this.hours = 2;
        this.print();
        // uwaga tą funkcję będzie trzeba prawdopodobine zrobić w main.js żeby była uniwersalna??
    }




}