class Asteroide {

constructor(){
    this.axeX = Math.round(Math.random() * (600- 20) + 20);
    this.axeY = 0;
    this.rayon =  Math.round(Math.random() * (20 - 10) + 10);
    this.speed = Math.round( Math.random() * (7 - 3) + 3);
    this.taille = Math.round(Math.random() * (3 - 1) + 1);
    switch (this.taille){
        case 1: this.aspect = "green";
        break;
        case 2: this.aspect = "yellow";
        break;
        case 3: this.aspect = "black";
        break;
        default: this.aspect = "white";
        break;
    }
    this.hp = this.taille;
    this.getHit = 0;

}

setSlowDown(s){
    this.speed -= s;
    if(this.speed <2) this.speed = 2; 

}
getAxeX(){
    return this.axeX;
}
getAxeY(){
    return this.axeY;
}
getRayon(){
    return this.rayon;
}
move(){
    this.axeY += this.speed; 
}
getHp(){
    return this.hp;
}

getspeed(){
    return this.speed;
}
setHp(e){
    this.hp -= e;
    
    if (this.getHp() <= 0 ){
        totalPoint += 20;
            if (Math.round( Math.random() * (100 - 1) + 1) < 15){
                 bonnus.push(new Bonnus(this.axeX,this.axeY));
            }
            if(this.taille == 2){
             asteroidField.push(new Debrit(this.getAxeX(),this.getAxeY(),this.getspeed(),Math.round(this.getRayon()),'right'))
             asteroidField.push(new Debrit(this.getAxeX(),this.getAxeY(),this.getspeed(),Math.round(this.getRayon()),'left'))
             asteroidField.splice(asteroidField.indexOf(this),1);
            } else if (this.taille == 3){
             asteroidField.push(new Debrit(this.getAxeX(),this.getAxeY(),this.getspeed(),Math.round(this.getRayon()),'right'))
             asteroidField.push(new Debrit(this.getAxeX(),this.getAxeY(),this.getspeed(),Math.round(this.getRayon()),'left'))
             asteroidField.push(new Debrit(this.getAxeX(),this.getAxeY(),this.getspeed(),Math.round(this.getRayon()),'left'))
             asteroidField.push(new Debrit(this.getAxeX(),this.getAxeY(),this.getspeed(),Math.round(this.getRayon()),'right'))
             asteroidField.splice(asteroidField.indexOf(this),1);
            } else  asteroidField.splice(asteroidField.indexOf(this),1);
        }
   this.getHit = 2;

};
getAspect(){ 
   if(this.getHit !=0){
    this.getHit --;
       return 'red';
     
   }
    return this.aspect;
};
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
};
class Debrit extends Asteroide{
   
    constructor(axeX,axeY,speed,rayon,direction){
        super();
        this.axeX = axeX;
        this.axeY = axeY;
        this.speed = speed;
        this.rayon = rayon;
        this.taille = 0;
        this.aspect = "grey";
        this.direction = direction;

    }


setHp(e){
    if (Math.round( Math.random() * (100 - 1) + 1) < 10){
        bonnus.push(new Bonnus(this.axeX,this.axeY));
    }
    asteroidField.splice(asteroidField.indexOf(this),1);   
}
move(){
    this.axeY += this.speed+Math.round(Math.random() * (7 - (-4) + (-4))); 
    if (this.direction == 'right'){
        this.axeX += Math.round(Math.random() * (7 - (-4) + (-4)));
    } else this.axeX-= Math.round(Math.random() * (10 - 0) + 0);
}
getRayon(){
    return Math.round(this.rayon/2);
}
};
