class Pipe{
    constructor (space , gapStart, gapSize){
        this.x = wn.x + space;
        this.gapStart = gapStart;
        this.gapSize = gapSize;
        this.speed = 6;
        this.pipeWidth = 100;

    }
    update(){
        this.x-=this.speed;
        if (this.x < - this.pipeWidth){
            this.x = wn.x
        }
    }
    render(){
        rect(this.x, 0, this.pipeWidth, this.gapStart);
        rect(this.x, this.gapStart+this.gapSize, this.pipeWidth, wn.y);
    }
}
