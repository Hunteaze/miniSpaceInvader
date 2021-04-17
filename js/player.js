// var barres = [0,600,50,20,1,10]; X  Y LONGEUR LARGEUR PUISSANCE REFROIDISEMENT

class Vaisseau {

constructor(axeX,axeY,longeur,largeur,puissance,refroidisement){
    
    this.name = "";
    this.axeX = axeX;
    this.axeY = axeY;
    this.longeur = longeur;
    this.largeur = largeur;
    this.puissance = puissance;
    this.refroidisement = refroidisement;
    this.aspect = 'rgba(255,0,0,1)';
    this.powerUp = 0;
    this.nbWeapon = 1;
    this.hp = 2;    
    this.frameInvu = 0;
    this.slow = 0
    
}

getAxeX(){
    return this.axeX;
}
setAxeX(x){
    let nextMouv = this.axeX + x;
    if(nextMouv <0){
        nextMouv = 0;
    } else if (nextMouv> (monCanvas.width -this.longeur)){
        nextMouv = monCanvas.width-this.longeur; 
    } ;
    this.axeX = nextMouv;
    
}
getAxeY(){
    return this.axeY;
}
setHp(e,impact){
    if(this.frameInvu <= 0){ 
 this.hp-=e; 
 this.frameInvu = 15;

 if( this.hp == 0)
 {
     GameEngine.stopper();
 }else {
     if(impact < 0) this.setAxeX(20);
     else this.setAxeX(-25);
 }
    
}

}
getHp(){
    return this.hp;
}

getLongeur(){
    return this.longeur;
}
getLargeur(){
    return this.largeur;
}
getPuissance(){
    return this.puissance;
}
setPuissance(p){
    if (this.puissance == 3){
    } else {
   this.puissance +=1;
    }
}
getRefroidisement(){
    return this.refroidisement;
}
setRefroidisement(r){
    if (this.refroidisement<= 3){
        this.refroidisement = 3;
    }else {
        this.refroidisement +=r;
    }
}
getPowerUp(){
    this.powerUp = 2;
}
setFrameInvu(){
    this.frameInvu--;
}
getAspect(){ 
    
    if (this.powerUp !=0){
        this.powerUp --;
        return 'yellow'
    }else if(this.frameInvu >=0){
        if(this.frameInvu%2 == 0){
            return 'rgba(255,0,0,0)';
        } else return 'rgba(255,0,0,1)';
    } else return this.aspect;
}
shoot(){
    if(couldown <= 0){
        switch(this.nbWeapon){
        case 1 :
            this.createShoot(this.axeX+(Math.round(this.longeur/2)));
        break;
        case 2 : 
            this.createShoot(this.axeX+(Math.round(this.longeur/2)+10));
            this.createShoot(this.axeX+(Math.round(this.longeur/2)-10));
        break;
        case 3: 
            this.createShoot(this.axeX+(Math.round(this.longeur/2)));
            this.createShoot(this.axeX);
            this.createShoot(this.axeX+this.longeur/2);
        case 4:
            this.createShoot(this.axeX+(Math.round(this.longeur/2)+10));
            this.createShoot(this.axeX+(Math.round(this.longeur/2)-10));
            this.createShoot(this.axeX);
            this.createShoot(this.axeX+this.longeur);
        break;
        default:
        break;
        }
    couldown = this.refroidisement;
                                                                                                                                                                                                                                                                                 
        }
    } 
createShoot(axeX){
    projectile.push(new Shoot( (axeX),this.axeY,10,5,false,this.getPuissance(),false,this.slow));
    
};
setNbWeapon(e){
    this.nbWeapon += e;
    if (this.nbWeapon >2){
        this.nbWeapon = 2;
    }
}
dessiner(){
        ctx.save();
        ctx.translate(this.getAxeX(),this.getAxeY());
        ctx.fillStyle = this.getAspect();
        ctx.fillRect(0,0,this.getLongeur(),this.getLargeur());
        ctx.restore();
}
getNom(){
    return this.name;
}
}

class Fighter extends Vaisseau{

constructor(axeX,axeY,longeur,largeur,puissance,refroidisement){
    super(axeX,axeY,longeur,largeur,puissance,refroidisement);
     this.name = "FighterX-V32";
     this.aspect = 'rgba(100,255,0,1)';
}
setRefroidisement(r){
    if (this.refroidisement<= 1){
        this.refroidisement = 1;
    }else {
        this.refroidisement +=r;
    }
}
setNbWeapon(e){
    this.nbWeapon += e;
    if (this.nbWeapon >4){
        this.nbWeapon = 4;
    }
}
getAspect(){ 
    
    if (this.powerUp !=0){
        this.powerUp --;
        return 'yellow'
    }else if(this.frameInvu >=0){
        if(this.frameInvu%2 == 0){
            return 'rgba(100,255,0,0)';
        } else return 'rgba(100,255,0,1)';
    } else return this.aspect;
}

}

class TeraFormer extends Vaisseau{

    constructor(axeX,axeY,longeur,largeur,puissance,refroidisement){
        super(axeX,axeY,longeur,largeur,puissance,refroidisement);
         this.name = "TerraFormer Alpha-43";
         this.slow = 2;
         this.aspect = 'rgba(255,0,255,1)';
    }
    createShoot(axeX){
        projectile.push(new Shoot( (axeX),this.axeY,10,5,false,this.getPuissance(),this.slow));
    };
    getAspect(){ 
    
        if (this.powerUp !=0){
            this.powerUp --;
            return 'yellow'
        }else if(this.frameInvu >=0){
            if(this.frameInvu%2 == 0){
                return 'rgba(255,0,255,0)';
            } else return 'rgba(255,0,255,1)';
        } else return this.aspect;
    }

}
class Explorateur extends Vaisseau{
    constructor(axeX,axeY,longeur,largeur,puissance,refroidisement){
        super(axeX,axeY,longeur,largeur,puissance,refroidisement);
        this.name = "Apache C-77"
    }
    createShoot(axeX){
        projectile.push(new Shoot( (axeX),this.axeY,10,5,true,this.getPuissance(),this.slow));
    };
 
}