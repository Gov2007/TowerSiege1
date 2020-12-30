const Bodies = Matter.Bodies;
const World = Matter.World;
const Engine = Matter.Engine;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var block1, block2, block3, block4, block5, block6, block7, block8, block9;
var sling, ground, world,  polygon;

function preload()
{

 }

function setup() {
  createCanvas(800, 700);
  rectMode(CENTER);
  engine = Engine.create();
	world = engine.world;
  ground = new Ground(400,400,230,20);
  World.add(world, ground);

  block1 = new Block(330, 235, 30, 40);
  block2 = new Block(360, 235, 30, 40);     
  block3 = new Block(390, 235, 30, 40);
  block4 = new Block(420, 235, 30, 40);
  block5 = new Block(450, 235, 30, 40);
  block6 = new Block(360, 195, 30, 40);
  block7 = new Block(390, 195, 30, 40);
  block8 = new Block(420, 195, 30, 40);
  block9 = new Block(390, 155, 30, 40);
 
  
  polygon =new Circle(100, 200, 20);
 // World.add(world, polygon);
  sling = new SlingShot(polygon.body, {x:130, y:200});
  Engine.run(engine);
  
}


function draw() {
 // rectMode(CENTER);
  background("white");
  Engine.update(engine);
 
  display();

  
 
}



function display() {
//  Engine.update(engine);

  polygon.display();
  sling.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();                                                                          
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  ground.display();
  drawSprites();
}


function keyPressed() {


  if (keyCode === UP_ARROW) {

    Matter.Body.applyForce(circle1,circle1.position,{x:55,y:-75});
  
  }



else if (keyCode === LEFT_ARROW) {

  boxleftSprite.x=boxleftSprite.x-20;  
  boxrightSprite.x=boxrightSprite.x-20;
  boxBase.x=boxBase.x-20;
  translation={x:-20,y:0}
  Matter.Body.translate(boxRightBody, translation)
  Matter.Body.translate(boxLeftBody, translation)
  Matter.Body.translate(boxBase, translation)
  
 
 } else if (keyCode === RIGHT_ARROW) {
  boxleftSprite.x=boxleftSprite.x+20;  
  boxrightSprite.x=boxrightSprite.x+20;
  boxBase.x=boxBase.x+20;
  translation={x:20,y:0}
  Matter.Body.translate(boxRightBody, translation)
  Matter.Body.translate(boxLeftBody, translation)
  Matter.Body.translate(boxBase, translation)
}
}

function mouseDragged() {

  Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY})

}

function mouseReleased () {

  sling.fly();
  
}


