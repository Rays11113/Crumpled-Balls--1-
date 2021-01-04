
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball; 

function preload()
{
  //Matter.Bodies.circle(310, 350, 3, paperObject, 0);
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  dustbin1 = new Dustbin (600, 600, 100, 10);
  dustbin2 = new Dustbin (550, 555, 10, 100);
  dustbin3 = new Dustbin(650, 555, 10, 100 );
  ground = new Ground (400, 615, 800, 20 );

  Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  dustbin1.display ();
  dustbin2.display ();
  dustbin3.display ();
  ground.display ();
  ellipseMode(RADIUS);
ellipse( 56, 46 , 20, 20);
drawSprites();

  
}

function keyPressed () {
	if (keyCode=== UP_ARROW) {
    Matter.Body.applyForce (paperObject.body, paperObject.body.position,{x:85,y:-85});
    Matter.Bodies.circle(310, 350, 3, paperObject, 0);
}
	}




