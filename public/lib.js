
class Bird {
    constructor (x, y) {
        this.timer = 40;
        this.x = x ;
        this.y = y ;
        this.vx = 0 ;
        this.vy = 0 ;
        this.alive = true ;

    }
    update () {
        this.vy += 1
        this.x += this.vx
        this.y += this.vy
        if (this.y > wn.y){
            this.alive = false ;
        }
        this.timer ++

    }
    render (){
        if (this.alive){
            ellipse (this.x, this.y, 40, 40);
        }

    }
    jump (){
        if (this.timer > 0){
            this.vy = -9
            this.timer = 0;
        }
    }
    collision(pipe){
        let isColliding = false;
        if (
            (this.x >= pipe.x && this.x <= pipe.x+pipe.pipeWidth) && 
            ((this.y <= pipe.gapStart) || (this.y >= pipe.gapStart+pipe.gapSize))
        ){
            isColliding = true
        }
    return isColliding
    }

}
class Pipe{
    constructor (gapStart, gapSize){
        this.x = wn.x;
        this.gapStart = gapStart;
        this.gapSize = gapSize;
        this.speed = 6;
        this.pipeWidth = 100;

    }
    update(){
        this.x-=this.speed;
    }
    render(){
        rect(this.x, 0, this.pipeWidth, this.gapStart);
        rect(this.x, this.gapStart+this.gapSize, this.pipeWidth, wn.y);
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