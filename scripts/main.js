const animations = new Animations();
const counter = new Counter();
const feedingList = new FeedingList();




const feed = () => {

    counter.init();
    counter.displayNextFeedingTime();
    feedingList.addLi();
    animations.init();


}
document.querySelector('.clock__start-button').addEventListener('click', feed);


const reset = () => {

    counter.stopAndReset();
    feedingList.clearList();
    animations.deactivateNextFeeding();

}
document.querySelector('.app__reset-icon').addEventListener('click', reset);