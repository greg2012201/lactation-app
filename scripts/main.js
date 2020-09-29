const feed = () => {

    // createAndAddElement();
    const li = document.createElement('li');
    li.textContent = '00:00'
    document.querySelector('ul').appendChild(li);



}




document.querySelector('.feed-btn').addEventListener('click', feed);