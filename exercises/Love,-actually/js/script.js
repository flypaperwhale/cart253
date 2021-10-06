/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

let bg = {
  color:{
    r:0,
    g:0,
    b:0,
  }
};

let circle1 = {
  x:undefined,
  y:250,
  size: 100,
  vx:0,
  vy:0,
  speed:1,
  color:{
    r:undefined,
    g:undefined,
    b:undefined,
  }
};

let circle2 = {
  x:undefined,
  y:250,
  size: 100,
  vx:0,
  vy:0,
  speed:3,
  color:{
    r:undefined,
    g:undefined,
    b:undefined,
  }
};

let state = `title`// can be: title, simulation, desert, seeds

/**
Description of preload
*/
function preload() {

}

/**
Description of setup
*/
function setup() {
  createCanvas(500,500);
  setupCircles();
  bg.color.r=19;
  bg.color.g=40;
  bg.color.b=15;
}

/**
Description of draw()
*/
function draw() {
  background(bg.color.r,bg.color.g,bg.color.b);

  if (state === `title`){
    title();
  }
  else if (state === `simulation`){
    simulation();
  }
  else if (state === `love`){
    love();
  }
  else if (state === `sad`){
    sad();
  }
}

// functions //
function setupCircles(){
  // position circles seperate
  circle1.x = width/3;
  circle2.x = 2 * width/3;
  // start circles moving in rando
  circle1.vx = -circle.speed;
  circle2.vx = random(-circle2.speed,circle2.speed);
  //circle1.vy = random(-circle1.speed,circle1.speed);
  //circle2.vy = random(-circle2.speed,circle2.speed);
}

function title(){
  push();
  textSize(64);
  fill(200,100,100);
  textAlign(CENTER,CENTER);
  text(`LOVE?`,width/2,height/2);
  pop();
}
function mousePressed() {
  if (state === `title`){
    state = `simulation`;
  }
}
function simulation(){
  move();
  checkOffscreen();
  checkOverlap();
  display();
}
function love(){
  display();
  //createSeed(); // <--
  disperseSeed(circle1);
  disperseSeed(circle2);
  changeBackgroundColor(2,5,1,75,205,40);
}
function sad(){
  push();
  textSize(64);
  fill(200,100,100);
  textAlign(CENTER,CENTER);
  text(`Deserted`,width/2,height/2);
  pop();
  changeBackgroundColor(2,2,1,115,100,70);
}

// function simulation functions //
function move(){
  // move circles
  // circle1
  circle1.x = circle1.x + circle1.vx;
  circle1.y = circle1.y + circle1.vy;
  // circle2
  circle2.x = circle2.x + circle2.vx;
  circle2.y = circle2.y + circle2.vy;
}

function checkOffscreen(){
  // check if the circle have gone offscreen
  if(circle1.x < 0 || circle1.x > width || circle1.y < 0 || circle1.y > height || circle2.x < 0 || circle2.x > width || circle2.y < 0 || circle2.y > height){
    // SAD ENDING
    state = `sad`;
  }
}

function checkOverlap(){
  // check if circles overlap
  let d = dist(circle1.x,circle1.y,circle2.x,circle2.y);
  if (d < circle1.size/2 + circle2.size/2){
    // LOVE ENDING
    state = `love`;
  }
}

function display(){
  // display circles
  push();
  noStroke();
  fill(148,87,46);
  ellipse(circle1.x, circle1.y, circle1.size);
  ellipse(circle2.x, circle2.y, circle2.size);
  pop();
}

function disperseSeed(circle){
  // display seeds
  for (let i = 0; i<5;i++){
    push();
    fill(92,47,7);
    ellipseMode(CENTER);
    seedX=circle.x;
    seedY=circle.y;
    ellipse(seedX,seedY,seedSize);
    pop();
    seedX = seedX + random(-circle.size,circle.size);
    seedY = seedY + random(-circle.size,circle.size);
  }
}

function changeBackgroundColor(addR,addG,addB,maxR,maxG,maxB){
  bg.color.r = bg.color.r + addR;
  bg.color.r = constrain(bg.color.r,0,maxR);
  bg.color.g = bg.color.g + addG;
  bg.color.g = constrain(bg.color.g,0,maxG);
  bg.color.b = bg.color.b + addB;
  bg.color.b = constrain(bg.color.b,0,maxB);
}
