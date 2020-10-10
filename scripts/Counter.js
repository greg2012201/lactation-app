class Counter {

    constructor() {

        this.time = new Time(); // zastanowić się czy tutaj to zastosować, być może zamiast tego lepsze będzie dziedziczenie ? 


    }

    init() {

        this.countingDown(this.time.getActualTimeinMilliseconds, this.time.getEndTime());
        // tutaj normalnie dopalić nowy licznik 

    }

    countingDown(ActualTimeinMilliseconds, endTime) {


        this.stopAndReset();

        this.indexInterval = setInterval(() => {
            this.getDifferenceBetweenDates(ActualTimeinMilliseconds(), endTime);
            this.print();



        }, 1000);



    }
    getDifferenceBetweenDates(nowTime, endTime) {


        this.hours = Math.floor((endTime / (1000 * 60 * 60) - nowTime / (1000 * 60 * 60)) % 24)

        // zmienić nazwy zmiennych na np. secondsToEnd
        this.minutes = Math.floor((endTime / (1000 * 60) - nowTime / (1000 * 60)) % 60);
        this.seconds = Math.floor((endTime / 1000 - nowTime / 1000) % 60);

        this.hours <= -1 ? this.hours = this.hours + 1 : this.hours;



    }

    print() {

        this.secondsSpan = document.querySelector('.seconds');
        this.minutesSpan = document.querySelector('.minutes');
        this.hoursSpan = document.querySelector('.hours');


        this.hours <= -1 ? this.hoursSpan.textContent = this.hours : false

        this.minutes <= -1 ? this.minutesSpan.textContent = this.minutes : false

        this.seconds <= -1 ? this.secondsSpan.textContent = this.seconds : false
        //czytelniej to tutaj bedzie pogrupować w  tradycyjnych instrukcjach warunkowych

        this.addZero([this.hours, this.minutes, this.seconds], [this.hoursSpan, this.minutesSpan, this.secondsSpan])

    }
    addZero(timeUnits, renderAreas) {



        for (let i = 0; i < renderAreas.length; i++) {
            let area = renderAreas[i];
            let unit = timeUnits[i];

            unit <= 9 ? area.textContent = `0${unit}` : area.textContent = unit
        }




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