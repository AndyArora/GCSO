var car 
var wall

function setup() {
  createCanvas(1000,400);
 car = createSprite(50, 200, 50, 50);
 car.shapeColor = "white"
 wall = createSprite(950,200,60,180)
 wall.shapeColor = "gray"
 speed = random(45,60)
 weight = random(1522,3000)
 car.velocityX = speed;
}






function draw() {
  background(0);
    
  if(car.isTouching(wall)){
    car.velocityX = 0;
   deformation = 0.5*weight*speed*speed/22500
if(deformation>180){
  wall.shapeColor = "red"
}

if(deformation>80&&deformation<180){
  wall.shapeColor = "yellow"
}

if(deformation<80){
  wall.shapeColor = "green"
  
}
}
drawSprites();
}