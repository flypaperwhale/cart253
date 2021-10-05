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

let state = `title`// can be: title, simulation, sad, love

/**
Description of setup
*/
function setup() {
  createCanvas(500,500);
  setupCircles();
}

/**
Description of draw()
*/
function draw() {
  background(0);

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

function title(){
  push();
  textSize(64);
  fill(200,100,100);
  textAlign(CENTER,CENTER);
  text(`LOVE?`,width/2,height/2);
  pop();
}
function simulation(){
  move();
  checkOffscreen();
  checkOverlap();
  display();
}
function love(){
  push();
  textSize(64);
  fill(222,100,150);
  textAlign(CENTER,CENTER);
  text(`LOVE!!!`,width/2,height/2);
  pop();
}
function sad(){
  push();
  textSize(64);
  fill(200,100,100);
  textAlign(CENTER,CENTER);
  text(`OH noooo :(`,width/2,height/2);
  pop();
}

function setupCircles(){
  // position circles seperate
  circle1.x = width/3;
  circle2.x = 2 * width/3;
  // start circles moving in rando
  circle1.vx = random(-circle1.speed,circle1.speed);
  circle2.vx = random(-circle2.speed,circle2.speed);
  circle1.vy = random(-circle1.speed,circle1.speed);
  circle2.vy = random(-circle2.speed,circle2.speed);
}

function move(){
  // move circles
  circle1.x = circle1.x + circle1.vx;
  circle1.y = circle1.y + circle1.vy;

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
  ellipse(circle1.x, circle1.y, circle1.size);
  ellipse(circle2.x, circle2.y, circle2.size);
}

function mousePressed() {
  if (state === `title`){
    state = `simulation`;
  }
}
