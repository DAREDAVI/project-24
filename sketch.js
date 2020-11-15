const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin1, paper,ground,dustbin2,dustbin3;
var world;

function preload()
{
	
}

function setup() {
	createCanvas(1270, 570);
		
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	paper=new Paper(400,390,70,100);
	ground=new Ground(width/2,560,width,20);
	dustbin1=new Dustbin(1200,500,20,100);
	dustbin2=new Dustbin(1000,500,20,100);
	dustbin3=new Dustbin(1100,540,200,20);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("red");
 
  
  paper.display();
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});

  
	}
}