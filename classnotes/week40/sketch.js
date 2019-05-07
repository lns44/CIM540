var seasons;
var seasonType = "";

var leafLocationX = [];
var leafLocationY = [];
var leafImage;
var leafAmount = 100;


var bubbleLocationX = [];
var bubbleLocationY = [];
var bubbleImage;
var bubbleAmount = 150;

var snowLocationX = [];
var snowLocationY = [];
var snowAmount = 150;

var backImage;

function preload() {
bubbleImage = loadImage("assets/bubble.png");
leafImage = loadImage("assets/leaf.png");
backImage = loadImage("assets/mnt.jpg");
moonImage = loadImage("assets/moon.png");
topImage = loadImage("assets/mnttop.png");
}

function setup() {
  // put setup code here
  createCanvas(1440,754);
  noStroke(0);
  seasons = createSelect();
  seasons.position(17, 17,50);
  seasons.option("Click here to change up the scene!");
  seasons.option("Leaves");
  seasons.option("Bubbles");
  seasons.option("Let it Snow!");
  seasons.option("Day to Night");
  canvas = createCanvas(1440,754);
  seasons.changed(function() {
  seasonType = seasons.value();
  });

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




if (seasonType == "Click here to change up the scene!") {


}if (seasonType == "Leaves") {
    textSize(12);
      text('It is fall in beautiful Japan!', 340, 70);
    for (var i = 0; i < leafAmount; i++) {
      console.log("leaf" + 0 + " x: " + leafLocationX[1] + " , y: " + leafLocationY[1]);
      image(leafImage, leafLocationX[i], leafLocationY[i], 20,20);

      if(leafLocationY[i] < height - 20){
        leafLocationY[i]++;
        leafLocationX[i] = leafLocationX[i] + sin(radians(frameCount));}}


  } else if (seasonType == "Bubbles") {
    textSize(12);
    fill("black");
    for (var i = 0; i < bubbleAmount; i++) {
      console.log("bubble" + 0 + " x: " + bubbleLocationX[1] + " , y: " + bubbleLocationY[1]);
      image(bubbleImage, bubbleLocationX[i], bubbleLocationY[i], 30,30);

      if(bubbleLocationY[i] < height - 20){
        bubbleLocationY[i]++;
        bubbleLocationX[i] = bubbleLocationX[i] + sin(radians(frameCount));}}
}else if (seasonType == "Day to Night") {

  if(mouseX> height/2){
    console.log("Below Line");
    image(moonImage, mouseX, 20, 150, 150);
  }
  if(mouseX< height/2){
    console.log("Above Line");

    image(sunImage, mouseX, 20, 150, 150)};
    image(topImage,276,94,260,100);

 }else if (seasonType == "Let it Snow!") {
  for (var i = 0; i < snowAmount; i++) {
    snowLocationY[i]++;
    ellipse(snowLocationX[i], snowLocationY[i], 4,4);

    if(snowLocationY[i] > height){
      snowLocationY[i] = random(-50,0);
      snowLocationX[i] = random(0,width);}

    }
  }
}
