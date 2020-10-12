class Time { // to wyleci najprawdopodobniej do countera bo już jest to martwy punkt 


    getDate() {
        Date.prototype.addHours = function (h, s) {
            this.setTime(this.getTime() + ((h - 1) * 60 * 60 * 1000) + s * 1000);
            return this;
        } // trzeba wykminić to w innej metodzie

        return new Date();

    }


    getEndTimeInMilliseconds() {

        const date = this.getDate();
        console.log(this.getDate());

        date.addHours(2, 1);


        /* const day = date.getDate();
        const year = date.getFullYear();
        const month = date.getMonth() + 1; */ // nie wiem czy z month nie będzie tego samego problemu co niegdyś z godziną może można to załatwić warunkiem który mówi że jeśli miesiąc jest 13 to ustawia się go na 1 + 1 tylko czy wetedy nam rok przeskoczy ? 
        /*    const hour = date.getHours();
           const minute = date.getMinutes();
           const second = date.getSeconds(); */



        /* const endTime = new Date(`${year}-${month}-${day} ${hour}:${minute}:${second +1}`).getTime(); */ // uwaga tu się trzeba zastanowić czy nie wtłoczyć Data().tolocaleString
        /* const endTime = new Date('11.10.2020 01:10:52').getTime(); */
        /*  console.log(date.toLocaleString()); */

        const endTime = new Date(date.toLocaleString()).getTime(); // do wywalenia bo się rozjeżdża względem innych 

        /* const endTime = new Date('2020-10-11 00:30').getTime(); */
        /* const endTime = date.toLocaleString() */
        console.log(endTime);
        return endTime;


    }


    getLocalTime(addUnits) { // metody wewnetrzne dla tego obiektu tylko 
        const date = this.getDate();
        if (addUnits) date.addHours(addUnits, 0);

        // powinno się odwoływać to this.date z konstruktora
        const hour = date.getHours();
        const minute = date.getMinutes();
        const second = date.getSeconds();

        const hoursToDsplay = this.display(hour);
        const minutesToDsplay = this.display(minute);
        const secondsToDsplay = this.display(second);



        return `${hoursToDsplay}:${minutesToDsplay}:${secondsToDsplay}`

    }
    /*   getEndaDate() {

          const day = date.getDate();
          const year = date.getFullYear();
          const month = date.getMonth() + 1;
          return `${year}-${month}-${day} `
      } */


    getActualTimeInMilliseconds() {

        return new Date().getTime();
    } // to musi polecieć do klasy time

    display(unit) {

        return unit <= 9 ? `0${unit}` : unit;



    }
}