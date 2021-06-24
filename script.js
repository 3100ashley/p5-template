let img;
let backgroundImg;
function preload() {
  img = loadImage('./images/turtle.svg');
  backgroundImg = loadImage('./images/beach.svg')
}

function setup() {
  createCanvas(displayWidth, displayHeight);
  backgroundImg.resize(windowHeight,windowWidth - 200)
  background(backgroundImg)
  noStroke()
 
  
}

function draw() {
  img.resize(200,200);
  cursor(image(img, mouseX-20,mouseY-20))
  frameRate(3)
  
  fill('#C6B6A8')
  rotate(.15)
  ellipse(mouseX,mouseY,25,50)
  frameRate(2.5)

  fill('#C6B6A8')
  rotate(.1)
  ellipse(mouseX-50,mouseY-100,25,50)
  frameRate(2.5)
  

 
    
  
  

  
  

  
  
 
}
