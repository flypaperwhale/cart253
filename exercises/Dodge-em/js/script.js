/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

let clownAsCovid = {
  x:0,
  y:250,
  size:100,
  speed:5,
  vx:0,
  vy:0,
  image: undefined,
};

let user = {
  x:250,
  y:250,
  size: 100,
  color: 255,
};

let numStatic = 2500;

let clown = undefined;

/**
Description of preload
*/
function preload() {

  clown = loadImage('assets/images/clown.png');

}

/**
Description of setup
*/
function setup() {
  createCanvas(windowWidth,windowHeight);

  clownAsCovid.y = random(0,height);
  clownAsCovid.vx = clownAsCovid.speed;

  noCursor();
}

/**
Description of draw()
*/
function draw() {
  background(0);
  // static background
  for (let i = 0; i < numStatic; i++){
    let x = random(0,width);
    let y = random(0,height);
    stroke(255);
    point(x,y);
  }


  // covid movement
  clownAsCovid.x = clownAsCovid.x + clownAsCovid.vx;
  clownAsCovid.y = clownAsCovid.y + clownAsCovid.vy;

  if (clownAsCovid.x > width){
    clownAsCovid.x = 0;
    clownAsCovid.y = random(0,height);
  }
  // user movement
  user.x = mouseX;
  user.y = mouseY;

  // check for covid catching
  let d = dist(user.x, user.y, clownAsCovid.x, clownAsCovid.y);
  if(d < clownAsCovid.size/2 + user.size/2 + 1.5){
    noLoop();
  }

  // display clownAsCovid
  clownAsCovid.image = clown;
  image(clownAsCovid.image, clownAsCovid.x, clownAsCovid.y);


  // display user
  fill(user.color);
  ellipse(user.x,user.y,user.size);
}
