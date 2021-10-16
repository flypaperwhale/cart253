/**
Forest Fire simulation
Frankie Latreille

This is a simulation of a forest,
when it is struck by lightning a tree catches fire.
(If I can, I will make the trees grow and the fires spread)
*/

"use strict";

let bg={
  r:40,
  g:130,
  b:3,
}
let forest = [];

let tree = {
  x:0,
  y:0,
  w:0,
  h:0,
  age:0, //tree.age is an upwards timer
  type:0, //tree.type can be Fir, Pine, or Birch
  image:0, // is changed according to age, type combinations, or if Torched
  onFire:0, //tree.onFire is a downwards timer, when it reaches 0, tree.type turns to `Torched`
}

let fireScape = []; //stores in the spreading fires,

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

let cloud = {
  image:undefined,
  x:0,
  y:0,
  //....
}

let cursor = {
  image:undefined,
  width:45,
  height:45,
}

let weveGotFire;

/**
Description of preload
*/
function preload() {
  cloud.image = loadImage('assets/images/cloud.png');
  cursor.image = loadImage('assets/images/Godly-user.png');

  let firSprout = loadImage('assets/images/Fir1.png');
  let adultFir = loadImage('assets/images/Fir2.png');
  let torchedFir = loadImage('assets/images/Fir3.png');

  let fireIMG1 = loadImage('assets/images/fire1.png');
  let fireIMG2 = loadImage('assets/images/fire2.png'); // <--- FLICKER


  let thunderSFX = loadSound(`assets/sounds/THUND0.WAV`);
}


/**
Description of setup
*/
function setup() {
  createCanvas(400,400);

  noCursor();
  
  initializeForest(); //constrain the number of trees created at first
    createTree(); //when a tree is created during initializtion,
      treeFactory(); //loop to check that its x,y are not too close to another tree
      //if it is, assign another random x,y
    return false;

  //initialize cloud(); //might not need

  //initialize user(); //might not need

}


/**
Description of draw()
*/
function draw() {
background(bg.r,bg.g,bg.b);

growingForest();
  growingTrees();//go through forest array and increase every tree.age++
  //check for combinations between type + age to switch type (type name = tree type plus tree age)
    treeGrowth();//a tree with a certain type reaches a certain age, image is changed
    treeReproduction();//when certain tree types reach certain age or burn, a seed is produced
  check4Seedling();//is there a seed? commence it's aging process, from sprout, to...
    createTree(); //when a tree is created from reproduction,
      treeFactory(); //loop to check that its x,y are not too close to another tree
        //if it is, assign another random x,y
        //but have the seed fall in the vicinity of the reproducing tree

  check4Fire(); //if a fire has been declared this will become true, for fireState to turn on

//when fireState is `on`, fire is displayed
fireState();
  fireBurns();//go through forest array and tree.onFire-- every frame
  assignFire();//pushes a fire to the fireScape array and assigns in the fire.assignedTree value
  //the tree in the array of the same name that has catched fire

  fireGoesOut();//extinguishes fires when their fire.assigned tree's tree.onFire timer reaches 0

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
  console.log(`Forest is initialized`);
  return true;
}

  //Draw functions//
    //Tree functions//
      //Background forest state//
function growingForest(){
  console.log(`growing forest state`);
  return true;
}

      //monitoring trees in forest array and manipulating values//
  function growingTrees(){}

    function treeGrowth(){}

    function treeReproduction(){}

  function check4Seedling(){}

    function createTree(){}

      function treeFactory(){}

// --- //
function check4Fire(){
  //go throw forest array
  for (let t = 0; t < forest.length; t++){
    if (tree[t].onFire <= 30 && tree[t].onFire > 0){
      weveGotFire = true;
      break;
    }
    else {
      weveGotFire = false;
    }
}}

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
    function fireBurns(){}

      function fireFlicker(){
        fire.image = fire1;
      //every frame the fire changes sides, fire1, fire2, fire1, fire2
      }
      function displayFire(){
        image(fire.image,fire.x,fire.y,fire.w,fire.h);
      }

    function assignFire(){}

    function fireGoesOut(){}

    //Cloud functions//
function lightNThunder(){
  console.log(`this is lightning and thunder state`);
}

function drawUser(){
    image(cursor.image,mouseX,mouseY,cursor.width,cursor.height);
}

function drawCloud(){}
