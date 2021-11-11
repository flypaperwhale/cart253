/**
Sky Glow audio-visuals
Frankie Latreille

This project is more an aesthetic research.
I will use images and shapes to create a background,
and I will use states to have different audio-visual effects

*/

"use strict";
let synth;
let pedestrian;

let starsBackground;
let streetlampImage;
let streetlampFoot;

let sunsetStarsIntro;
let backgroundMusic;
let constellationWinkSound;
let lightFlickSound;
let lightBuzzNoise;
let bulbBurstSound;

let flickerBulb;

let state = `title`; //can be title, simulation

let dayTimer = 500;
let skyAlpha = 255;

let songSwitch = 0;

let lightIsOn = false;

let playerDistance;
let lampX = 300;
let lampY = 400;
let buzzVolume;

let bgmusic1;
let bgmusic2;
let bgmusic3;

let canBurst = false;
let clickCounter = 0;
let npcSwitch;

/**
Description of preload
*/
function preload() {
  starsBackground = loadImage("assets/images/starnight.jpg");
  streetlampImage = loadImage("assets/images/lamp.png");
  streetlampFoot = loadImage("assets/images/lampFoot.png");
  sunsetStarsIntro = loadSound(`assets/sounds/intro-constellation.mp3`);
  backgroundMusic = loadSound(`assets/sounds/skyglowbgmusic.mp3`);
  constellationWinkSound = loadSound(`assets/sounds/constellationWink.wav`);
  lightFlickSound = loadSound("assets/sounds/lightFlick.wav");
  lightBuzzNoise = loadSound("assets/sounds/lightBuzz.wav");
  bulbBurstSound = loadSound("assets/sounds/bulbBurst.wav");

  bgmusic1 = loadSound("assets/sounds/skyglowbgmusic.mp3");
  bgmusic2 = loadSound("assets/sounds/testbgmusic.mp3");
  bgmusic3 = loadSound("assets/sounds/testbgmusic2.mp3");
}

/**
Description of setup
*/
function setup() {
  createCanvas(600, 800);
  userStartAudio();

  lightFlickSound.addCue(0.1, flickBulbOn);
  lightFlickSound.addCue(0.2, flickBulbOff);
  lightFlickSound.addCue(0.3, flickBulbOn);
  lightFlickSound.addCue(0.4, flickBulbOff);
  lightFlickSound.addCue(0.75, flickBulbOn);
  lightFlickSound.addCue(0.8, flickBulbOff);

  let x = 230;
  let y = 495;
  pedestrian = new Pedestrian(x, y);

  npcSwitch = 1;
  synth = new p5.PolySynth();
}

