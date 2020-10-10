class Time {


    getEndTime() {

        Date.prototype.addHours = function (h, s) {
            this.setTime(this.getTime() + (h * 60 * 60 * 1000) + s * 1000);
            return this;
        } // trzeba wykminić to w innej metodzie


        const date = new Date();
        date.addHours(2, 1);


        /* const day = date.getDate();
        const year = date.getFullYear();
        const month = date.getMonth() + 1; */ // nie wiem czy z month nie będzie tego samego problemu co niegdyś z godziną może można to załatwić warunkiem który mówi że jeśli miesiąc jest 13 to ustawia się go na 1 + 1 tylko czy wetedy nam rok przeskoczy ? 
        /*    const hour = date.getHours();
           const minute = date.getMinutes();
           const second = date.getSeconds(); */


        /* 
                const endTime = new Date(`${year}-${month}-${day} ${hour}:${minute}:${second +1}`).getTime(); */ // uwaga tu się trzeba zastanowić czy nie wtłoczyć Data().tolocaleString
        /* const endTime = new Date('2020-10-08 16:30').getTime(); */
        const endTime = new Date(date.toLocaleString()).getTime();


        console.log(date.toLocaleString());

        return endTime

    }
    getEndHours() { // metody wewnetrzne dla tego obiektu tylko 




        Date.prototype.addHours = function (h) {
            this.setTime(this.getTime() + (h * 60 * 60 * 1000));
            return this;
        } // trzeba wykminić to w innej metodzie


        const date = new Date();
        date.addHours(2);
        const hour = date.getHours();
        const minute = date.getMinutes();
        const second = date.getSeconds();;
        return `${hour}:${minute}:${second +1}`

    }
    getEndaDate() {

        const day = date.getDate();
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        return `${year}-${month}-${day} `
    }

    getNowHours() {

        // trzeba to zrobić żeby dawało godzinę aktualną dobrze przeliczoną 
    }
    getActualTimeInMilliseconds() {

        return new Date().getTime();
    } // to musi polecieć do klasy time
}