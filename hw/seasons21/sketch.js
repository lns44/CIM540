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

backImage = loadImage("assets/background.jpg");

}

function setup() {
  // put setup code here
  createCanvas(900,700);
  noStroke(0);
  seasons = createSelect();
  seasons.position(17, 17,50);

  canvas = createCanvas(900,700);
  seasons.changed(function() {
  seasonType = seasons.value();
  });


function draw() {
background(255);
image(backImage,0,0, backImage.width/6,backImage.height/6);



)};