/**
Description of draw()
*/
function draw() {
  console.log(
    `dayTimer = ${dayTimer} and skyAlpha ${skyAlpha} and State ${state}`
  );
  if (pedestrian.isPaused === true) {
    pedestrian.vx = 0;
    pedestrian.vy = 0;
  } else if (pedestrian.isPaused === false) {
    pedestrian.handleInput();
    pedestrian.move();
  }

  playerDistance = dist(pedestrian.x, pedestrian.y, lampX, lampY);

  push();
  imageMode(CENTER);
  image(starsBackground, width / 2, height / 2, 600, 800);
  pop();

  if (lightIsOn === true) {
    push();
    noStroke();
    fill(225, 225, 100, 200);
    ellipseMode(CENTER);
    ellipse(width / 2, height / 2 - 70, 605, 605);
    pop();

    push();
    noStroke();
    fill(200, 200, 0, 200);
    ellipseMode(CENTER);
    ellipse(width / 2, height / 2 - 70, 100, 100);
    pop();
  }

  //flicker bulb
  if (flickerBulb) {
    push();
    noStroke();
    fill(200, 200, 0, 200);
    ellipseMode(CENTER);
    ellipse(width / 2, height / 2 - 70, 100, 100);
    pop();
  }

  // Green Grass and gray path
  push();
  noStroke();
  fill(30, 75, 40);
  rectMode(CENTER);
  rect(width / 2, height, 600, 800);
  pop();
  push();
  noStroke();
  fill(45, 45, 45);
  ellipseMode(CENTER);
  ellipse(width / 2, height / 2 + 75, 250, 150);
  rectMode(CENTER);
  rect(width / 2, height / 2 + 200, 50, 300);
  pop();

  if (state === `sunset`) {
    songSwitch++;
    songSwitch = constrain(songSwitch, 0, 2);
    playSunsetSong();
    skyAlpha = map(dayTimer, 310, 0, 255, 0); //map skyAlpha (255,0) goes down as dayTimer (600,0) goes down
    dayTimer--;
    dayTimer = constrain(dayTimer, 0, 310);
    displaySky();
    if (dayTimer === 0) {
      //play coin sword sound
      constellationWinkSound.play();
      dayTimer = 1;
      songSwitch = 0;
      state = `lightsUp`;
    }
  }

  push();
  imageMode(CENTER);
  image(streetlampFoot, lampX, lampY + 60, 25, 25);
  pop();

  pedestrian.constrain();
  pedestrian.display();

  push();
  imageMode(CENTER);
  image(streetlampImage, lampX, lampY - 20, 25, 140);
  pop();

  // npc
  push();
  fill(20, 5, 15);
  ellipseMode(CENTER);
  ellipse(340, 465, 20);
  pop();

  if (state === `title`) {
    pedestrian.paused();
    background(255);
    push();
    textAlign(CENTER);
    text(`Press Space`, width / 2, height / 2);
    pop();
  }

  if (state === `lightsUp`) {
    songSwitch++;
    songSwitch = constrain(songSwitch, 0, 420);
    if (songSwitch === 200) {
      lightFlickSound.play();
    }
    if (songSwitch === 270) {
      turnLightOn();
      // I would like to have the light buzz weaker, and grow louder when Player is nearer
    }
    if (songSwitch === 410) {
      playBGMusic();
      pedestrian.isPaused = false;
    }
  }

  if (lightIsOn === true) {
    push();
    lightBuzzNoise.playMode(`untilDone`);
    buzzVolume = map(playerDistance, 0, height - lampX, 0.2, 0);
    lightBuzzNoise.setVolume(buzzVolume);
    let panning = map(pedestrian.x, 0, width, 0.9, -0.9); //pan code from p5 reference
    lightBuzzNoise.pan(panning);
    lightBuzzNoise.rate(1.2);
    lightBuzzNoise.play();
    pop();
  }

  if (state === `lightsOut`) {
    playBGMusic();
    lightBuzzNoise.stop();
    songSwitch++;
    songSwitch = constrain(songSwitch, 0, 420);
    if (songSwitch === 2) {
      push();
      bulbBurstSound.setVolume(1.5);
      bulbBurstSound.play();
      pop();
    }
    lightIsOn = false;
  }

  let d = dist(pedestrian.x, pedestrian.y, 340, 465);
  if (d < 20 / 2) {
    pedestrian.playerCollided = true;
    console.log(`it's true, you've collided NPC!`);
  } else {
    pedestrian.playerCollided = false;
  }
}

function playSunsetSong() {
  if (songSwitch === 1) {
    sunsetStarsIntro.play(0, 1, 0.2);
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

function flickBulbOn() {
  flickerBulb = true;
}

function flickBulbOff() {
  flickerBulb = false;
}

function turnLightOn() {
  lightIsOn = true;
}

function playBGMusic() {
  push();
  bgmusic2.playMode(`untilDone`);
  bgmusic2.setVolume(0.88);
  bgmusic2.rate(0.77);
  bgmusic2.play();
  pop();
}

function keyPressed() {
  if (keyCode === 32) {
    if (state === `title`) {
      state = `sunset`;
    }

    if (state === `lightsUp`) {
      if (pedestrian.playerCollided === true && npcSwitch === 1) {
        synth.play(`C5`, 1, 0, 0.2);
        synth.play(`D5`, 1, 0.25, 0.2);
        synth.play(`E5`, 1, 0.5, 0.2);
        canBurst = true;
        npcSwitch = 0;
      }
      if (canBurst === true) {
        clickCounter++;
        if (clickCounter === 2) {
          songSwitch = 0;
          state = `lightsOut`;
        }
      }
    }
  }
}
