
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
            ellipse (this.x, this.y, 10, 10);
        }

    }
    jump (){
        if (this.timer > 25){
            this.vy -= 30;
            this.timer = 0;
        }
    }


}