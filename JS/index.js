document.addEventListener("keydown", event => {
    if (event.key === "ArrowLeft" || event.key === "A" || event.key === "a") { moveLeft(); }
    if (event.key === "ArrowRight" || event.key === "D" || event.key == "d") { moveRight(); }
});

let character = document.getElementById("character");
let image = document.getElementById("boy");
let button = document.getElementById("resetButton");
let gameOver = document.getElementById("gameOver");

function myUpdate() {
    setInterval(() => {
        if (image.src.match('leftrun.png')) {
            image.src = 'rightrun.png';
        } else {
            image.src = 'leftrun.png';
        }
    }, 300)
}

function moveLeft() {
    let left = parseInt(window.getComputedStyle(character).getPropertyValue('left'));
    left -= 100;
    if (left >= 0) {
        character.style.left = left + 'px';
    }
}

function moveRight() {
    let left = parseInt(window.getComputedStyle(character).getPropertyValue('left'));
    left += 100;
    if (left < 300) {
        character.style.left = left + 'px';
    }
}

let block = document.getElementById('block');
let counter = 0;
let slide = 1.5;

block.addEventListener('animationiteration', () => {
    let random = Math.floor(Math.random() * 3);
    left = random * 100;
    block.style.left = left + 'px';
    counter++;
    document.getElementById('puntos').innerHTML = counter;
    slide -= 0.01;
    console.log(slide);
    block.style.animation = 'slide ' + slide + 's infinite';
    block.style.animationTimingFunction = 'linear'
})


setInterval(function () {
    let characterLeft = parseInt(window.getComputedStyle(character).getPropertyValue('left'));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'));
    let blockTop = parseInt(window.getComputedStyle(block).getPropertyValue('top'));

    if (characterLeft == blockLeft && blockTop < 500 && blockTop > 165) {
        block.style.animation = 'none';
        button.style.visibility = 'visible';
        character.style.visibility = 'hidden';
        gameOver.style.visibility = 'visible';
    }
}, 1);

document.getElementById('right').addEventListener('touchstart', moveRight);
document.getElementById('left').addEventListener('touchstart', moveLeft);
button.addEventListener('click', function () { //Reload the game
    location.reload();
});