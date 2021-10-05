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
  circle1.vy = random(-circle1.speed,circle1.speed);
  circle2.vy = random(-circle2.speed,circle2.speed);
}

/**
Description of draw()
*/
function draw() {
  background(0);
  // move circle
  circle1.x = circle1.x + circle1.vx;
  circle1.y = circle1.y + circle1.vy;

  circle2.x = circle2.x + circle2.vx;
  circle2.y = circle2.y + circle2.vy;

  // check if the circle have gone offscreen
  if(circle1.x < 0 || circle1.x > width || circle1.y < 0 || circle1.y > height || circle2.x < 0 || circle2.x > width || circle2.y < 0 || circle2.y > height){
    // SAD ENDING
  }

  // display circles
  ellipse(circle1.x, circle1.y, circle1.size);
  ellipse(circle2.x, circle2.y, circle2.size);
}
