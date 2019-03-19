// leaf from open clip art https://openclipart.org/detail/257622/leaf

let bug1;
let bug2;
let bug3;
let bug4;

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
  seasons = createSelect();
  seasons.position(160, 10);
  seasons.option("Click here to change the seasons!");
  seasons.option("Cherry Blossom Season");
  seasons.option("Sun");
  seasons.option("Leaves");
  seasons.option("Snow");
bug1 = new Jitter();
bug2 = new Jitter();
bug3 = new Jitter();
bug4 = new Jitter();
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
  bug1.move();
  bug1.display();
  bug2.move();
  bug2.display();
  bug3.move();
  bug3.display();
  bug4.move();
  bug4.display();
background(255);
image(backImage,0,0, );
  fill("black");
  stroke(0);
  textSize(20);
  text(seasonType, 120, 55);

  if (seasonType == "Cherry Blossom Season") {
    // flower

    // Jitter class
  class Jitter {
    constructor() {
      this.x = random(width);
      this.y = random(height);
      this.diameter = random(10, 30);
      this.speed = 1;
    }

    move() {
      this.x += random(-this.speed, this.speed);
      this.y += random(-this.speed, this.speed);
    }

    display() {
      ellipse(this.x, this.y, this.diameter, this.diameter);
    }
  }





        fill("pink");

        for (var i = 0; i < 12; i++) {
          push();
          translate(width / 2, height / 2);
          rotate(i + 30);
          scale(1.5);
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
