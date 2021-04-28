let isFinished = false;
let triangleAmount = 10;


function setup() {
  let navWidth = document.getElementById("nav").offsetWidth;
  let canvas = createCanvas(windowWidth - navWidth, windowHeight);
  canvas.parent('canvas');
  background(255);
}

function draw() {
  
  for(x = 0; x <= 50; x = x+ 5)
  {
    rect(x, x, x, x);
  }
    
   
    
}

function windowResized() {
  let navWidth = document.getElementById("nav").offsetWidth;
  resizeCanvas(windowWidth - navWidth, windowHeight);
  background(255);
}