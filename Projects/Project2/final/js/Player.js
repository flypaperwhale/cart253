class Player {
  constructor(x, y, placeHolder) {
    // feed x,y in Simulation state
    this.x = x; // player starting x
    this.y = y; // player starting y
    this.vx = 0; // handled by pause or ad/arrow keys
    this.vy = 0; // handled by pause or ws/arrow keys
    this.speed = 2.5; // speed of 4
    this.size = 20; // player size is 20
    this.inventory = [placeHolder];
    this.isCollided = false; // switch true when player is in collision with npc or item

    this.alive = true; // always alive
    //this.playerCollidedNPC = false; // switch true/false if player is in collision with npc or not
    this.isPaused = false; // player pause state switch
    this.wallCollision = false;
    this.thresholdCollision = false;

    this.tradeHappens = false; // player/NPC item trade switch
  this.itemToAddToInventory = undefined; // item label to create item and push in inventory ###
  this.itemPickingLevel = 0; // 0 = false,1 = true, 3 =void

  this.stairsAreClosed = true;
  }

  display() {
    // display player
    push();
    fill(200, 50, 50); // red
    noStroke();
    ellipse(this.x, this.y, this.size);
    pop();
  }

  handleInput() {
    if (this.wallCollision === true) {
      //do not handle input!
    } else if (this.wallCollision === false) {
      this.speed = 2.5;
      // handle keys for moving player avatar (code from https://github.com/pippinbarr/cc/tree/main/1/activities/inheritance-activity)
      if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
        this.vx = -this.speed;
      } else if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
        this.vx = this.speed;
      } else {
        this.vx = 0;
      }

      if (keyIsDown(UP_ARROW) || keyIsDown(87)) {
        this.vy = -this.speed;
      } else if (keyIsDown(DOWN_ARROW) || keyIsDown(83)) {
        this.vy = this.speed;
      } else {
        this.vy = 0;
      }
    }
  }

  move() {
    // move player
    this.x += this.vx;
    this.y += this.vy;
  }

  paused() {
    // pause player turns isPaused switch to true
    this.isPaused = true;
  }

  displayInventory() { // CODE A DISPLAY INVENTORY THINGY
    // push();
    // fill(255);
    // rectMode(CENTER);
    // rect(300,400,320,75);
    // pop();
    // push();
    for (let i = 0; i < this.inventory.length; i++) {
  console.log(this.inventory[i].name);
  push();
  imageMode(CENTER);
  image(this.inventory[i].image, this.x + 3, this.y - 20, this.inventory[i].width, this.inventory[i].height); // hard numbers
  pop();
    // for (let i = 0; i < this.inventory.length; i++) {
    //   console.log(`Item ${[i]} in inv. : ${this.inventory[i]}`);
    // }
    console.log(this.inventory);
  }}

  checkPlayerInventory(npcDesiredItem) {
    // looks through player inventory array. Is called when interacting with NPCs
    for (let i = 0; i < this.inventory.length; i++) {
      this.checkedItem = this.inventory[i];

      // is checked item desired item?
    }
  }

  checkTrade(npc, npcDesiredItem, npcHoldingItem) {
  // verifies what item npc desires
  // Go through Player inventory array
  // if item is in Player inv. array, item is removed from array and
  // Holding Item is pushed into the inventory array
  for (let i = 0; i < this.inventory.length; i++) {
    //console.log(`current item checked in inventory ${this.inventory[i].name}
      //and npcdesires ${npcDesiredItem}`);
    this.checkedItem = this.inventory[i];
    //console.log(`repeat item checked in inventory ${this.checkedItem.name}`);

//console.log(`thischeckeditemname is and npcdesire ${this.checkedItem.name} ${npcDesiredItem}`);
if (this.checkedItem.name === undefined){
// do nothing
}
    else if (this.checkedItem.name === npcDesiredItem) { // && undefined !== undefined I put undefineds so Pimlico would not come in here

      //this.methodSwitch=1;
      //if (this.methodSwtich === 1){
        console.log(`we're not coming here anymore`)

      //splice removeFromPlayerInventory(this.inventory[i])
      this.tradeHappens = true;
      npc.tradeSucceeded = true;
      console.log(`npc trade success? ${npc.tradeSucceeded} with ${npc}`)
      this.itemToAddToInventory = npcHoldingItem;
      console.log(`${npcHoldingItem}`);

      //this.methodSwitch =0;
    //}
  }
}
}

  barriers(map) {
    if (map.name === `A`) {
      this.boundaries(map);
      this.blockDollyBuildingMapA();
      this.blockBackBuildingMapA();
      this.blockAlleyMapA();
      this.blockFrontBuildingMapA();
      this.blockCityHallMapA();

      //this.blockMapAStairs();

      if(this.stairsAreClosed === true){
      }

      // block out
    }

    if (map.name === `B`) {
      this.boundaries(map);
      this.blockBackBuildingMapB();
      this.blockDollyBuildingMapB();
      this.blockShopMapB();
      this.blockTreesMapB();
    }

    if (map.name === `C`) {
      this.boundaries(map);
      this.blockShopMapC();
      this.blockGazeboMapC(); // might drop like stairs... ###
      this.blockTreesMapC();
    }
  }

  boundaries(map) {
    if (this.x > 500 - 5) { // off the right side
      this.x = this.x - 10;
      if (map.name === `A` || map.name === `B`){
        this.thresholdCollision = true;
      }
    }
    else if (this.x < 0 + 5) { // off the left side
      this.x = this.x + 10;
      if (map.name === `B` || map.name === `C`){
        this.thresholdCollision = true;
      }
    }
    else if (this.y > 850) { // off the bottom
      this.y = this.y - 10;
    }
    else if (this.y < 500) { // off onto the sky border
      this.y = this.y + 10;
    }
    else {

      this.speed = 3; // move normally
    }
  }

  // MAP A WALLS //


  blockBackBuildingMapA() {
    // block out background building
    if (
      this.x > 35 /*rectX*/ - 70 / 2 /*rectW*/ &&
      this.x < 35 + 70 / 2 &&
      this.y > 450 /*rectY*/ - 125 / 2 /*rectH*/ &&
      this.y < 450 + 125 / 2
    ) {
      this.wallCollision = true;
      this.vx = this.vx * -1;
      this.vy = this.vy * -1;

      //this.speed = this.speed*-1;
      if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
        this.x = this.x + 15;

      }
      if (keyIsDown(UP_ARROW) || keyIsDown(87)) {
        this.y = this.y + 15;

      }
    } else {
      //this.speed = 3;
      this.wallCollision = false;
    }
  }

  blockAlleyMapA() {
    // block out background building
    if (
      this.x > 15 /*rectX*/ - 30 / 2 /*rectW*/ &&
      this.x < 15 + 30 / 2 &&
      this.y > 550 /*rectY*/ - 100 / 2 /*rectH*/ &&
      this.y < 550 + 100 / 2
    ) {
      this.wallCollision = true;
      this.vx = this.vx * -1;
      this.vy = this.vy * -1;

      //this.speed = this.speed*-1;
      if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
        this.x = this.x + 15;

      }

    } else {
      //this.speed = 3;
      this.wallCollision = false;
    }
  }

  blockFrontBuildingMapA() {
    // block out background building
    if (
      this.x > 50 /*rectX*/ - 110 / 2 /*rectW*/ &&
      this.x < 50 + 110 / 2 &&
      this.y > 700 /*rectY*/ - 215 / 2 /*rectH*/ &&
      this.y < 700 + 215 / 2
    ) {
      this.wallCollision = true;
      this.vx = this.vx * -1;
      this.vy = this.vy * -1;

      //this.speed = this.speed*-1;
      if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
        this.x = this.x + 15;

      }
      if (keyIsDown(UP_ARROW) || keyIsDown(87)) {
        this.y = this.y + 15;

      }
      if (keyIsDown(DOWN_ARROW) || keyIsDown(83)) {
        this.y = this.y - 15;

      }
    } else {
    //  this.speed = 3;
      this.wallCollision = false;
    }
  }

  blockCityHallMapA() {  // ### THIS IS MY STANDARD ###
    // block out background building
    //Top//
    if (
      this.x > 260 /*rectX*/ - 180 / 2 - 5/*rectW*/ && // coming in left (right arrow)
      this.x < 260 + 180 / 2 + 5 && // coming in right (left arrow)
      this.y > 672 /*rectY*/ - 180 + 30 /*rectH*/ && // coming from down (up arrow)
      this.y < 672 - 122 // coming from up (down arrow)
    ) {
      this.wallCollision = true;
      this.vx = this.vx * -1;
      this.vy = this.vy * -1;

      if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
        this.x = this.x + 15;
        //this.speed = 0;
      }
        if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
            this.x = this.x - 15;
          //  this.speed = 0;
        }
      if (keyIsDown(UP_ARROW) || keyIsDown(87)) {

        this.y = this.y + 15;
      //  this.speed = 0;
      }
      if (keyIsDown(DOWN_ARROW) || keyIsDown(83)) {
          this.y = this.y - 15;
        }
    }

