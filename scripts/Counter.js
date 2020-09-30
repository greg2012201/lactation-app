class Counter {
    constructor() {

    }

    render() {


        this.countingDown();


    }

    countingDown() {
        let time = 100;
        let seconds = 60;
        let minutes = 60;
        let hours = 2;
        if (this.indexInterval) this.stopAndReset();
        // zastanowić się czy nie dodać tego jako osobną metodę w tej klasie
        this.indexInterval = setInterval(() => {
            seconds -= 1;
            if (seconds == 1) seconds = 61;
            else if (seconds == 60) {
                minutes == 0;
                minutes -= 1
            } else if (minutes == 0) {
                hours -= 1;
            }


            console.log(seconds, minutes, hours);



        }, time);

    }

    stopAndReset() {

        clearInterval(this.indexInterval);



    }

}