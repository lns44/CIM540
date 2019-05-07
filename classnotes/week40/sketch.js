var song;

var seasons;
var seasonType = "";

var answer;
var python;
var page = 0;

var currentText = "";

function preload() {

backImage = loadImage("assets/mnt.jpg");
python = loadImage("assets/python.jpeg");

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
      currentText = "Burmese Python: Invasive Species";
      song.play();
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
  //717 627 256 420

//leaves
}

}