//Bottom
    if (
      this.x > 260 /*rectX*/ - 180 / 2 /*rectW*/ && // coming in left (right arrow)
      this.x < 260 + 180 / 2 + 5 && // coming in right (left arrow)
      this.y > 672 /*rectY*/- 92 /*rectH*/ && // coming from down (up arrow)
      this.y < 672 + 180 / 2 - 50 // coming from up (down arrow)
    ) {
      this.wallCollision = true;
      this.vx = this.vx * -1;
      this.vy = this.vy * -1;

      if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
        this.x = this.x + 15;
        //this.speed = 0;
      }
        if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
            this.x = this.x - 15;
          //  this.speed = 0;
        }
      if (keyIsDown(UP_ARROW) || keyIsDown(87)) {

        this.y = this.y + 15;
      //  this.speed = 0;
      }

    if (keyIsDown(DOWN_ARROW) || keyIsDown(83)) {
        this.y = this.y - 15;
      }
    } else {
      this.wallCollision = false;
    }

    //left side
        if (
          this.x > 175 /*rectX*/ - 15 /*rectW*/ &&
          this.x < 175 + 15 &&
          this.y > 672 /*rectY*/ - 180 + 35 /*rectH*/ && // coming from down (up arrow)
          this.y < 672 + 180 / 2 - 50 // coming from up (down arrow)
        ) {
          this.wallCollision = true;
          this.vx = this.vx * -1;
          this.vy = this.vy * -1;

          //  this.speed = this.speed*-1;
          if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
            this.x = this.x + 20;
            this.speed = 0;

          }
          if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
            this.x = this.x - 10;
            this.speed = 0;

        } else {
        //  this.speed = 3;
          this.wallCollision = false;
        }
      }

  }


  blockDollyBuildingMapA() {
    // block out background building
    // Top
    if (
      this.x > 450 /*rectX*/ - 100 / 2 /*rectW*/ && //(right arrow)
      this.x < 450 + 100 / 2 - 5 && // (left arrow)
      this.y > 675 /*rectY*/ - 235 / 2 /*rectH*/ && // (up arrow)
      this.y < 675 - 235 / 3 // (down arrow)
    ) {
      this.wallCollision = true;
      this.vx = this.vx * -1;
      this.vy = this.vy * -1;

      //  this.speed = this.speed*-1;
      if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
        this.x = this.x + 15;
        this.speed = 0;

      }
      if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
        this.x = this.x - 15;
        this.speed = 0;

      } else if (keyIsDown(UP_ARROW) || keyIsDown(87)) {
        this.y = this.y + 15;
        this.speed = 0;

      } else if (keyIsDown(DOWN_ARROW) || keyIsDown(83)) {
        this.y = this.y - 15;
        this.speed = 0;

      }
    } else {
    //  this.speed = 3;
      this.wallCollision = false;
    }

