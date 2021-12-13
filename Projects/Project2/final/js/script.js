/**
Interrupting Sky Glow
Frankie Latreille

Dolly explores the town of Sky Glow, fulfilling the needs of townsfolk
while finding ways to turn out the lights in town
so that everyone may see the constellations in the sky
*/

"use strict";

// declare item images
let hamImg;
let bigBoneImg;
let slingshotImg
let frogConstellationImg;
let frogImg;
let wrenchImg;
let arrowConstellationImg;
let injunctionImg;
let keyImg;
let eagleConstellationImg;
// declare decor images
let streetlampImg;
let streetlampFootImg;
let stairsImg;
let treeImg;
let garbageImg;
let gazeboImg;
let gazeboBaseImg;
let fountainImg;
let fountainTopImg;
let emptyImg;
let galaxyImg;
// visual simulation handling
let simulationSoundsArray = []; // array holding sounds for the game
let simulationImagesList = []; // array holding images for the games
let simulationMapsArray = []; // array holding game maps
let state = undefined; // state can be new State, substates: Title, Simulation, Ending
let mapNo = 3; // there are 3 "maps" in a triptych
let mapA; // full left
let mapB; // middle
let mapC; // full right
// sounds
let sunsetStarsIntro; // sunset introduction theme
let constellationWinkSound; // constellation wink
let lightFlickSound; // light flick
let lightBuzzNoise; // light buzz
let bulbBurstSound; // bulb burst
let bgmusic1; // background music 1
let bgmusic2; // background music 2
let bgmusic3; // background music 3
// audio and animation handling //
let animationState; // can be, sunset, lightsUp, lightsOut
let songSwitch = 0; // ticker switch to play sounds at certain time frames (a Counter?)
let skyAlpha = 255; // the blue sky's alpha value is manipulated by mapping it to dayTimer
let dayTimer = 500; // Counter used to map skyAlpha. 500 = day, 0 = night
let flickerBulb; // switch true/false to activate lamp bulb flicker animation
let npcSoundSwitch = 1; // 0 to initialize; 1 for npc trades, 2 for lamp trades
let tradeSoundCheck; // can be true or false, when true player trade noise plays

