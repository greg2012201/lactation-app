const animations = new Animations();
const counter = new Counter();
const feedingList = new FeedingList(); // tu argumentów nie bedzie wszystko ma byc w funkcji feed rozpisane 

// trzeba odzzielić klasy od siebie żeby o sobie nie wiedziały bo robią się przez to problemy


const feed = () => {
    // tu napisac wydarzenia kazdego obiektu 
    // createAndAddElement() w niej animation animation;
    // 

    counter.init(); // dac time do main js albo przebudowac kluczowe zdazenia w ibiekcie i wykonac je w main.js 
    counter.displayNextFeedingTime();
    feedingList.addLi();


    new Animations().init();

}
document.querySelector('.feed-btn').addEventListener('click', feed);


const reset = () => {

    counter.stopAndReset();
    feedingList.clearList();
    animations.deactivateNextFeeding();

}
document.querySelector('.reset').addEventListener('click', reset);