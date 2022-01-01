
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var boy,ground,rock,tree,m1,m2,m3,m4,m5,m6,m7, m8, m9, m10, chain;

function preload()
{
	boy = loadImage("boy.png");
	tree = loadImage("tree.png");
	backgroundImg = loadImage("bg.png");
}

function setup() {
	createCanvas(1280, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	rock = new stone(320,225);
	chain = new SlingShot(rock.body,{x:320 , y:225});
	m1 = new mango(900,130,5);
	m2 = new mango(950,120,5);
	m3 = new mango(1000,100,5);
	m4 = new mango(980,60,5);
	m5 = new mango(1050,60,5);
	m6 = new mango(1180,110,5);
	m7 = new mango(1150,90,5);
	m8 = new mango(1120,100,5);
	m9 = new mango(850,130,5);
	m10 = new mango(1300,120,5);
	m1.scale = 0.3;
	m2.scale = 0.3;
	m3.scale = 0.3;
	m4.scale = 0.3;
	m5.scale = 0.3;
	m6.scale = 0.3;
	m7.scale = 0.3;
	m8.scale = 0.3;
	m9.scale = 0.3;
	m10.scale = 0.3;

	ground = Bodies.rectangle(640,385,1290,20,{isStatic:true});
	World.add(world,ground);
	
	Engine.run(engine);
	  
}
function mouseDragged(){
    Matter.Body.setPosition(rock.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
    chain.fly();
}


function draw() {
	if (keyIsPressed === true) {
		chain.attach();
	  }

    rectMode(CENTER);
    background(backgroundImg);

	  //number of mangoes plucked
	  strokeWeight(3);
	  fill("black");
	  textAlign("center");
	  textSize(30);
	  text("press space key to create rope, click on ground to remove rope " +  285, 25); 

    push();
    rect(width/2,400,width,20);
	chain.display();
    drawSprites();
    console.log(rock);
    imageMode(CENTER);
    image(boy,400,300,250,300);
	image(tree,1000,180,400,400);
	rock.display();
	m1.display();
	m2.display();
	m3.display();
	m4.display();
	m5.display();
	m6.display();
	m7.display();
	m8.display();
	m9.display();
	m10.display();
	collision(rock,m1);
	collision(rock,m2);
	collision(rock,m3);
	collision(rock,m4);
	collision(rock,m5);
	collision(rock,m6);
	collision(rock,m7);
	collision(rock,m8);
	collision(rock,m9);
	collision(rock,m10);

/*	strokeWeight(3);
	stroke(0);
	fill(255);
    text('Let us Pluck some mangoes', 285, 22);	*/
	
}
function collision(a,b){
	var d = dist(a.body.position.x,a.body.position.y,b.body.position.x,b.body.position.y)
	if(d <= 50){
		Body.setStatic(b.body,false);
	}

/*function NumberOfCollisions(a,b) {
	if (collision(rock,m1) || collision(rock,m2) || collision(rock,m3) || collision(rock,m4) || collision(rock,m5) || collision(rock,m6) || collision(rock,m7) || collision(rock,m8) || collision(rock,m9) || collision(rock,m10) ) {
		//text("Number of mangoes plucked : " + NumberOfCollisions )
	}
	}*/
}