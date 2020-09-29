const feed = () => {

    // createAndAddElement() w niej animation animation;
    // 
    const li = document.createElement('li');
    li.classList.add('disActive')
    li.textContent = '00:00'
    document.querySelector('ul').appendChild(li);


    setTimeout(() => {
            li.classList.add('active');
        },
        10); // przenieść to trzeba na osobne zgadnienie związane z dodawaniem li i animacją

}




document.querySelector('.feed-btn').addEventListener('click', feed);