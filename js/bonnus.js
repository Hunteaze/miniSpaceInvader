class Bonnus {

    constructor(axeX,axeY){

        this.axeX = axeX;
        this.axeY = axeY;
        this.speed = 30;
        this.cote = 20;
        this.typeOfBonnus = Math.round( Math.random() * (3 - 1) + 1);
        switch (this.typeOfBonnus){
            case 1: this.aspect = "pink";
            break;
            case 2: this.aspect = "blue";
            break;
            case 3: this.aspect = "red";
            break;
            default:
        }



    }
    getAxeX(){
        return this.axeX;
    }
    getAxeY(){
        return this.axeY;
    }
    move(){
        this.axeY += this.speed; 
    }
    getCote(){
        return this.cote;
    }
    dessiner(){
        ctx.save();
        this.move();
        ctx.translate(this.getAxeX(),this.getAxeY());
        ctx.fillStyle = this.aspect;
        ctx.beginPath();
        ctx.fillRect(0,0,this.getCote(),this.getCote());
        ctx.fill();
        ctx.restore();

    }
    takeBonnus(){
        player.getPowerUp();
        switch(this.typeOfBonnus){
            case 1: player.setPuissance(1);
                    totalPoint += 50;
            break;
            case 2: player.setRefroidisement(-1);
                    totalPoint += 50;
            break;
            case 3: player.setNbWeapon(1);
                     totalPoint += 50;
            break;
            default:
        }

    }
}



