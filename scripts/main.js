const counterx = new Counter;


const feed = () => {

    // createAndAddElement() w niej animation animation;
    // 

    counterx.init();

}

document.querySelector('.feed-btn').addEventListener('click', feed);

const reset = () => {

    counterx.stopAndReset();
}
document.querySelector('.reset').addEventListener('click', reset);