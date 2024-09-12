let img;
let backgroundImg;
function preload() {
  img = loadImage('./images/turtleImg.svg');
  backgroundImg = loadImage('./images/beachImg.svg')
}

function setup() {
  createCanvas(displayWidth, displayHeight);
  backgroundImg.resize(windowWidth, windowHeight)
  background(backgroundImg)
  noStroke()
 
}

function draw() {
  img.resize(200,200);
  image(img, mouseX-20,mouseY-20)
  frameRate(3)
  
  fill('#C6B6A8')
  rotate(.15)
  ellipse(mouseX,mouseY,25,50)
  frameRate(2.5)

  rotate(.1)
  ellipse(mouseX-50,mouseY-100,25,50)
  

  console.log(mouseClicked)
}

function mouseClicked(){
  
 
}
