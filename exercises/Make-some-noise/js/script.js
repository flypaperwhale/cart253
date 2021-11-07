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
let lightFlickSound;
let lightBuzzNoise;

let state = `title`; //can be title, simulation

let dayTimer = 600;
let skyAlpha = 255;

let songSwitch = 0;

let lightIsOn = false;

/**
Description of preload
*/
function preload() {
  starsBackground = loadImage("assets/images/starnight.jpg");
  streetlampImage = loadImage("assets/images/lamp.png");
  sunsetStarsIntro = loadSound(`assets/sounds/intro-constellation.mp3`);
  backgroundMusic = loadSound(`assets/sounds/skyglowbgmusic.mp3`);
  constellationWinkSound = loadSound(`assets/sounds/constellationWink.wav`);
  lightFlickSound = loadSound("assets/sounds/lightFlick.wav");
  lightBuzzNoise = loadSound("assets/sounds/lightBuzz.wav");
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

  if (lightIsOn === true){
    push();
    noStroke();
    fill(225,225,100, 200);
    ellipseMode(CENTER);
    ellipse(width/2, height/2-70, 400,400);
    pop();
    push();
    noStroke();
    fill(200,200,0, 200);
    ellipseMode(CENTER);
    ellipse(width/2, height/2-70, 100,100);
    pop();
  }

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
      state = `lightsUp`;
    }
  }

  push();
  imageMode(CENTER);
  image(streetlampImage,width/2,height/2,25,140);
  pop();

  if (state === `lightsUp`) {
    songSwitch++;
    songSwitch = constrain(songSwitch,0,300);
    if (songSwitch===1){
        constellationWinkSound.play();
    }
    if (songSwitch===200){
      lightFlickSound.play();
    }
    if (songSwitch===270){
      turnLightOn();
      lightBuzzNoise.play();
      // I would like to have the light buzz weaker, and grow louder when Player is nearer
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

function turnLightOn(){
  lightIsOn = true;
}

function mouseClicked() {
  if (state === `title`) {
    state = `sunset`;
  }
}
