/**
Clowning Around
Frankie Latreille

In this simulation, the user is a white ball that must dodge the clowns and
displace the pink ball from the clowns.
If the user is touched by the clowns, they transform into a clown and must
not touch the ball.
If the ball is touched by the floating clowns or the user as a clown, a bad
surprise awaits the user.
*/

"use strict";

// creating js objects //

// theBall, to be displaced out of the way of the clowns by the user
let theBall = {
  x:700,
  y:300,
  size:75,
  color: {
    r:251,
    g:145,
    b:255,
  }
};
// floating clown1
let clownAsCovid1 = {
  x:0,
  y:25,
  size:30,
  speed:1,
  vx:0.01,
  vy:0,
  image: undefined,
};
// floating clown2
let clownAsCovid2 = {
  x:0,
  y:75,
  size:30,
  speed:1,
  vx:0,
  vy:0,
  image: undefined,
};
// floating clown3
let clownAsCovid3 = {
  x:0,
  y:150,
  size:30,
  speed:1,
  vx:0,
  vy:0,
  image: undefined,
};
// floating clown4
let clownAsCovid4 = {
  x:0,
  y:250,
  size:30,
  speed:1,
  vx:0,
  vy:0,
  image: undefined,
};
// floating clown5
let clownAsCovid5 = {
  x:0,
  y:300,
  size:30,
  speed:1,
  vx:0,
  vy:0,
  image: undefined,
};
// the user is a small white ball
let user = {
  x:250,
  y:450,
  size: 35,
  color: 255,
  image: undefined,
};

let pinkClownUser = {
  x:250,
  y:450,
  size: 35,
  image: undefined,
  switch: 'off',
  counter:0,
}

let sickClownBall = {
  x: 0,
  y: 0,
  size: 80,
  image: undefined,
  switch: 'off',
}

let clown = undefined;

let pinkClown = undefined;

let sickClown = undefined;

/**
Preloading the images of different colored clowns
*/
function preload() {
// loading clown.png and pinkclown.png into the program
  clown = loadImage('assets/images/clown.png');
  pinkClown = loadImage('assets/images/pinkclown.png');
  sickClown = loadImage('assets/images/sickclown.png');
}

/**
Setting up the clowns
*/
function setup() {
  createCanvas(900,600);

  // intialize clown1 position and velocity
  clownAsCovid1.y = random(0,height);
  clownAsCovid1.vx = clownAsCovid1.vx + clownAsCovid1.speed;
  // intialize clown2 position and velocity
  clownAsCovid2.y = random(0,height);
  clownAsCovid2.vx = clownAsCovid2.speed;
  // intialize clown3 position and velocity
  clownAsCovid3.y = random(0,height);
  clownAsCovid3.vx = clownAsCovid3.speed;
  // intialize clown4 position and velocity
  clownAsCovid4.y = random(0,height);
  clownAsCovid4.vx = clownAsCovid4.speed;
  // intialize clown5 position and velocity
  clownAsCovid5.y = random(0,height);
  clownAsCovid5.vx = clownAsCovid5.speed;

  // remove the cursor
  noCursor();
}

