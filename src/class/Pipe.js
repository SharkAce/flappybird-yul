class Pipe{
    constructor (gapStart, gapSize){
        this.x = wn.x;
        this.gapStart = gapStart;
        this.gapSize = gapSize;
        this.speed = 10;
    }
    update(){
        this.x-=this.speed;
    }
    render(){
        rect(this.x, 0, pipeWidth, this.gapStart);
        rect(this.x, this.gapStart+this.gapSize, pipeWidth, wn.y);
    }
}