class Counter {

    constructor() {

        this.time = new Time(); // zastanowić się czy tutaj to zastosować, być może zamiast tego lepsze będzie dziedziczenie ? 
        this.nextFeeding = document.querySelector('.next-feeding');

    }

    init() {

        this.countingDown(this.time.getActualTimeInMilliseconds, this.time.getEndTimeInMilliseconds());
        // tutaj normalnie dopalić nowy licznik 

    }

    countingDown(ActualTimeInMilliseconds, endTimeInMilliseconds) {


        this.stopAndReset();

        this.indexInterval = setInterval(() => {
            this.getDifferenceBetweenDates(ActualTimeInMilliseconds(), endTimeInMilliseconds);
            this.print();




        }, 1000);



    }
    getDifferenceBetweenDates(nowTime, endTime) {


        this.hours = Math.floor((endTime / (1000 * 60 * 60) - nowTime / (1000 * 60 * 60)) % 24)
        console.log(this.hours);
        // zmienić nazwy zmiennych na np. secondsToEnd
        this.minutes = Math.floor((endTime / (1000 * 60) - nowTime / (1000 * 60)) % 60);
        this.seconds = Math.floor((endTime / 1000 - nowTime / 1000) % 60);

        this.hours <= -1 ? this.hours = this.hours + 1 : this.hours;



    }

    print() {

        this.secondsSpan = document.querySelector('.seconds');
        this.minutesSpan = document.querySelector('.minutes');
        this.hoursSpan = document.querySelector('.hours');

        console.log(this.hours, this.minutes, this.seconds);


        this.zerosAndNegativeNumbersDisplay([this.hours, this.minutes, this.seconds], [this.hoursSpan, this.minutesSpan, this.secondsSpan]);


    }
    zerosAndNegativeNumbersDisplay(timeUnits, renderAreas) {



        for (let i = 0; i < renderAreas.length; i++) {
            let area = renderAreas[i];
            let unit = timeUnits[i];

            unit <= 9 ? area.textContent = `0${unit}` : area.textContent = unit;

            unit <= -1 ? area.textContent = unit : false
        }
    }

    displayNextFeedingTime() {
        /*  console.log(this.time.getDate().addHours(2, 1)); */
        this.nextFeeding.textContent = this.time.getLocalTime(2); // tutaj jest jescze mały problem z tym 
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