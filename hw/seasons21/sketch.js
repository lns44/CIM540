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


var snakeArray = [];
var reset;

var fruitOffX = 0;
var fruitOffY = 0;

function preload(){
snakeArray[0] = loadImage("assets/snake.png");
}

function setup() {
bg = loadImage("assets/background.jpg");
createCanvas(800, 600);
  }

  function draw() {
    background(bg);


    if(mouseX > 18 && mouseX < 71 && mouseY > 59 && mouseY < 101){
      if(mouseIsPressed == true){
        text = 'Burmese Python';
        fruitOffX = 70;
        fruitOffY = 25;
      }

  }
