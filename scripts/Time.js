class Time {


    initNewDate() {
        Date.prototype.addHours = function (h, s) {
            this.setTime(this.getTime() + (h * 60 * 60 * 1000) + s * 1000);
            return this;
        }

        return new Date();

    }


    getEndTimeInMilliseconds() {
        // endTime niech sobi jednak przetworzy w counterze
        //albo druga opcja to użyć tu display 
        const date = this.initNewDate().addHours(2, 1);
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const hour = date.getHours();
        const minute = date.getMinutes();
        const second = date.getSeconds();

        const endTime = new Date(`${year}-${month}-${day} ${hour-2}:${minute}:${second}`).getTime();



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

        return this.displayTest([date.getHours(), date.getMinutes(), date.getSeconds()])
        // return timeToDisplay;

        /* const hoursToDsplay = this.display(hour);
        const minutesToDsplay = this.display(minute);
        const secondsToDsplay = this.display(second);
        return `${hoursToDsplay}:${minutesToDsplay}:${secondsToDsplay}`; */

    }

    getActualTimeInMilliseconds() {

        return new Date().getTime();
    }

    display(unit) {
        // tutaj umieścić wszystko co potrzeba do warunków jako argumenty zrobić obiekt prymitywny wtedy metoda ta stanie się reużywalna niech ta metoda modyfikuje zawartośći w zmiennych a nie bezpośrednio na stronie, albo pozostać na tablicach bo nie wiadomo czy się to wszytsko bez dublowania kodu zrobi UWAGA MOŻNA JESZCZE STOSOWAĆ PĘTLE PO OBIEKTACH TO WYPRÓBOWAĆ    /* https://kursjs.pl/kurs/obiekty/obiekty.php */

        return unit <= 9 ? `0${unit}` : unit;
    }
    displayTest(timeUnits, renderArea = null) {

        const outputUnits = this.zeroAndNegativeNumbersBehavior(timeUnits);

        // this.negativeNumbersBehavior();

        return this.render(renderArea, outputUnits); //chyba że obiekt zwrócić ? 


    }

    zeroAndNegativeNumbersBehavior(units) {

        let dsplUnits = [];
        units.forEach((unit) => {
            unit <= 9 && unit >= 0 ? unit = `0${unit}` : unit;
            return dsplUnits.push(unit);
            // musi pushować do innej tablicy
        })

        /*  return dsplUnits; */
        return this.negativeNumbersBehavior(dsplUnits);
    }

    negativeNumbersBehavior(timeUnits) {

        let dsplUnits = [];
        let hours = timeUnits[0];
        let minutes = timeUnits[1];
        let seconds = timeUnits[2];
        /* let dsplUnits = {
            hours: timeUnits[0],
            minutes: timeUnits[1],
            seconds: timeUnits[2],
        } */


        if (minutes === -60) {
            minutes = '00';
        } else if (minutes === '00') hours = hours - 1;


        seconds === -60 ? seconds = '00' : seconds;
        seconds <= -1 ? minutes += 1 : minutes;
        minutes === 0 ? minutes = '00' : minutes;


        dsplUnits.push(hours, minutes, seconds)
        console.log(dsplUnits);

        return dsplUnits


    }

    render(renderArea, timeUnits) {

        return timeUnits

    }
}