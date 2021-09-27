/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

let covid19 = {
  x:0,
  y:250,
  size:100,
  speed:5,
  vx:0,
  vy:0,
  color: {
    r:255,
    g:0,
    b:0,
  }
};

let user = {
  x:250,
  y:250,
  size: 100,
  color: 255,
};

/**
Description of preload
*/
function preload() {

}

/**
Description of setup
*/
function setup() {
  createCanvas(windowWidth,windowHeight);

  covid19.y = random(0,height);
  covid19.vx = covid19.speed;
}

/**
Description of draw()
*/
function draw() {
  background(0);
  // static background
  for (let i = 0; i < 3000; i++){
    let x = random(0,width);
    let y = random(0,height);
    stroke(255);
    point(x,y);
  }


  // covid movement
  covid19.x = covid19.x + covid19.vx;
  covid19.y = covid19.y + covid19.vy;

  if (covid19.x > width){
    covid19.x = 0;
    covid19.y = random(0,height);
  }
  // user movement
  user.x = mouseX;
  user.y = mouseY;

  // check for covid catching
  let d = dist(user.x, user.y, covid19.x, covid19.y);
  if(d < covid19.size/2 + user.size/2 + 1.5){
    noLoop();
  }

  // display covid
  noStroke();
  fill(covid19.color.r,covid19.color.g,covid19.color.b);
  ellipse(covid19.x,covid19.y,covid19.size);
  // display user
  fill(user.color);
  ellipse(user.x,user.y,user.size);
}
