function setup() {
  let navWidth = document.getElementById("nav").offsetWidth;
  let canvas = createCanvas(windowWidth - navWidth, windowHeight);
  canvas.parent("canvas");
  background(255);
}

function draw() {
 for(x = 50; x < width-30; x += 50)
 {
  for(y = 50; y < height-30; y += 50)
  {
    noFill();
    triangle(x, y, x + 30, y, x, y + 30);   
  }
 }
  
}

function windowResized() {
  let navWidth = document.getElementById("nav").offsetWidth;
  resizeCanvas(windowWidth - navWidth, windowHeight);
  background(255);
}
