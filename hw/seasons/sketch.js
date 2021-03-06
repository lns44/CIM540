var page0,page1,page2,page3,page4,page5;

var image0,image1,image2,image3,image4,image5;

var currentImage = -1;

function preload(){
  image0 = loadImage("assets/mnt.jpg");
  image1 = loadImage("assets/mnt.jpg");
  image2 = loadImage("assets/mnt.jpg");
  image3 = loadImage("assets/snow.jpg");
  image4 = loadImage("assets/snow.jpg");
  image5 = loadImage("assets/snow.jpg");
}

function setup(){
  createCanvas(500,500);
  page0 = createButton("Page 0");
  page0.position(10,400);
  page0.mousePressed(function(){

    currentImage = 0;

  });


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
var snowAmount = 100;

var backImage;
var snowimage;

let img;
function preload() {
leafImage = loadImage("https://openclipart.org/image/300px/svg_to_png/257622/1470680735.png");
backImage = loadImage("assets/mnt.jpg");
snowimage = loadimage("assets/snow.jpg");
}

function setup() {
  // put setup code here
  createCanvas(400, 400);
  seasons = createSelect();
  seasons.position(10, 10);
  seasons.option("Click Here!");
  seasons.option("Cherry Blossoms");
  seasons.option("Sun");
  seasons.option("Leaves");
  seasons.option("Snow");
  seasons.changed(function() {
    seasonType = seasons.value();
  });

  //seasonType = "winter";

  for (var i = 0; i < leafAmount; i++) {
    leafLocationX[i] = random(0, width);
    leafLocationY[i] = random(0, -500);
  }

  for (var i = 0; i < snowAmount; i++) {
    snowLocationX[i] = random(0, width);
    snowLocationY[i] = random(0, -500);
  }

}

function draw() {
  // put drawing code here
  //console.log(frameRate());
background(255);
image(backImage,0,0, );
  fill("black");
  stroke(0);
  textSize(20);
  text(seasonType, 10, 75);

  if (seasonType == "Cherry Blossoms") {
    // flower
    fill("pink");

    for (var i = 0; i < 12; i++) {
      push();
      translate(width / 2, height / 2);
      rotate(i + 30);
      scale(2.0);
      ellipse(0, 10, 10, 20);
      pop();
    }
    fill("white");
    ellipse(width / 2, height / 2, 20, 20);

  } else if (seasonType == "Sun") {
    //suns out
    fill("orange");
    ellipse(sunX, sunY, sunSize, sunSize);
    if (sunY > 350) {
      sunY = sunY - 5;

    }
  } else if (seasonType == "Leaves") {
    for (var i = 0; i < leafAmount; i++) {
      console.log("leaf" + 0 + " x: " + leafLocationX[1] + " , y: " + leafLocationY[1]);
      image(leafImage, leafLocationX[i], leafLocationY[i], 20,20);

      if(leafLocationY[i] < height - 20){
        leafLocationY[i]++;
        leafLocationX[i] = leafLocationX[i] + sin(radians(frameCount));
      }
}

  } else if (seasonType == "Snow") {
    function setup() {
      image(snowimage, 0, 0);


    noStroke();
    fill(173);
    for (var i = 0; i < snowAmount; i++) {
      snowLocationY[i]++;
      ellipse(snowLocationX[i], snowLocationY[i], 5,5);

      if(snowLocationY[i] > height){
        snowLocationY[i] = random(-100,0);
        snowLocationX[i] = random(0,width);
      }
    }
  }
}
