/**
Impact circles
Frankie Latreille

This program is supposed to simulate the meeting of two plants to produce seed
I couldn't quite get the seed animation to work, so the land either turns green
when the two circles meet, or if they split, the background turns gray
*/

"use strict";

// creating js objects//
// the background
let bg = {
  color:{
    r:0,
    g:0,
    b:0,
  }
};
// circle1 the NPC
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
// circle2 the Player
let circle2 = {
  x:undefined,
  y:250,
  size: 100,
  vx:0,
  vy:0,
  speed:2,
  color:{
    r:undefined,
    g:undefined,
    b:undefined,
  }
};

let state = `title`// can be: title, simulation, desert, seeding, stop

/**
Setting up canvas and circles
*/
function setup() {
  createCanvas(500,500);
  bg.color.r=19;
  bg.color.g=40;
  bg.color.b=15;

  setupCircles();
}

/**
Drawing different scenarios with different states
*/
function draw() {
// fill in the background a dark green
  background(bg.color.r,bg.color.g,bg.color.b);
// title state calls the title function to display the title
  if (state === `title`){
    title();
  }
// simulation state has the two main circles moving
  else if (state === `simulation`){
    simulation();
  }
// the seeding state has the circles stop and the background turn green
  else if (state === `seeding`){
    seeding();
  }
// the desert state stops the animation and turns the background gray
  else if (state === `desert`){
    desert();
  }
// stop state terminates the program
  else if (state === `stop`){
    changeBackgroundColor(10,40,2,75,205,40);
    display();
    noLoop();
  }
}

// functions //
function setupCircles(){
// position circles seperate
  circle1.x = width/3;
  circle2.x = 2 * width/3;
// start circles moving in random directions, only on x axis
  circle1.vx = random(-circle2.speed,0);
  circle2.vx = random(0,circle2.speed);
}

// title function for title state
function title(){
  push();
  textSize(64);
  fill(200,140,100);
  textAlign(CENTER,CENTER);
  text(`Seeds?`,width/2,height/2);
  pop();
}
// press any key to start simulation
function keyPressed() {
  if (state === `title`){
    state = `simulation`;
  }
}
// simulation function
function simulation(){
  moveCircles();
  checkOffscreen();
  checkOverlap();
  display();
}
// when mouse is pressed, player circle runs into the NPC circle
function mousePressed(){
  circle2.vx=circle2.vx-9;
}
// seeding when the two circles touch, the background changes to green
function seeding(){
  display();
  push();
  textSize(64);
  fill(140,100,140);
  textAlign(CENTER,CENTER);
  text(`Seeded!`,width/2,height/2);
  pop();
  changeBackgroundColor(10,40,2,75,205,40);
  //state = `stop`;
}
// desert, when the circles split, the background changes to gray
function desert(){
  push();
  textSize(64);
  fill(140,140,140);
  textAlign(CENTER,CENTER);
  text(`Deserted`,width/2,height/2);
  pop();
  changeBackgroundColor(2,2,1,115,100,70);
}

// function simulation functions //
// move circles
function moveCircles(){
  // circle1
  circle1.x = circle1.x + circle1.vx;
  circle1.y = circle1.y + circle1.vy;
  // circle2
  circle2.x = circle2.x + circle2.vx;
  circle2.y = circle2.y + circle2.vy;
}
// check if the circles have gone offscreen
function checkOffscreen(){
  if(circle1.x < 0 || circle1.x > width || circle1.y < 0 || circle1.y > height || circle2.x < 0 || circle2.x > width || circle2.y < 0 || circle2.y > height){
    // SAD ENDING
    state = `desert`;
  }
}
// check if circles overlap
function checkOverlap(){
  let d = dist(circle1.x,circle1.y,circle2.x,circle2.y);
  if (d < circle1.size/2 + circle2.size/2){
    // LOVE ENDING
    state = `seeding`;
  }
}
// display circles
function display(){
  push();
  noStroke();
  fill(148,87,46);
  ellipse(circle1.x, circle1.y, circle1.size);
  ellipse(circle2.x, circle2.y, circle2.size);
  pop();
}
// other functions //
// changes background color
function changeBackgroundColor(addR,addG,addB,maxR,maxG,maxB){
  bg.color.r = bg.color.r + addR;
  bg.color.r = constrain(bg.color.r,0,maxR);
  bg.color.g = bg.color.g + addG;
  bg.color.g = constrain(bg.color.g,0,maxG);
  bg.color.b = bg.color.b + addB;
  bg.color.b = constrain(bg.color.b,0,maxB);
}
// keyTyped to check if player has pressed q or Q to quit program
function keyTyped(){
  if (key === `q` || key === `Q`){
    state = `stop`;
  }
}
