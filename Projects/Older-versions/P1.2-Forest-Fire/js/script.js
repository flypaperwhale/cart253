/**
Forest Fire simulation
Frankie Latreille

This is a simulation of a forest,
when it is struck by lightning a tree catches fire.
(If I can, I will make the trees grow and the fires spread)
*/

"use strict";


let state = `itializing`; // can be initializing, growingforest, thunderNLight
let parallelState = `fireWatch`; // can be fireWatch, fireBurning

//--- Creating JS objects ---//

// background values
let bg={
  r:40,
  g:130,
  b:3,
}
// cloud
let cloud = {
  image:undefined,
  x:0,
  y:0,
  //....
}
// cursor (hand)
let cursor = {
  image:undefined,
  width:45,
  height:45,
}

let fire = {
  x:0,
  y:0,
  w:0,
  h:0,
  //side:1, //2 sides for flickering effect// THIS NO GOOD //
  assignedTree:0, //fire.assignedTree value connects fires in the fireScape array to their
  //respective trees in the forest array
  image:0,
}

//--- Declaring variables ---//
let initialNumTrees=0;
let min=5;
let max=25;
let numTrees;

let forest = []; // forest array stores all the trees and their values

let adultFir;
let type;

let fireScape = []; // stores in the spreading fires,

let weveGotFire;

/**
Description of PRELOAD
*/
function preload() {
  cloud.image = loadImage('assets/images/cloud.png');
  cursor.image = loadImage('assets/images/Godly-user.png');

  let firSprout = loadImage('assets/images/Fir1.png');
  adultFir = loadImage('assets/images/Fir2.png');
  let torchedFir = loadImage('assets/images/Fir3.png');

  let fireIMG1 = loadImage('assets/images/fire1.png');
  let fireIMG2 = loadImage('assets/images/fire2.png'); // <--- FLICKER


  let thunderSFX = loadSound(`assets/sounds/THUND0.WAV`);
}

/**
Description of SETUP
*/
function setup() {
  createCanvas(600,600);
  noCursor();

  initializeForest(); //constrain the number of trees created at first

  //initialize cloud(); //might not need
  //initialize user(); //might not need
}

// this function creates tree objects to be stored in forest array
function treeFactory(x,y){
  console.log(`tree factory values x:${x}, y:${y}, type:${type}`);
  let tree = {
    x:x,
    y:y,
    w:50,
    h:60,
    age:350, //tree.age is an upwards timer
    type:`Fir`, //tree.type can be Fir, Pine, or Birch
    image: adultFir, // is changed according to age, type combinations, or if Torched
    onFire:0, //tree.onFire is a downwards timer, when it reaches 0, tree.type turns to `Torched`
  }
  console.log(`tree = ${tree.x}`);
  return tree;
}

/**
Description of DRAW()
*/
function draw() {
background(bg.r,bg.g,bg.b);

for (let i = 0; i < forest.length; i++){
  displayTrees(forest[i]);
}

growingForestState();
while (growingForestState()){
  for (let i = 0; i < forest.length; i++){

    treesGrow(forest[i]);//go through forest array and increase every tree.age++
    //check for combinations between type + age to switch type (type name = tree type plus tree age)
    check4Seed(forest[i]); //is there a seed? commence it's aging process, from sprout, to...

  }
  for (let i = 0; i < forest.length; i++){
  check4Fire(forest[i]); //if a fire has been declared this will become true, for fireState to turn on
  }
}


//when fireState is `on`, fire is displayed
fireState();
  while (fireState()){
    fireBurns(forest[i]);//go through forest array and tree.onFire-- every frame
  };

  /* SPREADING FIRE
  fireSpreads();//compare the forest array with itself
  //first check where the burning trees are x,y
  //second check if there are other trees in each tree's vicinity
  //if there are non burning trees beside a burning tree
  //at tree.onFire === 15 || === 1, the fire will spread
  //ONE of the trees in the vicinity will catch fire.
  //(if I can, some trees will catch fire more easily and take some heat off of other types)
  */

lightNThunder(); // when cloud is clicked lightNThunder state is activated
// there is a flicker of lightning
// a wav of thunder
// and a random tree is selected
// this tree is assigned to a fire pushed into the fireScape array
// the tree's tree.onFire timer is set to (aprox) 30

drawUser();

drawCloud();

}




//--- Program Functions ---//

//Setup functions//
function initializeForest(){
  initialNumTrees = random(min,max);
  console.log(`initial number of trees is ${initialNumTrees}`);
  for (let i = 0; i<initialNumTrees; i++){
    let type = `Fir`;
    forest[i]=treeFactory(random(0,width),random(0,height), type);
  }
  numTrees = forest.length;
  console.log(`Forest is initialized`);
}


//Draw functions//
//Tree functions//

//display trees
function displayTrees(tree){
  push();
  imageMode(CENTER);
  image(tree.image,tree.x,tree.y,tree.w,tree.h);
  pop();
}


//Background forest state//
function growingForestState(){
  console.log(`growing forest state`);
  return true;
}

//monitoring trees in forest array and manipulating values//
function treesGrow(tree){
    treeGrowth(tree);
  }

//increase tree's age by 1 every frame
function treeGrowth(tree){
  tree.age++;
  //treeAction(tree); //a tree with a certain type reaches a certain age, image is changed
}

/*
    treeAction(){
      if (tree.type === `Fir` && tree.age === 35){
        tree.image = firSprout;
      }
      if (tree.type === `Fir` && tree.age === 250){
        tree.image = adultFir;
        treeReproduction();
      }
    }
*/

function treeReproduction(){} //when certain tree types reach certain age or burn, a seed is produced

function check4Seed(){} //finds the trees that are type seed and starts increasing their age



// --- //
function check4Fire(tree){ //going through the forest array
  if (tree.onFire <= 30 && tree.onFire > 0){
    weveGotFire = true;

  }
  else {
    weveGotFire = false;
  }
}

//Fire functions//
function fireState(){
  console.log(`we're in fire state`);
   if (weveGotFire === true){
       console.log(`we're on fire!`);
    return true;}
   else {
    return false;
      }
    }

      //monitoring fires in fireScape array with forest array tree values
      //and manipulating fire and tree values//
function fireBurns(i){
  tree.onFire--;
  assignFire();//pushes a fire to the fireScape array and assigns in the fire.assignedTree value
      //the tree in the array of the same name that has catched fire
  fireGoesOut();//extinguishes fires when their fire.assigned tree's tree.onFire timer reaches 0
    }

function fireFlicker(){ //every frame the fire changes sides, fire1, fire2, fire1, fire2
  fire.image = fire1;
}

function displayFire(){
  image(fire.image,fire.x,fire.y,fire.w,fire.h);
}

function assignFire(){}

function fireGoesOut(){
  weveGotFire = false

}

//Cloud functions//
function lightNThunder(){
  console.log(`this is lightning and thunder state`);
}

function lightningFire(){
  //set random tree.onFire to 30
}

function drawUser(){
    image(cursor.image,mouseX,mouseY,cursor.width,cursor.height);
}

function drawCloud(){}
