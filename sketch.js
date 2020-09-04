var helicopterIMG, helicopterSprite, packageSprite,packageIMG,parachuteSprite,parachuteIMG;
var packageBody,ground,cloud,cloud1,cloudIMG,part1,part2,part3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

function preload(){
	helicopterIMG = loadImage("helicopter.png");
	packageIMG = loadImage("package.png");
	parachuteIMG = loadImage("parachute.png");
	cloudIMG = loadImage("cloud.png");
}

function setup(){
	createCanvas(800, 700);
	rectMode(CENTER);	

	packageSprite = createSprite(width/2, 80, 10, 10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;

	helicopterSprite = createSprite(width/2, 200, 10, 10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;

	parachuteSprite = createSprite(width/2, 80, 10, 10);
	parachuteSprite.addImage(parachuteIMG);
	parachuteSprite.scale = 0.22;
	parachuteSprite.visible = false;

	groundSprite = createSprite(width/2, height-20, width, 40);
	groundSprite.shapeColor = color("#7C4700");

	cloud = createSprite(100, 100, 10, 10);
	cloud.addImage(cloudIMG);
	cloud.scale = 0.3;

	cloud1 = createSprite(670, 150, 10, 10);
	cloud1.addImage(cloudIMG);
	cloud1.scale = 0.3;

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.rectangle(width/2, 200, 5, 5, {restitution:1.1, isStatic:true});
	World.add(world, packageBody);
	
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);

	part1 = new Box(290,595,20,100);
	part2 = new Box(400,635,200,20);
	part3 = new Box(510,595,20,100);

	Engine.run(engine);  
}


function draw() {
  rectMode(CENTER);
  background("#89CFDF");

  packageSprite.x = packageBody.position.x;
	packageSprite.y = packageBody.position.y;
	
  parachuteSprite.x = packageBody.position.x;
  parachuteSprite.y = packageBody.position.y - 41;

  if(parachuteSprite.y > 220 && parachuteSprite.y < 580){
		parachuteSprite.visible = true;
	} else{
		parachuteSprite.visible = false;
	}
	drawSprites();
	
	part1.display();
	part2.display();
	part3.display();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);    
  }
}