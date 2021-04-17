legendCanav = document.getElementById('legende');


if(legendCanav.getContext){
    var ctxLeg = legendCanav.getContext('2d');
} else {
    alert('canvas non supporté par ce navigateur');
}

    ctxLeg.save();
    ctxLeg.translate(30, 40);
    ctxLeg.fillStyle = "green";
    ctxLeg.beginPath();
    ctxLeg.arc(0,0,30,0,2*Math.PI,false);
    ctxLeg.fill();
    ctxLeg.translate(40,0);
    ctxLeg.fillStyle = '#fff';
    ctxLeg.font = 'bold 15px Sans-serif';
    ctxLeg.fillText("Asteroide leger : 1 hp",0,0);
    ctxLeg.restore();

    ctxLeg.save();
    ctxLeg.translate(30,120);
    ctxLeg.fillStyle = "yellow";
    ctxLeg.beginPath();
    ctxLeg.arc(0,0,30,0,2*Math.PI,false);
    ctxLeg.fill();
    ctxLeg.translate(40,0);
    ctxLeg.fillStyle = '#fff';
    ctxLeg.font = 'bold 15px Sans-serif';
    ctxLeg.fillText("Asteroide lourd : 2 hp",0,0);
    ctxLeg.restore();


    ctxLeg.save();
    ctxLeg.translate(30,200);
    ctxLeg.fillStyle = "black"
    ctxLeg.beginPath();
    ctxLeg.arc(0,0,30,0,2*Math.PI,false);
    ctxLeg.fill();
    ctxLeg.translate(40,0);
    ctxLeg.fillStyle = '#fff';
    ctxLeg.font = 'bold 15px Sans-serif';
    ctxLeg.fillText("Asteroide en acier : 3 hp",0,0);
    ctxLeg.restore();

//// BONUS //////

    ctxLeg.save();
    ctxLeg.translate(30,350);
    ctxLeg.fillStyle = "pink"
    ctxLeg.beginPath();
    ctxLeg.fillRect(0,0,30,30);
    ctxLeg.fill();
    ctxLeg.translate(50, 20);
    ctxLeg.fillStyle = '#fff';
    ctxLeg.font = 'bold 15px Sans-serif';
    ctxLeg.fillText("Bonnus puissance + 1",0,0);
    ctxLeg.restore();

    ctxLeg.save();
    ctxLeg.translate(30,450);
    ctxLeg.fillStyle = "red"
    ctxLeg.beginPath();
    ctxLeg.fillRect(0,0,30,30);
    ctxLeg.fill();
    ctxLeg.translate(50, 20);
    ctxLeg.fillStyle = '#fff';
    ctxLeg.font = 'bold 15px Sans-serif';
    ctxLeg.fillText("Bonnus arme + 1 ",0,0);
    ctxLeg.restore();

    ctxLeg.save();
    ctxLeg.translate(30,550);
    ctxLeg.fillStyle = "blue"
    ctxLeg.beginPath();
    ctxLeg.fillRect(0,0,30,30);
    ctxLeg.fill();
    ctxLeg.translate(50, 20);
    ctxLeg.fillStyle = '#fff';
    ctxLeg.font = 'bold 15px Sans-serif';
    ctxLeg.fillText("Bonnus arme plus rapide",0,0);
    ctxLeg.restore();

   



