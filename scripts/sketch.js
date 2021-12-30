function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {

//  background('#193723');
  
  noCursor();
  stroke(255);
  strokeWeight(1);
  noFill();
  //ellipse(mouseX, mouseY, width/50);
  line(pmouseX, pmouseY, mouseX, mouseY);
  
  strokeWeight(1);
  rectMode(CENTER);
  rect(windowWidth/2, windowHeight/2, mouseX/2, mouseY/2);
              
}

function mousePressed() {
  clear();
}