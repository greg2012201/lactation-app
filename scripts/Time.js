class Time {


    getEndTime() { // to trzeba przenieść do time

        const date = new Date();
        const day = date.getDate();
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const hour = date.getHours();
        const minute = date.getMinutes();
        const second = date.getSeconds();

        const endTime = new Date(`${year}-${month}-${day} ${hour +2}:${minute}:${second +1}`).getTime();


        return endTime

    }

    getNowTime() {
        return new Date().getTime();
    } // to musi polecieć do klasy time




}