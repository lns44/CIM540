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

var fruitY = 193;

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

reset = createButton("Start Over");
reset.position(70,620);
reset.mousePressed(function(){
fruit = empty;
 }


function draw() {
background(bg);
if mousePressed
if(mouseX > 64 && mouseX < 85 && mouseY > 185 && mouseY < 215){
  if(mouseIsPressed == true){
    fruit = snakeArray[0];
    fruitOffX = 70;
    fruitOffY = 25;
 }
