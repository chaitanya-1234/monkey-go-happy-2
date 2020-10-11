var monkey,monkey_run,ig,scenery,scene;
var bananaGroup,banana_floats,banana;
var stone,stoneGG,stoneGroup;
var count;

function preload(){
  scene=loadImage("jungle.jpg");

monkey_run=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png");

banana_floats=loadImage("banana.png");
  
stoneGG=loadImage("stone.png");
}

function setup() {
  createCanvas(800, 400);
   scenery=createSprite(200,100,20,20);
  scenery.addImage("moveON",scene);
  scenery.x=scenery.width/2
  scenery.scale=1.5
  
  monkey=createSprite(50,280,20,20);
  monkey.addAnimation("run",monkey_run);
  monkey.scale=0.13;
  
  ig=createSprite(400,380,800,3);
  ig.visible=false 
  
 bananaGroup=new Group();
  stoneGroup=new Group();
  
  score = 0;
}

  
function draw() {
  background(220);
  edges=createEdgeSprites()
 text(mouseX+","+mouseY,mouseX,mouseY)
    
    stroke("white")
  textSize(20)
  fill("white")
  text("Score"+count,600,50)
  text.depth=scenery.depth+1
  
  
 
  
   scenery.velocityX=-5
  
 if(keyDown("space")&& monkey.y >= 250){ 
   monkey.velocityY=-7
    }
   if (scenery.x < 0 ){
scenery.x = scenery.width/2;
} 
 
  
 monkey.velocityY = monkey.velocityY + 0.3;
  monkey.collide(ig);
  
 
  
  
  
  
  
  switch(count){
    case 10: monkey.scale=0.14;
      break;
      case 20: monkey.scale=0.16;
      break;
      case 30: monkey.scale=0.18;
      break;
    case 40: monkey.scale=0.20;
      break;
      default:break;
  }
    
    
    
    
  if (bananaGroup.isTouching(monkey)){
    score =score+2
  }

  if (monkey.isTouching(stoneGroup)){
      monkey.scale=0.13
      }
  
   spawnBananas();
   spawnStones();
 
  drawSprites();
  
 
}

function spawnBananas(){
  if (frameCount % 130  === 0) {
    var banana = createSprite(800,120,40,10);
    banana.y = Math.round(random(140 ,200));
    banana.addImage("bananaimg",banana_floats);
    banana.scale = 0.1 ;
    banana.velocityX = -3;
    
    banana.depth=scenery.depth+1
    
     bananaGroup.add(banana);
    
    
  }
}

function spawnStones(){
  if(frameCount % 150 === 0) {
    var stone = createSprite(800,400,20,20);
    stone.velocityX = -4;
    stone.addImage("stoneimg",stoneGG)
    
  
  
   stone.scale = 0.5;
  
  
  stoneGroup.add(stone);}
}