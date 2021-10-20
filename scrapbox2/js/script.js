"use strict";

//---Declaring JS objects---//
/* trees declared in treeFactory ***
// Trees, which will be stored in the array forrest[]
let tree = {
  x:0,
  y:0,
  w:50,
  h:60,
  image: undefined,
  onFire:0, // this switch toggles the display fire function
  // and begins the downards counter until tree is torched
  counter:27,
}
*/
let bg = {
  color:{
    r:40,
    g:130,
    b:3,
  },
}

// fire, which appears at each burning tree's x,y
let fire = {
  image: undefined,
  x:0,
  y:0,
  w:45,
  h:50,
  side:1, //or side 2
  counter:50,// downwards counter for the duration of the fire animation
}

// lightning is a flashing white rectangle over canvas, when cloud clicked
let lightning = {
  x:0,
  y:0,
  color:255,
  alpha:0,
}

// cloud is animated to float over the forest
let cloud = {
  image:undefined,
  x:50,
  y:60,
  speed:2,
  vx:0,
  vy:0,
  width:65,
  height:50,
  clicked:undefined,
}

// cursor aesthetic engages the user
let cursor = {
  image:undefined,
  x:0,
  y:0,
  width:45,
  height:45,
}

//--- Declaring variables ---//
let forestSize=0; // for initializing the forest, will be random
let min=15; // minimum number of trees in the forest
let max=30; // maximum number of trees in the forest
let forest = []; // forest array stores all the trees and their values

let adultFir; // name for the image of a fir tree
let torchedFir; // name for the image of a torched fir tree

//let type; // tree type could come in useful

let fireIMG1; // fire image side 1
let fireIMG2; // fire image side 2, for the flickering effect

let thunderSFX; // sound effect of thunder

let onFire=0; // switch to turn the fire functions on

let weHaveFire=undefined;

//---Preload functions---//
// preloading images, fir tree at different stages, cloud and noCursor
// and sounds of thunder
function preload() {
  adultFir = loadImage('assets/images/Fir2.png');
  torchedFir = loadImage('assets/images/Fir3.png');
  fireIMG1 = loadImage('assets/images/fire1.png');
  fireIMG2 = loadImage('assets/images/fire2.png');
  cloud.image = loadImage('assets/images/cloud.png');
  cursor.image = loadImage('assets/images/Godly-user.png');
  thunderSFX = loadSound(`assets/sounds/THUND.WAV`);
}

//---Setup functions---//
// creating canvas, initializing the forest and the cloud
function setup(){
  createCanvas(400,400);
  frameRate(10);//this is used to control animations, for lack of a better way yet
  initializeForest();//time to create the trees to initialize the forest
  initializeCloud();//
  // remove default cursor for better immersion
  noCursor();
}

// this function creates tree objects to be stored in forest array
function treeFactory(x,y){ //x,y can be anywhere on the canvas
  console.log(`tree factory values x:${x}, y:${y}, type:`);
  let tree = {
    x:x,
    y:y,
    w:50,
    h:60,
    //age:350,// tree.age will be an upwards timer
    //type:`Fir`,// tree.type could be Fir, Pine, or Birch
    image: adultFir,// is changed according to age, type combinations, or if Torched
    onFire:0,// tree.onFire is a downwards timer, when it reaches 0, tree.type turns to `Torched`
    lifeCounter:30,
    fireCounter:31,
  }
  console.log(`tree = ${tree.x}`);
  return tree;
}

//---The draw function---//
function draw(){
  background(bg.color.r,bg.color.g,bg.color.b); // Green grassy background
  // lightFilter function creates the white rectangle, always present
  // gets flickering opacity then turned to max when there is lightNThunder
  lightFilter();

  // Go through the forrest array, check all the created trees
  for (let i = 0; i < forest.length; i++){
    displayTrees(forest[i]);// and display them
    //checkForFire(forest[i]);// and check if any of them are on fire
    displayFire(forest[i]);// display any fire
    fireOut(forest[i]); // if a fireCounter and lifeCounter run out
      // the forest disappears and the tree image becomes torched
    }

  cloudMovement();
  displayCloud();
  createCursor();

  if (cloud.clicked === true){
    lightNThunder();
    let tree = random(forest); // a random tree in forest array is selected
    console.log(`in cloudclicked after random forest ${tree.onFire}`)
    tree.fireCounter=30;
    tree.onFire = 1; // tree on fire switch is on
    console.log(`in cloudclicked after random forest ${tree.onFire}`)
    cloud.clicked=false; // return false because lightning is a click
      // and a flash
}
lightning.alpha=0;
}

