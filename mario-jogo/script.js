const mario = document.querySelector('.mario') 
const pipe = document.querySelector('.pipe')


const jump = () =>{
    mario.classList.add('jump')

    setTimeout(() =>{
mario.classList.remove('jump')
    },500)
}


const loop = setInterval(() =>{
const position = pipe.offsetLeft;
const mposition = +window.getComputedStyle(mario).bottom.replace('px', '')



if (position <= 120 && position > 0 && mposition < 80 ) {
    
    pipe.style.animation = 'none'
    pipe.style.left = `${position}px`

    mario.style.animation = 'none'
    mario.style.bottom = `${mposition}px`

    mario.src = '/img/game-over.png'
    mario.style.width = '75px'
    mario.style.marginleft ='50px'

    clearInterval(loop);
}
},10)



document.addEventListener('keydown', jump)