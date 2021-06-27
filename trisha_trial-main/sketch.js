var bg,player1,player2,arrow;
var p1,p2,arrows,player;
var gameState=0;
var m1,m2,m3,m4,m5,m6,m7;
var RbGroup=createGroup();
function preload()
{
	bg=loadImage("bg2.jpg");
  m1=loadImage("monster1.png");
  m2=loadImage("monster2.png");
  m3=loadImage("monster3.png");
  m4=loadImage("monster4.png");
  m5=loadImage("monster5.png");
  m6=loadImage("monster6.png");
  m7=loadImage("monster7.png");
  player1=loadImage("player.png");
  player2=loadImage("player1.png");
  arrow=loadImage("arrow.png");
}

function setup() {
	createCanvas(windowWidth,windowHeight);
background(0)
 
  //p1.addImage(player1);
  //p1.scale=0.7;
  button1=createButton("Boy")
    button2=createButton("Girl")
      //p2=createSprite(500,400);
      //p2.addImage(player2);
      button1.position(200,300);
      button1.style('width', '200px');
      button1.style('height', '40px');
    
      button2.position(500,300);
      button2.style('width', '200px');
      button2.style('height', '40px');
    
      fill(255)
    
        text("GAME",100,50);
        text("WLECOME,CHOOSE YOUR AVATAR FROM BELOW",100,200);
        button1.mousePressed(() => {
          p1=createSprite(150,300);
          p1.addImage(player1)  
          p1.scale=1;
          gameState=1
          
        })
        button2.mousePressed(() => {
          p1=createSprite(150,400);
          p1.addImage(player2)
          gameState=1
          p1.scale=0.8;
         
        })

        //obstaclesGroup = new Group();
}


function draw() {
  

  if(gameState===1)
  {
    background(bg)
    button1.hide()
    button2.hide()
    monster();
    if(keyDown("space")){
      spawnArrow();
      
    }
  }
 
  
  drawSprites();
 
}
function spawnArrow()
{
 arrows=createSprite(p1.x+5,p1.y-8);
 arrows.addImage(arrow);
 arrows.velocityX=5;
 arrows.scale=0.1;
}

function monster()
{
 
  var mon1=createSprite(0,random(0,windowHeight-200),100,100);
  var r=random(1,7)
  mon1.addImage("m"+r);
 }

