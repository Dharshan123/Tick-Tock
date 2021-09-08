var hr,min,sec
var hrAngle, minAngle, secAngle

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  hr = hour()
  min = minute()
  sec = second()

  secAngle = map(sec,0,60,0,360)
  minAngle = map(min,0,60,0,360)
  hrAngle = map(hr%12,0,12,0,360)

  background(255,255,255); 

  translate(200,200)
  rotate(-90)

  push();
  rotate(secAngle);
  stroke(255,0,0);
  strokeWeight(8);
  line(0,0,100,0);
  pop();

  push();
  rotate(minAngle);
  stroke(0,255,0);
  strokeWeight(8);
  line(0,0,100,0);
  pop();

  push();
  rotate(hrAngle);
  stroke(0,0,255);
  strokeWeight(8);
  line(0,0,100,0);
  pop();

  stroke(255,0,255);
  point(0,0);
  strokeWeight(8);
  noFill();
  stroke(255,0,0);
  arc(0,0,300,300,0,secAngle);

  stroke(0,255,0);
  arc(0,0,280,280,0,minAngle);

  stroke(0,0,255);
  arc(0,0,250,250,0,hrAngle);
  
  drawSprites();
}