/**
Here the program displays the clowns, the ball, and the user's cursor
*/
function draw() {

  // draw the background //
  background(128,212,255); // cotton candy blue

  // user movement (little white ball cursor)//
  user.x = mouseX;
  user.y = mouseY;

  // the Ball movement //
  let distanceUserxBall = dist(user.x, user.y, theBall.x, theBall.y);
  if (distanceUserxBall <= (theBall.size - user.size/2)) {
    function mouseDragged(){ // #### I must be making a MISTAKE here #### (map?)//
      theBall.x = mouseX;
      theBall.y = mouseY;
    }
  }

  // Clowns movement //
  // clown 1
  clownAsCovid1.x = clownAsCovid1.x + clownAsCovid1.vx;
  clownAsCovid1.y = clownAsCovid1.y + clownAsCovid1.vy;
  // clown 2
  clownAsCovid2.x = clownAsCovid2.x + clownAsCovid2.vx;
  clownAsCovid2.y = clownAsCovid2.y + clownAsCovid2.vy;
  // clown 3
  clownAsCovid3.x = clownAsCovid3.x + clownAsCovid3.vx;
  clownAsCovid3.y = clownAsCovid3.y + clownAsCovid3.vy;
  // clown 4
  clownAsCovid4.x = clownAsCovid4.x + clownAsCovid4.vx;
  clownAsCovid4.y = clownAsCovid4.y + clownAsCovid4.vy;
  // clown 5
  clownAsCovid5.x = clownAsCovid5.x + clownAsCovid5.vx;
  clownAsCovid5.y = clownAsCovid5.y + clownAsCovid5.vy;

  // clowns reapear at the left side when arriving at the right side
  if (clownAsCovid1.x > width){
    clownAsCovid1.x = 0;
    clownAsCovid1.y = random(0,height);
  }
  if (clownAsCovid2.x > width){
    clownAsCovid2.x = 0;
    clownAsCovid2.y = random(0,height);
  }
  if (clownAsCovid3.x > width){
    clownAsCovid3.x = 0;
    clownAsCovid3.y = random(0,height);
  }
  if (clownAsCovid4.x > width){
    clownAsCovid4.x = 0;
    clownAsCovid4.y = random(0,height);
  }
  if (clownAsCovid5.x > width){
    clownAsCovid5.x = 0;
    clownAsCovid5.y = random(0,height);
  }

  // check for clowns catching user //
  // if the user is caught they transform into a pink clown
  // clown1
  let distanceClown1xUser = dist(user.x, user.y, clownAsCovid1.x, clownAsCovid1.y);
  if(distanceClown1xUser < clownAsCovid1.size/2 + user.size/2 + 1.5){
    pinkClownUser.switch = 'on';
  }
  // clown2
  let distanceClown2xUser = dist(user.x, user.y, clownAsCovid2.x, clownAsCovid2.y);
  if(distanceClown2xUser < clownAsCovid2.size/2 + user.size/2 + 1.5){
    pinkClownUser.switch = 'on';
  }
  // clown3
  let distanceClown3xUser = dist(user.x, user.y, clownAsCovid3.x, clownAsCovid3.y);
  if(distanceClown3xUser < clownAsCovid3.size/2 + user.size/2 + 1.5){
    pinkClownUser.switch = 'on';
  }
  // clown4
  let distanceClown4xUser = dist(user.x, user.y, clownAsCovid4.x, clownAsCovid4.y);
  if(distanceClown4xUser < clownAsCovid4.size/2 + user.size/2 + 1.5){
    pinkClownUser.switch = 'on';
  }
  // clown5
  let distanceClown5xUser = dist(user.x, user.y, clownAsCovid5.x, clownAsCovid5.y);
  if(distanceClown5xUser < clownAsCovid5.size/2 + user.size/2 + 1.5){
    pinkClownUser.switch = 'on';
  }

  // check for clowns catching the Ball
  // if the Ball is caught it transforms into a giant sickly clown
  // clown1
  let distanceClown1xBall = dist(theBall.x, theBall.y, clownAsCovid1.x, clownAsCovid1.y);
  if(distanceClown1xBall < clownAsCovid1.size/2 + theBall.size/2 + 1.5){
    sickClownBall.switch = 'on';
  }
  // clown2
  let distanceClown2xBall = dist(theBall.x, theBall.y, clownAsCovid2.x, clownAsCovid2.y);
  if(distanceClown2xBall < clownAsCovid2.size/2 + theBall.size/2 + 1.5){
    sickClownBall.switch = 'on';
  }
  // clown3
  let distanceClown3xBall = dist(theBall.x, theBall.y, clownAsCovid3.x, clownAsCovid3.y);
  if(distanceClown3xBall < clownAsCovid3.size/2 + theBall.size/2 + 1.5){
    sickClownBall.switch = 'on';
  }
  // clown4
  let distanceClown4xBall = dist(theBall.x, theBall.y, clownAsCovid4.x, clownAsCovid4.y);
  if(distanceClown4xBall < clownAsCovid4.size/2 + theBall.size/2 + 1.5){
    sickClownBall.switch = 'on';
  }
  // clown5
  let distanceClown5xBall = dist(theBall.x, theBall.y, clownAsCovid5.x, clownAsCovid5.y);
  if(distanceClown5xBall < clownAsCovid5.size/2 + user.size/2 + 1.5){
    sickClownBall.switch = 'on';
  }

  // check for pinkClownUser catching the ball
  let distancePinkxBall = dist(theBall.x, theBall.y, pinkClownUser.x, pinkClownUser.y)
  if (distancePinkxBall < pinkClownUser.size/2 + theBall.size/2) {
    sickClownBall.switch = 'on';
  }

  // display the Ball //
  theBall.color.r = 251;
  theBall.color.g = 145;
  theBall.color.b = 255;
  fill(theBall.color.r,theBall.color.g,theBall.color.b);
  ellipseMode(CENTER);
  ellipse(theBall.x,theBall.y,theBall.size);

  // display clownAsCovid1 //
  clownAsCovid1.image = clown;
  image(clownAsCovid1.image, clownAsCovid1.x, clownAsCovid1.y, clownAsCovid1.size, clownAsCovid1.size);

  // display clownAsCovid2 //
  clownAsCovid2.image = clown;
  image(clownAsCovid2.image, clownAsCovid2.x, clownAsCovid2.y, clownAsCovid2.size, clownAsCovid2.size);

  // display clownAsCovid3 //
  clownAsCovid3.image = clown;
  image(clownAsCovid3.image, clownAsCovid3.x, clownAsCovid3.y, clownAsCovid3.size, clownAsCovid3.size);

  // display clownAsCovid4 //
  clownAsCovid4.image = clown;
  image(clownAsCovid4.image, clownAsCovid4.x, clownAsCovid4.y, clownAsCovid4.size, clownAsCovid4.size);

  // display clownAsCovid5 //
  clownAsCovid5.image = clown;
  image(clownAsCovid5.image, clownAsCovid5.x, clownAsCovid5.y, clownAsCovid5.size, clownAsCovid5.size);

  // display user //
  fill(user.color);
  noStroke();
  ellipse(user.x,user.y,user.size);

  // display pinkClown //
  pinkClownUser.image = pinkClown;
  if (pinkClownUser.switch === 'on'){
    push();
    imageMode(CENTER);
    image(pinkClownUser.image,user.x,user.y,pinkClownUser.size,pinkClownUser.size);
    pop();
  }

  // counter to display user as the pink clown
  if (pinkClownUser.switch === 'on') {
    constrain(pinkClownUser.counter,0,299);
    pinkClownUser.counter++
    if (pinkClownUser.counter >= 300){
      pinkClownUser = 'off';
    }
  }

  // display sickClown //
  sickClownBall.image = sickClown;
  if (sickClownBall.switch === 'on'){

    image(sickClown.image, theBall.x, theBall.y, sickClownBall.size, sickClownBall.size);
  }

  if(sickClownBall.switch === 'on'){
    noLoop();
  }

}
