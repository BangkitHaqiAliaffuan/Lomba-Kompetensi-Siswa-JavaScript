const canvas = document.getElementById("canvas")
const t = canvas.getContext("2d")
let staggerTime = 0
canvas.width = 400
canvas.height = 700

class Game {
    constructor(){
        this.enemies = []
    }
    update(){
        if(staggerTime % 100 === 0){
            this.enemies = this.enemies.filter((object) => !object.deletetion)
            this.enemies.push(new Enemy())
        }
        this.enemies.forEach((object) => object.update())
        if(this.deletetion){
            this.enemies.splice(1)
        }
        console.log(this.enemies)
    }
    draw(){
        this.enemies.forEach((object) => object.draw())
    }
}
class Enemy{
    constructor(){
        this.deletetion = false 
        this.width = 100 
        this.height = 100
        this.x = canvas.width
        this.y = Math.random() * canvas.height - this.height
    }
    update(){
        this.x -= 10
        if(this.x < 0 - this.width){
            this.deletetion = true
        }
    }
    draw(){
        t.fillStyle = "red"
        t.fillRect(this.x, this.y, this.width, this.height)
    }

}

const start = new Game()

function animate(){
    t.clearRect(0,0,canvas.width, canvas.height)
    start.update()
    start.draw()
    staggerTime++
    requestAnimationFrame(animate)
}
animate()