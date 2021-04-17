class Shoot{

    constructor(axeX,axeY,speed,rayon,canBounce,degats,slow){
        this.axeX = axeX;
        this.axeY = axeY;
        this.speed = speed;
        this.rayon = rayon;
        this.canBounce = canBounce;
        this.bounce = false;
        this.frameInvu = 0;
        this.degats = degats;
        this.aspect = "";
        this.slow = slow;
    }
getAxeX(){
    return this.axeX;
}
getAxeY(){
    return this.axeY;
}
getBounce(){
    return this.canBounce;
}
setBounce(axeX,axeY){
if(axeX > 0){
     let newSpeed = this.speed;
     this.speed = -newSpeed;

} 
    this.canBounce = false;
    this.bounce = true;
    this.frameInvu = 10;
}
getSpeed(){
    return this.speed;
}
getRayon(){
    return this.rayon;
}
move(){
    this.frameInvu --;
    if (this.bounce == true){
    this.axeX += this.speed;
    } else this.axeY -= this.speed; 
}
getFrameInvu(){
    return this.frameInvu;
}
getSlowDown(){
    return this.slow;
}
dessiner(){
    ctx.save();
    this.move();
    ctx.translate(this.getAxeX(),this.getAxeY());
    ctx.fillStyle = this.getAspect();
    ctx.beginPath();
    ctx.arc(0,0,this.getRayon(),0,2*Math.PI,false);
    ctx.fill(); 
    ctx.restore();
}
getAspect(){
    switch (this.degats){
    case 1: this.aspect = "red";
    break;
    case 2: this.aspect = "purple";
    break;
    default: this.aspect = "black";
    break;
}
    return this.aspect;
}
}

