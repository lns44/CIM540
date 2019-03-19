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
}

function setup() {
  // put setup code here
  createCanvas(500, 500);
  noStroke(0);
  seasons = createSelect();
  seasons.position(160, 10);
  seasons.option("Click here to change the seasons!");
  seasons.option("Cherry Blossom Season");
  seasons.option("Sun");
  seasons.option("Leaves");
  seasons.option("Snow");
  seasons.changed(function() {
  seasonType = seasons.value();
  });


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
  text(seasonType, 120, 55);

  if (seasonType == "Cherry Blossom Season") {

    fill("pink");

           for (var i = 0; i < 12; i++) {
             push();
             translate(width / 2, height / 2);
             rotate(i + 30);
             scale(1.5);
             ellipse(350, 300, 35, 50);
             pop();
           }
           fill("white");
           ellipse(350,300, 30, 30);}



else if (seasonType == "Sun") {
fill("yellow");
ellipse(mouseX, mouseY, 70,70);

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
    noStroke();
    fill(230);
    for (var i = 0; i < snowAmount; i++) {
      snowLocationY[i]++;
      ellipse(snowLocationX[i], snowLocationY[i], 4,4);

      if(snowLocationY[i] > height){
        snowLocationY[i] = random(-50,0);
        snowLocationX[i] = random(0,width);
      }
    }
  }
}
