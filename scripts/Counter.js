class Counter {

    constructor(getNowTime, getEndTime /* zrobić tak ? */ ) {

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
        this.hours = Math.floor((endTime / (1000 * 60 * 60) - nowTime / (1000 * 60 * 60)) % 24); // zmienić nazwy zmiennych na np. secondsToEnd
        this.minutes = Math.floor((endTime / (1000 * 60) - nowTime / (1000 * 60)) % 60);
        this.seconds = Math.floor((endTime / 1000 - nowTime / 1000) % 60);
        return this.seconds

    }

    print() {

        this.secondsSpan = document.querySelector('.seconds');
        this.minutesSpan = document.querySelector('.minutes');
        this.hoursSpan = document.querySelector('.hours');

        this.seconds <= 9 ? this.secondsSpan.textContent = `0${this.seconds}` : this.secondsSpan.textContent = this.seconds;

        this.minutes <= 9 ? this.minutesSpan.textContent = `0${this.minutes}` : this.minutesSpan.textContent = this.minutes;

        this.hours <= 9 ? this.hoursSpan.textContent = `0${this.hours}` : this.hoursSpan.textContent = this.hours;

        // trzeba do bardziej zoptymalizować stworzyć może jakąś metodę co robi to wszystko na raz żeby kodu nie kopiować i zaobaczyć czy wtedy będzie bardziej optymalnie

    }

    stopAndReset() {

        clearInterval(this.indexInterval);
        this.seconds = 0;
        this.minutes = 0;
        this.hours = 2;
        this.print();

        /*    this.secondsSpan.textContent = this.seconds;
           this.minutesSpan.textContent = this.minutes;
           this.hoursSpan.textContent = this.hours; */ // można określić w obiekcie sztywno co jest automatycznie printowane


    }

    /*  getEndTime() { // to trzeba przenieść do time

         const date = new Date();
         const day = date.getDate();
         const year = date.getFullYear();
         const month = date.getMonth() + 1;
         const hour = date.getHours();
         const minute = date.getMinutes();
         const second = date.getSeconds();

         const endTime = new Date(`${year}-${month}-${day} ${hour +2}:${minute}:${second +1}`).getTime();


         return endTime

     }

     getNowTime() {
         return new Date().getTime();
     } // to musi polecieć do klasy time */



}