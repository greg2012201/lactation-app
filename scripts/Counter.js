class Counter {
    constructor() {
        this.secondsSpan = document.querySelector('.seconds');
        this.minutesSpan = document.querySelector('.minutes');
        this.hoursSpan = document.querySelector('.hours');

    }

    render() {

        this.countingDown();


    }

    countingDown() {
        let time = 1000;
        let seconds = 60;
        let minutes = 60;
        let hours = 1; // może będzie tzreba to wrzucić w this żeby było  globalnie w obiekcie


        if (this.indexInterval) this.stopAndReset(seconds, minutes, hours);
        this.indexInterval = setInterval(() => {
            seconds -= 1;
            if (seconds == 1) seconds = 60;
            else if (seconds == 59) {

                minutes -= 1
            } else if (minutes == 1) {
                minutes = 60;
                hours -= 1;
            }
            this.print(seconds, minutes, hours)

        }, time);

        // porównać z innymi zegarami albo minutnikami czy dobrze działa 

    }

    print(seconds, minutes, hours) {

        this.secondsSpan = document.querySelector('.seconds');
        this.minutesSpan = document.querySelector('.minutes');
        this.hoursSpan = document.querySelector('.hours');

        seconds <= 9 ? this.secondsSpan.textContent = `0${seconds}` : this.secondsSpan.textContent = seconds;



        minutes <= 9 ? this.minutesSpan.textContent = `0${minutes}` : this.minutesSpan.textContent = minutes;

        hours <= 9 ? this.hoursSpan.textContent = `0${hours}` : this.hoursSpan.textContent = hours;

        if (seconds == 60) this.secondsSpan.textContent = '00'
        else if (minutes == 60) this.minutesSpan.textContent = '00';

        // trzeba do bardziej zoptymalizować stworzyć może jakąś metodę co robi to wszystko na raz żeby kodu nie kopiować i zaobaczyć czy wtedy będzie bardziej optymalnie

    }

    stopAndReset(seconds, minutes, hours) {

        clearInterval(this.indexInterval);
        seconds = 60;
        minutes = 60;
        hours = 60;

        this.secondsSpan.textContent = '00';
        this.minutesSpan.textContent = '00';
        this.hoursSpan.textContent = '02'; // można określić w obiekcie sztywno co jest automatycznie printowane


    }


}