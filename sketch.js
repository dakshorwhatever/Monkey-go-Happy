
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var score
var survivalTime

function preload(){
  
  
monkey_running =         loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
bananaImage = loadImage("banana.png");
obstacleImage = loadImage("obstacle.png");
 
obstacleGroup = createGroup();
bananaGroup = createGroup();
survivalTime=0
score=0
}

function setup() {
createCanvas(600,400)
 monkey = createSprite(80,300)
 monkey.addAnimation("running",monkey_running)
 monkey.scale = 0.1
  
 invisibleGround = createSprite(300,380,600,40)
 invisibleGround.shapeColor = ("brown ")

 
  
}


function draw() {
background("white")
  stroke("black")
  textSize(20)
  fill("black")
  text("Score: " + score, 500,50)
  
  monkey.collide(invisibleGround)
  if(keyDown("space")){
  monkey.velocityY = -12
}
  monkey.velocityY = monkey.velocityY + 0.8 
  invisibleGround.velocityX = -6

switch(score){
    case 10: monkey.scale = 0.12
      break;
    case 20: monkey.scale = 0.14
      break;
    case 30: monkey.scale = 0.16
      break;
    case 40: monkey.scale = 0.18
      break;
      default: break;
  }
 


  if(invisibleGround.x<300){
  invisibleGround.x = invisibleGround.width/2
}
  if(bananaGroup.isTouching(monkey)){
    score = score+2
    bananaGroup.destroyEach();
}
  if(obstacleGroup.isTouching(monkey)){
    monkey.scale = 0.1
    obstacleGroup.destroyEach();
  }
  
  console.log(score)
  console.log(monkey.scale)
  fruits();
  spawnObstacles();
  drawSprites();
  
  

}



function spawnObstacles(){
  if(frameCount%300 === 0){
 obstacle = createSprite(350,325)
 obstacle.addImage(obstacleImage)
 obstacle.scale = 0.2
 obstacleGroup.add(obstacle)
 obstacle.velocityX = -6  
 obstacle.lifetime = 70
    }
}

function fruits(){
  if(frameCount%80 === 0){
    banana = createSprite(300,120)
    banana.addImage(bananaImage)
    banana.scale = 0.11
    banana.velocityX = -6
    banana.x = Math.round(random(270,390))
    banana.y = Math.round(random(120,200))
    banana.lifetime = 50
    bananaGroup.add(banana)
  }
}