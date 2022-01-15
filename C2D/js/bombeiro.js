function circle(gc,cx,cy,r,fillcolor,stroke){
    gc.fillStyle=fillcolor;
    gc.beginPath();
    gc.strokeStyle=stroke
    gc.moveTo(cx-r,cy);
    gc.arcTo(cx-r,cy-r,cx,cy-r,r);
    gc.arcTo(cx+r,cy-r,cx+r,cy,r);
    gc.arcTo(cx+r,cy+r,cx,cy+r,r);
    gc.arcTo(cx-r,cy+r,cx-r,cy,r);
    gc.stroke();
    gc.fill();
}
function bombeiro(){
    //Cara
        this.fillStyle="#EEEE00";
        this.beginPath();
        this.moveTo(0,50);
        this.lineTo(0,60);
        this.quadraticCurveTo(5,145,50,140);
        this.quadraticCurveTo(95,145,100,60);
        this.lineTo(100,50);
        this.lineTo(0,50);
        this.stroke();
        this.fill();
        //olhos
        circle(this,30,70,5,'#1C1C1C','black');
        circle(this,70,70,5,'#1C1C1C','black');
        //sobrançelhas
        this.fillStyle="#8B4513";
        this.strokeStyle='#8B4513'
        this.beginPath();
        this.moveTo(20,60);
        this.quadraticCurveTo(30,50,40,60);
        this.lineTo(40,65);
        this.quadraticCurveTo(30,55,20,65);
        this.lineTo(20,60);
        this.stroke();
        this.fill();
        circle(this,20,62.5,2,5,'#8B4513','#8B4513');
        circle(this,40,62.5,2,5,'#8B4513','#8B4513');
        this.beginPath();
        this.moveTo(60,60);
        this.quadraticCurveTo(70,50,80,60);
        this.lineTo(80,65);
        this.quadraticCurveTo(70,55,60,65);
        this.lineTo(60,60);
        this.stroke();
        this.fill();
        circle(this,60,62.5,2,5,'#8B4513','#8B4513');
        circle(this,80,62.5,2,5,'#8B4513','#8B4513');
        //Boca
        this.fillStyle="#8B4513";
        this.strokeStyle='#8B4513'
        this.beginPath();
        this.moveTo(30,100);
        this.quadraticCurveTo(50,110,70,100);
        this.lineTo(70,105);
        this.quadraticCurveTo(50,115,30,105);
        this.lineTo(30,100);
        this.stroke();
        this.fill();
        circle(this,30,102.5,2,5,'#8B4513','#8B4513');
        circle(this,70,102.5,2,5,'#8B4513','#8B4513');
        //Nariz
        this.fillStyle='#FF7F00';
        this.strokeStyle='#FF7F00';
        this.beginPath();
        this.moveTo(50,80);
        this.arcTo(43,80,43,85,5);
        this.arcTo(43,90,50,90,5);
        this.arcTo(57,90,57,85,5)
        this.arcTo(57,80,50,80,5);
        this.stroke();
        this.fill();
    //Chapeu
    this.fillStyle="red";
    this.strokeStyle='black';
    this.beginPath();
    this.moveTo(50,0);
    this.arcTo(100,0,100,50,50);
    this.lineTo(0,50);
    this.arcTo(0,0,50,0,50);
    this.stroke();
    this.fill();
    this.fillStyle="greenyellow";
    this.beginPath();
    this.moveTo(75,50);
    this.quadraticCurveTo(75,20,50,0);
    this.quadraticCurveTo(25,20,25,50);
    this.stroke();
    this.fill();
    this.fillStyle="#363636";
    this.beginPath();
    this.moveTo(0,60);
    this.lineTo(0,45);
    this.quadraticCurveTo(50,25,100,45);
    this.lineTo(100,60);
    this.quadraticCurveTo(50,40,0,60);
    this.stroke();
    this.fill();
    this.fillStyle="yellow";
    circle(this,50,43,5,'yellow');
    
}