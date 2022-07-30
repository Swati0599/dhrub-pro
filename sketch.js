/*var backgroundImg;
var manStand, manRun, manImage, manAnimation;
var enemy1 , enemy2 , enemy3 , enemy4 , enemy5 , enemy6 , enemy7 , enemy8 , enemy9 , enemy10 , enemy11 , enemy12 , enemy13 , enemy14 , enemy15 , enemy16 , enemy17 , enemy18 , enemy19 , enemy20 ;
var sShip, sShipImg;
var bullet , bullet2 , bulletImg  , bulletImg2 ;

var wall1 , wall2 ;

var factory1, factory1Img;
var factory2, factory2Img;
var factory3, factory3Img;
var factory4, factory4Img;
var factory5, factory5Img;
var factory6, factory6Img;

var bulletGroup ;
var cover, coverImg;
var enemy;

function preload() {

  backgroundImg = loadImage("assets/bg1.jpg");
  factory1Img = loadImage("assets/factory 1.png");
  factory2Img = loadImage("assets/factory 2.png");
  factory3Img = loadImage("assets/factory 3.png");
  factory4Img = loadImage("assets/factory 4.png");
  factory5Img = loadImage("assets/factory 5.png");
  factory6Img = loadImage("assets/factory 6.png");

  coverImg = loadImage("assets/sack.png");

  manImage = loadAnimation("assets/p5.png");
  manAnimation = loadAnimation("assets/p2.png", "assets/p3.png", "assets/p4.png");
  
  enemyImg = loadImage(  "assets/enemy.png" );  //, "assets/enemy.png" , "assets/enemy-.png" ,  "assets/enemy-.png" )
  
  bulletImg = loadImage("assets/bullet.png");
  bulletImg2 = loadImage("assets/bullet-.png");
  
  spaceShipImg=loadImage("assets/spaceship.png");

}
function setup() {
  var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  if (isMobile) {
    canW = diplayWidth;
    canH = displayHeight;
    createCanvas(diplayWidth + 80, displayHeight);
  }
  else {
    canW = windowWidth;
    canH = windowHeight;
    createCanvas(windowWidth, windowHeight);
  };

  manStand = createSprite(250, 500, 60, 60);
  manStand.addAnimation("man", manImage);
  manStand.scale = 3;
  manStand.addAnimation("man2", manAnimation);

  enemy1 = createSprite(1250 , 500 , 60 , 60);
  enemy1.addImage(enemyImg);
  enemy1.scale = 3;
  enemy1.velocityX = -4

  enemy2 = createSprite(1250 , 500 , 60 , 60);
  enemy2.addImage(enemyImg);
  enemy2.scale = 3;
  enemy2.velocityX = -3

  enemy3 = createSprite(1250 , 500 , 60 , 60);
  enemy3.addImage(enemyImg);
  enemy3.scale = 3;
  enemy3.velocityX = -2

  enemy4 = createSprite(1250 , 500 , 60 , 60);
  enemy4.addImage("enemy",enemyImg);
  //enemy4.addImage(spaceShipImg);
  enemy4.scale = 3;
  enemy4.velocityX = -1
  bulletGroup=createGroup()

}


function draw() {
  background(backgroundImg);
  if (keyWentDown(RIGHT_ARROW)) {
    manStand.changeAnimation("man2", manAnimation);
    manStand.x += 2;
    manStand.velocityX=2;
  }
  if (keyWentUp(RIGHT_ARROW)) {
    manStand.changeAnimation("man", manImage)
    manStand.velocityX=0
  }
    if(keyDown('space')){
      spawnBullet();

    }

    if(bulletGroup.isTouching(enemy1)){
      enemy1.destroy();
      bulletGroup.destroyEach();
    } 

    if(bulletGroup.isTouching(enemy2)){
      enemy2.destroy();
      bulletGroup.destroyEach();
    }  
     
    if(bulletGroup.isTouching(enemy3)){
      enemy3.destroy();
      bulletGroup.destroyEach();
    } 

    if(bulletGroup.isTouching(enemy4)){
      enemy4.addImage("enemy",spaceShipImg)
      enemy4.scale=0.8;
      //comment the below line if you want to keep moving 
      enemy4.velocityX=0
      bulletGroup.destroyEach();

    }     
drawSprites();

}

function spawnBullet(){
  bullet = createSprite(310 , 520 , 60 , 60);
  bullet.addImage(bulletImg);
  bullet.scale = 0.03;
  bullet.velocityX = 40;
  bullet.lifetime = 50;
  bullet.x = manStand.x ;
  bulletGroup.add(bullet)
 
}*/