/**
Description of preload
*/
function preload() {
  // Items image files
  hamImg = loadImage("assets/images/items/ham.png");
  bigBoneImg = loadImage("assets/images/items/bigBone.png");
  slingshotImg = loadImage("assets/images/items/slingshot1.png")
  frogConstellationImg = loadImage("assets/images/items/frogConstellation.png");
  frogImg = loadImage("assets/images/items/frog2.png");
  wrenchImg = loadImage("assets/images/items/wrench.png");
  arrowConstellationImg = loadImage("assets/images/items/arrowConstellation.png");
  injunctionImg = loadImage("assets/images/items/letters.png");
  keyImg = loadImage("assets/images/items/key.png");
  eagleConstellationImg = loadImage("assets/images/items/eagleConstellation.png");
  emptyImg = loadImage("assets/images/empty.png");
// decor image files
  streetlampImg = loadImage("assets/images/lamp.png");
  streetlampFootImg = loadImage("assets/images/lampFoot.png");
  stairsImg =  loadImage("assets/images/stairs.png");
  treeImg = loadImage("assets/images/tree.png");
  garbageImg =  loadImage("assets/images/garbage.png");
  gazeboImg =  loadImage("assets/images/gazebo2.png");
  gazeboBaseImg = loadImage("assets/images/gazeboBase.png");
  fountainImg = loadImage("assets/images/fountain.png");
  fountainTopImg = loadImage("assets/images/fountainTop.png");
  galaxyImg = loadImage("assets/images/starnight2.png");
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
Description of setup
*/
function setup() {
  createCanvas(500, 1000);
// simulationImagesList Array //
  simulationImagesList.push(
    hamImg, // [0]
    bigBoneImg, // [1]
    slingshotImg, // [2]
    frogConstellationImg, // [3]
    frogImg, // [4]
    wrenchImg, // [5]
    arrowConstellationImg, // [6]
    injunctionImg, // [7]
    keyImg, // [8]
    eagleConstellationImg, // [9]
    streetlampImg, // [10]
    streetlampFootImg, // [11]
    stairsImg, // [12]
    treeImg, // [13]
    garbageImg, // [14]
    gazeboImg, // [15]
    gazeboBaseImg, // [16]
    fountainImg, // [17]
    fountainTopImg, // [18]
    emptyImg, // [19]
    galaxyImg,); // [20]
 // simulationSoundsArray //
    simulationSoundsArray.push(
      sunsetStarsIntro, // [0]
      constellationWinkSound, // [1]
      lightFlickSound, // [2]
      lightBuzzNoise, // [3]
      bulbBurstSound, // [4]
      bgmusic1); // [5]

  createMapsAndStore(); // inputs map files into the program to be stored in simulationMapsArray

  userStartAudio();
  cueLightFlicks(); // sets up time cues for light visual effect to the flicker sound
  setNPCSynth(); // set the npc Sound switch on and create a new synthesizer

  state = new TitleState(simulationImagesList, simulationMapsArray, simulationMapsArray,
  flickerBulb, npcSoundSwitch); // initial state is TitleState
  // other states are SimulationState and EndingState
}

function createMapsAndStore(){ // create maps and store in the maps array
  for (let i = 0; i < mapNo; i++){ // there are 3 total maps
    if (i === 0){
      map = new SkyGlowCityA(simulationImagesList); // Map A, full left
    }
    if (i === 1){
      map = new SkyGlowCityB(simulationImagesList); // Map B, middle
    }
    if (i === 2){
      map = new SkyGlowCityC(simulationImagesList); // Map C, full right
    }
    simulationMapsArray.push(map); // pushed into maps array
  }
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

function flickBulbOn() {
  // on cue flicks bulb on
  flickerBulb = true;
}

function flickBulbOff() {
  // on cue flicks bulb off
  flickerBulb = false;
}

// Create Synthesizer (for npc sound)
function setNPCSynth() {
  let synth = new p5.PolySynth();
}

function draw() {
  state.update();

  if (state.name === `SimulationState`){

sunsetAnimationState();
  lightsUpAnimationState(); // animation when the light turns on, then simulation begins
  // and player can play

  if (tradeSoundCheck === 0){
    // do nothing
  }
  else if (tradeSoundCheck === 1){
      playNPCSound();
      tradeSoundCheck = 0;
    }

  }
  else if (tradeSoundCheck ===2){ // if lantern is shut
    // play bulb burst and sparkles
    lightBuzzNoise.stop(); // the buzzing noise is stopped
    bulbBursting();
    tradeSoundCheck = 0;
  }

  }


function resetSongSwitch() { // resets songSwitch to 0
  songSwitch = 0;
}

function setAnimationState(animationStateName) {
  animationState = animationStateName;
}

function sunsetAnimationState() { // introduction animation, blue sky becomes dark and starry...
  if (animationState === `sunset`) { // if the state equals "sunset"
    songSwitch++; // the songSwitch is increased
    songSwitch = constrain(songSwitch, 0, 2); // the songSwitch is constrained between 0-2
    playSunsetSong(); // the sunset theme is played
    // sunset animation with skyAlpha and dayTimer
    skyAlpha = map(dayTimer, 310, 0, 255, 0); // map skyAlpha (255,0) goes down as dayTimer (310,0) goes down
    dayTimer--; // dayTimer goes down
    dayTimer = constrain(dayTimer, 0, 310); // constrain dayTimer
    if (dayTimer === 0) { // once the dayTimer reaches 0...
      constellationWinkSound.play(); // a chime sound to signify the twinkling stars
      dayTimer = 1; // dayTimer is reset to 1
      resetSongSwitch(); // songSwitch is reset to 0
      setAnimationState(`lightsUp`); // ... and then, no time to admire the stars, the lights go on!
    }
  }
}

  function lightsUpAnimationState() { // animation when the light turns on, then simulation begins
    // and player can play
    if (animationState === `lightsUp`) { // if state is "lightsUp"
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
//
// ## I have an animation state in simulationstate when every lamppost is off!
//
//   function lightsOutAnimationState() { // simulation when light bulb explodes. player can play. no ending
//   if (state === `lightsOut`) { // if state is "lightsOut"
//     playBGMusic(); // background music keeps playing (from "untilDone" mode)
//     lightBuzzNoise.stop(); // the buzzing noise is stopped
//     songSwitch++; // +1 to the songSwitch
//     songSwitch = constrain(songSwitch, 0, 410); // the songSwitch is constrained from 0 to 410
//     if (songSwitch === 2) { // when the song switch reaches 2
//       // (songSwitch is turned to zero when npc is interacted with)
//       bulbBursting(); // bulb bursting sound
//     }
//     lightIsOn = false; // lightIsOn switch is turned off
//   }
// }

  function playSunsetSong() { // plays sunset theme
  if (songSwitch === 1) { // if songSwitch is 1
    sunsetStarsIntro.play(0, 1, 0.2);
  }
}

function lightBuzzing() { // light buzzing sound FX
  if (lightIsOn === true) { // if lightIsOn is true
    push();
    lightBuzzNoise.playMode(`untilDone`); // buzz sound mode loop until done
    buzzVolume = map(playerDistLamp, 0, height - lampX, 0.1, 0);
    // buzz volume increases when player is closer to lamp and decreases when further
    lightBuzzNoise.setVolume(buzzVolume);
    let panning = map(player.x, 0, width, 0.6, -0.6); // (pan code from p5 reference)
    lightBuzzNoise.pan(panning);
    lightBuzzNoise.rate(1.2); // sound a little bit higher pitched
    lightBuzzNoise.play(); // play the sound
    pop();
  }
}

function playBGMusic() { // plays bg music
  push();
  bgmusic1.playMode(`untilDone`); // bg music mode loops forever
  bgmusic1.setVolume(0.88); // not too loud
  bgmusic1.rate(0.77); // not too quick
  bgmusic1.play(); // play bg music
  pop();
}

function playNPCSound() { // npc sound
  synth.play(`C5`, 1, 0, 0.2);
  synth.play(`D5`, 1, 0.25, 0.2);
  synth.play(`E5`, 1, 0.5, 0.2);
}

function bulbBursting() { // handles bulb bursting audio FX
  push();
  bulbBurstSound.setVolume(1.7); // bulb bursting soun is loud
  bulbBurstSound.play(); // play bulb bursting sound
  pop();
}

function keyPressed() {
  state.keyPressed();
}

function mouseClicked() {
  state.mouseClicked();
}
