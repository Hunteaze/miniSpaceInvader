class Interface{


static score(){
    switch(player.getPuissance()){
        case 1:  puissance.innerHTML = "Puissance : Normal";
        break;
        case 2:  puissance.innerHTML = "Puissance : Important!";
        break;
        case 3:  puissance.innerHTML = "Puissance : Illimité!!!!!";
        break;
        default:

    }
    score.innerHTML = "Score: "+ totalPoint;
    niveau.innerHTML = "Niveau :" + niveauActuelle;
    switch(niveauActuelle){
        case 1: difficulte.innerHTML = "Difficulté : normal" 
        break;
        case 2: difficulte.innerHTML = "Difficulté : Hard" 
        break;
        case 3: difficulte.innerHTML = "Difficulté : Ultra Hard" 
        break;
        case 4: difficulte.innerHTML = "Difficulté : ULTRA MEGA HARD !" 
        break;
    }
    if(player.getRefroidisement() >=7){
        delai.innerHTML = "Canon : normal"
    } else if (player.getRefroidisement()< 7 && player.getRefroidisement()>= 4){
        delai.innerHTML = "Canon : rapide"
    } else if (player.getRefroidisement()<= 3){
        delai.innerHTML = "Canon : enragés !"
    }
    
};
static dessinerAll(){
    player.dessiner();
    for (let asteroide of asteroidField){
        asteroide.dessiner();
    };
    for (let shoot of projectile){
        shoot.dessiner();
       
    };
    for (let bns of bonnus){
        bns.dessiner();
    };
    for (let star of backgrounds ){
        star.dessiner();
    }
    Interface.resetBackground();

};

static dessinerBackgrounds(){
    for(let i = 0; i<11; i++){
        backgrounds.push(new Star);
    }
}
static resetBackground(){
    for(let star of backgrounds){
        if(star.getAxeY()< 0){
            star.setAxeY();
        }
    }
}



static Hub(){

    ctx.save();
    ctx.translate(5,15);
    ctx.globalCompositeOperation = "source-over"
    ctx.fillStyle = '#fff';
    ctx.font = 'bold 15px Sans-serif';
    ctx.fillText("Nom :"+player.getNom(),0,0);
    ctx.translate(0,30);
    ctx.fillText("HP : "+player.getHp(),0,0);

    ctx.restore();

};
}




