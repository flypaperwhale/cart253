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
// sounds
let sunsetStarsIntro; // sunset introduction theme
let constellationWinkSound; // constellation wink
let lightFlickSound; // light flick
let lightBuzzNoise; // light buzz
let bulbBurstSound; // bulb burst
let bgmusic1; // background music 1
let bgmusic2; // background music 2
let bgmusic3; // background music 3
let simulationSoundsArray = []; // array holding sounds for the game
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
  // Items image files
  hamImg = loadImage("assets/images/items/ham.png");
  bigBoneImg = loadImage("assets/images/items/bigBone.png");
  slingshotImg = loadImage("assets/images/items/slingshot1.png")
  frogConstellationImg = loadImage("assets/images/items/frogConstellation.png") /// ###
  frogImg = loadImage("assets/images/items/frog2.png");
  wrenchImg = loadImage("assets/images/items/wrench.png");
  arrowConstellationImg = loadImage("assets/images/items/arrowConstellation.png") /// ###
  injunctionImg = loadImage("assets/images/items/letters.png");
  keyImg = loadImage("assets/images/items/key.png"); //####
  eagleConstellationImg = loadImage("assets/images/items/eagleConstellation.png") /// ###

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
  simulationImagesList.push( // simulationImagesList Array
    hamImg, // [0]
    bigBoneImg, // [1]
    slingshotImg, // [2]
    frogConstellationImg // [3]
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
    fountainTopImg); // [18]

    simulationSoundsArray.push( // simulationSoundsArray
      sunsetStarsIntro, // [0]
      constellationWinkSound, // [1]
      lightFlickSound, // [2]
      lightBuzzNoise, // [3]
      bulbBurstSound, // [4]
      bgmusic1); // [5]

  createMapsAndStore(); // inputs map files into the program to be stored in simulationMapsArray

  userStartAudio();

  state = new TitleState(simulationImagesList, mapsArray); // initial state is TitleState
  // other states are SimulationState and EndingState
}

function createMapsAndStore(){
  for (let i = 0; i < mapNo; i++){
    console.log(`map no isht ${i}`);
    if (i === 0){
      map = new SkyGlowCityA(simulationImagesList); // Map A, full left
    }
    if (i === 1){
      map = new SkyGlowCityB(simulationImagesList); // Map B, middle
    }
    if (i === 2){
      map = new SkyGlowCityC(simulationImagesList); // Map C, full right
    }
    mapsArray.push(map);
  }

}

/**
Description of draw()
*/
function draw() {
  state.update();
}

function keyPressed() {
  state.keyPressed();
}

function mouseClicked() {
  state.mouseClicked();
}
