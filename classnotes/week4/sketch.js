/* "Up-Close Sloth" by marissa_strniste, "Baby sloth, being cute" by Dave Gingrich is licensed under CC BY-SA 2.0. To view a copy of this license, visit: https://creativecommons.org/licenses/by-sa/2.0*/

var ticket;
var slothAdult;

var ticketButton;
var adultButton;

var currentImage = 1;

function preload(){
  ticket = loadImage("ticket.jpeg");
  slothAdult = loadImage("slothadult.jpg");
}

function setup() {
  // put setup code here
  createCanvas(500,500);
  ticketButton = createButton("ticket");
  ticketButton.position(10,40);
  ticketButton.mousePressed(function(){
    currentImage = 0;
  });

  adultButton = createButton("Adult Sloth");
  adultButton.position(100,40);
  adultButton.mousePressed(adultChange);

}

function draw() {
  // put drawing code here
  if(currentImage == 0){
    image(ticket, 0,20,ticket.width/2,ticket.height/2);
  }else if(currentImage == 1){
    image(slothAdult, 0,20,slothAdult.width/2,slothAdult.height/2);
  }



}

function adultChange(){
  currentImage = 1;
}








// end of code
