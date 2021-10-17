/**
I Dream of Fish
Frankie L.

Behold! It looks as though I am creating life out of code!
*/

"use strict";

let round = 0;
let magicNum = 2;

let school = [];
let schoolSize = 0;

let cursor = {
  image:undefined,
  x:0,
  y:0,
  width:200,
  height:250,
}

/**
Description of preload
*/
function preload() {
  cursor.image = loadImage('assets/images/hermes-staff.png');
}


/**
Description of setup
*/
function setup() {
  createCanvas(600,600);
  noCursor();
  schoolSize = random(1,12);
//create fish
for (let i = 0; i < schoolSize; i++){
  school[i] = createFish(random(0,width), random(0,height), random(0,255),);
  colorizeFish(school[i]);
}
}

function createFish(x,y){
  let fish = {
    x: x,
    y: y,
    size:100,
    vx:0,
    vy:0,
    speed:2,
    color:{
      r:0,
      g:0,
      b:0,
    },
    song:undefined,
  };
  return fish;
}

/**
Description of draw()
*/
function draw() {
  background(100,180,225);

  for (let i = 0; i < school.length; i++){

    moveFish(school[i]);
    displayFish(school[i]);
  }

  drawUser();

}

function colorizeFish(fish){
  round = round + 1 ;
  if (round === 1){
    fish.color.r =0;
    fish.color.b =200;
    fish.color.g =150;
    fish.song = x;
}
  if (round === 2){
    fish.color.r =100;
    fish.color.b =255;
    fish.color.g =0;
    fish.song = y;
  }
  if (round === 3){
    fish.color.r =100;
    fish.color.b =0;
    fish.color.g =255;
    fish.song = z;
    round = 1;
  }
}
//move fish()
// choose whether provided fish changes direction and moves it
function moveFish(fish){
//choose whether to change direction
  let change = random(0,1);
  if (change < 0.05){
    fish.vx = random(-fish.speed, fish.speed);
    fish.vy = random(-fish.speed, fish.speed);
  }
//move the fish
  fish.x = fish.x + fish.vx;
  fish.y = fish.y + fish.vy;
//constrain fish to canvas
  fish.x = constrain(fish.x, 0, width);
  fish.y = constrain(fish.y, 0, height);
}

//display Fish
//displays the provided fish on the canvas
function displayFish(fish){
  push();
  fill(fish.color.r,fish.color.g,fish.color.b);
  noStroke();
  ellipse(fish.x,fish.y,fish.size);
  pop();
}

function drawUser(){
  push();
  imageMode(CENTER);
  image(cursor.image,mouseX,mouseY,cursor.width,cursor.height);
  pop();
}
