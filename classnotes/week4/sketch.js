/* "Up-Close Sloth" by marissa_strniste, "Baby sloth, being cute" by Dave Gingrich is licensed under CC BY-SA 2.0. To view a copy of this license, visit: https://creativecommons.org/licenses/by-sa/2.0*/

var Ticket;
var Plane;
var aussie3;
var aussie4;

var TicketButton;
var PlaneButton;
var aussie3Button;
var aussie4Button;

var currentImage = 0;

function preload(){
Ticket = loadImage("ticket.jpeg");
aussie2 = loadImage("Plane.jpeg");
aussie3 = loadImage("assets/aussie3.jpg");
aussie4 = loadImage("assets/aussie4.jpg");
}
function setup() {
  // put setup code here
createCanvas(500,500);

TicketButton = createButton("Ticket");
TicketButton.position(10,40);
TicketButton.mousePressed(function(){
currentImage = 0;
});

PlaneButton = createButton("aussie 2")
PlaneButton.position(100,40);
PlaneButton.mousePressed(aussieChange);


aussie3Button = createButton("aussie 3");
aussie3Button.position(190,40);
aussie3Button.mousePressed(function(){

currentImage = 2;

});

aussie4Button = createButton("aussie 4");
aussie4Button.position(280,40);
aussie4Button.mousePressed(function(){

currentImage = 3;

});

}




function draw() {
  // put drawing code here
if(currentImage == 0){
  image(ticket, 0,20, Ticket.width/2, Ticket.height/2);
}else if(currentImage == 1){
  image(aussie2, 0, 20, Plane.width/2, Plane.height/2);
}else if(currentImage == 2){
  image(aussie3, 0, 20,  aussie3.width/2, aussie3.height/2);
}
else if(currentImage == 3){
  image(aussie4, 0, 20,  aussie4.width/2, aussie4.height/2);
}


}


function aussieChange(){
  currentImage = 1;
}
