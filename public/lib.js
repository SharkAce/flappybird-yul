class Bird {
  constructor(x, y) {
    this.timer = 40;
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 0;
    this.alive = true;
    this.jumped = false
    this.color = [255, 255, 255]

  }

  update() {
    this.vy += 0.5
    this.x += this.vx
    this.y += this.vy
    if (this.y > wn.y) {
      this.alive = false;
    }
    this.timer++

  }
  render() {
    fill.apply(1, this.color)
    ellipse(this.x, this.y, 24, 24);
  }
  jump() {
    if (this.timer > 0) {
      this.vy = -9
      this.timer = 0;
    }
  }
  closestPipePoint(x, y) {


    return pipePoint
  }
  collision(pipe) {
    let isColliding = false;
    if (
      (this.x >= pipe.x && this.x <= pipe.x + pipe.pipeWidth) &&
      ((this.y <= pipe.gapStart) || (this.y >= pipe.gapStart + pipe.gapSize))
    ) {
      isColliding = true

    }
    //else {
    //     let pipePoint = this.closestPipePoint(pipe.x, pipe.y);
    //     if (Pipe.isInCircle(pipePoint.x, pipePoint.y, this.x, this.y)) {
    //         isColliding = true;
    //     }
    // }
    return isColliding
  }

}
class Pipe {
  constructor(space, gapStart, gapSize) {
    this.x = wn.x + space;
    this.gapStart = gapStart;
    this.gapSize = gapSize;
    this.speed = 6;
    this.pipeWidth = 100;

  }
  static isInCircle(px, py, bx, by, r) {
    return (r >= Math.sqrt(Math.pow(px - bx, 2) + Math.pow(py - by, 2)));
  }
  update() {
    this.x -= this.speed;
    if (this.x < -this.pipeWidth) {
      this.x = wn.x - this.pipeWidth
    }
  }
  render() {
    fill(240);
    rect(this.x, 0, this.pipeWidth, this.gapStart);
    rect(this.x, this.gapStart + this.gapSize, this.pipeWidth, wn.y);
  }
}
class World {
  constructor(options) {
    this.population = options.population;
    this.pipeNumber = options.pipeNumber;
    this.gapSize = options.gapSize;
  }
  init() {
    this.birds = [];
    this.pipes = [];

    for (let i = 0; i < this.population; i++) {
      this.birds.push(new Bird(100, 100));
    }
    for (let i = 0; i < this.pipeNumber; i++) {
      let gapStart = randomInt(250, 350)
      this.pipes.push(
        new Pipe((i * wn.x / this.pipeNumber), gapStart, this.gapSize)
      )
    }
  }

  update() {
    for (let i = 0; i < this.birds.length; i++) {
      if (keyIsDown(UP_ARROW) && !this.birds[i].jumped) {
        this.birds[i].jump();
        this.birds[i].jumped = true;
      }
      if (!keyIsDown(UP_ARROW)) {
        this.birds[i].jumped = false
      }
      this.birds[i].update();
      this.birds[i].render();
      for (let j = 0; j < this.pipes.length; j++) {
        if (this.birds[i].collision(this.pipes[j])) {
          this.birds[i].color = [255, 0, 0]
          this.init();
        }
      }
    }
    for (let i = 0; i < this.pipes.length; i++) {
      this.pipes[i].update();
      this.pipes[i].render();
    }
  }
}
let randomInt =(min,max)=>Math.floor(Math.random()*(max-min+1))+min
