/**
Interrupting Sky Glow
Frankie Latreille

Dolly explores the town of Sky Glow, fulfilling the needs of townsfolk
while finding ways to turn out the lights in town
so that she might see the constellations in the sky
*/

"use strict";

let state = undefined;

/**
Description of preload
*/
function preload() {

}


/**
Description of setup
*/
function setup() {
createCanvas(600,600);

state = new TitleState;

}


/**
Description of draw()
*/
function draw() {
  state.update();



}

function keyPressed(){
  state.keyPressed();
}

function mouseClicked(){
  state.mouseClicked();
}
