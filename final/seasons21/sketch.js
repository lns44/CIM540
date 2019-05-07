var snake;
var background;

var snakebutton;

var currentImage = 0;

function preload(){
snake = loadImage("assets/snake.png");
background = loadImage("assets/background.jpg");
}
function setup() {
createCanvas(800,600);
snakebutton = createButton("snake");
snakebutton.position(10,40);
snakebutton.mousePressed(function(){
currentImage = 0;
});

function draw() {

if(currentImage == 0){
  image(snake, 0,20, snake.width/2, snake.height/2);
}}
