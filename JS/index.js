document.addEventListener("keydown", event => {
    if (event.key === "ArrowLeft") { moveLeft(); }
    if (event.key === "ArrowRight") { moveRight(); }

})

let character = document.getElementById("character");
let image = document.getElementById("boy");

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

block.addEventListener('animationiteration', () => {
    let random = Math.floor(Math.random() * 3);
    left - random * 100;
    block.style.left = left + 'px';
    counter++;
})

setInterval(() => {
    let characterLeft = parseInt(window.getComputedStyle(character).getPropertyValue('left'));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'));
    let blockTop = parseInt(window.getComputedStyle(block).getPropertyValue('top'));
    if (characterLeft == blockLeft && blockTop < 500 && blockTop > 95) {
        alert('Game over. Puntuación: ' + counter);
        block.style.animation = 'none';
    }
}, 1);

document.getElementById('right').addEventListener('touchstart', moveRight);
document.getElementById('left').addEventListener('touchstart', moveLeft);