//#region variables
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
//#endregion

//#region funciones
//función mover personaje a la izquierda
function moveLeft() {
    let left = parseInt(window.getComputedStyle(character).getPropertyValue('left'));
    left -= 100;
    if (left >= 0) {
        character.style.left = left + 'px';
    }
}

//función mover personaje a la derecha
function moveRight() {
    let left = parseInt(window.getComputedStyle(character).getPropertyValue('left'));
    left += 100;
    if (left < 300) {
        character.style.left = left + 'px';
    }
}
//#endregion

//#region Eventos
//detectar teclas de movimiento
document.addEventListener("keydown", event => {
    if (event.key === "ArrowLeft" || event.key === "A" || event.key === "a") { moveLeft(); }
    if (event.key === "ArrowRight" || event.key === "D" || event.key == "d") { moveRight(); }
});

//detectar fin de la animación
block.addEventListener('animationiteration', () => {
    //cambiar tren de rail
    let random = Math.floor(Math.random() * 3);
    left = random * 100;
    block.style.left = left + 'px';
    counter++;
    document.getElementById('puntos').innerHTML = counter;

    //aumentar velocidad del tren
    slide -= 0.01;
    console.log(slide);
    block.style.animation = 'slide ' + slide + 's infinite';
    block.style.animationTimingFunction = 'linear'

    //niveles
    if(counter % 10 === 0){
        lvl++;
        document.getElementById('lvl').innerHTML = lvl;
    }
    
})

//Recargar el juego
button.addEventListener('click', function () { 
    location.reload();
});
//#endregion

setInterval(function () {
    //posiciones en tiempo real
    let characterLeft = parseInt(window.getComputedStyle(character).getPropertyValue('left'));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'));
    let blockTop = parseInt(window.getComputedStyle(block).getPropertyValue('top'));

    //detectar colisiones + pantalla de game over
    if (characterLeft == blockLeft && blockTop > 164) {
        block.style.animation = 'none';
        button.style.display = 'block';
        character.style.visibility = 'hidden';
        gameOver.style.display = 'flex';
    }
    //nubes a partir de nivel 25
    else if(counter == 25){
        cloud.style.display = 'block';
        cloud2.style.display = 'block';
        game.style.background = "url('../imgs/first.png')";
    }
    //pantalla de ganado el juego
    else if(counter == 50) {
        block.style.animation = 'none';
        button.style.display = 'block';
        character.style.visibility = 'hidden';
        win.style.display = 'flex';
    }
}, 1);