var backgroundImg;
var manStand, manRun, manImage, manAnimation;

var enemy1 , enemy2 , enemy3 , enemy4 , enemy5 , enemy6 , enemy7 , enemy8 , enemy9 , enemy10 
, enemy11 , enemy12 , enemy13 , enemy14 , enemy15 , enemy16 , enemy17 , enemy18 , enemy19 , enemy20 , enemy21 , enemy22 , enemy23 ,
enemy24 , enemy25 , enemy26 , enemy27 , enemy28 , enemy29 , enemy30 , enemy31 , enemy32 , enemy33 , enemy34 , enemy35 , enemy36 , enemy37 , 
enemy38 , enemy39 , enemy40 , enemy41 , enemy42 , enemy43 , emnemy43 , enemy45 , enemy46 , enemy47 , enemy48 , enemy49 , enemy50 ;

var sShip ;
var bullet , bullet2 , bulletImg  , bulletImg2 ;
var stadium ;
var wall1 , wall2 ;

var factory1, factory1Img;
var factory2, factory2Img;
var factory3, factory3Img;
var factory4, factory4Img;
var factory5, factory5Img;
var factory6, factory6Img;

var bulletGroup ;
var cover, coverImg;

var spaceShipImg;

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!        PRELOAD           !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

function preload() {

  // loaded images
  backgroundImg = loadImage("assets/bg1.jpg");
  factory1Img = loadImage("assets/factory 1.png");
  factory2Img = loadImage("assets/factory 2.png");
  factory3Img = loadImage("assets/factory 3.png");
  factory4Img = loadImage("assets/factory 4.png");
  factory5Img = loadImage("assets/factory 5.png");
  factory6Img = loadImage("assets/factory 6.png");

  coverImg = loadImage("assets/sack.png");

  spaceShipImg = loadImage("assets/spaceship.png");

  manImage = loadAnimation("assets/p5.png");
  manAnimation = loadAnimation("assets/p2.png", "assets/p3.png", "assets/p4.png");
  enemy1 = loadImage("assets/enemy.png" );
  enemyi2 = loadAnimation("assets/enemy.png" );
  bulletImg = loadImage("assets/bullet.png");
  bulletImg2 = loadImage("assets/bullet-.png");
 
  //stadium = loadImage("assets/stadium.jpg");
}
function setup() {
  var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  if (isMobile) {
    canW = diplayWidth;
    canH = displayHeight;
    createCanvas(diplayWidth + 80, displayHeight);
  }
  else {
    canW = windowWidth;
    canH = windowHeight;
    createCanvas(windowWidth, windowHeight);
  };

  //  MAN SPRITE
  manStand = createSprite(250, 500, 60, 60);
  manStand.addAnimation("man", manImage);
  manStand.scale = 3;
  manStand.addAnimation("man2", manAnimation);

  // creating enemies      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  enemy = createSprite(1250 , 500 , 60 , 60);
  enemy.addImage(enemy1);
  enemy.scale = 3;
  enemy.velocityX = -4

  enemy2 = createSprite(1250 , 500 , 60 , 60);
  enemy2.addImage(enemy1);
  enemy2.scale = 3;
  enemy2.velocityX = -3

  enemy3 = createSprite(1250 , 500 , 60 , 60);
  enemy3.addImage(enemy1);
  enemy3.scale = 3;
  enemy3.velocityX = -2

  enemy4 = createSprite(1250 , 500 , 60 , 60);
  enemy4.addImage("enemy",enemy1);
  //enemy4.addImage(spaceShipImg);
  enemy4.scale = 3;
  enemy4.velocityX = -1
 
  enemy5 = createSprite(1850 , 500 , 60 , 60);
  enemy5.addImage(enemy1);
  enemy5.scale = 3;
  enemy5.velocityX = -5

  enemy6 = createSprite(2000 , 500 , 60 , 60);
  enemy6.addImage(enemy1);
  enemy6.scale = 3;
  enemy6.velocityX = -8

  enemy7 = createSprite(2150 , 500 , 60 , 60);
  enemy7.addImage(enemy1);
  enemy7.scale = 3;
  enemy7.velocityX = -6

  enemy8 = createSprite(2300 , 500 , 60 , 60);
  enemy8.addImage(enemy1);
  enemy8.scale = 3;
  enemy8.velocityX = -7

  enemy9 = createSprite(2450 , 500 , 60 , 60);
  enemy9.addImage(enemy1);
  enemy9.scale = 3;
  enemy9.velocityX = -9

  enemy10 = createSprite(2600 , 500 , 60 , 60);
  enemy10.addImage(enemy1);
  enemy10.scale = 3;
  enemy10.velocityX = -11

  enemy11 = createSprite(2750 , 500 , 60 , 60);
  enemy11.addImage(enemy1);
  enemy11.scale = 3;
  enemy11.velocityX = -5

  enemy12 = createSprite(2900 , 500 , 60 , 60);
  enemy12.addImage(enemy1);
  enemy12.scale = 3;
  enemy12.velocityX = -10

  enemy13 = createSprite(3050 , 500 , 60 , 60);
  enemy13.addImage(enemy1);
  enemy13.scale = 3;
  enemy13.velocityX = -12

  enemy14 = createSprite(3200 , 500 , 60 , 60);
  enemy14.addImage(enemy1);
  enemy14.scale = 3;
  enemy14.velocityX = -10

  enemy15 = createSprite(3350 , 500 , 60 , 60);
  enemy15.addImage(enemy1);
  enemy15.scale = 3;
  enemy15.velocityX = -6

  enemy16 = createSprite(3500 , 500 , 60 , 60);
  enemy16.addImage(enemy1);
  enemy16.scale = 3;
  enemy16.velocityX = -13

  enemy17 = createSprite(3650 , 500 , 60 , 60);
  enemy17.addImage(enemy1);
  enemy17.scale = 3;
  enemy17.velocityX = -9

  enemy18 = createSprite(3800 , 500 , 60 , 60);
  enemy18.addImage(enemy1);
  enemy18.scale = 3;
  enemy18.velocityX = -7

  enemy19 = createSprite(3950 , 500 , 60 , 60);
  enemy19.addImage(enemy1);
  enemy19.scale = 3;
  enemy19.velocityX = -11

  enemy20 = createSprite(4100 , 500 , 60 , 60);
  enemy20.addImage(enemy1);
  enemy20.scale = 3;
  enemy20.velocityX = -10

  enemy21 = createSprite(4250 , 500 , 60 , 60);
  enemy21.addImage(enemy1);
  enemy21.scale = 3;
  enemy21.velocityX = -10

  enemy22 = createSprite(4400 , 500 , 60 , 60);
  enemy22.addImage(enemy1);
  enemy22.scale = 3;
  enemy22.velocityX = -18

  enemy23 = createSprite(4550 , 500 , 60 , 60);
  enemy23.addImage(enemy1);
  enemy23.scale = 3;
  enemy23.velocityX = -11

  enemy24 = createSprite(4700 , 500 , 60 , 60);
  enemy24.addImage(enemy1);
  enemy24.scale = 3;
  enemy24.velocityX = -15

  enemy25 = createSprite(4850 , 500 , 60 , 60);
  enemy25.addImage(enemy1);
  enemy25.scale = 3;
  enemy25.velocityX = -19

  enemy26 = createSprite(5000 , 500 , 60 , 60);
  enemy26.addImage(enemy1);
  enemy26.scale = 3;
  enemy26.velocityX = -9

  enemy27 = createSprite(5150 , 500 , 60 , 60);
  enemy27.addImage(enemy1);
  enemy27.scale = 3;
  enemy27.velocityX = -11

  enemy28 = createSprite(5300 , 500 , 60 , 60);
  enemy28.addImage(enemy1);
  enemy28.scale = 3;
  enemy28.velocityX = -25

  enemy29 = createSprite(5450 , 500 , 60 , 60);
  enemy29.addImage(enemy1);
  enemy29.scale = 3;
  enemy29.velocityX = -15

  enemy30 = createSprite(5600 , 500 , 60 , 60);
  enemy30.addImage(enemy1);
  enemy30.scale = 3;
  enemy30.velocityX = -12

  enemy31 = createSprite(5750 , 500 , 60 , 60);
  enemy31.addImage(enemy1);
  enemy31.scale = 3;
  enemy31.velocityX = -11

  enemy32 = createSprite(5900 , 500 , 60 , 60);
  enemy32.addImage(enemy1);
  enemy32.scale = 3;
  enemy32.velocityX = -18

  enemy33 = createSprite(6050 , 500 , 60 , 60);
  enemy33.addImage(enemy1);
  enemy33.scale = 3;
  enemy33.velocityX = -30

  enemy34 = createSprite(6200 , 500 , 60 , 60);
  enemy34.addImage(enemy1);
  enemy34.scale = 3;
  enemy34.velocityX = -16

  enemy35 = createSprite(6350 , 500 , 60 , 60);
  enemy35.addImage(enemy1);
  enemy35.scale = 3;
  enemy35.velocityX = -14

  enemy36 = createSprite(6500 , 500 , 60 , 60);
  enemy36.addImage(enemy1);
  enemy36.scale = 3;
  enemy36.velocityX = -16

  enemy37 = createSprite(6650 , 500 , 60 , 60);
  enemy37.addImage(enemy1);
  enemy37.scale = 3;
  enemy37.velocityX = -24

  enemy38 = createSprite(6800 , 500 , 60 , 60);
  enemy38.addImage(enemy1);
  enemy38.scale = 3;
  enemy38.velocityX = -14

  enemy39 = createSprite(6950 , 500 , 60 , 60);
  enemy39.addImage(enemy1);
  enemy39.scale = 3;
  enemy39.velocityX = -18

  enemy40 = createSprite(7100 , 500 , 60 , 60);
  enemy40.addImage(enemy1);
  enemy40.scale = 3;
  enemy40.velocityX = -13

  

 // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



  bulletGroup=createGroup();

}


