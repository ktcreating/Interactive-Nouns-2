let bx;
let by;
let irotate;
let overBox = false;
let locked = false;
let xOffset = 0.0;
let yOffset = 0.0;

function setup() {
 let canvas = createCanvas(500, 500);
 canvas.parent('sketch-container');
  bx = 0;
  by = 0;
  bgx = 1;
  bg = loadImage('bg.png');
  glass = loadImage('glass.png');
  hburger = loadImage('hburger.png');
  hnoodle = loadImage('hnoodle.png');
  hpie = loadImage('hpie.png');
  htaco = loadImage('htaco.png');
  acarrot = loadImage('acarrot.png'); 
  aclover = loadImage('aclover.png');
  aheart = loadImage('aheart.png');
  aneck = loadImage('aneck.png');
  body = loadImage('body.png')
  imageMode(CENTER);
  angleMode(DEGREES);  
  irotate = 0;
}

function mousePressed() {
   irotate += 15;
  
  if (overBox) {
    locked = true;
    bx = 250; by = 250;
  } else {
    locked = false;
  }
  xOffset = mouseX - bx;
  yOffset = mouseY - by;
}

function mouseDragged() {
  if (locked) {
    bx = mouseX - xOffset;
    by = mouseY - yOffset;
  } 
}

function mouseReleased() {
  locked = false;
}

function draw() {
  background(255);
 
  push();
  translate(250, 250);
  rotate(irotate);
  image(bg, 0, 0, 700, 700); 
  pop();
  
  image(body,250,250);
  
  if (
    mouseX > 180 &&
    mouseX < 360 &&
    mouseY > 180 &&
    mouseY < 260
  ) {
    overBox = true;
    if (!locked) {}
  } else {
    overBox = false;
  }

if (by <125) {image(acarrot,250,250) } else { }  
if (125 < by && by < 250) {image(aclover,250,250) } else { } 
if (250 < by && by < 375) {image(aheart,250,250) } else { } 
if (375 < by) {image(aneck,250,250) } else { } 

if (bx == 250) {image(htaco,250,250) } else { }  
if (bx < 125) {image(htaco,250,250) } else { }  
if (125 < bx && bx < 250) {image(hpie,250,250) } else { } 
if (250 < bx && bx < 375) {image(hnoodle,250,250) } else { } 
if (375 < bx) {image(hburger,250,250) } else { } 
  
  // Draw the glass
  if (locked) 
  {image(glass, bx, by)}
   else {
    image(glass, 250, 250)
 }}
