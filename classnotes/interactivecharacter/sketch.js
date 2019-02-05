function setup() {
  createCanvas(600, 600);
  background("pink");
  button = createButton('click me');
  button.position(280, 570);
  button.mousePressed(function(){
    val = "green";
    });
}


function draw() {

    line(mouseX, 0, mouseX, 100);

    line(0, mouseY, 100, mouseY);



  // head
  ellipse(300,150,200,200);
  ellipse(300,400,300,300);
  //mouth
  rect(260,190,75,20);
  rect(270,210,55,10);

  //nose
  ellipse(300,160,10,10);


strokeWeight(1);

  //eyes
  ellipse(250,135,25,30);

  //eyes
  ellipse(350,135,25,30);

  //tail
  strokeWeight(13);
  line(400,285,400,225);
  line(490,265,400,225);

  line(200,285,200,225);
  line(110,265,200,225);

  //hat
  fill(204, 101, 192, 127);
  triangle(450,100,300,25,150,100);

  fill(204, 101, 192, 127);
  ellipse(350,135,10,10);
  //second pupil
  ellipse(250,135,10,10);
  //mouse

noFill();
strokeWeight(4);
angleMode(DEGREES);
arc(200,500,50,90,135,270);
arc(400,500,-50,70,135,270);
}

  fill(204, 101, 192, 127);
  strokeWeight(13);

//neck- not appearung tho
rect(260,220,75,60,10);
