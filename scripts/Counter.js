class Counter {
    constructor() {
        this.secondsSpan = document.querySelector('.seconds');
        this.minutesSpan = document.querySelector('.minutes');
        this.hoursSpan = document.querySelector('.hours');

        /*   */
        // i tutaj powinien polecieć template scting
        /* https://developer.mozilla.org/pl/docs/Web/JavaScript/Referencje/Obiekty/Date */
        /* https://www.tutorialrepublic.com/faq/how-to-get-day-month-and-year-from-a-date-object-in-javascript.php */


        this.targetTime();

    }

    render() {

        this.countingDown();


    }

    countingDown() {

        let time = 1000;
        let seconds = this.second;
        let minutes = 60;
        let hours = 1; // może będzie tzreba to wrzucić w this żeby było  globalnie w obiekcie


        if (this.indexInterval) this.stopAndReset(seconds, minutes, hours);
        this.indexInterval = setInterval(() => {

            /* this.targetTime(); */

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
    targetTime() { // tutaj trzeba wyodrębnić dokładnie godzinę stopu



        /*    this.endTime = new Date(`${(this.hour +2)}:${this.minute}:${this.second}`);
           console.log(this.endTime); // tu jeszcze potrzebujemy pobrać datę w tak aby pasowało to wsszystko do argumentu



           console.log(this.endTime);
           return this.distanceTime = `${(this.hour +2)-this.hour}:${this.minute - this.minute}:${this.second - this.second}`; */ // rozbić to na osobne godziny minuty sekundy


        this.date = new Date();
        this.day = this.date.getDate();
        this.day = this.day < 10 ? `0${this.day}` : this.day;
        this.year = this.date.getFullYear();
        this.month = this.date.getMonth() + 1;

        this.month = this.month < 10 ? `0${this.month}` : this.month;
        this.hour = this.date.getHours();
        this.hour = this.hour < 10 ? `0${this.hour}` : this.hour;
        this.minute = this.date.getMinutes();
        this.minute = this.minute < 10 ? `0${this.minute}` : this.minute;
        this.second = this.date.getSeconds();
        this.second = this.second < 10 ? `0${this.second}` : this.second;

        /* console.log(`${this.year}-${this.day}-${this.month} ${this.hour +2}:${this.minute}:${this.second}`); */

        this.endTime = new Date(`${this.year}-${this.day}-${this.month} ${this.hour +2}:${this.minute}:${this.second}`).getTime();;










    }


}