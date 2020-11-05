class Time {


    initNewDate(param = null) {

        Date.prototype.addHours = function (hours, seconds) {
            this.setTime(this.getTime() + (hours * 60 * 60 * 1000) + seconds * 1000);
            return this;
        }

        return param == null ? new Date() : new Date(param)


    }


    getEndTimeInMilliseconds() {

        const getLocalDate = this.getLocalDate();
        return this.initNewDate(`${getLocalDate.years}-${getLocalDate.months}-${getLocalDate.days} ${getLocalDate.hours}:${getLocalDate.minutes}:${getLocalDate.seconds}`).addHours(2, 1).getTime();

    }


    dsiplayEndTime(renderArea) {

        const date = this.initNewDate().addHours(2, 0);
        return this.display([date.getHours(), date.getMinutes(), date.getSeconds()], renderArea);

    }
    getLocalDate() {
        const date = this.initNewDate();
        return {
            years: date.getFullYear(),
            months: date.getMonth() + 1,
            days: date.getDate(),
            hours: date.getHours(),
            minutes: date.getMinutes(),
            seconds: date.getSeconds(),
        }

    }

    getActualTimeInMilliseconds() {

        return new Date().getTime();
    }


    display(timeUnits, renderArea = null) {

        const outputUnits = this.zeroAndNegativeNumbersBehavior(timeUnits);

        // this.negativeNumbersBehavior();

        return this.render(renderArea, outputUnits); //chyba że obiekt zwrócić ? 


    }

    zeroAndNegativeNumbersBehavior(units) {

        const dsplUnits = [];
        units.forEach((unit) => {
            unit <= 9 && unit >= 0 ? unit = `0${unit}` : unit;

            return dsplUnits.push(unit);

        })


        return this.negativeNumbersBehavior(dsplUnits);
    }

    negativeNumbersBehavior(timeUnits) {

        let dsplUnits = []
        let hours = timeUnits[0];
        let minutes = timeUnits[1];
        let seconds = timeUnits[2];

        // zrobić funkcję addZero ? w środku ? 

        if (minutes === -60) {
            minutes = '00'; // uwaga te stringi pochywcić w zmienną albo zrobić to przez konkatenacje przykład minutes-(+)=`0${minutes}`
            hours -= 1
        } /* else { */


        seconds === -60 ? seconds = '00' : seconds;
        seconds <= -1 ? minutes += 1 : minutes;
        minutes === 0 ? minutes = '00' : minutes;
        hours <= -1 ? hours = hours + 1 : hours;
        /* } */ // sprawdzić to czy działa


        dsplUnits.push(hours, minutes, seconds)


        return dsplUnits


    }

    render(renderArea, timeUnits) {


        if (renderArea === null) return
        else renderArea.forEach((area, i) => area.textContent = timeUnits[i]);
        return timeUnits

    }
}