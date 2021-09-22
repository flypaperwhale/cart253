/**
I like to move it (experimental choreography)
Frankie Latreille

Attempts at making a psychedelic effect with superimposed circles growing and shrinking
along with an eclectic rectangle making rounds.
*/

"use strict";

// creating objects

let bg = { // the background object
  r: 0,
  g: 200,
  b: 100
};

let circleGrow = { // growing circle
  x:250,
  y:250,
  w:10,
}

let circleShrink = { // shrinking circle
  x:250,
  y:250,
  w:500,
}

let circleRail = { // circle on which square turns
  allign:`CENTER`,
  x:250,
  y:250,
  w:250,
}

let squareShip = { // a strange little square
  x:125,
  y:250,
  w:100,
  h:50,
}

let squareLink = {
  x:0,
  y:0,
  w:60,
  h:45,
}

// Setting up the canvas //

function setup() {
  createCanvas(500,500);
}

// Drawing //

function draw() {
  background(bg.r,bg.g,bg.b); // initializing the background greenish
  // these constrains will make sure the additions/subtractions to the
  // background color values will remain visually dynamic
  constrain(bg.r,-255,255);
  constrain(bg.b,-255,55);
  bg.r = bg.r + random(-5,5); // a little bit of red makes it mysterious
  bg.b = bg.b + random(-15,15); // blue waves in and fades out

// Add the growing circle //
  noStroke();
  fill(222 + random(-5,1),222 + random(-5,1),bg.g); // using randoms for fun
  ellipse(circleGrow.x,circleGrow.y,circleGrow.w); // draw the ellipse
  circleGrow.w = circleGrow.w + .75; // width increases

// Add the shrinking circle //
  fill(bg.b,100,bg.r); // fun colors
  ellipse(circleShrink.x,circleShrink.y,circleShrink.w,circleShrink.w); // draw
  // the other ellipse
  circleShrink.w = circleShrink.w - 1; // width decreases

// Shimmery rectangles //
//The rectangle(s) will be blurry accross the screen, activated by the mouse

// Shimmery rectangles 1
  noStroke();
  fill(222,222,mouseY);
  //rectMode(CENTER);
  rect(squareShip.x,squareShip.y,squareShip.w,squareShip.h);
  squareShip.x = random(mouseX,mouseY);
  // squareShip.x = mouseX + constrain(squareShip.x,125,375);
  squareShip.y = random(mouseY,mouseX);
  //squareShip.y = mouseY + constrain(squareShip.y,125,375);

// Shimmery rectangles 2
  fill(222,222,mouseY);
  rect(squareShip.x,squareShip.y,squareShip.w,squareShip.h);
  squareShip.x = random(mouseY,mouseX); // switched it up a little
  squareShip.y = random(mouseY,mouseX);

// distracting pet square //
  fill (0,0,0);
  rectMode(CENTER);
  rect(mouseX,mouseY,squareLink.w,squareLink.h);

// The circleRail //
  noFill(); // keep circle empty, it's only a rail
  stroke(4); // a dark color for the rail
  strokeWeight(5);
  ellipse(circleRail.x,circleRail.y,circleRail.w);


console.log(`r=` + bg.r, `g=`+ bg.g, `b=`+ bg.b);
}
