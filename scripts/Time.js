class Time {


    initNewDate() {
        Date.prototype.addHours = function (h, s) {
            this.setTime(this.getTime() + (h * 60 * 60 * 1000) + s * 1000);
            return this;
        }

        return new Date();

    }


    getEndTimeInMilliseconds() {

        const date = this.initNewDate().addHours(2, 1);


        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const hour = date.getHours();
        const minute = date.getMinutes();
        const second = date.getSeconds();

        const endTime = new Date(`${year}-${month}-${day} ${hour}:${minute}:${second}`).getTime();



        return endTime;

    }


    getLocalTime(numberOfHoursAdded) {

        const date = this.initNewDate();
        if (numberOfHoursAdded) date.addHours(numberOfHoursAdded, 0);

        const hour = date.getHours();
        const minute = date.getMinutes();
        const second = date.getSeconds();



        const timeToDisplay = {
            hours: this.display(hour),
            minutes: this.display(minute),
            seconds: this.display(second),
        }
        return timeToDisplay;

        /* const hoursToDsplay = this.display(hour);
        const minutesToDsplay = this.display(minute);
        const secondsToDsplay = this.display(second);
        return `${hoursToDsplay}:${minutesToDsplay}:${secondsToDsplay}`; */

    }

    getActualTimeInMilliseconds() {

        return new Date().getTime();
    }

    display(unit) {
        // tutaj umieścić wszystko co potrzeba do warunków jako argumenty zrobić obiekt prymitywny wtedy metoda ta stanie się reużywalna

        return unit <= 9 ? `0${unit}` : unit;
    }
}