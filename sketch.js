let numX=4;
let numY=7;
//let nb,nb2,nb3,nb4
let nbs=[];
function setup() {
  createCanvas(400, 400);
  background(220);
  //nb= new ourBall(width/2,height/2,50);
  //nb2= new ourBall(width/2,height/2,50);
  //nb3= new ourBall(width/2,height/2,50);
  //nb4= new ourBall(width/2,height/2,50);
  for(let i=0;i<numX;i=i+1){
    for(let j=0;j<numY;j=j+1){
      nbs.push(new ourBall(i*width/numX+width/5/2,j*height/numY+height/5/2,50));
      //circle(i*width/numX+width/5/2,
            //j*height/numY+height/5/2,20)
}}}

function draw() {
  background(220)
  nbs.forEach((v)=>{
  v.display();
  })
  //nb.run();
  //nb.display();
}
  class ourBall{
    constructor(_x,_y,_s,_dx=3,_dy=5){
      this.x=_x;
      this.y=_y;
      this.size=_s;
      //速度
      this.dx=3
      this.dy=-5
      this.color=color(20,100,150)
    }  
      display(){
        this.checkmouse();
        this.bounce();
        this.run();
        fill(this.color)
        circle(this.x,this.y,this.size);
      }
    run(){
      this.x=this.x+this.dx;
      this.y=this.y+this.dy;
    }
    bounce(){
      if(this.y-this.size/2<0){this.dy=-1*this.dy;
                              this.colcor=color(255,0,0)
                              }
      if(this.x+this.size/2>width){this.dx=-1*this.dx;
                                  this.colcor=color(0,255,0)
                              }
      if(this.y+this.size/2>height){this.dy=-1*this.dy;
                                   this.colcor=color(0,0,255)
                              }
      if(this.x-this.size/2<0){this.dx=-1*this.dx;
                              this.colcor=color(255,0,0)
                              }
    }
    checkmouse(){
      //line(this.x,this.y,mouseX,mouseY)
      if(mouseX<this.x+this.size/2 &&
         mouseY<this.x-this.size/2 &&
         mouseX<this.y+this.size/2 &&
         mouseY<this.y-this.size/2 
         ){
         circle(this.x,this.y,this.size*1.5)
         }
   }
  }