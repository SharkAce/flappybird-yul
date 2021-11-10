pipesWidth = 20

const wn = {
    x : innerWidth,
    y : innerHeight
}
let population = 1;
let birds = [];
let pipes = [] ;
let pipenumber = 6 ;
function setup(){
    let canvas = createCanvas(wn.x,wn.y)
    canvas.parent('canvas');
    for (let i = 0 ; i < population ; i++){
        birds.push(new Bird (100 , 100));
    }
    for (let i = 0 ; i < pipenumber ; i++){
        let gapStart = randomInt(250,350)
        pipes.push(new Pipe((i*300), gapStart,100))
    }

}
function draw(){
    background(50);
    for (let i = 0 ; i < birds.length ; i++){
        if (keyIsDown(UP_ARROW) && !birds[i].jumped){
            birds[i].jump();
            birds[i].jumped = true;
        }
        if (!keyIsDown(UP_ARROW)){
            birds[i].jumped = false
        }
        birds[i].update();
        birds[i].render();
        for (let j = 0 ; j < pipes.length ; j++){
        if (birds[i].collision(pipes[j])){birds[i].color = [255,0,0]}
        }
    }
    for (let i = 0 ; i < pipes.length ; i++){
        pipes[i].update();
        pipes[i].render();
    }
}