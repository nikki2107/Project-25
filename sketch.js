
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper
var ground
var dustbin
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    paper = new Paper(210,565,30,30)
    ground = new Ground(600,600,1400,20)
    dustbin = new Dustbin(530,520,20,60)
   
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(180,150);
  paper.display();
  ground.display();
  dustbin.display();
  
  drawSprites();
 
}

function keyPressed(){
  if (keyCode === UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})
  }
}

