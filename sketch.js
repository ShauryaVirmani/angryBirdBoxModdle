const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,pig1,pig2,log1,log2,box3,box4,log3,log4,box5,bird;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(125,380,50,50);
    box2 = new Box(275,380,50,50);
    ground = new Ground(200,height,400,20)
    pig1 = new Pig(200,370);
    log1 = new Log(200,330,200,PI/2);
    box3 = new Box(125,310,50,50);
    box4 = new Box(275,310,50,50);
    log2 = new Log(200,260,200,PI/2);
    pig2 = new Pig(200,300);
    box5 = new Box(200,240,50,50); 
    log3 = new Log(150,210,120,PI/5);
    log4 = new Log(240,210,120,-PI/5);
    bird = new Bird(100,100);
   


}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    log2.display();
    pig2.display();
    box5.display();
    log3.display();
    log4.display();
    bird.display();

}