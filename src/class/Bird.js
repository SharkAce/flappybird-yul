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