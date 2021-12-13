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
    this.isPaused = false; // player pause state switch
    this.wallCollision = false;
    this.thresholdCollision = false;
    this.tradeHappens = false; // player/NPC item trade switch
  this.itemToAddToInventory = undefined; // item label to create item and push in inventory
  this.itemPickingLevel = 0; // 0 = false,1 = true, 3 =void
  }

  display() {
    // display player
    push();
    fill(200, 50, 50); // red
    noStroke();
    ellipse(this.x, this.y, this.size);
    pop();
  }

  handleInput() { // handles player input to make player avatar move

    if (this.wallCollision === true) { // if player is colliding with a barrier
      // do not handle input!
    } else if (this.wallCollision === false) { // if player is not colliding with a barrier
      this.speed = 2.5; // speed is normal

      // handle keys for moving player avatar (code from https://github.com/pippinbarr/cc/tree/main/1/activities/inheritance-activity)
      if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) { // or a
        this.vx = -this.speed;
      } else if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) { // or d
        this.vx = this.speed;
      } else {
        this.vx = 0;
      }

      if (keyIsDown(UP_ARROW) || keyIsDown(87)) { // or w
        this.vy = -this.speed;
      } else if (keyIsDown(DOWN_ARROW) || keyIsDown(83)) { // or s
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

  displayInventory() { // display item in inventory over player avatar
    for (let i = 0; i < this.inventory.length; i++) { // look through inventory
  push();
  imageMode(CENTER);
  image(this.inventory[i].image, this.x + 3, this.y - 20, this.inventory[i].width, this.inventory[i].height);
  pop();
  }}

  // checkPlayerInventory(npcDesiredItem) {
  //   // looks through player inventory array. Is called when interacting with NPCs
  //   for (let i = 0; i < this.inventory.length; i++) {
  //     this.checkedItem = this.inventory[i]; // variable this.checkedItem stores
  //     // the current item being manipulated in the inventory
  //   }
  // } ##

  checkTrade(npc, npcDesiredItem, npcHoldingItem) {
  // verifies what item npc desires
  // Go through Player inventory array
  // if item is in Player inv. array, item is removed from array and
  // Holding Item is pushed into the inventory array
  for (let i = 0; i < this.inventory.length; i++) {
    this.checkedItem = this.inventory[i];
if (this.checkedItem.name === undefined){ // when undefined === undefined strange things happen
// so I made it do nothing
}
    else if (this.checkedItem.name === npcDesiredItem) { // if the item in the inventory's name
      // is the same as the name stored in npc's desiredItem trade is executed
      this.tradeHappens = true; // player class knows the trade has happened
      npc.tradeSucceeded = true; // the npc knows the trade has happened
      this.itemToAddToInventory = npcHoldingItem; // item label for item the npc is holding
      // is stored in player class itemToAddToInventory. In simulation, this item label
      // will serve to call the correct item to push into the player inventory
  }
}
}

  barriers(map) { // implement game barriers onto the player

    if (map.name === `A`) { // barriers for map A
      this.boundaries(map); // window boundaries and sky border
      this.blockDollyBuildingMapA();
      this.blockBackBuildingMapA();
      this.blockAlleyMapA();
      this.blockFrontBuildingMapA();
      this.blockCityHallMapA();
    }

    if (map.name === `B`) { // barriers for map B
      this.boundaries(map); // window boundaries and sky border
      this.blockBackBuildingMapB();
      this.blockDollyBuildingMapB();
      this.blockShopMapB();
      this.blockTreesMapB();
    }

    if (map.name === `C`) { // barriers for map C
      this.boundaries(map); // window boundaries and sky border
      this.blockShopMapC();
      this.blockGazeboMapC();
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
      this.x > 35 - 70 / 2 &&
      this.x < 35 + 70 / 2 &&
      this.y > 450 - 125 / 2 &&
      this.y < 450 + 125 / 2
    ) {
      this.wallCollision = true;
      this.vx = this.vx * -1;
      this.vy = this.vy * -1;

      if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
        this.x = this.x + 15;
      }
      if (keyIsDown(UP_ARROW) || keyIsDown(87)) {
        this.y = this.y + 15;
      }
    } else {
      this.wallCollision = false;
    }
  }

  blockAlleyMapA() {
    // block out background building
    if (
      this.x > 15 - 30 / 2 &&
      this.x < 15 + 30 / 2 &&
      this.y > 550 - 100 / 2 &&
      this.y < 550 + 100 / 2
    ) {
      this.wallCollision = true;
      this.vx = this.vx * -1;
      this.vy = this.vy * -1;

      if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
        this.x = this.x + 15;
      }
    } else {
      this.wallCollision = false;
    }
  }

  blockFrontBuildingMapA() {
    // block out background building
    if (
      this.x > 50 - 110 / 2 &&
      this.x < 50 + 110 / 2 &&
      this.y > 700 - 215 / 2 &&
      this.y < 700 + 215 / 2
    ) {
      this.wallCollision = true;
      this.vx = this.vx * -1;
      this.vy = this.vy * -1;

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
      this.wallCollision = false;
    }
  }

  blockCityHallMapA() {
    // block out background building
    //Top//
    if (
      this.x > 260  - 180 / 2 - 5 && // coming in left (right arrow)
      this.x < 260 + 180 / 2 + 5 && // coming in right (left arrow)
      this.y > 672  - 180 + 30  && // coming from down (up arrow)
      this.y < 672 - 122 // coming from up (down arrow)
    ) {
      this.wallCollision = true;
      this.vx = this.vx * -1;
      this.vy = this.vy * -1;

      if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
        this.x = this.x + 15;
=      }
        if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
            this.x = this.x - 15;
        }
      if (keyIsDown(UP_ARROW) || keyIsDown(87)) {
        this.y = this.y + 15;
      }
      if (keyIsDown(DOWN_ARROW) || keyIsDown(83)) {
          this.y = this.y - 15;
        }
    }
