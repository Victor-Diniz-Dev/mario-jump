const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const jump_song = new Audio('assets/sounds/jump.mp3')
const game_over = new Audio('assets/sounds/game_over2.mp3')
const theme_song = new Audio('assets/sounds/Super Mario Bros. medley.mp3');

const jump = () => {
    mario.classList.add('jump');
    jump_song.volume = 0.1;
    jump_song.preload = 'auto';
    jump_song.load();
    jump_song.play();
    

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {
    
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

        theme_song.pause()
        game_over.volume = 0.3;
        game_over.preload = 'auto';
        game_over.load();  
        game_over.play();
        
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = 'assets/game-over.png';
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

        clearInterval(loop);
    }

}, 10)

document.addEventListener('keydown', jump);

window.addEventListener('DOMContentLoaded', () => {
    theme_song.preload = 'auto';
    theme_song.load();
    theme_song.volume = 0.1;
    theme_song.loop = true;
    theme_song.play();
});