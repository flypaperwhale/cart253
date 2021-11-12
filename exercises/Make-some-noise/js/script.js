/**
Sky Glow audio-visuals prototype
Frankie Latreille

This project is an aesthetic research.
I have used images and shapes to create a background,
and used states to have audio-visual effects

*/

"use strict";

// variable declarations //
let state = `title`; // can be title, sunset, lightsUp, lightsOut
let player; // player avatar, class Player
//(Player (pedestrian) code sourced https://github.com/pippinbarr/cc/tree/main/1/activities/inheritance-activity)
let lampX = 300; // lamp x value
let lampY = 400; // lamp y value
let songSwitch = 0; // ticker switch to play sounds at certain time frames (a Counter?)
let dayTimer = 500; // Counter used to map skyAlpha. 500 = day, 0 = night
let skyAlpha = 255; // the blue sky's alpha value is manipulated by mapping it to dayTimer
let flickerBulb; // switch true/false to activate lamp bulb flicker animation
let lightIsOn = false; // switch true/false that draws light a.-v. FX when true
let playerDistLamp; // value of distance between player and the lamp
let buzzVolume; // lamp buzz sound volume, to be mapped on playerDistLamp values
let synth; // used for p5.sound melody when npc is interacted with
let npcSoundSwitch; // switch true/false used to play npc synth sound only once
let clickCounter = 0; // counter used to verify if player has interacted with npc
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
function preload() {
  // images
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
  createCanvas(600, 800); // hard numbers?//
  userStartAudio();
  cueLightFlicks(); // sets up time cues for light visual effect to the flicker sound
  createPlayer(230,495); // (x,y) starting positions declared and new Player is created
  setNPCSynth(); // set the npc Sound switch on and create a new synthesizer
}

// Setup program functions //
function cueLightFlicks() {
  lightFlickSound.addCue(0.1, flickBulbOn);
  lightFlickSound.addCue(0.2, flickBulbOff);
  lightFlickSound.addCue(0.3, flickBulbOn);
  lightFlickSound.addCue(0.4, flickBulbOff);
  lightFlickSound.addCue(0.75, flickBulbOn);
  lightFlickSound.addCue(0.8, flickBulbOff);
}
// Create player
function createPlayer(x,y) {
  // create new player class
  player = new Player(x, y);
}
// Create Synthesizer (for npc sound)
function setNPCSynth() {
  npcSoundSwitch = true; // when this switch is true, when npc is interacted with
  // npc makes a sound. when false, no more sound/interaction.
  synth = new p5.PolySynth();
}

/**
Draw the program (player, npc, background, audio-visual effects)
*/
function draw() {
  handlePausePlayerState(); // Handle pause player state
  // draw the background (sky, lights, ground)
  displayStars(); // displays starry nightsky image background
  flickBulb(); // flicks bulb when cued during lightFlickSound in intro
  displayLightsOn(); // if lightIsOn is true, displays yellow light ellipses
  displayGreenGrass(); // display Green Grass
  displayCircleAndPath(); // display gray circle and path
  // simulation
  sunsetState(); // (2) operates the sunset state (introduction animation)
  displayNPC(); // displays npc (in hard numbered x,y!!) underneath player
  displayLampFoot(); // displayed before the player for correct layer effect
  displayPlayer(); // displays player and also constrains them to move only on the ground
  displayLamppost(); // displays lamppost in front of player
  titleState(); // (1) called in this position to hide the other visuals during titleState
  lightsUpState(); // (3) simulation state when light is on. player can play.

  if (state === `lightsOut`) {
    playBGMusic();
    lightBuzzNoise.stop();
    songSwitch++;
    songSwitch = constrain(songSwitch, 0, 410);
    if (songSwitch === 2) {
      push();
      bulbBurstSound.setVolume(1.5);
      bulbBurstSound.play();
      pop();
    }
    lightIsOn = false;
  }

  /*?*/ let d = dist(player.x, player.y, 340, 465); // distance between player and npc
  // hard numbered!! because?? //
  if (d < 20) {
    // if the player touches the space where the npc is at all...
    turnPlayerNPCCollisionTrue(); // playerCollided is true
  } else {
    // if the player is not touching the space where the npc is...
    turnPlayerNPCCollisionFalse(); // playerCollided is false
  }
}

function pausePlayer() {
  // turns player velocities to 0
  player.vx = 0;
  player.vy = 0;
}

function calculatePlayerLampDist() {
  // store the distance between the player avatar and the lamp
  playerDistLamp = dist(player.x, player.y, lampX, lampY);
}

function handlePausePlayerState(){
  if (player.isPaused === true) {
    // if player is paused...
    pausePlayer(); // set player x,y velocities to 0
    // and ignore handleInput + move
  } else if (player.isPaused === false) {
    // if player is not paused...
    player.handleInput(); // handle player input
    player.move(); // and move player avatar
  }
}

function displayStars() {
  // displays background image
  // displays artist image of a starry sky with the moon
  push();
  imageMode(CENTER);
  /*?*/ image(starsBackground, width / 2, height / 2, 600, 800); // random numbers?? ** //
  pop();
}

function flickBulb(){
  if (flickerBulb) { // happens when cued during the lightFlickSound in intro animation
    // if flickerBulb is true show lamp glow
    displayLampGlow();
  }
}

