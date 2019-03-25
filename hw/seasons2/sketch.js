// leaf from open clip art https://openclipart.org/detail/257622/leaf

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
leafImage = loadImage("https://openclipart.org/image/300px/svg_to_png/257622/1470680735.png");
backImage = loadImage("assets/mnt.jpg");
BlosImage = loadImage("assets/blos.png");}

function setup() {
  // put setup code here
  createCanvas(1366, 1024);
  noStroke(0);
  seasons = createSelect();
  seasons.position(100, 10);
  seasons.option("Click here to change up the scene!");
  seasons.option("Cherry Blossoms");
  seasons.option("Sun");
  seasons.option("Leaves");
  seasons.option("Snow");
  seasons.option("Night & Day");
  canvas = createCanvas(1366, 1024);
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
image(backImage,0,0, backImage.width/5,backImage.height/5);

  fill("black");
  stroke(0);
  textSize(20);
  text(seasonType, 130, 55);

if (seasonType == "Cherry Blossoms")  {
image(BlosImage, mouseX, 20, 40, 40);  // Top circle
image(BlosImage, mouseX+10, 15, 40, 40);
image(BlosImage, mouseX-10, 15, 40, 40);
image(BlosImage, mouseX+30, 40, 40, 40);
image(BlosImage, mouseX-30, 40, 40, 40);
image(BlosImage, mouseX+70, 60, 40, 40);
image(BlosImage, mouseX-70, 60, 40, 40);
image(BlosImage, mouseX+120, 90, 40, 40);
image(BlosImage, mouseX-120, 90, 40, 40);
image(BlosImage, mouseX+150, 110, 40, 40);
image(BlosImage, mouseX-150, 110, 40, 40);// Bottom circle
  }else if (seasonType == "Sun") {
fill("yellow");
ellipse(mouseX, mouseY, 70,70);

  } else if (seasonType == "Leaves") {
    for (var i = 0; i < leafAmount; i++) {
      console.log("leaf" + 0 + " x: " + leafLocationX[1] + " , y: " + leafLocationY[1]);
      image(leafImage, leafLocationX[i], leafLocationY[i], 20,20);

      if(leafLocationY[i] < height - 20){
        leafLocationY[i]++;
        leafLocationX[i] = leafLocationX[i] + sin(radians(frameCount));}}
}else if (seasonType == "Night & Day") {
  var distance = dist(mouseX, mouseY, width/2, height/2);
  ellipse(width/2, height/2, 20, 20);
  line(width/2, height/2, mouseX, mouseY);
  if(distance < 20){
    fill("red");
  }else{
    fill("white");
  }

 }else if (seasonType == "Snow") {
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
