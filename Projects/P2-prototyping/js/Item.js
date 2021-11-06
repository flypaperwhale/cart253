class Item (x,y,name,image){
  constructor(){
    x = undefined;
    y = undefined;
    name = undefined;
    image = undefined;
  }

  getPickedUp(){
    //check if Player is colliding. if they are, item is picked up
  }

}


// Items are to be set up in the main script
// When game is started, some every Item is created and stored somewhere
// Some are on the map and can be picked up by being walked on
// Other will be on NPCs and will be tradeable.
