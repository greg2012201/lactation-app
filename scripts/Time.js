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

        // this.display({...})
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
        // tutaj umieścić wszystko co potrzeba do warunków jako argumenty zrobić obiekt prymitywny wtedy metoda ta stanie się reużywalna niech ta metoda modyfikuje zawartośći w zmiennych a nie bezpośrednio na stronie, albo pozostać na tablicach bo nie wiadomo czy się to wszytsko bez dublowania kodu zrobi UWAGA MOŻNA JESZCZE STOSOWAĆ PĘTLE PO OBIEKTACH TO WYPRÓBOWAĆ    /* https://kursjs.pl/kurs/obiekty/obiekty.php */

        return unit <= 9 ? `0${unit}` : unit;
    }
    displayTest(timeUnits, renderArea = null) {
        // tutaj umieścić wszystko co potrzeba do warunków jako argumenty zrobić obiekt prymitywny wtedy metoda ta stanie się reużywalna niech ta metoda modyfikuje zawartośći w zmiennych a nie bezpośrednio na stronie, albo pozostać na tablicach bo nie wiadomo czy się to wszytsko bez dublowania kodu zrobi UWAGA MOŻNA JESZCZE STOSOWAĆ PĘTLE PO OBIEKTACH TO WYPRÓBOWAĆ    /* https://kursjs.pl/kurs/obiekty/obiekty.php */
        timeUnits = this.addZero(timeUnits);
        console.log(timeUnits);
        // this.negativeNumbersBehavior();
        return this.render(renderArea, timeUnits); //chyba że obiekt zwrócić ? 


    }

    addZero(units) {

        let dsplUnits;
        units.forEach((unit) => {
            unit <= 9 ? unit = `0${unit}` : unit;
            return dsplUnits = unit;
        })

        /*  return dsplUnits; */
        return this.negativeNumbersBehavior(dsplUnits);
    }

    negativeNumbersBehavior(timeUnits) {

        // kod 
        return timeUnits
        // return wynik

    }

    render(renderArea) {

    }
}