
let frame;
let thunderSFX;

let lightning = {
  x:0,
  y:0,
  color:255,
  alpha:0,
}

let cloud = {
  image:undefined,
  x:50,
  y:60,
  speed:1,
  vx:0,
  vy:0,
  width:65,
  height:50,
  clicked:undefined,
}
let cursor = {
  image:undefined,
  x:0,
  y:0,
  width:45,
  height:45,
}

function preload() {
  thunderSFX = loadSound(`assets/sounds/THUND.WAV`);

  cursor.image = loadImage('assets/images/Godly-user.png');
  cloud.image = loadImage('assets/images/cloud.png');
}

function setup(){
  createCanvas(500,500);

  // intialize cloud position and velocity
  cloud.y = random(0,height);
  cloud.vx = cloud.vx + cloud.speed;

  noCursor();
}


function draw(){
  background(0);
  lightFilter();

  // Clowns movement //
  // clown 1
  cloud.x = cloud.x + cloud.vx;
  cloud.y = cloud.y + cloud.vy;
  // clowns reapear at the left side when arriving at the right side
  if (cloud.x > width){
    cloud.x = 0;
    cloud.y = random(0,height);}

  push();
  imageMode(CENTER);
  image(cloud.image,cloud.x,cloud.y,cloud.width,cloud.height);
  pop();

  cursor.x = mouseX;
  cursor.y = mouseY;
  image(cursor.image,cursor.x,cursor.y,cursor.width,cursor.height);

  lightNThunder();

  console.log(`mouse over cloud = ${MouseOverCloud()} and cloud.clicked = ${cloud.clicked}`);

}

function lightFilter(){
  console.log(`alpha1=${lightning.alpha}`);
  push();
  noStroke();
  fill(lightning.color,lightning.alpha);
  rectMode(CENTER);
  rect(lightning.x,lightning.y,canvas.width,canvas.height);
  pop();
  console.log(`alpha2=${lightning.alpha}`);
}

function MouseOverCloud(){
  let d = dist(cursor.x, cursor.y, cloud.x, cloud.y);
  if (d < cursor.width/2 + cloud.width/2){
    return true;}
  else {
    return false
  }
  }

function mouseClicked(){
  if (MouseOverCloud()){
    cloud.clicked=true;
    if (cloud.clicked === true){

      thunderSFX.play();
      lightning.alpha = 255;
      cloud.clicked=false;
    }
  }
};

function lightNThunder(){
    console.log(`you've made it in lightnthunder`);
    lightning.alpha = random(1-255);

  }
  //console.log(`mouseclicked = ${mouseClicked()} and frame = ${frame} and lightning.alpha = ${lightning.alpha}`);