function displayLightsOn(){
  if (lightIsOn === true) {
    // if the lamp is turned on
    displaySkyGlow(); // large yellow ellipse behind lamp covering starry bg
    displayLampGlow(); // small yellow ellipse around lamp head
    lightBuzzing(); // light buzzing sound FX grows weaker the further away player is from lamp
  }
}

function displaySkyGlow() {
  // displays circle of light far over the nightsky
  push();
  noStroke();
  fill(225, 225, 100, 200); // light yellow and slightly transparent
  ellipseMode(CENTER);
  /*?*/ ellipse(width / 2, height / 2 - 70, 605, 605); /*?*/
  pop();
}

function displayLampGlow() {
  // displays circle of light around lamphead
  push();
  noStroke();
  fill(200, 200, 0, 200); // light yellow and slightly transparent
  ellipseMode(CENTER);
  /*?*/ ellipse(width / 2, height / 2 - 70, 100, 100); // ?? real numbers hmmm ** //
  pop();
}

function displayGreenGrass() {
  // draws a green rectangle as land where player can walk around
  push();
  noStroke();
  fill(30, 75, 40); // middle green
  rectMode(CENTER);
  rect(width / 2, height, 600, 800); // displayed at bottom center
  pop();
}

function displayCircleAndPath() {
  // draws a gray path leading to the circle
  // in the middle of which stands the lamppost
  push();
  noStroke();
  fill(45, 45, 45); // dark grey
  ellipseMode(CENTER);
  ellipse(width / 2, height / 2 + 75, 250, 150); // a circle at mid center
  rectMode(CENTER);
  rect(width / 2, height / 2 + 200, 50, 300); // a narrow path down the center
  pop();
}

function sunsetState(){ // introduction animation, blue sky becomes dark and starry...
  if (state === `sunset`) { // if the state equals "sunset"
    songSwitch++; // the songSwitch is increased
    songSwitch = constrain(songSwitch, 0, 2); // the songSwitch is constrained between 0-2
    playSunsetSong(); // the sunset theme is played
    skyAlpha = map(dayTimer, 310, 0, 255, 0); // map skyAlpha (255,0) goes down as dayTimer (310,0) goes down
    dayTimer--; // dayTimer goes down
    /*?*/dayTimer = constrain(dayTimer, 0, 310); // constrain dayTimer (why?)
    displaySky(); // the blue sky rectangle covers the starry bg image
    if (dayTimer === 0) { // once the dayTimer reaches 0...
      constellationWinkSound.play(); // a chime sound to signify the twinkling stars
      dayTimer = 1; // dayTimer is reset to 1
      songSwitch = 0; // songSwitch is reset to 0
      state = `lightsUp`; // ... and then, no time to admire the stars, the lights go on!
    }
  }
}

function displayNPC(){
  // npc
  push();
  fill(20, 5, 15); // blackish
  ellipseMode(CENTER);
  /*?*/ellipse(340, 465, 20); // hard numbers!!
  pop();
}

function displayLampFoot(){ // player moves in front of lamp foot
  push();
  imageMode(CENTER);
  image(streetlampFoot, lampX, lampY + 60, 25, 25);
  pop();
}

function displayPlayer(){
  player.constrain();
  player.display();
}

function displayLamppost(){
  push();
  imageMode(CENTER);
  /*?*/image(streetlampImage, lampX, lampY - 20, 25, 140); // hard numbers!!
  pop();
}

function titleState(){ // blank initial state
  if (state === `title`) { // if state is "title"
    player.paused(); // player is paused
    background(255); // background is white
    push();
    textAlign(CENTER);
    text(`Press Space`, width / 2, height / 2); // text tell player to press space to start simulation
    pop();
  }
}

function lightsUpState(){ // animation when the light turns on, then simulation begins
  // and player can play
  if (state === `lightsUp`) { // if state is "lightsUp"
    calculatePlayerLampDist(); // calculate the distance between player and lamp every frame
    songSwitch++; // add 1 to songSwitch
    songSwitch = constrain(songSwitch, 0, 410); // constrain songSwitch to 0-410
    if (songSwitch === 200) { // when songSwitch reaches 200
      lightFlickSound.play(); // play the lightFlickSound (which has visual FX cues)
    }
    if (songSwitch === 270) { // when songSwitch reaches 270
      turnLightOn(); // the light is turned on
    }
    if (songSwitch === 410) { // when songSwitch reaches 410
      playBGMusic(); // the backgroung music starts playing
      player.isPaused = false; // and the player can start moving the avatar
    }
  }
}

function lightBuzzing(){
  if (lightIsOn === true) {
    push();
    lightBuzzNoise.playMode(`untilDone`);
    buzzVolume = map(playerDistLamp, 0, height - lampX, 0.1, 0);
    lightBuzzNoise.setVolume(buzzVolume);
    let panning = map(player.x, 0, width, 0.6, -0.6); //pan code from p5 reference
    lightBuzzNoise.pan(panning);
    lightBuzzNoise.rate(1.2);
    lightBuzzNoise.play();
    pop();
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
      if (player.playerCollided === true && npcSoundSwitch === true) {
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

function turnPlayerNPCCollisionTrue() {
  // turns playerCollided switch true
  player.playerCollided = true; // the playerCollided switch inside the player class is turned on
}

function turnPlayerNPCCollisionFalse() {
  // turns playerCollided switch false
  player.playerCollided = false; // the playerCollided switch is turned off
}
