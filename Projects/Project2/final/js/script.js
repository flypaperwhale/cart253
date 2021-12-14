/**
Interrupt Sky Glow
Frankie Latreille
Dolly explores the town of Sky Glow, fulfilling the needs of townsfolk
while finding ways to turn out the lights in town
so that everyone may see the constellations in the sky
*/

"use strict";

// declare item images
let hamImg;
let bigBoneImg;
let slingshotImg;
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
// sounds
let bgmusic1; // background music 1
// declare simulation variables
let simulationImagesList = []; // array holding images for the games
let simulationMapsArray = []; // array holding game maps
let state = undefined; // state can be new State, substates: Title, Simulation, Ending
let mapNo = 3; // there are 3 "maps" in a triptych
let mapA; // full left
let mapB; // middle
let mapC; // full right

/**
Description of preload
*/
function preload() {
    userStartAudio();
  // Items image files
  hamImg = loadImage("assets/images/items/ham.png");
  bigBoneImg = loadImage("assets/images/items/bigBone.png");
  slingshotImg = loadImage("assets/images/items/slingshot1.png");
  frogConstellationImg = loadImage("assets/images/items/frogConstellation.png");
  frogImg = loadImage("assets/images/items/frog2.png");
  wrenchImg = loadImage("assets/images/items/wrench.png");
  arrowConstellationImg = loadImage(
    "assets/images/items/arrowConstellation.png"
  );
  injunctionImg = loadImage("assets/images/items/letters.png");
  keyImg = loadImage("assets/images/items/key.png");
  eagleConstellationImg = loadImage(
    "assets/images/items/eagleConstellation.png"
  );
  emptyImg = loadImage("assets/images/empty.png");
  // decor image files
  streetlampImg = loadImage("assets/images/lamp.png");
  streetlampFootImg = loadImage("assets/images/lampFoot.png");
  stairsImg = loadImage("assets/images/stairs.png");
  treeImg = loadImage("assets/images/tree.png");
  garbageImg = loadImage("assets/images/garbage.png");
  gazeboImg = loadImage("assets/images/gazebo2.png");
  gazeboBaseImg = loadImage("assets/images/gazeboBase.png");
  fountainImg = loadImage("assets/images/fountain.png");
  fountainTopImg = loadImage("assets/images/fountainTop.png");
  galaxyImg = loadImage("assets/images/starnight2.png");
  // sounds
  bgmusic1 = loadSound("assets/sounds/Bossa-nova-beat-music-loop.wav");
}

/**
Description of setup : create arrays to be used in the simulation
Image list, NPC list, and start audio for BG Music
and create the state to launch the simulation
*/
function setup() {
  createCanvas(500, 1000);

  simulationImagesList.push(
    // simulationImagesList Array
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
    galaxyImg
  ); // [20]

  createMapsAndStore(); // inputs map files into the program to be stored in simulationMapsArray


  state = new TitleState(
    simulationImagesList,
    simulationMapsArray,
  ); // initial state is TitleState
  // other states are SimulationState and EndingState
}

function createMapsAndStore() {
  for (let i = 0; i < mapNo; i++) {
    if (i === 0) {
      map = new SkyGlowCityA(simulationImagesList); // Map A, full left
    }
    if (i === 1) {
      map = new SkyGlowCityB(simulationImagesList); // Map B, middle
    }
    if (i === 2) {
      map = new SkyGlowCityC(simulationImagesList); // Map C, full right
    }
    simulationMapsArray.push(map);
  }
}

function draw() {
  state.update(); // updates state every frame

  if (state.name === `SimulationState`) {
    // during simulation
    playBGMusic(); // the backgroung music is playing
  }
}

function playBGMusic() {
  // plays bg music
  push();
  bgmusic1.playMode(`untilDone`); // bg music mode loops forever
  bgmusic1.setVolume(0.88); // not too loud
  bgmusic1.rate(0.77); // not too quick
  bgmusic1.play(); // play bg music
  pop();
}

function keyPressed() {
  state.keyPressed();
}

function mouseClicked() {
  state.mouseClicked();
}
