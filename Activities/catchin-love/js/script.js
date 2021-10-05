"use strict";

let circle1 = {
  x:undefined,
  y:250,
  size: 100,
  vx:0,
  vy:0,
  speed:3,
};

let circle2 = {
  x:undefined,
  y:250,
  size: 100,
  vx:0,
  vy:0,
  speed:3,
};

/**
Description of setup
*/
function setup() {
  createCanvas(500,500);
  // position circles seperate
  circle1.x = width/3;
  circle2.x = 2 * width/3;
  // start circles moving in rando
  circle1.vx = random(-circle1.speed,circle1.speed);
  circle2.vx = random(-circle2.speed,circle2.speed);
}

/**
Description of draw()
*/
function draw() {
  background(0);
}
