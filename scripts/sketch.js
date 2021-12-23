function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {

  background('#193723');
  
  noCursor();
  stroke('#E6DCC8');
  strokeWeight(25);
  noFill();
  //ellipse(mouseX, mouseY, width/50);
  line(pmouseX, pmouseY, mouseX, mouseY);
              
}