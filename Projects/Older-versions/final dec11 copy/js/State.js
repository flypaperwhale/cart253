class State {
  constructor(mapsArray){
    this.name = undefined;
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
    // implement in each state

  }

  mouseClicked(){
// implement in each state
  }

}
