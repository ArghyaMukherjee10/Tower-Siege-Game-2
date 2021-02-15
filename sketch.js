
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var polygon;
var engine, world;
var block1,block2,block3,block4,block5,block6,
 block7,block8,block9,block10,block11,block12,
block13,block14,block15,block16,block17,block18
,block19,block20,block21,block22,block23,block24,
block25;
var slingShot1,slingShot2;
var slingShot1Image,slingShot2Image;
var ground1,ground2,ground3;
var score = 0;
var backgroundImg

function preload()
{
	polygonImage = loadImage("polygon.png")
    slingShot1Image = loadImage("sling1.png")
    slingShot2Image = loadImage("sling2.png")
    getTime()
}
function setup(){
    var canvas = createCanvas(1100,700);
    engine = Engine.create();
    world = engine.world;
    slingShot1 = createSprite(110,490)
    slingShot1.addImage(slingShot1Image)
    slingShot1.scale = 0.7
    slingShot2 = createSprite(93,465)
    slingShot2.addImage(slingShot2Image)
    slingShot2.scale =0.6;

   polygon = new Polygon(60,500,50,50)

  block1 = new Block(330,435,30,40)
  block2 = new Block(360,435,30,40)
  block3 = new Block(390,435,30,40)
  block4 = new Block(420,435,30,40)
  block5 = new Block(450,435,30,40)
  block6 = new Block(480,435,30,40)
  block7 = new Block(510,435,30,40)

  block8 = new Block(360,395,30,40)
  block9 = new Block(390,395,30,40)
  block10 = new Block(420,395,30,40)
  block11 = new Block(450,395,30,40)
  block12 = new Block(480,395,30,40)

  block13 = new Block(390,355,30,40)
  block14 = new Block(420,355,30,40)
  block15 = new Block(450,355,30,40)

  block16 = new Block(420,315,30,40)

  block17 = new Block(790,335,30,40)
  block18 = new Block(820,335,30,40)
  block19 =new  Block(850,335,30,40)
  block20 = new Block(880,335,30,40)
  block21 = new Block(910,335,30,40)

  block22 = new Block(820,295,30,40)
  block23 = new Block(850,295,30,40)
  block24 = new Block(880,295,30,40)

  block25 = new Block(850,255,30,40)

   ground1 = new Ground1(500,700,1500,20)
   ground2 = new Ground1(420,470,300,20)
   ground3 = new Ground1(850,370,300,20)
   ground4 = new Ground1(110,565,100,15)

   slingshot = new Slingshot(polygon.body,{x:90,y:450})

}
function draw(){
    if (backgroundImg){
        background(backgroundImg);
     }else  {
        background(0)
     }
    Engine.update(engine);
    textSize(50)
    text("Score = "+ score,550,50)
    polygon.display()

    block1.display()
    block2.display()
    block3.display()
    block4.display()
    block5.display()
    block6.display()
    block7.display()

    block8.display()
    block9.display()
    block10.display()
    block11.display()
    block12.display()

    block13.display()
    block14.display()
    block15.display()

    block16.display()

    block17.display()
    block18.display()
    block19.display()
    block20.display()
    block21.display()

    block22.display()
    block23.display()
    block24.display()

    block25.display()
    
    ground1.display()
    ground2.display()
    ground3.display()
    ground4.display()

    slingshot.display();

  drawSprites();
  }
  function mouseDragged(){
    Matter.Body.setPosition(polygon.body,{x: mouseX, y: mouseY})
}
function mouseReleased(){
    slingshot.fly()    
}
function keyPressed(){
    if (keyCode===32){
        slingshot.attach(polygon.body)
}
}
async function getTime(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    var responseJSON = await response.json()
    var DateTime = responseJSON.datetime
    var hour = DateTime.slice(11,13)
    if (hour >= 06 && hour <= 19){
      bg = "bg.png"
    }else {
        bg = "bg2.jpg"
    }backgroundImg = loadImage(bg)
   
}