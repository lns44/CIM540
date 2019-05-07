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
}

function setup() {
bg = loadImage("assets/background.jpg");
createCanvas(800, 600);
image("assets/background.jpg");

button = createButton('snake');
button.position(input.x + input.width, 65);
button.mousePressed(snakeArray);

}
