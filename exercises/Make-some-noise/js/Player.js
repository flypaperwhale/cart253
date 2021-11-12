class Player {
  constructor(x,y) {
    this.x = x;
    this.y = y;
    this.size = 20;
    this.vx = 0;
    this.vy = 0;
    this.speed = 4;
    this.alive = true;
    this.playerCollided = false;
    this.isPaused = true;
  }

  constrain() {
    this.x = constrain(this.x,0,600);
    this.y = constrain(this.y,402,810);
  }

  handleInput() {
    if (keyIsDown(LEFT_ARROW)) {
      this.vx = -this.speed;
    }
    else if (keyIsDown(RIGHT_ARROW)) {
      this.vx = this.speed;
    }
    else {
      this.vx = 0;
    }

    if (keyIsDown(UP_ARROW)) {
      this.vy = -this.speed;
    }
    else if (keyIsDown(DOWN_ARROW)) {
      this.vy = this.speed;
    }
    else {
      this.vy = 0;
    }
  }

  move() {
    this.x += this.vx;
    this.y += this.vy;
  }

  paused() {
    this.isPaused = true;
  }

  display() {
    push();
    fill(200,50,50);
    noStroke();
    ellipse(this.x,this.y,this.size);
    pop();
  }
}
