const animations = new Animations();
const counter = new Counter();
const feedingList = new FeedingList();




const feed = () => {

    counter.init();
    counter.displayNextFeedingTime();
    feedingList.addLi();
    animations.init();

}
document.querySelector('.feed-btn').addEventListener('click', feed);


const reset = () => {

    counter.stopAndReset();
    feedingList.clearList();
    animations.deactivateNextFeeding();

}
document.querySelector('.reset').addEventListener('click', reset);