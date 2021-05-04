function setup() {
  let navWidth = document.getElementById("nav").offsetWidth;
  let canvas = createCanvas(windowWidth - navWidth, windowHeight);
  canvas.parent('canvas');
  background(255);
}

function draw() {
  noFill();
  for (let x = 10; x <= width; x = x + 70) {
    ellipse(x, x, x, x);

    for (let x = 10; x <= width; x = x + 70) {
      ellipse(x, height/2, x, x);

      for (let x = 10; x <= width; x = x + 70) {
        ellipse(x, height, x, x);
    
      }
    }


  }

  
}

function windowResized() {
  let navWidth = document.getElementById("nav").offsetWidth;
  resizeCanvas(windowWidth - navWidth, windowHeight);
  background(255);
}