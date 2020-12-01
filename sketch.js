var fixedRect, movingRect;
var o1,o2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  o1=createSprite(200,200,50,50)
  o1.shapeColor="blue"
  o2=createSprite(200,200,50,50)
  o2.shapeColor="blue"
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  

o2.x=mouseX;
o2.y=mouseY;
if(isTouching(o2,o1)){
  o1.shapeColor="red";
  o2.shapeColor="red";
}else{
  o1.shapeColor="blue";
  o2.shapeColor="blue";
}

  bounceOff(movingRect,fixedRect);

  drawSprites();
}

