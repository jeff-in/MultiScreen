/*
---------------------------WHAT IS NEXT?------------------------------------------
PROJECT TITLE: WHAT IS NEXT?
MINIGAME #1 CHESS

Created by: Mahsa Karimi
            Jeffin Philip
Date of completion:10-28-2016

Description: WHAT IS NEXT? is a memory game consisting of series of puzzles.
Solving these mini puzzles leads into finishing the game.
Minigame #1 is a simple puzzle where you have to identify the only possible
move for the chess piece on screen. Tapping the right box will load the image.
----------------------------------------------------------------------------------
*/


var boxWidth;
var boxHeight;
var colour=["#296B73","#3E8C84","#3E8C84","#296B73","#296B73","#3E8C84"];
var gap;
var imag;
var img;
var done=0;
var scaleFactor;
var count;

function preload()//function to preload the required images as the page loads
{
  imag=loadImage("knight.png");
  img=loadImage("1.png");
  img2=loadImage("2.png");
}

function setup() {

  createCanvas(windowWidth,windowHeight);
  background('#173D52');
  boxWidth=windowWidth/2;// All elements in the page use size relative to the windowWidth and windowHeight to be compatible on multiple devices
  boxHeight=windowHeight/3;
  gap=(boxHeight-boxWidth)*3;
  noStroke();
  scaleFactor=windowWidth/750;// the ratio of windowWidth to the image is used to scale image to fit the screen

}

function draw()
{

  if(done==0)//displays the enclosed content if puzzle is not yet solved
  {
    fill(colour[0]);
    rect(0,0 , boxWidth,boxHeight);
    fill(colour[3]);
    rect( boxWidth,boxHeight,boxWidth,boxHeight);
    fill(colour[4]);
    rect(0,(2*boxHeight),boxWidth,boxHeight);
    fill(colour[1]);
    rect(boxWidth,0 , boxWidth,boxHeight);
    fill(colour[2]);
    rect(0,boxHeight, boxWidth,boxHeight);
    fill(colour[5]);
    rect(boxWidth,(2*boxHeight) , boxWidth,boxHeight);
    scale(0.75,0.75);
    image(imag,boxWidth/5,boxHeight/5);//knight
    scale(1,1);
  }
  else if(done==1)
  {scale(scaleFactor,scaleFactor);//scales the image to fit screen
    image(img,0,0);}
    else if (done==2)
    {scale(scaleFactor,scaleFactor);
      image(img2,0,0);
    }
    count=frameCount;
    while(count>50)count=count-50;
    textSize(windowWidth/2);
    fill(12,40,40,count);
    text("TAP",windowWidth/5+30,windowHeight/1.5+150);
  }
  function mouseClicked()// checks if the player clicked the right box, and sets value of done
  {if(done==2 )done=0;
    else   if (mouseY>windowHeight*0.75&&mouseX>windowWidth*0.5&&done==0)done=1;//correct answer
    else if(done!=1)done=2;//wrong answer
  }
  function touchStarted()
  {if(done==2)done=0;
    else if (mouseY>windowHeight*0.75&&mouseX>windowWidth*0.5&&done==0)done=1;
    else if(done!=1)done=2;
  }
  function delay(ms)// function to create delay in ms
  {
    var cur_d = new Date();
    var cur_ticks = cur_d.getTime();
    var ms_passed = 0;
    while(ms_passed < ms) {
      var d = new Date();
      var ticks = d.getTime();
      ms_passed = ticks - cur_ticks;
    }
  }
