/**
I Dream of Fish
Frankie L.

Behold! It looks as though I am creating life out of code!
*/

"use strict";

let school = [];

/**
Description of preload
function preload() {
}
*/

/**
Description of setup
*/
function setup() {
  createCanvas(600,600);

//create fish
for (let i = 0; i < 4; i++){
  school[i] = createFish(random(0,width), random(0,height));
}

}

function createFish(x,y){
  let fish = {
    x: x,
    y: y,
    size:50,
    vx:0,
    vy:0,
    speed:2,
  };
  return fish;
}

/**
Description of draw()
*/
function draw() {
  background(0);

  for (let i = 0; i < 4; i++){
    moveFish(school[i]);
  }

  for (let i = 0; i < 4; i++){
    displayFish(school[i]);
  }
}

//move fish
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
  fill(145,225,100);
  noStroke();
  ellipse(fish.x,fish.y,fish.size);
  pop();
}
