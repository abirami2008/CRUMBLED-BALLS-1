
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var dustbin1, dustbin2, dustbin3;

function preload()
{
	
}

function setup() {
  createCanvas(800, 700);
  rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  
  ball = new Ball(200,400,40);
  ground = new Ground(400,650,800,20);

  dustbin1 = createSprite(580,635,200,15);
  dustbin1.shapeColor = "red";

  dustbin2 = createSprite(487,600,15,80);
  dustbin2.shapeColor = "red";

  dustbin3 = createSprite(672,600,15,80);
  dustbin3.shapeColor = "red";
  
  
	Engine.run(engine);
  
}


function draw() {

  background(0);

  ball.display();
  dustbin1.display();
  ground.display();
  drawSprites();
}

function keyPressed(){

if(keyCode === UP_ARROW){

Matter.Body.applyForce(ball.body, ball.body.position, {x:85, y:-85})

}

}



