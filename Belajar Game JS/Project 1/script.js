let playerState = 'run'

const dropdown = document.getElementById("animation")

dropdown.addEventListener('change' ,(e)=>{
    playerState = e.target.value
})

const canvas = document.getElementById('canvas')
const ctx = canvas.getContext("2d")
let canvas_width = canvas.width = 600
let canvas_height = canvas.height = 600
const spriteWidth = 575
const spriteHeight = 523
let frameX = 0
let frameY = 0
let gameFrame = 0
const staggerFrame = 4
const spriteAnimation = []
const animationStates =[
    {
        name: 'idle',
        frame: 7
    },
    {
        name: 'jump',
        frame: 7
    },
    {
        name: 'fall',
        frame: 7
    },
    {
        name: 'run',
        frame: 9
    },
    {
        name: 'dizzy',
        frame: 11
    },
    {
        name: 'sit',
        frame: 5
    },
    {
        name: 'roll',
        frame: 7
    },
    {
        name: 'bite',
        frame: 7
    },
    {
        name: 'ko',
        frame: 12
    },
    {
        name: 'gethit',
        frame: 4
    },
]
animationStates.forEach((state, index)=>{
    let frame = {
        loc: [],
    }
    for (let j = 0; j < state.frame; j++){
        let positionX = j * spriteWidth
        let positionY = index * spriteHeight
        frame.loc.push({x: positionX, y: positionY})
    }

    spriteAnimation[state.name] = frame
})


const playerImage = new Image();
playerImage.src = "shadow_dog.png"

function animate(){
    ctx.clearRect(0, 0, canvas_width, canvas_height)
    let position = Math.floor(gameFrame/staggerFrame) % spriteAnimation[playerState].loc.length
    
    let frameX = spriteWidth * position
    let frameY = spriteAnimation[playerState].loc[position].y
    


    ctx.drawImage(playerImage, frameX , frameY , spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight )
    gameFrame++;
    requestAnimationFrame(animate)
}

animate()