class Player {
  constructor(x, y) {
    // feed x,y in script
    this.x = x; // player starting x
    this.y = y; // player starting y
    this.size = 20; // player size is 20
    this.vx = 0; // handled by pause or ad/arrow keys
    this.vy = 0; // handled by pause or ws/arrow keys
    this.speed = 4; // speed of 4
    this.alive = true; // always alive
    this.playerCollidedNPC = false; // switch true/false if player is in collision with npc or not
    this.isPaused = true; // player pause state switch
  }

  constrain(height, width) {
    // constrain player to the ground
    this.x = constrain(this.x, 0, width);
    this.y = constrain(this.y, 452, height);
  }

  handleInput() {
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

  move() {
    // move player
    this.x += this.vx;
    this.y += this.vy;
  }

  paused() {
    // pause player turns isPaused switch to true
    this.isPaused = true;
  }

  display() {
    // display player
    push();
    fill(200, 50, 50); // red
    noStroke();
    ellipse(this.x, this.y, this.size);
    pop();
  }

  barriers(map) {
    if (map.name === `A`) {
      this.boundaries();

      // block out
    }

    if (map.name === `B`) {
      this.boundaries();

  // block out background building
  if (this.x > 50 /*rectX*/ - 100 /*rectW*/ && this.x < 50 + 100/2
    && this.y > 472 /*rectY*/ - 90 /*rectH*/ && this.y < 447 + 70){
      if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
        this.x = this.x + 10;
    }
      if (keyIsDown(UP_ARROW) || keyIsDown(87)) {
        this.y = this.y + 10;
  }
}

// block out Dolly's building
if (this.x > 50 /*rectX*/ - 100 /*rectW*/ && this.x < 50 + 100/2
  && this.y > 675 /*rectY*/ - 235/2 /*rectH*/ && this.y < 675 + 235/2){
    if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
      this.x = this.x + 10;
  }
    if (keyIsDown(UP_ARROW) || keyIsDown(87)) {
      this.y = this.y + 10;
}
else if (keyIsDown(DOWN_ARROW) || keyIsDown(83)) {
  this.y = this.y - 10;

}

}
}

    if (map.name === `C`) {
      this.boundaries();
    }
  }

  boundaries() {
    if (this.x > 500) {
      this.x = this.x - 10;
    } // off the right side
    else if (this.x < 0) {
      this.x = this.x + 10;
    } // off the left side
    else if (this.y > 850) {
      this.y = this.y - 10;
    } // off the bottom
    else if (this.y < 500) {
      this.y = this.y + 10;
    } // off onto the sky border
    else {
      this.speed = 4;
    } // move normally
  }
}
