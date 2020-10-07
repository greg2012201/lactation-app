const time = new Time();
const counter = new Counter(time.getNowTime, time.getEndTime);



const feed = () => {

    // createAndAddElement() w niej animation animation;
    // 

    counter.init();

}
document.querySelector('.feed-btn').addEventListener('click', feed);

const reset = () => {

    counter.stopAndReset();
}
document.querySelector('.reset').addEventListener('click', reset);