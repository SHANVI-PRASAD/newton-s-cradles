
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

const Constraint = Matter.Constraint;
var ball1,rope1,engine,world

function setup() {
	createCanvas(600,600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	roof=new Ground(200,200,300,20);

	ball1 = new ball(200,500,20,20);
	rope1 = new SlingShot(ball1.body,{x:200,y:200});

	ball2 = new ball(160,500,20,20);
	rope2 = new SlingShot(ball2.body,{x:160,y:200});

	ball3 = new ball(240,500,20,20);
	rope3 = new SlingShot(ball3.body,{x:240,y:200});

	ball4 = new ball(280,500,20,20);
	rope4 = new SlingShot(ball4.body,{x:280,y:200});

	ball5 = new ball(120,500,20,20);
	rope5 = new SlingShot(ball5.body,{x:120,y:200});

	ball6 = new ball(80,500,20,20);
	rope6 = new SlingShot(ball6.body,{x:80,y:200});

	ball7 = new ball(320,500,20,20);
	rope7 = new SlingShot(ball7.body,{x:320,y:200});

;
	Engine.run(engine);
	//Render.run(render);
  
}

function draw() {
  rectMode(CENTER);
  background(230);
  roof.display();

  rope1.display()
 ball1.display();
 rope2.display()
 ball2.display();
 rope3.display()
 ball3.display();
 rope4.display();
 ball4.display();
 rope5.display();
 ball5.display();
 rope6.display();
 ball6.display();
 rope7.display();
 ball7.display();

 
}

function mouseDragged() {
  

    	Matter.Body.setPosition(ball6.body,{x:mouseX, y:mouseY});

  	}








