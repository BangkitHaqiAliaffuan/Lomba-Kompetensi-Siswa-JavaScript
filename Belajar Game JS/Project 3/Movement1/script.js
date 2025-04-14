/** @type {HTMLCanvasElement} */

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const canvas_height = canvas.height = 1000;
const canvas_width = canvas.width = 500;
const numberOfEnemies = 10;
const enemiesArray = [];

// enemy1 = {
//     x: 0,
//     y: 0,
//     width: 200,
//     height: 200
// }

let gameFrame = 0
class Enemy {
  constructor() {
    this.image = new Image();
    this.image.src = "enemy1.png"
    // this.speed = Math.random() * 4 - 2;
    this.spriteWidth = 293;
    this.spriteHeight = 155;
    this.width = this.spriteWidth /2.5;
    this.height = this.spriteHeight /2.5;
    this.x = Math.random() * (canvas.width - this.width);
    this.y = Math.random() * (canvas.height - this.height);
    this.frame = 0
    this.flapSpeed = Math.floor(Math.random() * 3 + 1)
  }
  update() {
    this.x += Math.random() * 3 - 1.5;
    this.y += Math.random() * 3 - 1.5;
    if(gameFrame % this.flapSpeed ===0){
      this.frame > 4 ? this.frame = 0 : this.frame++
    }
  }
  draw() {
    ctx.drawImage(
      this.image,
      this.frame * this.spriteWidth,
      0,
      this.spriteWidth,
      this.spriteHeight,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
}

for (let i = 0; i < numberOfEnemies; i++) {
  enemiesArray.push(new Enemy())
}

function animate() {
  ctx.clearRect(0, 0,  canvas_width, canvas.height);
  enemiesArray.forEach(enemy => {
    enemy.update();
    enemy.draw();
  });
gameFrame++
  requestAnimationFrame(animate);
}

animate();
