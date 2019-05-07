var seasons;
var seasonType = "";

var sunX = 360;
var sunY = 40;
var sunSize = 60;

var leafLocationX = [];
var leafLocationY = [];
var leafImage;
var leafAmount = 100;

var snowLocationX = [];
var snowLocationY = [];
var snowAmount = 150;

var backImage;

function preload() {
leafImage = loadImage("assets/leaf.png");
backImage = loadImage("assets/mnt.jpg");
BlosImage = loadImage("assets/blos.png");
moonImage = loadImage("assets/moon.png");
sunImage = loadImage("assets/sun.png");
topImage = loadImage("assets/mnttop.png");
}

function setup() {
  // put setup code here
  createCanvas(1440,754);
  noStroke(0);
  seasons = createSelect();
  seasons.position(17, 17,50);
  seasons.option("Click here to change up the scene!");
  seasons.option("Cherry Blossoms");
  seasons.option("Sun");
  seasons.option("Leaves");
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

  for (var i = 0; i < snowAmount; i++) {
    snowLocationX[i] = random(0, width);
    snowLocationY[i] = random(0, -500);}}

function draw() {
background(255);

image(backImage,0,0, backImage.width/4.5,backImage.height/4.5);

if(mouseX >  && mouseX < (802) && mouseY > 190 && mouseY < 217){
    if(mouseIsPressed == true){
      shirt = shortsleeveArray[0];
    }


if (seasonType == "Click here to change up the scene!") {


}if (seasonType == "Cherry Blossoms") {
  textSize(12);
  text('Move your mouse and see if you can align the cherry blossoms above the mountain top!',190,80);

image(BlosImage, mouseX, 20, 40, 40);  // Top circle


  }else if (seasonType == "Sun") {
    textSize(12);
    fill("yellow");
    ellipse(mouseX, mouseY, 100,100);

  } else if (seasonType == "Leaves") {
    textSize(12);
      text('It is fall in beautiful Japan!', 340, 70);
    for (var i = 0; i < leafAmount; i++) {
      console.log("leaf" + 0 + " x: " + leafLocationX[1] + " , y: " + leafLocationY[1]);
      image(leafImage, leafLocationX[i], leafLocationY[i], 20,20);

      if(leafLocationY[i] < height - 20){
        leafLocationY[i]++;
        leafLocationX[i] = leafLocationX[i] + sin(radians(frameCount));}}
}else if (seasonType == "Day to Night") {
  textSize(12);
  text('Move your mouse from left to right to change the time from day to night!', 250, 80);

  if(mouseX> height/2){
    console.log("Below Line");
    image(moonImage, mouseX, 20, 150, 150);
  }
  if(mouseX< height/2){
    console.log("Above Line");

    image(sunImage, mouseX, 20, 150, 150)};
    image(topImage,276,94,260,100);

 }else if (seasonType == "Let it Snow!") {
   textSize(12);
   text('Let it snow, let it snow, let it snow!', 320, 70);
  noStroke();
  fill(230);
  for (var i = 0; i < snowAmount; i++) {
    snowLocationY[i]++;
    ellipse(snowLocationX[i], snowLocationY[i], 4,4);

    if(snowLocationY[i] > height){
      snowLocationY[i] = random(-50,0);
      snowLocationX[i] = random(0,width);}

    }
  }
}
