let bg;
let y = 0;
var snake;
var manatee;
var deer;
var fish;
var cougar;
var croc;

var snakebutton;
var manateebutton;
var deerbutton;
var fishbutton;
var cougarbutton;
var crocbutton;

function setup() {
bg = loadImage("assets/background.jpg");
createCanvas(800, 600);
  }

  function draw() {
    background(bg);


    if(mouseX > 64 && mouseX < 85 && mouseY > 185 && mouseY < 215){
      if(mouseIsPressed == true){
        text = 'Burmese Python';
        fruitOffX = 70;
        fruitOffY = 25;
      }

  }
