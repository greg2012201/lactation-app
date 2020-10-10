class FeedingList {

    constructor() {

        this.time = new Time();
        this.ul = document.querySelector('ul');
        /*   this.nowTime = nowTime;
          this.endTime = endTime; */

    }

    addLi() {
        const li = document.createElement('li');
        li.textContent = this.time.getNowTime(); //tu trzeba to zrobić inną metodą z tego
        this.ul.appendChild(li);
        console.log(li);


    }


}