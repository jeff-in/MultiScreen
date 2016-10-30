/*
---------------------------WHAT IS NEXT?------------------------------------------
PROJECT TITLE: WHAT IS NEXT?
MINIGAME #2 COLOURS

Created by: Mahsa Karimi
            Jeffin Philip
Date of completion:10-28-2016

Description: WHAT IS NEXT? is a memory game consisting of series of puzzles.
Solving these mini puzzles leads into finishing the game.
Minigame #2 will display three stripes with changing colours. Tapping will
pause/unpause the colour change. The objective is to make all three stripes the
same colour.
----------------------------------------------------------------------------------
*/
var colours = ["#E82542", "#F3723E", "#FFEA62"];
var boxes = [];
var img;
var stop=0;
var scaledWidth;
var scaledHeight;
var myFont;

function preload(){
  img = loadImage("1.png");
  myFont = loadFont('Verlag-Bold.otf');
}

function setup() {

  noStroke();
  createCanvas (windowWidth, windowHeight);
  for (var i=0; i<3; i++ ){
    boxes.push(new theBox());
  }
  background("#211B5A");
  scaledWidth = windowWidth/750;
  scaledHeight = windowHeight/1330;
  fill('#403D7C');
  textFont(myFont);
  textSize(windowWidth/15);
  text('MAKE THEM SAME',windowWidth/8 + 50 , 4*windowHeight/5);
}

function draw() {
  if (stop == 0){
    if (boxes[0].colourIsChanging) {
      boxes[0].ChangeColour();
    }
    //we can use a for loop to do this as well.
    if (boxes[1].colourIsChanging) {
      boxes[1].ChangeColour();
    }
    if (boxes[2].colourIsChanging) {
      boxes[2].ChangeColour();
    }

    fill (boxes[0].colour);
    boxes[0].CreateBox(0,0);
    fill (boxes[1].colour);
    boxes[1].CreateBox(0,windowHeight/5 + 5);
    fill (boxes[2].colour);
    boxes[2].CreateBox(0,2*windowHeight/5 + 10);


    if (boxes[0].colour == boxes[1].colour && boxes[1].colour == boxes[2].colour && boxes[0].colourIsChanging == 0 && boxes[1].colourIsChanging == 0 && boxes[2].colourIsChanging == 0){
      scale(scaledWidth, scaledWidth);
      image (img,0,0);

      stop = 1;
    }

  }

  /*colourOne = random (colors);
  fill (colourOne);
  rect (100,100,80,80);
  colourTwo = random (colors);
  fill (colourTwo);
  rect (300,200,80,80);
  colourThree = random (colors);
  fill (colourThree);
  rect (250,400,80,80);
  delay (150);*/

}

function theBox() {
  this.x = random(width);
  this.y = random(height);
  this.boxWidth = windowWidth;
  this.boxHeight = windowHeight/5;
  this.colourIsChanging = 1;

  this.CreateBox = function(x,y) {
    rect (x, y, this.boxWidth, this.boxHeight);
  }


  this.ChangeColour = function() {
    if (this.colourIsChanging == 1){
      this.colour = random (colours);}
      delay (300);
    };

    this.PauseColourChange = function() {
      this.colourIsChanging =! this.colourIsChanging;
    }


    
  }

  function mousePressed(){

    if (mouseX>0 && mouseX<windowWidth && mouseY>0 && mouseY<windowHeight/5){
      boxes[0].PauseColourChange();
    }
    if (mouseX>0 && mouseX<windowWidth && mouseY>windowHeight/5 + 5 && mouseY<2*windowHeight/5 + 5){
      boxes[1].PauseColourChange();
    }
    if (mouseX>0 && mouseX<windowWidth && mouseY>2*windowHeight/5 + 10 && mouseY<3*windowHeight/5 + 10){
      boxes[2].PauseColourChange();
    }

  }


  function delay(ms) {
    var cur_d = new Date();
    var cur_ticks = cur_d.getTime();
    var ms_passed = 0;
    while(ms_passed < ms) {
      var d = new Date(); // Possible memory leak?
      var ticks = d.getTime();
      ms_passed = ticks - cur_ticks;
      // d = null; // Prevent memory leak?
    }
  }
