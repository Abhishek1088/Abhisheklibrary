function setup() {
  createCanvas(800,400);
  fixedrect = createSprite(400, 200, 50, 50);
  movingrect = createSprite(200,100,10,15);
  rect1 = createSprite(250,130,10,20)
  rect2 = createSprite(100,310,10,17)
}

function draw() {
  background(255,255,255);  
  movingrect.x=mouseX
  movingrect.y=mouseY

  drawSprites();

if(istouching(fixedrect,movingrect)){
  fixedrect.shapeColor="green"
  movingrect.shapeColor="green"
}
else{
  fixedrect.shapeColor="red"
  movingrect.shapeColor="blue"
}
if(istouching(rect1,movingrect)){
  rect1.shapeColor="green"
  movingrect.shapeColor="green"
}
else{
  rect1.shapeColor="red"
  movingrect.shapeColor="blue"
}

if(istouching(rect2,movingrect)){
  rect2.shapeColor="green"
  movingrect.shapeColor="green"
}
else{
  rect2.shapeColor="red"
  movingrect.shapeColor="blue"
}

}


