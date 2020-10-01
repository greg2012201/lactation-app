class Counter {
    constructor() {

    }

    render() {

        this.countingDown();


    }

    countingDown() {
        let time = 1000;
        let seconds = 60;
        let minutes = 60;
        let hours = 1;

        if (this.indexInterval) this.stopAndReset();
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

        const secondsSpan = document.querySelector('.seconds');
        const minutesSpan = document.querySelector('.minutes');
        const hoursSpan = document.querySelector('.hours');

        seconds <= 9 ? secondsSpan.textContent = `0${seconds}` : secondsSpan.textContent = seconds;



        minutes <= 9 ? minutesSpan.textContent = `0${minutes}` : minutesSpan.textContent = minutes;

        hours <= 9 ? hoursSpan.textContent = `0${hours}` : hoursSpan.textContent = hours;

        if (seconds == 60) secondsSpan.textContent = '00'
        else if (minutes == 60) minutesSpan.textContent = '00';

        // trzeba do bardziej zoptymalizować stworzyć może jakąś metodę co robi to wszystko na raz żeby kodu nie kopiować i zaobaczyć czy wtedy będzie bardziej optymalnie

    }

    stopAndReset() {

        clearInterval(this.indexInterval);



    }


}