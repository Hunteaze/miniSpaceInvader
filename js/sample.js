
var monCanvas = document.getElementById('canvasGame');
var score = document.getElementById('score');
var puissance = document.getElementById('puissance');
var delai = document.getElementById('delai');
var niveau = document.getElementById('niveau');
var difficulte = document.getElementById('difficulte');
var niveauActuelle = 1;
var i = 0;
var asteroidField  = [];
var projectile = [];
var backgrounds =[];
var totalPoint = 0;
var couldown = 0;
var bonnus = [];
let playerChoice = Math.round( Math.random() * (100 - 0) + 0);
var player;

    if(playerChoice <= 33){
        player = new TeraFormer(295,600,50,20,1,10);
    } else if(playerChoice < 66 && playerChoice > 33){
        player = new Fighter(295,600,50,20,1,10);
    } else {
        player = new Explorateur(295,600,50,20,1,10);
    }
    var nom = player.getNom();
    var hp = player.getHp();
document.addEventListener("keydown",down,false);


function down(e){
    e.preventDefault();
    switch(e.keyCode){
        case 39: player.setAxeX(15);
        break;
        case 37: player.setAxeX(-15);
        break;
        case 32: player.shoot();
        break;
        default:
    }
}


if(monCanvas.getContext){
    var ctx = monCanvas.getContext('2d');
} else {
    alert('canvas non supporté par ce navigateur');
}
Interface.dessinerBackgrounds();

function Animer(){
    ctx.clearRect(0,0,monCanvas.width,monCanvas.height);

    GameEngine.modeDifficulte();
    Interface.Hub();
    Interface.dessinerAll();
    Interface.score();
    GameEngine.contac();
    GameEngine.clean();
    GameEngine.time();
}




var inter = setInterval(Animer,100);





