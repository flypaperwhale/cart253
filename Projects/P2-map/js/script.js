/**
Interrupting Sky Glow
Frankie Latreille

Dolly explores the town of Sky Glow, fulfilling the needs of townsfolk
while finding ways to turn out the lights in town
so that she might see the constellations in the sky
*/

"use strict";

let streetlampImg;
let streetlampFootImg;
let stairsImg;
let treeImg;
let garbageImg;
let gazeboImg;
let gazeboBaseImg;
let fountainImg;
let fountainTopImg;
let itemImagesList = [];
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
  itemImagesList.push(streetlampImg,streetlampFootImg,stairsImg,treeImg,garbageImg,gazeboImg,gazeboBaseImg,fountainImg,fountainTopImg);
  createMapsAndStore();
  //createPlayer(230, 495); // (x,y) starting positions declared and new Player is created

  state = new TitleState(itemImagesList, mapsArray);
}

function createMapsAndStore(){
  for (let i = 0; i < mapNo; i++){
    console.log(`map no isht ${i}`);
    if (i === 0){
      map = new SkyGlowCityA(itemImagesList);
    }
    if (i === 1){
      map = new SkyGlowCityB(itemImagesList);
    }
    if (i === 2){
      map = new SkyGlowCityC(itemImagesList);
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
