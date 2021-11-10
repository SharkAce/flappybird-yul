pipeWidth = 20

const wn = {
    x : innerWidth,
    y : innerHeight
}


let b
let test

function setup(){
    let canvas = createCanvas(wn.x,wn.y)
    canvas.parent('canvas');
    b = new Bird (100, 100);
    test = new Pipe(400,150);

}

function draw(){
    background(50);

    if (keyIsDown(UP_ARROW)){
        b.jump();
    }
    b.update();
    b.render();
    if (b.collision(test)){console.log("hit")}

    test.update();
    test.render();
    
}