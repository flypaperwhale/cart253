/**
Sky Glow audio-visuals
Frankie Latreille

This project is more an aesthetic research.
I will use images and shapes to create a background,
and I will use states to have different audio-visual effects
there will also be noisy buttons to navigate the states
*/

"use strict";

let starsBackground;

let sunsetStarsIntro;
let backgroundMusic;



/**
Description of preload
*/
function preload() {
  starsBackground = loadImage('assets/images/starnight.jpg');
  sunsetStarsIntro = loadSound(`assets/sounds/intro-constellation.mp3`);
  backgroundMusic = loadSound(`assets/sounds/skyglowbgmusic.mp3`);

}


/**
Description of setup
*/
function setup() {
  createCanvas(600,800);

  push();
  imageMode(CENTER);
  image(starsBackground,width/2, height/2,600,800);
  pop();

  push();
  noStroke();
  fill(30,75,40);
  rectMode(CENTER);
  rect(width/2,height,600,800);
  pop();
}


/**
Description of draw()
*/
function draw() {



}
