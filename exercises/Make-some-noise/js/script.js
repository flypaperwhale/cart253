/**
Sky Glow audio-visuals prototype
Frankie Latreille

This project is an aesthetic research.
I have used images and shapes to create a background,
and used states to have audio-visual effects

*/

"use strict";
let state = `title`; // can be title, simulation

// variable declarations
let pedestrian; // player is pedestrian
//(Player and pedestrian code sourced https://github.com/pippinbarr/cc/tree/main/1/activities/inheritance-activity)
let lampX = 300; // lamp x value
let lampY = 400; // lamp y value

let songSwitch = 0; // ticker switch to play sounds at certain time frames (+/- a Counter)

let dayTimer = 500; // Counter used to map skyAlpha. 500 = day, 0 = night
let skyAlpha = 255; // the blue sky's alpha value is manipulated by mapping it to dayTimer

let flickerBulb; // switch true/false to activate lamp bulb flicker animation
let lightIsOn = false; // switch true/false that draws light a.-v. FX when true
let playerDistLamp; // value of distance between player and the lamp
let buzzVolume; // lamp buzz sound volume, to be mapped on playerDistLamp values

let clickCounter = 0; // counter used to verify if player has interacted with npc
let synth; // used for p5.sound melody when npc is interacted with
let npcSoundSwitch; // switch true/false used to play npc synth sound only once
let canBurst = false; // when true, player can burst the lamp's bulb

// Asset names //
// images
let starsBackground; // background image name
let streetlampImage; // streetlamp
let streetlampFoot; // streetlamp foot
// sounds
let sunsetStarsIntro; // sunset introduction theme
let constellationWinkSound; // constellation wink
let lightFlickSound; // light flick
let lightBuzzNoise; // light buzz
let bulbBurstSound; // bulb burst
let bgmusic1; // background music 1
let bgmusic2; // background music 2
let bgmusic3; // background music 3

/**
Preloading images and sounds
*/
function preload() { // images
  starsBackground = loadImage("assets/images/starnight.jpg");
  streetlampImage = loadImage("assets/images/lamp.png");
  streetlampFoot = loadImage("assets/images/lampFoot.png");
  // sounds
  sunsetStarsIntro = loadSound(`assets/sounds/intro-constellation.mp3`);
  constellationWinkSound = loadSound(`assets/sounds/constellationWink.wav`);
  lightFlickSound = loadSound("assets/sounds/lightFlick.wav");
  lightBuzzNoise = loadSound("assets/sounds/lightBuzz.wav");
  bulbBurstSound = loadSound("assets/sounds/bulbBurst.wav");
  bgmusic1 = loadSound("assets/sounds/skyglowbgmusic.mp3");
  bgmusic2 = loadSound("assets/sounds/testbgmusic.mp3");
  bgmusic3 = loadSound("assets/sounds/testbgmusic2.mp3");
}

/**
Setting up visual light flickering cues to the light flicker sound,
creating the player, and setting up npc synth sound interaction
*/
function setup() {
  createCanvas(600, 800);
  userStartAudio();

  cueLightFlicks(); // sets up time cues for light visual effect to the flicker sound

  createPlayer(); // x,y starting positions declared and new Player is created

  setNPCSynth(); // set the npc Sound switch on and create a new synthesizer

}
// Setup program functions //
function cueLightFlicks(){
  lightFlickSound.addCue(0.1, flickBulbOn);
  lightFlickSound.addCue(0.2, flickBulbOff);
  lightFlickSound.addCue(0.3, flickBulbOn);
  lightFlickSound.addCue(0.4, flickBulbOff);
  lightFlickSound.addCue(0.75, flickBulbOn);
  lightFlickSound.addCue(0.8, flickBulbOff);
}

function createPlayer(){
  // player avatar's starting x,y position
    let x = 230;
    let y = 495;
  // create player avatar and display at starting x,y position
    pedestrian = new Pedestrian(x, y);
}

function setNPCSynth(){
  npcSoundSwitch = true; // when this switch is true, when npc is interacted with
  // npc makes a sound. when false, no more sound/interaction.
  synth = new p5.PolySynth();
}

/**
Draw the program (player, npc, background, audio-visual effects)
*/
function draw() {
  if (pedestrian.isPaused === true) {
    pedestrian.vx = 0;
    pedestrian.vy = 0;
  } else if (pedestrian.isPaused === false) {
    pedestrian.handleInput();
    pedestrian.move();
  }

  playerDistLamp = dist(pedestrian.x, pedestrian.y, lampX, lampY);

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
  // npc
  push();
  fill(20, 5, 15);
  ellipseMode(CENTER);
  ellipse(340, 465, 20);
  pop();

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
    buzzVolume = map(playerDistLamp, 0, height - lampX, 0.1, 0);
    lightBuzzNoise.setVolume(buzzVolume);
    let panning = map(pedestrian.x, 0, width, 0.6, -0.6); //pan code from p5 reference
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
  if (d < 20 ) {
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
      if (pedestrian.playerCollided === true && npcSoundSwitch === true) {
        synth.play(`C5`, 1, 0, 0.2);
        synth.play(`D5`, 1, 0.25, 0.2);
        synth.play(`E5`, 1, 0.5, 0.2);
        canBurst = true;
        npcSoundSwitch = false;
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
