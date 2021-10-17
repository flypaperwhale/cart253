"use strict";

let tree = {
  image: undefined,
  x:200,
  y:200,
  w:50,
  h:60,
  onFire:0,
}

let fire = {
  image: undefined,
  x:0,
  y:0,
  w:45,
  h:50,
  side:1, //or side 2
}

/*let cloud = {
  image: undefined,
  x:30,
  y:30,
  w:60,
  h:40,
}
*/

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
  speed:2,
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

let fireIMG1;
let fireIMG2;
let thunderSFX;

let onFire=0;

function preload() {
  tree.image = loadImage('assets/images/Fir2.png');

  fireIMG1 = loadImage('assets/images/fire1.png');
  fireIMG2 = loadImage('assets/images/fire2.png'); // <--- FLICKER

  cloud.image = loadImage('assets/images/cloud.png');

  thunderSFX = loadSound(`assets/sounds/THUND.WAV`);

  cursor.image = loadImage('assets/images/Godly-user.png');
}

function setup(){
  createCanvas(400,400);
  frameRate(10);

  // intialize cloud position and velocity
    cloud.y = random(0,height);
    cloud.vx = cloud.vx + cloud.speed;

    noCursor();
}


function draw(){
  background(40,130,3);

  tree.x = width/2;
  tree.y = height/2;

  image(tree.image,tree.x,tree.y,tree.w,tree.h);
  image(cloud.image,cloud.x,cloud.y,cloud.w,cloud.h);



  if (fire.side === 1){
    fire.image = fireIMG1;
    fire.side = 2;
  }
  else if (fire.side === 2){
    fire.image = fireIMG2;
    fire.side =1;
  }

  if (onFire===1){
    displayFire();
  }

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

}

function displayFire(){
  image(fire.image,tree.x,tree.y,fire.w,fire.h);
}

function mousePressed(){
  onFire = 1;
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
