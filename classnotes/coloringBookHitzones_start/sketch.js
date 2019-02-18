var BrushColor = 0;
var Brushsize= 10;

var circleButtonX= 100;
var circleButtonY= 
function preload(){


}
function setup() {
  // put setup code here
createCanvas(500,500);
}

function draw() {
  // put drawing code here
Fill(BrushColor);
ellipse(mouseX, mouseY, Brushsize, Brushsize);
}
