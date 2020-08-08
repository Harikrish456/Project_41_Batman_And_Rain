const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var positionX;
var positionY;
var boy;
var umbrella;
var drops = [];
var drop;
var drop2;
var lightningImg;
var lightning;
var dropImg;
var pos;

function preload(){
   boy = loadImage("image/boy.png") ;

   lightningImg = loadImage("image/lightning.png");
   lightning = createSprite(0,100,50,50);
   lightning.addImage(lightningImg);
   lightning.visible = false;
}

function setup(){
  createCanvas(400,400); 
  engine = Engine.create();
  world = engine.world;

  umbrella = new Umbrella(170,300);
  umbrella.scale = 2;
for(var i = 0; i<500;i++){
  drops.push( new Drop(random(0,400),random(-300,0),10));
  lightning.visible = true;
}
}

function draw(){
  background("red");
  Engine.update(engine);
  
  for(var i = 0; i<100;i++){
    drops[i].display();
  }

  if(frameCount % 120 === 0){
    lightning.visible = false;
  }
    umbrella.display();
    Drop.update();
  drawSprites();  
} 


