class Counter {

    constructor() {

        this.time = new Time();
        this.nextFeeding = document.querySelector('.next-feeding');

    }

    init() {

        this.countingDown(this.time.getActualTimeInMilliseconds, this.time.getEndTimeInMilliseconds());


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
            console.log(timeUnits[1]);

        } // try to forEach method


        for (let i = 1; i < renderAreas.length - 1; i++) {
            const hoursArea = renderAreas[0]
            const minutesArea = renderAreas[1];
            const secondsArea = renderAreas[2];
            const hours = timeUnits[0];
            const minutes = timeUnits[1];
            const seconds = timeUnits[2];


            if (minutes === -60) {
                minutesArea.textContent = '00';
                minutesArea.textContent == '00' ?
                    hoursArea.textContent = hours - 1 : false
            } else if (seconds === -60) secondsArea.textContent = '00';
            else if (minutesArea.textContent == '00' && minutes === -60) hoursArea.textContent = hours - 1

        }
        // jeszcze trzeba sprawdzić jak się zachowują godziny przy dojściu do 24


    }

    displayNextFeedingTime() {

        this.nextFeeding.textContent = this.time.getLocalTime(2);
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