class GameEngine {
    

static modeDifficulte(){
    let degredifficulté = 0; 
    if(totalPoint > 200 && totalPoint < 500){
        degredifficulté = 5;
        niveauActuelle = 2;
    }  else if(totalPoint > 500 && totalPoint< 1000){
        degredifficulté = 3;
        niveauActuelle = 3;
    } else if (totalPoint>= 500 ){
        degredifficulté = 2;
        niveauActuelle = 4;
    } else {
        degredifficulté = 10;
        niveauActuelle = 1;
    }
    


    if(i%degredifficulté == 0){
        asteroidField.push(new Asteroide); 
        }
};

static time(){
    i++;
    couldown --;
    player.setFrameInvu();

};
static clean(){
    var point = 0;
    var newasteroidField = [];
    var newprojectile = [];
    var newBonnus = [];
    newasteroidField= asteroidField.filter(cer => cer.getAxeY() < 800);
    newprojectile = projectile.filter(amo => amo.getAxeY()>0);
    newBonnus = bonnus.filter(bns => bns.getAxeY() < 800);          
    point = asteroidField.length - newasteroidField.length;
    if (point != 0){
       totalPoint ++;
      
    }

    asteroidField = newasteroidField;
    projectile = newprojectile;
    bonnus = newBonnus;
    newprojectile = projectile.filter(amo => amo.getAxeX()>0 && amo.getAxeX()< 640);
    projectile = newprojectile;
    
};
static stopper(){
    clearInterval(inter);
};
static contac(){
    
    for( let asteroide of asteroidField){
        let distanceXAsteroidePlayer = Math.abs(asteroide.getAxeX()-(player.getAxeX()+(player.getLongeur()/2 )));
        let distanceYAsteroidePlayer = Math.abs(asteroide.getAxeY()-(player.getAxeY()+(player.getLargeur()/2)));
        if(distanceXAsteroidePlayer < asteroide.getRayon()+(player.getLongeur()/2 ) 
        && distanceYAsteroidePlayer < asteroide.getRayon()+(player.getLargeur()/2)){
            player.setHp(1,asteroide.getAxeX()-(player.getAxeX()+(player.getLongeur()/2)));
           break;
        }
    } 
    for( let i in asteroidField){
        
        for( let y in projectile){
       
      
        if((Math.abs(asteroidField[i].getAxeX()-projectile[y].getAxeX()) < asteroidField[i].getRayon()+projectile[y].getRayon())
         && Math.abs(asteroidField[i].getAxeY()-projectile[y].getAxeY()) < asteroidField[i].getRayon()+projectile[y].getRayon())
        {
            asteroidField[i].setHp(player.getPuissance());
            if(projectile[y].getBounce() == true){
                projectile[y].setBounce(asteroidField[i].getAxeX()-projectile[y].getAxeX(),asteroidField[i].getAxeY()-projectile[y].getAxeY());
            } else{
                if(projectile[y].getFrameInvu()<=0);
                asteroidField[i].setSlowDown(projectile[y].getSlowDown());
            projectile.splice(y,1);
            totalPoint ++;
            }
           break;
        }
     }
    } 
    for( let z in bonnus){
        
        if((Math.abs(bonnus[z].getAxeX()+(bonnus[z].getCote()/2)
        -(player.getAxeX()+(player.getLongeur()/2)
        ))  
        <  player.getLongeur()/2+bonnus[z].getCote()/2 )
         && Math.abs(bonnus[z].getAxeY()+(bonnus[z].getCote()/2)
         -player.getAxeY()+(player.getLargeur()/2))
         < player.getLargeur())
        {
            
           bonnus[z].takeBonnus();
           bonnus.splice(z,1);
           break;
           
        }
       
        
    } 
};
};