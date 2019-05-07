var ticket;
var plane;
var Temple;
var Food;

var ticketButton;
var planeButton;
var TempleButton;
var FoodButton;

var currentImage = 0;

function preload(){
ticket = loadImage("ticket.jpg");
plane = loadImage("plane.jpg");
Temple = loadImage("Temple.jpg");
Food = loadImage("Food.jpg");
}
function setup() {
  // put setup code here
createCanvas(500,800);

ticketButton = createButton("Ticket");
ticketButton.position(10,40);
ticketButton.mousePressed(function(){
currentImage = 0;
});

planeButton = createButton("Plane")
planeButton.position(100,40);
planeButton.mousePressed(Change);


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
  image(ticket, 0,20, ticket.width/2, ticket.height/2);
}else if(currentImage == 1){
  image(Plane, 0, 20, plane.width/2, plane.height/2);
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
