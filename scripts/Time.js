class Time {


    getEndTime() {

        Date.prototype.addHours = function (h) {
            this.setTime(this.getTime() + (h * 60 * 60 * 1000));
            return this;
        } // trzeba wykminić to w innej metodzie


        const date = new Date();
        date.addHours(2);

        const day = date.getDate();
        const year = date.getFullYear();
        const month = date.getMonth() + 1; // nie wiem czy z month nie będzie tego samego problemu co niegdyś z godziną może można to załatwić warunkiem który mówi że jeśli miesiąc jest 13 to ustawia się go na 1 + 1 tylko czy wetedy nam rok przeskoczy ? 
        const hour = date.getHours();
        const minute = date.getMinutes();
        const second = date.getSeconds();
        console.log(date.getHours());
        const endTime = new Date(`${year}-${month}-${day} ${hour}:${minute}:${second +1}`).getTime();


        return endTime

    }

    getNowTime() {
        return new Date().getTime();
    } // to musi polecieć do klasy time




}