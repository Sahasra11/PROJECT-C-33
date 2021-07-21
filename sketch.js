const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var edges=[];
var snowfall=[];
function preload(){
  
  snow2=loadImage("snow1.jpg");
  snow4=loadImage("snow4.webp");
  
}

function setup() {
  createCanvas(800,400);
  boy=createSprite(300, 350, 50, 100);
  boy.shapeColor="red";
  boy.scale=0.5;

  edges=createEdgeSprites();
  

}



function draw() {
  background(snow2);  

  if(keyDown("space"))
  {
    boy.velocityY=-10;
  }
  boy.velocityY+=-0.5;
  
  boy.collide(edges[3]);
  snow=createSprite(random(0,800),10, 10);
  snow.addImage(snow4);
  snow.scale=0.1;
  snow.velocityY=8;
  drawSprites();
}