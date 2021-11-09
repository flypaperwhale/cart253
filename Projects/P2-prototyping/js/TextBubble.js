class TextBubble {
  constructor(text){
    this.text = text;
    this.loop = true;
  }

  display(){
    console.log(`ça marche tu?`);
      push();
      fill(255);
      rectMode(CENTER);
      rect(300,400,200,75);
      pop();
      push();
      textAlign(CENTER);
      fill(0);
      text(text, 300,400);
      pop();
  }

}
