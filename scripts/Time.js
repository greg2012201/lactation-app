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



        const hoursToDsplay = this.display(hour);
        const minutesToDsplay = this.display(minute);
        const secondsToDsplay = this.display(second);
        return `${hoursToDsplay}:${minutesToDsplay}:${secondsToDsplay}`

    }

    getActualTimeInMilliseconds() {

        return new Date().getTime();
    }

    display(unit) {

        return unit <= 9 ? `0${unit}` : unit;
    }
}