class NPC { // 3-4 characters, the electricity box, the 3 lamp posts
  constructor(){
    x = undefined;
    y = undefined;
    name = undefined;
    image = undefined;
    npcHoldingItem = undefined;
    npcdesiredItem = undefined;
  }

  display(){
   // displays NPC specific image at the correct coordinates
  }

  // MOVE function?

  mouseClicked(){
    // conditional, if Player is colliding with NPC
    interact();
  }

  interact(){
    displayText();
    // has NPC text displayed
    // if Player has the item the NPC wants, a trade will take place
    checkNPCTrade();
  }

  checkNPCTrade(){
    // verifies what item npc desires
    // Go through Player inventory array
    // if item is in Player inv. array, item is removed from array and
    // Holding Item is pushed into the inventory array

  }
}
