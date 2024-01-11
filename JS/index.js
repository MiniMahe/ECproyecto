//variables
let block = document.getElementById('block');
let counter = 0;
let slide = 1.5;
let lvl = 1;

let character = document.getElementById("character");
let image = document.getElementById("boy");
let button = document.getElementById("resetButton");
let gameOver = document.getElementById("gameOver");
let win = document.getElementById("win");
let cloud = document.getElementById('cloud1');
let cloud2 = document.getElementById('cloud2');
let game = document.getElementById('game');

//detectar tecal
document.addEventListener("keydown", event => {
    if (event.key === "ArrowLeft" || event.key === "A" || event.key === "a") { moveLeft(); }
    if (event.key === "ArrowRight" || event.key === "D" || event.key == "d") { moveRight(); }
});

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

    if(counter % 10 === 0){
        lvl++;
        document.getElementById('lvl').innerHTML = lvl;
    }
    
})


setInterval(function () {
    let characterLeft = parseInt(window.getComputedStyle(character).getPropertyValue('left'));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'));
    let blockTop = parseInt(window.getComputedStyle(block).getPropertyValue('top'));

    if (characterLeft == blockLeft && blockTop > 164) {
        block.style.animation = 'none';
        button.style.display = 'block';
        character.style.visibility = 'hidden';
        gameOver.style.display = 'flex';
    }
    else if(counter == 30){
        cloud.style.display = 'block';
        cloud2.style.display = 'block';
    }
    else if(counter == 50) {
        block.style.animation = 'none';
        button.style.display = 'block';
        character.style.visibility = 'hidden';
        win.style.display = 'flex';
    }
}, 1);

document.getElementById('right').addEventListener('touchstart', moveRight);
document.getElementById('left').addEventListener('touchstart', moveLeft);
button.addEventListener('click', function () { //Reload the game
    location.reload();
});