class TextBubble {
  constructor(text) {
    this.text = text; // text displayed by the bubble
    this.stopTextBubble = false; // when this is true bubble is ended
  }

  display() {
    if (this.stopTextBubble === false) { // bubble is up
      push();
      fill(255);
      rectMode(CENTER);
      rect(300, 400, 320, 75);
      pop();
      push();
      fill(0);
      text(this.text, 167, 390);
      pop();
    } else if (this.stopTextBubble === true) { // bubble is ended
      // do nothing
    }
  }

  break() {
    this.stopTextBubble = true; // stops the bubble
  }
}
