class Counter { // zastanawiam się czy lista nie powinna rozszerza countera
    constructor() {
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


        if (this.indexInterval) this.stopAndReset(); //<-- tutaj użyć ternery operator zamiast robić if else 
        this.indexInterval = setInterval(() => {
            this.getDifferenceBetweenDates(this.getNowTime(), endTime);
            this.print();


        }, time);



    }

    print() {

        this.secondsSpan = document.querySelector('.seconds');
        this.minutesSpan = document.querySelector('.minutes');
        this.hoursSpan = document.querySelector('.hours');

        this.seconds <= 9 ? this.secondsSpan.textContent = `0${this.seconds}` : this.secondsSpan.textContent = this.seconds;



        this.minutes <= 9 ? this.minutesSpan.textContent = `0${this.minutes}` : this.minutesSpan.textContent = this.minutes;

        this.hours <= 9 ? this.hoursSpan.textContent = `0${this.hours}` : this.hoursSpan.textContent = this.hours;

        /* if (seconds == 60) this.secondsSpan.textContent = '00'
        else if (minutes == 60) this.minutesSpan.textContent = '00'; */

        // trzeba do bardziej zoptymalizować stworzyć może jakąś metodę co robi to wszystko na raz żeby kodu nie kopiować i zaobaczyć czy wtedy będzie bardziej optymalnie

    }

    stopAndReset() {

        clearInterval(this.indexInterval);
        /* seconds = 60;
        minutes = 60;
        hours = 60; */

        this.secondsSpan.textContent = '00';
        this.minutesSpan.textContent = '00';
        this.hoursSpan.textContent = '02'; // można określić w obiekcie sztywno co jest automatycznie printowane


    }

    getEndTime() { // tutaj trzeba wyodrębnić dokładnie godzinę stopu


        const date = new Date(); // przypisać to jako funkcje prywatne dla metody ? 
        let day = date.getDate();
        day = day < 10 ? `0${day}` : day; // to może robić inna metoda tutaj i trzeba nad tym pomyśleć - powinna ona zwracać to co przerobi
        const year = date.getFullYear();
        let month = date.getMonth() + 1;
        month = month < 10 ? `0${month}` : month;
        let hour = date.getHours();
        hour = hour < 10 ? `0${hour}` : hour;
        let minute = date.getMinutes();
        minute = minute < 10 ? `0${minute}` : minute;
        let second = date.getSeconds();
        second = second < 10 ? `0${second}` : second;
        console.log(second);
        // dodawanie 0 powinno się odbywać raczej w renderze 


        const endTime = new Date(`${year}-${month}-${day} ${hour +2}:${minute}:${second +1}`).getTime();
        console.log(`${year}-${month}-${day} ${hour +2}:${minute}:${second}`);

        return endTime








    }

    getNowTime() {
        return new Date().getTime();
    } // dac do do maina ? 



    getDifferenceBetweenDates(nowTime, endTime) {



        this.hours = Math.floor((endTime / (1000 * 60 * 60) - nowTime / (1000 * 60 * 60)) % 24); // zmienić nazwy zmiennych na np. secondsToEnd
        this.minutes = Math.floor((endTime / (1000 * 60) - nowTime / (1000 * 60)) % 60);
        this.seconds = Math.floor((endTime / 1000 - nowTime / 1000) % 60);
        // zretunrować to do printa 
        console.log(this.seconds);
        return this.seconds

    }


}