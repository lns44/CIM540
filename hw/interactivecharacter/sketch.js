var backgroundColor = "white";

function setup() {
  // put setup code here
  createCanvas(600,600);}

function draw() {
  // put drawing code here
background(backgroundColor);
fill("lightblue");
strokeWeight(1);


line(mouseX, 0, mouseX, 100);
 line(0, mouseY, 100, mouseY);

  // head
  ellipse(300,150,200,200);
  fill("pink");
  ellipse(300,400,300,300);
  fill("pink");
  //mouth
  rect(260,190,75,20);
  rect(270,210,55,10);
//nose
ellipse(300,160,10,10);

strokeWeight(1);
  //eyes
ellipse(250,135,25,30);
fill("pink");

  //eyes
ellipse(350,135,25,30);
  fill("white");

  //tail
  strokeWeight(13);
  line(400,285,400,225);
  line(490,265,400,225);

  line(200,285,200,225);
  line(110,265,200,225);

  //hat
  fill(204,101, 192, 127);
  triangle(450,100,300,25,150,100);

  fill(0,0,0,0);
  ellipse(350,135,10,10);
  //second pupil

  ellipse(250,135,10,10);
  fill('black');
  textSize(12);
  text('Click and hold to change the background red!', 185, 580);

  //mouse

}

function mousePressed(){
  backgroundColor = "red";
}

function mouseReleased(){
  backgroundColor = "white";
}

function keyPressed(){
  console.log("Current key: " + key + " : " + keyCode);
  if(key == "r"){
    backgroundColor = "red";
  }else if(key == "g"){
    backgroundColor = "green";
  }else if(key == "b"){
    backgroundColor = "blue";
}
}
