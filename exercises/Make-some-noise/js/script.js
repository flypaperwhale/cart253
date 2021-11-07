/**
Sky Glow audio-visuals
Frankie Latreille

This project is more an aesthetic research.
I will use images and shapes to create a background,
and I will use states to have different audio-visual effects
there will also be noisy buttons to navigate the states
*/

"use strict";

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

  bgmusic1 = loadSound("assets/sounds/skyglowbgmusic.mp3")
  bgmusic2 = loadSound("assets/sounds/testbgmusic.mp3");
  bgmusic3 = loadSound("assets/sounds/testbgmusic2.mp3");
}

/**
Description of setup
*/
function setup() {
  createCanvas(600, 800);
  userStartAudio();

  lightFlickSound.addCue(0.1,flickBulbOn);
  lightFlickSound.addCue(0.2,flickBulbOff);
  lightFlickSound.addCue(0.3,flickBulbOn);
  lightFlickSound.addCue(0.4,flickBulbOff);
  lightFlickSound.addCue(0.75,flickBulbOn);
  lightFlickSound.addCue(0.8,flickBulbOff);

  let x = 230;
  let y = 495;
  pedestrian = new Pedestrian(x,y);
}

/**
Description of draw()
*/
function draw() {
  console.log(
    `dayTimer = ${dayTimer} and skyAlpha ${skyAlpha} and State ${state}`
  );

  playerDistance = dist(pedestrian.x,pedestrian.y, lampX,lampY);

  push();
  imageMode(CENTER);
  image(starsBackground, width / 2, height / 2, 600, 800);
  pop();

  if (lightIsOn === true){
    push();
    noStroke();
    fill(225,225,100, 200);
    ellipseMode(CENTER);
    ellipse(width/2, height/2-70, 605,605);
    pop();

    push();
    noStroke();
    fill(200,200,0, 200);
    ellipseMode(CENTER);
    ellipse(width/2, height/2-70, 100,100);
    pop();
  }

  //flicker bulb
    if (flickerBulb){
      push();
      noStroke();
      fill(200,200,0, 200);
      ellipseMode(CENTER);
      ellipse(width/2, height/2-70, 100,100);
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
  fill(45,45,45);
  ellipseMode(CENTER);
  ellipse(width/2, height/2+75,250,150);
  rectMode(CENTER);
  rect(width/2, height/2+200, 50, 300);
  pop();

  if (state === `sunset`) {

    songSwitch++;
    songSwitch = constrain(songSwitch,0,2);
    playSunsetSong();
    skyAlpha = map(dayTimer, 500, 0, 255, 0); //map skyAlpha (255,0) goes down as dayTimer (600,0) goes down
    dayTimer--;
    dayTimer = constrain(dayTimer, 0, 500);
    displaySky();
    if (dayTimer === 0) {
      //play coin sword sound
      constellationWinkSound.play();
      dayTimer=1;
      songSwitch=0;
      state = `lightsUp`;
    }
  }

  push();
  imageMode(CENTER);
  image(streetlampFoot,lampX,lampY+60,25,25);
  pop();

  pedestrian.constrain();
  pedestrian.handleInput();
  pedestrian.move();
  pedestrian.display();

  push();
  imageMode(CENTER);
  image(streetlampImage,lampX,lampY-20,25,140);
  pop();

  push();
  fill(20,5,15);
  ellipseMode(CENTER);
  ellipse(340,465,20)
  pop();

  if (state === `title`) {
    background(255);
    text(`CLICK`, width / 2, height / 2);
  }

  if (state === `lightsUp`) {
    songSwitch++;
    songSwitch = constrain(songSwitch,0,420);
    if (songSwitch===200){
      lightFlickSound.play();
    }
    if (songSwitch===270){
      turnLightOn();
      // I would like to have the light buzz weaker, and grow louder when Player is nearer
    }
    if (songSwitch===420){
      playBGMusic();
    }
  }

  if (lightIsOn===true){
    push();
    lightBuzzNoise.playMode(`untilDone`);
    buzzVolume = map(playerDistance,0,350,0.2,0);
    lightBuzzNoise.setVolume(buzzVolume);
    lightBuzzNoise.rate(1.2);
    lightBuzzNoise.play();
    pop();
  }

  if (state === `lightsOut`){
    lightBuzzNoise.stop();
    songSwitch++;
    songSwitch = constrain(songSwitch,0,3);
    if (songSwitch===2){
      push();
      bulbBurstSound.setVolume(1.5);
      bulbBurstSound.play();
      pop();
    }
    lightIsOn=false;
  }

}

function playSunsetSong(){
  if (songSwitch===1){
    sunsetStarsIntro.play(0,1,0.2);
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


function turnLightOn(){
  lightIsOn = true;
}

function playBGMusic(){
  push();
  bgmusic2.playMode(`untilDone`);
  bgmusic2.setVolume(.88);
  bgmusic2.rate(.85);
  bgmusic2.play();
  pop();
}

function mouseClicked() {
  if (state === `title`) {

    state = `sunset`;
  }
  if (state === `lightsUp`){
    songSwitch=0;
    state = `lightsOut`;
  }
}
