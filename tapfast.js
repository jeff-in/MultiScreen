/*
---------------------------WHAT IS NEXT?------------------------------------------
PROJECT TITLE: WHAT IS NEXT?
MINIGAME #4 TAP FAST

Created by: Mahsa Karimi
Jeffin Philip
Date of completion:10-28-2016

Description: WHAT IS NEXT? is a memory game consisting of series of puzzles.
Solving these mini puzzles leads into finishing the game.
Minigame #4 The player has to tap fast to pull up the image into the screen
----------------------------------------------------------------------------------
*/
var prevTime=0;
var clickTime;
var coverPosY=0;
var threshold=500;
var liftRate=1000;
var dropRate=10;
var waitTime=500;

function preload()
{
 img = loadImage("1.png");
}


function setup() {
coverPosY=windowHeight;
createCanvas(windowWidth, windowHeight);
background(153);
textSize(windowWidth/20);
text("Click to unlock", displayWidth/3, displayHeight/2);
scaleFactorX=windowWidth/690;// to fit the image into screens of all sizes
scaleFactorY=windowHeight/1330;
}

function mouseClicked()
{
clickTime=millis()-prevTime;//time between clicks
prevTime=millis();
}
function touchStarted()
{
clickTime=millis()-prevTime;//time between clicks
prevTime=millis();
}

function draw()
{if(coverPosY>5)
{
waitTime=millis()-prevTime;
if(waitTime>threshold)
{
clickTime=waitTime;
}
rect(0,0,windowWidth,windowHeight);
fill(255,255,255);
textSize(windowWidth/15);
scale(1,1);
textAlign(LEFT);
if(coverPosY>windowHeight/2)
text("Tap as fast as you can!", windowWidth/6, displayHeight/4);
else if(coverPosY<windowHeight/4)
text("Almost There!", windowWidth/3, displayHeight/4);
else if(coverPosY<windowHeight/2)
text("FASTER!!", windowWidth/3, displayHeight/4);
fill(245,90,100);
if(clickTime<=threshold && coverPosY>0)//drops the image if tap rate falls below threshold.
{
coverPosY=coverPosY-(liftRate/clickTime);// falls down with acceleration
}
else if(clickTime>threshold && coverPosY<windowHeight)
coverPosY=coverPosY+(dropRate*(clickTime/threshold));//faster the taps, faster the image is pulled up
scale(scaleFactorX,scaleFactorY);
imageMode(CORNER,displayWidth,displayHeight);
image(img,0,coverPosY);
}
else
scale(scaleFactorX,scaleFactorY);
imageMode(CORNER,displayWidth,displayHeight);
image(img,0,coverPosY);
}
