class TextBubble {
  constructor(text){
    this.text = text;
    this.loop = true;
    this.stopTextBubble = false;
  }

  display(){
    //console.log(`ça marche tu?`);
    if (this.stopTextBubble === false){
      push();
      fill(255);
      rectMode(CENTER);
      rect(300,400,200,75);
      pop();
      push();
      textAlign(CENTER);
      fill(0);
      text(this.text, 300,400);
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
