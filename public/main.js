pipeWidth = 20

const wn = {
    x : innerWidth,
    y : innerHeight
}

let test = new Pipe(400,100);

function setup(){
    let canvas = createCanvas(wn.x,wn.y);
    canvas.parent('canvas');
}

function draw(){
    background(50);
    test.update();
    test.render();
    
}