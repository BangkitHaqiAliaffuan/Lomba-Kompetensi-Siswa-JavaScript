const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const collideCanvas = document.getElementById("collideCanvas");
const collideCtx = collideCanvas.getContext("2d");
collideCanvas.width = window.innerWidth;
collideCanvas.height = window.innerHeight;

let timeToNextRaven = 0;
let ravenInterval = 500;
let lastTime = 0;
let staggerTime = Math.floor(Math.random() * 10) +1;
let gameFrame = 0;
let ravens = [];
let score = 0;
let gameOver = false
ctx.font = "50px Impact";
class Raven {
  constructor() {
    this.spriteWidth = 271;
    this.spriteHeight = 194;
    this.sizeModifier = Math.random() * 0.6 + 0.4;
    this.width = this.spriteWidth * 0.4;
    this.height = this.spriteHeight * 0.3;
    this.x = canvas.width;
    this.y = Math.random() * (canvas.height - this.height);
    this.directionX = Math.random() * 5 + 3;
    this.directionY = Math.random() * 5 - 2.5;
    this.markedForDeletion = false;
    this.image = new Image();
    this.image.src = "raven.png";
    this.frame = 0;
    this.maxFrame = 4;
    this.randomColor = [
      Math.floor(Math.random() * 255),
      Math.floor(Math.random() * 255),
      Math.floor(Math.random() * 255),
    ];
    this.color =
      "rgb(" +
      this.randomColor[0] +
      "," +
      this.randomColor[1] +
      "," +
      this.randomColor[2] +
      ")";
  }
  update() {
    if (this.y < 0 || this.y > canvas.height - this.height) {
      this.directionY = this.directionY * -1;
    }
    this.x -= this.directionX;
    this.y += this.directionY;
    if (this.x < 0 - this.width) {
      this.markedForDeletion = true;
    }

    if (this.frame > this.maxFrame) {
      this.frame = 0;
    } else if (gameFrame % staggerTime == 0) {
      this.frame++;
    }
    if(this.x < 0 - this.width){
        gameOver = true
    }
  }
  draw() {
    collideCtx.fillStyle = this.color;
    collideCtx.fillRect(this.x, this.y, this.width, this.height);
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

let explosions = []
class Explosion{
    constructor(x, y, size){
        this.image = new Image()
        this.image.src = "boom.png"
        this.spriteWidth = 200
        this.spriteHeight = 179
        this.size = size
        this.x = x
        this.y = y
        this.frame = 0
        this.markedForDeletion = false
    }
    update(){
        if(gameFrame % staggerTime === 0){
            this.frame++
        } 
        if(this.frame > 5){ this.markedForDeletion = true

        }
    }
    draw(){
        ctx.drawImage(this.image, this.frame * this.spriteWidth, 0 , this.spriteWidth, this.spriteHeight, this.x, this.y, this.size, this.size)
    }
}


function drawScore() {
  ctx.fillStyle = "black";
  ctx.fillText("Score = " + score, 50, 50);
  ctx.fillStyle = "white";
  ctx.fillText("Score = " + score, 52, 52);
}

function drawGameOver(){
    ctx.fillStyle = 'black'
    ctx.fillText('GAME OVER ' + score, canvas.width/2, canvas.height/2)
}

window.addEventListener("click", function (e) {

    const detectPixelColor = collideCtx.getImageData(e.x, e.y, 1, 1);
    const pc = detectPixelColor.data
    console.log(pc)
    ravens.forEach(object => {
        if(object.randomColor[0] === pc[0] && object.randomColor[1] === pc[1] && object.randomColor[2] === pc[2] ) {

            object.markedForDeletion = true
            score++        
            explosions.push(new Explosion(object.x, object.y, object.width))
            console.log(explosions)
        }
    });
})


function animate(timestamp) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  collideCtx.clearRect(0, 0, canvas.width, canvas.height);
  let deltatime = timestamp - lastTime;
  lastTime = timestamp;
  timeToNextRaven += deltatime;
  if (timeToNextRaven > ravenInterval) {
    ravens.push(new Raven());
    timeToNextRaven = 0;
    ravens.sort(function(a,b){
        return a.width - b.width
    })
  }
  drawScore();
  [...ravens, ...explosions].forEach((object) => {
    object.update();
  });
  [...ravens, ...explosions].forEach((object) => {
    object.draw();
  });
  gameFrame++;
  ravens = ravens.filter((object) => !object.markedForDeletion);
  explosions = explosions.filter((object) => !object.markedForDeletion);
 if (!gameOver){ requestAnimationFrame(animate) } else {
    drawGameOver()
 };
}
animate(0);
