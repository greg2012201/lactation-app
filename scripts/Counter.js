class Counter {

    constructor() {

        this.time = new Time();

        this.nextFeeding = document.querySelector('.next-feeding');
        this.reamainingTime = document.querySelector('.remaining-time');
    }

    init() {

        this.countingDown(this.time.getActualTimeInMilliseconds,
            this.time.getEndTimeInMilliseconds());



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


        this.time.display([this.hours, this.minutes, this.seconds], this.reamainingTime.querySelectorAll('span'));



    }


    displayNextFeedingTime() {

        const _date = this.time.initNewDate().addHours(this.hours, this.seconds);

        console.log(this.nextFeeding.childNodes);
        this.time.display([_date.getHours(), _date.getMinutes(), _date.getSeconds()], this.nextFeeding.querySelectorAll('span'));
    }

    stopAndReset() {

        clearInterval(this.indexInterval);
        this.seconds = 0;
        this.minutes = 0;
        this.hours = 2;
        this.print();

    }




}