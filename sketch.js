
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var ball1,ball2,ball3,ball4,roof,rope1,rope2,rope3,rope4;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ball1=new BALLS(250	,400,10,10);
	ball2=new BALLS(350,400,10,10);
	ball3=new BALLS(450,400,10,10);
	ball4=new BALLS(550,400,10,10);
	
    roof=new ROOFS(width/2,300,405,20);
	rope1=new ROPES(ball1.body,roof.body,-145,0);
	rope2=new ROPES(ball2.body,roof.body,-45,0);
	rope3=new ROPES(ball3.body,roof.body,55,0);
	rope4=new ROPES(ball4.body,roof.body,155	,0);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("gray");
  
  drawSprites();
 ball1.display("pink");
 ball2.display("pink");
 ball3.display("pink");
 ball4.display("pink");

 roof.display("black");
 rope1.display();
 rope2.display();
 rope3.display();
 rope4.display();
}
function keyPressed(){
	if (keyCode===UP_ARROW){
	Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-50,y:-50});	
	}
}


