
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

const Constraint = Matter.Constraint;


function preload()
{
	
}

function setup() {
	createCanvas(1000,700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(500,100,600,50);
	bobObject1 = new Bob(500,600,100);
	bobObject2 = new Bob(600,600,100);
	bobObject3 = new Bob(400,600,100);
	bobObject4 = new Bob(700,600,100);
	bobObject5 = new Bob(300,600,100);
	
	rope1 = new Rope(bobObject1.body,roof.body,0,0);
	rope2 = new Rope(bobObject2.body,roof.body,100,0);
	rope3 = new Rope(bobObject3.body,roof.body,-100,0);
	rope4 = new Rope(bobObject4.body,roof.body,200,0);
	rope5 = new Rope(bobObject5.body,roof.body,-200,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("blue");
  
      roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  
    drawSprites();
 
}

function mouseDragged(){
Matter.Body.setPosition(bobObject5.body,{x:mouseX,y:mouseY});
	
}

