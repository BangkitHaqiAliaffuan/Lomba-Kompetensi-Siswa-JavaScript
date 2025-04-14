window.addEventListener("load", function () {
  const canvas = this.document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = 800;
  canvas.height = 720;

  class InputHandler {
    constructor() {
      this.keys = [];
      window.addEventListener("keydown", (e) => {
        if (
          (
              e.key === "ArrowDown" ||
              e.key === "ArrowUp" ||
              e.key === "ArrowRight" ||
              e.key === "ArrowLeft") 
              &&
              this.keys.indexOf(e.key) === -1
            ) {
                this.keys.push(e.key);
            }
        });
        window.addEventListener("keyup", (e) => {
            if((
                e.key === "ArrowDown" ||
                e.key === "ArrowUp" ||
                e.key === "ArrowRight" ||
                e.key === "ArrowLeft") 
            ){
                this.keys.splice(this.keys.indexOf(e.key), 1)
            }
            console.log(e.key, this.keys);
        });
    }
  }

  class PLayer {
    constructor(gameWidth, gameHeight){
        this.gameWidth = gameWidth
        this.gameHeight = gameHeight
        this.width = 200
        this.height = 200
        this.x = 0
        this.y = this.gameHeight - this.height
        this.image = document.getElementById("playerImage")
        this.frameX = 0
        this.frameY = 0
        this.speed = 0
    }
    draw(context){
        ctx.drawImage(this.image, this.frameX * this.width, this.frameY * this.height, this.width, this.height, this.x, this.y, this.width, this.height)
    }
    update(input){
        this.x += this.speed
        if(input.keys.indexOf('ArrowRight') > -1){
            this.speed = 5
        }
    }
  }
  class Enemy {}

  function handleEnemies() {}
  function displayStatusText() {}
  const input = new InputHandler();
  const player = new PLayer(canvas.width, canvas.height);
  function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      player.draw(ctx)
      player.update(input)
    requestAnimationFrame(animate);
  }
//   animate()
});