function draw() {
  background(backgroundImg);
  
  //   moving right to the player
  if (keyWentDown(RIGHT_ARROW)) {
    manStand.changeAnimation("man2", manAnimation);
    manStand.x += 2;
    manStand.velocityX=2;
  }
  if (keyWentUp(RIGHT_ARROW)) {
    manStand.changeAnimation("man", manImage)
    manStand.velocityX=0
  }
  
    if(keyDown('space')){
      spawnBullet();

    }

    //   destroying enemies ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    if(bulletGroup.isTouching(enemy)){
      enemy.destroy();
      bulletGroup.destroyEach();
    } 

    if(bulletGroup.isTouching(enemy2)){
      enemy2.destroy();
      bulletGroup.destroyEach();
    }  
     
    if(bulletGroup.isTouching(enemy3)){
      enemy3.destroy();
      bulletGroup.destroyEach();
    } 

    if(bulletGroup.isTouching(enemy4)){
      enemy4.addImage("enemy",spaceShipImg)
      enemy4.scale=0.8;
      //comment the below line if you want to keep moving 
      enemy4.velocityX=0
      bulletGroup.destroyEach();

    }     


    if(bulletGroup.isTouching(enemy5)){
      enemy5.destroy();
      bulletGroup.destroyEach();
    }   

    if(bulletGroup.isTouching(enemy6)){
      enemy6.destroy();
      bulletGroup.destroyEach();
    }   

    if(bulletGroup.isTouching(enemy7)){
      enemy7.destroy();
      bulletGroup.destroyEach();
    }   

    if(bulletGroup.isTouching(enemy8)){
      enemy8.destroy();
      bulletGroup.destroyEach();
    }   

    if(bulletGroup.isTouching(enemy9)){
      enemy9.destroy();
      bulletGroup.destroyEach();
    }   

    if(bulletGroup.isTouching(enemy10)){
      enemy10.destroy();
      bulletGroup.destroyEach();
    }   

    if(bulletGroup.isTouching(enemy11)){
      enemy11.destroy();
      bulletGroup.destroyEach();
    }   

    if(bulletGroup.isTouching(enemy12)){
      enemy12.destroy();
      bulletGroup.destroyEach();
    }   

    if(bulletGroup.isTouching(enemy13)){
      enemy13.destroy();
      bulletGroup.destroyEach();
    }   

    if(bulletGroup.isTouching(enemy14)){
      enemy14.destroy();
      bulletGroup.destroyEach();
    }   

    if(bulletGroup.isTouching(enemy15)){
      enemy15.destroy();
      bulletGroup.destroyEach();
    }   

    if(bulletGroup.isTouching(enemy16)){
      enemy16.destroy();
      bulletGroup.destroyEach();
    }   

    if(bulletGroup.isTouching(enemy17)){
      enemy17.destroy();
      bulletGroup.destroyEach();
    }   

    if(bulletGroup.isTouching(enemy18)){
      enemy18.destroy();
      bulletGroup.destroyEach();
    }   

    if(bulletGroup.isTouching(enemy19)){
      enemy19.destroy();
      bulletGroup.destroyEach();
    }   

    if(bulletGroup.isTouching(enemy20)){
      enemy20.destroy();
      bulletGroup.destroyEach();
    }   

    if(bulletGroup.isTouching(enemy21)){
      enemy21.destroy();
      bulletGroup.destroyEach();
    } 

    if(bulletGroup.isTouching(enemy22)){
      enemy22.destroy();
      bulletGroup.destroyEach();
    } 

    if(bulletGroup.isTouching(enemy23)){
      enemy23.destroy();
      bulletGroup.destroyEach();
    } 

    if(bulletGroup.isTouching(enemy24)){
      enemy24.destroy();
      bulletGroup.destroyEach();
    } 

    if(bulletGroup.isTouching(enemy25)){
      enemy25.destroy();
      bulletGroup.destroyEach();
    } 

    if(bulletGroup.isTouching(enemy26)){
      enemy26.destroy();
      bulletGroup.destroyEach();
    } 

    if(bulletGroup.isTouching(enemy27)){
      enemy27.destroy();
      bulletGroup.destroyEach();
    } 

    if(bulletGroup.isTouching(enemy28)){
      enemy28.destroy();
      bulletGroup.destroyEach();
    } 

    if(bulletGroup.isTouching(enemy29)){
      enemy29.destroy();
      bulletGroup.destroyEach();
    } 

    if(bulletGroup.isTouching(enemy30)){
      enemy30.destroy();
      bulletGroup.destroyEach();
    } 

    if(bulletGroup.isTouching(enemy31)){
      enemy31.destroy();
      bulletGroup.destroyEach();
    } 

    if(bulletGroup.isTouching(enemy32)){
      enemy32.destroy();
      bulletGroup.destroyEach();
    } 

    if(bulletGroup.isTouching(enemy33)){
      enemy33.destroy();
      bulletGroup.destroyEach();
    } 

    if(bulletGroup.isTouching(enemy34)){
      enemy34.destroy();
      bulletGroup.destroyEach();
    } 

    if(bulletGroup.isTouching(enemy35)){
      enemy35.destroy();
      bulletGroup.destroyEach();
    } 

    if(bulletGroup.isTouching(enemy36)){
      enemy36.destroy();
      bulletGroup.destroyEach();
    } 

    if(bulletGroup.isTouching(enemy37)){
      enemy37.destroy();
      bulletGroup.destroyEach();
    } 

    if(bulletGroup.isTouching(enemy38)){
      enemy38.destroy();
      bulletGroup.destroyEach();
    } 

    if(bulletGroup.isTouching(enemy39)){
      enemy39.destroy();
      bulletGroup.destroyEach();
    } 

    if(bulletGroup.isTouching(enemy40)){
      enemy40.destroy();
      bulletGroup.destroyEach();
    } 
    
   
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

 
 //   game       over        coding  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

 if(enemy.isTouching(manStand) ) {

      manStand.destroy();
      bulletGroup.destroyEach();

    }

    if(enemy2.isTouching(manStand) ) {

      manStand.destroy();
      bulletGroup.destroyEach();

    }

    if(enemy3.isTouching(manStand) ) {

      manStand.destroy();
      bulletGroup.destroyEach();

    }

    if(enemy4.isTouching(manStand) ) {

      manStand.destroy();
      bulletGroup.destroyEach();

    }

   if(enemy5.isTouching(manStand) ) {

      manStand.destroy();
      bulletGroup.destroyEach();
      
    }

    if(enemy6.isTouching(manStand) ) {

      manStand.destroy();
      bulletGroup.destroyEach();
    }

    if(enemy7.isTouching(manStand) ) {

      manStand.destroy();
      bulletGroup.destroyEach();
    }

    if(enemy8.isTouching(manStand) ) {

      manStand.destroy();
      bulletGroup.destroyEach();
    }

    if(enemy9.isTouching(manStand) ) {

      manStand.destroy();
      bulletGroup.destroyEach();
    }

    if(enemy10.isTouching(manStand) ) {

      manStand.destroy();
      bulletGroup.destroyEach();
    }

    if(enemy11.isTouching(manStand) ) {

      manStand.destroy(); ;
      bulletGroup.destroyEach();
    }

    if(enemy12.isTouching(manStand) ) {

      manStand.destroy();
      bulletGroup.destroyEach();
    }

    if(enemy13.isTouching(manStand) ) {

      manStand.destroy();
      bulletGroup.destroyEach();
    }

    if(enemy14.isTouching(manStand) ) {

      manStand.destroy();
      bulletGroup.destroyEach();
    }

    if(enemy15.isTouching(manStand) ) {

      manStand.destroy();
      bulletGroup.destroyEach();
    }

    if(enemy16.isTouching(manStand) ) {
      
      manStand.destroy();
      bulletGroup.destroyEach();
    }

    if(enemy17.isTouching(manStand) ) {

      manStand.destroy();
      bulletGroup.destroyEach();
    }

    if(enemy18.isTouching(manStand) ) {

      manStand.destroy();
      bulletGroup.destroyEach();

    }

    if(enemy19.isTouching(manStand) ) {

      manStand.destroy();
      bulletGroup.destroyEach();
    }

    if(enemy20.isTouching(manStand) ) {

      manStand.destroy();
      bulletGroup.destroyEach();
    }

    if(enemy21.isTouching(manStand) ) {

      manStand.destroy();
      bulletGroup.destroyEach();
    }

    if(enemy22.isTouching(manStand) ) {

      manStand.destroy();
      bulletGroup.destroyEach();
    }

    if(enemy23.isTouching(manStand) ) {

      manStand.destroy();
      bulletGroup.destroyEach();
    }

    if(enemy24.isTouching(manStand) ) {

      manStand.destroy();
      bulletGroup.destroyEach();
    }

    if(enemy25.isTouching(manStand) ) {

      manStand.destroy();
      bulletGroup.destroyEach();
    }

    if(enemy26.isTouching(manStand) ) {

      manStand.destroy();
      bulletGroup.destroyEach();
    }

    if(enemy27.isTouching(manStand) ) {

      manStand.destroy();
      bulletGroup.destroyEach();
    }

    if(enemy28.isTouching(manStand) ) {

      manStand.destroy();
      bulletGroup.destroyEach();
    }

    if(enemy29.isTouching(manStand) ) {

      manStand.destroy();
      bulletGroup.destroyEach();
    }

    if(enemy30.isTouching(manStand) ) {

      manStand.destroy();
      bulletGroup.destroyEach();
    }

    if(enemy31.isTouching(manStand) ) {

      manStand.destroy();
      bulletGroup.destroyEach();
    }

    if(enemy32.isTouching(manStand) ) {

      manStand.destroy();
      bulletGroup.destroyEach();
    }

    if(enemy33.isTouching(manStand) ) {

      manStand.destroy();
      bulletGroup.destroyEach();
    }

    if(enemy34.isTouching(manStand) ) {

      manStand.destroy();
      bulletGroup.destroyEach();
    }

    if(enemy35.isTouching(manStand) ) {

      manStand.destroy();
      bulletGroup.destroyEach();
    }

    if(enemy36.isTouching(manStand) ) {

      manStand.destroy();
      bulletGroup.destroy();
    }

    if(enemy37.isTouching(manStand) ) {

      manStand.destroy();
      bulletGroup.destroyEach();
    }

    if(enemy38.isTouching(manStand) ) {

      manStand.destroy();
      bulletGroup.destroyEach();
    }

    if(enemy39.isTouching(manStand) ) {

      manStand.destroy();
      bulletGroup.destroyEach();
    }

    if(enemy40.isTouching(manStand) ) {

      manStand.destroy();
      bulletGroup.destroyEach();
    }
    
drawSprites();

}

function spawnBullet(){
  bullet = createSprite(310 , 520 , 60 , 60);
  bullet.addImage(bulletImg);
  bullet.scale = 0.03;
  bullet.velocityX = 60;
  bullet.lifetime = 50;
  bullet.x = manStand.x ;
  bulletGroup.add(bullet)
 }

