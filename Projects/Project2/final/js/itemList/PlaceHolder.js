class PlaceHolder extends Item {
  constructor(image){
    super();
      this.name = `Place Holder`;
      this.x = undefined;
      this.y = undefined;
      this.width = 30;
      this.height = 20;
      this.image = image;
      this.isOnMap = false; // always false
      this.map = undefined;
      this.playerColliding = undefined;
    }

    display() {
      // x,y for whether item is displayed on map or in inventory
      super.display();
    }

    playerCollisionCheck(playerX,playerY,playerSize) {
      super.playerCollisionCheck(playerX,playerY,playerSize);
  }

  }