// Bottom
    if (
      this.x > 450 /*rectX*/ - 100 / 2 /*rectW*/ &&
      this.x < 450 + 100 / 2 - 10 &&
      this.y > 675 /*rectY*/ - 50 /*rectH*/ &&
      this.y < 675 + 235 / 2
    ) {
      this.wallCollision = true;
      this.vx = this.vx * -1;
      this.vy = this.vy * -1;

      //  this.speed = this.speed*-1;
      if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
        this.x = this.x + 10;
        this.speed = 0;

      }
      if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
        this.x = this.x - 10;
        this.speed = 0;

      } else if (keyIsDown(UP_ARROW) || keyIsDown(87)) {
        this.y = this.y + 15;
        this.speed = 0;

      } else if (keyIsDown(DOWN_ARROW) || keyIsDown(83)) {
        this.y = this.y - 10;
        this.speed = 0;

      }
    } else {
    //  this.speed = 3;
      this.wallCollision = false;
    }

//left side
    if (
      this.x > 400 /*rectX*/ - 15 /*rectW*/ &&
      this.x < 400 + 15 &&
      this.y > 675 /*rectY*/ - 235 / 2 /*rectH*/ &&
      this.y < 675 + 235 / 2
    ) {
      this.wallCollision = true;
      this.vx = this.vx * -1;
      this.vy = this.vy * -1;

      //  this.speed = this.speed*-1;
      if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
        this.x = this.x + 20;
        this.speed = 0;

      }
      if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
        this.x = this.x - 10;
        this.speed = 0;

    } else {
    //  this.speed = 3;
      this.wallCollision = false;
    }
  }
}

  // END OF MAP A WALLS //

  blockDollyBuildingMapB() {
    // block out Dolly's building
    // Top part
    if (
      this.x > 50 /*rectX*/ - 100 /*rectW*/ &&
      this.x < 50 + 100 / 2 &&
      this.y > 675 /*rectY*/ - 235 / 2 /*rectH*/ &&
      this.y < 675 - 235 / 3
    ) {
      this.wallCollision = true;
      this.vx = this.vx * -1;
      this.vy = this.vy * -1;

      //  this.speed = this.speed*-1;
      if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
        this.x = this.x + 15;
        this.speed = 0;
      }
      if (keyIsDown(UP_ARROW) || keyIsDown(87)) {
        this.y = this.y + 15;
        this.speed = 0;
      } else if (keyIsDown(DOWN_ARROW) || keyIsDown(83)) {
        this.y = this.y - 15;
        this.speed = 0;
      }
    }
    // Bottom part
    else if (
      this.x > 50 /*rectX*/ - 100 /*rectW*/ &&
      this.x < 50 + 100 / 2 &&
      this.y > 675 - 50 /*rectY*/ /*rectH*/ &&
      this.y < 675 + 235 / 2
    ) {
      this.wallCollision = true;
      this.vx = this.vx * -1;
      this.vy = this.vy * -1;

      //  this.speed = this.speed*-1;
      if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
        this.x = this.x + 15;
        this.speed = 0;

      }
      if (keyIsDown(UP_ARROW) || keyIsDown(87)) {
        this.y = this.y + 15;
        this.speed = 0;

      } else if (keyIsDown(DOWN_ARROW) || keyIsDown(83)) {
        this.y = this.y - 20;
        this.speed = 0;

      }
    } else {
    //  this.speed = 3;
      this.wallCollision = false;
    }
  }

  // MAP B WALLS //
  blockBackBuildingMapB() {
    // block out background building
    if (
      this.x > 50 /*rectX*/ - 100 /*rectW*/ &&
      this.x < 50 + 100 / 2 &&
      this.y > 472 /*rectY*/ - 90 /*rectH*/ &&
      this.y < 447 + 70
    ) {
      this.wallCollision = true;
      this.vx = this.vx * -1;
      this.vy = this.vy * -1;

      //  this.speed = this.speed*-1;
      if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
        this.x = this.x + 15;
        this.speed = 0;

      }
      if (keyIsDown(UP_ARROW) || keyIsDown(87)) {
        this.y = this.y + 15;
        this.speed = 0;

      }
    } else {
    //  this.speed = 3;
      this.wallCollision = false;
    }
  }

  blockShopMapB() {
    // block out Shop
    if (
      this.x > 425 /*rectX*/ - 150 / 2 /*rectW*/ &&
      this.x < 425 + 150 / 2 &&
      this.y > 715 /*rectY*/ - 100 / 2 /*rectH*/ &&
      this.y < 715 + 100 / 2
    ) {
      this.wallCollision = true;
      this.vx = this.vx * -1;
      this.vy = this.vy * -1;

      //this.speed = this.speed*-1;
      if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
        this.x = this.x - 15;
        this.speed = 0;

      }
      if (keyIsDown(UP_ARROW) || keyIsDown(87)) {
        this.y = this.y + 15;
        this.speed = 0;

      } else if (keyIsDown(DOWN_ARROW) || keyIsDown(83)) {
        this.y = this.y - 15;
        this.speed = 0;

      }
    } else {
    //  this.speed = 3;
      this.wallCollision = false;
    }
  }

  blockTreesMapB() {
    // block out trees
    if (
      this.x > 400 /*rectX*/ - 28 /*rectW*/ &&
      this.x < 400 + 45 &&
      this.y > 540 /*rectY*/ /*rectH*/ &&
      this.y < 540 + 60
    ) {
      this.wallCollision = true;
      this.vx = this.vx * -1;
      this.vy = this.vy * -1;

      //this.speed = this.speed*-1;
      if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
        this.x = this.x - 15;
        this.speed = 0;

      }
      if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
        this.x = this.x + 15;
        this.speed = 0;

      }
      if (keyIsDown(UP_ARROW) || keyIsDown(87)) {
        this.y = this.y + 15;
        this.speed = 0;

      } else if (keyIsDown(DOWN_ARROW) || keyIsDown(83)) {
        this.y = this.y - 15;
        this.speed = 0;

      }
    } else {
    //  this.speed = 3;
      this.wallCollision = false;
    }
  }
  // END MAP B WALLS //

  // MAP C WALLS //

  blockShopMapC() {
    // block out Shop
    if (
      this.x > 50 /*rectX*/ - 100 / 2 /*rectW*/ &&
      this.x < 50 + 100 / 2 &&
      this.y > 725 /*rectY*/ - 80 / 2 /*rectH*/ &&
      this.y < 725 + 80 / 2
    ) {
      this.wallCollision = true;
      this.vx = this.vx * -1;
      this.vy = this.vy * -1;

      //this.speed = this.speed*-1;
      if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
        this.x = this.x + 15;
        this.speed = 0;

      }
      if (keyIsDown(UP_ARROW) || keyIsDown(87)) {
        this.y = this.y + 15;
        this.speed = 0;

      } else if (keyIsDown(DOWN_ARROW) || keyIsDown(83)) {
        this.y = this.y - 15;
        this.speed = 0;

      }
    } else {
    //  this.speed = 3;
      this.wallCollision = false;
    }
  }

  blockGazeboMapC() {
    // I'm going to skip this ### considering the issues
    // I'm having with walls!
  } // might drop like stairs... ###
  blockTreesMapC() {
    // block out trees
    // tree 1
    if (
      (this.x > 270 /*rectX*/ - 28 /*rectW*/ &&
      this.x < 270 + 45 &&
      this.y > 500 /*rectY*/ /*rectH*/ &&
        this.y < 500 + 60) ||
      (this.x > 245 /*rectX*/ - 28 /*rectW*/ &&
      this.x < 245 + 45 &&
      this.y > 655 /*rectY*/ /*rectH*/ &&
        this.y < 655 + 60) ||
      (this.x > 288 /*rectX*/ - 28 /*rectW*/ &&
      this.x < 288 + 45 &&
      this.y > 682 /*rectY*/ /*rectH*/ &&
        this.y < 682 + 60)
    ) {
      this.wallCollision = true;
      this.vx = this.vx * -1;
      this.vy = this.vy * -1;

      if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
        this.x = this.x - 15;
        this.speed = 0;

      }
      if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
        this.x = this.x + 15;
        this.speed = 0;

      }
      if (keyIsDown(UP_ARROW) || keyIsDown(87)) {
        this.y = this.y + 15;
        this.speed = 0;

      } else if (keyIsDown(DOWN_ARROW) || keyIsDown(83)) {
        this.y = this.y - 15;
        this.speed = 0;

      }
    } else {
    //  this.speed = 3;
      this.wallCollision = false;
    }
  }

  // END MAP C WALLS //
}
