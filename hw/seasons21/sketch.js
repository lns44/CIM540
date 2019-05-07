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


function preload(){
snake = loadImage("assets/snake.png");
}

function setup() {
bg = loadImage("assets/background.jpg");
createCanvas(800, 600);
  }


function draw() {
background(bg);

if(mouseX > 18 && mouseX < (71) && mouseY > 59 && mouseY < 101){
  if(mouseIsPressed == true){
    loadImage = "snake.png" ;
  }
