
/**
Description of setup
*/

let clownImage;

function preload(){
  clownImage = loadImage("assets/images/clown.png");
}


let backgroundShade = 0;
let circle = {
  x: 0,
  y: 250,
  size: 100,
  speed: 2.5,
  colorR: 150,
  colorB: 0,
  colorG: 0,
}

let circleSpin = false;

function setup() {
  createCanvas(500,500);
}


/**
Description of draw()
*/
function draw() {
  background(backgroundShade);

  ellipseMode(CENTER);

  fill(circle.colorR,circle.colorB,circle.colorG);

  if ((mouseX <= circle.x + 5 && mouseX >= circle.x - 5) && (mouseY <= circle.y + 50 && mouseY >= circle.y -50)){
    circle.colorR = random(0,255);
    circle.colorB = random(0,255);
    circle.colorG = random(0,255);
  }


  circle.x = circle.x + circle.speed;

  if (circle.x > width){
    circle.speed = -circle.speed;
  }

  if (circle.x < 0){
    circle.speed = -circle.speed;
  }

  if (mouseIsPressed === true){
    circle.y = circle.y + .5;
  }

  if (mouseIsPressed === false){
    circle.y = circle.y - .5;
  }

imageMode(CENTER);
image(clownImage, 250,250);


  ellipse(circle.x, circle.y, circle.size);
}
