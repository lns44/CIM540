var Ticket;
var Plane;
var Temple;
var Food;
var background;

var TicketButton;
var PlaneButton;
var TempleButton;
var FoodButton;

var currentImage = 0;

function preload(){
background = loadImage("background.jpg");
Plane = loadImage("Plane.jpg");
Temple = loadImage("Temple.jpg");
Food = loadImage("Food.jpg");
}

function setup() {
  createCanvas(800, 600);
  background("background.jpg");
  button = createButton('click me');
  button.position(280, 570);

TicketButton = createButton("Ticket");
TicketButton.position(10,40);
TicketButton.mousePressed(function(){
currentImage = 0;
});

PlaneButton = createButton("Plane")
PlaneButton.position(100,40);
PlaneButton.mousePressed(Change);


TempleButton = createButton("Temple");
TempleButton.position(190,40);
TempleButton.mousePressed(function(){

currentImage = 2;

});

FoodButton = createButton("Food");
FoodButton.position(280,40);
FoodButton.mousePressed(function(){

currentImage = 3;

});

}




function draw() {
  // put drawing code here
if(currentImage == 0){
  image(Ticket, 0,20, Ticket.width/2, Ticket.height/2);
}else if(currentImage == 1){
  image(Plane, 0, 20, Plane.width/2, Plane.height/2);
}else if(currentImage == 2){
  image(Temple, 0, 20, Temple.width/2, Temple.height/2);
}
else if(currentImage == 3){
  image(Food, 0, 20,  Food.width/2, Food.height/2);
}


}


function Change(){
  currentImage = 1;
}
