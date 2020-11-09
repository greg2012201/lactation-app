class Counter {

    constructor() {

        this.time = new Time();

        this.nextFeeding = document.querySelector('.next-feeding');
        this.reamainingTime = document.querySelector('.remaining-time');
        /*   this.secondsSpan = document.querySelector('.seconds')
          this.minutesSpan = document.querySelector('.minutes');
          this.hoursSpan = document.querySelector('.hours'); */

        // do optymalizacji, potrzebna metoda w maine albo gdzieś indziej która wykonuje operacje na render areas może inna klasa niech coś z tym robi ? taka co dostaje argument 

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

        const _hoursArea = this.nextFeeding.querySelector('.end-hours')
        const _minutesArea = this.nextFeeding.querySelector('.end-minutes')
        const _secondsArea = this.nextFeeding.querySelector('.end-seconds')

        console.log(this.nextFeeding.childNodes);
        this.time.display([_date.getHours(), _date.getMinutes(), _date.getSeconds()], this.nextFeeding.querySelectorAll('span'));
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