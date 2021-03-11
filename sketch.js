var a,b
var car,bike
function setup() {
 createCanvas(1000,800);
  a=createSprite(400, 200, 50, 50);
  b=createSprite(250, 200, 50, 50);
  car=createSprite(200, 400, 50, 50);
 bike=createSprite(700, 400, 50, 50);
 bike.shapeColor="blue"
 car.velocityX=2
 bike.velocityX=-2
}


function draw() {
  background(0);  
a.y=mouseY
a.x=mouseX
if (isTouching(a,b)){
  a.shapeColor="red"
  b.shapeColor="red"
    }
  else{a.shapeColor="green"
  b.shapeColor="green"
}
bounceOff(car,bike)

  drawSprites();

}
