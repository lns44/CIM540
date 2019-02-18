/* "Up-Close Sloth" by marissa_strniste, "Baby sloth, being cute" by Dave Gingrich is licensed under CC BY-SA 2.0. To view a copy of this license, visit: https://creativecommons.org/licenses/by-sa/2.0*/

var Ticket;
var Plane;
var Temple;
var Food;

var TicketButton;
var PlaneButton;
var TempleButton;
var FoodButton;

var currentImage = 0;

function preload(){
Ticket = loadImage("Ticket.jpeg");
Plane = loadImage("Plane.jpeg");
Temple = loadImage("Temple.jpg");
Food = loadImage("Food.jpg");
}
function setup() {
  // put setup code here
createCanvas(500,800);

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




}


function Change(){
  currentImage = 1;
}
