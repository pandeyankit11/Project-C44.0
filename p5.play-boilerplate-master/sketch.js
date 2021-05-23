var bg,blastImg,badge1,badge2,badge3,helicopter,wall;
var form,game,player;

function preload (){
  bg =loadImage("images/bg.jpg");
  blastImg =loadImage("images/blast.png");
  badge1 =loadImage("images/badge1.jpg");
  badge2 =loadImage("images/badge2.jpg");
  badge3 =loadImage("images/badge3.png");
  helicopter =loadImage("images/helicopter.png");
  wall =loadImage("images/wall.jpg");
 

}




function setup() {
  createCanvas(1530,740);
  form =new Form();





  
}

function draw() {
  background(bg);






  
  drawSprites();
}