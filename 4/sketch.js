let isFinished = false;
let triangleAmount = 10;


function setup() {
  let navWidth = document.getElementById("nav").offsetWidth;
  let canvas = createCanvas(windowWidth - navWidth, windowHeight);
  canvas.parent('canvas');
  background(255);
}

function draw() {
  if(isFinished = false){
    for (let x = 50; x <= width-50; x += 20)
    {
      for (let y = 50; y <= height-50; y+=20)
      {
        triangle (random(width), random(height), random(width), random(height), random(width), random(height));
        triangleAmount = triangleAmount + 1;
          
        if(triangleAmount <= 20){
          isFinished = true;
        }
         
        
      }
    } 
    
   
    
}

function windowResized() {
  let navWidth = document.getElementById("nav").offsetWidth;
  resizeCanvas(windowWidth - navWidth, windowHeight);
  background(255);
}