//Bottom//
    if (
      this.x > 260  - 180 / 2  && // coming in left (right arrow)
      this.x < 260 + 180 / 2 + 5 && // coming in right (left arrow)
      this.y > 672 - 92  && // coming from down (up arrow)
      this.y < 672 + 180 / 2 - 50 // coming from up (down arrow)
    ) {
      this.wallCollision = true;
      this.vx = this.vx * -1;
      this.vy = this.vy * -1;

      if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
        this.x = this.x + 15;
      }
        if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
            this.x = this.x - 15;
        }
      if (keyIsDown(UP_ARROW) || keyIsDown(87)) {
        this.y = this.y + 15;
      }
    if (keyIsDown(DOWN_ARROW) || keyIsDown(83)) {
        this.y = this.y - 15;
      }
    } else {
      this.wallCollision = false;
    }
    //left side//
        if (
          this.x > 175  - 15  &&
          this.x < 175 + 15 &&
          this.y > 672  - 180 + 35  && // coming from down (up arrow)
          this.y < 672 + 180 / 2 - 50 // coming from up (down arrow)
        ) {
          this.wallCollision = true;
          this.vx = this.vx * -1;
          this.vy = this.vy * -1;

          if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
            this.x = this.x + 20;
            this.speed = 0;
          }
          if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
            this.x = this.x - 10;
            this.speed = 0;
        } else {
          this.wallCollision = false;
        }
      }
  }

  blockDollyBuildingMapA() {
    // block out background building
    // Top //
    if (
      this.x > 450  - 100 / 2  && //(right arrow)
      this.x < 450 + 100 / 2 - 5 && // (left arrow)
      this.y > 675  - 235 / 2  && // (up arrow)
      this.y < 675 - 235 / 3 // (down arrow)
    ) {
      this.wallCollision = true;
      this.vx = this.vx * -1;
      this.vy = this.vy * -1;

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
      this.wallCollision = false;
    }
// Bottom //
    if (
      this.x > 450  - 100 / 2  &&
      this.x < 450 + 100 / 2 - 10 &&
      this.y > 675  - 50  &&
      this.y < 675 + 235 / 2
    ) {
      this.wallCollision = true;
      this.vx = this.vx * -1;
      this.vy = this.vy * -1;

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
      this.wallCollision = false;
    }
//left side//
    if (
      this.x > 400  - 15  &&
      this.x < 400 + 15 &&
      this.y > 675  - 235 / 2  &&
      this.y < 675 + 235 / 2
    ) {
      this.wallCollision = true;
      this.vx = this.vx * -1;
      this.vy = this.vy * -1;

      if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
        this.x = this.x + 20;
        this.speed = 0;
      }
      if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
        this.x = this.x - 10;
        this.speed = 0;
    } else {
      this.wallCollision = false;
    }
  }
}
  // END OF MAP A WALLS //

  // MAP B WALLS //
  blockDollyBuildingMapB() {
    // block out Dolly's building
    // Top part
    if (
      this.x > 50  - 100  &&
      this.x < 50 + 100 / 2 &&
      this.y > 675  - 235 / 2  &&
      this.y < 675 - 235 / 3
    ) {
      this.wallCollision = true;
      this.vx = this.vx * -1;
      this.vy = this.vy * -1;

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
    // Bottom part //
    else if (
      this.x > 50  - 100  &&
      this.x < 50 + 100 / 2 &&
      this.y > 675 - 50   &&
      this.y < 675 + 235 / 2
    ) {
      this.wallCollision = true;
      this.vx = this.vx * -1;
      this.vy = this.vy * -1;

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
      this.wallCollision = false;
    }
  }

  blockBackBuildingMapB() {
    // block out background building
    if (
      this.x > 50  - 100  &&
      this.x < 50 + 100 / 2 &&
      this.y > 472  - 90  &&
      this.y < 447 + 70
    ) {
      this.wallCollision = true;
      this.vx = this.vx * -1;
      this.vy = this.vy * -1;

      if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
        this.x = this.x + 15;
        this.speed = 0;
      }
      if (keyIsDown(UP_ARROW) || keyIsDown(87)) {
        this.y = this.y + 15;
        this.speed = 0;
      }
    } else {
      this.wallCollision = false;
    }
  }

  blockShopMapB() {
    // block out Shop
    if (
      this.x > 425  - 150 / 2  &&
      this.x < 425 + 150 / 2 &&
      this.y > 715  - 100 / 2  &&
      this.y < 715 + 100 / 2
    ) {
      this.wallCollision = true;
      this.vx = this.vx * -1;
      this.vy = this.vy * -1;

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
      this.wallCollision = false;
    }
  }

  blockTreesMapB() {
    // block out trees - 1 tree
    if (
      this.x > 400  - 28  &&
      this.x < 400 + 45 &&
      this.y > 540   &&
      this.y < 540 + 60
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
      this.wallCollision = false;
    }
  }
  // END MAP B WALLS //

  // MAP C WALLS //
  blockShopMapC() {
    // block out Shop
    if (
      this.x > 50  - 100 / 2  &&
      this.x < 50 + 100 / 2 &&
      this.y > 725  - 80 / 2  &&
      this.y < 725 + 80 / 2
    ) {
      this.wallCollision = true;
      this.vx = this.vx * -1;
      this.vy = this.vy * -1;

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
      this.wallCollision = false;
    }
  }

  blockTreesMapC() {
    // block out trees
    // 3 trees
    if (
      (this.x > 270  - 28  &&
      this.x < 270 + 45 &&
      this.y > 500   &&
        this.y < 500 + 60) ||
      (this.x > 245  - 28  &&
      this.x < 245 + 45 &&
      this.y > 655   &&
        this.y < 655 + 60) ||
      (this.x > 288  - 28  &&
      this.x < 288 + 45 &&
      this.y > 682   &&
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
      this.wallCollision = false;
    }
  }
  // END MAP C WALLS //
}
