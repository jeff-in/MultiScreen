/*
---------------------------WHAT IS NEXT?------------------------------------------
PROJECT TITLE: WHAT IS NEXT?
MINIGAME #5 TILT

Created by: Mahsa Karimi
Jeffin Philip
Date of completion:10-28-2016

Description: WHAT IS NEXT? is a memory game consisting of series of puzzles.
Solving these mini puzzles leads into finishing the game.
Minigame #5 This game uses the accelerometer within phone to control a ball. The
player has to direct the ball to the target to clear the level
----------------------------------------------------------------------------------
*/
var img;
var rotX;
var rotY;

var posY=0;
var posY=0;
var done=0;

var scaleFactorX;
var scaleFactotY;

function preload()
{
  img = loadImage("1.png");
}
function setup() {
  fullscreen();
  createCanvas(windowWidth, windowHeight);
  background('#209D89');
  noStroke(); textSize(windowWidth/20);
  text("Click to unlock", displayWidth/3, displayHeight/2);
  posY=windowHeight/2;
  posX=windowWidth/4;
  scaleFactorX=windowWidth/750;
  scaleFactorY=windowHeight/1334;
}
function draw()
{if(done==0)
  {
    clear();
    background('#209D89');
    fill('#67FFE8');
    ellipse(windowWidth/2,windowHeight-200,200,200);
    fill('#29C7AE');
    textSize(windowWidth/5);
    text("TILT",windowWidth/3-50,windowHeight/3);
    rotX=rotationX;
    rotY=rotationY;
    fill('#E9FF39');
    if(posX>(windowWidth/2)-100&&posX<(windowWidth/2)+100 && posY>windowHeight-300&&posY<windowHeight-100)loadPic();

    ellipse(posX,posY,150,150);
    //if(posX>=0&&posX=<windowWidth)
    posX=posX-rotY*0.2;//Tilt converted to movement. controls inverted to give the feel of a light ball in water
    //if(posY>=0&&pos=<windowHeight)
    posY=posY-rotX*0.2;
    if(posY<0)posY=0;
    if(posY>windowHeight)posY=windowHeight;
    if(posX<0)posX=0;
    if(posX>windowWidth)posX=windowWidth;

    if(posX>windowWidth/2-100&&posX<windowWidth/2+100 && posY>windowHeight-300&&posY>windowHeight-100)loadPic();
  }
}

function loadPic()
{done=1;
  fullscreen();
  scale(scaleFactorX,scaleFactorX);
  imageMode(CORNER,displayWidth,displayHeight);
  image(img, 0, 0);
  fill('#209D89');
}
