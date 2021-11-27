function createHeart () {
    const container = document.createElement('div');
    container.classList.add('heart-container');
    container.style.left = Math.random() * 100 + 'vw';
    container.style.animationDuration = Math.random() * 2 + 3 + "s";
    
    document.body.appendChild(container);


    const heart = document.createElement('div');
    heart.classList.add('heart');

    container.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 7000);
}

setInterval(createHeart, 300);