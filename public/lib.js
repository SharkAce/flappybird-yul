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
    this.space = space
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
class World{
    constructor (){

    }
    render(){

    }
    addBird(){

    }
    reset(){

    }
    
}
let randomInt =(min,max)=>Math.floor(Math.random()*(max-min+1))+min
