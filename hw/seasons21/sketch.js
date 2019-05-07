let bg;
let y = 0;
var snake;
var manatee;
var deer;
var fish;
var cougar;
var croc;
var fruit;


var snakebutton;
var manateebutton;
var deerbutton;
var fishbutton;
var cougarbutton;
var crocbutton;
var fruitbutton;

var currentImage = 0;

var fruitY = 45;

var snakeArray = [];

var reset;

var fruitOffX = 0;
var fruitOffY = 0;

function preload(){
snakeArray[0] = loadImage("assets/snake.png");
empty = loadImage("assets/empty.png");
}


function setup() {
bg = loadImage("assets/background.jpg");
createCanvas(800, 600);
fruit = empty;

snake = createButton("Snake");
snake.position(20,60);
snake.mousePressed(function(){
  fruit=snakeArray
});

}); }


function draw() {
background(bg);

  if(mouseX > 18 && mouseX < (71) && mouseY > 59 && mouseY < 101){
    if(mouseIsPressed == true){
      fruit = snakeArray[0];
    }
  } }
