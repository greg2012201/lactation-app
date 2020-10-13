class Time { // to wyleci najprawdopodobniej do countera bo już jest to martwy punkt 


    initNewDate() {
        Date.prototype.addHours = function (h, s) {
            this.setTime(this.getTime() + (h * 60 * 60 * 1000) + s * 1000);
            return this;
        } // trzeba wykminić to w innej metodzie

        return new Date();

    }


    getEndTimeInMilliseconds() {

        const date = this.initNewDate().addHours(2, 1);




        /*  date.addHours(2, 1);  */


        /*  const day = this.initNewDate().getDate();
         const year = this.initNewDate().getFullYear();
         const month = this.initNewDate().getMonth() + 1; // nie wiem czy z month nie będzie tego samego problemu co niegdyś z godziną może można to załatwić warunkiem który mówi że jeśli miesiąc jest 13 to ustawia się go na 1 + 1 tylko czy wetedy nam rok przeskoczy ? 
         const hours = this.getFormatedTime(this.initNewDate().addHours(2, 1))[0]; // cyferki do bani bo się mapyb robią 
         const minutes = this.getFormatedTime(this.initNewDate())[1];
         const seconds = this.getFormatedTime(this.initNewDate())[2]; */


        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();

        const endTime = new Date(`${year}-${month}-${day} ${hours}:${minutes}:${seconds}`).getTime(); // uwaga tu się trzeba zastanowić czy nie wtłoczyć Data().tolocaleString
        /*  const endTime = new Date('11.10.2020 23:10:52').getTime(); */
        /*  console.log(date.toLocaleString()); */

        /* const endTime = new Date(date.toLocaleString()).getTime(); */ // do wywalenia bo się rozjeżdża względem innych 

        /* const endTime = new Date('2020-10-13 23:00').getTime(); */
        /* const endTime = date.toLocaleString() */

        return endTime;


    }


    getLocalTime(addUnits) { // tutaj zmiana nazwy tej metody 
        const date = this.initNewDate();
        if (addUnits) date.addHours(addUnits, 0);

        // powinno się odwoływać to this.date z konstruktora
        const hour = date.getHours();
        const minute = date.getMinutes();
        const second = date.getSeconds(); // to trzeba zrboić w innej metodzie żeby było  reużywalne



        const hoursToDsplay = this.display(hour);
        const minutesToDsplay = this.display(minute);
        const secondsToDsplay = this.display(second);


        /* console.log(this.getFormatedTime()[1]); */
        return `${hoursToDsplay}:${minutesToDsplay}:${secondsToDsplay}`

    }

    getFormatedTime(date) {


        /* const date = getDate(); */

        const year = date.getFullYear();
        const day = date.getDate();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();

        return [hours, minutes, seconds]

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