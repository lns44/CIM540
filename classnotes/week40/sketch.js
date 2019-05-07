let song;

var seasons;
var seasonType = "";

var answer;
var Python;

var PythonButton;


var python;

var answerButton;
var pythonButton;


var currentImage = 0;

var leafLocationX = [];
var leafLocationY = [];
var leafImage;
var leafAmount = 100;

var bubbleLocationX = [];
var bubbleLocationY = [];
var bubbleImage;
var bubbleAmount = 100;

var snowLocationX = [];
var snowLocationY = [];
var snowAmount = 150;

var backImage;

function preload() {
bubbleImage = loadImage("assets/bubble.png");
leafImage = loadImage("assets/leaf.png");
backImage = loadImage("assets/mnt.jpg");
pythonArray[0] = loadImage("assets/python.png");
Python = loadImage("assets/python.png");
}

function setup() {
  // put setup code here
  song = loadSound('assets/snakehiss.mp3');
  createCanvas(1440,754);
  noStroke(0);
  seasons = createSelect();
  seasons.position(17, 17,50);
  textSize(30);
  seasons.option("Click Here To Change The Environment!");
  seasons.option("Leaves");
  seasons.option("Bubbles");
  canvas = createCanvas(1440,754);
  seasons.changed(function() {
  seasonType = seasons.value();

answer = empty;

  });

  PythonButton = createButton("Python");
  PythonButton.position(10,40);
  PythonButton.mousePressed(function(){
  currentImage = 0;
  });


  function mousePressed() {
    if (song.isPlaying()) {
      song.stop();
      background(0,100);
    } else {
      song.play();
      background(64, 275, 518, 155);
    }
  }

  for (var i = 0; i < leafAmount; i++) {
    leafLocationX[i] = random(0, width);
    leafLocationY[i] = random(0, -500);
  }

  for (var i = 0; i < bubbleAmount; i++) {
    bubbleLocationX[i] = random(0, width);
    bubbleLocationY[i] = random(0, -400);
  }

  for (var i = 0; i < snowAmount; i++) {
    snowLocationX[i] = random(0, width);
    snowLocationY[i] = random(0, -500);}}

function draw() {
background(255);
image(backImage,0,0, backImage.width/4.5,backImage.height/4.5);

if(page == 1){
  image(mainpage, 0,0, mainpage.width, mainpage.height);
  if(mouseX > 64 && mouseX < (275) && mouseY > 518 && mouseY < 155){
    if(mouseIsPressed == true){
      answer = pythonArray[0];}
    }


if (seasonType == "Click here to change up the scene!") {


}if (seasonType == "Leaves") {
    for (var i = 0; i < leafAmount; i++) {
      console.log("leaf" + 0 + " x: " + leafLocationX[1] + " , y: " + leafLocationY[1]);
      image(leafImage, leafLocationX[i], leafLocationY[i], 20,20);

    }if(leafLocationY[i] < height - 20){
        leafLocationY[i]++;
        leafLocationX[i] = leafLocationX[i] + sin(radians(frameCount));}}


  } else if (seasonType == "Bubbles") {
    textSize(12);
    fill("black");
    for (var i = 0; i < bubbleAmount; i++) {
      console.log("bubble" + 0 + " x: " + bubbleLocationX[1] + " , y: " + bubbleLocationY[1]);
      image(bubbleImage, bubbleLocationX[i], bubbleLocationY[i], 30,30);

    }if(bubbleLocationY[i] < height - 20){
        bubbleLocationY[i]++;
        bubbleLocationX[i] = bubbleLocationX[i] + sin(radians(frameCount));}}


 else if (seasonType == "Let it Snow!") {
  for (var i = 0; i < snowAmount; i++) {
    snowLocationY[i]++;
    ellipse(snowLocationX[i], snowLocationY[i], 4,4);

  }if(snowLocationY[i] > height){
      snowLocationY[i] = random(-50,0);
      snowLocationX[i] = random(0,width);}
}}
