
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=	Matter.Constraint
var ground,chain1,chain2;
var bob1,bob2,bob3,bob4,bob5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bobDiameter=50;
	startBobPositionX=width/2;
	startBobPositionY=height/4+300;

	//Create the Bodies Here.
	ground=new Ground(400,50,685,45)
	bob1=new bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter)

	bob2=new bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter)
	bob3=new bob(startBobPositionX,startBobPositionY,bobDiameter)
	bob4= new bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter)
	bob5=new bob(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter)
	
	chain1=new Chain(bob1.body,ground.body,-bobDiameter*2,0)
	chain2=new Chain(bob2.body,ground.body,-bobDiameter,0)
	chain3 =new Chain(bob3.body,ground.body,0,0)
	chain4=new Chain(bob4.body,ground.body,+bobDiameter,0)
	chain5=new Chain(bob5.body,ground.body,+bobDiameter*2,0)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  ground.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  drawSprites();
 
}



