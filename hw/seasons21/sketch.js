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

var inp = createInput('');
inp.input(myInputEvent);
}

function myInputEvent() {
  console.log('Burmese Python', this.value(25));
}
