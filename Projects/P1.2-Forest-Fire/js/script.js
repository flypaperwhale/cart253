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
  age:,
  type:,
  onFire:,
}

let fireScape = [];

let fire = {
  x:,
  y:,
  w:,
  h:,
  side:,
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

  initializeForest();
    createTree(); //when a tree is created during initializtion,
      treeFactory(); //loop to check that its x,y are not too close to another tree
      //if it is, assign another random x,y

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
//tree.onFire is a downwards timer, when it reaches 0, tree.type turns to `Torched`
fireState();

lightNThunder();

cloud();



}

function initializeForest(){
  console.log(`Forest is initialized`);
}
