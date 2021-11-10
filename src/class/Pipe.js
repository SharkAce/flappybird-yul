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