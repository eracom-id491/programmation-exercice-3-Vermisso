function setup() {
  let navWidth = document.getElementById("nav").offsetWidth;
  let canvas = createCanvas(windowWidth - navWidth, windowHeight);
  canvas.parent('canvas');
  background(255);
}

function draw() {
  fill(0);
  noFill();
  rectMode(CENTER);
  
  for (let x = 50; x <= width-50; x += 20) {
    for (let y = 50; y <= height-50; y+=20) {
        
        rect(x, y, 10, 10); 
    }
  }
}

function windowResized() {
  let navWidth = document.getElementById("nav").offsetWidth;
  resizeCanvas(windowWidth - navWidth, windowHeight);
  background(255);
}