//---Program functions---//

// Initialize forest function to create a random sized forest
function initializeForest(){
  // select forest size with min and max values in variable declarations
  forestSize = random(min,max);
  //trees with different x,y will be created
  //as many as the random forestSize between min and max number of trees
  for (let i = 0; i<forestSize; i++){
    forest[i]=treeFactory(random(0,width), random(0,height));
  }
}
// Initialize cloud function
function initializeCloud(){
  // intialize cloud position and velocity
  cloud.y = random(0,height);
  cloud.vx = cloud.vx + cloud.speed;
}

// white rectangle to create lightning effect when cloud clicked
function lightFilter(){
  push();
  noStroke();
  fill(lightning.color,lightning.alpha);
  rectMode(CENTER);
  rect(lightning.x,lightning.y,canvas.width,canvas.height);
  pop();
}

// Display trees function
function displayTrees(tree){
  push();
  imageMode(CENTER);
  image(tree.image,tree.x,tree.y,tree.w,tree.h);
  pop();
}

/*
function checkForFire(tree){
  console.log(`in cloudclicked after random forest ${tree.onFire}`)
  if(tree.onFire===1){
    tree.fireCounter=30;
    weHaveFire=true;
  }
  if(weHaveFire===true){
  for (let i = 0; i<forest.length; i++){

  }
    weHaveFire= true;
  }
  else if (tree.onFire===0 || weHaveFire= false;
}
*/

function displayFire(tree){
  if (tree.onFire===1){
    fireFlicker(tree); // when fire is displayed, it flickers
    push();
    imageMode(CENTER);
    image(fire.image,tree.x,tree.y,fire.w,fire.h);
    pop();
    }
  if (tree.onFire===1 && tree.fireCounter===0)
  return;
  }

function fireFlicker(tree){
  if (fire.side === 1){
    fire.image = fireIMG1;
    fire.side = 2;
    tree.lifeCounter--;
    tree.fireCounter--
  }
  else if (fire.side === 2){
    fire.image = fireIMG2;
    fire.side =1;
    tree.lifeCounter--;
    tree.fireCounter--;
  }
}

function fireOut(tree){
  if (tree.onFire===1 && tree.lifeCounter===0){
    tree.w=40;
    tree.image=torchedFir;
    tree.onFire=0;
  }
  /*if (tree.fireCounter===0){
    tree.onFire=0; // connected to the fire image...*/
    //this here is not necessary
  }

// Cloud movement //
function cloudMovement(){
  cloud.x = cloud.x + cloud.vx;
  cloud.y = cloud.y + cloud.vy;
  // cloud reapears at the left side when arriving at the right side
  if (cloud.x > width){
    cloud.x = 0;
    cloud.y = random(0,height);
  }
}

function displayCloud(){
  push();
  imageMode(CENTER);
  image(cloud.image,cloud.x,cloud.y,cloud.width,cloud.height);
  pop();
}

function createCursor(){
  cursor.x = mouseX;
  cursor.y = mouseY;
  image(cursor.image,cursor.x,cursor.y,cursor.width,cursor.height);
}

// function to check whether the mouse is over the cloud or not
function mouseOverCloud(){
  let d = dist(cursor.x, cursor.y, cloud.x, cloud.y);
  if (d < cursor.width/2 + cloud.width/2){
    return true; // mouse is over the cloud
    }
  else {
    return false // mouse is not over the cloud
    }
  }

// function that causes thunder and lightning
function mouseClicked(){
  if (mouseOverCloud()){ // mouse must be over the cloud
    // for this function to work
    cloud.clicked=true; // if user clicks on the cloud
    lightning.alpha=255;
    }
  }

/*// when mouse pressed on cloud, a random tree is selected to burn
function mousePressed(){
  if(mouseOverCloud()){
    tree = random(forest); // a random tree in forest array is selected
    console.log(`in mouse pressed after random forest ${tree.onFire}`)
    tree.onFire = 1; // tree on fire switch is on
    console.log(`in mouse pressed adter onfire forest ${tree.onFire}`)
  }
}
*/
function lightNThunder(){
    console.log(`you've made it in lightnthunder`);
    thunderSFX.play(); // thunder sound effects are played
    lightning.alpha = random(1,255); // the white rectangle's is rendered opaque
  }
  //console.log(`mouseclicked = ${mouseClicked()} and frame = ${frame} and lightning.alpha = ${lightning.alpha}`);
