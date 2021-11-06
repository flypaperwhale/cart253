/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
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

function mouseClicked(){
  state.mouseClicked();
}
