const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")


canvas.width = 500
canvas.height = 700
let explosions = []    
let canvasPosition = canvas.getBoundingClientRect()

class Explosion{
    constructor(x, y){
        this.spriteHeigth = 179
        this.spriteWidth = 200  
        this.width = this.spriteWidth/2
        this.height = this.spriteHeigth/2
        this.x = x - this.width/2
        this.y = y - this.height/2
        this.image = new Image()
        this.image.src = "boom.png"
        this.frame = 0
        this.timer = 0
        this.sound = new Audio()
        this.sound.src = "boom.wav"
    }

    update(){
        if(this.frame === 0)this.sound.play()
        this.timer++
        if(this.timer % 10 === 0){
            this.frame++
        }
    }
    draw(){
        ctx.drawImage(this.image, this.spriteWidth * this.frame, 0, this.spriteWidth, this.spriteHeigth, this.x, this.y, this.width, this.height)
    }
}


window.addEventListener("click", function(e){
    createAnimation(e)
})

function createAnimation(e){
    let positionX = e.x - canvasPosition.left
    let positionY = e.y - canvasPosition.top
    explosions.push(new Explosion(positionX, positionY))
    console.log(explosions)
}


function animate(){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    for (let i = 0; i < explosions.length; i++){
        explosions[i].update()
        explosions[i].draw()
        if(explosions[i].frame > 5){
            explosions.splice(i, 1)
            i--
        }
    }
    requestAnimationFrame(animate)
}
animate()