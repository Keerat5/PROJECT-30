const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var polygon,polygonImg;

function preload(){
  polygonImg = loadImage("Hexagon.jpg");
}

function setup() {
  createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600,585,1200,30);
  stand1 = new Ground(460,500,230,20);
  stand2 = new Ground(865,265,150,20);

  box1 = new Box(374,410,30,40);
  box2 = new Box(404,410,30,40);
  box3 = new Box(434,410,30,40);
  box4 = new Box(464,410,30,40);
  box5 = new Box(494,410,30,40);
  box6 = new Box(524,410,30,40);

  box7 = new Box(390,380,30,40);
  box8 = new Box(420,380,30,40);
  box9 = new Box(450,380,30,40);
  box10 = new Box(480,380,30,40);
  box11 = new Box(510,380,30,40);

  box12 = new Box(405,340,30,40);
  box13 = new Box(435,340,30,40);
  box14 = new Box(465,340,30,40);
  box15 = new Box(495,340,30,40);

  box16 = new Box(420,300,30,40);
  box18 = new Box(480,300,30,40);
  box17 = new Box(450,300,30,40);

  box19 = new Box(440,260,30,40);
  box20 = new Box(470,260,30,40);

  box21 = new Box(455,220,30,40);

  box22 = new Box(834,217,30,40);
  box23 = new Box(864,217,30,40);
  box24 = new Box(894,217,30,40);

  box25 = new Box(849,177,30,40);
  box26 = new Box(879,177,30,40);

  box27 = new Box(861,137,30,40);

  var polygon_options ={
    'restitution':0.02, 
    'friction':0.5, 
    'density':1.2
  }
  polygon = Bodies.circle(195,275,40,polygon_options);
  World.add(world,polygon);

  slingshot = new Slingshot(this.polygon,{x:170,y:275});


}

function draw() {
  background("#2D3E53"); 

  Engine.update(engine);

  ground.display();
  strokeWeight(4);
  stand1.display();
  strokeWeight(4);
  stand2.display();
  slingshot.display();

  fill("green");
  strokeWeight(2);
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  fill("red");
  strokeWeight(2);
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  fill("blue");
  strokeWeight(2);
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  fill("yellow");
  strokeWeight(2);
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  fill("pink");
  strokeWeight(2);
  box21.display();

  fill("purple");
  strokeWeight(2);
  box22.display();
  box23.display();
  box24.display();

  fill("grey");
  strokeWeight(2);
  box25.display();
  box26.display();

  fill("silver");
  strokeWeight(2);
  box27.display();



  imageMode(CENTER);
  image(polygonImg, polygon.position.x, polygon.position.y, 50, 40);

  text("x:"+mouseX,100,100); 
  text("y:"+mouseY,100,130);
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  slingshot.fly();
}

function keyPressed() {
  if(keyCode === 32){
    slingshot.attach(this.polygon);
  }
}
