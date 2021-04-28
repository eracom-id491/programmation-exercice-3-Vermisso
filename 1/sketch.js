let isFinished = false;
let border = 30;

function setup() {
  let navWidth = document.getElementById("nav").offsetWidth;
  let canvas = createCanvas(windowWidth - navWidth, windowHeight);
  canvas.parent("canvas");
  background(255);
  
}

function draw() {
  fill(0);
  for( x = border; x <= width-border; x += 30){
   
      ellipse(x, random(0 + border, height - border), 10, 10);
    
    
  }
}

function windowResized() {
  let navWidth = document.getElementById("nav").offsetWidth;
  resizeCanvas(windowWidth - navWidth, windowHeight);
  background(255);
}
