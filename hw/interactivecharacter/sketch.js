function setup() {
  createCanvas(600, 600);
  background("pink");

}


function keyPressed(){
    console.log(key);
    console.log(keyCode);


    if(key == 'A'){
        console.log("A is for Apple");
    }

    if(keyCode ==65){
        console.log("A is for 65");
    }

}

function draw() {
  // put drawing code here
background(246, 206, 141);
  strokeWeight(1);
  fill(200,220,200);

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



}
