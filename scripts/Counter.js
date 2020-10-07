class Counter {

    constructor(getNowTime, getEndTime) {

        this.getEndTime = getEndTime;
        this.getNowTime = getNowTime;
        this.secondsSpan = document.querySelector('.seconds');
        this.minutesSpan = document.querySelector('.minutes');
        this.hoursSpan = document.querySelector('.hours');

    }

    init() {

        this.countingDown(this.getEndTime());
        // tutaj normalnie dopalić nowy licznik 

    }

    countingDown(endTime) {

        const time = 1000;
        if (this.indexInterval) this.stopAndReset();
        this.indexInterval = setInterval(() => {
            this.getDifferenceBetweenDates(this.getNowTime(), endTime);
            this.print();


        }, time);



    }
    getDifferenceBetweenDates(nowTime, endTime) {


        this.hours = Math.floor((endTime / (1000 * 60 * 60) - nowTime / (1000 * 60 * 60)) % 24) /* + (2 * 60 * 60 * 1000); */

        // zmienić nazwy zmiennych na np. secondsToEnd
        this.minutes = Math.floor((endTime / (1000 * 60) - nowTime / (1000 * 60)) % 60);
        this.seconds = Math.floor((endTime / 1000 - nowTime / 1000) % 60);

        console.log(this.hours);


    }

    print() {

        this.secondsSpan = document.querySelector('.seconds');
        this.minutesSpan = document.querySelector('.minutes');
        this.hoursSpan = document.querySelector('.hours');

        this.seconds <= 9 ? this.secondsSpan.textContent = `0${this.seconds}` : this.secondsSpan.textContent = this.seconds;

        this.minutes <= 9 ? this.minutesSpan.textContent = `0${this.minutes}` : this.minutesSpan.textContent = this.minutes;

        this.hours <= 9 ? this.hoursSpan.textContent = `0${this.hours}` : this.hoursSpan.textContent = this.hours;

        // jest problem na przełomie dnia 
        console.log(this.hours, this.minutes, this.seconds);
        /* console.log(this.hours == -1 ? this.hours = 0 : this.hours, this.minutes, this.seconds); */

        // trzeba do bardziej zoptymalizować stworzyć może jakąś metodę co robi to wszystko na raz żeby kodu nie kopiować i zaobaczyć czy wtedy będzie bardziej optymalnie

    }

    stopAndReset() {

        clearInterval(this.indexInterval);
        this.seconds = 0;
        this.minutes = 0;
        this.hours = 2;
        this.print();
    }




}