class TitleState extends State {
  constructor(simulationImagesList, mapsArray, simulationSoundsArray){
    super();
    this.name = `Title State`;
  }

  update(){
    this.display();
  }

  display(){
    background(0);
    fill(255);

    push();
    textAlign(CENTER);
    text(`Welcome. Click mouse to start.`, width/2, height/2);
    pop();

  }

  keyPressed(){

  }

  mouseClicked(){
    state = new SimulationState(simulationImagesList, mapsArray, simulationSoundsArray);
  }

}
