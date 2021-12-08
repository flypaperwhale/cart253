class TextBubble {
  constructor(text){
    this.text = text;
    this.loop = true;
    this.stopTextBubble = false;
  }

  display(){
    if (this.stopTextBubble === false){
      push();
      fill(255);
      rectMode(CENTER);
      rect(300,400,320,75);
      pop();
      push();
      //textAlign(CENTER);
      fill(0);
      text(this.text, 167,390);
      pop();
    }
    else if (this.stopTextBubble === true){
      // do nothing
    }
  }

  break(){
    this.stopTextBubble = true;
  }
}
