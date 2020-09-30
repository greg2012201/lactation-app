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
        let hours = 2;
        if (this.indexInterval) this.stopAndReset();
        // zastanowić się czy nie dodać tego jako osobną metodę w tej klasie
        this.indexInterval = setInterval(() => {
            seconds -= 1;
            if (seconds == 1) seconds = 60;
            else if (seconds == 59) {
                minutes == 0;
                minutes -= 1
            } else if (minutes == 0) {
                hours -= 1;
            }
            this.print(seconds, minutes, hours)
            console.log(seconds, minutes, hours);
        }, time);



    }

    print(seconds, minutes, hours) {
        console.log(seconds);
        const secondsSpan = document.querySelector('.seconds');
        const minutesSpan = document.querySelector('.minutes');
        const hoursSpan = document.querySelector('.hours');

        seconds <= 9 ? secondsSpan.textContent = `0${seconds}` : secondsSpan.textContent = seconds;

        minutes <= 9 ? minutesSpan.textContent = `0${minutes}` : minutesSpan.textContent = minutes;

        hours <= 9 ? hoursSpan.textContent = `0${hours}` : hoursSpan.textContent = hours;

        // trzeba do bardziej zoptymalizować

    }

    stopAndReset() {

        clearInterval(this.indexInterval);



    }


}