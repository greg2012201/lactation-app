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
        // będzie tutaj użyta metoda do getLocal date jako obiekt

        const endTime = new Date(`${year}-${month}-${day} ${hour}:${minute}:${second}`).getTime();



        return endTime;

    }


    dsiplayEndTime(renderArea) {

        const date = this.initNewDate();
        date.addHours(2, 0);





        return this.displayTest([date.getHours(), date.getMinutes(), date.getSeconds()], renderArea) //<-- będzie tutuaj metoda na local time jeszcze osobna, zwraca ona obiekt prosty
        // return timeToDisplay;

        /* const hoursToDsplay = this.display(hour);
        const minutesToDsplay = this.display(minute);
        const secondsToDsplay = this.display(second);
        return `${hoursToDsplay}:${minutesToDsplay}:${secondsToDsplay}`; */

    }
    getLocalDate() {
        const date = this.initNewDate();
        return {
            year: date.getFullYear(),
            month: date.getMonth() + 1,
            day: date.getDate(),
            hour: date.getHours(),
            minute: date.getMinutes(),
            second: date.getSeconds(),
        }

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

        })

        /*  return dsplUnits; */
        return this.negativeNumbersBehavior(dsplUnits);
    }

    negativeNumbersBehavior(timeUnits) {

        let dsplUnits = []
        let hours = timeUnits[0];
        let minutes = timeUnits[1];
        let seconds = timeUnits[2];



        if (minutes === -60) {
            minutes = '00';
            hours -= 1
        } /* else { */


        seconds === -60 ? seconds = '00' : seconds;
        seconds <= -1 ? minutes += 1 : minutes;
        minutes === 0 ? minutes = '00' : minutes;
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