const Engine = Matter.Engine
const Bodies = Matter.Bodies 
const World = Matter.World
const Constraint = Matter.Constraint

var engine,world;
var ground;
var block1,block2,block3,block4,block5;
var block6,block7,block8,block9,block10;
var block11,block12,block13,block14,block15;
var block16,block17,block18,block19,block20;
var ball;
var chain;

function setup() {
  createCanvas(1200, 800);
engine=Engine.create()
world=engine.world

ground=new Ground(600,600,1200,20)

block1=new Block(900,100,70,70)
block2=new Block(900,100,70,70)
block3=new Block(900,100,70,70)
block4=new Block(900,100,70,70)
block5=new Block(900,100,70,70)
block6=new Block(900,100,70,70)
block7=new Block(800,100,70,70)
block8=new Block(800,100,70,70)
block9=new Block(800,100,70,70)
block10=new Block(800,100,70,70)
block11=new Block(800,100,70,70)
block12=new Block(800,100,70,70)
block13=new Block(700,100,70,70)
block14=new Block(700,100,70,70)
block15=new Block(700,100,70,70)
block16=new Block(700,100,70,70)
block17=new Block(700,100,70,70)
block18=new Block(700,100,70,70)
block19=new Block(700,100,70,70)
block20=new Block(700,100,70,70)

ball=new Ball(200,200,80,80)
chain=new Chain(ball.body,{x:500,y:50})
}

function draw() {
  background(180);
Engine.update(engine)
 
ground.display()

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

ball.display()
chain.display()
}
function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}
