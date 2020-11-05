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
    zerosAndNegativeNumbersDisplay(timeUnits, renderAreas) {



        renderAreas.forEach((area, i) => {

            const unit = timeUnits[i];

            unit <= 9 ? area.textContent = `0${unit}` : area.textContent = unit;




        });


        this.negativeNumbersBehavior(timeUnits, renderAreas)

    }

    negativeNumbersBehavior(timeUnits, renderAreas) {



        for (let i = 0; i < renderAreas.length; i++) { // zrobić tutaj optymalizację i jakoś to zautomatyzować
            const hoursArea = renderAreas[0]
            const minutesArea = renderAreas[1];
            const secondsArea = renderAreas[2];
            const hours = timeUnits[0];
            const minutes = timeUnits[1];
            const seconds = timeUnits[2];

            timeUnits[i] <= -1 ? renderAreas[i].textContent = timeUnits[i] : null;

            if (minutes === -60) { // dać tu return pd razu przed blokiem kodu ?? 
                minutesArea.textContent = '00';
                minutesArea.textContent == '00' ?
                    hoursArea.textContent = hours - 1 : null;


            } else null;
            if (seconds === -60) {
                secondsArea.textContent = '00';


            } else null;
            if (seconds <= -1) {

                minutesArea.textContent = minutes + 1

            } else null;
            minutesArea.textContent == 0 ? minutesArea.textContent = '00' : null;

            // sprawdzić warunki czy się nadają minutes i seconds === -60 można ujednolicić ?

        }
        // jeszcze trzeba sprawdzić jak się zachowują godziny przy dojściu do 24

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