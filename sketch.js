
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
  ds=loadImage("sprites/dust.png")
}
function setup() {
	createCanvas(1200, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
dustbin1=new Dustbin(900,350,20,130)
dustbin2=new Dustbin(1000,400,180,20)
dustbin3=new Dustbin(1100,350,20,130)
ball1=new Ball(300,340)

var options={
  isStatic:true
}
ground=Bodies.rectangle(600,480,1200,20,options)
World.add(world,ground)
	Engine.run(engine);

  
}


function draw() {
  Engine.update(engine)

  background("white");

  dustbin1.fetch()
  dustbin2.fetch()
  dustbin3.fetch()
  ball1.fetch()
image(ds,870,250,250,200)
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,1200,20)
  
  
  
 
}
function keyPressed(){
  if (keyCode===UP_ARROW){
    Matter.Body.applyForce(ball1.body,ball1.body.position,{x:100,y:-140})
  }
}



