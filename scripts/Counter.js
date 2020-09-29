class Counter {


    render() {
        let second = 0;
        let minute = 0;
        let hour = 0;

        this.countingDown(minute, hour, second);


    }

    countingDown(minute, hour, second) {
        let time = 1000;

        if (this.indexInterval) {
            clearInterval(this.indexInterval);

        } // zastanowić się czy nie dodać tego jako osobną metodę w tej klasie
        this.indexInterval = setInterval(() => {
            second += 1;
            console.log(second);
            minute += 1;
            hour += 1;

        }, time);






    }

}