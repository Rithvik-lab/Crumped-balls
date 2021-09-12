
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;

function preload()
{
	
}

function setup() {
	createCanvas(900, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	var ball_options = {
		isStatic:false,restitution:0.3,friction:0,density:1.2
	}

	groundObj = new Ground(width/2,670,width,20);
	leftside = new Ground(800,600,20,120);
	rightside = new Ground(600,600,20,120);

	ball = Matter.Bodies.circle(100,100,40,ball_options);
	World.add(world,ball);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  groundObj.display();
  rightside.display();
  leftside.display();
  ellipse(ball.position.x,ball.position.y,40,40);

  
  
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball,ball.position,{x:85,y:-85});
	}
}



