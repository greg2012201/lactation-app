const feed = () => {

    // createAndAddElement() w niej animation animation;
    // 
    const li = document.createElement('li');
    li.classList.add('disActive')
    li.textContent = '00:00'
    document.querySelector('ul').appendChild(li);


}




document.querySelector('.feed-btn').addEventListener('click', feed);