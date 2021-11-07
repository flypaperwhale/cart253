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
let streetlampImage;

let sunsetStarsIntro;
let backgroundMusic;
let constellationWinkSound;

let state = `title`; //can be title, simulation

let dayTimer = 600;
let skyAlpha = 255;

let songSwitch = 0;

/**
Description of preload
*/
function preload() {
  starsBackground = loadImage("assets/images/starnight.jpg");
  streetlampImage = loadImage("assets/images/lamp.png");
  sunsetStarsIntro = loadSound(`assets/sounds/intro-constellation.mp3`);
  backgroundMusic = loadSound(`assets/sounds/skyglowbgmusic.mp3`);
  constellationWinkSound = loadSound(`assets/sounds/constellationWink.wav`)
}

/**
Description of setup
*/
function setup() {
  createCanvas(600, 800);

}

/**
Description of draw()
*/
function draw() {
  console.log(
    `dayTimer = ${dayTimer} and skyAlpha ${skyAlpha} and State ${state}`
  );

  push();
  imageMode(CENTER);
  image(starsBackground, width / 2, height / 2, 600, 800);
  pop();

  push();
  noStroke();
  fill(30, 75, 40);
  rectMode(CENTER);
  rect(width / 2, height, 600, 800);
  pop();

  if (state === `title`) {
    background(255);
    text(`CLICK`, width / 2, height / 2);
  }

  if (state === `sunset`) {
    background(0,0,0,0);
    songSwitch++;
    songSwitch = constrain(songSwitch,0,2);
    playSunsetSong();
    skyAlpha = map(dayTimer, 600, 0, 255, 0); //map skyAlpha (255,0) goes down as dayTimer (600,0) goes down
    dayTimer--;
    dayTimer = constrain(dayTimer, 0, 600);
    displaySky();
    if (dayTimer === 0) {
      //play coin sword sound
      songSwitch=0
      state = `simulation`;
    }
  }

  push();
  imageMode(CENTER);
  image(streetlampImage,width/2,height/2,25,140);
  pop();

  if (state === `simulation`) {
    songSwitch++;
    songSwitch = constrain(songSwitch,0,2);
    if (songSwitch===1){
        constellationWinkSound.play();
    }
  }
}

function playSunsetSong(){
  if (songSwitch===1){
    sunsetStarsIntro.play();
  }
}
function displaySky() {
  push();
  noStroke();
  fill(100, 100, 255, skyAlpha);
  rectMode(CENTER);
  rect(width / 2, 0, 600, 800);
  pop();
}

function mouseClicked() {
  if (state === `title`) {
    state = `sunset`;
  }
}
