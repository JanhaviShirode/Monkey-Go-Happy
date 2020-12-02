
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup,obstacleGroup;
var score=0;
var ground;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
   monkey= createSprite(50,350,20,50);
  monkey.addAnimation("running", monkey_running);
  monkey.scale=0.1;
   ground = createSprite(20,370,800,20);

  ground.x = ground.width /2;
   bananaGroup=new Group();
  
}


function draw() {
background(180);
  fill("black");
    text("Score: "+ score, 200,50);
   score = score + Math.round(getFrameRate()/60);
  
 
  
  monkey.collide(ground);
  ground.velocityX=-2
       if (ground.x < 0){
      ground.x = ground.width/2;
    }
   if(keyDown("space") && monkey.y >= 159) {
      monkey.velocityY = -12;
    }
  
    monkey.velocityY = monkey.velocityY + 0.8
 if(monkey.isTouching(bananaGroup)){
    bananaGroup.destroyEach();
 }
  
   spawnObstacles();
  spawnBananas();
   drawSprites();
}
 function spawnObstacles() {
  //write code here to spawn the obstacles
  if (frameCount % 160 === 0) {
    var obstacle = createSprite(600,345,10,40);
   // obstacle.y = Math.round(random(80,420));
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -3;
    
     //assign lifetime to the variable
    obstacle.lifetime = 200;
    
    //adjust the depth
   
    
}





 }
     function spawnBananas() {
  //write code here to spawn the obstacles
  if (frameCount % 80 === 0) {
    var banana = createSprite(400,300,10,40);
    banana.y = Math.round(random(120,300));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
  banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
    bananaGroup.add(banana);
    
    //adjust the depth
   
    
}
     }