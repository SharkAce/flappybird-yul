
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