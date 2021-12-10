/**
Interrupting Sky Glow
Frankie Latreille

Dolly explores the town of Sky Glow, fulfilling the needs of townsfolk
while finding ways to turn out the lights in town
so that she might see the constellations in the sky
*/

"use strict";

let slingshotImg
let hamImg;
let bigBoneImg;
let frogImg;
let wrenchImg;
let injunctionImg;
let streetlampImg;
let streetlampFootImg;
let stairsImg;
let treeImg;
let garbageImg;
let gazeboImg;
let gazeboBaseImg;
let fountainImg;
let fountainTopImg;

let simulationImagesList = [];
let mapsArray = [];
let state = undefined;
let mapNo = 3;
let mapA;
let mapB;
let mapC;

/**
Description of preload
*/
function preload() {
  // Items image files
  slingshotImg = loadImage("assets/images/items/slingshot1.png")
  hamImg = loadImage("assets/images/items/ham.png");
  bigBoneImg = loadImage("assets/images/items/bigBone.png");
  frogImg = loadImage("assets/images/items/frog2.png");
  wrenchImg = loadImage("assets/images/items/wrench.png");
  injunctionImg = loadImage("assets/images/items/letters.png");
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
}

/**
Description of setup
*/
function setup() {
  createCanvas(500, 1000);
  simulationImagesList.push(
    slingshotImg,hamImg,bigBoneImg,frogImg,wrenchImg,injunctionImg,streetlampImg,
    streetlampFootImg,stairsImg,treeImg,garbageImg,gazeboImg,gazeboBaseImg,
    fountainImg,fountainTopImg);
  createMapsAndStore();
  //createPlayer(230, 495); // (x,y) starting positions declared and new Player is created

  state = new TitleState(simulationImagesList, mapsArray);
}

function createMapsAndStore(){
  for (let i = 0; i < mapNo; i++){
    console.log(`map no isht ${i}`);
    if (i === 0){
      map = new SkyGlowCityA(simulationImagesList);
    }
    if (i === 1){
      map = new SkyGlowCityB(simulationImagesList);
    }
    if (i === 2){
      map = new SkyGlowCityC(simulationImagesList);
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
