class TitleState extends State {
  constructor(simulationImagesList, mapsArray, simulationSoundsArray){
    super();
    this.name = `Title State`;
    this.mapsArray = mapsArray;
    this.simulationImagesList = simulationImagesList;
    this.simulationSoundsArray = simulationSoundsArray;
  }

  update(){
    this.display();

    console.log(`what is ${this.mapsArray}`)
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
    state = new SimulationState(this.simulationImagesList, this.mapsArray, this.simulationSoundsArray);
  }

}
