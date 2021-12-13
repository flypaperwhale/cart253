class NPC {
  constructor() {
    this.x = undefined;
    this.y = undefined;
    this.r = undefined;
    this.g = undefined;
    this.b = undefined;
    this.size = undefined;
    this.name = undefined;
    this.itemHeld = undefined; // item list index number
    this.desiredItem = undefined; // string with item name
    this.playerColliding = false;
    this.isTriggered = false; // when player is colliding with this and presses space becomes true
    this.tradeSucceeded = false; // when trade is successful becomes true
    this.textNo = 0; // first text to load into textBubble
    this.texts = []; // 3 texts stored in this array, before, during, and after trade
    this.map = undefined;
  }

  display() {
    // displays NPC specific ellipse (colors, size) at the correct coordinates
    push();
    fill(this.r, this.g, this.b);
    noStroke();
    ellipseMode(CENTER);
    ellipse(this.x, this.y, this.size);
    pop();
  }

  playerCollisionCheck(playerX, playerY, playerSize) {
    // check if player is colliding
    // with an NPC
    let d = dist(this.x, this.y, playerX, playerY);
    if (d < (this.size + playerSize) / 2) {
      this.playerColliding = true;
    } else {
      this.playerColliding = false;
    }
  }
}
