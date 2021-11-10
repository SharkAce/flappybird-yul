class Pipe{
    constructor (gapStart, gapSize){
        this.x = wn.x,
        this.gapStart = gapStart,
        this.gapSize = gapSize
    }
    update(){
        this.x-=1
    }
    render(){
        rect(this.x, 0, pipeWidth, this.gapStart);
        rect(this.x, this.gapStart+this.gapSize, pipeWidth, wn.y);
    }
}