class Counter {
    constructor() {
        this.secondsSpan = document.querySelector('.seconds');
        this.minutesSpan = document.querySelector('.minutes');
        this.hoursSpan = document.querySelector('.hours');


        // i tutaj powinien polecieć template scting
        /* https://developer.mozilla.org/pl/docs/Web/JavaScript/Referencje/Obiekty/Date */
        /* https://www.tutorialrepublic.com/faq/how-to-get-day-month-and-year-from-a-date-object-in-javascript.php */




    }

    render() {

        this.countingDown(this.getEndTime());
    }

    countingDown(endTimeAndNowTime) {




        let time = 1000;
        let seconds = this.second;
        let minutes = 60;
        let hours = 1; // może będzie tzreba to wrzucić w this żeby było  globalnie w obiekcie


        if (this.indexInterval) this.stopAndReset(seconds, minutes, hours);
        this.indexInterval = setInterval(() => {

            /* this.targetTime(); */
            this.getDifferenceBetweenDates(this.getNowTime(), endTimeAndNowTime);
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
        // zadtanowić się nad napisaniem funkcji odpowiedzialnej za walidacje godzin sekund dni minut itp aby dodawało 0;

        console.log(minute);
        const endTime = new Date(`${year}-${month}-${day} ${hour +2}:${minute}:${second}`).getTime();


        return endTime








    }

    getNowTime() {
        return new Date().getTime();
    }



    getDifferenceBetweenDates(nowTime, endTime) {



        let hours = Math.floor((endTime / (1000 * 60 * 60) - nowTime / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((endTime / (1000 * 60) - nowTime / (1000 * 60)) % 60);
        const seconds = Math.floor((endTime / 1000 - nowTime / 1000) % 60);

        console.log(hours, minutes, seconds);


    }


}