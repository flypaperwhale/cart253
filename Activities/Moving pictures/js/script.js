/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

let bg = {
  r: 0,
  g: 200,
  b: 100
};
let circle1 = {
  x: 0,
  y: 250,
  size: 100,
  growthRate: 1,
  fill: 255,
  alpha: 200
};
let circle2 = {
  x: 500,
  y: 250,
  size: 25,
  sizeRatio: .65,
  fill: 255,
  alpha: 200
};
/**
Description of setup
*/
function setup() {
  createCanvas(500,500);
  circle2.x = width;
  circle2.y = height/2;
  noStroke();
}


/**
Description of draw()
*/
function draw() {
  //background
  background(bg.r,bg.g,bg.b);
  //bg.g = bg.g + 1;
  bg.b = map(circle1.size, 100, width, 0, 255);
  //left circle
  circle1.x = circle1.x + 1;
  circle1.x = constrain(circle1.x,0,width/2);
  circle1.size = circle1.size + circle1.growthRate;
  circle1.size = constrain(circle1.size,0,width);
  fill(circle1.fill,circle1.alpha);
  ellipse(circle1.x,circle1.y,circle1.size);

  //right circle
  circle2.x = circle2.x + -1;
  circle2.x = constrain(circle2.x,width/2,width);
  circle2.size = circle1.size * circle2.sizeRatio;
  fill(circle2.fill,circle2.alpha);
  ellipse(circle2.x,circle2.y,circle2.size);
}
