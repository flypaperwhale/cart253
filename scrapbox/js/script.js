
let thunderSFX;

let cloud = {
  image:undefined,
  x:50,
  y:60,
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

}


function draw(){
  background(0);

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
      cloud.clicked=false;
    }
  }
};

function lightNThunder(){
  if (cloud.clicked){
      thunderSFX.play();

  console.log(mouseClicked());
}}
