
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render=Matter.Render;
var paperobject;
var groundobject;
var dustbinobject;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
	
	engine = Engine.create();
	world = engine.world;

	paperobject=new paper(200,450,40)
	groundobject=new ground(width/2,670,width,20)
    dustbinobject=new dustbin(1200,650)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paperobject.display();
  groundobject.display();
  dustbinobject.display();
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	   
   Matter.Body.applyForce(paperobject.body,paperobject.body.position,{x:85,y:-85})
	   
	 }
   }
   




