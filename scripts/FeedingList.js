class FeedingList {

    constructor(nowTime, endTime) {

        this.ul = document.querySelector('ul');
        this.nowTime = nowTime;
        this.endTime = endTime;

    }

    addLi() {
        const li = document.createElement('li');
        li.textContent = this.endTime();
        this.ul.appendChild(li);
        console.log(li);


    }


}