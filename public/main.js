let options = {
  population: 1,
  pipeNumber: 5,
  gapSize: 100
}
let world = new World(options)

const wn = {
  x: innerWidth + 200,
  y: innerHeight
}


function setup() {
  let canvas = createCanvas(wn.x, wn.y)
  canvas.parent('canvas');
  world.init()

}

function draw() {
  background(50);
  world.update()
}