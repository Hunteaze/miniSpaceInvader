class Star{
    constructor(){

        this.axeX = Math.round(Math.random() * (640- 5) + 5); 
        this.axeY = Math.round(Math.random() * (680- 5) + 5);
        this.speed = Math.round(Math.random() * (20- 7) + 3);
    }
    dessiner(){
            ctx.save();
            this.move();
            ctx.translate(this.axeX,this.getAxeY());
            
            ctx.fillStyle = 'white';
            ctx.beginPath();
            ctx.arc(0,0,2,0,2*Math.PI,false);
            ctx.fill();
           
            ctx.restore();
            
        }
        move(){
            this.axeY-= this.speed;
        }  
        getAxeY(){
            return this.axeY;
        }  
        setAxeY(){
           let newAxe = Math.round(Math.random() * (750- 700) + 700); 
           this.axeY = newAxe;
        }
}