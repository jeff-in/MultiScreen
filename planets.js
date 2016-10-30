/*
---------------------------WHAT IS NEXT?------------------------------------------
PROJECT TITLE: WHAT IS NEXT?
MINIGAME #3 PLANETS

Created by: Mahsa Karimi
Jeffin Philip
Date of completion:10-28-2016

Description: WHAT IS NEXT? is a memory game consisting of series of puzzles.
Solving these mini puzzles leads into finishing the game.
Minigame #3 will display two circles revolving in opposite directions. The player
has to tap when they are aligning to each other(0 degrees)
----------------------------------------------------------------------------------
*/

var posX;
var posY;
var lock=0;
var angle1;
var angle2;
var count=0;
var margin;
var scaleFactor;
var done=0;

function preload()
{
  img = loadImage("1.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  background('#082A38');
  posX=windowWidth/2;
  posY=windowHeight/2;
  stroke(255,255,255,0);
  scaleFactor=windowWidth/750;
}

function draw() {
  if(done==0){
    angle1=radians(count);
    angle2=-2*radians(count);
    margin=degrees(angle1)-degrees(angle2);
    margin=abs(margin);// margin is the difference in angle for the two circles
    while(margin>360)margin-=360;
    if(lock==0)count++;
    if((margin>10&&margin<350)&&lock==0)
    {
      fill('#F6D590');
      ellipse(posX,posY,600,600);
      fill('#E9AB65');
      ellipse(posX,posY,450,450);
      fill('#E05666');
      ellipse(posX,posY,300,300);
      fill('#FFFFFF');
      textAlign(CENTER);
      fill('#FF7C8E');
      textSize(windowWidth/9);
      text("TAP",windowWidth/2,windowHeight/2+50);
      fill('#FFFFFF');

      translate(posX,posY);
      rotate(angle1);
      ellipse(188,0,50,50);
      rotate(angle2);
      ellipse(263,0,50,50);
      translate(-posX,-posY);
    }}
    if(((margin<188&&margin>172)||(margin>352||margin<2))&&lock==1)// the difference is considered with a small offset value
    {
      scale(scaleFactor,scaleFactor);
      image(img,0,0);
      scale(1,1);
      done=1;
    }

  }
  function mouseClicked()
  {lock=!lock;}
  function touchStarted()
  {lock=!lock;}
