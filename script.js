
const box = document.querySelector('.box');

function getRandomPosition() {  //this is return random x and y cordinates
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 100);
    return {x,y};
}

function moveBox() {  //setting the box position
    const {x,y} = getRandomPosition();
    box.style.left = x + "px";
    box.style.top = y + "px";
}

box.addEventListener('mouseenter', moveBox);
moveBox()   //for initial position