class FeedingList {

    constructor() {

        this.time = new Time();
        this.ul = document.querySelector('ul');

        /* this.date = new Date(); */
        /*   this.nowTime = nowTime;
          this.endTime = endTime; */

    }

    addLi() {
        const li = document.createElement('li');
        li.textContent = this.time.getLocalTime(); //tu trzeba to zrobić inną metodą z tego
        this.ul.appendChild(li);
        console.log(li);


    }



}