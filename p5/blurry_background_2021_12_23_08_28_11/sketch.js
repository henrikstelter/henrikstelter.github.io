let r,g,b;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  
  r = 0;
  g = 0;
  b = 0;
  
  r = map(mouseX, 0, windowWidth, 0, 255);
  g = map(mouseX, 0, windowWidth, 255, 0);
  b = map(mouseY, 0, windowHeight, 255, 0);
  
  noStroke();
  fill(r,g,b);
  
  ellipse(mouseX,mouseY,windowWidth/2);
  
  fill(b,r,g)
  rectMode(CENTER);
  rect(windowWidth/2,windowHeight/2,mouseX/2,mouseY/2);
  
}