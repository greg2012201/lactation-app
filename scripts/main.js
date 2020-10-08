const time = new Time();
const counter = new Counter(time.getNowTime, time.getEndTime);
const feedingList = new FeedingList(time.getNowTime, time.getEndHours);

// trzeba odzzielić klasy od siebie żeby o sobie nie wiedziały bo robią się przez to problemy


const feed = () => {

    // createAndAddElement() w niej animation animation;
    // 

    counter.init(); // dodać tutaj nazwę metody jako 'start'?
    feedingList.addLi();

}
document.querySelector('.feed-btn').addEventListener('click', feed);

const reset = () => {

    counter.stopAndReset();
}
document.querySelector('.reset').addEventListener('click', reset);