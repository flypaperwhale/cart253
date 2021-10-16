/**
Forest Fire simulation
Frankie Latreille

This is a simulation of a forest,
when it is struck by lightning a tree catches fire.
(If I can, I will make the trees grow and the fires spread)
*/

"use strict";
let forest = [];

let tree = {
  x:,
  y:,
  w:,
  h:,
  age:, //tree.age is an upwards timer
  type:, //tree.type can be Fir, Pine, or Birch
  image:, // is changed according to age, type combinations, or if Torched
  onFire:, //tree.onFire is a downwards timer, when it reaches 0, tree.type turns to `Torched`
}

let fireScape = []; //stores in the spreading fires,

let fire = {
  x:,
  y:,
  w:,
  h:,
  side:, //2 sides for flickering effect
  assignedTree:, //fire.assignedTree value connects fires in the fireScape array to their
  //respective trees in the forest array
}

let cloud = {
  x:,
  y:,
  //....
}

/**
Description of preload
*/
function preload() {

}


/**
Description of setup
*/
function setup() {
  createCanvas(400,400);

  initializeForest(); //constrain the number of trees created at first
    createTree(); //when a tree is created during initializtion,
      treeFactory(); //loop to check that its x,y are not too close to another tree
      //if it is, assign another random x,y

  initialize cloud();

  initialize user();

}


/**
Description of draw()
*/
function draw() {
background(bg.r,bg.g,bg.b);

growingForest();
  growingTrees();//go through forest array and increase every tree.age++
  //check for combinations between type + age to switch type (type name = tree type plus tree age)
  treeReproduction();//when certain tree types reach certain age or burn, a seed is produced
  check4Seedling();//is there a seed? commence it's aging process, from sprout, to...
    createTree(); //when a tree is created from reproduction,
      treeFactory(); //loop to check that its x,y are not too close to another tree
        //if it is, assign another random x,y
        //but have the seed fall in the vicinity of the reproducing tree

//when fireState is `on`, fire is displayed
fireState();
  fireBurns();//go through forest array and tree.onFire-- every frame
  assignFire();//pushes a fire to the fireScape array and assigns in the fire.assignedTree value
  //the tree in the array of the same name that has catched fire
  fireGoesOut();//extinguishes fires when their fire.assigned tree's tree.onFire timer reaches 0

  fireSpreads();//compare the forest array with itself
  //first check where the burning trees are x,y
  //second check if there are other trees in each tree's vicinity
  //if there are non burning trees beside a burning tree
  //at tree.onFire === 15 || === 1, the fire will spread
  //ONE of the trees in the vicinity will catch fire.
  //(if I can, some trees will catch fire more easily and take some heat off of other types)

lightNThunder(); // when cloud is clicked lightNThunder state is activated
// there is a flicker of lightning
// a wav of thunder
// and a random tree is selected
// this tree is assigned to a fire pushed into the fireScape array
// the tree's tree.onFire timer is set to (aprox) 30

cloud();



}

function initializeForest(){
  console.log(`Forest is initialized`);
}
