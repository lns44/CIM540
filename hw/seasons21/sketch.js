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


function preload(){
snakeArray[0] = loadImage("assets/snake.png");
}


function setup() {
createCanvas(800, 600);
bg = loadImage("assets/background.jpg");
button = createButton ('Snake');
button.position(100,100);
button.mousePressed(changeBG);}

function changeBG(){
  var val = loadImage("assets/snake.png");
  background(val);
}
