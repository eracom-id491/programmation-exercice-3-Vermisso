let isFinished = false;
let rectAmount;


function setup() {
  let navWidth = document.getElementById("nav").offsetWidth;
  let canvas = createCanvas(windowWidth - navWidth, windowHeight);
  canvas.parent('canvas');
  background(255);
  rectAmount = 0;
}

function draw() {
  
if(isFinished == false)
{
  for(x = 0; x <= width/2; x = x + width/random(2, 30))
  {
    for(y = 0; y <= height/2; y = y + width/random(2, 30))
    {
      noFill();
      rectMode(CENTER);
      rect(width/2,height/2,x,y);
      rectAmount += 1;
      
    }
  }

  if(rectAmount >= 10){
    isFinished = true;
  }
}
  
    
   
    
}

function windowResized() {
  let navWidth = document.getElementById("nav").offsetWidth;
  resizeCanvas(windowWidth - navWidth, windowHeight);
  background(255);
}