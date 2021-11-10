
const wn = {
    x : innerWidth,
    y : innerHeight
}

let b
function setup(){
    let canvas = createCanvas(wn.x,wn.y)
    canvas.parent('canvas');
    b = new Bird (100, 100);
}

function draw(){
    background(50);
    if (keyIsDown(UP_ARROW)){
        b.jump();
    }
    b.update();
    b.render();
}