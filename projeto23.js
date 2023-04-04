
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos aqui.
    var plane_options = {
    restitution:0.4,
	friction:0.02

	}
    particle1 = Bodies.circle(220,10,10,particle_optionz)
	World.add(world,particle1)
	
	isStatic: true


	Engine.run(engine);
	Engine.update(ensigne)
  

	rotator1 = Bodies.rectangle(250,200,150,20,rotator_options);
	World.add(World,rotator1);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



