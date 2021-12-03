class State {
  constructor(){
    noCursor();
  }

  update(){
    // if you see this red ball, you dun messed up
    push();
    fill(100,0,0);
    ellipse(300,300,50);
    pop();
  }

  keyPressed(){
  
  }

  mouseClicked(){

  }

}
