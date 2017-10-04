function setup() {
  createCanvas(500,500);
  background(255,0,0);
  angleMode(DEGREES);
  
}

function draw() {
  translate(width/2,height/2);
  noFill();
  
  stroke(255,255,0);
  strokeWeight(4);
  noFill();
  line(0,200,cos(frameCount*10)*200,sin(frameCount*10)*200);
  
  if (frameCount == 36) {
    noLoop();
}
}