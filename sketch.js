

var jake, jake_running, jake_collided;
var path, invisibleground, pathImage;
var leftBoundary,rightBoundary;

function preload(){
   jake_running = loadAnimation("Jake1.png","Jake2.png","jake3.png","jake4.PNG","jake5.png");
  //jake_collided = loadImage("jake_collided.png");
  
  groundImage = loadImage("path.png");
}

function setup(){
  createCanvas(400,400)

  
  //create a path sprite
  path = createSprite(200,180,400,20);
  path.addImage(groundImage);
 // path.y = path.height /2;
  path.velocityY = 5;
  path.scale=1.3
  
  jake = createSprite(200,350,20,50)
  jake.addAnimation("running", jake_running);
  jake.scale = 0.7;
  
  //creating invisible ground
  invisibleground = createSprite(200,190,400,10);
  invisibleground.visible = false;
  
  leftBoundary=createSprite(15,320,10,120);
  rightBoundary=createSprite(385,320,10,120);
  leftBoundary.visible=false;
  rightBoundary.visible=false;
}

function draw() {
  background(120);
 jake.x=World.mouseX
 edges= createEdgeSprites();
jake.collide(leftBoundary);
jake.collide(rightBoundary);
  jake.collide(edges[3]);
  jake.collide(edges[1]);
  jake.collide(edges[0]);
  
  //code to reset the back ground
  if(path.y > 400){
    path.y =height/2
  }
    
  
 // console.log(jake.x)
  

  
  
  
 
  
  //stop jake from falling down
  jake.collide(invisibleground);
  drawSprites();
  
}

