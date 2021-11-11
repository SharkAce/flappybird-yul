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