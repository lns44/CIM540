var song;

var seasons;
var seasonType = "";

var answer;
var python;
var deer;
var cougar;
var manatee;
var lionfish;
var alligator;
var page = 0;

var currentText = "";

function preload() {

backImage = loadImage("assets/mnt.jpg");
python = loadImage("assets/python.jpeg");
deer = loadImage("assets/deer.jpg")
cougar = loadImage("assets/cougar.jpg")

soundFormats('mp3');
song = loadSound('assets/rattlesnakerattle.mp3');

}

function setup() {
  // put setup code here
  createCanvas(1440,754);
  noStroke(0);


}

  function mousePressed() {
    // if (song.isPlaying()) {
    //   song.stop();
    //   background(0,100);
    // }else{
    //   song.play();
    //   background(64, 275, 518, 155);
    // }

    //145 197 177 155

    if(mouseX > 145 && mouseX < (145 + 177) && mouseY > 197 && mouseY < (197 + 155)){
      page = 1;
      currentText = "Burmese Python: Invasive";
      song.play();
    }

    if(mouseX > 144 && mouseX < 320 && mouseY > 371 && mouseY < 527){
    page = 2;
    currentText = "Key Deer: Endangered";
    }

    if(mouseX > 144 && mouseX < 320 && mouseY > 545 && mouseY < (545 + 155)){
    page = 3;
    currentText = "Cougar: Endangered";
    }

    if(mouseX > 410 && mouseX < (410 + 177) && mouseY > 206 && mouseY < (206 + 155)){
    page = 4;
    currentText = "Manatee: Endangered";
    }

    if(mouseX > 410 && mouseX < (410 + 177) && mouseY > 378 && mouseY < (378 + 155)){
    page = 5;
    currentText = "Lionfish: Invasive";
    }

    if(mouseX > 410 && mouseX < (410 + 177) && mouseY > 552 && mouseY < (552 + 155)){
    page = 6;
    currentText = "Alligator: Endangered";
    }

  }


function draw() {
background(255);
image(backImage,0,0, backImage.width/4.5,backImage.height/4.5);
textSize(25);
fill('red');
text(currentText, 240,170);

if(page == 1){
// show snake image
image(python, 650,220, 620, 420 );
}

if(page == 2){
// show deer image
image(deer, 650,220, 620, 420 );
}

}
