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
        console.log(timeUnits);
        const outputUnits = this.zeroAndNegativeNumbersBehavior(timeUnits);

        return this.render(renderArea, outputUnits); //chyba że obiekt zwrócić ? 
        ;

    }

    zeroAndNegativeNumbersBehavior(units) {

        return units.map((unit) => {

            if (unit <= -1) {

                unit += 1
            }

            return unit <= 9 && unit >= 0 ? unit = `0${unit}` : unit;


        })

    }


    render(renderArea, timeUnits) {


        if (renderArea === null) return
        else renderArea.forEach((area, i) => {
            area.textContent = timeUnits[i];
        });
        return timeUnits

    }
}